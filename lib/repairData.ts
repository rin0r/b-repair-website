/* ─── TYPES ──────────────────────────────────────────────────────── */
export type Row = {
  model: string;
  display: string;
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
  popularItems: PopularItem[];
  faq: FAQ[];
};

/* ─── HELPERS ─────────────────────────────────────────────────── */
const chf = (v: number | null) => (v === null ? "–" : `CHF\u00A0${v.toFixed(2)}`);

const r = (
  model: string,
  display: number | null,
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
  display:      chf(display),
  rueckseite:   chf(rueckseite),
  batterie:     chf(batterie),
  ladebuchse:   chf(ladebuchse),
  kameraglas:   chf(kameraglas),
  lautsprecher: chf(lautsprecher),
  datenrettung: chf(datenrettung),
  kamera:       chf(kamera),
});

/* ─── RAW ROWS ─────────────────────────────────────────────────── */
const iphoneRows: Row[] = [
  r("iPhone 17 Pro Max",539,299,149,149,149,149,169,239,true),
  r("iPhone 17 Pro",    539,299,149,149,149,149,169,239,true),
  r("iPhone 17 Air",    499,299,149,149,149,149,169,239,true),
  r("iPhone 17",        499,299,149,149,149,149,169,239,true),
  r("iPhone 16 Pro Max",499,199,149,149,99, 149,169,239,true),
  r("iPhone 16 Pro",    499,249,149,149,99, 149,169,239,true),
  r("iPhone 16 Plus",   399,249,139,149,149,149,169,169,true),
  r("iPhone 16e",       369,249,129,149,149,149,169,219,true),
  r("iPhone 16",        349,249,129,149,149,149,169,219,true),
  r("iPhone 15 Pro Max",529,299,149,149,149,149,169,199),
  r("iPhone 15 Pro",    529,249,149,149,149,149,169,199),
  r("iPhone 15 Plus",   399,249,139,149,149,149,169,169),
  r("iPhone 15",        349,249,139,149,149,149,169,169),
  r("iPhone 14 Pro Max",439,199,129,99, 99, 99, 169,199),
  r("iPhone 14 Pro",    389,199,129,99, 99, 99, 169,179),
  r("iPhone 14 Plus",   389,199,119,99, 99, 99, 169,169),
  r("iPhone 14",        349,199,119,99, 99, 99, 169,169),
  r("iPhone 13 Pro Max",389,199,119,99, 99, 99, 169,169),
  r("iPhone 13 Pro",    349,199,119,99, 99, 99, 169,179),
  r("iPhone 13",        339,199,119,99, 99, 99, 169,169),
  r("iPhone 13 mini",   289,199,119,99, 99, 99, 169,169),
  r("iPhone 12 Pro Max",389,199,109,99, 89, 89, 169,179),
  r("iPhone 12 Pro",    349,199,109,99, 89, 89, 169,179),
  r("iPhone 12",        329,199,109,99, 89, 89, 169,169),
  r("iPhone 12 mini",   369,199,99, 99, 89, 89, 169,169),
  r("iPhone 11 Pro Max",199,199,79, 99, 89, 89, 169,159),
  r("iPhone 11 Pro",    149,199,79, 89, 89, 89, 169,159),
  r("iPhone 11",        139,199,79, 89, 89, 89, 169,149),
  r("iPhone XS Max",    129,199,89, 89, 89, 89, 169,159),
  r("iPhone XS",        169,199,89, 89, 89, 89, 169,159),
  r("iPhone XR",        109,199,89, 89, 89, 89, 169,149),
  r("iPhone X",         99, 199,89, 89, 89, 89, 169,159),
  r("iPhone 8 Plus",    99, 199,89, 89, 89, 89, 169,149,false,true),
  r("iPhone 8",         99, 199,89, 89, 89, 89, 169,149,false,true),
  r("iPhone 7 Plus",    99, 199,89, 89, 89, 89, 169,149,false,true),
  r("iPhone 7",         89, 199,89, 89, 89, 89, 169,149,false,true),
  r("iPhone 6s Plus",   89, 199,89, 89, 89, 89, 169,149,false,true),
  r("iPhone 6s",        79, 199,89, 89, 89, 89, 169,149,false,true),
  r("iPhone 6 Plus",    79, 199,89, 89, 89, 89, 169,149,false,true),
  r("iPhone 6",         69, 199,89, 89, 89, 89, 169,149,false,true),
];

const ipadRows: Row[] = [
  r("iPad Pro 12.9\" (4. Gen)",269,null,null,null,null,null,169,null),
  r("iPad Pro 12.9\" (3. Gen)",269,null,null,null,null,null,169,null),
  r("iPad Pro 12.9\" (2. Gen)",499,null,159,null,null,null,169,null),
  r("iPad Pro 12.9\" (1. Gen)",339,null,159,null,null,null,169,null),
  r("iPad Pro 11\" (4. Gen)",289,null,null,null,null,null,169,null),
  r("iPad Pro 11\" (3. Gen)",289,null,null,null,null,null,169,null),
  r("iPad Pro 11\" (2. Gen)",289,null,149,null,null,null,169,null),
  r("iPad Pro 11\" (1. Gen)",279,null,149,null,null,null,169,null),
  r("iPad Pro 10.5\"",280,null,150,null,null,null,169,null),
  r("iPad Pro 9.7\"",239,null,150,null,null,null,169,null),
  r("iPad Air (4. Gen)",229,null,150,null,null,null,169,null),
  r("iPad Air (3. Gen)",229,null,150,null,null,null,169,null),
  r("iPad Air (2. Gen)",219,null,150,null,null,null,169,null),
  r("iPad Air (1. Gen)",129,null,119,null,null,null,169,null),
  r("iPad Mini 6",289,null,119,null,null,null,null,null),
  r("iPad Mini 5",229,null,119,null,null,null,169,null),
  r("iPad Mini 4",219,null,119,null,null,null,169,null),
  r("iPad Mini 3",129,null,99,null,null,null,169,null,false,true),
  r("iPad Mini 2",129,null,99,null,null,null,169,null,false,true),
  r("iPad Mini 1",129,null,99,null,null,null,169,null,false,true),
  r("iPad 10",199,null,119,null,null,null,169,null),
  r("iPad 9",149,null,150,null,null,null,169,null),
  r("iPad 8",149,null,150,null,null,null,169,null),
  r("iPad 7",139,null,119,null,null,null,169,null),
  r("iPad 6",129,null,119,null,null,null,169,null),
  r("iPad 5",129,null,119,null,null,null,169,null,false,true),
  r("iPad 4",119,null,99,null,null,null,169,null,false,true),
  r("iPad 3",119,null,99,null,null,null,169,null,false,true),
  r("iPad 2",119,null,99,null,null,null,169,null,false,true),
];

const samsungSRows: Row[] = [
  r("Galaxy S25 Ultra 5G",499,119,119,99,null,99,169,339,true),
  r("Galaxy S25+ 5G",    369,99,99,99,null,99,169,219,true),
  r("Galaxy S25 5G",     349,99,99,99,null,99,169,219,true),
  r("Galaxy S24 Ultra 5G",499,99,99,99,null,99,169,289,true),
  r("Galaxy S24+ 5G",    349,99,99,99,null,99,169,199,true),
  r("Galaxy S24 5G",     339,99,99,99,null,99,169,219,true),
  r("Galaxy S23 Ultra 5G",489,99,99,99,null,99,169,289),
  r("Galaxy S23+ 5G",    349,99,99,99,null,99,169,279),
  r("Galaxy S23 5G",     289,99,99,99,null,99,169,279),
  r("Galaxy S22 Ultra 5G",379,99,99,99,null,119,169,279),
  r("Galaxy S22+",       349,99,99,99,null,99,169,279),
  r("Galaxy S22",        329,99,99,99,null,99,169,249),
  r("Galaxy S21 Ultra 5G",379,99,99,99,null,99,169,169),
  r("Galaxy S21+",       339,99,99,99,null,99,169,149),
  r("Galaxy S21",        329,99,99,99,null,99,169,169),
  r("Galaxy S21 FE",     239,99,99,99,null,99,169,139),
  r("Galaxy S20 Ultra 5G",339,99,99,99,null,99,169,199),
  r("Galaxy S20+ 5G",    329,99,99,99,99,99,169,179),
  r("Galaxy S20+",       329,99,99,99,99,99,169,179),
  r("Galaxy S20",        309,99,99,99,99,99,169,159),
  r("Galaxy S20 FE",     199,99,99,99,99,99,169,99),
  r("Galaxy S10 5G",     339,119,89,99,99,89,169,179),
  r("Galaxy S10+",       319,99,89,149,99,89,169,179),
  r("Galaxy S10",        299,89,89,139,89,89,169,159),
  r("Galaxy S10e",       279,89,89,119,99,89,169,149),
  r("Galaxy S9+",        249,89,89,89,99,79,169,159,false,true),
  r("Galaxy S9",         249,89,89,79,99,79,169,149,false,true),
  r("Galaxy S8+",        239,89,89,69,99,69,169,119,false,true),
  r("Galaxy S8",         239,89,89,89,99,69,169,129,false,true),
];

const samsungARows: Row[] = [
  r("Galaxy A80",199,89,89,null,null,89,169,169),
  r("Galaxy A72",199,89,89,89,89,89,169,129),
  r("Galaxy A71",189,89,89,89,89,89,169,129),
  r("Galaxy A70",189,89,89,89,89,89,169,129),
  r("Galaxy A54",199,89,89,89,89,89,169,129),
  r("Galaxy A53",199,89,89,89,89,89,169,129),
  r("Galaxy A52",189,89,89,89,89,89,169,129),
  r("Galaxy A51",179,89,89,89,89,89,169,119),
  r("Galaxy A50",169,89,99,89,89,89,169,109),
  r("Galaxy A42",179,89,89,89,9,89,169,109),
  r("Galaxy A41",189,89,89,89,89,89,169,129),
  r("Galaxy A34",199,89,89,89,89,89,169,129),
  r("Galaxy A33",189,89,89,89,89,89,169,109),
  r("Galaxy A32",169,89,89,89,89,89,169,109),
  r("Galaxy A31",159,89,89,89,89,89,169,119),
  r("Galaxy A30",159,79,79,79,79,79,169,109,false,true),
  r("Galaxy A22",169,79,89,79,79,79,169,99),
  r("Galaxy A21",139,79,89,79,79,79,169,99,false,true),
  r("Galaxy A20",149,79,89,79,79,79,169,99,false,true),
  r("Galaxy A14",199,89,89,89,89,89,169,99),
  r("Galaxy A13",159,89,89,89,89,89,169,99),
  r("Galaxy A12",159,79,89,79,79,79,169,99,false,true),
  r("Galaxy A10",139,79,89,79,79,79,169,99,false,true),
  r("Galaxy A02",109,89,89,79,79,79,169,89,false,true),
];

const samsungNoteRows: Row[] = [
  r("Galaxy Note 20 Ultra",329,99,99,99,99,99,169,159),
  r("Galaxy Note 20",     269,99,99,99,99,99,169,159),
  r("Galaxy Note 10+",    339,99,99,99,99,99,169,159),
  r("Galaxy Note 10",     309,99,99,99,99,99,169,159),
  r("Galaxy Note 9",      319,89,89,99,99,99,169,159,false,true),
  r("Galaxy Note 8",      289,89,89,99,99,99,169,159,false,true),
];

const huaweiRows: Row[] = [
  r("Huawei P40 Pro",     349,149,99,119,119,99,169,229),
  r("Huawei P40",         279,149,99,119,119,99,169,229),
  r("Huawei P40 Lite",    189,89,89,89,109,89,169,119),
  r("Huawei P40 Lite E",  189,129,89,89,89,89,169,119),
  r("Huawei P30 Pro",     279,99,99,99,99,99,169,189),
  r("Huawei P30",         239,99,89,99,99,99,169,149),
  r("Huawei P30 Lite",    189,89,89,89,89,89,169,99),
  r("Huawei P20 Pro",     229,89,89,89,89,89,169,179,false,true),
  r("Huawei P20",         169,99,89,89,99,89,169,139,false,true),
  r("Huawei P20 Lite",    189,89,89,89,99,89,169,109,false,true),
  r("Huawei Mate 20 Pro", 289,109,99,99,109,99,169,179,false,true),
  r("Huawei Mate 20",     289,139,99,99,129,119,169,139,false,true),
  r("Huawei Mate 20 Lite",189,89,89,89,89,89,169,119,false,true),
];

/* ─── BRAND CONFIG ─────────────────────────────────────────────── */
export const brandConfig: Record<string, BrandConfig> = {
  iphone: {
    name: "iPhone",
    intro: "Displaybruch, Akkuproblem oder Wasserschaden? Bei B-repair&service in Heimberg bekommen Sie Ihr iPhone schnell und zuverlässig repariert – oft in unter 2 Stunden. Transparente Fixpreise, 6 Monate Garantie und kostenlose Diagnose inklusive.",
    series: [{ label: "Alle Modelle", rows: iphoneRows }],
    hasOnRequest: false,
    popularItems: [
      { model: "iPhone 8",         repair: "Display",             price: "CHF\u00A099.–" },
      { model: "iPhone 11",        repair: "Display",             price: "CHF\u00A0139.–" },
      { model: "iPhone 13 Pro",    repair: "Display",             price: "CHF\u00A0349.–" },
      { model: "iPhone 15 Pro Max",repair: "Display",             price: "CHF\u00A0529.–" },
      { model: "iPhone 16 Pro Max",repair: "Display",             price: "CHF\u00A0499.–" },
      { model: "Alle Modelle",     repair: "Akku-Wechsel",        price: "CHF\u00A079.–",  from: true },
      { model: "Alle Modelle",     repair: "Kostenlose Diagnose", price: "Gratis" },
    ],
    faq: [
      { q: "Wie lange dauert eine iPhone-Display-Reparatur?", a: "Die meisten Display-Reparaturen sind bei uns in 30–60 Minuten erledigt. Bei OLED-Displays der Pro-Serie kann es bis zu 2 Stunden dauern. Sie warten bequem bei uns oder kommen einfach später abholen." },
      { q: "Verliere ich meine Daten bei der Reparatur?", a: "Nein. Bei Display- und Akku-Reparaturen bleiben Ihre Daten vollständig erhalten. Bei tiefgreifenderen Eingriffen empfehlen wir vorab ein iCloud-Backup – wir beraten Sie gerne." },
      { q: "Welche iPhone-Modelle reparieren Sie?", a: "Wir reparieren alle iPhone-Modelle von iPhone 6 bis zum aktuellen iPhone 17 Pro Max – sowohl ältere LCD-Modelle als auch neuste OLED-Displays." },
      { q: "Sind Ihre Ersatzteile original?", a: "Wir verwenden hochwertige, OLED-kompatible Displays und zertifizierte Ersatzteile. Auf alle Reparaturen geben wir 6 Monate Garantie – das spricht für die Qualität unserer Teile." },
      { q: "Was kostet ein iPhone-Akku-Wechsel?", a: "Je nach Modell beginnen Akku-Wechsel ab CHF 79.– bis CHF 149.–. Den genauen Preis für Ihr Modell finden Sie in der Preistabelle oben." },
      { q: "Muss ich einen Termin vereinbaren?", a: "Nein, Sie können einfach vorbeikommen. Für grössere Reparaturen empfehlen wir eine kurze Voranmeldung per WhatsApp oder Telefon, damit wir das Ersatzteil bereithalten können." },
    ],
  },
  ipad: {
    name: "iPad",
    intro: "Gebrochener iPad-Bildschirm oder schwacher Akku? B-repair&service repariert alle iPad-Generationen – von iPad 2 bis iPad Pro der neuesten Generation. Schnell, professionell und zu fairen Fixpreisen in Heimberg bei Thun.",
    series: [{ label: "Alle Modelle", rows: ipadRows }],
    hasOnRequest: false,
    popularItems: [
      { model: "iPad 6",              repair: "Display",             price: "CHF\u00A0129.–" },
      { model: "iPad Air (3. Gen)",   repair: "Display",             price: "CHF\u00A0229.–" },
      { model: "iPad Pro 11\"",       repair: "Display",             price: "CHF\u00A0279.–", from: true },
      { model: "iPad Pro 12.9\"",     repair: "Display",             price: "CHF\u00A0269.–", from: true },
      { model: "Alle Modelle",        repair: "Akku-Wechsel",        price: "CHF\u00A099.–",  from: true },
      { model: "Alle Modelle",        repair: "Kostenlose Diagnose", price: "Gratis" },
    ],
    faq: [
      { q: "Können Sie auch iPad Pro-Displays reparieren?", a: "Ja, wir reparieren alle iPad Pro-Varianten inklusive der 12.9\"- und 11\"-Modelle. Liquid-Retina-Displays werden fachmännisch ausgetauscht." },
      { q: "Wie lange dauert eine iPad-Reparatur?", a: "Einfache Display- oder Akku-Tausche dauern 1–3 Stunden. Grössere Modelle (iPad Pro 12.9\") können etwas mehr Zeit benötigen. Wir informieren Sie beim Eincheck über die genaue Dauer." },
      { q: "Was kostet ein iPad-Display-Tausch?", a: "Die Preise variieren je nach Generation: von CHF 119.– (iPad 2) bis CHF 499.– (iPad Pro 12.9\" 2. Gen). Die vollständige Übersicht finden Sie in der Tabelle oben." },
      { q: "Reparieren Sie auch iPad Mini?", a: "Ja, wir reparieren alle iPad Mini-Generationen von Mini 1 bis Mini 6." },
      { q: "Bleibt die Apple Pencil-Kompatibilität nach dem Display-Tausch erhalten?", a: "Ja. Wir verwenden kompatible Displays, die die Apple Pencil-Funktionalität vollständig erhalten." },
    ],
  },
  samsung: {
    name: "Samsung",
    intro: "Samsung Galaxy Display gebrochen oder Akku leer? B-repair&service repariert alle Galaxy-Modelle – S-Serie, A-Serie und Note-Serie. Schnell, günstig und zuverlässig in Heimberg bei Thun. Kostenlose Diagnose, Fixpreise, 6 Monate Garantie.",
    series: [
      { label: "Galaxy S-Serie", rows: samsungSRows },
      { label: "Galaxy A-Serie", rows: samsungARows },
      { label: "Galaxy Note",    rows: samsungNoteRows },
    ],
    hasOnRequest: false,
    popularItems: [
      { model: "Galaxy A54",       repair: "Display",             price: "CHF\u00A0199.–" },
      { model: "Galaxy S22",       repair: "Display",             price: "CHF\u00A0329.–" },
      { model: "Galaxy S24 5G",    repair: "Display",             price: "CHF\u00A0339.–" },
      { model: "Galaxy S25 Ultra", repair: "Display",             price: "CHF\u00A0499.–" },
      { model: "Alle Modelle",     repair: "Akku-Wechsel",        price: "CHF\u00A079.–",  from: true },
      { model: "Alle Modelle",     repair: "Kostenlose Diagnose", price: "Gratis" },
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
  huawei: {
    name: "Huawei",
    intro: "Huawei P- oder Mate-Serie defekt? B-repair&service repariert Huawei-Smartphones professionell in Heimberg bei Thun. Display, Akku, Ladebuchse oder Kamera – mit hochwertigen Ersatzteilen und 6 Monaten Garantie.",
    series: [{ label: "Alle Modelle", rows: huaweiRows }],
    hasOnRequest: false,
    popularItems: [
      { model: "Huawei P30",      repair: "Display",             price: "CHF\u00A0239.–" },
      { model: "Huawei P30 Pro",  repair: "Display",             price: "CHF\u00A0279.–" },
      { model: "Huawei P40",      repair: "Display",             price: "CHF\u00A0279.–" },
      { model: "Huawei P40 Pro",  repair: "Display",             price: "CHF\u00A0349.–" },
      { model: "Alle Modelle",    repair: "Akku-Wechsel",        price: "CHF\u00A089.–",  from: true },
      { model: "Alle Modelle",    repair: "Kostenlose Diagnose", price: "Gratis" },
    ],
    faq: [
      { q: "Welche Huawei-Modelle reparieren Sie?", a: "Wir reparieren die P-Serie (P20 bis P40) und Mate-Serie (Mate 20 bis Mate 20 Pro). Für andere Modelle fragen Sie uns einfach an – wir helfen gerne." },
      { q: "Gibt es Probleme mit der Displaykalibrierung nach dem Tausch?", a: "Bei Huawei-Geräten ist die Displaykalibrierung wichtig. Wir verwenden kompatible Displays und kalibrieren diese nach dem Einbau sorgfältig." },
      { q: "Was kostet ein Huawei-Display-Tausch?", a: "Je nach Modell beginnen die Preise ab CHF 169.– (P20) bis CHF 349.– (P40 Pro). Die vollständige Preistabelle finden Sie oben." },
      { q: "Können Sie Huawei-Wasserschäden reparieren?", a: "Ja, wir behandeln Wasserschäden auf Platinen-Ebene (Mikrolöten). Bringen Sie das Gerät so schnell wie möglich – je früher, desto besser die Erfolgsaussichten." },
      { q: "Sind Ersatzteile für Huawei noch erhältlich?", a: "Für gängige P- und Mate-Modelle halten wir Ersatzteile auf Lager. Für seltenere Modelle kann es 1–3 Werktage dauern, bis das Teil eintrifft – wir informieren Sie vorab." },
    ],
  },
  oneplus: {
    name: "OnePlus",
    intro: "OnePlus-Smartphone defekt? Ob Display, Akku oder Ladebuchse – B-repair&service in Heimberg bei Thun repariert OnePlus-Geräte zu fairen Preisen. Kostenlose Diagnose inklusive, verbindlicher Fixpreis nach der Prüfung.",
    series: [],
    hasOnRequest: true,
    popularItems: [
      { model: "Alle Modelle", repair: "Display",             price: "Auf Anfrage" },
      { model: "Alle Modelle", repair: "Akku-Wechsel",        price: "Auf Anfrage" },
      { model: "Alle Modelle", repair: "Kostenlose Diagnose", price: "Gratis" },
    ],
    faq: [
      { q: "Welche OnePlus-Modelle reparieren Sie?", a: "Wir reparieren OnePlus-Geräte aller gängigen Serien – von OnePlus 6 bis zu aktuellen OnePlus 12/13-Modellen. Kontaktieren Sie uns für eine genaue Auskunft zu Ihrem Modell." },
      { q: "Warum stehen keine Fixpreise für OnePlus online?", a: "OnePlus-Ersatzteile variieren stark je nach Modell und Verfügbarkeit. Nach einer kostenlosen Diagnose erhalten Sie von uns einen verbindlichen Fixpreis – ohne Überraschungen." },
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
  { href: "/reparatur/huawei",  label: "Huawei Reparatur" },
  { href: "/reparatur/oneplus", label: "OnePlus Reparatur" },
];
