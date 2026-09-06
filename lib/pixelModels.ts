/* ─── Google-Pixel Modell-Metadaten ────────────────────────────────
   Gleicher Aufbau wie lib/iphoneModels.ts – technische Eckdaten für
   Text und SEO sowie die Merkmale, aus denen das Gerätebild gezeichnet
   wird. Key = Slug aus modelSlug() in repairData.ts. */

import type { DeviceSpec } from "./iphoneModels";

const spec = (
  year: number,
  size: number,
  front: DeviceSpec["front"],
  cams: 1 | 2 | 3,
  camStyle: DeviceSpec["camStyle"],
  body: string,
  rearFinger: boolean,
  issues: string[],
): DeviceSpec => ({
  year, display: "OLED", size, connector: "USB-C",
  front, cams, camStyle, body, rearFinger, issues,
});

const kameraleiste = [
  "Gesprungenes Glas der Kameraleiste – ein häufiger Schaden bei diesen Modellen",
  "Displaybruch nach Sturz",
  "USB-C-Buchse verschmutzt oder ausgeleiert",
];
const standard = [
  "Displaybruch nach Sturz",
  "Akkukapazität deutlich unter dem Neuwert",
  "USB-C-Buchse mit Wackelkontakt",
];

export const pixelSpecs: Record<string, DeviceSpec> = {
  "google-pixel-10-pro": spec(2025, 6.3, "punch", 3, "bar", "#4A5C6B", false, kameraleiste),
  "google-pixel-10":     spec(2025, 6.3, "punch", 3, "bar", "#5B7796", false, kameraleiste),
  "google-pixel-9a":     spec(2025, 6.3, "punch", 2, "dual-h", "#8E9AAF", false, standard),
  "google-pixel-9-pro-fold": spec(2024, 8.0, "punch", 3, "bar", "#5C5B55", false, [
    "Defektes Faltdisplay oder schwergängiges Scharnier",
    "Displaybruch am Aussendisplay",
    "Akkuverschleiss",
  ]),
  "google-pixel-9-pro-xl": spec(2024, 6.8, "punch", 3, "bar", "#B9AE9C", false, kameraleiste),
  "google-pixel-9-pro":  spec(2024, 6.3, "punch", 3, "bar", "#B9AE9C", false, kameraleiste),
  "google-pixel-9":      spec(2024, 6.3, "punch", 2, "bar", "#7FA6C9", false, kameraleiste),
  "google-pixel-8a":     spec(2024, 6.1, "punch", 2, "bar", "#4E6B5A", false, kameraleiste),
  "google-pixel-8-pro":  spec(2023, 6.7, "punch", 3, "bar", "#5C6B7A", false, kameraleiste),
  "google-pixel-8":      spec(2023, 6.2, "punch", 2, "bar", "#3E4A5C", false, kameraleiste),
  "google-pixel-7a":     spec(2023, 6.1, "punch", 2, "bar", "#6E8AA0", false, kameraleiste),
  "google-pixel-7-pro":  spec(2022, 6.7, "punch", 3, "bar", "#5C5B55", false, kameraleiste),
  "google-pixel-7":      spec(2022, 6.3, "punch", 2, "bar", "#4E5851", false, kameraleiste),
  "google-pixel-6a":     spec(2022, 6.1, "punch", 2, "bar", "#4A4A4C", false, [
    "Fingerabdrucksensor im Display reagiert schlecht",
    "Displaybruch nach Sturz",
    "Akkuverschleiss",
  ]),
  "google-pixel-6-pro":  spec(2021, 6.7, "punch", 3, "bar", "#B9AE9C", false, [
    "Gesprungenes Glas der Kameraleiste",
    "Fingerabdrucksensor im Display reagiert schlecht",
    "Displaybruch am gebogenen Panel – aufwendiger im Tausch",
  ]),
  "google-pixel-6":      spec(2021, 6.4, "punch", 2, "bar", "#3A4250", false, [
    "Gesprungenes Glas der Kameraleiste",
    "Fingerabdrucksensor im Display reagiert schlecht",
    "Displaybruch nach Sturz",
  ]),
  "google-pixel-5a-5g":  spec(2021, 6.34, "punch", 2, "square", "#3A3A3C", true, standard),
  "google-pixel-5":      spec(2020, 6.0, "punch", 2, "square", "#4E5851", true, standard),
  "google-pixel-4a-5g":  spec(2020, 6.2, "punch", 2, "square", "#3A3A3C", true, standard),
  "google-pixel-4a":     spec(2020, 5.81, "punch", 1, "single", "#3A3A3C", true, standard),
  "google-pixel-4":      spec(2019, 5.7, "bezel", 2, "square", "#45464A", false, [
    "Kurze Akkulaufzeit – der Akku ist knapp bemessen",
    "Displaybruch nach Sturz",
    "USB-C-Buchse mit Wackelkontakt",
  ]),
  "google-pixel-3a-xl":  spec(2019, 6.0, "bezel", 1, "single", "#45464A", true, standard),
  "google-pixel-3a":     spec(2019, 5.6, "bezel", 1, "single", "#45464A", true, standard),
  "google-pixel-3-xl":   spec(2018, 6.3, "notch", 1, "single", "#45464A", true, [
    "Displaybruch am grossen OLED",
    "Mikrofon fällt aus",
    "Akkukapazität deutlich gesunken",
  ]),
  "google-pixel-3":      spec(2018, 5.5, "bezel", 1, "single", "#6E6E73", true, [
    "Displaybruch nach Sturz",
    "Mikrofon fällt aus",
    "Akkukapazität deutlich gesunken",
  ]),
  "google-pixel-2-xl":   spec(2017, 6.0, "bezel", 1, "single", "#3A3A3C", true, [
    "Einbrennen und Farbstich im OLED-Display – ein bekanntes Problem dieses Modells",
    "Akkukapazität deutlich gesunken",
    "USB-C-Buchse ausgeleiert",
  ]),
};
