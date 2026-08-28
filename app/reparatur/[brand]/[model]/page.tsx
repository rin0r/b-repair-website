import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight, ArrowRight, ArrowLeft, CheckCircle2, Shield, Clock,
  Monitor, BatteryFull, Layers, Plug, Camera, Volume2, HardDrive, Scan,
  AlertTriangle,
} from "lucide-react";
import {
  brandConfig, findModel, modelPageParams,
  repairFields, hasPrice, prettyPrice,
} from "@/lib/repairData";
import type { RepairField } from "@/lib/repairData";
import { getSpec } from "@/lib/iphoneModels";
import { buildIntro, buildCopy, buildFaq } from "@/lib/modelCopy";
import DeviceRender from "@/components/DeviceRender";

export const dynamicParams = false;

export function generateStaticParams() {
  return modelPageParams();
}

/* ─── Reparaturpositionen ──────────────────────────────────────── */
const repairMeta: Record<RepairField, { label: string; desc: string; Icon: typeof Monitor }> = {
  display:      { label: "Display-Reparatur",     desc: "Displaybruch, Touch-Ausfall, Streifen oder schwarzes Bild",      Icon: Monitor },
  batterie:     { label: "Akku-Wechsel",          desc: "Schnelle Entladung, Abschaltungen, Kapazität unter 80 %",       Icon: BatteryFull },
  ladebuchse:   { label: "Ladebuchse",            desc: "Lädt nicht mehr, Wackelkontakt, Kabel hält nicht",              Icon: Plug },
  kamera:       { label: "Kamera-Reparatur",      desc: "Schwarzes Bild, unscharf, Autofokus rattert",                   Icon: Camera },
  kameraglas:   { label: "Kameraglas",            desc: "Gesprungene Linsenabdeckung, milchige oder verwaschene Fotos",  Icon: Scan },
  rueckseite:   { label: "Rückseite / Backcover", desc: "Gesprungenes Rückglas, inklusive Reinigung des Rahmens",        Icon: Layers },
  lautsprecher: { label: "Lautsprecher & Mikrofon", desc: "Verzerrter Ton, Gegenüber hört nichts, kein Klingelton",      Icon: Volume2 },
  datenrettung: { label: "Datenrettung",          desc: "Nach Wasserschaden oder Defekt auf der Platine",                Icon: HardDrive },
};

const whatsappSvg = (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* Eigenes Foto unter public/models/<slug>.<ext> ersetzt die Zeichnung. */
function findPhoto(slug: string): string | undefined {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    const rel = `/models/${slug}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) return rel;
  }
  return undefined;
}

function load(brandKey: string, slug: string) {
  const brand = brandConfig[brandKey];
  const row = brand ? findModel(brandKey, slug) : undefined;
  const spec = getSpec(slug);
  if (!brand || !row || !spec) return null;
  return { brand, row, spec };
}

export async function generateMetadata({ params }: { params: { brand: string; model: string } }) {
  const data = load(params.brand, params.model);
  if (!data) return {};
  const { row, spec } = data;

  const priceHint = hasPrice(row.display) ? ` – Display ab ${prettyPrice(row.display)}` : "";
  const title = `${row.model} Reparatur Heimberg & Thun${priceHint} | B-repair&service`;
  const description = `${row.model} reparieren lassen in Heimberg bei Thun: Display, Akku, ${spec.connector}-Buchse und Kamera zum Fixpreis. Kostenlose Diagnose, meist in 2 Stunden fertig, 6 Monate Garantie.`;

  return {
    title,
    description,
    keywords: `${row.model} Reparatur, ${row.model} Display wechseln, ${row.model} Akku tauschen, Handy Reparatur Heimberg, Handy Reparatur Thun`,
    openGraph: { title, description, type: "website" },
  };
}

export default function ModelPage({ params }: { params: { brand: string; model: string } }) {
  const data = load(params.brand, params.model);
  if (!data) notFound();
  const { brand, row, spec } = data;

  const slug = params.model;
  const photo = findPhoto(slug);
  const intro = buildIntro(row.model, slug);
  const copy = buildCopy(row.model, slug, spec, row);
  const faq = buildFaq(row.model, spec, row);

  const available = repairFields.filter((f) => hasPrice(row[f] as string));
  const waLink = (repair: string) =>
    `https://wa.me/41764020306?text=${encodeURIComponent(
      `Hallo, ich brauche eine ${repair} für mein ${row.model}.`,
    )}`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${row.model} Reparatur`,
    provider: {
      "@type": "LocalBusiness",
      name: "B-repair&service",
      telephone: "+41764020306",
      email: "info@b-repair.ch",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Stationsweg 3",
        postalCode: "3627",
        addressLocality: "Heimberg",
        addressCountry: "CH",
      },
    },
    areaServed: ["Heimberg", "Thun", "Steffisburg", "Kanton Bern"],
    offers: available.map((f) => ({
      "@type": "Offer",
      name: `${row.model} ${repairMeta[f].label}`,
      price: (row[f] as string).replace(/[^0-9.]/g, ""),
      priceCurrency: "CHF",
      availability: "https://schema.org/InStock",
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-28 pb-14 bg-grid relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-accent/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          <nav className="flex flex-wrap items-center gap-2 text-xs text-brand-gray font-sans mb-6">
            <Link href="/" className="hover:text-brand-accent transition-colors">Start</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/reparatur/${params.brand}`} className="hover:text-brand-accent transition-colors">
              {brand.name}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-primary font-bold">{row.model}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Text */}
            <div>
              <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] block mb-3">
                Express-Reparatur · Heimberg &amp; Thun
              </span>
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-brand-primary mb-4 leading-none">
                {row.model}{" "}
                <span className="text-brand-accent">Reparatur</span>
              </h1>

              {/* Eckdaten */}
              <div className="flex flex-wrap gap-2 mb-5">
                {[
                  `Baujahr ${spec.year}`,
                  `${spec.size}″ ${spec.display}`,
                  spec.connector,
                  `${spec.cams} Kamera${spec.cams > 1 ? "s" : ""}`,
                ].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-3 py-1 rounded-lg bg-brand-surface border border-brand-border text-brand-gray text-xs font-sans font-bold"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="font-sans text-brand-gray text-base leading-relaxed mb-7">{intro}</p>

              <div className="flex flex-wrap gap-3 mb-7">
                <a
                  href="#preise"
                  className="cta-btn gap-2 px-6 rounded-xl bg-brand-accent text-brand-primary font-sans font-bold text-sm hover:bg-brand-accent-dark transition-all glow-sm"
                >
                  Preise ansehen <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={waLink("Reparatur")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn gap-2 px-6 rounded-xl text-white font-sans font-bold text-sm hover:opacity-90 transition-opacity"
                  style={{ background: "#25D366" }}
                >
                  {whatsappSvg}
                  WhatsApp schreiben
                </a>
              </div>

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

            {/* Gerätebild */}
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-brand-surface to-white border border-brand-border p-6 sm:p-10">
                <DeviceRender model={row.model} spec={spec} photo={photo} className="max-w-[340px] mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Preise ───────────────────────────────────────────────── */}
      <section id="preise" className="py-14 bg-brand-surface border-y border-brand-border scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] block mb-2">
              Fixpreise inkl. MwSt.
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-brand-primary">
              {row.model} Reparatur – Preise
            </h2>
            <p className="font-sans text-brand-gray text-sm mt-2">
              Alle Preise inklusive Ersatzteil, Einbau, Funktionstest und 6 Monaten Garantie.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {available.map((field) => {
              const { label, desc, Icon } = repairMeta[field];
              return (
                <a
                  key={field}
                  href={waLink(label)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 p-6 rounded-2xl bg-white border border-brand-border hover:border-brand-accent hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans font-bold text-brand-primary text-sm mb-1">{label}</h3>
                    <p className="font-sans text-brand-gray text-xs leading-relaxed">{desc}</p>
                  </div>
                  <div className="flex items-end justify-between gap-2 pt-2 border-t border-brand-border">
                    <span className="font-sans font-bold text-xl text-brand-accent">
                      {prettyPrice(row[field] as string)}
                    </span>
                    <span className="font-sans text-xs font-bold text-brand-gray group-hover:text-brand-accent transition-colors inline-flex items-center gap-1">
                      Anfragen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          <p className="mt-5 text-center font-sans text-[11px] text-brand-gray/70">
            Alle Preise inkl. MwSt. · Finaler Preis wird im Shop bestätigt · Anderer Defekt?{" "}
            <a href="tel:+41764020306" className="text-brand-accent hover:underline font-bold">
              076 402 03 06
            </a>
          </p>
        </div>
      </section>

      {/* ── Text & typische Defekte ──────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2">
              <h2 className="font-headline text-3xl sm:text-4xl text-brand-primary mb-5">
                {row.model} reparieren lassen in Heimberg
              </h2>
              {copy.map((para, i) => (
                <p key={i} className="font-sans text-brand-gray text-base leading-relaxed mb-4">
                  {para}
                </p>
              ))}

              <div className="flex flex-wrap gap-3 mt-7">
                <Link
                  href={`/reparatur/${params.brand}`}
                  className="inline-flex items-center gap-2 font-sans text-sm font-bold text-brand-accent hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Alle {brand.name}-Modelle
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <h3 className="font-sans font-bold text-brand-primary text-sm">
                    Typische Defekte beim {row.model}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {spec.issues.map((issue) => (
                    <li key={issue} className="flex gap-2.5 font-sans text-brand-gray text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                      {issue}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-5 border-t border-brand-border flex items-center gap-2 font-sans text-xs text-brand-gray">
                  <Clock className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                  Standardreparaturen meist in unter 2 Stunden fertig
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-brand-surface border-y border-brand-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] block mb-2">
              Häufige Fragen
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-brand-primary">
              {row.model} Reparatur FAQ
            </h2>
          </div>

          <div className="divide-y divide-brand-border border border-brand-border rounded-2xl overflow-hidden">
            {faq.map((item) => (
              <details key={item.q} className="group bg-white">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer hover:bg-brand-surface transition-colors list-none">
                  <span className="font-sans font-bold text-brand-primary text-sm leading-snug">{item.q}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                    className="w-4 h-4 text-brand-gray flex-shrink-0 transition-transform group-open:rotate-180">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="font-sans text-brand-gray text-sm leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: Shield, text: "6 Monate Garantie auf alle Reparaturen" },
              { icon: CheckCircle2, text: "Kostenlose Diagnose – immer" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-brand-border text-sm font-sans text-brand-gray">
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
            {row.model} defekt? Wir helfen sofort.
          </h2>
          <p className="font-sans text-sm mb-8" style={{ color: "#8899AA" }}>
            Stationsweg 3, 3627 Heimberg · Kostenlose Diagnose · Fixpreise · 6 Monate Garantie
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={waLink("Reparatur")}
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
