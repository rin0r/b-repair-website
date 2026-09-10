import { preisDaten, type PreisZeile } from "@/lib/preisQuelle";

/* ─── TYPES ──────────────────────────────────────────────────────── */
export type Row = {
  model: string;
  display: string;
  displayPremium: string;
  rueckseite: string;
  batterie: string;
  ladebuchse: string;
  kameraglas: string;
  lautsprecher: string;
  datenrettung: string;
  kamera: string;
  isCurrent?: boolean;
  isLegacy?: boolean;
};

export type FAQ = { q: string; a: string };

export type BrandSeries = {
  label: string;
  rows: Row[];
};

export type PopularItem = {
  model: string;
  repair: string;
  price: string;    // e.g. "CHF\u00A099.–" or "Gratis" or "Auf Anfrage"
  from?: boolean;   // true → shows "ab" prefix on price
};

export type BrandConfig = {
  name: string;
  intro: string;
  series: BrandSeries[];
  hasOnRequest: boolean;
  /** true → Markenseite zeigt das Modell-Raster statt der Kurztabelle */
  hasModelPages?: boolean;
  popularItems: PopularItem[];
  faq: FAQ[];
};

/* ─── HELPERS ─────────────────────────────────────────────────── */
const chf = (v: number | null) => (v === null ? "–" : `CHF\u00A0${v.toFixed(2)}`);

const r = (
  model: string,
  display: number | null,
  displayPremium: number | null,
  rueckseite: number | null,
  batterie: number | null,
  ladebuchse: number | null,
  kameraglas: number | null,
  lautsprecher: number | null,
  datenrettung: number | null,
  kamera: number | null,
  isCurrent = false,
  isLegacy = false,
): Row => ({
  model, isCurrent, isLegacy,
  display:        chf(display),
  displayPremium: chf(displayPremium),
  rueckseite:   chf(rueckseite),
  batterie:     chf(batterie),
  ladebuchse:   chf(ladebuchse),
  kameraglas:   chf(kameraglas),
  lautsprecher: chf(lautsprecher),
  datenrettung: chf(datenrettung),
  kamera:       chf(kamera),
});

/* ─── RAW ROWS ─────────────────────────────────────────────────── */
/* ─── PREISE ───────────────────────────────────────────────────────
   Alle Preise stehen in data/preise.json – eine Zeile pro Modell.
   Diese Datei und die Preisliste lesen dieselbe Quelle, damit die
   Preise nicht auseinanderlaufen koennen. */
const ausJson = (rows: PreisZeile[]): Row[] =>
  rows.map((p) =>
    r(p.modell, p.display, p.displayPremium, p.rueckseite, p.batterie, p.ladebuchse,
      p.kameraglas, p.lautsprecher, p.datenrettung, p.kamera,
      p.aktuell ?? false, p.aelter ?? false),
  );

const iphoneRows      = ausJson(preisDaten["iphone"]);
const ipadRows        = ausJson(preisDaten["ipad"]);
const samsungSRows    = ausJson(preisDaten["samsung-s"]);
const samsungARows    = ausJson(preisDaten["samsung-a"]);
const samsungNoteRows = ausJson(preisDaten["samsung-note"]);
const pixelRows       = ausJson(preisDaten["pixel"]);

/* ─── BRAND CONFIG ─────────────────────────────────────────────── */
export const brandConfig: Record<string, BrandConfig> = {
  iphone: {
    name: "iPhone",
    intro: "Displaybruch, Akkuproblem oder Wasserschaden? Bei B-repair&service in Heimberg bekommen Sie Ihr iPhone schnell und zuverlässig repariert – oft in unter 2 Stunden. Transparente Fixpreise und 6 Monate Garantie inklusive.",
    series: [{ label: "Alle Modelle", rows: iphoneRows }],
    hasOnRequest: false,
    hasModelPages: true,
    popularItems: [
      { model: "iPhone 8",         repair: "Display Original",             price: "CHF\u00A099.–" },
      { model: "iPhone 11",        repair: "Display Original",             price: "CHF\u00A0139.–" },
      { model: "iPhone 13 Pro",    repair: "Display Original",             price: "CHF\u00A0349.–" },
      { model: "iPhone 15 Pro Max",repair: "Display Original",             price: "CHF\u00A0529.–" },
      { model: "iPhone 16 Pro Max",repair: "Display Original",             price: "CHF\u00A0499.–" },
      { model: "Alle Modelle",     repair: "Akku-Wechsel",        price: "CHF\u00A079.–",  from: true },
    ],
    faq: [
      { q: "Wie lange dauert eine iPhone-Display-Reparatur?", a: "Die meisten Display-Reparaturen sind bei uns in 30–60 Minuten erledigt. Bei OLED-Displays der Pro-Serie kann es bis zu 2 Stunden dauern. Sie warten bequem bei uns oder kommen einfach später abholen." },
      { q: "Verliere ich meine Daten bei der Reparatur?", a: "Nein. Bei Display- und Akku-Reparaturen bleiben Ihre Daten vollständig erhalten. Bei tiefgreifenderen Eingriffen empfehlen wir vorab ein iCloud-Backup – wir beraten Sie gerne." },
      { q: "Welche iPhone-Modelle reparieren Sie?", a: "Wir reparieren alle iPhone-Modelle von iPhone 6 bis zum aktuellen iPhone 17 Pro Max – sowohl ältere LCD-Modelle als auch neuste OLED-Displays." },
      { q: "Sind Ihre Ersatzteile original?", a: "Wir verwenden hochwertige, OLED-kompatible Displays und zertifizierte Ersatzteile. Auf alle Reparaturen geben wir 6 Monate Garantie – das spricht für die Qualität unserer Teile." },
      { q: "Was kostet ein iPhone-Akku-Wechsel?", a: "Je nach Modell beginnen Akku-Wechsel ab CHF 79.– bis CHF 129.–. Den genauen Preis für Ihr Modell finden Sie in der Preistabelle oben." },
      { q: "Muss ich einen Termin vereinbaren?", a: "Nein, Sie können einfach vorbeikommen. Für grössere Reparaturen empfehlen wir eine kurze Voranmeldung per WhatsApp oder Telefon, damit wir das Ersatzteil bereithalten können." },
    ],
  },
  ipad: {
    name: "iPad",
    intro: "Gebrochener iPad-Bildschirm oder schwacher Akku? B-repair&service repariert alle iPad-Generationen – von iPad 5 bis iPad Pro der neuesten Generation. Schnell, professionell und zu fairen Fixpreisen in Heimberg bei Thun.",
    series: [{ label: "Alle Modelle", rows: ipadRows }],
    hasOnRequest: false,
    hasModelPages: true,
    popularItems: [
      { model: "iPad 6",              repair: "Display Original",             price: "CHF\u00A0129.–" },
      { model: "iPad Air (3. Gen)",   repair: "Display Original",             price: "CHF\u00A0229.–" },
      { model: "iPad Pro 11\"",       repair: "Display Original",             price: "CHF\u00A0279.–", from: true },
      { model: "iPad Pro 12.9\"",     repair: "Display Original",             price: "CHF\u00A0269.–", from: true },
      { model: "Alle Modelle",        repair: "Akku-Wechsel",        price: "CHF\u00A099.–",  from: true },
    ],
    faq: [
      { q: "Können Sie auch iPad Pro-Displays reparieren?", a: "Ja, wir reparieren alle iPad Pro-Varianten inklusive der 12.9\"- und 11\"-Modelle. Liquid-Retina-Displays werden fachmännisch ausgetauscht." },
      { q: "Wie lange dauert eine iPad-Reparatur?", a: "Einfache Display- oder Akku-Tausche dauern 1–3 Stunden. Grössere Modelle (iPad Pro 12.9\") können etwas mehr Zeit benötigen. Wir informieren Sie beim Eincheck über die genaue Dauer." },
      { q: "Was kostet ein iPad-Display-Tausch?", a: "Die Preise variieren je nach Generation: von CHF 129.– (iPad 5) bis CHF 499.– (iPad Pro 12.9\" 2. Gen). Die vollständige Übersicht finden Sie in der Tabelle oben." },
      { q: "Reparieren Sie auch iPad Mini?", a: "Ja, wir reparieren alle iPad Mini-Generationen von Mini 1 bis Mini 6." },
      { q: "Bleibt die Apple Pencil-Kompatibilität nach dem Display-Tausch erhalten?", a: "Ja. Wir verwenden kompatible Displays, die die Apple Pencil-Funktionalität vollständig erhalten." },
    ],
  },
  samsung: {
    name: "Samsung",
    intro: "Samsung Galaxy Display gebrochen oder Akku leer? B-repair&service repariert alle Galaxy-Modelle – S-Serie, A-Serie und Note-Serie. Schnell, günstig und zuverlässig in Heimberg bei Thun. Fixpreise und 6 Monate Garantie.",
    series: [
      { label: "Galaxy S-Serie", rows: samsungSRows },
      { label: "Galaxy A-Serie", rows: samsungARows },
      { label: "Galaxy Note",    rows: samsungNoteRows },
    ],
    hasOnRequest: false,
    hasModelPages: true,
    popularItems: [
      { model: "Galaxy A54",       repair: "Display Original",             price: "CHF\u00A0199.–" },
      { model: "Galaxy S22",       repair: "Display Original",             price: "CHF\u00A0329.–" },
      { model: "Galaxy S24 5G",    repair: "Display Original",             price: "CHF\u00A0339.–" },
      { model: "Galaxy S25 Ultra", repair: "Display Original",             price: "CHF\u00A0499.–" },
      { model: "Alle Modelle",     repair: "Akku-Wechsel",        price: "CHF\u00A079.–",  from: true },
    ],
    faq: [
      { q: "Reparieren Sie auch Samsung AMOLED-Displays?", a: "Ja, wir reparieren AMOLED- und Super AMOLED-Displays aller Galaxy-Modelle. Für S-Ultra-Modelle verwenden wir Premium-Displays mit identischer Farbdarstellung." },
      { q: "Was kostet ein Samsung Display-Tausch?", a: "Je nach Modell beginnen die Preise ab CHF 139.– (ältere A-Serie) bis CHF 499.– (Galaxy S24/S25 Ultra). Die genauen Preise finden Sie in den Tabellen oben." },
      { q: "Wie lange dauert eine Galaxy-Akku-Reparatur?", a: "Meistens 30–60 Minuten. Bei verklebten Akkus (z.B. S21+/S22+) kann es etwas länger dauern." },
      { q: "Reparieren Sie auch Galaxy Note?", a: "Ja, alle Note-Modelle von Note 8 bis Note 20 Ultra werden bei uns repariert." },
      { q: "Verliere ich den S Pen-Slot nach der Reparatur?", a: "Nein. Wir kennen die Besonderheiten der Note- und S Ultra-Serie und achten beim Einbau auf die S-Pen-Führung und Dichtungen." },
      { q: "Gilt meine Samsung-Herstellergarantie noch?", a: "Drittanbieter-Reparaturen können die Herstellergarantie beeinflussen. Unsere eigene 6-Monate-Garantie auf alle Reparaturen gilt jedoch unabhängig davon." },
    ],
  },
  pixel: {
    name: "Google Pixel",
    intro: "Google Pixel defekt? B-repair&service repariert alle Pixel-Modelle vom Pixel 3 bis zum Pixel 10 Pro – Display, Akku, USB-C-Buchse und Kamera. Schnell und zuverlässig in Heimberg bei Thun, mit Fixpreisen und 6 Monaten Garantie.",
    series: [{ label: "Alle Modelle", rows: pixelRows }],
    hasOnRequest: false,
    hasModelPages: true,
    popularItems: [
      { model: "Google Pixel 6a",  repair: "Display Original", price: "CHF\u00A0189.–" },
      { model: "Google Pixel 7",   repair: "Display Original", price: "CHF\u00A0249.–" },
      { model: "Google Pixel 8",   repair: "Display Original", price: "CHF\u00A0279.–" },
      { model: "Alle Modelle",     repair: "Akku-Wechsel",     price: "CHF\u00A099.–", from: true },
    ],
    faq: [
      { q: "Welche Google-Pixel-Modelle reparieren Sie?", a: "Wir reparieren alle gängigen Pixel-Modelle vom Pixel 3 bis zum aktuellen Pixel 10 Pro, einschliesslich der a-Modelle und des Pixel 9 Pro Fold. Ihr Modell finden Sie in der Liste oben." },
      { q: "Warum bricht bei Pixel-Modellen so oft das Glas der Kameraleiste?", a: "Die Kameraleiste steht über die Rückseite hinaus und trifft bei einem Sturz oft zuerst auf. Das Glas darüber lässt sich einzeln ersetzen – dafür muss nicht die ganze Rückseite getauscht werden." },
      { q: "Wie lange dauert eine Pixel-Display-Reparatur?", a: "Meist 60 bis 90 Minuten. Bei Modellen mit gebogenem Display – etwa dem Pixel 6 Pro oder 7 Pro – kann es etwas länger dauern, weil das Panel besonders vorsichtig gelöst werden muss." },
      { q: "Funktioniert der Fingerabdrucksensor nach dem Displaytausch noch?", a: "Ab dem Pixel 6 sitzt der Sensor unter dem Display. Wir kalibrieren ihn nach dem Einbau neu, damit er wieder zuverlässig erkennt. Bei älteren Modellen sitzt der Sensor auf der Rückseite und ist vom Displaytausch nicht betroffen." },
      { q: "Bekomme ich einen Fixpreis?", a: "Ja. Sie sehen den Preis für Ihr Modell online, und wir bestätigen ihn, bevor wir mit der Arbeit beginnen. Auf jede Reparatur geben wir 6 Monate Garantie." },
    ],
  },
  oneplus: {
    name: "OnePlus",
    intro: "OnePlus-Smartphone defekt? Ob Display, Akku oder Ladebuchse – B-repair&service in Heimberg bei Thun repariert OnePlus-Geräte zu fairen Preisen. Verbindlicher Fixpreis nach der Prüfung.",
    series: [],
    hasOnRequest: true,
    popularItems: [
      { model: "Alle Modelle", repair: "Display Original",             price: "Auf Anfrage" },
      { model: "Alle Modelle", repair: "Akku-Wechsel",        price: "Auf Anfrage" },
    ],
    faq: [
      { q: "Welche OnePlus-Modelle reparieren Sie?", a: "Wir reparieren OnePlus-Geräte aller gängigen Serien – von OnePlus 6 bis zu aktuellen OnePlus 12/13-Modellen. Kontaktieren Sie uns für eine genaue Auskunft zu Ihrem Modell." },
      { q: "Warum stehen keine Fixpreise für OnePlus online?", a: "OnePlus-Ersatzteile variieren stark je nach Modell und Verfügbarkeit. Nach einer Prüfung Ihres Geräts erhalten Sie von uns einen verbindlichen Fixpreis – ohne Überraschungen." },
      { q: "Wie lange dauert eine OnePlus-Reparatur?", a: "Wenn das Ersatzteil verfügbar ist, reparieren wir Ihr OnePlus meist am selben Tag. Für spezifische Teile kann es 1–3 Werktage dauern." },
      { q: "Gilt die 6-Monate-Garantie auch für OnePlus?", a: "Ja, auf alle Reparaturen – egal welche Marke – geben wir 6 Monate Garantie." },
      { q: "Kann ich per WhatsApp anfragen?", a: "Ja, schreiben Sie uns einfach auf WhatsApp (+41 76 402 03 06) mit Ihrem Modell und dem Defekt. Wir antworten in der Regel innerhalb weniger Stunden." },
    ],
  },
};

export const brandSlugs = Object.keys(brandConfig);

export const repairDropdownLinks = [
  { href: "/reparatur/iphone",  label: "iPhone Reparatur" },
  { href: "/reparatur/ipad",    label: "iPad Reparatur" },
  { href: "/reparatur/samsung", label: "Samsung Reparatur" },
  { href: "/reparatur/pixel",   label: "Google Pixel Reparatur" },
  { href: "/reparatur/oneplus", label: "OnePlus Reparatur" },
];

/* ─── MODELLSEITEN ─────────────────────────────────────────────────
   Slugs, Gruppierung und Lookups für /reparatur/[brand]/[model]. */

/** "iPhone 15 Pro Max" → "iphone-15-pro-max" */
export const modelSlug = (model: string): string =>
  model
    .toLowerCase()
    .replace(/[\u2033"'\u2019.()]/g, "")
    .replace(/\+/g, "-plus")          // "Galaxy S22+" darf nicht auf "galaxy-s22" fallen
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** "CHF\u00A0149.00" → "CHF\u00A0149.\u2013" (Schreibweise wie auf den Markenseiten) */
export const prettyPrice = (v: string): string => v.replace(/\.00$/, ".\u2013");

export const hasPrice = (v: string): boolean => v !== "\u2013";

/** Positionen, bei denen der Preis nur ein Startpreis ist. */
const abFelder = new Set<string>(["datenrettung"]);

/** "CHF\u00A0139.–" → "ab CHF\u00A0139.–", wo der Preis nur ein Startpreis ist. */
export const preisMitAb = (field: string, v: string): string =>
  abFelder.has(field) && hasPrice(v) && v !== "Auf Anfrage" ? `ab ${v}` : v;

export type ModelGroup = { label: string; rows: Row[] };

/** Alle Zeilen einer Marke über sämtliche Serien hinweg. */
export const brandRows = (brandKey: string): Row[] =>
  (brandConfig[brandKey]?.series ?? []).flatMap((s) => s.rows);

const iphoneGroupOf = (model: string): string => {
  for (const gen of ["17", "16", "15", "14", "13", "12", "11"]) {
    if (model.startsWith(`iPhone ${gen}`)) return `iPhone ${gen}`;
  }
  if (model.startsWith("iPhone X")) return "iPhone X-Serie";
  if (model.startsWith("iPhone 8") || model.startsWith("iPhone 7")) return "iPhone 8 & 7";
  return "iPhone 6s & 6";
};

/** Gruppen für das Modell-Raster auf der Markenseite. */
export function getModelGroups(brandKey: string): ModelGroup[] {
  const brand = brandConfig[brandKey];
  if (!brand) return [];

  if (brandKey === "ipad") {
    const familie = (m: string) =>
      m.startsWith("iPad Pro") ? "iPad Pro"
      : m.startsWith("iPad Air") ? "iPad Air"
      : m.startsWith("iPad Mini") ? "iPad Mini"
      : "iPad";
    const groups: ModelGroup[] = [];
    for (const row of brandRows(brandKey)) {
      const label = familie(row.model);
      const existing = groups.find((g) => g.label === label);
      if (existing) existing.rows.push(row);
      else groups.push({ label, rows: [row] });
    }
    return groups;
  }

  if (brandKey === "pixel") {
    const groups: ModelGroup[] = [];
    for (const row of brandRows(brandKey)) {
      const gen = row.model.match(/Google Pixel (\d+)/);
      const label = gen ? `Pixel ${gen[1]}` : "Weitere Modelle";
      const existing = groups.find((g) => g.label === label);
      if (existing) existing.rows.push(row);
      else groups.push({ label, rows: [row] });
    }
    return groups;
  }

  if (brandKey === "iphone") {
    const groups: ModelGroup[] = [];
    for (const row of brandRows(brandKey)) {
      const label = iphoneGroupOf(row.model);
      const existing = groups.find((g) => g.label === label);
      if (existing) existing.rows.push(row);
      else groups.push({ label, rows: [row] });
    }
    return groups;
  }

  return brand.series.map((s) => ({ label: s.label, rows: s.rows }));
}

/** Eine Modellzeile über ihren Slug finden. */
export const findModel = (brandKey: string, slug: string): Row | undefined =>
  brandRows(brandKey).find((row) => modelSlug(row.model) === slug);

/** Marken mit mehreren Geräteserien: erst Serie wählen, dann Modell. */
export const hatSerienauswahl = (brandKey: string): boolean =>
  brandKey === "samsung" && (brandConfig[brandKey]?.series.length ?? 0) > 1;

/** Alle Marken, für die Modellseiten erzeugt werden. */
export const modelPageBrands = Object.keys(brandConfig).filter(
  (key) => brandConfig[key].hasModelPages,
);

/** Parameter für generateStaticParams der Modellseiten. */
export const modelPageParams = (): { brand: string; model: string }[] => {
  const params = modelPageBrands.flatMap((brand) =>
    brandRows(brand).map((row) => ({ brand, model: modelSlug(row.model), name: row.model })),
  );
  // Zwei Modelle mit derselben Adresse würden sich gegenseitig überschreiben –
  // lieber den Bau abbrechen als eine stille Verwechslung ausliefern.
  const gesehen = new Map<string, string>();
  for (const p of params) {
    const key = `${p.brand}/${p.model}`;
    const vorher = gesehen.get(key);
    if (vorher) {
      throw new Error(
        `Zwei Modelle ergeben dieselbe Adresse ${key}: "${vorher}" und "${p.name}". ` +
        `Bitte eines davon in data/preise.json eindeutig benennen.`,
      );
    }
    gesehen.set(key, p.name);
  }
  return params.map(({ brand, model }) => ({ brand, model }));
};

/** Die einzelnen Reparaturpositionen einer Zeile – in Anzeigereihenfolge. */
export const repairFields = [
  "display",
  "displayPremium",
  "batterie",
  "ladebuchse",
  "kamera",
  "kameraglas",
  "rueckseite",
  "lautsprecher",
  "datenrettung",
] as const;

export type RepairField = (typeof repairFields)[number];
