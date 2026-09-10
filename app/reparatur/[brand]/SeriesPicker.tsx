"use client";

// VERKAUFSPSYCHOLOGIE: 59 Samsung-Modelle auf einmal überfordern.
// Erst die Serie wählen (drei Karten), dann die Modelle dieser Serie –
// zwei einfache Entscheidungen statt einer langen Liste.
// Alle Modell-Links stehen trotzdem im HTML (nur ausgeblendet),
// damit Google sie findet. Wichtig: die Layout-Klasse darf nur
// gesetzt sein, wenn der Block sichtbar ist – sonst schlaegt
// `display:grid` das `hidden`-Attribut.

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";

export type SerieRow = { model: string; slug: string; ab: string | null };
export type Serie = { label: string; kurz: string; cover?: string; rows: SerieRow[] };

export default function SeriesPicker({
  brandKey,
  series,
}: {
  brandKey: string;
  series: Serie[];
}) {
  const [aktiv, setAktiv] = useState<string | null>(null);
  const gewaehlt = series.find((s) => s.label === aktiv);

  return (
    <div>
      {/* Serien-Auswahl */}
      <div
        hidden={aktiv !== null}
        className={aktiv === null ? "grid grid-cols-1 sm:grid-cols-3 gap-4" : undefined}
      >
        {series.map((serie) => (
          <button
            key={serie.label}
            onClick={() => setAktiv(serie.label)}
            className="group flex sm:flex-col items-center gap-5 sm:gap-3 p-6 rounded-2xl bg-white border border-brand-border shadow-sm hover:border-brand-accent hover:shadow-md transition-all text-left sm:text-center"
          >
            <span className="flex items-center justify-center h-24 sm:h-32 w-20 sm:w-full flex-shrink-0">
              {serie.cover ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={serie.cover}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              ) : null}
            </span>
            <span className="min-w-0 flex-1 sm:flex-none">
              <span className="block font-headline text-2xl text-brand-primary leading-tight">
                {serie.kurz}
              </span>
              <span className="block font-sans text-xs text-brand-gray mt-1">
                {serie.rows.length} Modelle
              </span>
            </span>
            <ChevronRight className="w-5 h-5 text-brand-gray group-hover:text-brand-accent group-hover:translate-x-0.5 transition-all flex-shrink-0 sm:hidden" />
          </button>
        ))}
      </div>

      {/* Zurück-Leiste */}
      <div
        hidden={aktiv === null}
        className={aktiv === null ? undefined : "mb-5 flex items-center gap-3"}
      >
        <button
          onClick={() => setAktiv(null)}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-brand-border font-sans font-bold text-xs text-brand-gray hover:border-brand-primary hover:text-brand-primary transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Alle Serien
        </button>
        <span className="font-sans text-sm font-bold text-brand-primary">
          {gewaehlt?.label}
        </span>
      </div>

      {/* Modelllisten – alle im HTML, nur die gewählte sichtbar */}
      {series.map((serie) => (
        <div
          key={serie.label}
          hidden={aktiv !== serie.label}
          className={
            aktiv === serie.label ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" : undefined
          }
        >
          {serie.rows.map((row) => (
            <Link
              key={row.model}
              href={`/reparatur/${brandKey}/${row.slug}`}
              className="group flex items-center justify-between gap-3 px-5 py-4 rounded-xl bg-white border border-brand-border hover:border-brand-accent hover:shadow-md transition-all"
            >
              <span className="min-w-0">
                <span className="block font-sans font-bold text-brand-primary text-sm truncate">
                  {row.model}
                </span>
                <span className="block font-sans text-xs text-brand-gray mt-0.5">
                  {row.ab ? (
                    <>
                      Display ab{" "}
                      <span className="text-brand-accent font-bold">{row.ab}</span>
                    </>
                  ) : (
                    "Preis auf Anfrage"
                  )}
                </span>
              </span>
              <ChevronRight className="w-4 h-4 text-brand-gray group-hover:text-brand-accent group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
