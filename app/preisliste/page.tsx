"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Info, Shield, Phone as PhoneIcon, ArrowRight, Search } from "lucide-react";

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
};
type Tab = { id: string; label: string };

/* ─── HELPERS ────────────────────────────────────────── */
const chf = (v: number | null) => (v === null ? "–" : `CHF ${v.toFixed(2)}`);
const r = (
  model: string,
  display: number | null,
  rueckseite: number | null,
  batterie: number | null,
  ladebuchse: number | null,
  kameraglas: number | null,
  lautsprecher: number | null,
  datenrettung: number | null,
  kamera: number | null
): Row => ({
  model,
  display: chf(display),
  rueckseite: chf(rueckseite),
  batterie: chf(batterie),
  ladebuchse: chf(ladebuchse),
  kameraglas: chf(kameraglas),
  lautsprecher: chf(lautsprecher),
  datenrettung: chf(datenrettung),
  kamera: chf(kamera),
});

/* ─── DATA ───────────────────────────────────────────── */
const tabs: Tab[] = [
  { id: "iphone", label: "iPhone" },
  { id: "ipad", label: "iPad" },
  { id: "samsung-s", label: "Samsung S" },
  { id: "samsung-a", label: "Samsung A" },
  { id: "samsung-note", label: "Samsung Note" },
  { id: "huawei", label: "Huawei" },
];

const data: Record<string, Row[]> = {
  iphone: [
    r("iPhone 17 Pro Max",539,299,149,149,149,149,169,239),
    r("iPhone 17 Pro",539,299,149,149,149,149,169,239),
    r("iPhone 17 Air",499,299,149,149,149,149,169,239),
    r("iPhone 17",499,299,149,149,149,149,169,239),
    r("iPhone 16 Pro Max",499,199,149,149,99,149,169,239),
    r("iPhone 16 Pro",499,249,149,149,99,149,169,239),
    r("iPhone 16 Plus",399,249,139,149,149,149,169,169),
    r("iPhone 16e",369,249,129,149,149,149,169,219),
    r("iPhone 16",349,249,129,149,149,149,169,219),
    r("iPhone 15 Pro Max",529,299,149,149,149,149,169,199),
    r("iPhone 15 Pro",529,249,149,149,149,149,169,199),
    r("iPhone 15 Plus",399,249,139,149,149,149,169,169),
    r("iPhone 15",349,249,139,149,149,149,169,169),
    r("iPhone 14 Pro Max",439,199,129,99,99,99,169,199),
    r("iPhone 14 Pro",389,199,129,99,99,99,169,179),
    r("iPhone 14 Plus",389,199,119,99,99,99,169,169),
    r("iPhone 14",349,199,119,99,99,99,169,169),
    r("iPhone 13 Pro Max",389,199,119,99,99,99,169,169),
    r("iPhone 13 Pro",349,199,119,99,99,99,169,179),
    r("iPhone 13",339,199,119,99,99,99,169,169),
    r("iPhone 13 mini",289,199,119,99,99,99,169,169),
    r("iPhone 12 Pro Max",389,199,109,99,89,89,169,179),
    r("iPhone 12 Pro",349,199,109,99,89,89,169,179),
    r("iPhone 12",329,199,109,99,89,89,169,169),
    r("iPhone 12 mini",369,199,99,99,89,89,169,169),
    r("iPhone 11 Pro Max",199,199,79,99,89,89,169,159),
    r("iPhone 11 Pro",149,199,79,89,89,89,169,159),
    r("iPhone 11",139,199,79,89,89,89,169,149),
    r("iPhone XS Max",129,199,89,89,89,89,169,159),
    r("iPhone XS",169,199,89,89,89,89,169,159),
    r("iPhone XR",109,199,89,89,89,89,169,149),
    r("iPhone X",99,199,89,89,89,89,169,159),
    r("iPhone 8 Plus",99,199,89,89,89,89,169,149),
    r("iPhone 8",99,199,89,89,89,89,169,149),
    r("iPhone 7 Plus",99,199,89,89,89,89,169,149),
    r("iPhone 7",89,199,89,89,89,89,169,149),
    r("iPhone 6s Plus",89,199,89,89,89,89,169,149),
    r("iPhone 6s",79,199,89,89,89,89,169,149),
    r("iPhone 6 Plus",79,199,89,89,89,89,169,149),
    r("iPhone 6",69,199,89,89,89,89,169,149),
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
    r("iPad Mini 3",129,null,99,null,null,null,169,null),
    r("iPad Mini 2",129,null,99,null,null,null,169,null),
    r("iPad Mini 1",129,null,99,null,null,null,169,null),
    r("iPad 10",199,null,119,null,null,null,169,null),
    r("iPad 9",149,null,150,null,null,null,169,null),
    r("iPad 8",149,null,150,null,null,null,169,null),
    r("iPad 7",139,null,119,null,null,null,169,null),
    r("iPad 6",129,null,119,null,null,null,169,null),
    r("iPad 5",129,null,119,null,null,null,169,null),
    r("iPad 4",119,null,99,null,null,null,169,null),
    r("iPad 3",119,null,99,null,null,null,169,null),
    r("iPad 2",119,null,99,null,null,null,169,null),
  ],
  "samsung-s": [
    r("Galaxy S25 Ultra 5G",499,119,119,99,null,99,169,339),
    r("Galaxy S25+ 5G",369,99,99,99,null,99,169,219),
    r("Galaxy S25 5G",349,99,99,99,null,99,169,219),
    r("Galaxy S24 Ultra 5G",499,99,99,99,null,99,169,289),
    r("Galaxy S24+ 5G",349,99,99,99,null,99,169,199),
    r("Galaxy S24 5G",339,99,99,99,null,99,169,219),
    r("Galaxy S23 Ultra 5G",489,99,99,99,null,99,169,289),
    r("Galaxy S23+ 5G",349,99,99,99,null,99,169,279),
    r("Galaxy S23 5G",289,99,99,99,null,99,169,279),
    r("Galaxy S22 Ultra 5G",379,99,99,99,null,119,169,279),
    r("Galaxy S22+",349,99,99,99,null,99,169,279),
    r("Galaxy S22",329,99,99,99,null,99,169,249),
    r("Galaxy S21 Ultra 5G",379,99,99,99,null,99,169,169),
    r("Galaxy S21+",339,99,99,99,null,99,169,149),
    r("Galaxy S21",329,99,99,99,null,99,169,169),
    r("Galaxy S21 FE",239,99,99,99,null,99,169,139),
    r("Galaxy S20 Ultra 5G",339,99,99,99,null,99,169,199),
    r("Galaxy S20+ 5G",329,99,99,99,99,99,169,179),
    r("Galaxy S20+",329,99,99,99,99,99,169,179),
    r("Galaxy S20",309,99,99,99,99,99,169,159),
    r("Galaxy S20 FE",199,99,99,99,99,99,169,99),
    r("Galaxy S10 5G",339,119,89,99,99,89,169,179),
    r("Galaxy S10+",319,99,89,149,99,89,169,179),
    r("Galaxy S10",299,89,89,139,89,89,169,159),
    r("Galaxy S10e",279,89,89,119,99,89,169,149),
    r("Galaxy S9+",249,89,89,89,99,79,169,159),
    r("Galaxy S9",249,89,89,79,99,79,169,149),
    r("Galaxy S8+",239,89,89,69,99,69,169,119),
    r("Galaxy S8",239,89,89,89,99,69,169,129),
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
    r("Galaxy A30",159,79,79,79,79,79,169,109),
    r("Galaxy A22",169,79,89,79,79,79,169,99),
    r("Galaxy A21",139,79,89,79,79,79,169,99),
    r("Galaxy A20",149,79,89,79,79,79,169,99),
    r("Galaxy A14",199,89,89,89,89,89,169,99),
    r("Galaxy A13",159,89,89,89,89,89,169,99),
    r("Galaxy A12",159,79,89,79,79,79,169,99),
    r("Galaxy A10",139,79,89,79,79,79,169,99),
    r("Galaxy A02",109,89,89,79,79,79,169,89),
  ],
  "samsung-note": [
    r("Galaxy Note 20 Ultra",329,99,99,99,99,99,169,159),
    r("Galaxy Note 20",269,99,99,99,99,99,169,159),
    r("Galaxy Note 10+",339,99,99,99,99,99,169,159),
    r("Galaxy Note 10",309,99,99,99,99,99,169,159),
    r("Galaxy Note 9",319,89,89,99,99,99,169,159),
    r("Galaxy Note 8",289,89,89,99,99,99,169,159),
  ],
  huawei: [
    r("Huawei P40 Pro",349,149,99,119,119,99,169,229),
    r("Huawei P40",279,149,99,119,119,99,169,229),
    r("Huawei P40 Lite",189,89,89,89,109,89,169,119),
    r("Huawei P40 Lite E",189,129,89,89,89,89,169,119),
    r("Huawei P30 Pro",279,99,99,99,99,99,169,189),
    r("Huawei P30",239,99,89,99,99,99,169,149),
    r("Huawei P30 Lite",189,89,89,89,89,89,169,99),
    r("Huawei P20 Pro",229,89,89,89,89,89,169,179),
    r("Huawei P20",169,99,89,89,99,89,169,139),
    r("Huawei P20 Lite",189,89,89,89,99,89,169,109),
    r("Huawei Mate 20 Pro",289,109,99,99,109,99,169,179),
    r("Huawei Mate 20",289,139,99,99,129,119,169,139),
    r("Huawei Mate 20 Lite",189,89,89,89,89,89,169,119),
  ],
};

const cols = [
  { key: "display", label: "Frontdisplay" },
  { key: "rueckseite", label: "Glasrückseite" },
  { key: "batterie", label: "Batterie" },
  { key: "ladebuchse", label: "Ladebuchse" },
  { key: "kameraglas", label: "Kameraglas" },
  { key: "lautsprecher", label: "Lautsprecher" },
  { key: "datenrettung", label: "Datenrettung" },
  { key: "kamera", label: "Hauptkamera" },
] as const;

/* ─── PAGE ───────────────────────────────────────────── */
export default function PreislistePage() {
  const [active, setActive] = useState("iphone");
  const [search, setSearch] = useState("");

  const rows = (data[active] ?? []).filter((row) =>
    row.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-14 bg-grid relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-brand-accent/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center gap-2 text-xs text-brand-muted mb-4">
            <Link href="/" className="hover:text-brand-accent transition-colors">Start</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Preisliste</span>
          </nav>
          <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.15em]">Transparente Preise</span>
          <h1 className="mt-1 text-4xl sm:text-5xl font-black text-white leading-tight">Preisliste</h1>
          <p className="mt-3 text-brand-muted text-base max-w-xl">
            Alle Preise in CHF inkl. MwSt. Kostenlose Diagnose vor jeder Reparatur.
          </p>
          <div className="mt-5 flex items-start gap-3 p-4 rounded-xl bg-brand-accent/8 border border-brand-accent/20 text-sm text-brand-muted max-w-2xl">
            <Info className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
            <span>Die Preise sind Fixpreise – keine versteckten Kosten. Für Modelle die nicht aufgeführt sind, gerne anfragen.</span>
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
                  onClick={() => { setActive(tab.id); setSearch(""); }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                    active === tab.id
                      ? "bg-brand-accent text-white shadow-md shadow-brand-accent/20"
                      : "bg-brand-card border border-white/8 text-brand-muted hover:border-white/20 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="relative sm:ml-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Modell suchen…"
                className="pl-9 pr-4 py-2.5 rounded-xl bg-brand-card border border-white/8 text-brand-text text-sm placeholder:text-brand-muted/60 focus:outline-none focus:border-brand-accent/50 w-full sm:w-56 transition-colors"
              />
            </div>
          </div>

          {/* Table */}
          <div className="rounded-2xl border border-white/8 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-brand-surface border-b border-white/8">
                    <th className="sticky left-0 bg-brand-surface text-left px-4 py-4 text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap min-w-[160px]">
                      Modell
                    </th>
                    {cols.map((col) => (
                      <th key={col.key} className="text-left px-4 py-4 text-brand-muted font-semibold uppercase tracking-wider whitespace-nowrap">
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="px-4 py-10 text-center text-brand-muted text-sm">
                        Kein Modell gefunden – <a href="tel:+41764020306" className="text-brand-accent hover:underline">anfragen</a>
                      </td>
                    </tr>
                  ) : (
                    rows.map((row, i) => (
                      <tr
                        key={row.model}
                        className={`border-b border-white/5 hover:bg-white/3 transition-colors ${i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"}`}
                      >
                        <td className="sticky left-0 bg-brand-bg px-4 py-3 font-semibold text-white whitespace-nowrap" style={{ backgroundColor: i % 2 === 0 ? "#0a0f1e" : "#0c1120" }}>
                          {row.model}
                        </td>
                        {cols.map((col) => {
                          const val = row[col.key];
                          const isPrice = val !== "–";
                          return (
                            <td key={col.key} className={`px-4 py-3 whitespace-nowrap ${isPrice ? (col.key === "display" ? "text-brand-accent font-bold" : "text-brand-muted") : "text-white/20"}`}>
                              {val}
                            </td>
                          );
                        })}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Guarantees */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: Shield, text: "6 Monate Garantie auf alle Reparaturen" },
              { icon: PhoneIcon, text: "Kostenlose Diagnose vor der Reparatur" },
              { icon: ChevronRight, text: "Modell nicht dabei? Einfach anfragen" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 p-4 rounded-xl bg-brand-card border border-white/6 text-xs text-brand-muted">
                <Icon className="w-4 h-4 text-brand-accent flex-shrink-0" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-surface border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Modell nicht gefunden?</h2>
          <p className="text-brand-muted text-sm mb-6">Wir reparieren praktisch alle Geräte – einfach anfragen.</p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent text-white font-bold text-sm hover:bg-brand-accent-dark transition-all glow"
          >
            Anfrage senden <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
