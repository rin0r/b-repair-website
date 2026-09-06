"use client";

/* Hinweisfenster zur Neueröffnung.
   Erscheint einmal pro Besuch (sessionStorage), lässt sich schliessen und
   blockiert danach nichts mehr. Der Routen-Knopf öffnet Google Maps mit dem
   Ziel Stationsweg 3 – den Startpunkt setzt Maps automatisch auf den
   aktuellen Standort, wir fragen also selbst keine Ortsfreigabe ab. */

import { useEffect, useState } from "react";
import { X, MapPin, CalendarDays, ArrowRight } from "lucide-react";

const SCHLUESSEL = "eroeffnung-2026-09-12";
const ZIEL = "Stationsweg 3, 3627 Heimberg, Schweiz";
const ROUTE = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ZIEL)}`;

export default function OpeningModal() {
  const [offen, setOffen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SCHLUESSEL)) return;
    } catch {
      /* privater Modus o. Ä. – dann zeigen wir es einfach */
    }
    const t = setTimeout(() => setOffen(true), 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!offen) return;
    const beiTaste = (e: KeyboardEvent) => { if (e.key === "Escape") schliessen(); };
    document.addEventListener("keydown", beiTaste);
    const vorher = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", beiTaste);
      document.body.style.overflow = vorher;
    };
  }, [offen]);

  const schliessen = () => {
    setOffen(false);
    try { sessionStorage.setItem(SCHLUESSEL, "1"); } catch { /* egal */ }
  };

  if (!offen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="eroeffnung-titel"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
    >
      {/* Hintergrund – Klick schliesst */}
      <button
        aria-label="Hinweis schliessen"
        onClick={schliessen}
        className="absolute inset-0 bg-brand-primary/70 backdrop-blur-sm cursor-default"
      />

      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-brand-border shadow-2xl overflow-hidden animate-slide-up">
        {/* Akzentstreifen */}
        <div className="h-1.5 bg-gradient-to-r from-brand-accent via-brand-accent-dark to-brand-accent" />

        <button
          onClick={schliessen}
          aria-label="Schliessen"
          className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-brand-gray hover:text-brand-primary hover:bg-brand-surface transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="px-7 sm:px-10 pt-8 pb-9 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-[11px] font-sans font-bold uppercase tracking-[0.15em]">
            <CalendarDays className="w-3.5 h-3.5" />
            Neueröffnung
          </span>

          <h2 id="eroeffnung-titel" className="font-headline text-4xl sm:text-5xl text-brand-primary mt-5 leading-none">
            Wir eröffnen am
          </h2>
          <p className="font-headline text-5xl sm:text-6xl text-brand-accent leading-none mt-1">
            12.09.2026
          </p>
          <p className="font-headline text-2xl sm:text-3xl text-brand-primary mt-3">
            bei Lädeli Heimberg
          </p>

          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-surface border border-brand-border">
            <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0" />
            <span className="font-sans text-sm text-brand-gray">Stationsweg 3, 3627 Heimberg</span>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={ROUTE}
              target="_blank"
              rel="noopener noreferrer"
              onClick={schliessen}
              className="cta-btn gap-2 px-6 rounded-xl bg-brand-accent text-brand-primary font-sans font-bold text-sm hover:bg-brand-accent-dark transition-all glow-sm"
            >
              Route berechnen <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={schliessen}
              className="cta-btn px-6 rounded-xl bg-white border border-brand-border text-brand-gray font-sans font-bold text-sm hover:border-brand-primary hover:text-brand-primary transition-all"
            >
              Weiter zur Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
