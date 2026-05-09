import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glossar – Fachbegriffe der Smartphone-Reparatur | B-repair&service",
  description: "Alle wichtigen Fachbegriffe rund um Smartphone-Reparatur, Mikrolöten, Displaytechnologien und Elektronik – verständlich erklärt von B-repair in Heimberg / Thun.",
};

interface Term {
  term:    string;
  type?:   string;
  def:     string;
}

const glossar: Record<string, Term[]> = {
  A: [
    { term: "AMOLED", type: "Display", def: "Active Matrix Organic Light Emitting Diode. Displaytechnologie, bei der jeder Pixel selbst leuchtet. Bietet echtes Schwarz, lebendige Farben und geringeren Stromverbrauch bei dunklen Inhalten. Standard bei Samsung, Google Pixel und anderen." },
    { term: "Akku / Lithium-Polymer", type: "Komponente", def: "Wiederaufladbarer Energiespeicher im Smartphone. Moderne Geräte nutzen Li-Po- oder Li-Ion-Akkus. Die Kapazität nimmt nach ca. 500 Ladezyklen merklich ab – bei unter 80% ist ein Tausch empfohlen." },
  ],
  B: [
    { term: "Backlight", type: "Display", def: "Hintergrundbeleuchtung bei LCD-Displays. Ohne funktionierendes Backlight bleibt der Bildschirm dunkel (sogenannter Backlight-Fehler). Bei OLED-Displays nicht vorhanden, da jeder Pixel selbst leuchtet." },
    { term: "BGA (Ball Grid Array)", type: "Mikrolöten", def: "Chip-Gehäuseform, bei der die elektrischen Verbindungen als Lotkugeln unter dem Chip angeordnet sind. Nur mit Heissluft-Reworkstation und Mikroskop zu löten oder zu tauschen – typisches Mikrolöten-Anwendungsfeld." },
    { term: "Board-Level Repair", type: "Reparatur", def: "Reparatur direkt auf der Hauptplatine (Logic Board) des Geräts – auf Ebene einzelner Bauteile wie Chips, Kondensatoren oder Widerstände. Erfordert Mikrolöt-Equipment und IPC-Zertifizierung." },
  ],
  D: [
    { term: "Datenrettung", type: "Reparatur", def: "Wiederherstellung von Fotos, Kontakten, Nachrichten und Dokumenten von defekten oder nicht startenden Geräten. Im Extremfall durch direktes Auslesen des NAND-Chips möglich – auch wenn das Gerät keinen Strom mehr bekommt." },
    { term: "Display / Digitizer", type: "Display", def: "Anzeigeeinheit des Smartphones, bestehend aus Panel (LCD oder OLED) und Touchscreen-Schicht (Digitizer). Bei vielen modernen Modellen sind beide Komponenten als ein Bauteil fest zusammengeklebt." },
  ],
  E: [
    { term: "eMMC (embedded MultiMediaCard)", type: "Speicher", def: "Flashspeicher-Standard, der in vielen Android-Smartphones verwendet wird. Günstiger als UFS, aber langsamer. Für die Datenrettung kann der Chip direkt ausgelesen werden, wenn das Gerät nicht mehr bootet." },
  ],
  F: [
    { term: "Face ID", type: "Sicherheit", def: "Apples 3D-Gesichtserkennungs-Technologie, eingeführt mit dem iPhone X. Nutzt strukturiertes Licht und Infrarotsensoren für biometrische Authentifizierung. Bei Displayreparaturen muss Face ID kalibriert werden." },
    { term: "Fixpreis", type: "Service", def: "Fester Reparaturpreis, der vor Beginn der Arbeit kommuniziert wird – ohne versteckte Zusatzkosten. Bei B-repair gilt ausschliesslich Fixpreispolitik: Sie kennen den Preis, bevor wir anfangen." },
  ],
  G: [
    { term: "Garantie", type: "Service", def: "Gewährleistung für durchgeführte Reparaturen. B-repair bietet 6 Monate Garantie auf alle Reparaturen – doppelt so lang wie die meisten Mitbewerber und doppelt so lang wie der Apple-Reparaturservice." },
  ],
  I: [
    { term: "IC (Integrated Circuit)", type: "Elektronik", def: "Integrierter Schaltkreis, umgangssprachlich als «Chip» bezeichnet. Auf dem Logic Board eines Smartphones befinden sich Dutzende ICs für verschiedene Funktionen: Laden, Audio, Kommunikation, Kamera und mehr." },
    { term: "IMEI", type: "Allgemein", def: "International Mobile Equipment Identity – weltweit eindeutige 15-stellige Seriennummer eines Mobilgeräts. Wichtig für Entsperrungen, Versicherungen und Diebstahlsicherung. Abrufbar über *#06# auf dem Ziffernblock." },
    { term: "IPC-Zertifizierung", type: "Qualität", def: "Internationale Qualitätsnorm (IPC-7711/7721) für Reparatur und Modifikation von Elektronikbaugruppen. B-repair ist IPC-zertifiziert – ein Qualitätsmerkmal, das nur wenige Reparaturbetriebe in der Schweiz vorweisen können." },
  ],
  K: [
    { term: "Kurzschluss (Short Circuit)", type: "Schaden", def: "Unerwünschte direkte elektrische Verbindung zwischen zwei Punkten unterschiedlichen Potenzials auf der Platine. Ursache für überhitzte Geräte, fehlerhaftes Laden oder Totalausfall. Diagnose und Behebung erfordern Mikrolöten-Expertise." },
  ],
  L: [
    { term: "LCD (Liquid Crystal Display)", type: "Display", def: "Flüssigkristallbildschirm, der eine externe Hintergrundbeleuchtung (Backlight) benötigt. Günstigere Technologie als OLED, jedoch mit weniger tiefem Schwarz, höherem Stromverbrauch und geringerem Kontrast." },
    { term: "Logic Board / Hauptplatine", type: "Komponente", def: "Zentrale Leiterplatte des Smartphones, auf der Prozessor, RAM, Speicher und alle wichtigen ICs verbaut sind. Reparaturen am Logic Board erfordern Mikrolöten-Kompetenz und Präzisionswerkzeug." },
  ],
  M: [
    { term: "Microsoldering / Mikrolöten", type: "Reparatur", def: "Präzisionslöten unter dem Mikroskop auf Bauteil-Ebene. Ermöglicht Reparaturen, die mit blossem Auge unmöglich wären: BGA-Chip-Tausch, Pad-Reparaturen, Leiterbahn-Wiederherstellung. B-repair ist einer der wenigen IPC-zertifizierten Mikrolöt-Spezialisten im Grossraum Thun." },
  ],
  N: [
    { term: "NAND-Flash", type: "Speicher", def: "Halbleiterspeicher-Technologie, die in Smartphones als nicht-flüchtiger Datenspeicher dient. NAND-Chips können bei schweren Schäden direkt ausgelesen werden – Grundlage für Chip-Level-Datenrettung." },
  ],
  O: [
    { term: "OLED (Organic Light Emitting Diode)", type: "Display", def: "Selbstleuchtende Displaytechnologie ohne Backlight. Jeder Pixel erzeugt sein eigenes Licht, was echtes Schwarz, hohen Kontrast und (bei dunklen Inhalten) niedrigeren Stromverbrauch ermöglicht. Standard bei modernen iPhones und Samsung-Flaggschiffen." },
    { term: "OEM-Teile", type: "Ersatzteile", def: "Original Equipment Manufacturer – Teile, die nach Herstellerspezifikation gefertigt werden, aber nicht direkt vom Originalhersteller stammen. Oft günstigere Alternative zu Originalteilen mit vergleichbarer Qualität und Lebensdauer." },
  ],
  P: [
    { term: "PMIC (Power Management IC)", type: "Elektronik", def: "Chip, der die gesamte Energieverteilung im Gerät regelt: Laden, Spannungsversorgung der Komponenten, Akku-Management. Ein defekter PMIC führt zu Ladefehlern, spontanen Abstürzen oder Totalausfall." },
    { term: "ProMotion", type: "Display", def: "Apples adaptive 120-Hz-Displaytechnologie (ab iPhone 13 Pro). Passt die Bildwiederholrate dynamisch zwischen 1 Hz und 120 Hz an den Bildinhalt an – für flüssigere Darstellung und längere Akkulaufzeit." },
  ],
  Q: [
    { term: "QFN (Quad Flat No-leads)", type: "Mikrolöten", def: "Flaches Chip-Gehäuse ohne Anschlussdrähte, das auf alle vier Seiten oder die Unterseite gelötet wird. Typisches Bauteil bei Mikrolöten-Reparaturen – erfordert Heissluft-Reworkstation und Mikroskop." },
  ],
  R: [
    { term: "Rework-Station", type: "Equipment", def: "Heissluftlötstation für präzise SMD-Bauteil-Reparaturen. Notwendig für das Auslöten und Einlöten von BGA- und QFN-Chips. Kernwerkzeug jeder professionellen Mikrolöt-Werkstatt." },
  ],
  S: [
    { term: "Super AMOLED", type: "Display", def: "Samsungs weiterentwickelte AMOLED-Technologie, bei der der Touchscreen direkt in das Display integriert ist (kein separater Digitizer). Ergibt dünnere, hellere und energieeffizientere Displays." },
  ],
  T: [
    { term: "Touch ID", type: "Sicherheit", def: "Apples kapazitiver Fingerabdrucksensor, integriert in den Home-Button älterer iPhones oder die Einschalttaste (iPhone SE). Dient der biometrischen Entsperrung und Apple-Pay-Authentifizierung." },
    { term: "Tristar IC (U2-Chip)", type: "Elektronik", def: "Apples proprietärer USB- und Lade-Controller auf dem Logic Board älterer iPhones. Ein defekter Tristar-IC ist häufige Ursache für Ladeprobleme (Gerät lädt nicht oder nur sporadisch) – typische Mikrolöten-Reparatur." },
    { term: "True Tone", type: "Display", def: "Apples adaptive Weissabgleich-Technologie (ab iPhone 8). Passt die Farbtemperatur des Displays an die Umgebungsbeleuchtung an, sodass Inhalte natürlicher wirken." },
  ],
  U: [
    { term: "UFS (Universal Flash Storage)", type: "Speicher", def: "Schnellerer Flashspeicher-Standard, der eMMC in modernen Flaggschiffen ablöst (Samsung Galaxy S-Serie, neuere iPhones). Bietet deutlich höhere Lese- und Schreibgeschwindigkeiten." },
    { term: "Ultraschall-Reinigung", type: "Reparatur", def: "Reinigungsverfahren für wasserbeschädigte Platinen. Ein Ultraschallbad in spezieller Reinigungsflüssigkeit löst Mineralrückstände und Korrosion von feinen Leiterbahnen, ohne die Bauteile zu beschädigen. Effektiver als jede manuelle Reinigung." },
  ],
  W: [
    { term: "Wasserschaden (Liquid Damage)", type: "Schaden", def: "Eindringen von Feuchtigkeit ins Gerät. Verursacht Kurzschlüsse, Korrosion und Bauteilschäden. Richtige Soforthilfe: Gerät sofort ausschalten, nicht in Reis legen, professionelle Ultraschall-Reinigung so schnell wie möglich." },
  ],
};

const letters = Object.keys(glossar).sort();

const typeColor: Record<string, string> = {
  "Display":    "bg-blue-50 text-blue-600 border-blue-200",
  "Mikrolöten": "bg-brand-orange/10 text-brand-orange border-brand-orange/30",
  "Reparatur":  "bg-brand-accent/10 text-brand-accent border-brand-accent/30",
  "Schaden":    "bg-red-50 text-red-500 border-red-200",
  "Qualität":   "bg-purple-50 text-purple-600 border-purple-200",
  "Speicher":   "bg-indigo-50 text-indigo-600 border-indigo-200",
  "Elektronik": "bg-yellow-50 text-yellow-700 border-yellow-200",
  "Komponente": "bg-gray-100 text-gray-600 border-gray-200",
  "Service":    "bg-green-50 text-green-600 border-green-200",
  "Sicherheit": "bg-pink-50 text-pink-600 border-pink-200",
  "Ersatzteile":"bg-teal-50 text-teal-600 border-teal-200",
  "Equipment":  "bg-orange-50 text-orange-600 border-orange-200",
  "Allgemein":  "bg-gray-100 text-gray-600 border-gray-200",
};

export default function GlossarPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-14 lg:pt-36 lg:pb-16" style={{ background: "#F8FAFB" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] mb-3 block">
            Fachbegriffe
          </span>
          <h1 className="font-headline text-5xl sm:text-6xl text-brand-primary mb-4">
            Glossar
          </h1>
          <p className="font-sans text-brand-gray text-lg max-w-xl mx-auto">
            Alle wichtigen Begriffe rund um Smartphone-Reparatur, Mikrolöten und
            Displaytechnologien – verständlich erklärt.
          </p>

          {/* Letter navigation */}
          <div className="flex flex-wrap justify-center gap-1.5 mt-8">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-9 h-9 rounded-lg bg-white border border-brand-border font-headline text-sm text-brand-primary hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all flex items-center justify-center"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {letters.map((letter) => (
              <div key={letter} id={`letter-${letter}`}>
                {/* Letter heading */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-headline text-5xl text-brand-accent/30 leading-none w-10 flex-shrink-0">
                    {letter}
                  </span>
                  <div className="flex-1 h-px bg-brand-border" />
                </div>

                {/* Terms in this letter */}
                <div className="space-y-2 ml-14">
                  {glossar[letter].map(({ term, type, def }) => (
                    <details
                      key={term}
                      className="group rounded-xl border border-brand-border bg-white hover:border-brand-accent/30 transition-colors overflow-hidden"
                    >
                      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer select-none">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h2 className="font-headline text-xl text-brand-primary leading-none">
                            {term}
                          </h2>
                          {type && (
                            <span className={`inline-flex px-2 py-0.5 rounded-md border text-[10px] font-bold font-sans uppercase tracking-wide ${typeColor[type] ?? "bg-gray-100 text-gray-500 border-gray-200"}`}>
                              {type}
                            </span>
                          )}
                        </div>
                        <ChevronDown className="w-4 h-4 text-brand-gray flex-shrink-0 ml-3 transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <div className="px-5 pb-5 border-t border-brand-border/60">
                        <p className="font-sans text-brand-gray text-sm leading-relaxed pt-4">
                          {def}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
