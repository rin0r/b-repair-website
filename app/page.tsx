import Link from "next/link";
import {
  Smartphone, Battery, Wifi, Camera, Mic, Wrench, Droplets,
  Cpu, Monitor, HardDrive, CheckCircle2, ArrowRight, Phone,
  MapPin, Clock, Shield, Star, Zap, ChevronRight, Package,
} from "lucide-react";
import PreisrechnerWidget from "@/components/PreisrechnerWidget";

/* ─── DATA ─────────────────────────────────────────────────────────── */

// VERKAUFSPSYCHOLOGIE: Kennzahlen nach Webdesign-Psychologie-Vorgabe.
// Zahlen erzeugen Vertrauen (Social Proof + Autorität).
const stats = [
  { value: "4+",      label: "Jahre Erfahrung",         sub: "seit 2021 in Heimberg" },
  { value: "2'000+",  label: "reparierte Geräte",       sub: "erfolgreich abgeschlossen" },
  { value: "98%",     label: "Kundenzufriedenheit",     sub: "laut Kundenbewertungen" },
  { value: "IPC",     label: "zertifiziert",             sub: "geprüfte Qualitätsstandards" },
];

const services = [
  { icon: Monitor,    title: "Display-Reparatur",   time: "60–90 Min",  desc: "LCD & OLED – alle Marken, Originalqualität.",                          accent: "text-brand-accent" },
  { icon: Battery,    title: "Akku-Austausch",      time: "30–45 Min",  desc: "Neue Laufzeit – Original- oder Premium-Ersatzteile.",                   accent: "text-brand-accent" },
  { icon: Cpu,        title: "Mikrolöten",           time: "1–3 Tage",   desc: "Platinen-Reparaturen auf Bauteil-Ebene – unser Spezialgebiet.",         accent: "text-brand-orange" },
  { icon: HardDrive,  title: "Datenrettung",         time: "1–5 Tage",   desc: "Fotos, Kontakte, Dokumente – auch von schwer beschädigten Geräten.",    accent: "text-green-600" },
  { icon: Camera,     title: "Kamera-Reparatur",     time: "45–90 Min",  desc: "Front- & Rückkamera, Glas, Autofokus, Blitz.",                          accent: "text-brand-accent" },
  { icon: Droplets,   title: "Wasserschaden",        time: "1–2 Tage",   desc: "Ultraschall-Reinigung und Korrosionsbehandlung.",                       accent: "text-blue-600" },
  { icon: Wrench,     title: "Computer & Laptop",    time: "1–3 Tage",   desc: "MacBook, Windows-Laptops – Display, Akku, SSD.",                        accent: "text-brand-accent" },
  { icon: Wifi,       title: "Software & Diagnose",  time: "30–60 Min",  desc: "Abstürze, Viren, Betriebssystem – kostenlose Erstdiagnose.",             accent: "text-purple-600" },
];

const comparisonRows = [
  { label: "Reparaturzeit",        us: "≤ 2 Stunden",      apple: "1–5 Tage",    others: "Unbekannt" },
  { label: "Display iPhone 14",    us: "CHF 349.–",         apple: "CHF 399.–+",  others: "CHF 370–420.–" },
  { label: "Garantie",             us: "6 Monate",          apple: "90 Tage",     others: "3 Monate" },
  { label: "Kostenlose Diagnose",  us: "✓ Immer gratis",    apple: "✗",           others: "Teils" },
  { label: "Alle Marken",          us: "✓ iPhone & Android", apple: "Nur Apple",   others: "Teils" },
  { label: "Fixpreise online",     us: "✓ Transparent",     apple: "✗",           others: "Teils" },
  { label: "Mikrolöten",           us: "✓ Spezialist",      apple: "✗",           others: "Selten" },
];

const faqs = [
  { q: "Brauche ich einen Termin?",      a: "Nein – Sie können jederzeit während der Öffnungszeiten vorbeikommen. Für Mikrolöten und Datenrettung empfehlen wir kurze Voranmeldung per Telefon oder WhatsApp." },
  { q: "Wie lange dauert eine Reparatur?",  a: "Display und Akku: 30–90 Min. Wasserschäden, Mikrolötungen und Datenrettungen: 1–5 Werktage je nach Aufwand." },
  { q: "Was kostet die Diagnose?",        a: "Die Erstdiagnose ist immer kostenlos. Sie erfahren den genauen Fixpreis vor der Reparatur – keine Überraschungen." },
  { q: "Welche Garantie gibt es?",        a: "6 Monate auf alle Reparaturen – doppelt so lang wie bei den meisten Mitbewerbern." },
  { q: "Gehen meine Daten verloren?",     a: "Bei Display- und Akku-Reparaturen bleiben alle Daten erhalten. Ihre Daten werden nie ohne Ihre Erlaubnis gelesen." },
  { q: "Reparieren Sie auch iPads und Laptops?",  a: "Ja – iPhones, iPads, Android-Smartphones, MacBooks und Windows-Laptops. Preis auf Anfrage." },
];

/* ─── PAGE ────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      {/* VERKAUFSPSYCHOLOGIE: Headline adressiert den Hauptschmerzpunkt
          "unreparierbar" direkt. Kombination aus Empathie + Kompetenzversprechen.
          Subheadline verankert Expertise durch "seit 2021" + "IPC-zertifiziert".
          Primär-CTA gratis → senkt Hemmschwelle maximal. */}
      <section className="relative min-h-[100svh] flex items-center bg-grid overflow-hidden">
        {/* Subtile Hintergrund-Akzente */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-accent/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Mikrolöt-Badge – Expertenpositionierung */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-accent/40 bg-brand-accent/10 text-brand-primary text-xs font-bold mb-5 uppercase tracking-wide">
                <Zap className="w-3.5 h-3.5 text-brand-accent" />
                Mikrolöt-Spezialisten seit 2021 · IPC-zertifiziert
              </div>

              {/* HAUPTHEADLINE: direkte Ansprache des grössten Kundenproblems */}
              <h1 className="font-headline text-4xl sm:text-5xl xl:text-[3.75rem] leading-[1.0] text-brand-primary mb-5">
                Ihr Gerät gilt als{" "}
                <span className="text-brand-orange">unreparierbar?</span>
                <br />
                Wir reparieren,{" "}
                <span className="text-brand-accent">was andere aufgeben.</span>
              </h1>

              <p className="font-sans text-brand-gray text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Professionelle Smartphone- & Laptop-Reparaturen in Heimberg –
                günstiger als der Hersteller-Service, schneller als der Online-Versand.
                Mikrolöten, Datenrettung & mehr.
              </p>

              {/* VERKAUFSPSYCHOLOGIE: Primär-CTA kostenlos = kein Risiko für den Kunden.
                  Sekundär-CTA Outline = visuell weniger dominant → klare Hierarchie. */}
              <div className="flex flex-wrap gap-3 mb-8">
                {/* Primär-CTA: #00D4AA, dunkle Schrift für WCAG AA */}
                <Link
                  href="/kontakt"
                  className="cta-btn gap-2 px-7 rounded-xl bg-brand-accent text-brand-primary font-sans font-bold text-base hover:bg-brand-accent-dark transition-all glow hover:scale-[1.02] shadow-lg shadow-brand-accent/20"
                >
                  Kostenlose Diagnose anfragen
                  <ArrowRight className="w-5 h-5" />
                </Link>
                {/* Sekundär-CTA: Outline, weniger dominant */}
                <Link
                  href="/preisliste"
                  className="cta-btn gap-2 px-6 rounded-xl border-2 border-brand-primary text-brand-primary font-sans font-bold text-base hover:bg-brand-primary hover:text-white transition-all"
                >
                  Preise ansehen
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>

              {/* VERKAUFSPSYCHOLOGIE: Trust-Bar direkt unter CTA (Nähe-Prinzip).
                  Jedes Element hebt eine andere Vertrauensdimension hervor. */}
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {[
                  "Kostenlose Erstdiagnose",
                  "6 Monate Garantie",
                  "2.000+ Reparaturen",
                  "IPC-zertifiziert",
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 text-sm text-brand-gray font-sans">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Info-Card rechts */}
            <div className="hidden lg:block">
              <div className="p-7 rounded-2xl bg-white border border-brand-border shadow-xl shadow-brand-primary/8">
                <h3 className="font-headline text-xl text-brand-primary mb-4">Heute geöffnet</h3>
                <div className="space-y-2.5 mb-6">
                  {[
                    { day: "Mo – Fr", time: "09:00 – 18:30", today: true },
                    { day: "Samstag", time: "10:00 – 16:00", today: false },
                    { day: "Sonntag", time: "Geschlossen",    today: false },
                  ].map(({ day, time, today }) => (
                    <div key={day} className="flex justify-between items-center text-sm">
                      <span className="flex items-center gap-2 text-brand-gray font-sans">
                        {today && <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />}
                        {day}
                      </span>
                      <span className={time === "Geschlossen" ? "text-red-500 text-xs font-sans" : "text-brand-primary font-bold font-sans"}>
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-brand-border pt-5 space-y-3">
                  {/* VERKAUFSPSYCHOLOGIE: Telefonnummer als <a href="tel:> für direktes Anrufen */}
                  <a href="tel:+41764020306" className="flex items-center gap-3 group" aria-label="B-repair anrufen">
                    <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                      <Phone className="w-5 h-5 text-brand-accent" />
                    </div>
                    <span className="font-sans font-bold text-brand-primary">+41 76 402 03 06</span>
                  </a>
                  <a href="https://maps.google.com/?q=Bürglenweg+24+3627+Heimberg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                      <MapPin className="w-5 h-5 text-brand-accent" />
                    </div>
                    <span className="font-sans text-brand-gray text-sm">Bürglenweg 24, 3627 Heimberg</span>
                  </a>
                </div>
                <div className="mt-5 pt-5 border-t border-brand-border flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                  </div>
                  <span className="font-headline text-lg text-brand-primary">4.9</span>
                  <span className="font-sans text-brand-gray text-xs">auf Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ KENNZAHLEN ════════════════════════════════════════════════ */}
      {/* VERKAUFSPSYCHOLOGIE: Zahlen bauen Autorität und Social Proof auf.
          "IPC-zertifiziert" differenziert klar von Amateuranbietern.
          Helle Trennlinie schafft visuellen Atemraum. */}
      <section className="bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-headline text-4xl sm:text-5xl text-brand-accent mb-0.5">{s.value}</div>
                <div className="font-headline text-lg text-brand-primary">{s.label}</div>
                <div className="font-sans text-brand-gray text-xs mt-0.5 hidden sm:block">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: "#F8FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] mb-2 block">Was wir reparieren</span>
            <h2 className="font-headline text-4xl sm:text-5xl text-brand-primary">Unsere Reparaturen</h2>
            <p className="mt-3 font-sans text-brand-gray max-w-xl mx-auto">
              Von der Express-Displayreparatur bis zur komplexen Platinen-Mikrolötung.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(({ icon: Icon, title, time, desc, accent }) => (
              <div
                key={title}
                className="group p-5 rounded-2xl bg-white border border-brand-border hover:border-brand-accent/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-surface flex items-center justify-center mb-4 group-hover:bg-brand-accent/10 transition-colors">
                  <Icon className={`w-5 h-5 ${accent}`} />
                </div>
                <h3 className="font-headline text-lg text-brand-primary mb-1">{title}</h3>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-brand-surface text-brand-gray text-[10px] font-sans font-bold mb-2 uppercase">
                  <Clock className="w-2.5 h-2.5" />{time}
                </div>
                <p className="font-sans text-brand-gray text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/leistungen" className="inline-flex items-center gap-2 font-sans font-bold text-brand-accent text-sm hover:gap-3 transition-all">
              Alle Reparaturen im Detail <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ MIKROLÖTEN SPOTLIGHT ══════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: "#EAF5F3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-brand-accent/40 bg-brand-accent/10 text-brand-primary text-xs font-bold mb-5 uppercase tracking-wide">
                <Cpu className="w-3.5 h-3.5 text-brand-accent" />
                Unser Spezialgebiet
              </div>
              <h2 className="font-headline text-4xl sm:text-5xl text-brand-primary mb-4">
                Was andere aufgeben –{" "}
                <span className="text-brand-accent">reparieren wir.</span>
              </h2>
              <p className="font-sans text-brand-gray leading-relaxed mb-6">
                Mikrolöten bedeutet: Reparatur auf Platinen-Ebene – einzelne Bauteile werden unter dem Mikroskop identifiziert und ersetzt. Das können wir, weil wir IPC-zertifiziert sind und die nötige Ausrüstung besitzen.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Reparatur von iPhone-Ladeplatinen",
                  "Kurzschluss-Diagnose & Behebung",
                  "IC-Chip-Austausch (BGA, QFN)",
                  "MacBook-Platinen-Reparatur",
                  "Wasserschaden auf Platinen-Ebene",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 font-sans text-sm text-brand-gray">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="cta-btn gap-2 px-7 rounded-xl bg-brand-accent text-brand-primary font-sans font-bold text-base hover:bg-brand-accent-dark transition-all glow"
              >
                Mikrolöt-Anfrage stellen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            {/* Visual */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "IPC",    label: "Zertifiziert",            sub: "geprüfte Qualitätsstandards" },
                { val: "100×",   label: "Mikroskop-Vergrösserung", sub: "für präzise Lötreparaturen" },
                { val: "0.1mm",  label: "Genauigkeit",             sub: "bei BGA & Microsoldering" },
                { val: "95%",    label: "Erfolgsrate",             sub: "bei Platinen-Reparaturen" },
              ].map(({ val, label, sub }) => (
                <div key={label} className="p-5 rounded-2xl bg-white border border-brand-border shadow-sm">
                  <div className="font-headline text-3xl text-brand-accent mb-1">{val}</div>
                  <div className="font-headline text-base text-brand-primary">{label}</div>
                  <div className="font-sans text-xs text-brand-gray mt-1">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ VERGLEICH ═════════════════════════════════════════════════ */}
      {/* VERKAUFSPSYCHOLOGIE: Vergleichstabelle nutzt Ankerprinzip (Apple als teurer Anker)
          und macht B-repair's Vorteile ohne Behauptungen sichtbar. */}
      <section className="py-20 border-y border-brand-border" style={{ background: "#F4F5F7" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] mb-2 block">Warum B-repair?</span>
            <h2 className="font-headline text-4xl sm:text-5xl text-brand-primary">
              Schnell <span className="text-brand-accent">&</span> Günstig – gleichzeitig
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-brand-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white border-b border-brand-border">
                  <th className="text-left px-5 py-4 text-brand-gray font-sans font-bold text-xs uppercase tracking-wider">Kriterium</th>
                  <th className="px-5 py-4 text-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-accent text-brand-primary text-xs font-bold font-sans">
                      <Wrench className="w-3 h-3" /> B-repair
                    </span>
                  </th>
                  <th className="px-5 py-4 text-center text-brand-gray font-sans font-bold text-xs">Hersteller-Service</th>
                  <th className="px-5 py-4 text-center text-brand-gray font-sans font-bold text-xs hidden sm:table-cell">Andere Anbieter</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} className={`border-b border-brand-border/60 ${i % 2 === 0 ? "bg-white" : "bg-brand-surface/50"}`}>
                    <td className="px-5 py-3.5 font-sans text-brand-gray text-xs font-semibold">{row.label}</td>
                    <td className="px-5 py-3.5 text-center font-price text-brand-accent font-bold text-xs">{row.us}</td>
                    <td className="px-5 py-3.5 text-center font-sans text-red-500 text-xs">{row.apple}</td>
                    <td className="px-5 py-3.5 text-center font-sans text-brand-gray text-xs hidden sm:table-cell">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ PREISRECHNER ══════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-y border-brand-border" style={{ background: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] block mb-2">
              Preisrechner
            </span>
            <h2 className="font-headline text-4xl sm:text-5xl text-brand-primary">
              Preis sofort berechnen
            </h2>
            <p className="font-sans text-brand-gray text-sm mt-2">
              In 3 Schritten zum geschätzten Reparaturpreis – direkt hier, ohne Umweg.
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-brand-border shadow-sm p-6 sm:p-10">
            <PreisrechnerWidget />
          </div>
        </div>
      </section>

      {/* ══ VERSANDSERVICE COMING SOON ════════════════════════════════ */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-brand-accent/40 bg-brand-accent/5 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/15 flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-brand-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-headline text-xl text-brand-primary">Versandservice</h3>
                  <span className="px-2 py-0.5 rounded-full bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-[10px] font-bold uppercase tracking-wide">Coming Soon</span>
                </div>
                <p className="font-sans text-brand-gray text-sm">Bald können Sie Ihr Gerät aus der ganzen Schweiz einsenden. Versichert, schnell, sicher.</p>
              </div>
              <a
                href="mailto:info@b-repair.ch?subject=Versandservice%20Vormerken"
                className="cta-btn flex-shrink-0 px-5 rounded-xl border-2 border-brand-accent text-brand-accent font-sans font-bold text-sm hover:bg-brand-accent/10 transition-colors"
              >
                Vormerken lassen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROZESS ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 border-y border-brand-border" style={{ background: "#F4F5F7" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] mb-2 block">So einfach geht&apos;s</span>
            <h2 className="font-headline text-4xl sm:text-5xl text-brand-primary">In 4 Schritten zur Reparatur</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Vorbeikommen",         d: "Kein Termin nötig – einfach während den Öffnungszeiten." },
              { n: "02", t: "Kostenlose Diagnose",  d: "Wir prüfen Ihr Gerät und nennen den Fixpreis." },
              { n: "03", t: "Express-Reparatur",    d: "Die meisten Reparaturen in unter 2 Stunden abgeschlossen." },
              { n: "04", t: "Garantie geniessen",   d: "Gerät abholen und 6 Monate Garantie geniessen." },
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

      {/* ══ MAPS ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">

            {/* Map – 2/3 width */}
            <div className="lg:w-2/3 rounded-2xl overflow-hidden border border-brand-border shadow-sm flex-shrink-0" style={{ minHeight: 400 }}>
              <iframe
                src="https://maps.google.com/maps?q=Bürglenweg+24,+3627+Heimberg,+Schweiz&output=embed&hl=de"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", minHeight: 400, filter: "grayscale(25%) contrast(0.92) brightness(1.04)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="B-repair&service Standort"
              />
            </div>

            {/* Info blocks – 1/3 width */}
            <div className="lg:w-1/3 flex flex-col gap-4">

              {/* Block 1 – Adresse & Telefon */}
              <div className="flex-1 p-6 rounded-2xl bg-brand-surface border border-brand-border">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-brand-accent flex-shrink-0" />
                  <span className="font-headline text-xl text-brand-primary">Standort</span>
                </div>
                <p className="font-sans font-bold text-brand-primary text-base mb-1">B-repair&service</p>
                <p className="font-sans text-brand-gray text-sm mb-4">Bürglenweg 24, 3627 Heimberg</p>
                <a href="tel:+41764020306" className="inline-flex items-center gap-2 font-sans font-bold text-brand-primary text-base hover:text-brand-accent transition-colors">
                  <Phone className="w-4 h-4 text-brand-accent" />
                  +41 76 402 03 06
                </a>
              </div>

              {/* Block 2 – Öffnungszeiten */}
              <div className="flex-1 p-6 rounded-2xl bg-brand-surface border border-brand-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-brand-accent flex-shrink-0" />
                    <span className="font-headline text-xl text-brand-primary">Öffnungszeiten</span>
                  </div>
                  {/* Open/Closed badge – rendered statically; Mo–Fr open */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-sans font-bold bg-green-100 text-green-700 border border-green-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Geöffnet
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    { day: "Mo – Fr", time: "09:00 – 18:30" },
                    { day: "Samstag", time: "10:00 – 16:00" },
                    { day: "Sonntag", time: "Geschlossen" },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between text-sm font-sans">
                      <span className="text-brand-gray">{day}</span>
                      <span className={time === "Geschlossen" ? "text-red-500 font-bold" : "text-brand-primary font-bold"}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Block 3 – Route planen */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Bürglenweg+24,+3627+Heimberg,+Schweiz"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn gap-2 px-6 rounded-2xl bg-brand-accent text-brand-primary font-sans font-bold text-base hover:bg-brand-accent-dark transition-all glow-sm"
              >
                <MapPin className="w-5 h-5" />
                Route planen
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32" style={{ background: "#EAF5F3" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] mb-2 block">Bereit?</span>
          <h2 className="font-headline text-5xl sm:text-6xl lg:text-7xl text-brand-primary mb-4">
            Kostenlose Diagnose.<br />
            <span className="text-brand-accent">Jetzt anfragen.</span>
          </h2>
          <p className="font-sans text-brand-gray text-lg mb-10 max-w-xl mx-auto">
            Kein Risiko. Kein Termin nötig. 6 Monate Garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+41764020306"
              className="cta-btn gap-2 px-8 rounded-xl bg-brand-accent text-brand-primary font-sans font-bold text-lg hover:bg-brand-accent-dark transition-all glow hover:scale-[1.02]"
              aria-label="B-repair anrufen"
            >
              <Phone className="w-5 h-5" />
              +41 76 402 03 06
            </a>
            <a
              href="https://wa.me/41764020306?text=Hallo%2C%20ich%20m%C3%B6chte%20eine%20Reparatur%20anfragen."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn gap-2 px-8 rounded-xl text-white font-sans font-bold text-lg hover:opacity-90 transition-all hover:scale-[1.02]"
              style={{ background: "#25D366" }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp schreiben
            </a>
          </div>
          <div className="flex flex-wrap gap-4 justify-center text-xs font-sans text-brand-gray">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-brand-accent" /> Mo–Fr 09–18:30 · Sa 10–16</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-brand-accent" /> Bürglenweg 24, Heimberg</span>
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-brand-accent" /> 6 Monate Garantie</span>
          </div>
        </div>
      </section>
    </>
  );
}
