// VERKAUFSPSYCHOLOGIE: Marken-Auswahl statt Preistabelle.
// Der Kunde trifft zuerst eine einfache Entscheidung ("welche Marke habe ich?"),
// statt von einer grossen Preistabelle erschlagen zu werden. Preise sieht er erst
// auf der Markenseite – dort passend zu seinem Gerät und damit relevanter.

import Link from "next/link";
import { ChevronRight, Shield, Phone as PhoneIcon, ArrowRight, BadgeCheck } from "lucide-react";
import { brandConfig, brandRows } from "@/lib/repairData";

export const metadata = {
  title: "Preise & Garantie | B-repair&service Heimberg",
  description:
    "Marke wählen und Fixpreise ansehen: iPhone, iPad, Samsung, Google Pixel und OnePlus. Verbindlicher Fixpreis vor der Reparatur, 6 Monate Garantie.",
};

/* ─── MARKEN ─────────────────────────────────────────────
   Logos liegen lokal unter /public/brands.
   Die Ziele sind die bereits bestehenden Markenseiten. */
const brands = [
  { slug: "iphone",  logo: "/brands/apple.svg",   logoAlt: "Apple" },
  { slug: "ipad",    logo: "/brands/apple.svg",   logoAlt: "Apple" },
  { slug: "samsung", logo: "/brands/samsung.svg", logoAlt: "Samsung" },
  { slug: "pixel",   logo: "/brands/google.svg",  logoAlt: "Google" },
  { slug: "oneplus", logo: "/brands/oneplus.svg", logoAlt: "OnePlus" },
];

export default function PreislistePage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-10 relative overflow-hidden bg-grid">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-brand-accent/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center gap-2 text-xs text-brand-gray font-sans mb-4">
            <Link href="/" className="hover:text-brand-accent transition-colors">Start</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-primary font-bold">Preise &amp; Garantie</span>
          </nav>
          <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] block mb-1">Transparente Preise</span>
          <h1 className="font-headline text-4xl sm:text-5xl text-brand-primary">Preise &amp; Garantie</h1>
          <p className="mt-3 font-sans text-brand-gray max-w-xl">
            Wählen Sie Ihre Marke – Sie sehen direkt alle Modelle und Fixpreise in CHF inkl. MwSt.
          </p>

          {/* VERKAUFSPSYCHOLOGIE: Preistransparenz-Banner eliminiert Preisangst.
              "Wir verstecken keine Preise" = direktes Gegenbild zu intransparenten Konkurrenten. */}
          <div className="mt-6 p-5 rounded-2xl bg-brand-accent/10 border-2 border-brand-accent/30 max-w-3xl">
            <div className="flex items-start gap-3">
              <BadgeCheck className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-headline text-xl text-brand-primary">
                  Wir verstecken keine Preise.
                </p>
                <p className="font-sans text-brand-gray text-sm mt-1 leading-relaxed">
                  Was Sie auf der Markenseite sehen, zahlen Sie – ohne Überraschung.{" "}
                  <strong className="text-brand-primary">Den Fixpreis nennen wir vor der Reparatur.</strong>{" "}
                  Kein Kostenvoranschlag, kein Mindesthonorar, keine Bearbeitungsgebühr.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marken-Auswahl */}
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-brand-gray mb-4 flex items-center gap-3">
            Marke wählen
            <span className="h-px flex-1 bg-brand-border" />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {brands.map((brand) => {
              const config = brandConfig[brand.slug];
              if (!config) return null;
              const anzahl = brandRows(brand.slug).length;

              return (
                <Link
                  key={brand.slug}
                  href={`/reparatur/${brand.slug}`}
                  className="group flex items-center gap-5 p-6 rounded-2xl bg-white border border-brand-border shadow-sm hover:border-brand-accent hover:shadow-md transition-all"
                >
                  <span className="flex items-center justify-center w-16 h-16 rounded-xl bg-brand-surface flex-shrink-0 group-hover:bg-brand-accent/10 transition-colors">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={brand.logo}
                      alt={brand.logoAlt}
                      className="h-9 w-9 object-contain"
                      loading="lazy"
                    />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block font-headline text-2xl text-brand-primary leading-tight">
                      {config.name}
                    </span>
                    <span className="block font-sans text-xs text-brand-gray mt-1">
                      {anzahl > 0
                        ? `${anzahl} Modelle · Fixpreise ansehen`
                        : "Preis auf Anfrage · jetzt anfragen"}
                    </span>
                  </span>

                  <ChevronRight className="w-5 h-5 text-brand-gray group-hover:text-brand-accent group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </Link>
              );
            })}
          </div>

          {/* Guarantees */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: Shield,     text: "6 Monate Garantie auf alle Reparaturen" },
              { icon: PhoneIcon,  text: "Fixpreis vor der Reparatur" },
              { icon: BadgeCheck, text: "Marke nicht dabei? Einfach anfragen" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-brand-border shadow-sm text-sm font-sans text-brand-gray">
                <Icon className="w-4 h-4 text-brand-accent flex-shrink-0" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-surface border-t border-brand-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-3xl text-brand-primary mb-3">Marke oder Modell nicht gefunden?</h2>
          <p className="font-sans text-brand-gray text-sm mb-6">
            Wir reparieren praktisch alle Geräte. Fragen Sie uns einfach an.
          </p>
          <Link
            href="/kontakt"
            className="cta-btn gap-2 px-7 rounded-xl bg-brand-accent text-brand-primary font-sans font-bold text-base hover:bg-brand-accent-dark transition-all glow"
          >
            Anfrage senden <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
