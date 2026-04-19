"use client";

// VERKAUFSPSYCHOLOGIE: Preistransparenz-Banner baut Vertrauen auf (eliminiert Preisangst).
// Aktuelle Modelle visuell hervorheben = relevante Kunden fühlen sich direkt angesprochen.
// Ältere Modelle im Akkordeon = Seite bleibt übersichtlich, trotzdem vollständig.

import { useState } from "react";
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

const data: Record<string, Row[]> = {
  iphone: [
    // isCurrent = true: iPhone 16/17 → visuell hervorgehoben
    r("iPhone 17 Pro Max",539,299,149,149,149,149,169,239,true),
    r("iPhone 17 Pro",    539,299,149,149,149,149,169,239,true),
    r("iPhone 17 Air",    499,299,149,149,149,149,169,239,true),
    r("iPhone 17",        499,299,149,149,149,149,169,239,true),
    r("iPhone 16 Pro Max",499,199,149,149,99, 149,169,239,true),
    r("iPhone 16 Pro",    499,249,149,149,99, 149,169,239,true),
    r("iPhone 16 Plus",   399,249,139,149,149,149,169,169,true),
    r("iPhone 16e",       369,249,129,149,149,149,169,219,true),
    r("iPhone 16",        349,249,129,149,149,149,169,219,true),
    // Standard-Modelle
    r("iPhone 15 Pro Max",529,299,149,149,149,149,169,199),
    r("iPhone 15 Pro",    529,249,149,149,149,149,169,199),
    r("iPhone 15 Plus",   399,249,139,149,149,149,169,169),
    r("iPhone 15",        349,249,139,149,149,149,169,169),
    r("iPhone 14 Pro Max",439,199,129,99, 99, 99, 169,199),
    r("iPhone 14 Pro",    389,199,129,99, 99, 99, 169,179),
    r("iPhone 14 Plus",   389,199,119,99, 99, 99, 169,169),
    r("iPhone 14",        349,199,119,99, 99, 99, 169,169),
    r("iPhone 13 Pro Max",389,199,119,99, 99, 99, 169,169),
    r("iPhone 13 Pro",    349,199,119,99, 99, 99, 169,179),
    r("iPhone 13",        339,199,119,99, 99, 99, 169,169),
    r("iPhone 13 mini",   289,199,119,99, 99, 99, 169,169),
    r("iPhone 12 Pro Max",389,199,109,99, 89, 89, 169,179),
    r("iPhone 12 Pro",    349,199,109,99, 89, 89, 169,179),
    r("iPhone 12",        329,199,109,99, 89, 89, 169,169),
    r("iPhone 12 mini",   369,199,99, 99, 89, 89, 169,169),
    r("iPhone 11 Pro Max",199,199,79, 99, 89, 89, 169,159),
    r("iPhone 11 Pro",    149,199,79, 89, 89, 89, 169,159),
    r("iPhone 11",        139,199,79, 89, 89, 89, 169,149),
    r("iPhone XS Max",    129,199,89, 89, 89, 89, 169,159),
    r("iPhone XS",        169,199,89, 89, 89, 89, 169,159),
    r("iPhone XR",        109,199,89, 89, 89, 89, 169,149),
    r("iPhone X",         99, 199,89, 89, 89, 89, 169,159),
    // isLegacy = true: iPhone 6–8 → im Akkordeon versteckt
    r("iPhone 8 Plus",    99, 199,89, 89, 89, 89, 169,149,false,true),
    r("iPhone 8",         99, 199,89, 89, 89, 89, 169,149,false,true),
    r("iPhone 7 Plus",    99, 199,89, 89, 89, 89, 169,149,false,true),
    r("iPhone 7",         89, 199,89, 89, 89, 89, 169,149,false,true),
    r("iPhone 6s Plus",   89, 199,89, 89, 89, 89, 169,149,false,true),
    r("iPhone 6s",        79, 199,89, 89, 89, 89, 169,149,false,true),
    r("iPhone 6 Plus",    79, 199,89, 89, 89, 89, 169,149,false,true),
    r("iPhone 6",         69, 199,89, 89, 89, 89, 169,149,false,true),
  ],
  ipad: [
    r("iPad Pro 12.9\" (4. Gen)",269,null,null,null,null,null,169,null),
    r("iPad Pro 12.9\" (3. Gen)",269,null,null,null,null,null,169,null),
    r("iPad Pro 12.9\" (2. Gen)",499,null,159,null,null,null,169,null),
    r("iPad Pro 12.9\" (1. Gen)",339,null,159,null,null,null,169,null),
    r("iPad Pro 11\" (4. Gen)",289,null,null,null,null,null,169,null),
    r("iPad Pro 11\" (3. Gen)",289,null,null,null,null,null,169,null),
    r("iPad Pro 11\" (2. Gen)",289,null,149,null,null,null,169,null),
    r("iPad Pro 11\" (1. Gen)",279,null,149,null,null,null,169,null),
    r("iPad Pro 10.5\"",280,null,150,null,null,null,169,null),
    r("iPad Pro 9.7\"",239,null,150,null,null,null,169,null),
    r("iPad Air (4. Gen)",229,null,150,null,null,null,169,null),
    r("iPad Air (3. Gen)",229,null,150,null,null,null,169,null),
    r("iPad Air (2. Gen)",219,null,150,null,null,null,169,null),
    r("iPad Air (1. Gen)",129,null,119,null,null,null,169,null),
    r("iPad Mini 6",289,null,119,null,null,null,null,null),
    r("iPad Mini 5",229,null,119,null,null,null,169,null),
    r("iPad Mini 4",219,null,119,null,null,null,169,null),
    r("iPad Mini 3",129,null,99,null,null,null,169,null,false,true),
    r("iPad Mini 2",129,null,99,null,null,null,169,null,false,true),
    r("iPad Mini 1",129,null,99,null,null,null,169,null,false,true),
    r("iPad 10",199,null,119,null,null,null,169,null),
    r("iPad 9",149,null,150,null,null,null,169,null),
    r("iPad 8",149,null,150,null,null,null,169,null),
    r("iPad 7",139,null,119,null,null,null,169,null),
    r("iPad 6",129,null,119,null,null,null,169,null),
    r("iPad 5",129,null,119,null,null,null,169,null,false,true),
    r("iPad 4",119,null,99,null,null,null,169,null,false,true),
    r("iPad 3",119,null,99,null,null,null,169,null,false,true),
    r("iPad 2",119,null,99,null,null,null,169,null,false,true),
  ],
  "samsung-s": [
    // isCurrent: S24/S25
    r("Galaxy S25 Ultra 5G",499,119,119,99,null,99,169,339,true),
    r("Galaxy S25+ 5G",    369,99,99,99,null,99,169,219,true),
    r("Galaxy S25 5G",     349,99,99,99,null,99,169,219,true),
    r("Galaxy S24 Ultra 5G",499,99,99,99,null,99,169,289,true),
    r("Galaxy S24+ 5G",    349,99,99,99,null,99,169,199,true),
    r("Galaxy S24 5G",     339,99,99,99,null,99,169,219,true),
    r("Galaxy S23 Ultra 5G",489,99,99,99,null,99,169,289),
    r("Galaxy S23+ 5G",    349,99,99,99,null,99,169,279),
    r("Galaxy S23 5G",     289,99,99,99,null,99,169,279),
    r("Galaxy S22 Ultra 5G",379,99,99,99,null,119,169,279),
    r("Galaxy S22+",       349,99,99,99,null,99,169,279),
    r("Galaxy S22",        329,99,99,99,null,99,169,249),
    r("Galaxy S21 Ultra 5G",379,99,99,99,null,99,169,169),
    r("Galaxy S21+",       339,99,99,99,null,99,169,149),
    r("Galaxy S21",        329,99,99,99,null,99,169,169),
    r("Galaxy S21 FE",     239,99,99,99,null,99,169,139),
    r("Galaxy S20 Ultra 5G",339,99,99,99,null,99,169,199),
    r("Galaxy S20+ 5G",    329,99,99,99,99,99,169,179),
    r("Galaxy S20+",       329,99,99,99,99,99,169,179),
    r("Galaxy S20",        309,99,99,99,99,99,169,159),
    r("Galaxy S20 FE",     199,99,99,99,99,99,169,99),
    r("Galaxy S10 5G",     339,119,89,99,99,89,169,179),
    r("Galaxy S10+",       319,99,89,149,99,89,169,179),
    r("Galaxy S10",        299,89,89,139,89,89,169,159),
    r("Galaxy S10e",       279,89,89,119,99,89,169,149),
    r("Galaxy S9+",        249,89,89,89,99,79,169,159,false,true),
    r("Galaxy S9",         249,89,89,79,99,79,169,149,false,true),
    r("Galaxy S8+",        239,89,89,69,99,69,169,119,false,true),
    r("Galaxy S8",         239,89,89,89,99,69,169,129,false,true),
  ],
  "samsung-a": [
    r("Galaxy A80",199,89,89,null,null,89,169,169),
    r("Galaxy A72",199,89,89,89,89,89,169,129),
    r("Galaxy A71",189,89,89,89,89,89,169,129),
    r("Galaxy A70",189,89,89,89,89,89,169,129),
    r("Galaxy A54",199,89,89,89,89,89,169,129),
    r("Galaxy A53",199,89,89,89,89,89,169,129),
    r("Galaxy A52",189,89,89,89,89,89,169,129),
    r("Galaxy A51",179,89,89,89,89,89,169,119),
    r("Galaxy A50",169,89,99,89,89,89,169,109),
    r("Galaxy A42",179,89,89,89,9,89,169,109),
    r("Galaxy A41",189,89,89,89,89,89,169,129),
    r("Galaxy A34",199,89,89,89,89,89,169,129),
    r("Galaxy A33",189,89,89,89,89,89,169,109),
    r("Galaxy A32",169,89,89,89,89,89,169,109),
    r("Galaxy A31",159,89,89,89,89,89,169,119),
    r("Galaxy A30",159,79,79,79,79,79,169,109,false,true),
    r("Galaxy A22",169,79,89,79,79,79,169,99),
    r("Galaxy A21",139,79,89,79,79,79,169,99,false,true),
    r("Galaxy A20",149,79,89,79,79,79,169,99,false,true),
    r("Galaxy A14",199,89,89,89,89,89,169,99),
    r("Galaxy A13",159,89,89,89,89,89,169,99),
    r("Galaxy A12",159,79,89,79,79,79,169,99,false,true),
    r("Galaxy A10",139,79,89,79,79,79,169,99,false,true),
    r("Galaxy A02",109,89,89,79,79,79,169,89,false,true),
  ],
  "samsung-note": [
    r("Galaxy Note 20 Ultra",329,99,99,99,99,99,169,159),
    r("Galaxy Note 20",     269,99,99,99,99,99,169,159),
    r("Galaxy Note 10+",    339,99,99,99,99,99,169,159),
    r("Galaxy Note 10",     309,99,99,99,99,99,169,159),
    r("Galaxy Note 9",      319,89,89,99,99,99,169,159,false,true),
    r("Galaxy Note 8",      289,89,89,99,99,99,169,159,false,true),
  ],
  huawei: [
    r("Huawei P40 Pro",    349,149,99,119,119,99,169,229),
    r("Huawei P40",        279,149,99,119,119,99,169,229),
    r("Huawei P40 Lite",   189,89,89,89,109,89,169,119),
    r("Huawei P40 Lite E", 189,129,89,89,89,89,169,119),
    r("Huawei P30 Pro",    279,99,99,99,99,99,169,189),
    r("Huawei P30",        239,99,89,99,99,99,169,149),
    r("Huawei P30 Lite",   189,89,89,89,89,89,169,99),
    r("Huawei P20 Pro",    229,89,89,89,89,89,169,179,false,true),
    r("Huawei P20",        169,99,89,89,99,89,169,139,false,true),
    r("Huawei P20 Lite",   189,89,89,89,99,89,169,109,false,true),
    r("Huawei Mate 20 Pro",289,109,99,99,109,99,169,179,false,true),
    r("Huawei Mate 20",    289,139,99,99,129,119,169,139,false,true),
    r("Huawei Mate 20 Lite",189,89,89,89,89,89,169,119,false,true),
  ],
};

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
                  backgroundColor: row.isCurrent ? "rgba(61,158,140,0.08)" : i % 2 === 0 ? "#ffffff" : "#F4F5F780",
                  color: "#111827",
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
            Alle Preise in CHF inkl. MwSt. Kostenlose Diagnose vor jeder Reparatur.
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
                  <strong className="text-brand-primary">Diagnose immer kostenlos.</strong>{" "}
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
              { icon: PhoneIcon,  text: "Kostenlose Diagnose vor der Reparatur" },
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
            Wir reparieren praktisch alle Geräte. Kostenlose Diagnose – immer.
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
