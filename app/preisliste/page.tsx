"use client";

// VERKAUFSPSYCHOLOGIE: Preistransparenz-Banner baut Vertrauen auf (eliminiert Preisangst).
// Aktuelle Modelle visuell hervorheben = relevante Kunden fühlen sich direkt angesprochen.
// Ältere Modelle im Akkordeon = Seite bleibt übersichtlich, trotzdem vollständig.

import { useState } from "react";
import { preisDaten, type PreisZeile } from "@/lib/preisQuelle";
import Link from "next/link";
import { ChevronRight, Shield, Phone as PhoneIcon, ArrowRight, Search, BadgeCheck, ChevronDown } from "lucide-react";

/* ─── TYPES ──────────────────────────────────────────── */
type Row = {
  model: string;
  display: string;
  rueckseite: string;
  batterie: string;
  ladebuchse: string;
  kameraglas: string;
  lautsprecher: string;
  datenrettung: string;
  kamera: string;
  isCurrent?: boolean;   // Hervorgehobene aktuelle Modelle
  isLegacy?: boolean;    // Ältere Modelle (im Akkordeon)
};
type Tab = { id: string; label: string };

/* ─── HELPERS ────────────────────────────────────────── */
const chf = (v: number | null) => (v === null ? "–" : `CHF\u00A0${v.toFixed(2)}`);
const r = (
  model: string,
  display: number | null,
  rueckseite: number | null,
  batterie: number | null,
  ladebuchse: number | null,
  kameraglas: number | null,
  lautsprecher: number | null,
  datenrettung: number | null,
  kamera: number | null,
  isCurrent = false,
  isLegacy = false,
): Row => ({
  model, isCurrent, isLegacy,
  display:     chf(display),
  rueckseite:  chf(rueckseite),
  batterie:    chf(batterie),
  ladebuchse:  chf(ladebuchse),
  kameraglas:  chf(kameraglas),
  lautsprecher:chf(lautsprecher),
  datenrettung:chf(datenrettung),
  kamera:      chf(kamera),
});

/* ─── DATA (alle Preise 1:1 von b-repair.ch) ─────────── */
const tabs: Tab[] = [
  { id: "iphone",       label: "iPhone" },
  { id: "ipad",         label: "iPad" },
  { id: "samsung-s",    label: "Samsung S" },
  { id: "samsung-a",    label: "Samsung A" },
  { id: "samsung-note", label: "Samsung Note" },
  { id: "huawei",       label: "Huawei" },
];

/* ─── DATA ───────────────────────────────────────────────
   Preise kommen aus data/preise.json – dieselbe Quelle wie
   Markenseiten, Modellseiten und Preisrechner. */
const ausJson = (rows: PreisZeile[]): Row[] =>
  rows.map((p) =>
    r(p.modell, p.display, p.rueckseite, p.batterie, p.ladebuchse,
      p.kameraglas, p.lautsprecher, p.datenrettung, p.kamera,
      p.aktuell ?? false, p.aelter ?? false),
  );

const data: Record<string, Row[]> = Object.fromEntries(
  tabs.map((t) => [t.id, ausJson(preisDaten[t.id] ?? [])]),
);

const cols = [
  { key: "display",      label: "Frontdisplay" },
  { key: "rueckseite",   label: "Glasrückseite" },
  { key: "batterie",     label: "Batterie" },
  { key: "ladebuchse",   label: "Ladebuchse" },
  { key: "kameraglas",   label: "Kameraglas" },
  { key: "lautsprecher", label: "Lautsprecher" },
  { key: "datenrettung", label: "Datenrettung" },
  { key: "kamera",       label: "Hauptkamera" },
] as const;

/* ─── TABLE COMPONENT ────────────────────────────────── */
function PriceTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-brand-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-brand-surface border-b border-brand-border">
            <th className="sticky left-0 bg-brand-surface text-left px-4 py-4 text-brand-primary font-sans font-bold text-xs uppercase tracking-wider min-w-[175px]">
              Modell
            </th>
            {cols.map((col) => (
              <th key={col.key} className="text-left px-4 py-4 text-brand-gray font-sans font-semibold uppercase tracking-wider whitespace-nowrap">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.model}
              className={`border-b border-brand-border/60 transition-colors hover:bg-brand-accent/5 ${
                row.isCurrent
                  ? "bg-brand-accent/8 border-l-4 border-l-brand-accent"
                  : i % 2 === 0 ? "bg-white" : "bg-brand-surface/40"
              }`}
            >
              <td
                className="sticky left-0 px-4 py-3 font-sans font-semibold whitespace-nowrap"
                style={{
                  backgroundColor: row.isCurrent ? "rgba(6,182,212,0.08)" : i % 2 === 0 ? "#ffffff" : "#F4F6F880",
                  color: "#252B36",
                }}
              >
                <span className="flex items-center gap-2">
                  {row.model}
                  {/* VERKAUFSPSYCHOLOGIE: Badge auf aktuellen Modellen → sofortige Relevanz */}
                  {row.isCurrent && (
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-brand-accent text-brand-primary text-[9px] font-bold uppercase tracking-wide">
                      <BadgeCheck className="w-2.5 h-2.5" />
                      Aktuell
                    </span>
                  )}
                </span>
              </td>
              {cols.map((col) => {
                const val = row[col.key as keyof Row] as string;
                const hasPrice = val !== "–";
                return (
                  <td
                    key={col.key}
                    className={`px-4 py-3 whitespace-nowrap font-price ${
                      hasPrice
                        ? col.key === "display"
                          ? "text-brand-accent font-bold"
                          : "text-brand-gray"
                        : "text-brand-border"
                    }`}
                  >
                    {val}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── PAGE ───────────────────────────────────────────── */
export default function PreislistePage() {
  const [active, setActive]           = useState("iphone");
  const [search, setSearch]           = useState("");
  const [showLegacy, setShowLegacy]   = useState(false);

  const allRows   = (data[active] ?? []).filter((row) =>
    row.model.toLowerCase().includes(search.toLowerCase())
  );
  const mainRows   = allRows.filter((r) => !r.isLegacy);
  const legacyRows = allRows.filter((r) => r.isLegacy);

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-10 relative overflow-hidden bg-grid">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-brand-accent/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center gap-2 text-xs text-brand-gray font-sans mb-4">
            <Link href="/" className="hover:text-brand-accent transition-colors">Start</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-primary font-bold">Preise & Garantie</span>
          </nav>
          <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] block mb-1">Transparente Preise</span>
          <h1 className="font-headline text-4xl sm:text-5xl text-brand-primary">Preise & Garantie</h1>
          <p className="mt-3 font-sans text-brand-gray max-w-xl">
            Alle Preise in CHF inkl. MwSt. Verbindlicher Fixpreis vor jeder Reparatur.
          </p>

          {/* VERKAUFSPSYCHOLOGIE: Preistransparenz-Banner eliminiert Preisangst.
              "Wir verstecken keine Preise" = direktes Gegenbild zu intransparenten Konkurrenten.
              Positioniert B-repair als ehrlichsten Anbieter im Markt. */}
          <div className="mt-6 p-5 rounded-2xl bg-brand-accent/10 border-2 border-brand-accent/30 max-w-3xl">
            <div className="flex items-start gap-3">
              <BadgeCheck className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-headline text-xl text-brand-primary">
                  Wir verstecken keine Preise.
                </p>
                <p className="font-sans text-brand-gray text-sm mt-1 leading-relaxed">
                  Was Sie hier sehen, zahlen Sie – ohne Überraschung.{" "}
                  <strong className="text-brand-primary">Den Fixpreis nennen wir vor der Reparatur.</strong>{" "}
                  Kein Kostenvoranschlag, kein Mindesthonorar, keine Bearbeitungsgebühr.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tabs + Search */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActive(tab.id); setSearch(""); setShowLegacy(false); }}
                  className={`cta-btn px-4 rounded-xl font-sans font-bold text-sm transition-all ${
                    active === tab.id
                      ? "bg-brand-primary text-white shadow-md"
                      : "bg-white border border-brand-border text-brand-gray hover:border-brand-primary hover:text-brand-primary"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="relative sm:ml-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Modell suchen…"
                className="pl-9 pr-4 py-2.5 rounded-xl bg-white border border-brand-border text-brand-primary font-sans text-sm placeholder:text-brand-gray/60 focus:outline-none focus:border-brand-accent w-full sm:w-56 transition-colors"
              />
            </div>
          </div>

          {/* Legende */}
          <div className="flex items-center gap-4 mb-4 text-xs font-sans text-brand-gray">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-brand-accent/20 border-l-2 border-brand-accent" />
              Aktuelles Modell (hervorgehoben)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-white border border-brand-border" />
              Alle Modelle – gleiche Qualität
            </span>
          </div>

          {/* Haupttabelle (alle Nicht-Legacy) */}
          {mainRows.length === 0 && legacyRows.length === 0 ? (
            <div className="text-center py-10 text-brand-gray font-sans">
              Kein Modell gefunden –{" "}
              <a href="tel:+41764020306" className="text-brand-accent hover:underline font-bold">anfragen</a>
            </div>
          ) : (
            <PriceTable rows={mainRows} />
          )}

          {/* VERKAUFSPSYCHOLOGIE: Ältere Modelle im Akkordeon:
              Hält die Seite übersichtlich, ohne Inhalte zu entfernen.
              "Auch ältere Geräte" signalisiert Kompetenz und Vollständigkeit. */}
          {legacyRows.length > 0 && (
            <div className="mt-4">
              <button
                onClick={() => setShowLegacy(!showLegacy)}
                className="cta-btn w-full px-5 rounded-xl bg-brand-surface border border-brand-border text-brand-gray font-sans font-bold text-sm hover:border-brand-primary hover:text-brand-primary transition-all gap-2"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${showLegacy ? "rotate-180" : ""}`} />
                {showLegacy ? "Ältere Modelle ausblenden" : `Ältere Modelle anzeigen (${legacyRows.length} Modelle)`}
                <ChevronDown className={`w-4 h-4 transition-transform ${showLegacy ? "rotate-180" : ""}`} />
              </button>
              {showLegacy && (
                <div className="mt-3">
                  <PriceTable rows={legacyRows} />
                </div>
              )}
            </div>
          )}

          {/* Guarantees */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: Shield,     text: "6 Monate Garantie auf alle Reparaturen" },
              { icon: PhoneIcon,  text: "Fixpreis vor der Reparatur" },
              { icon: BadgeCheck, text: "Modell nicht dabei? Einfach anfragen" },
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
          <h2 className="font-headline text-3xl text-brand-primary mb-3">Modell nicht gefunden?</h2>
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
