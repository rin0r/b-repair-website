"use client";

import { useState } from "react";
import { Search, BadgeCheck, ChevronDown } from "lucide-react";
import type { Row, BrandSeries } from "@/lib/repairData";

const cols = [
  { key: "display",      label: "Display" },
  { key: "rueckseite",   label: "Rückseite" },
  { key: "batterie",     label: "Akku" },
  { key: "ladebuchse",   label: "Ladebuchse" },
  { key: "kameraglas",   label: "Kameraglas" },
  { key: "lautsprecher", label: "Lautsprecher" },
  { key: "datenrettung", label: "Datenrettung" },
  { key: "kamera",       label: "Kamera" },
] as const;

function TableRows({ rows }: { rows: Row[] }) {
  return (
    <>
      {rows.map((row, i) => (
        <tr
          key={row.model}
          className={`border-b border-brand-border/60 hover:bg-brand-accent/5 transition-colors ${
            row.isCurrent ? "border-l-4 border-l-brand-accent" : ""
          }`}
        >
          <td
            className="sticky left-0 px-4 py-3 font-sans font-semibold whitespace-nowrap text-sm"
            style={{
              backgroundColor: row.isCurrent
                ? "rgba(61,158,140,0.08)"
                : i % 2 === 0 ? "#ffffff" : "#F4F5F780",
              color: "#111827",
            }}
          >
            <span className="flex items-center gap-2">
              {row.model}
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
                className={`px-4 py-3 whitespace-nowrap text-xs font-price ${
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
    </>
  );
}

export default function BrandPriceTable({ series }: { series: BrandSeries[] }) {
  const [activeSeries, setActiveSeries] = useState(0);
  const [search, setSearch]             = useState("");
  const [showLegacy, setShowLegacy]     = useState(false);

  const current     = series[activeSeries];
  const filtered    = current.rows.filter((r) =>
    r.model.toLowerCase().includes(search.toLowerCase())
  );
  const mainRows    = filtered.filter((r) => !r.isLegacy);
  const legacyRows  = filtered.filter((r) => r.isLegacy);

  return (
    <div>
      {/* Series tabs – only shown when multiple series (Samsung) */}
      {series.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {series.map((s, idx) => (
            <button
              key={s.label}
              onClick={() => { setActiveSeries(idx); setSearch(""); setShowLegacy(false); }}
              className={`cta-btn px-5 rounded-xl font-sans font-bold text-sm transition-all ${
                activeSeries === idx
                  ? "bg-brand-primary text-white shadow-md"
                  : "bg-white border border-brand-border text-brand-gray hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      {/* Search */}
      <div className="relative mb-5 sm:w-64">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setShowLegacy(false); }}
          placeholder="Modell suchen…"
          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-brand-border text-brand-primary font-sans text-sm placeholder:text-brand-gray/60 focus:outline-none focus:border-brand-accent transition-colors"
        />
      </div>

      {/* Main table */}
      <div className="overflow-x-auto rounded-2xl border border-brand-border">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-brand-surface border-b border-brand-border">
              <th className="sticky left-0 bg-brand-surface text-left px-4 py-4 text-brand-primary font-sans font-bold text-xs uppercase tracking-wider min-w-[175px]">
                Modell
              </th>
              {cols.map((col) => (
                <th
                  key={col.key}
                  className="text-left px-4 py-4 text-brand-gray font-sans font-semibold uppercase tracking-wider whitespace-nowrap"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mainRows.length === 0 && legacyRows.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center py-10 text-brand-gray font-sans text-sm">
                  Kein Modell gefunden –{" "}
                  <a href="tel:+41764020306" className="text-brand-accent hover:underline font-bold">
                    anfragen
                  </a>
                </td>
              </tr>
            ) : (
              <TableRows rows={mainRows} />
            )}
          </tbody>
        </table>
      </div>

      {/* Legacy accordion */}
      {legacyRows.length > 0 && (
        <div className="mt-4">
          <button
            onClick={() => setShowLegacy(!showLegacy)}
            className="cta-btn w-full px-5 rounded-xl bg-white border border-brand-border text-brand-gray font-sans font-bold text-sm hover:border-brand-primary hover:text-brand-primary transition-all gap-2"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${showLegacy ? "rotate-180" : ""}`} />
            {showLegacy
              ? "Ältere Modelle ausblenden"
              : `Ältere Modelle anzeigen (${legacyRows.length} Modelle)`}
            <ChevronDown className={`w-4 h-4 transition-transform ${showLegacy ? "rotate-180" : ""}`} />
          </button>
          {showLegacy && (
            <div className="mt-3 overflow-x-auto rounded-2xl border border-brand-border">
              <table className="w-full text-xs">
                <tbody>
                  <TableRows rows={legacyRows} />
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-sans text-brand-gray">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-brand-accent/20 border-l-2 border-brand-accent" />
          Aktuelles Modell
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-brand-accent font-bold">CHF</span>
          Display-Preis hervorgehoben
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-brand-border">–</span>
          Nicht verfügbar / auf Anfrage
        </span>
      </div>
    </div>
  );
}
