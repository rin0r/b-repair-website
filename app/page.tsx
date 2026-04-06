import Link from "next/link";
import {
  Smartphone,
  Shield,
  Clock,
  Star,
  ChevronRight,
  Wrench,
  Battery,
  Wifi,
  Camera,
  Mic,
  CheckCircle2,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Display-Reparatur",
    desc: "Gebrochene oder nicht reagierende Displays schnell und professionell ersetzt.",
  },
  {
    icon: Battery,
    title: "Akku-Austausch",
    desc: "Neuer Akku für maximale Laufzeit – mit Original- oder Premium-Ersatzteilen.",
  },
  {
    icon: Wifi,
    title: "Software & Diagnose",
    desc: "Fehlersuche, Software-Reparatur und System-Updates für alle Geräte.",
  },
  {
    icon: Camera,
    title: "Kamera-Reparatur",
    desc: "Verschwommene Bilder oder defekte Kamera? Wir bringen sie zurück.",
  },
  {
    icon: Mic,
    title: "Mikrofon / Lautsprecher",
    desc: "Tonprobleme beheben – Mikrofon, Lautsprecher und Kopfhörerbuchse.",
  },
  {
    icon: Wrench,
    title: "Gehäuse & Wasserschaden",
    desc: "Gehäuse-Reparaturen und professionelle Wasserschaden-Behandlung.",
  },
];

const stats = [
  { value: "5000+", label: "Reparaturen" },
  { value: "98%", label: "Kundenzufriedenheit" },
  { value: "≤ 2h", label: "Reparaturzeit" },
  { value: "6 Mon.", label: "Garantie" },
];

const brands = ["iPhone", "Samsung", "Huawei", "Xiaomi", "OnePlus", "Google Pixel"];

const whyUs = [
  "Ersatzteile in Top-Qualität",
  "Transparente Preise ohne Überraschungen",
  "Schnelle Reparatur – oft noch am gleichen Tag",
  "6 Monate Garantie auf alle Reparaturen",
  "Kostenlose Diagnose",
  "Daten bleiben geschützt und sicher",
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-grid overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-brand-card text-sm text-brand-muted mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Schnelle Reparaturen in Heimberg, Bern
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Ihr Smartphone
              <br />
              <span className="text-brand-accent">wieder wie neu</span>
              <br />
              — professionell.
            </h1>

            <p className="text-brand-muted text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              B-repair&service steht für schnelle, zuverlässige Smartphone-Reparaturen in der Region Bern. Faire Preise, höchste Qualität und 6 Monate Garantie.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent text-white font-semibold hover:bg-brand-accent-dark transition-all glow hover:scale-105"
              >
                Jetzt Reparatur anfragen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/preisliste"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-brand-border text-brand-text font-semibold hover:border-brand-accent hover:text-brand-accent transition-all"
              >
                Preisliste ansehen
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Brands */}
            <div className="flex flex-wrap gap-3">
              {brands.map((b) => (
                <span
                  key={b}
                  className="px-3 py-1.5 rounded-lg border border-brand-border bg-brand-card text-brand-muted text-xs font-medium"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-brand-surface border-y border-brand-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-accent mb-1">
                  {s.value}
                </div>
                <div className="text-brand-muted text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
              Was wir reparieren
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-brand-text">
              Unsere Leistungen
            </h2>
            <p className="mt-3 text-brand-muted max-w-xl mx-auto">
              Von der Displayreparatur bis zur Wasserschadenbehandlung – wir kümmern uns um Ihr Gerät.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group p-6 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/50 hover:bg-brand-card/80 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-4 group-hover:bg-brand-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="font-semibold text-brand-text mb-2">{title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-brand-accent font-medium hover:text-brand-accent-glow transition-colors"
            >
              Alle Leistungen ansehen
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-20 lg:py-28 bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
                Warum wir?
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-brand-text mb-5">
                Qualität, die man spürt.
              </h2>
              <p className="text-brand-muted leading-relaxed mb-8">
                Wir verstehen, wie wichtig Ihr Smartphone ist. Deshalb arbeiten wir schnell, sorgfältig und mit hochwertigen Ersatzteilen – damit Sie sich voll auf uns verlassen können.
              </p>
              <ul className="space-y-3">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-brand-text">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="p-8 rounded-2xl bg-brand-card border border-brand-border glow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center">
                    <Star className="w-5 h-5 text-brand-accent fill-brand-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-text">Kundenbewertung</div>
                    <div className="text-brand-muted text-xs">Durchschnitt aus Google-Bewertungen</div>
                  </div>
                </div>
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-5xl font-extrabold text-brand-accent">4.9</span>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="space-y-3 mt-6 border-t border-brand-border pt-6">
                  {[
                    { label: "Display-Reparatur", rating: 5 },
                    { label: "Akku-Austausch", rating: 5 },
                    { label: "Kundendienst", rating: 5 },
                    { label: "Preis-Leistung", rating: 5 },
                  ].map(({ label, rating }) => (
                    <div key={label} className="flex items-center justify-between text-sm">
                      <span className="text-brand-muted">{label}</span>
                      <div className="flex gap-0.5">
                        {[...Array(rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative badges */}
              <div className="absolute -top-4 -right-4 px-3 py-1.5 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-medium">
                ✓ 6 Mon. Garantie
              </div>
              <div className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-lg bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-xs font-medium">
                ✓ Kostenlose Diagnose
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-accent/5 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
            Kontakt aufnehmen
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text mb-4">
            Ihr Gerät defekt?
            <br />
            <span className="text-brand-accent">Wir helfen sofort.</span>
          </h2>
          <p className="text-brand-muted text-lg mb-10 max-w-xl mx-auto">
            Kommen Sie vorbei oder rufen Sie uns an. Kostenlose Diagnose, transparente Preise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+41764020306"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-accent text-white font-semibold text-lg hover:bg-brand-accent-dark transition-all glow hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              +41 76 402 03 06
            </a>
            <a
              href="https://maps.google.com/?q=Bürglenweg+24+3627+Heimberg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-brand-border text-brand-text font-semibold text-lg hover:border-brand-accent hover:text-brand-accent transition-all"
            >
              <MapPin className="w-5 h-5" />
              Bürglenweg 24, Heimberg
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-brand-muted">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-accent" />
              Mo–Fr 09–18:30 Uhr
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-brand-accent" />
              6 Monate Garantie
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-accent" />
              Kostenlose Diagnose
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
