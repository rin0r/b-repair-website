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
  {
    slug:     "iphone-akku-wechseln-wann-lohnt-es-sich",
    title:    "iPhone Akku wechseln: Wann lohnt es sich?",
    excerpt:  "Der Akku Ihres iPhones hält nicht mehr lange? Schaltet sich spontan ab? Wir erklären, ab wann ein Akkutausch sinnvoll ist – und warum Sie nicht zum Apple Store müssen.",
    category: "Reparatur-Tipps",
    date:     "6. Mai 2026",
    readMin:  4,
    content: [
      { type: "p", text: "Ihr iPhone hält nur noch einen halben Tag? Schaltet sich bei 20% spontan ab? Startet nach dem Laden nicht richtig? Das sind klassische Zeichen eines alternden Akkus – und die gute Nachricht: Das lässt sich schnell und günstig beheben." },
      { type: "h2", text: "Wann ist ein Akkutausch sinnvoll?" },
      { type: "p", text: "Apple selbst empfiehlt einen Akkutausch, wenn die Akkukapazität unter 80% gesunken ist. Das können Sie direkt auf Ihrem iPhone prüfen: Einstellungen → Batterie → Batteriezustand und Laden." },
      { type: "ul", items: [
        "Akkukapazität unter 80%: Tausch fast immer empfohlen",
        "Gerät schaltet sich bei vollem Display spontan aus",
        "Akku lädt langsam oder gar nicht mehr",
        "iPhone wird warm beim Laden",
        "Gerät startet nach dem Laden nicht ohne Kabel",
      ]},
      { type: "h2", text: "Original oder OEM-Akku?" },
      { type: "p", text: "Wir verwenden hochwertige OEM-Akkus, die nach Apples Originalspezifikation gefertigt werden und in Kapazität, Sicherheit und Lebensdauer mit dem Original vergleichbar sind. Alle Akkus sind durch unsere 6-Monate-Garantie abgedeckt." },
      { type: "h2", text: "Gilt das auch für ältere iPhones?" },
      { type: "p", text: "Ja. Ein Akkutausch lohnt sich besonders für iPhones, die noch aktuelle iOS-Versionen erhalten – in der Regel die letzten 5–6 Modellgenerationen. Wir tauschen Akkus für alle gängigen iPhone-Modelle. Kein Termin nötig – einfach während der Öffnungszeiten vorbeikommen." },
    ],
  },
  {
    slug:     "handy-reparatur-thun-heimberg",
    title:    "Handy reparieren in der Region Thun – lokal statt online versenden",
    excerpt:  "Warum ein lokaler Reparaturspezialist in Heimberg oft die bessere Wahl ist als ein Online-Versanddienst oder der Hersteller-Service – für Kunden aus Thun, Bern und der ganzen Schweiz.",
    category: "Lokal",
    date:     "9. Mai 2026",
    readMin:  3,
    content: [
      { type: "p", text: "Online-Versanddienste für Handyreparaturen klingen verlockend: Einschicken, warten, zurückbekommen. Aber wie praktisch ist das wirklich – und was spricht für einen lokalen Anbieter wie B-repair in Heimberg?" },
      { type: "h2", text: "Region Thun: Direkt für Sie erreichbar" },
      { type: "ul", items: [
        "Heimberg: direkt vor Ort",
        "Thun Innenstadt: ca. 10 Minuten",
        "Steffisburg: ca. 5 Minuten",
        "Gwatt & Hünibach: ca. 8 Minuten",
        "Spiez: ca. 15 Minuten",
        "Bern: ca. 25 Minuten",
      ]},
      { type: "h2", text: "Warum lokal besser ist" },
      { type: "p", text: "Bei B-repair sehen Sie, wer Ihr Gerät in den Händen hält. Wir erklären das Problem verständlich, nennen den Preis vor der Reparatur und geben 6 Monate Garantie. Kein Call-Center, kein anonymes Paket – sondern direkter Kontakt und Vertrauen." },
      { type: "h2", text: "Versandservice für die ganze Schweiz" },
      { type: "p", text: "Wohnen Sie weiter weg? Kein Problem – wir nehmen auch Geräte per versichertem Postversand aus der ganzen Schweiz entgegen. Nach der Reparatur schicken wir Ihr Gerät schnell und sicher zurück. Kontaktieren Sie uns einfach vorab für die Details." },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
