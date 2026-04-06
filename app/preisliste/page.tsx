"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight, Info, Shield, Phone as PhoneIcon } from "lucide-react";

const brands = ["iPhone", "Samsung", "Huawei", "Xiaomi", "Weitere"];

type PriceItem = {
  model: string;
  display: string;
  akku: string;
  kamera?: string;
  software?: string;
};

const priceData: Record<string, PriceItem[]> = {
  iPhone: [
    { model: "iPhone 16 Pro Max", display: "CHF 319.–", akku: "CHF 89.–", kamera: "CHF 159.–", software: "CHF 49.–" },
    { model: "iPhone 16 Pro", display: "CHF 299.–", akku: "CHF 89.–", kamera: "CHF 149.–", software: "CHF 49.–" },
    { model: "iPhone 16 Plus", display: "CHF 279.–", akku: "CHF 89.–", kamera: "CHF 139.–", software: "CHF 49.–" },
    { model: "iPhone 16", display: "CHF 259.–", akku: "CHF 79.–", kamera: "CHF 129.–", software: "CHF 49.–" },
    { model: "iPhone 15 Pro Max", display: "CHF 289.–", akku: "CHF 79.–", kamera: "CHF 149.–", software: "CHF 49.–" },
    { model: "iPhone 15 Pro", display: "CHF 269.–", akku: "CHF 79.–", kamera: "CHF 139.–", software: "CHF 49.–" },
    { model: "iPhone 15 Plus", display: "CHF 249.–", akku: "CHF 69.–", kamera: "CHF 129.–", software: "CHF 49.–" },
    { model: "iPhone 15", display: "CHF 229.–", akku: "CHF 69.–", kamera: "CHF 119.–", software: "CHF 49.–" },
    { model: "iPhone 14 Pro Max", display: "CHF 269.–", akku: "CHF 69.–", kamera: "CHF 139.–", software: "CHF 49.–" },
    { model: "iPhone 14 Pro", display: "CHF 249.–", akku: "CHF 69.–", kamera: "CHF 129.–", software: "CHF 49.–" },
    { model: "iPhone 14 Plus", display: "CHF 229.–", akku: "CHF 59.–", kamera: "CHF 119.–", software: "CHF 49.–" },
    { model: "iPhone 14", display: "CHF 209.–", akku: "CHF 59.–", kamera: "CHF 109.–", software: "CHF 49.–" },
    { model: "iPhone 13 Pro Max", display: "CHF 229.–", akku: "CHF 59.–", kamera: "CHF 119.–", software: "CHF 49.–" },
    { model: "iPhone 13 Pro", display: "CHF 219.–", akku: "CHF 59.–", kamera: "CHF 109.–", software: "CHF 49.–" },
    { model: "iPhone 13", display: "CHF 189.–", akku: "CHF 49.–", kamera: "CHF 99.–", software: "CHF 49.–" },
    { model: "iPhone 12 / Pro", display: "CHF 169.–", akku: "CHF 49.–", kamera: "CHF 89.–", software: "CHF 49.–" },
    { model: "iPhone 11", display: "CHF 139.–", akku: "CHF 45.–", kamera: "CHF 79.–", software: "CHF 49.–" },
    { model: "iPhone XS / X", display: "CHF 119.–", akku: "CHF 45.–", kamera: "CHF 69.–", software: "CHF 49.–" },
    { model: "iPhone XR", display: "CHF 109.–", akku: "CHF 39.–", kamera: "CHF 59.–", software: "CHF 49.–" },
    { model: "iPhone 8 / 8 Plus", display: "CHF 89.–", akku: "CHF 35.–", kamera: "CHF 55.–", software: "CHF 39.–" },
  ],
  Samsung: [
    { model: "Galaxy S24 Ultra", display: "CHF 309.–", akku: "CHF 79.–", kamera: "CHF 149.–", software: "CHF 49.–" },
    { model: "Galaxy S24+", display: "CHF 279.–", akku: "CHF 69.–", kamera: "CHF 129.–", software: "CHF 49.–" },
    { model: "Galaxy S24", display: "CHF 249.–", akku: "CHF 69.–", kamera: "CHF 119.–", software: "CHF 49.–" },
    { model: "Galaxy S23 Ultra", display: "CHF 279.–", akku: "CHF 69.–", kamera: "CHF 139.–", software: "CHF 49.–" },
    { model: "Galaxy S23+", display: "CHF 249.–", akku: "CHF 59.–", kamera: "CHF 119.–", software: "CHF 49.–" },
    { model: "Galaxy S23", display: "CHF 219.–", akku: "CHF 59.–", kamera: "CHF 109.–", software: "CHF 49.–" },
    { model: "Galaxy S22 Ultra", display: "CHF 249.–", akku: "CHF 59.–", kamera: "CHF 129.–", software: "CHF 49.–" },
    { model: "Galaxy S22+", display: "CHF 219.–", akku: "CHF 59.–", kamera: "CHF 109.–", software: "CHF 49.–" },
    { model: "Galaxy S22", display: "CHF 199.–", akku: "CHF 49.–", kamera: "CHF 99.–", software: "CHF 49.–" },
    { model: "Galaxy A55 / A54", display: "CHF 159.–", akku: "CHF 45.–", kamera: "CHF 89.–", software: "CHF 39.–" },
    { model: "Galaxy A35 / A34", display: "CHF 139.–", akku: "CHF 39.–", kamera: "CHF 79.–", software: "CHF 39.–" },
    { model: "Galaxy A15 / A14", display: "CHF 109.–", akku: "CHF 35.–", kamera: "CHF 65.–", software: "CHF 39.–" },
    { model: "Galaxy Z Fold 5/6", display: "CHF 489.–", akku: "CHF 89.–", kamera: "CHF 169.–", software: "CHF 49.–" },
    { model: "Galaxy Z Flip 5/6", display: "CHF 359.–", akku: "CHF 79.–", kamera: "CHF 129.–", software: "CHF 49.–" },
  ],
  Huawei: [
    { model: "P60 Pro", display: "CHF 249.–", akku: "CHF 65.–", kamera: "CHF 119.–", software: "CHF 49.–" },
    { model: "P50 Pro", display: "CHF 219.–", akku: "CHF 59.–", kamera: "CHF 109.–", software: "CHF 49.–" },
    { model: "P40 Pro", display: "CHF 199.–", akku: "CHF 55.–", kamera: "CHF 99.–", software: "CHF 49.–" },
    { model: "P30 Pro", display: "CHF 169.–", akku: "CHF 49.–", kamera: "CHF 89.–", software: "CHF 39.–" },
    { model: "Mate 60 Pro", display: "CHF 269.–", akku: "CHF 69.–", kamera: "CHF 129.–", software: "CHF 49.–" },
    { model: "Mate 50 Pro", display: "CHF 239.–", akku: "CHF 65.–", kamera: "CHF 119.–", software: "CHF 49.–" },
    { model: "Nova 11 / 10", display: "CHF 149.–", akku: "CHF 45.–", kamera: "CHF 79.–", software: "CHF 39.–" },
    { model: "Nova 9 / 8", display: "CHF 129.–", akku: "CHF 39.–", kamera: "CHF 69.–", software: "CHF 39.–" },
  ],
  Xiaomi: [
    { model: "14 Ultra", display: "CHF 259.–", akku: "CHF 69.–", kamera: "CHF 129.–", software: "CHF 49.–" },
    { model: "14 Pro / 14", display: "CHF 229.–", akku: "CHF 65.–", kamera: "CHF 119.–", software: "CHF 49.–" },
    { model: "13 Ultra", display: "CHF 239.–", akku: "CHF 65.–", kamera: "CHF 129.–", software: "CHF 49.–" },
    { model: "13 Pro / 13", display: "CHF 209.–", akku: "CHF 59.–", kamera: "CHF 109.–", software: "CHF 49.–" },
    { model: "Redmi Note 13 Pro", display: "CHF 149.–", akku: "CHF 45.–", kamera: "CHF 79.–", software: "CHF 39.–" },
    { model: "Redmi Note 12", display: "CHF 129.–", akku: "CHF 39.–", kamera: "CHF 69.–", software: "CHF 39.–" },
    { model: "POCO X6 Pro", display: "CHF 159.–", akku: "CHF 45.–", kamera: "CHF 79.–", software: "CHF 39.–" },
    { model: "POCO F5", display: "CHF 149.–", akku: "CHF 45.–", kamera: "CHF 79.–", software: "CHF 39.–" },
  ],
  Weitere: [
    { model: "Google Pixel 8 Pro", display: "CHF 249.–", akku: "CHF 69.–", kamera: "CHF 129.–", software: "CHF 49.–" },
    { model: "Google Pixel 8", display: "CHF 219.–", akku: "CHF 59.–", kamera: "CHF 109.–", software: "CHF 49.–" },
    { model: "Google Pixel 7 Pro", display: "CHF 209.–", akku: "CHF 59.–", kamera: "CHF 109.–", software: "CHF 49.–" },
    { model: "OnePlus 12", display: "CHF 219.–", akku: "CHF 59.–", kamera: "CHF 109.–", software: "CHF 49.–" },
    { model: "OnePlus 11", display: "CHF 199.–", akku: "CHF 55.–", kamera: "CHF 99.–", software: "CHF 49.–" },
    { model: "Sony Xperia 1 VI", display: "CHF 259.–", akku: "CHF 69.–", kamera: "CHF 129.–", software: "CHF 49.–" },
    { model: "Motorola Edge 40", display: "CHF 159.–", akku: "CHF 45.–", kamera: "CHF 79.–", software: "CHF 39.–" },
    { model: "Andere Modelle", display: "Auf Anfrage", akku: "Auf Anfrage", kamera: "Auf Anfrage", software: "Auf Anfrage" },
  ],
};

export default function PreislistePage() {
  const [active, setActive] = useState<string>("iPhone");
  const items = priceData[active] ?? [];

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 bg-grid relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-accent/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center gap-2 text-sm text-brand-muted mb-4">
            <Link href="/" className="hover:text-brand-accent transition-colors">Start</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-text">Preisliste</span>
          </nav>
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
            Transparente Preise
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-brand-text leading-tight">
            Preisliste
          </h1>
          <p className="mt-4 text-brand-muted text-lg max-w-xl">
            Faire und transparente Preise für alle gängigen Marken und Modelle. Alle Preise in CHF inklusive Mehrwertsteuer.
          </p>

          {/* Info banner */}
          <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-brand-accent/10 border border-brand-accent/20 text-sm text-brand-muted max-w-2xl">
            <Info className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
            <span>
              Die angezeigten Preise sind Richtwerte. Kontaktieren Sie uns für ein verbindliches Angebot.
              Kostenlose Diagnose vor jeder Reparatur.
            </span>
          </div>
        </div>
      </section>

      {/* Tabs + Table */}
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Brand Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setActive(brand)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === brand
                    ? "bg-brand-accent text-white glow-sm"
                    : "bg-brand-card border border-brand-border text-brand-muted hover:border-brand-accent/50 hover:text-brand-text"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="rounded-2xl border border-brand-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-surface border-b border-brand-border">
                    <th className="text-left px-5 py-4 text-brand-text font-semibold">Modell</th>
                    <th className="text-left px-5 py-4 text-brand-text font-semibold">Display</th>
                    <th className="text-left px-5 py-4 text-brand-text font-semibold">Akku</th>
                    <th className="text-left px-5 py-4 text-brand-text font-semibold">Kamera</th>
                    <th className="text-left px-5 py-4 text-brand-text font-semibold">Software</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, i) => (
                    <tr
                      key={item.model}
                      className={`border-b border-brand-border/60 transition-colors hover:bg-brand-card/60 ${
                        i % 2 === 0 ? "bg-brand-bg/40" : "bg-brand-card/20"
                      }`}
                    >
                      <td className="px-5 py-3.5 font-medium text-brand-text">{item.model}</td>
                      <td className="px-5 py-3.5 text-brand-accent font-semibold">{item.display}</td>
                      <td className="px-5 py-3.5 text-brand-muted">{item.akku}</td>
                      <td className="px-5 py-3.5 text-brand-muted">{item.kamera ?? "–"}</td>
                      <td className="px-5 py-3.5 text-brand-muted">{item.software ?? "–"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Guarantees */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Shield, text: "6 Monate Garantie auf alle Reparaturen" },
              { icon: PhoneIcon, text: "Kostenlose Diagnose vor der Reparatur" },
              { icon: ChevronRight, text: "Kein Modell gefunden? Einfach anfragen" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 p-4 rounded-xl bg-brand-card border border-brand-border text-sm text-brand-muted"
              >
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
          <h2 className="text-2xl font-extrabold text-brand-text mb-3">
            Ihr Modell nicht dabei?
          </h2>
          <p className="text-brand-muted mb-6">
            Wir reparieren praktisch alle Smartphone-Modelle. Kontaktieren Sie uns für ein persönliches Angebot.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent text-white font-semibold hover:bg-brand-accent-dark transition-all glow"
          >
            Anfrage senden
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
