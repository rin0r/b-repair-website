import Link from "next/link";
import {
  Smartphone, Battery, Wifi, Camera, Mic, Wrench, Droplets,
  Cpu, Monitor, HardDrive, CheckCircle2, ArrowRight, Phone,
  MapPin, Clock, Shield, Star, Zap, ChevronRight, Building2, Package,
} from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────── */

const stats = [
  { value: "5'000+", label: "Reparaturen", sub: "erfolgreich abgeschlossen" },
  { value: "4.9 ★", label: "Google Rating", sub: "aus echten Bewertungen" },
  { value: "≤ 2h", label: "Reparaturzeit", sub: "für Standardreparaturen" },
  { value: "6 Mon.", label: "Garantie", sub: "auf alle Reparaturen" },
];

const services = [
  { icon: Monitor, title: "Display-Reparatur", time: "60–90 Min", desc: "LCD & OLED – alle Marken, Originalqualität.", accent: "text-brand-accent" },
  { icon: Battery, title: "Akku-Austausch", time: "30–45 Min", desc: "Neue Laufzeit – Original oder Premium-Teile.", accent: "text-brand-accent" },
  { icon: Cpu, title: "Mikrolöten", time: "1–3 Tage", desc: "Platinen-Reparaturen auf Bauteil-Ebene – unser Spezialgebiet.", accent: "text-yellow-400" },
  { icon: HardDrive, title: "Datenrettung", time: "1–5 Tage", desc: "Daten von defekten Geräten sichern und wiederherstellen.", accent: "text-green-400" },
  { icon: Camera, title: "Kamera-Reparatur", time: "45–90 Min", desc: "Front- & Rückkamera, Glas, Autofokus, Blitz.", accent: "text-brand-accent" },
  { icon: Droplets, title: "Wasserschaden", time: "1–2 Tage", desc: "Ultraschall-Reinigung, Korrosionsbehandlung.", accent: "text-blue-400" },
  { icon: Wrench, title: "Computer & Laptop", time: "1–3 Tage", desc: "Display, Akku, Tastatur, SSD – Mac & Windows.", accent: "text-brand-accent" },
  { icon: Wifi, title: "Software & Diagnose", time: "30–60 Min", desc: "Abstürze, Viren, Betriebssystem – kostenlose Diagnose.", accent: "text-purple-400" },
];

const reviews = [
  { name: "Sarah M.", loc: "Heimberg", text: "Super schnell! Mein iPhone-Display wurde innerhalb einer Stunde ersetzt. Sehr freundlich und fair im Preis.", stars: 5 },
  { name: "Thomas K.", loc: "Thun", text: "Akku-Wechsel am Samsung – kein Termin nötig, in 40 Minuten fertig. Top Beratung, keine versteckten Kosten.", stars: 5 },
  { name: "Monika B.", loc: "Steffisburg", text: "Wasserschaden am iPhone – alle anderen sagten 'nicht mehr reparierbar'. Hier wurde es gerettet. Danke!", stars: 5 },
  { name: "Lukas R.", loc: "Gwatt", text: "Mikrolötung am MacBook-Board. Absolut professionell. Haben sogar erklärt was kaputt war. Klare Empfehlung!", stars: 5 },
  { name: "Anna S.", loc: "Hünibach", text: "Beste Smartphone-Reparatur in der Region. Faire Preise, ehrliche Beratung und 6 Monate Garantie.", stars: 5 },
  { name: "Marco F.", loc: "Thun", text: "Datenrettung nach Sturzschaden. Alle Fotos und Kontakte wieder da. Unbezahlbar! Sehr empfehlenswert.", stars: 5 },
];

const comparisonRows = [
  { label: "Reparaturzeit", us: "≤ 2 Stunden", apple: "1–5 Tage", others: "Unbekannt" },
  { label: "Display iPhone 14", us: "CHF 349.–", apple: "CHF 399.–+", others: "CHF 240–259.–" },
  { label: "Garantie", us: "6 Monate", apple: "90 Tage", others: "3 Monate" },
  { label: "Kostenlose Diagnose", us: "✓", apple: "✗", others: "Teils" },
  { label: "Alle Marken", us: "✓", apple: "Nur Apple", others: "Teils" },
  { label: "Fixpreise online", us: "✓ Transparent", apple: "✗", others: "Teils" },
  { label: "Persönlicher Kontakt", us: "✓ Direkt", apple: "✗ Call-Center", others: "⚠ Mittel" },
];

const faqs = [
  { q: "Brauche ich einen Termin?", a: "Nein – Sie können jederzeit während der Öffnungszeiten vorbeikommen. Für komplexe Reparaturen (Mikrolöten, Datenrettung) empfehlen wir eine kurze Voranmeldung per Telefon oder WhatsApp." },
  { q: "Wie lange dauert eine Reparatur?", a: "Display und Akku sind meist in 30–90 Minuten fertig. Wasserschäden, Mikrolötungen und Datenrettungen benötigen 1–5 Werktage je nach Aufwand." },
  { q: "Was kostet die Diagnose?", a: "Die Diagnose ist grundsätzlich kostenlos. Sie wissen vor der Reparatur genau, was es kostet – keine Überraschungen." },
  { q: "Welche Garantie gibt es?", a: "Auf alle Reparaturen geben wir 6 Monate Garantie. Das ist doppelt so lang wie bei den meisten Konkurrenten." },
  { q: "Gehen meine Daten verloren?", a: "Bei Display- und Akku-Reparaturen bleiben alle Daten erhalten. Bei Software-Problemen sichern wir die Daten nach Möglichkeit vorher. Ihre Daten werden nie ohne Erlaubnis gelesen." },
  { q: "Reparieren Sie auch iPads und Laptops?", a: "Ja – wir reparieren iPhones, iPads, Android-Smartphones, MacBooks und Windows-Laptops. Preis auf Anfrage." },
];

/* ─── COMPONENTS ─────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-brand-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">
      {children}
    </span>
  );
}

/* ─── PAGE ───────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-grid">
        {/* Background glows */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-accent/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-700/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Express badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-bold mb-5 uppercase tracking-wide">
                <Zap className="w-3.5 h-3.5" />
                Express-Reparatur – Fertig in 2 Stunden
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight mb-5">
                Ihr Gerät defekt?<br />
                <span className="text-brand-accent">Wir reparieren.</span><br />
                <span className="text-white/70 text-3xl sm:text-4xl xl:text-5xl font-bold">Schnell. Fair. Garantiert.</span>
              </h1>

              <p className="text-brand-muted text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Professionelle Smartphone-Reparaturen in Heimberg – günstiger als der Hersteller-Service, schneller als der Online-Versand. Mikrolöten, Datenrettung & mehr.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="tel:+41764020306"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent text-white font-bold text-sm hover:bg-brand-accent-dark transition-all glow hover:scale-[1.02] shadow-lg shadow-brand-accent/20"
                >
                  <Phone className="w-4 h-4" />
                  Jetzt anrufen
                </a>
                <a
                  href="https://wa.me/41764020306?text=Hallo%2C%20ich%20m%C3%B6chte%20eine%20Reparatur%20anfragen."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-all hover:scale-[1.02]"
                  style={{ background: "#25D366" }}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
                <Link
                  href="/preisliste"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 text-brand-muted font-semibold text-sm hover:border-brand-accent/50 hover:text-white transition-all"
                >
                  Preisliste
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Shield, text: "6 Mon. Garantie" },
                  { icon: CheckCircle2, text: "Kostenlose Diagnose" },
                  { icon: MapPin, text: "Heimberg & Thun" },
                ].map(({ icon: Icon, text }) => (
                  <span key={text} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-brand-muted text-xs font-medium">
                    <Icon className="w-3 h-3 text-brand-accent" />
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero info card */}
            <div className="hidden lg:block">
              <div className="p-7 rounded-2xl bg-brand-card/80 border border-white/8 backdrop-blur-sm glow">
                <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Heute geöffnet</h3>
                <div className="space-y-2.5 mb-6">
                  {[
                    { day: "Mo – Fr", time: "09:00 – 18:30", today: true },
                    { day: "Samstag", time: "10:00 – 16:00", today: false },
                    { day: "Sonntag", time: "Geschlossen", today: false },
                  ].map(({ day, time, today }) => (
                    <div key={day} className="flex justify-between items-center text-sm">
                      <span className="flex items-center gap-2 text-brand-muted">
                        {today && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
                        {day}
                      </span>
                      <span className={time === "Geschlossen" ? "text-red-400 text-xs" : "text-white font-medium"}>
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/8 pt-5 space-y-3">
                  <a href="tel:+41764020306" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                      <Phone className="w-4 h-4 text-brand-accent" />
                    </div>
                    <span className="text-sm font-semibold text-white">+41 76 402 03 06</span>
                  </a>
                  <a href="https://maps.google.com/?q=Bürglenweg+24+3627+Heimberg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                      <MapPin className="w-4 h-4 text-brand-accent" />
                    </div>
                    <span className="text-sm text-brand-muted">Bürglenweg 24, 3627 Heimberg</span>
                  </a>
                </div>
                <div className="mt-5 pt-5 border-t border-white/8 flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white font-bold text-sm">4.9</span>
                  <span className="text-brand-muted text-xs">auf Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ════════════════════════════════════ */}
      <section className="bg-brand-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-brand-accent mb-0.5">{s.value}</div>
                <div className="text-white font-semibold text-sm">{s.label}</div>
                <div className="text-brand-muted text-xs mt-0.5 hidden sm:block">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Was wir reparieren</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Unsere Leistungen</h2>
            <p className="mt-3 text-brand-muted max-w-xl mx-auto text-sm">
              Von der Express-Displayreparatur bis zur komplexen Platinen-Mikrolötung – wir lösen jedes Problem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(({ icon: Icon, title, time, desc, accent }) => (
              <div
                key={title}
                className="group p-5 rounded-2xl bg-brand-card border border-white/6 hover:border-white/15 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <Icon className={`w-5 h-5 ${accent}`} />
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-white text-sm leading-snug">{title}</h3>
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 text-brand-muted text-[10px] font-medium mb-2">
                  <Clock className="w-2.5 h-2.5" />
                  {time}
                </div>
                <p className="text-brand-muted text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-brand-accent text-sm font-semibold hover:gap-3 transition-all"
            >
              Alle Leistungen im Detail
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ COMPARISON TABLE ══════════════════════════════ */}
      <section className="py-20 bg-brand-surface border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Warum B-repair?</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Schnell <span className="text-brand-accent">&</span> Günstig – gleichzeitig
            </h2>
            <p className="mt-3 text-brand-muted text-sm max-w-lg mx-auto">
              Wir liefern, was andere nicht kombinieren können: faire Preise und kurze Wartezeiten.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/4 border-b border-white/8">
                  <th className="text-left px-5 py-4 text-brand-muted font-semibold text-xs uppercase tracking-wider">Kriterium</th>
                  <th className="px-5 py-4 text-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-accent text-white text-xs font-bold">
                      <Wrench className="w-3 h-3" /> B-repair
                    </span>
                  </th>
                  <th className="px-5 py-4 text-center text-brand-muted font-semibold text-xs">Hersteller-Service</th>
                  <th className="px-5 py-4 text-center text-brand-muted font-semibold text-xs hidden sm:table-cell">Andere Anbieter</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} className={`border-b border-white/5 ${i % 2 === 0 ? "" : "bg-white/2"}`}>
                    <td className="px-5 py-3.5 text-brand-muted text-xs font-medium">{row.label}</td>
                    <td className="px-5 py-3.5 text-center text-brand-accent font-bold text-xs">{row.us}</td>
                    <td className="px-5 py-3.5 text-center text-red-400 text-xs">{row.apple}</td>
                    <td className="px-5 py-3.5 text-center text-brand-muted text-xs hidden sm:table-cell">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ GOOGLE REVIEWS ════════════════════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <SectionLabel>Kundenstimmen</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-black text-white">Was unsere Kunden sagen</h2>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-brand-card border border-white/8 self-start sm:self-auto">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              <div>
                <div className="text-white font-black text-lg leading-none">4.9</div>
                <div className="text-brand-muted text-[10px]">Google Reviews</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map(({ name, loc, text, stars }) => (
              <div key={name} className="p-5 rounded-2xl bg-brand-card border border-white/6 hover:border-white/12 transition-colors">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(stars)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">"{text}"</p>
                <div className="flex items-center gap-2.5 border-t border-white/6 pt-3">
                  <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent text-xs font-black">
                    {name[0]}
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">{name}</div>
                    <div className="text-brand-muted text-[10px]">{loc}</div>
                  </div>
                  <div className="ml-auto">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://g.page/r/b-repair"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-white transition-colors"
            >
              Alle Bewertungen auf Google ansehen
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ══ B2B SECTION ═══════════════════════════════════ */}
      <section className="py-20 bg-brand-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-xs font-bold mb-4">
                <Building2 className="w-3.5 h-3.5" />
                B2B – Für Unternehmen & Werkstätten
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Firmengeräte schnell wieder einsatzbereit
              </h2>
              <p className="text-brand-muted leading-relaxed mb-6">
                Ob KMU, Werkstatt oder IT-Dienstleister – wir sind Ihr zuverlässiger Partner für die Reparatur von Firmengeräten. Prioritätsbehandlung, Mengenrabatte und diskrete Datenverarbeitung.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Prioritäts-Reparatur für Firmengeräte",
                  "Mengenrabatte ab 5 Geräten",
                  "Rechnung auf Firmennamen",
                  "Datenschutz & NDA auf Anfrage",
                  "Vor-Ort-Service nach Vereinbarung",
                  "Partnerschaft für Werkstätten",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-brand-muted">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent text-white font-bold text-sm hover:bg-brand-accent-dark transition-all glow"
              >
                B2B-Anfrage stellen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* B2B visual */}
            <div className="space-y-4">
              {[
                { icon: Smartphone, title: "Firmen-Smartphones", desc: "Alle Marken, schnelle Abwicklung, Sammelrechnungen." },
                { icon: Monitor, title: "Laptops & Tablets", desc: "MacBook, Surface, iPad – professionelle Reparatur." },
                { icon: Cpu, title: "Komplexe Schäden", desc: "Mikrolöten, Platinen, Spezialfälle – kein Problem." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 p-5 rounded-2xl bg-brand-card border border-white/6 hover:border-white/12 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm mb-1">{title}</div>
                    <div className="text-brand-muted text-xs">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ VERSANDSERVICE COMING SOON ════════════════════ */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-dashed border-brand-accent/30 bg-brand-accent/5 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/15 flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-brand-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-white">Versandservice</h3>
                  <span className="px-2 py-0.5 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-[10px] font-bold uppercase tracking-wide">Coming Soon</span>
                </div>
                <p className="text-brand-muted text-sm">
                  Bald können Sie Ihr Gerät bequem einsenden – auch aus der ganzen Schweiz. Versichert, schnell und sicher. Jetzt vormerken lassen.
                </p>
              </div>
              <a
                href="mailto:info@b-repair.ch?subject=Versandservice%20Vormerken"
                className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-brand-accent/30 text-brand-accent text-sm font-semibold hover:bg-brand-accent/10 transition-colors"
              >
                Vormerken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ═══════════════════════════════════════ */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>So einfach geht&apos;s</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-white">In 4 Schritten zur Reparatur</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Vorbeikommen", d: "Kein Termin nötig – einfach während der Öffnungszeiten vorbeibringen." },
              { n: "02", t: "Kostenlose Diagnose", d: "Wir prüfen Ihr Gerät und nennen Ihnen den Fixpreis – keine Überraschungen." },
              { n: "03", t: "Express-Reparatur", d: "Die meisten Reparaturen sind in unter 2 Stunden abgeschlossen." },
              { n: "04", t: "Abholen & fertig", d: "Gerät abholen, bezahlen und 6 Monate Garantie geniessen." },
            ].map(({ n, t, d }) => (
              <div key={n} className="relative p-5 rounded-2xl bg-brand-card border border-white/6">
                <div className="text-5xl font-black text-brand-accent/15 mb-3 font-mono leading-none">{n}</div>
                <h3 className="font-bold text-white text-sm mb-2">{t}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════ */}
      <section className="py-20 bg-brand-surface border-y border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Häufige Fragen</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group p-5 rounded-2xl bg-brand-card border border-white/6 hover:border-white/12 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-3">
                  <span className="font-semibold text-white text-sm">{q}</span>
                  <ChevronRight className="w-4 h-4 text-brand-muted flex-shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-3 text-brand-muted text-sm leading-relaxed border-t border-white/6 pt-3">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═════════════════════════════════════ */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-accent/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Kontakt</SectionLabel>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            Bereit?<br />
            <span className="text-brand-accent">Wir reparieren.</span>
          </h2>
          <p className="text-brand-muted text-lg mb-10 max-w-xl mx-auto">
            Kostenlose Diagnose – kein Termin nötig – 6 Monate Garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+41764020306"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-accent text-white font-black text-base hover:bg-brand-accent-dark transition-all glow hover:scale-[1.02]"
            >
              <Phone className="w-5 h-5" />
              +41 76 402 03 06
            </a>
            <a
              href="https://wa.me/41764020306"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-black text-base hover:opacity-90 transition-all hover:scale-[1.02]"
              style={{ background: "#25D366" }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp schreiben
            </a>
          </div>
          <div className="flex flex-wrap gap-3 justify-center text-xs text-brand-muted">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-brand-accent" /> Mo–Fr 09–18:30 · Sa 10–16</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-brand-accent" /> Bürglenweg 24, Heimberg</span>
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-brand-accent" /> 6 Monate Garantie</span>
          </div>
        </div>
      </section>
    </>
  );
}
