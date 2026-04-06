import type { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Battery,
  Wifi,
  Camera,
  Mic,
  Wrench,
  Droplets,
  Cpu,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Leistungen | B-repair&service",
  description:
    "Alle Reparatur-Leistungen von B-repair&service: Display, Akku, Kamera, Software, Wasserschaden und mehr.",
};

const serviceGroups = [
  {
    icon: Smartphone,
    title: "Display-Reparatur",
    desc: "Ein gesprungenes oder defektes Display muss nicht das Ende Ihres Geräts bedeuten. Wir tauschen Displays aller gängigen Modelle schnell und fachgerecht aus.",
    items: [
      "LCD- & OLED-Display-Austausch",
      "Touchscreen-Kalibrierung",
      "Displayrahmen & Glas",
      "Reparatur bei Pixelfehlern",
      "Anzeigeproblem-Diagnose",
    ],
  },
  {
    icon: Battery,
    title: "Akku-Austausch",
    desc: "Schlechte Akkuleistung? Wir ersetzen Ihren Akku durch Original- oder Premium-Ersatzteile und bringen so Ihre Laufzeit zurück.",
    items: [
      "Akkukapazitätsmessung",
      "Original & Premium-Akkus",
      "Ladeport-Reparatur",
      "Schnellladediagnose",
      "Kabelloses Laden reparieren",
    ],
  },
  {
    icon: Wifi,
    title: "Software & Diagnose",
    desc: "Abstürze, Viren, langsames System oder vergessene Passwörter – unsere Software-Experten analysieren und beheben das Problem.",
    items: [
      "Betriebssystem-Reparatur",
      "Datensicherung & Wiederherstellung",
      "Virus- & Malware-Entfernung",
      "Passwort-Entsperrung",
      "Werksreset & Neueinrichtung",
    ],
  },
  {
    icon: Camera,
    title: "Kamera-Reparatur",
    desc: "Verschwommene, dunkle oder gar keine Bilder mehr? Wir reparieren oder ersetzen die Front- und Rückkamera Ihres Smartphones.",
    items: [
      "Rückkamera-Austausch",
      "Frontkamera-Reparatur",
      "Kameraglas-Austausch",
      "Autofokus-Probleme",
      "Blitz-Reparatur",
    ],
  },
  {
    icon: Mic,
    title: "Audio-Reparatur",
    desc: "Kein Ton, schlechte Gesprächsqualität oder defekter Kopfhöreranschluss? Wir reparieren alle Audio-Komponenten Ihres Geräts.",
    items: [
      "Lautsprecher-Austausch",
      "Mikrofon-Reparatur",
      "Kopfhörerbuchse",
      "Earspeaker-Tausch",
      "Tonprobleme-Diagnose",
    ],
  },
  {
    icon: Droplets,
    title: "Wasserschaden",
    desc: "Ihr Gerät hatte Kontakt mit Flüssigkeit? Schnelles Handeln ist entscheidend. Wir trocknen, reinigen und reparieren professionell.",
    items: [
      "Ultraschallreinigung",
      "Platinenreparatur",
      "Korrosionsbehandlung",
      "Komponentenprüfung",
      "Kostenlose Erstdiagnose",
    ],
  },
  {
    icon: Cpu,
    title: "Platinen & Elektronik",
    desc: "Komplexe Hardware-Probleme auf Platinenebene? Unsere Techniker verfügen über die nötigen Werkzeuge und Kenntnisse.",
    items: [
      "Kurzschlussdiagnose",
      "IC-Tausch",
      "Lötreparaturen",
      "Ladechip-Reparatur",
      "Erweiterte Diagnose",
    ],
  },
  {
    icon: Wrench,
    title: "Gehäuse & Mechanik",
    desc: "Verbogenes Gehäuse, defekte Tasten oder ein kaputtes Scharnier – wir bringen Ihr Gerät mechanisch wieder in Top-Form.",
    items: [
      "Gehäuse-Austausch",
      "Lautstärke-/Power-Tasten",
      "SIM-Karten-Schacht",
      "Ladeanschluss",
      "Rückseitenglas",
    ],
  },
];

export default function LeistungenPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 bg-grid relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-brand-accent/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <nav className="flex items-center gap-2 text-sm text-brand-muted mb-4">
              <Link href="/" className="hover:text-brand-accent transition-colors">
                Start
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-brand-text">Leistungen</span>
            </nav>
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
              Was wir können
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-brand-text leading-tight">
              Unsere Leistungen
            </h1>
            <p className="mt-4 text-brand-muted text-lg leading-relaxed">
              Von der einfachen Display-Reparatur bis zur komplexen Platinenreparatur –
              B-repair&service bietet professionelle Lösungen für alle Smartphone-Probleme.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceGroups.map(({ icon: Icon, title, desc, items }) => (
              <div
                key={title}
                className="p-7 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-brand-text">{title}</h2>
                    <p className="text-brand-muted text-sm leading-relaxed mt-1">{desc}</p>
                  </div>
                </div>
                <ul className="space-y-2 border-t border-brand-border pt-4">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-brand-muted">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
              So einfach geht's
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-brand-text">Unser Ablauf</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Gerät vorbeibringen",
                desc: "Bringen Sie Ihr Gerät zu uns in den Shop an der Bürglenweg 24, Heimberg.",
              },
              {
                step: "02",
                title: "Kostenlose Diagnose",
                desc: "Wir prüfen Ihr Gerät sorgfältig und informieren Sie über Kosten und Dauer.",
              },
              {
                step: "03",
                title: "Professionelle Reparatur",
                desc: "Unsere Techniker reparieren Ihr Gerät mit hochwertigen Ersatzteilen.",
              },
              {
                step: "04",
                title: "Gerät abholen",
                desc: "Sie holen Ihr repariertes Gerät ab – oft schon am selben Tag.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative p-6 rounded-2xl bg-brand-card border border-brand-border">
                <div className="text-5xl font-extrabold text-brand-accent/20 mb-3 font-mono">
                  {step}
                </div>
                <h3 className="font-semibold text-brand-text mb-2">{title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-brand-text mb-4">
            Bereit für die Reparatur?
          </h2>
          <p className="text-brand-muted mb-8">
            Kontaktieren Sie uns jetzt oder schauen Sie sich unsere Preisliste an.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent text-white font-semibold hover:bg-brand-accent-dark transition-all glow"
            >
              Kontakt aufnehmen
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/preisliste"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-brand-border text-brand-text font-semibold hover:border-brand-accent hover:text-brand-accent transition-all"
            >
              Preisliste ansehen
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
