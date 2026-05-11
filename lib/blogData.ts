export type Block =
  | { type: "p";     text: string }
  | { type: "h2";    text: string }
  | { type: "h3";    text: string }
  | { type: "ul";    items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface Article {
  slug:     string;
  title:    string;
  excerpt:  string;
  category: string;
  date:     string;
  readMin:  number;
  content:  Block[];
}

export const articles: Article[] = [
  {
    slug:     "handy-display-reparieren-oder-neu-kaufen",
    title:    "Handy-Display kaputt: Reparieren oder neu kaufen?",
    excerpt:  "Ein gebrochenes Display ist ärgerlich – aber lohnt sich die Reparatur wirklich noch? Wir zeigen, wann eine Displayreparatur sinnvoll ist und wann ein Neukauf die bessere Wahl ist.",
    category: "Reparatur-Tipps",
    date:     "15. April 2026",
    readMin:  4,
    content: [
      { type: "p", text: "Das Glas ist gesplittert, der Touchscreen reagiert sporadisch oder das Display zeigt gar nichts mehr – ein kaputter Bildschirm ist einer der häufigsten Gründe, warum Menschen ein neues Smartphone kaufen. Aber ist das wirklich nötig?" },
      { type: "h2", text: "Wann lohnt die Displayreparatur?" },
      { type: "p", text: "In den meisten Fällen ist eine Displayreparatur die wirtschaftlich sinnvollere Entscheidung. Besonders dann, wenn das Gerät jünger als 3–4 Jahre ist, kein weiterer Schaden vorliegt und es sich um ein Mittelklasse- oder Flaggschiff-Modell handelt." },
      { type: "h2", text: "Preisvergleich: Was kostet ein Displaywechsel?" },
      { type: "table", headers: ["Anbieter", "iPhone 14 Display", "Wartezeit"], rows: [
        ["Apple Store Schweiz", "CHF 399.–", "1–3 Werktage"],
        ["B-repair Heimberg",   "CHF 219.–", "60–90 Min vor Ort"],
        ["Online-Versand",      "CHF 180–250.–", "5–10 Tage"],
      ]},
      { type: "h2", text: "Wann ist ein Neukauf sinnvoller?" },
      { type: "ul", items: [
        "Das Gerät ist älter als 4–5 Jahre und erhält keine Software-Updates mehr",
        "Neben dem Display gibt es weitere schwere Schäden (Platine, Wasserschaden)",
        "Der Restwert des Geräts ist bereits sehr gering",
        "Das Modell wird vom Hersteller nicht mehr unterstützt",
      ]},
      { type: "h2", text: "Fazit: Meistens reparieren" },
      { type: "p", text: "Für Geräte, die noch unter 3–4 Jahre alt sind, ist eine Displayreparatur fast immer die günstigere und nachhaltigere Wahl. Bei B-repair erhalten Sie eine kostenlose Erstdiagnose – so wissen Sie den genauen Preis, bevor Sie sich entscheiden. Keine Überraschungen." },
    ],
  },
  {
    slug:     "was-ist-mikroloeten",
    title:    "Was ist Mikrolöten? Platinen-Reparaturen auf Bauteil-Ebene erklärt",
    excerpt:  "Mikrolöten (Microsoldering) ist eine Spezialdisziplin der Elektronik-Reparatur – und kaum ein Anbieter in der Schweiz beherrscht sie wirklich. Was steckt dahinter?",
    category: "Technik",
    date:     "22. April 2026",
    readMin:  5,
    content: [
      { type: "p", text: "Wenn ein Smartphone nicht mehr lädt, spontan abstürzt oder nach einem Wasserschaden den Geist aufgibt, hören viele Reparaturshops auf. Bei B-repair nicht – denn wir beherrschen Mikrolöten." },
      { type: "h2", text: "Was ist Mikrolöten genau?" },
      { type: "p", text: "Mikrolöten (englisch: Microsoldering) ist die Reparatur von Platinen auf Bauteil-Ebene unter einem Präzisionsmikroskop. Einzelne Chips, Kondensatoren, Widerstände und Leiterbahnen werden identifiziert, ausgelötet und ersetzt. Bauteile können kleiner als ein halber Millimeter sein – ohne Mikroskop schlicht unsichtbar." },
      { type: "h2", text: "Welche Reparaturen erfordern Mikrolöten?" },
      { type: "ul", items: [
        "Ladeprobleme auf Platinen-Ebene (Tristar-IC, Hydra-IC, USB-Controller)",
        "Kurzschluss auf der Hauptplatine lokalisieren und beheben",
        "IC-Chip-Tausch: BGA- und QFN-Chips unter dem Mikroskop ersetzen",
        "Datenrettung: NAND-Chip direkt auslesen, wenn das Gerät nicht bootet",
        "Wasserschaden auf Platinen-Ebene: Korrosion behandeln, Bauteile ersetzen",
        "MacBook Logic Board: GPU-Fehler, Backlight-Probleme, Kurzschlüsse",
      ]},
      { type: "h2", text: "Was braucht man dafür?" },
      { type: "p", text: "Professionelles Mikrolöten erfordert ein Präzisionsmikroskop mit bis zu 100-facher Vergrösserung, eine Heissluft-Reworkstation, hochpräzise Lötkolben mit Feinspitzen, ESD-sicheres Werkzeug und vor allem: jahrelange Erfahrung. Alles davon haben wir." },
      { type: "h2", text: "Warum bieten so wenige Shops Mikrolöten an?" },
      { type: "p", text: "Die Ausrüstung ist kostspielig, die Ausbildung langwierig und die Fehlertoleranz extrem gering. Ein falscher Handgriff unter dem Mikroskop kann eine Platine dauerhaft zerstören. Deshalb lehnen die meisten Shops solche Geräte einfach ab. Bei B-repair ist Mikrolöten unser Spezialgebiet – seit 2021 im Einsatz." },
      { type: "h2", text: "Was kostet Mikrolöten?" },
      { type: "p", text: "Die Kosten variieren je nach Aufwand und Schaden. Wir erstellen immer eine kostenlose Diagnose und nennen den Fixpreis vor Beginn der Arbeiten. Oft ist Mikrolöten günstiger als der Kauf eines Ersatzgeräts – und Ihre Daten bleiben erhalten." },
    ],
  },
  {
    slug:     "smartphone-wasserschaden-was-tun",
    title:    "Smartphone Wasserschaden: Was jetzt wirklich hilft",
    excerpt:  "Handy ins Wasser gefallen? Die nächsten Minuten sind entscheidend. Wir erklären, was Sie sofort tun sollten – und was Sie auf keinen Fall tun dürfen.",
    category: "Erste Hilfe",
    date:     "1. Mai 2026",
    readMin:  4,
    content: [
      { type: "p", text: "Handy ins Wasser gefallen? In die Toilette, in den Pool oder im Regen liegen gelassen? Die ersten Minuten nach dem Wasserkontakt entscheiden darüber, ob Ihr Gerät noch zu retten ist." },
      { type: "h2", text: "Das dürfen Sie auf keinen Fall tun" },
      { type: "ul", items: [
        "Nicht einschalten: Strom durch eine nasse Platine verursacht Kurzschlüsse und zerstört Bauteile dauerhaft",
        "Nicht laden: Dasselbe gilt für das Anschliessen an ein Ladekabel",
        "Nicht in Reis legen: Dieser Mythos hält sich hartnäckig – Reis entzieht keine Feuchtigkeit aus dem Geräteinneren",
        "Nicht mit Haarfön trocknen: Hitze kann SMD-Bauteile ablösen und interne Klebeverbindungen zerstören",
      ]},
      { type: "h2", text: "Was Sie jetzt sofort tun sollten" },
      { type: "ul", items: [
        "Gerät sofort ausschalten (wenn es noch reagiert)",
        "SIM-Karte und ggf. Speicherkarte entfernen",
        "Gerät vorsichtig trocken abtupfen – nicht reiben",
        "So schnell wie möglich zur professionellen Reinigung bringen",
      ]},
      { type: "h2", text: "Warum professionelle Hilfe so wichtig ist" },
      { type: "p", text: "Wasser allein richtet oft weniger Schaden an als die Mineralien und Salze, die darin gelöst sind. Diese setzen sich auf feinen Leiterbahnen der Platine ab und verursachen innerhalb von Stunden zunehmende Korrosion – auch wenn das Gerät zunächst noch funktioniert." },
      { type: "h2", text: "Ultraschall-Reinigung: Was wir tun" },
      { type: "p", text: "Bei B-repair verwenden wir professionelle Ultraschall-Reinigung: Die Platine wird in einer speziellen Reinigungslösung behandelt, die Mineralrückstände und Korrosion effektiv entfernt, ohne die empfindlichen Bauteile zu beschädigen. Anschliessend prüfen wir jeden Schaltkreis auf Bauteil-Ebene." },
      { type: "h2", text: "Was sind die Chancen?" },
      { type: "p", text: "Mit schneller und professioneller Behandlung können viele Wasserschäden vollständig behoben werden. Je früher Sie zu uns kommen, desto besser stehen die Chancen. Wir bieten eine kostenlose Erstdiagnose für wasserbeschädigte Geräte." },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
