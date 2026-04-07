import type { Metadata } from "next";
import Link from "next/link";
import {
  Monitor, Battery, Cpu, HardDrive, Camera, Droplets, Wrench, Mic, Wifi,
  ChevronRight, ArrowRight, Clock, CheckCircle2, AlertCircle, Lightbulb, Shield,
} from "lucide-react";

// VERKAUFSPSYCHOLOGIE: Leistungsseite nach Problem→Schmerz→Lösung→Beweis-Schema.
// Jede Karte adressiert zuerst das Problem als Frage (Identifikation),
// beschreibt den Schmerz (Empathie), präsentiert die Lösung (Angebot)
// und beendet mit Garantie/Beweis (Vertrauen).

export const metadata: Metadata = {
  title: "Reparaturen | B-repair&service – Smartphone, Laptop & Mikrolöten",
  description:
    "Professionelle Reparaturen: Display, Akku, Mikrolöten, Datenrettung, Wasserschaden, Computer. Kostenlose Diagnose in Heimberg bei Thun.",
};

const services = [
  {
    icon:    Monitor,
    title:   "Display-Reparatur",
    badge:   "60–90 Min",
    problem: "Ihr Display ist gesprungen oder reagiert nicht mehr?",
    pain:    "Ein kaputtes Display macht das Gerät kaum benutzbar – und jeder Kratzer auf dem Glas schmerzt.",
    solution:"Wir tauschen LCD- und OLED-Displays aller Modelle professionell aus – mit Originalqualität oder Premium-Ersatzteilen.",
    proof:   "6 Monate Garantie auf jede Display-Reparatur.",
    items:   ["LCD- & OLED-Austausch", "Touchscreen-Kalibrierung", "Displayrahmen & Glas", "Pixelfehler-Diagnose", "Rückseitenglas"],
    accent:  "border-brand-accent",
    iconCol: "text-brand-accent",
  },
  {
    icon:    Battery,
    title:   "Akku-Austausch",
    badge:   "30–45 Min",
    problem: "Ihr Gerät hält kaum noch eine Stunde durch?",
    pain:    "Ständig am Ladekabel – das schränkt ein und ist auf Dauer nervig und teuer.",
    solution:"Wir ersetzen Ihren Akku durch Original- oder Premium-Teile und bringen die volle Laufzeit zurück.",
    proof:   "6 Monate Garantie. Akkukapazität messen wir kostenlos.",
    items:   ["Akkukapazitätsmessung", "Original & Premium-Akkus", "Ladeport-Reparatur", "Schnelllade-Diagnose", "Kabelloses Laden"],
    accent:  "border-brand-accent",
    iconCol: "text-brand-accent",
  },
  {
    icon:    HardDrive,
    title:   "Datenrettung",
    badge:   "1–5 Tage",
    problem: "Gerät tot – aber Ihre Fotos und Daten noch drauf?",
    pain:    "Geburtstagsfotos, Dokumente, Kontakte – einmal weg, für immer verloren. Das muss nicht sein.",
    solution:"Wir retten Daten auch von stark beschädigten Geräten. Sichere, verschlüsselte Verarbeitung.",
    proof:   "Bericht nach Abschluss. Keine Daten = keine Kosten.",
    items:   ["Daten sichern vor Reparatur", "Wiederherstellung nach Crash", "Backup auf Wunsch-Medium", "Verschlüsselte Verarbeitung", "Abschlussbericht"],
    accent:  "border-green-500",
    iconCol: "text-green-600",
  },
  {
    icon:    Camera,
    title:   "Kamera-Reparatur",
    badge:   "45–90 Min",
    problem: "Ihre Fotos sind verschwommen, dunkel oder die Kamera startet gar nicht?",
    pain:    "Ein Gerät ohne funktionierendem Kamera ist in der heutigen Zeit halbes Gerät.",
    solution:"Wir reparieren oder ersetzen Front- und Rückkamera, Glas, Autofokus und Blitz.",
    proof:   "6 Monate Garantie auf jede Kamera-Reparatur.",
    items:   ["Rückkamera-Austausch", "Frontkamera-Reparatur", "Kameraglas-Austausch", "Autofokus-Probleme", "Blitz-Reparatur"],
    accent:  "border-brand-accent",
    iconCol: "text-brand-accent",
  },
  {
    icon:    Droplets,
    title:   "Wasserschaden",
    badge:   "1–2 Tage",
    problem: "Ihr Gerät hatte Kontakt mit Wasser oder Flüssigkeit?",
    pain:    "Jede Stunde zählt – Korrosion breitet sich aus und zerstört Bauteile, die noch zu retten wären.",
    solution:"Wir trocknen und reinigen mit Ultraschalltechnik, behandeln Korrosion auf Platinen-Ebene.",
    proof:   "Kostenlose Erstdiagnose. Keine Hoffnung aufgeben, bevor wir geschaut haben.",
    items:   ["Ultraschallreinigung", "Korrosionsbehandlung", "Platinendiagnose", "Komponentenprüfung", "Kostenlose Erstdiagnose"],
    accent:  "border-blue-500",
    iconCol: "text-blue-600",
  },
  {
    icon:    Wrench,
    title:   "Computer & Laptop",
    badge:   "1–3 Tage",
    problem: "MacBook oder Laptop läuft langsam, Display ist kaputt oder startet nicht mehr?",
    pain:    "Ein Laptop-Ausfall kostet mehr als Geld – er kostet Arbeit, Zeit und Nerven.",
    solution:"MacBook, Windows-Laptop, iMac: Display, Akku, Tastatur, SSD-Upgrade, Platinen-Diagnose.",
    proof:   "6 Monate Garantie. Diagnosebericht inklusive.",
    items:   ["Display & Backlight", "Akku-Austausch", "Tastatur & Trackpad", "SSD-Upgrade", "Platinen-Diagnose"],
    accent:  "border-purple-500",
    iconCol: "text-purple-600",
  },
  {
    icon:    Mic,
    title:   "Audio-Reparatur",
    badge:   "30–60 Min",
    problem: "Kein Ton, Knistern oder der Gesprächspartner hört Sie kaum?",
    pain:    "Schlechte Audioqualität macht Telefonate zur Geduldsprobe – besonders im Beruf.",
    solution:"Wir reparieren Lautsprecher, Mikrofon, Kopfhörerbuchse und Earspeaker.",
    proof:   "6 Monate Garantie auf alle Audio-Reparaturen.",
    items:   ["Lautsprecher-Austausch", "Mikrofon-Reparatur", "Kopfhörerbuchse", "Earspeaker-Tausch", "Tonprobleme-Diagnose"],
    accent:  "border-brand-accent",
    iconCol: "text-brand-accent",
  },
  {
    icon:    Wifi,
    title:   "Software & Diagnose",
    badge:   "30–60 Min",
    problem: "Abstürze, Viren, vergessenes Passwort oder ein langsames System?",
    pain:    "Software-Probleme sind unsichtbar, aber nervenraubend – und oft unnötig.",
    solution:"Wir analysieren, bereinigen und reparieren: Betriebssystem, Viren, Passwort-Entsperrung, Werksreset.",
    proof:   "Kostenlose Erstdiagnose. Transparent, bevor wir etwas tun.",
    items:   ["Betriebssystem-Reparatur", "Virus- & Malware-Entfernung", "Passwort-Entsperrung", "Werksreset & Einrichtung", "Kostenlose Diagnose"],
    accent:  "border-brand-accent",
    iconCol: "text-brand-accent",
  },
];

/* ─── PAGE ───────────────────────────────────────────── */
export default function LeistungenPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-14 bg-grid relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-accent/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center gap-2 text-xs text-brand-gray font-sans mb-4">
            <Link href="/" className="hover:text-brand-accent transition-colors">Start</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-primary font-bold">Reparaturen</span>
          </nav>
          <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] block mb-1">Was wir reparieren</span>
          <h1 className="font-headline text-4xl sm:text-5xl text-brand-primary leading-tight">
            Reparaturen
          </h1>
          <p className="mt-3 font-sans text-brand-gray text-base max-w-xl leading-relaxed">
            Von der Display-Reparatur bis zur komplexen Mikrolötung – mit 6 Monaten Garantie und kostenloser Erstdiagnose.
          </p>
        </div>
      </section>

      {/* ══ MIKROLÖTEN SPOTLIGHT ════════════════════════════════════ */}
      {/* VERKAUFSPSYCHOLOGIE: Dunkle Sektion = visueller Kontrast.
          Wird ZUERST gezeigt (über Standard-Services) weil es das stärkste USP ist.
          "Was andere aufgeben" = emotionale Differenzierung, kein Preiskampf. */}
      <section className="section-dark py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-brand-accent/40 bg-brand-accent/10 text-brand-accent text-xs font-bold mb-5 uppercase tracking-wide">
                <Cpu className="w-3.5 h-3.5" />
                Unser Spezialgebiet · IPC-zertifiziert
              </div>
              <h2 className="font-headline text-4xl sm:text-5xl mb-2">
                Mikrolöten
              </h2>
              <p className="font-headline text-2xl text-brand-accent mb-5">
                Was andere aufgeben – reparieren wir.
              </p>

              {/* Problem → Schmerz → Lösung → Beweis */}
              <div className="space-y-4 mb-7">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-sans font-bold text-sm" style={{ color: "#F5F0E8" }}>Problem</div>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: "#8899AA" }}>Andere sagen: "Nicht mehr reparierbar." Hersteller ersetzen die ganze Platine zum Vollpreis.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Lightbulb className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-sans font-bold text-sm" style={{ color: "#F5F0E8" }}>Unsere Lösung</div>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: "#8899AA" }}>Mikrolöten bedeutet: Reparatur auf Bauteil-Ebene. Wir identifizieren das defekte Bauteil unter dem Mikroskop und ersetzen nur dieses – statt die ganze Platine.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-sans font-bold text-sm" style={{ color: "#F5F0E8" }}>Beweis</div>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: "#8899AA" }}>IPC-zertifiziert. 95% Erfolgsrate bei Platinen-Reparaturen. 6 Monate Garantie.</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-7">
                {[
                  "iPhone-Ladeplatine (IC-Chip-Tausch)",
                  "Kurzschluss-Diagnose & Behebung",
                  "BGA & QFN-Lötarbeiten",
                  "MacBook-Platinen-Reparatur",
                  "Wasserschaden auf Platinen-Ebene",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-sans text-sm" style={{ color: "#B0C4D8" }}>
                    <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/kontakt"
                  className="cta-btn gap-2 px-6 rounded-xl bg-brand-accent text-brand-primary font-sans font-bold text-sm hover:bg-brand-accent-dark transition-all glow"
                >
                  Mikrolöt-Anfrage stellen <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="cta-btn px-5 rounded-xl border border-white/15 font-sans text-sm" style={{ color: "#8899AA" }}>
                  <Clock className="w-4 h-4 mr-2 text-brand-accent" />1–3 Werktage
                </div>
              </div>
            </div>

            {/* Stats-Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "IPC",    label: "Zertifiziert",             sub: "geprüfte Qualitätsstandards" },
                { val: "100×",   label: "Mikroskop-Vergrösserung",  sub: "für präzise Lötarbeiten" },
                { val: "0.1mm",  label: "Genauigkeit",              sub: "bei BGA & Microsoldering" },
                { val: "95%",    label: "Erfolgsrate",              sub: "bei Platinen-Reparaturen" },
              ].map(({ val, label, sub }) => (
                <div key={label} className="p-5 rounded-2xl border border-white/10 bg-white/5">
                  <div className="font-headline text-4xl text-brand-accent mb-1">{val}</div>
                  <div className="font-headline text-lg" style={{ color: "#F5F0E8" }}>{label}</div>
                  <div className="font-sans text-xs mt-1" style={{ color: "#8899AA" }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES (Problem → Schmerz → Lösung → Beweis) ═════════ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] block mb-1">Alle Reparaturen</span>
            <h2 className="font-headline text-4xl sm:text-5xl text-brand-primary">Was wir für Sie tun</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map(({ icon: Icon, title, badge, problem, pain, solution, proof, items, accent, iconCol }) => (
              <div
                key={title}
                className={`p-6 rounded-2xl bg-white border-l-4 ${accent} border border-brand-border hover:shadow-md transition-all duration-300 shadow-sm`}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-brand-surface flex items-center justify-center flex-shrink-0">
                    <Icon className={`w-5 h-5 ${iconCol}`} />
                  </div>
                  <div>
                    <h2 className="font-headline text-xl text-brand-primary">{title}</h2>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-brand-surface text-brand-gray text-[10px] font-sans font-bold uppercase mt-1">
                      <Clock className="w-2.5 h-2.5" />{badge}
                    </span>
                  </div>
                </div>

                {/* Problem → Schmerz → Lösung → Beweis */}
                {/* VERKAUFSPSYCHOLOGIE: Dieses Schema erzeugt Identifikation (Problem),
                    Empathie (Schmerz), Hoffnung (Lösung) und Vertrauen (Beweis). */}
                <div className="space-y-3 mb-5">
                  <div className="flex gap-2.5">
                    <AlertCircle className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    <p className="font-sans font-bold text-brand-primary text-sm">{problem}</p>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="w-4 h-4 flex-shrink-0 mt-0.5 rounded-full bg-brand-gray/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gray" />
                    </div>
                    <p className="font-sans text-brand-gray text-sm leading-relaxed">{pain}</p>
                  </div>
                  <div className="flex gap-2.5">
                    <Lightbulb className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                    <p className="font-sans text-brand-primary text-sm leading-relaxed">{solution}</p>
                  </div>
                  <div className="flex gap-2.5">
                    <Shield className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="font-sans text-green-700 text-xs font-bold">{proof}</p>
                  </div>
                </div>

                <ul className="grid grid-cols-2 gap-1.5 border-t border-brand-border pt-4">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-xs text-brand-gray font-sans">
                      <CheckCircle2 className="w-3 h-3 text-brand-accent flex-shrink-0" />
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] block mb-1">So einfach</span>
            <h2 className="font-headline text-4xl sm:text-5xl text-brand-primary">Unser Ablauf</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Vorbeikommen",        d: "Kein Termin nötig. Bürglenweg 24, Heimberg." },
              { n: "02", t: "Kostenlose Diagnose", d: "Wir prüfen und nennen den Fixpreis. Keine Überraschungen." },
              { n: "03", t: "Express-Reparatur",   d: "Meiste Reparaturen in unter 2 Stunden." },
              { n: "04", t: "6 Mon. Garantie",     d: "Gerät abholen und sorgenfrei nutzen." },
            ].map(({ n, t, d }) => (
              <div key={n} className="p-5 rounded-2xl bg-white border border-brand-border shadow-sm">
                <div className="font-headline text-6xl text-brand-accent/20 mb-3 leading-none">{n}</div>
                <h3 className="font-headline text-xl text-brand-primary mb-2">{t}</h3>
                <p className="font-sans text-brand-gray text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-4xl sm:text-5xl text-brand-primary mb-4">Bereit?</h2>
          <p className="font-sans text-brand-gray text-sm mb-8">Kostenlose Diagnose – kein Termin nötig.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="cta-btn gap-2 px-6 rounded-xl bg-brand-accent text-brand-primary font-sans font-bold text-base hover:bg-brand-accent-dark transition-all glow"
            >
              Anfrage starten <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/preisliste"
              className="cta-btn gap-2 px-6 rounded-xl border-2 border-brand-primary text-brand-primary font-sans font-bold text-base hover:bg-brand-primary hover:text-white transition-all"
            >
              Preise ansehen <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
