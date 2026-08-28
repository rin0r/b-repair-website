import type { DeviceSpec } from "@/lib/iphoneModels";

/* ─── Farb-Helfer ──────────────────────────────────────────────── */
const clamp = (n: number) => Math.max(0, Math.min(255, Math.round(n)));

/** Hellt (amt > 0) oder dunkelt (amt < 0) eine Hex-Farbe ab. */
function shade(hex: string, amt: number): string {
  const h = hex.replace("#", "");
  const n = parseInt(h, 16);
  const r = clamp(((n >> 16) & 255) + amt);
  const g = clamp(((n >> 8) & 255) + amt);
  const b = clamp((n & 255) + amt);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

/* ─── Gerätemasse ──────────────────────────────────────────────── */
function bodyWidth(size: number): number {
  if (size <= 4.8) return 168;
  if (size <= 5.5) return size <= 5.4 ? 166 : 182;
  if (size <= 5.9) return 172;
  if (size <= 6.2) return 184;
  if (size <= 6.4) return 188;
  if (size <= 6.6) return 192;
  if (size <= 6.8) return 196;
  return 200;
}

type Side = "front" | "back";

/* ─── Ein einzelnes Gerät ──────────────────────────────────────── */
function Device({
  spec,
  side,
  uid,
  cx,
  cy,
  rot,
  scale = 1,
}: {
  spec: DeviceSpec;
  side: Side;
  uid: string;
  cx: number;
  cy: number;
  rot: number;
  scale?: number;
}) {
  const w = bodyWidth(spec.size);
  const h = w * 2.06;
  const rx = spec.front === "home" ? w * 0.13 : w * 0.155;
  const id = `${uid}-${side}`;

  const light = shade(spec.body, 46);
  const dark = shade(spec.body, -38);
  const edge = shade(spec.body, -62);

  /* Kameramodul (nur Rückseite) */
  const camModule = () => {
    const lens = (lx: number, ly: number, lr: number) => (
      <g key={`${lx}-${ly}`}>
        <circle cx={lx} cy={ly} r={lr} fill={shade(spec.body, -70)} />
        <circle cx={lx} cy={ly} r={lr * 0.72} fill="#0B1018" />
        <circle cx={lx - lr * 0.24} cy={ly - lr * 0.24} r={lr * 0.22} fill="#5C7A93" opacity={0.65} />
      </g>
    );

    if (spec.camStyle === "square") {
      const s = w * 0.42;
      const mx = w * 0.06;
      const my = h * 0.026;
      const lr = s * 0.155;
      const p = (fx: number, fy: number) => [mx + s * fx, my + s * fy] as const;
      const spots: Array<readonly [number, number]> =
        spec.cams === 3
          ? [p(0.28, 0.28), p(0.72, 0.28), p(0.28, 0.72)]
          : [p(0.3, 0.3), p(0.7, 0.7)];
      const flash = spec.cams === 3 ? p(0.72, 0.72) : p(0.7, 0.3);
      return (
        <>
          <rect x={mx} y={my} width={s} height={s} rx={s * 0.3} fill={shade(spec.body, -14)} stroke={light} strokeWidth={1} opacity={0.97} />
          {spots.map(([lx, ly]) => lens(lx, ly, lr))}
          <circle cx={flash[0]} cy={flash[1]} r={lr * 0.45} fill="#F2E4B8" opacity={0.85} />
        </>
      );
    }

    if (spec.camStyle === "pill" || spec.camStyle === "dual-v") {
      const pw = w * (spec.camStyle === "pill" ? 0.21 : 0.19);
      const ph = w * (spec.camStyle === "pill" ? 0.44 : 0.38);
      const mx = w * 0.07;
      const my = h * 0.028;
      const lr = pw * 0.32;
      const spots =
        spec.cams === 1
          ? [[mx + pw / 2, my + ph * 0.5] as const]
          : [[mx + pw / 2, my + ph * 0.27] as const, [mx + pw / 2, my + ph * 0.73] as const];
      return (
        <>
          <rect x={mx} y={my} width={pw} height={ph} rx={pw / 2} fill={shade(spec.body, -14)} stroke={light} strokeWidth={1} />
          {spots.map(([lx, ly]) => lens(lx, ly, lr))}
          <circle cx={mx + pw * 1.5} cy={my + ph * 0.2} r={lr * 0.42} fill="#F2E4B8" opacity={0.8} />
        </>
      );
    }

    if (spec.camStyle === "dual-h") {
      const pw = w * 0.38;
      const ph = w * 0.19;
      const mx = w * 0.07;
      const my = h * 0.028;
      const lr = ph * 0.32;
      return (
        <>
          <rect x={mx} y={my} width={pw} height={ph} rx={ph / 2} fill={shade(spec.body, -14)} stroke={light} strokeWidth={1} />
          {lens(mx + pw * 0.27, my + ph / 2, lr)}
          {lens(mx + pw * 0.73, my + ph / 2, lr)}
          <circle cx={mx + pw * 0.5} cy={my + ph * 1.5} r={lr * 0.42} fill="#F2E4B8" opacity={0.8} />
        </>
      );
    }

    /* single */
    const lr = w * 0.062;
    const lx = w * 0.155;
    const ly = h * 0.062;
    return (
      <>
        {lens(lx, ly, lr)}
        <circle cx={lx + lr * 2.1} cy={ly} r={lr * 0.4} fill="#F2E4B8" opacity={0.8} />
      </>
    );
  };

  /* Vorderseite */
  const screenPad = spec.front === "home" ? 6 : 7;
  const screenY = spec.front === "home" ? h * 0.152 : screenPad;
  const screenH = spec.front === "home" ? h * 0.696 : h - screenPad * 2;
  const screenW = w - screenPad * 2;
  const screenRx = spec.front === "home" ? 3 : rx - screenPad;

  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rot}) scale(${scale}) translate(${-w / 2} ${-h / 2})`}>
      {/* Gehäusekante – erzeugt die Tiefenwirkung */}
      <rect x={6} y={4} width={w} height={h} rx={rx} fill={edge} />

      {/* Korpus */}
      <rect x={0} y={0} width={w} height={h} rx={rx} fill={`url(#${id}-body)`} stroke={light} strokeWidth={1.4} />

      {side === "front" ? (
        <>
          <rect x={screenPad} y={screenY} width={screenW} height={screenH} rx={screenRx} fill={`url(#${id}-screen)`} />

          {spec.front === "notch" && (() => {
            /* Ab dem iPhone 13 ist der Notch schmaler. Nur die unteren Ecken
               sind gerundet – sonst ragt er über die Gehäusekante hinaus. */
            const nw = w * (spec.year >= 2021 ? 0.34 : 0.42);
            const nh = 22;
            const nx = (w - nw) / 2;
            const r = 11;
            return (
              <path
                d={`M ${nx} ${screenY} H ${nx + nw} V ${screenY + nh - r} A ${r} ${r} 0 0 1 ${nx + nw - r} ${screenY + nh} H ${nx + r} A ${r} ${r} 0 0 1 ${nx} ${screenY + nh - r} Z`}
                fill="#05080F"
              />
            );
          })()}
          {spec.front === "island" && (
            <rect x={(w - w * 0.3) / 2} y={screenY + 15} width={w * 0.3} height={17} rx={8.5} fill="#05080F" />
          )}
          {spec.front === "home" && (
            <>
              <rect x={(w - w * 0.28) / 2} y={screenY - h * 0.052} width={w * 0.28} height={5} rx={2.5} fill={shade(spec.body, -70)} />
              <circle cx={w / 2} cy={h - h * 0.076} r={w * 0.105} fill="none" stroke={light} strokeWidth={1.6} opacity={0.9} />
            </>
          )}

          {/* Glasspiegelung */}
          <path
            d={`M ${screenPad} ${screenY + screenH * 0.62} L ${screenPad + screenW * 0.72} ${screenY} L ${screenPad + screenW} ${screenY} L ${screenPad + screenW} ${screenY + screenH * 0.12} L ${screenPad} ${screenY + screenH * 0.86} Z`}
            fill={`url(#${id}-glare)`}
            opacity={0.5}
          />
        </>
      ) : (
        <>
          {camModule()}
          {/* Rückglas-Sheen */}
          <path
            d={`M 0 ${h * 0.72} L ${w} ${h * 0.28} L ${w} ${h * 0.46} L 0 ${h * 0.9} Z`}
            fill="#FFFFFF"
            opacity={0.05}
          />
        </>
      )}

      {/* Rahmen-Glanzkante links */}
      <rect x={1.5} y={rx * 0.55} width={2} height={h - rx * 1.1} rx={1} fill={light} opacity={0.5} />
    </g>
  );
}

/* ─── Öffentliche Komponente ───────────────────────────────────── */
export default function DeviceRender({
  model,
  spec,
  photo,
  className = "",
}: {
  model: string;
  spec: DeviceSpec;
  photo?: string;
  className?: string;
}) {
  /* Ein eigenes Foto ersetzt die Zeichnung, sobald es hinterlegt ist. */
  if (photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photo}
        alt={`${model} – Reparatur bei B-repair&service in Heimberg`}
        className={`w-full h-auto object-contain ${className}`}
        loading="eager"
      />
    );
  }

  const uid = `dev-${model.toLowerCase().replace(/[^a-z0-9]/g, "")}`;
  const light = shade(spec.body, 52);
  const dark = shade(spec.body, -42);

  return (
    <svg
      viewBox="0 0 420 620"
      className={`w-full h-auto ${className}`}
      role="img"
      aria-label={`Schematische Darstellung von Vorder- und Rückseite des ${model}`}
    >
      <title>{`${model} – Vorder- und Rückseite`}</title>
      <defs>
        <linearGradient id={`${uid}-front-body`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={light} />
          <stop offset="45%" stopColor={spec.body} />
          <stop offset="100%" stopColor={dark} />
        </linearGradient>
        <linearGradient id={`${uid}-back-body`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={shade(spec.body, 20)} />
          <stop offset="55%" stopColor={spec.body} />
          <stop offset="100%" stopColor={shade(spec.body, -52)} />
        </linearGradient>
        <linearGradient id={`${uid}-front-screen`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#16233C" />
          <stop offset="55%" stopColor="#0C1424" />
          <stop offset="100%" stopColor="#070C16" />
        </linearGradient>
        <linearGradient id={`${uid}-back-screen`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#16233C" />
          <stop offset="100%" stopColor="#070C16" />
        </linearGradient>
        <linearGradient id={`${uid}-front-glare`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7FE9FF" stopOpacity="0.34" />
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${uid}-back-glare`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${uid}-floor`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#252B36" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#252B36" stopOpacity="0" />
        </radialGradient>
        <filter id={`${uid}-drop`} x="-30%" y="-20%" width="160%" height="150%">
          <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#252B36" floodOpacity="0.28" />
        </filter>
      </defs>

      {/* Bodenschatten */}
      <ellipse cx="210" cy="566" rx="176" ry="30" fill={`url(#${uid}-floor)`} />

      {/* Rückseite – angeschnitten dahinter */}
      <g opacity={0.97} filter={`url(#${uid}-drop)`}>
        <Device spec={spec} side="back" uid={uid} cx={150} cy={296} rot={-12} scale={0.9} />
      </g>

      {/* Vorderseite – im Vordergrund */}
      <g filter={`url(#${uid}-drop)`}>
        <Device spec={spec} side="front" uid={uid} cx={256} cy={320} rot={6} />
      </g>
    </svg>
  );
}
