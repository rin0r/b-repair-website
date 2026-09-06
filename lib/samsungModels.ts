/* ─── Samsung-Galaxy Modell-Metadaten ──────────────────────────────
   Aufbau wie lib/iphoneModels.ts. Key = Slug aus modelSlug(). */

import type { DeviceSpec } from "./iphoneModels";

const spec = (
  year: number,
  size: number,
  display: "LCD" | "OLED",
  front: DeviceSpec["front"],
  cams: 1 | 2 | 3,
  camStyle: DeviceSpec["camStyle"],
  body: string,
  issues: string[],
): DeviceSpec => ({
  year, display, size, connector: "USB-C", front, cams, camStyle, body, issues,
  // Samsung nutzt die kleine Tropfenkerbe, nicht die breite Kerbe von Apple
  ...(front === "notch" ? { notchStyle: "drop" as const } : {}),
});

const gebogen = [
  "Displaybruch am gebogenen Panel – aufwendiger im Tausch als ein flaches Display",
  "Grünstich oder eingebrannte Bereiche im AMOLED",
  "Akkukapazität deutlich unter dem Neuwert",
];
const flach = [
  "Displaybruch nach Sturz",
  "Akkukapazität deutlich unter dem Neuwert",
  "USB-C-Buchse ausgeleiert oder verschmutzt",
];
const guenstig = [
  "Displaybruch nach Sturz",
  "Akkuverschleiss nach vielen Ladezyklen",
  "USB-C-Buchse verschmutzt – Kabel hält nicht mehr",
];
const stift = [
  "Displaybruch am gebogenen Panel",
  "S Pen wird nicht mehr erkannt",
  "Akkukapazität deutlich gesunken",
];

export const samsungSpecs: Record<string, DeviceSpec> = {
  /* Galaxy S */
  "galaxy-s25-ultra-5g": spec(2025, 6.9, "OLED", "punch", 3, "square", "#4A4E58", gebogen),
  "galaxy-s25-plus-5g":  spec(2025, 6.7, "OLED", "punch", 3, "square", "#6E8AA0", flach),
  "galaxy-s25-5g":       spec(2025, 6.2, "OLED", "punch", 3, "square", "#6E8AA0", flach),
  "galaxy-s24-ultra-5g": spec(2024, 6.8, "OLED", "punch", 3, "square", "#5C5B55", gebogen),
  "galaxy-s24-plus-5g":  spec(2024, 6.7, "OLED", "punch", 3, "square", "#3E4A5C", flach),
  "galaxy-s24-5g":       spec(2024, 6.2, "OLED", "punch", 3, "square", "#3E4A5C", flach),
  "galaxy-s23-ultra-5g": spec(2023, 6.8, "OLED", "punch", 3, "square", "#3A3A3C", gebogen),
  "galaxy-s23-plus-5g":  spec(2023, 6.6, "OLED", "punch", 3, "square", "#4E5851", flach),
  "galaxy-s23-5g":       spec(2023, 6.1, "OLED", "punch", 3, "square", "#4E5851", flach),
  "galaxy-s22-ultra-5g": spec(2022, 6.8, "OLED", "punch", 3, "square", "#45464A", stift),
  "galaxy-s22-plus":     spec(2022, 6.6, "OLED", "punch", 3, "square", "#B9AE9C", flach),
  "galaxy-s22":          spec(2022, 6.1, "OLED", "punch", 3, "square", "#B9AE9C", flach),
  "galaxy-s21-ultra-5g": spec(2021, 6.8, "OLED", "punch", 3, "square", "#3A3A3C", gebogen),
  "galaxy-s21-plus":     spec(2021, 6.7, "OLED", "punch", 3, "square", "#7E7A72", flach),
  "galaxy-s21":          spec(2021, 6.2, "OLED", "punch", 3, "square", "#8E9AAF", flach),
  "galaxy-s21-fe":       spec(2022, 6.4, "OLED", "punch", 3, "square", "#6E8AA0", flach),
  "galaxy-s20-ultra-5g": spec(2020, 6.9, "OLED", "punch", 3, "square", "#3A3A3C", gebogen),
  "galaxy-s20-plus-5g":  spec(2020, 6.7, "OLED", "punch", 3, "square", "#4A4A4C", gebogen),
  "galaxy-s20-plus":     spec(2020, 6.7, "OLED", "punch", 3, "square", "#4A4A4C", gebogen),
  "galaxy-s20":          spec(2020, 6.2, "OLED", "punch", 3, "square", "#6E8AA0", gebogen),
  "galaxy-s20-fe":       spec(2020, 6.5, "OLED", "punch", 3, "square", "#4E6B5A", flach),
  "galaxy-s10-5g":       spec(2019, 6.7, "OLED", "punch", 3, "dual-h", "#45464A", gebogen),
  "galaxy-s10-plus":     spec(2019, 6.4, "OLED", "punch", 3, "dual-h", "#6E6E73", gebogen),
  "galaxy-s10":          spec(2019, 6.1, "OLED", "punch", 3, "dual-h", "#45464A", gebogen),
  "galaxy-s10e":         spec(2019, 5.8, "OLED", "punch", 2, "dual-h", "#B9AE9C", flach),
  "galaxy-s9-plus":      spec(2018, 6.2, "OLED", "bezel", 2, "dual-v", "#2B4C63", gebogen),
  "galaxy-s9":           spec(2018, 5.8, "OLED", "bezel", 1, "single", "#2B4C63", gebogen),
  "galaxy-s8-plus":      spec(2017, 6.2, "OLED", "bezel", 1, "single", "#45464A", gebogen),
  "galaxy-s8":           spec(2017, 5.8, "OLED", "bezel", 1, "single", "#45464A", gebogen),

  /* Galaxy A */
  "galaxy-a80": spec(2019, 6.7, "OLED", "bezel", 3, "dual-v", "#6E8AA0", [
    "Ausfahrbare Kamera bleibt stecken oder fährt nicht mehr aus",
    "Displaybruch nach Sturz",
    "Akkuverschleiss",
  ]),
  "galaxy-a72": spec(2021, 6.7, "OLED", "punch", 3, "square", "#B9AE9C", guenstig),
  "galaxy-a71": spec(2020, 6.7, "OLED", "punch", 3, "square", "#3E4A5C", guenstig),
  "galaxy-a70": spec(2019, 6.7, "OLED", "notch", 3, "dual-v", "#45464A", guenstig),
  "galaxy-a54": spec(2023, 6.4, "OLED", "punch", 3, "dual-v", "#4E6B5A", guenstig),
  "galaxy-a53": spec(2022, 6.5, "OLED", "punch", 3, "square", "#6E8AA0", guenstig),
  "galaxy-a52": spec(2021, 6.5, "OLED", "punch", 3, "square", "#8E9AAF", guenstig),
  "galaxy-a51": spec(2020, 6.5, "OLED", "punch", 3, "square", "#3A3A3C", guenstig),
  "galaxy-a50": spec(2019, 6.4, "OLED", "notch", 3, "dual-v", "#45464A", guenstig),
  "galaxy-a42": spec(2020, 6.6, "OLED", "notch", 3, "square", "#45464A", guenstig),
  "galaxy-a41": spec(2020, 6.1, "OLED", "notch", 3, "square", "#3A3A3C", guenstig),
  "galaxy-a34": spec(2023, 6.6, "OLED", "punch", 3, "dual-v", "#6E8AA0", guenstig),
  "galaxy-a33": spec(2022, 6.4, "OLED", "punch", 3, "square", "#4E6B5A", guenstig),
  "galaxy-a32": spec(2021, 6.4, "OLED", "punch", 3, "dual-v", "#8E9AAF", guenstig),
  "galaxy-a31": spec(2020, 6.4, "OLED", "notch", 3, "square", "#45464A", guenstig),
  "galaxy-a30": spec(2019, 6.4, "OLED", "notch", 2, "dual-h", "#45464A", guenstig),
  "galaxy-a22": spec(2021, 6.4, "OLED", "notch", 3, "square", "#6E8AA0", guenstig),
  "galaxy-a21": spec(2020, 6.5, "LCD",  "punch", 3, "square", "#3A3A3C", guenstig),
  "galaxy-a20": spec(2019, 6.4, "OLED", "notch", 2, "dual-h", "#45464A", guenstig),
  "galaxy-a14": spec(2023, 6.6, "LCD",  "notch", 3, "dual-v", "#3E4A5C", guenstig),
  "galaxy-a13": spec(2022, 6.6, "LCD",  "notch", 3, "dual-v", "#8E9AAF", guenstig),
  "galaxy-a12": spec(2020, 6.5, "LCD",  "notch", 3, "square", "#3A3A3C", guenstig),
  "galaxy-a10": spec(2019, 6.2, "LCD",  "notch", 1, "single", "#45464A", guenstig),
  "galaxy-a02": spec(2021, 6.5, "LCD",  "notch", 2, "dual-v", "#45464A", guenstig),

  /* Galaxy Note */
  "galaxy-note-20-ultra": spec(2020, 6.9, "OLED", "punch", 3, "square", "#B9AE9C", stift),
  "galaxy-note-20":       spec(2020, 6.7, "OLED", "punch", 3, "square", "#4E6B5A", stift),
  "galaxy-note-10-plus":  spec(2019, 6.8, "OLED", "punch", 3, "dual-v", "#B9BCC0", stift),
  "galaxy-note-10":       spec(2019, 6.3, "OLED", "punch", 3, "dual-v", "#B9BCC0", stift),
  "galaxy-note-9":        spec(2018, 6.4, "OLED", "bezel", 2, "dual-h", "#2B4C63", stift),
  "galaxy-note-8":        spec(2017, 6.3, "OLED", "bezel", 2, "dual-h", "#45464A", stift),
};
