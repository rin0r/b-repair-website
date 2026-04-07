import type { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone, Battery, Wifi, Camera, Mic, Wrench, Droplets,
  Cpu, Monitor, HardDrive, ChevronRight, CheckCircle2, ArrowRight, Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Leistungen | B-repair&service – Smartphone & Laptop Reparatur",
  description:
    "Alle Reparatur-Leistungen: Display, Akku, Mikrolöten, Datenrettung, Wasserschaden, Computer & Laptop. Kostenlose Diagnose in Heimberg.",
};

const services = [
  {
    icon: Monitor,
    title: "Display-Reparatur",
    badge: "60–90 Min",
    badgeColor: "text-brand-accent bg-brand-accent/10 border-brand-accent/20",
    desc: "Ein gesprungenes Display muss nicht das Ende sein. Wir tauschen LCD- und OLED-Displays aller gängigen Modelle professionell aus.",
    items: [
      "LCD- & OLED-Tausch",
      "Touchscreen-Kalibrierung",
      "Displayrahmen & Glas",
      "Pixelfehler-Diagnose",
      "Rückseitenglas-Tausch",
    ],
  },
  {
    icon: Battery,
    title: "Akku-Austausch",
    badge: "30–45 Min",
    badgeColor: "text-brand-accent bg-brand-accent/10 border-brand-accent/20",
    desc: "Schlechte Laufzeit? Wir ersetzen Ihren Akku mit Original- oder Premium-Ersatzteilen und bringen Ihr Gerät zurück auf Touren.",
    items: [
      "Akkukapazitätsmessung",
      "Original & Premium-Akkus",
      "Ladeport-Reparatur",
      "Schnelllade-Diagnose",
      "Kabelloses Laden reparieren",
    ],
  },
  {
    icon: Cpu,
    title: "Mikrolöten",
    badge: "1–3 Tage",
    badgeColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    desc: "Unser Spezialgebiet: Präzise Reparaturen auf Platinen-Ebene für komplexe Schäden, die andere nicht lösen können.",
    items: [
      "IC- & Bauteil-Tausch",
      "Kurzschlussdiagnose",
      "Lötreparaturen (BGA/QFN)",
      "Ladechip-Reparatur",
      "Platinen-Rekonstruktion",
    ],
  },
  {
    icon: HardDrive,
    title: "Datenrettung",
    badge: "1–5 Tage",
    badgeColor: "text-green-400 bg-green-400/10 border-green-400/20",
    desc: "Gerät defekt, aber Daten noch vorhanden? Wir retten Fotos, Kontakte und Dokumente von beschädigten Geräten.",
    items: [
      "Daten sichern vor Reparatur",
      "Wiederherstellung nach Crash",
      "Backup auf Wunsch-Medium",
      "Verschlüsselte Verarbeitung",
      "Bericht nach Abschluss",
    ],
  },
  {
    icon: Camera,
    title: "Kamera-Reparatur",
    badge: "45–90 Min",
    badgeColor: "text-brand-accent bg-brand-accent/10 border-brand-accent/20",
    desc: "Verschwommene, dunkle oder defekte Kamera? Wir reparieren oder ersetzen Front- und Rückkamera aller Marken.",
    items: [
      "Rückkamera-Austausch",
      "Frontkamera-Reparatur",
      "Kameraglas-Austausch",
      "Autofokus-Probleme",
      "Blitz-Reparatur",
    ],
  },
  {
    icon: Droplets,
    title: "Wasserschaden",
    badge: "1–2 Tage",
    badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    desc: "Schnelles Handeln ist entscheidend. Wir trocknen, reinigen und reparieren professionell mit Ultraschalltechnik.",
    items: [
      "Ultraschallreinigung",
      "Korrosionsbehandlung",
      "Platinendiagnose",
      "Komponentenprüfung",
      "Kostenlose Erstdiagnose",
    ],
  },
  {
    icon: Wrench,
    title: "Computer & Laptop",
    badge: "1–3 Tage",
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    desc: "MacBook, Windows-Laptop oder iMac – wir reparieren Display, Akku, Tastatur und mehr für alle gängigen Modelle.",
    items: [
      "Display & Backlight",
      "Akku-Austausch",
      "Tastatur & Trackpad",
      "SSD-Upgrade",
      "Platinen-Diagnose",
    ],
  },
  {
    icon: Mic,
    title: "Audio-Reparatur",
    badge: "30–60 Min",
    badgeColor: "text-brand-accent bg-brand-accent/10 border-brand-accent/20",
    desc: "Kein Ton, schlechte Gesprächsqualität oder defekter Kopfhöreranschluss? Wir reparieren alle Audio-Komponenten.",
    items: [
      "Lautsprecher-Austausch",
      "Mikrofon-Reparatur",
      "Kopfhörerbuchse",
      "Earspeaker-Tausch",
      "Tonprobleme-Diagnose",
    ],
  },
  {
    icon: Wifi,
    title: "Software & Diagnose",
    badge: "30–60 Min",
    badgeColor: "text-brand-accent bg-brand-accent/10 border-brand-accent/20",
    desc: "Abstürze, Viren, langsames System? Unsere Software-Experten analysieren und beheben das Problem.",
    items: [
      "Betriebssystem-Reparatur",
      "Virus- & Malware-Entfernung",
      "Passwort-Entsperrung",
      "Werksreset & Einrichtung",
      "Kostenlose Diagnose",
    ],
  },
];

export default function LeistungenPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-14 bg-grid relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-accent/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center gap-2 text-xs text-brand-muted mb-4">
            <Link href="/" className="hover:text-brand-accent transition-colors">Start</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Leistungen</span>
          </nav>
          <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.15em]">Was wir können</span>
          <h1 className="mt-1 text-4xl sm:text-5xl font-black text-white leading-tight">Unsere Leistungen</h1>
          <p className="mt-3 text-brand-muted text-base max-w-xl leading-relaxed">
            Von der Express-Displayreparatur bis zur komplexen Mikrolötung –
            B-repair&service bietet professionelle Lösungen für alle Defekte.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, badge, badgeColor, desc, items }) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-brand-card border border-white/6 hover:border-white/14 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                    <Icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h2 className="font-black text-white text-sm mb-1">{title}</h2>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold ${badgeColor}`}>
                      <Clock className="w-2.5 h-2.5" />
                      {badge}
                    </span>
                  </div>
                </div>
                <p className="text-brand-muted text-xs leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-1.5 border-t border-white/6 pt-4">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-brand-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
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
      <section className="py-16 bg-brand-surface border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.15em]">So einfach</span>
            <h2 className="mt-1 text-3xl font-black text-white">Unser Ablauf</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Vorbeikommen", d: "Kein Termin nötig – einfach während der Öffnungszeiten vorbeibringen. Bürglenweg 24, Heimberg." },
              { n: "02", t: "Kostenlose Diagnose", d: "Wir prüfen Ihr Gerät und nennen Ihnen den genauen Preis. Transparent, ohne Überraschungen." },
              { n: "03", t: "Express-Reparatur", d: "Die meisten Reparaturen sind in unter 2 Stunden abgeschlossen. Sie können warten oder abholen." },
              { n: "04", t: "Garantie & Abholung", d: "Gerät abholen, bezahlen – mit 6 Monaten Garantie auf die Reparatur." },
            ].map(({ n, t, d }) => (
              <div key={n} className="p-5 rounded-2xl bg-brand-card border border-white/6">
                <div className="text-5xl font-black text-brand-accent/15 mb-3 font-mono leading-none">{n}</div>
                <h3 className="font-black text-white text-sm mb-2">{t}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Bereit für die Reparatur?</h2>
          <p className="text-brand-muted text-sm mb-8">Kontaktieren Sie uns oder sehen Sie sich unsere Preisliste an.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent text-white font-bold text-sm hover:bg-brand-accent-dark transition-all glow"
            >
              Kontakt aufnehmen <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/preisliste"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 text-brand-muted font-semibold text-sm hover:border-brand-accent/50 hover:text-white transition-all"
            >
              Preisliste ansehen <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
