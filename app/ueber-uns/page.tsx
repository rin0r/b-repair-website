import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Shield,
  Clock,
  Award,
  Users,
  CheckCircle2,
  Wrench,
  ArrowRight,
  Star,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns | B-repair&service",
  description:
    "Lernen Sie B-repair&service kennen – Ihr professioneller Smartphone-Reparaturdienst in Heimberg, Bern.",
};

const values = [
  {
    icon: Shield,
    title: "Qualität & Garantie",
    desc: "Wir verwenden ausschliesslich hochwertige Ersatzteile und geben auf alle Reparaturen 6 Monate Garantie.",
  },
  {
    icon: Clock,
    title: "Schnelligkeit",
    desc: "Zeit ist kostbar. Deshalb streben wir an, die meisten Reparaturen noch am gleichen Tag abzuschliessen.",
  },
  {
    icon: Award,
    title: "Ehrlichkeit",
    desc: "Transparente Preise, ehrliche Beratung – Sie wissen vor der Reparatur genau, was Sie bezahlen.",
  },
  {
    icon: Users,
    title: "Kundennähe",
    desc: "Wir nehmen uns Zeit für Sie und Ihr Anliegen. Persönliche Betreuung ist uns wichtiger als Masse.",
  },
  {
    icon: Wrench,
    title: "Fachkompetenz",
    desc: "Unsere Techniker sind ausgebildete Profis mit jahrelanger Erfahrung in der Gerätewartung.",
  },
  {
    icon: Heart,
    title: "Leidenschaft",
    desc: "Wir reparieren nicht nur Geräte – wir retten Ihre Daten, Erinnerungen und Ihren Alltag.",
  },
];

const milestones = [
  { year: "2018", text: "Gründung von B-repair&service in Heimberg" },
  { year: "2019", text: "Erweiterung auf Tablet- und Laptop-Reparaturen" },
  { year: "2021", text: "Über 1'000 zufriedene Kunden erreicht" },
  { year: "2023", text: "Spezialisierung auf OLED- und Foldable-Displays" },
  { year: "2024", text: "Mehr als 5'000 erfolgreich reparierte Geräte" },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 bg-grid relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-brand-accent/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center gap-2 text-sm text-brand-muted mb-4">
            <Link href="/" className="hover:text-brand-accent transition-colors">Start</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-text">Über uns</span>
          </nav>
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
            Wer wir sind
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-brand-text leading-tight">
            Über B-repair&service
          </h1>
          <p className="mt-4 text-brand-muted text-lg leading-relaxed max-w-xl">
            Ihr lokaler Spezialist für Smartphone- und Tablet-Reparaturen im Herzen von Heimberg, Kanton Bern.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
                Unsere Geschichte
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-brand-text mb-5">
                Gegründet aus Leidenschaft für Technik
              </h2>
              <div className="space-y-4 text-brand-muted leading-relaxed">
                <p>
                  B-repair&service wurde 2018 in Heimberg gegründet mit einem klaren Ziel: professionelle Smartphone-Reparaturen zu fairen, transparenten Preisen anzubieten – ohne Überraschungen, ohne lange Wartezeiten.
                </p>
                <p>
                  Seitdem haben wir tausende von Geräten repariert und uns in der Region Bern einen Namen gemacht. Ob gesprungenes Display, schwacher Akku oder Wasserschaden – wir finden eine Lösung.
                </p>
                <p>
                  Was uns von anderen unterscheidet: Wir behandeln jedes Gerät, als wäre es unser eigenes. Persönliche Beratung, hochwertige Teile und echte Garantie – das ist das Versprechen von B-repair&service.
                </p>
              </div>
            </div>

            {/* Stats visual */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5000+", label: "Reparaturen", sub: "erfolgreich abgeschlossen" },
                { value: "98%", label: "Zufriedenheit", sub: "laut Kundenbewertungen" },
                { value: "≤ 2h", label: "Ø Reparaturzeit", sub: "für Standardreparaturen" },
                { value: "6+", label: "Jahre Erfahrung", sub: "in der Branche" },
              ].map(({ value, label, sub }) => (
                <div
                  key={label}
                  className="p-6 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/40 transition-colors"
                >
                  <div className="text-3xl font-extrabold text-brand-accent mb-1">{value}</div>
                  <div className="font-semibold text-brand-text text-sm">{label}</div>
                  <div className="text-brand-muted text-xs mt-1">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
              Was uns ausmacht
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-brand-text">Unsere Werte</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/40 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-4 group-hover:bg-brand-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-brand-accent" />
                </div>
                <h3 className="font-semibold text-brand-text mb-2">{title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
              Meilensteine
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-brand-text">Unsere Entwicklung</h2>
          </div>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-brand-border hidden sm:block" />
            <div className="space-y-6">
              {milestones.map(({ year, text }) => (
                <div key={year} className="flex items-start gap-6">
                  <div className="relative flex-shrink-0 w-16 text-right">
                    <span className="text-brand-accent font-bold text-sm">{year}</span>
                    <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-accent hidden sm:block" />
                  </div>
                  <div className="flex-1 p-4 rounded-xl bg-brand-card border border-brand-border ml-4">
                    <p className="text-brand-text text-sm">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Trust */}
      <section className="py-16 bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
              Kundenstimmen
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-brand-text">Was unsere Kunden sagen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: "Sarah M.",
                location: "Heimberg",
                text: "Super schnell und professionell! Mein iPhone-Display wurde innerhalb einer Stunde repariert. Sehr zu empfehlen!",
                rating: 5,
              },
              {
                name: "Thomas K.",
                location: "Thun",
                text: "Ehrliche Beratung, faire Preise. Mein Samsung-Akku wurde fachgerecht ersetzt. Der Unterschied ist enorm!",
                rating: 5,
              },
              {
                name: "Monika B.",
                location: "Steffisburg",
                text: "Wasserschaden am Handy – alle anderen sagten 'nicht mehr reparierbar'. Hier wurde es gerettet. Besten Dank!",
                rating: 5,
              },
            ].map(({ name, location, text, rating }) => (
              <div key={name} className="p-6 rounded-2xl bg-brand-card border border-brand-border">
                <div className="flex gap-1 mb-3">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">"{text}"</p>
                <div className="flex items-center gap-2 border-t border-brand-border pt-3">
                  <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent text-xs font-bold">
                    {name[0]}
                  </div>
                  <div>
                    <div className="text-brand-text text-sm font-medium">{name}</div>
                    <div className="text-brand-muted text-xs">{location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-card border border-brand-border text-sm text-brand-muted">
              <CheckCircle2 className="w-4 h-4 text-brand-accent" />
              Alle Bewertungen stammen von echten Kunden auf Google
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-brand-text mb-4">
            Lernen Sie uns persönlich kennen
          </h2>
          <p className="text-brand-muted mb-8">
            Kommen Sie in unseren Shop oder kontaktieren Sie uns online. Wir freuen uns auf Sie.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent text-white font-semibold hover:bg-brand-accent-dark transition-all glow"
          >
            Kontakt aufnehmen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
