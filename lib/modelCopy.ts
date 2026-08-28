/* ─── Texte für die Modellseiten ───────────────────────────────────
   Baut aus Modellzeile + Spezifikation den SEO-Text und das FAQ.
   Jede Seite bekommt so echte, modellspezifische Inhalte statt
   eines identischen Textbausteins. */

import type { Row, FAQ } from "./repairData";
import { hasPrice, prettyPrice } from "./repairData";
import type { DeviceSpec } from "./iphoneModels";

/** Deterministische Variante, damit nicht alle Seiten gleich klingen. */
const variant = (slug: string, buckets: number): number => {
  let n = 0;
  for (let i = 0; i < slug.length; i++) n = (n * 31 + slug.charCodeAt(i)) % 100000;
  return n % buckets;
};

const price = (v: string): string => (hasPrice(v) ? prettyPrice(v) : "auf Anfrage");

/* ─── Kurzer Einstiegstext im Hero ─────────────────────────────── */
export function buildIntro(model: string, slug: string): string {
  const v = variant(slug, 3);
  if (v === 0)
    return `Display gebrochen, Akku am Ende oder Wasserschaden? Wir reparieren Ihr ${model} in Heimberg bei Thun – meist noch am selben Tag, zum Fixpreis und mit 6 Monaten Garantie.`;
  if (v === 1)
    return `Ihr ${model} hat einen Defekt? Bei B-repair&service in Heimberg erhalten Sie eine kostenlose Diagnose, einen verbindlichen Fixpreis und Ihr Gerät meist innerhalb von 2 Stunden zurück.`;
  return `Ob Displaybruch, schwacher Akku oder defekte Ladebuchse – Ihr ${model} wird bei uns in Heimberg fachgerecht repariert. Transparente Fixpreise, kostenlose Diagnose, 6 Monate Garantie.`;
}

/* ─── SEO-Fliesstext (zwei Absätze) ────────────────────────────── */
export function buildCopy(model: string, slug: string, spec: DeviceSpec, row: Row): string[] {
  const v = variant(slug, 3);
  const panel = spec.display === "OLED" ? "OLED-Panel" : "LCD-Panel";
  const port = spec.connector === "USB-C" ? "USB-C-Buchse" : "Lightning-Buchse";

  const first =
    v === 0
      ? `Das ${model} kam ${spec.year} auf den Markt und ist in der Region Thun bis heute weit verbreitet. Sein ${spec.size}″-${panel} liefert ein sehr gutes Bild, ist bei einem Sturz auf die Ecke aber die empfindlichste Stelle des Geräts. Genau deshalb ist die Display-Reparatur bei diesem Modell der häufigste Reparaturgrund – gefolgt vom Akkuwechsel und Problemen mit der ${port}.`
      : v === 1
        ? `Seit ${spec.year} ist das ${model} im Einsatz – und viele dieser Geräte laufen im Raum Heimberg, Steffisburg und Thun noch täglich. Mit den Jahren machen sich Verschleiss und Stürze bemerkbar: Das ${spec.size}″-${panel} bekommt Risse, der Akku hält den Tag nicht mehr durch, die ${port} lädt nur noch mit gedrehtem Kabel. Alles davon lässt sich reparieren – ein Neukauf ist selten nötig.`
        : `Das ${model} (${spec.year}) gehört zu den Modellen, die wir regelmässig auf dem Tisch haben. Sein ${spec.size}″-${panel} und die verklebte Bauweise verlangen sauberes Arbeiten – mit dem richtigen Werkzeug und Erfahrung ist der Tausch aber Routine. Für Kundinnen und Kunden aus Heimberg, Thun, Steffisburg und der Region Bern erledigen wir das ohne Postversand direkt vor Ort.`;

  const displayLine = hasPrice(row.display)
    ? `Die Display-Reparatur am ${model} kostet bei uns ${prettyPrice(row.display)}`
    : `Den Preis für die Display-Reparatur am ${model} nennen wir Ihnen nach einer kurzen Prüfung`;
  const batteryLine = hasPrice(row.batterie)
    ? `, ein neuer Akku ${prettyPrice(row.batterie)}`
    : "";

  const second =
    v === 0
      ? `${displayLine}${batteryLine} – als Fixpreis, den wir vor Beginn der Arbeit verbindlich nennen. Die Diagnose ist immer kostenlos, auch wenn Sie sich danach gegen die Reparatur entscheiden. Die meisten Arbeiten am ${model} sind in unter zwei Stunden erledigt, Sie können also warten oder das Gerät am selben Tag wieder abholen. Auf jede Reparatur geben wir 6 Monate Garantie.`
      : v === 1
        ? `${displayLine}${batteryLine}. Bei uns gibt es keine Kostenvoranschläge, die sich später ändern: Sie bekommen einen Fixpreis, bevor wir anfangen. Kommt bei der kostenlosen Diagnose heraus, dass sich die Reparatur nicht lohnt, sagen wir Ihnen das offen. Die meisten ${model}-Reparaturen dauern unter zwei Stunden, dazu 6 Monate Garantie auf die ausgeführte Arbeit.`
        : `${displayLine}${batteryLine} – ohne versteckte Zusatzkosten. Vor der Reparatur prüfen wir Ihr ${model} kostenlos durch und besprechen mit Ihnen, was sinnvoll ist. Danach starten wir erst nach Ihrer Freigabe. Die Standardreparaturen sind meist in unter zwei Stunden fertig, auf alles geben wir 6 Monate Garantie. Auch Platinenschäden reparieren wir – dank eigener Mikrolöt-Werkstatt.`;

  return [first, second];
}

/* ─── FAQ: vier modellspezifische Fragen ───────────────────────── */
export function buildFaq(model: string, spec: DeviceSpec, row: Row): FAQ[] {
  const faq: FAQ[] = [];

  faq.push({
    q: `Was kostet eine Display-Reparatur beim ${model}?`,
    a: hasPrice(row.display)
      ? `Die Display-Reparatur am ${model} kostet ${prettyPrice(row.display)} als Fixpreis, inklusive Einbau, Funktionstest und 6 Monaten Garantie. Der Preis steht fest, bevor wir mit der Arbeit beginnen – Nachforderungen gibt es bei uns nicht.`
      : `Den Preis für die Display-Reparatur am ${model} nennen wir Ihnen nach einer kostenlosen Diagnose als verbindlichen Fixpreis. Melden Sie sich einfach kurz per WhatsApp oder Telefon.`,
  });

  faq.push({
    q: `Wie lange dauert die Reparatur meines ${model}?`,
    a: `Ein Display- oder Akkutausch am ${model} dauert in der Regel 30 bis 60 Minuten. Aufwendigere Arbeiten wie ${spec.connector}-Buchse, Kamera oder Reparaturen auf Platinenebene brauchen länger. Die allermeisten Reparaturen sind innerhalb von zwei Stunden fertig – Sie können bei uns in Heimberg warten oder das Gerät später abholen.`,
  });

  if (spec.front === "home") {
    faq.push({
      q: `Funktioniert Touch ID nach dem Displaytausch noch?`,
      a: `Ja. Der Home-Button des ${model} ist fest mit der Platine gekoppelt – wird er beim Tausch beschädigt oder ersetzt, ist Touch ID dauerhaft verloren. Wir bauen deshalb immer Ihren Original-Home-Button in das neue Display um, damit Fingerabdrucksensor und Taste weiter funktionieren.`,
    });
  } else {
    faq.push({
      q: `Funktioniert Face ID nach dem Displaytausch noch?`,
      a: `Ja. Die Face-ID-Einheit des ${model} sitzt im Displayrahmen und ist mit Ihrem Gerät gepaart. Wir übernehmen sie beim Tausch vollständig aus dem alten Display – ein häufiger Fehler bei unsachgemässen Reparaturen, der Face ID sonst dauerhaft deaktiviert.`,
    });
  }

  faq.push({
    q: `Wann lohnt sich ein Akkuwechsel beim ${model}?`,
    a: hasPrice(row.batterie)
      ? `Sobald die maximale Kapazität unter 80 % fällt, das Gerät bei Kälte abschaltet oder der Ladestand plötzlich springt, lohnt sich der Tausch. Beim ${model} kostet ein neuer Akku ${prettyPrice(row.batterie)} – deutlich günstiger als ein neues Gerät, und in etwa 30 Minuten erledigt.`
      : `Sobald die maximale Kapazität unter 80 % fällt oder sich das ${model} bei Kälte abschaltet, lohnt sich ein neuer Akku. Den Preis für Ihr Modell nennen wir Ihnen nach kurzer Prüfung.`,
  });

  return faq;
}
