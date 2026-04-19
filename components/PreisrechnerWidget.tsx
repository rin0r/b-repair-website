"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw, MapPin, Monitor, BatteryFull, Layers, Plug, Camera, Volume2, HardDrive, Scan } from "lucide-react";
import { brandConfig } from "@/lib/repairData";
import type { Row } from "@/lib/repairData";

/* ─── Brand Logos (inline SVG) ─────────────────────────────────────── */
const AppleLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.3.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const SamsungLogo = () => (
  <svg viewBox="0 9.5 24 5" fill="currentColor" className="h-5 w-auto" aria-label="Samsung">
    <path d="M19.8166 10.2808l.0459 2.6934h-.023l-.7793-2.6934h-1.2837v3.3925h.8481l-.0458-2.785h.023l.8366 2.785h1.2264v-3.3925zm-16.149 0l-.6418 3.427h.9284l.4699-3.1175h.0229l.4585 3.1174h.9169l-.6304-3.4269zm5.1805 0l-.424 2.6132h-.023l-.424-2.6132H6.5788l-.0688 3.427h.8596l.023-3.0832h.0114l.573 3.0831h.8711l.5731-3.083h.023l.0228 3.083h.8596l-.0802-3.4269zm-7.2664 2.4527c.0343.0802.0229.1949.0114.2522-.0229.1146-.1031.2292-.3324.2292-.2177 0-.3438-.126-.3438-.3095v-.3323H0v.2636c0 .7679.6074.9971 1.2493.9971.6189 0 1.1346-.2178 1.2149-.7794.0458-.298.0114-.4928 0-.5616-.1605-.722-1.467-.9283-1.5588-1.3295-.0114-.0688-.0114-.1375 0-.1834.023-.1146.1032-.2292.3095-.2292.2063 0 .321.126.321.3095v.2063h.8595v-.2407c0-.745-.6762-.8596-1.1576-.8596-.6074 0-1.1117.2063-1.2034.7564-.023.149-.0344.2866.0114.4585.1376.7106 1.364.9169 1.5358 1.3524m11.152 0c.0343.0803.0228.1834.0114.2522-.023.1146-.1032.2292-.3324.2292-.2178 0-.3438-.126-.3438-.3095v-.3323h-.917v.2636c0 .7564.596.9857 1.2379.9857.6189 0 1.1232-.2063 1.2034-.7794.0459-.298.0115-.4814 0-.5616-.1375-.7106-1.4327-.9284-1.5243-1.318-.0115-.0688-.0115-.1376 0-.1835.0229-.1146.1031-.2292.3094-.2292.1948 0 .321.126.321.3095v.2063h.848v-.2407c0-.745-.6647-.8596-1.146-.8596-.6075 0-1.1004.1948-1.192.7564-.023.149-.023.2866.0114.4585.1376.7106 1.341.9054 1.513 1.3524m2.8882.4585c.2407 0 .3094-.1605.3323-.2522.0115-.0343.0115-.0917.0115-.126v-2.533h.871v2.4642c0 .0688 0 .1948-.0114.2292-.0573.6419-.5616.8482-1.192.8482-.6303 0-1.1346-.2063-1.192-.8482 0-.0344-.0114-.1604-.0114-.2292v-2.4642h.871v2.533c0 .0458 0 .0916.0115.126 0 .0917.0688.2522.3095.2522m7.1518-.0344c.2522 0 .3324-.1605.3553-.2522.0115-.0343.0115-.0917.0115-.126v-.4929h-.3553v-.5043H24v.917c0 .0687 0 .1145-.0115.2292-.0573.6303-.596.8481-1.2034.8481-.6075 0-1.1461-.2178-1.2034-.8481-.0115-.1147-.0115-.1605-.0115-.2293v-1.444c0-.0574.0115-.172.0115-.2293.0802-.6419.596-.8482 1.2034-.8482s1.1347.2063 1.2034.8482c.0115.1031.0115.2292.0115.2292v.1146h-.8596v-.1948s0-.0803-.0115-.1261c-.0114-.0802-.0802-.2521-.3438-.2521-.2521 0-.321.1604-.3438.2521-.0115.0458-.0115.1032-.0115.1605v1.5702c0 .0458 0 .0916.0115.126 0 .0917.0917.2522.3323.2522"/>
  </svg>
);

const HuaweiLogo = () => {
  const petal = "M50,13 C57,23 57,43 50,50 C43,43 43,23 50,13Z";
  return (
    <svg viewBox="0 0 100 100" className="w-9 h-9">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <path key={angle} d={petal} fill="currentColor" transform={`rotate(${angle},50,50)`} opacity={angle % 90 === 0 ? "1" : "0.65"} />
      ))}
    </svg>
  );
};

const OnePlusLogo = () => (
  <svg viewBox="0 0 72 52" className="w-14 h-auto">
    <text x="2" y="46" fontSize="46" fontWeight="900" fontFamily="system-ui,sans-serif" fill="currentColor">1+</text>
  </svg>
);

/* ─── Config ────────────────────────────────────────────────────────── */
const BRANDS = [
  { id: "iphone",  name: "iPhone",  Logo: AppleLogo,   color: "#1d1d1f" },
  { id: "samsung", name: "Samsung", Logo: SamsungLogo, color: "#1428A0" },
  { id: "huawei",  name: "Huawei",  Logo: HuaweiLogo,  color: "#CF0A2C" },
  { id: "oneplus", name: "OnePlus", Logo: OnePlusLogo, color: "#F5010C" },
] as const;

type BrandId = typeof BRANDS[number]["id"];

const REPAIRS = [
  { key: "display",      label: "Display",       Icon: Monitor },
  { key: "batterie",     label: "Akku-Wechsel",  Icon: BatteryFull },
  { key: "rueckseite",   label: "Glasrückseite", Icon: Layers },
  { key: "ladebuchse",   label: "Ladebuchse",    Icon: Plug },
  { key: "kameraglas",   label: "Kameraglas",    Icon: Camera },
  { key: "lautsprecher", label: "Lautsprecher",  Icon: Volume2 },
  { key: "datenrettung", label: "Datenrettung",  Icon: HardDrive },
  { key: "kamera",       label: "Hauptkamera",   Icon: Scan },
] as const;

type RepairKey = typeof REPAIRS[number]["key"];

const ONEPLUS_MODELS = [
  "OnePlus 13", "OnePlus 12", "OnePlus 11",
  "OnePlus 10 Pro", "OnePlus 9 Pro", "OnePlus 9",
  "OnePlus 8 Pro", "OnePlus 8", "Anderes Modell",
];

const WA = "https://wa.me/41764020306";

const whatsappSvg = (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─── Step dots ─────────────────────────────────────────────────────── */
function StepDots({ current }: { current: 1 | 2 | 3 | 4 }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {([1, 2, 3, 4] as const).map((n) => (
        <div
          key={n}
          className={`rounded-full transition-all duration-300 ${
            n === current
              ? "w-7 h-2 bg-brand-accent"
              : n < current
              ? "w-2 h-2 bg-brand-accent/50"
              : "w-2 h-2 bg-brand-border"
          }`}
        />
      ))}
    </div>
  );
}

/* ─── Back button ───────────────────────────────────────────────────── */
function BackBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 text-brand-gray text-sm font-sans mb-6 hover:text-brand-primary transition-colors"
    >
      ← Zurück
    </button>
  );
}

/* ─── Widget ────────────────────────────────────────────────────────── */
export default function PreisrechnerWidget() {
  const [brandId,     setBrandId]     = useState<BrandId | null>(null);
  const [modelName,   setModelName]   = useState<string | null>(null);
  const [modelRow,    setModelRow]    = useState<Row | null>(null);
  const [repairKey,   setRepairKey]   = useState<RepairKey | null>(null);
  const [repairLabel, setRepairLabel] = useState<string | null>(null);
  const [repairPrice, setRepairPrice] = useState<string | null>(null);
  const [search,      setSearch]      = useState("");

  const step: 1 | 2 | 3 | 4 =
    repairKey   != null ? 4 :
    modelName   != null ? 3 :
    brandId     != null ? 2 : 1;

  const reset = () => {
    setBrandId(null); setModelName(null); setModelRow(null);
    setRepairKey(null); setRepairLabel(null); setRepairPrice(null);
    setSearch("");
  };

  const availableRepairs = useMemo(() => {
    if (!modelRow) {
      return REPAIRS.map((r) => ({ ...r, price: "Auf Anfrage" }));
    }
    return REPAIRS.filter((r) => modelRow[r.key as keyof Row] !== "–").map((r) => ({
      ...r,
      price: modelRow[r.key as keyof Row] as string,
    }));
  }, [modelRow]);

  const onePlusFiltered = useMemo(
    () => ONEPLUS_MODELS.filter((m) => m.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  const isOnRequest = repairPrice === "Auf Anfrage";
  const brandMeta = BRANDS.find((b) => b.id === brandId);

  return (
    <div>
      <StepDots current={step} />

      {/* ── STEP 1: Brand ─────────────────────────────────────────── */}
      {step === 1 && (
        <div>
          <h3 className="font-headline text-xl text-brand-primary text-center mb-5">
            Welche Marke?
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {BRANDS.map(({ id, name, Logo, color }) => (
              <button
                key={id}
                onClick={() => { setBrandId(id); setSearch(""); }}
                className="group p-5 rounded-2xl bg-white border-2 border-brand-border hover:border-brand-accent hover:shadow-md transition-all flex flex-col items-center gap-3"
              >
                <div className="flex items-center justify-center h-10" style={{ color }}>
                  <Logo />
                </div>
                <span className="font-sans font-bold text-brand-primary text-sm">{name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── STEP 2: Model ─────────────────────────────────────────── */}
      {step === 2 && brandId && (
        <div>
          <BackBtn onClick={() => { setBrandId(null); setSearch(""); }} />
          <h3 className="font-headline text-xl text-brand-primary mb-4">
            Welches Modell?
          </h3>
          <div className="relative mb-3">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Modell suchen…"
              className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-brand-primary font-sans text-sm placeholder:text-brand-gray/60 focus:outline-none focus:border-brand-accent transition-colors"
            />
          </div>
          <div className="max-h-72 overflow-y-auto rounded-2xl border border-brand-border bg-white">
            {brandId === "oneplus" ? (
              onePlusFiltered.length > 0 ? (
                onePlusFiltered.map((name) => (
                  <button
                    key={name}
                    onClick={() => { setModelName(name); setModelRow(null); }}
                    className="w-full text-left px-5 py-4 font-sans font-semibold text-sm text-brand-primary hover:bg-brand-surface transition-colors border-b border-brand-border last:border-b-0"
                  >
                    {name}
                  </button>
                ))
              ) : (
                <div className="px-5 py-8 text-center text-brand-gray font-sans text-sm">Kein Modell gefunden</div>
              )
            ) : (
              brandConfig[brandId]?.series.map((series) => {
                const hits = series.rows.filter((r) =>
                  r.model.toLowerCase().includes(search.toLowerCase())
                );
                if (hits.length === 0) return null;
                return (
                  <div key={series.label}>
                    {(brandConfig[brandId]?.series.length ?? 0) > 1 && (
                      <div className="px-5 py-2 bg-brand-surface border-b border-brand-border text-[10px] font-sans font-bold uppercase tracking-wider text-brand-gray sticky top-0 z-10">
                        {series.label}
                      </div>
                    )}
                    {hits.map((row) => (
                      <button
                        key={row.model}
                        onClick={() => { setModelName(row.model); setModelRow(row); }}
                        className="w-full text-left px-5 py-4 font-sans font-semibold text-sm text-brand-primary hover:bg-brand-surface transition-colors border-b border-brand-border last:border-b-0 flex items-center gap-2"
                      >
                        {row.model}
                        {row.isCurrent && (
                          <span className="px-1.5 py-0.5 rounded bg-brand-accent/15 text-brand-accent text-[9px] font-bold uppercase tracking-wide">
                            Aktuell
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* ── STEP 3: Repair type ───────────────────────────────────── */}
      {step === 3 && (
        <div>
          <BackBtn onClick={() => { setModelName(null); setModelRow(null); }} />
          <h3 className="font-headline text-xl text-brand-primary mb-1">Was ist kaputt?</h3>
          <p className="font-sans text-brand-gray text-sm mb-5">
            <span style={{ color: brandMeta?.color }} className="font-bold">{brandMeta?.name}</span>
            {" "}· {modelName}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {availableRepairs.map(({ key, label, Icon, price }) => (
              <button
                key={key}
                onClick={() => {
                  setRepairKey(key as RepairKey);
                  setRepairLabel(label);
                  setRepairPrice(price);
                }}
                className="p-4 rounded-2xl bg-white border-2 border-brand-border hover:border-brand-accent hover:shadow-md transition-all text-left flex flex-col gap-2"
              >
                <Icon className="w-5 h-5 text-brand-accent" />
                <div>
                  <div className="font-sans font-bold text-brand-primary text-sm">{label}</div>
                  <div className="font-price text-brand-accent text-sm font-bold mt-0.5">{price}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── STEP 4: Result ────────────────────────────────────────── */}
      {step === 4 && (
        <div>
          <p className="font-sans text-xs text-brand-gray text-center mb-5">
            <span style={{ color: brandMeta?.color }} className="font-bold">{brandMeta?.name}</span>
            {" · "}{modelName}{" · "}{repairLabel}
          </p>

          {/* Price card */}
          <div className="bg-white rounded-2xl border border-brand-border p-8 text-center shadow-sm mb-5">
            <span className="font-sans text-brand-gray text-xs uppercase tracking-[0.15em] font-bold block mb-3">
              Geschätzter Preis
            </span>
            <div className={`font-price font-bold mb-2 ${isOnRequest ? "text-3xl text-brand-gray" : "text-5xl text-brand-accent"}`}>
              {repairPrice}
            </div>
            {!isOnRequest && (
              <p className="font-sans text-brand-gray/60 text-xs">
                Inkl. MwSt. · Finaler Preis wird im Shop bestätigt
              </p>
            )}
            {isOnRequest && (
              <p className="font-sans text-brand-gray text-sm mt-1">
                Wir erstellen nach der kostenlosen Diagnose einen Fixpreis.
              </p>
            )}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Link
              href="/kontakt"
              className="cta-btn flex-1 justify-center gap-2 px-6 rounded-xl bg-brand-accent text-brand-primary font-sans font-bold text-sm hover:bg-brand-accent-dark transition-all"
            >
              Termin vereinbaren <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn flex-1 justify-center gap-2 px-6 rounded-xl text-white font-sans font-bold text-sm hover:opacity-90 transition-opacity"
              style={{ background: "#25D366" }}
            >
              {whatsappSvg}
              WhatsApp schreiben
            </a>
          </div>

          {/* Shop info */}
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-2 font-sans text-sm text-brand-gray">
              <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0" />
              Bürglenweg 24, 3627 Heimberg
            </div>
            <p className="font-sans text-brand-gray/60 text-xs mt-1">
              Mo – Fr 09:00 – 18:30 · Sa 10:00 – 16:00
            </p>
          </div>

          {/* Reset */}
          <div className="text-center">
            <button
              onClick={reset}
              className="inline-flex items-center gap-1.5 font-sans text-sm text-brand-gray hover:text-brand-accent transition-colors underline underline-offset-4"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Neu berechnen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
