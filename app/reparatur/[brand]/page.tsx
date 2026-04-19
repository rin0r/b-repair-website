import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { brandConfig, brandSlugs } from "@/lib/repairData";
import BrandPriceTable from "./BrandPriceTable";

export function generateStaticParams() {
  return brandSlugs.map((brand) => ({ brand }));
}

export async function generateMetadata({ params }: { params: { brand: string } }) {
  const brand = brandConfig[params.brand];
  if (!brand) return {};
  return {
    title: `${brand.name} Reparatur Heimberg & Thun | B-repair&service`,
    description: brand.intro,
  };
}

const steps = [
  {
    num: "01",
    title: "Gerät abgeben",
    desc: "Kommen Sie direkt zu uns nach Heimberg oder melden Sie sich vorab per WhatsApp – wir halten das Ersatzteil bereit.",
  },
  {
    num: "02",
    title: "Kostenlose Diagnose",
    desc: "Wir prüfen Ihr Gerät sorgfältig und informieren Sie über den Schaden, die Reparaturmöglichkeiten und den Fixpreis.",
  },
  {
    num: "03",
    title: "Reparatur",
    desc: "Nach Ihrer Freigabe starten wir sofort. Die meisten Reparaturen sind innerhalb von 2 Stunden abgeschlossen.",
  },
  {
    num: "04",
    title: "Abholen & Garantie",
    desc: "Sie erhalten Ihr Gerät zum vereinbarten Fixpreis zurück – inklusive 6 Monaten Garantie auf die Reparatur.",
  },
];

const whatsappSvg = (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function BrandPage({ params }: { params: { brand: string } }) {
  const brand = brandConfig[params.brand];
  if (!brand) notFound();

  return (
    <>
      {/* ── Hero / Intro ─────────────────────────────────────────── */}
      <section className="pt-28 pb-16 bg-grid relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-accent/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-brand-gray font-sans mb-5">
            <Link href="/" className="hover:text-brand-accent transition-colors">Start</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-gray">Reparatur</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-primary font-bold">{brand.name}</span>
          </nav>

          <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] block mb-3">
            Express-Reparatur · Heimberg &amp; Thun
          </span>
          <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl text-brand-primary mb-5 leading-none">
            {brand.name}{" "}
            <span className="text-brand-accent">Reparatur</span>
          </h1>
          <p className="font-sans text-brand-gray text-base leading-relaxed max-w-2xl mb-8">
            {brand.intro}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#preise"
              className="cta-btn gap-2 px-6 rounded-xl bg-brand-accent text-brand-primary font-sans font-bold text-sm hover:bg-brand-accent-dark transition-all glow-sm"
            >
              Preise prüfen <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/41764020306"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn gap-2 px-6 rounded-xl text-white font-sans font-bold text-sm hover:opacity-90 transition-opacity"
              style={{ background: "#25D366" }}
            >
              {whatsappSvg}
              WhatsApp schreiben
            </a>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-2">
            {["≤ 2 Std. Reparatur", "6 Monate Garantie", "Kostenlose Diagnose", "Fixpreise"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-border bg-white text-brand-gray text-xs font-sans font-bold"
              >
                <CheckCircle2 className="w-3 h-3 text-brand-accent flex-shrink-0" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Price Table ──────────────────────────────────────────── */}
      <section id="preise" className="py-14 bg-brand-surface border-y border-brand-border scroll-mt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] block mb-2">
              Meistgefragte Reparaturen
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-brand-primary">
              Preisübersicht {brand.name}
            </h2>
            <p className="font-sans text-brand-gray text-sm mt-2">
              Modell nicht dabei?{" "}
              <a href="tel:+41764020306" className="text-brand-accent hover:underline font-bold">
                Einfach anfragen.
              </a>
            </p>
          </div>
          <BrandPriceTable items={brand.popularItems} />
        </div>
      </section>


      {/* ── Ablauf ───────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] block mb-2">
              Einfach &amp; transparent
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-brand-primary">
              So läuft Ihre Reparatur ab
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <div className="font-headline text-7xl font-bold leading-none mb-3 select-none text-brand-accent/15">
                  {step.num}
                </div>
                <h3 className="font-headline text-xl text-brand-primary mb-2">{step.title}</h3>
                <p className="font-sans text-brand-gray text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why B-repair (3 cards) ───────────────────────────────── */}
      <section className="py-14 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] block mb-2">
              Ihr Vorteil
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-brand-primary">
              Warum B-repair&amp;service?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {/* Card 1 – Express-Service */}
            <div className="p-7 rounded-2xl bg-white border border-brand-border shadow-sm flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-headline text-xl text-brand-primary mb-1">Express-Service</h3>
                <p className="font-sans text-brand-gray text-sm leading-relaxed">
                  Die meisten Reparaturen sind in unter 2 Stunden erledigt – kein Versand, kein Warten.
                </p>
              </div>
            </div>

            {/* Card 2 – Transparente Preise */}
            <div className="p-7 rounded-2xl bg-white border border-brand-border shadow-sm flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
              </div>
              <div>
                <h3 className="font-headline text-xl text-brand-primary mb-1">Transparente Preise</h3>
                <p className="font-sans text-brand-gray text-sm leading-relaxed">
                  Fixpreise online, kostenlose Diagnose, keine versteckten Kosten. Was Sie sehen, zahlen Sie.
                </p>
              </div>
            </div>

            {/* Card 3 – Erfahrene Techniker */}
            <div className="p-7 rounded-2xl bg-white border border-brand-border shadow-sm flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div>
                <h3 className="font-headline text-xl text-brand-primary mb-1">Erfahrene Techniker</h3>
                <p className="font-sans text-brand-gray text-sm leading-relaxed">
                  Über 5 000 Reparaturen, IPC-zertifiziert. 6 Monate Garantie auf jede Reparatur.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] block mb-2">
              Häufige Fragen
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-brand-primary">
              {brand.name} Reparatur FAQ
            </h2>
          </div>
          <div className="divide-y divide-brand-border border border-brand-border rounded-2xl overflow-hidden">
            {brand.faq.map((item) => (
              <details key={item.q} className="group bg-white">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer hover:bg-brand-surface transition-colors list-none">
                  <span className="font-sans font-bold text-brand-primary text-sm leading-snug">
                    {item.q}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-brand-gray flex-shrink-0 transition-transform group-open:rotate-180"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="font-sans text-brand-gray text-sm leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>

          {/* Guarantee strip below FAQ */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: Shield, text: "6 Monate Garantie auf alle Reparaturen" },
              { icon: CheckCircle2, text: "Kostenlose Diagnose – immer" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-brand-surface border border-brand-border text-sm font-sans text-brand-gray"
              >
                <Icon className="w-4 h-4 text-brand-accent flex-shrink-0" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="py-14 bg-brand-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-3xl sm:text-4xl text-white mb-3">
            {brand.name} defekt? Wir helfen sofort.
          </h2>
          <p className="font-sans text-sm mb-8" style={{ color: "#8899AA" }}>
            Kostenlose Diagnose · Fixpreise · 6 Monate Garantie
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/41764020306"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn gap-2 px-6 rounded-xl text-white font-sans font-bold text-sm hover:opacity-90 transition-opacity"
              style={{ background: "#25D366" }}
            >
              {whatsappSvg}
              WhatsApp schreiben
            </a>
            <Link
              href="/kontakt"
              className="cta-btn gap-2 px-6 rounded-xl bg-brand-accent text-brand-primary font-sans font-bold text-sm hover:bg-brand-accent-dark transition-all"
            >
              Anfrage senden <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
