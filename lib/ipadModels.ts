/* ─── iPad Modell-Metadaten ────────────────────────────────────────
   Aufbau wie lib/iphoneModels.ts. Key = Slug aus modelSlug(). */

import type { DeviceSpec } from "./iphoneModels";

const spec = (
  year: number,
  size: number,
  connector: DeviceSpec["connector"],
  front: DeviceSpec["front"],
  cams: 1 | 2 | 3,
  camStyle: DeviceSpec["camStyle"],
  body: string,
  issues: string[],
): DeviceSpec => ({
  year, display: "LCD", size, connector, front, cams, camStyle, body,
  tablet: true, issues,
});

const homeTaste = [
  "Gesprungene Frontscheibe – bei iPads der mit Abstand häufigste Schaden",
  "Home-Button reagiert nicht mehr",
  "Akkukapazität deutlich gesunken",
];
const modern = [
  "Displaybruch nach Sturz",
  "Akkukapazität deutlich gesunken",
  "Ladebuchse ausgeleiert oder verschmutzt",
];
const grossesPanel = [
  "Displaybruch am grossen Panel – besonders anfällig beim Transport",
  "Verbogenes Gehäuse nach Druckbelastung",
  "Akkukapazität deutlich gesunken",
];

const SILBER = "#B9BCC0";
const GRAU = "#6E6E73";

export const ipadSpecs: Record<string, DeviceSpec> = {
  "ipad-pro-129-4-gen": spec(2020, 12.9, "USB-C", "bezel", 2, "square", GRAU, grossesPanel),
  "ipad-pro-129-3-gen": spec(2018, 12.9, "USB-C", "bezel", 1, "single", GRAU, grossesPanel),
  "ipad-pro-129-2-gen": spec(2017, 12.9, "Lightning", "home", 1, "single", SILBER, grossesPanel),
  "ipad-pro-129-1-gen": spec(2015, 12.9, "Lightning", "home", 1, "single", SILBER, grossesPanel),
  "ipad-pro-11-4-gen":  spec(2022, 11.0, "USB-C", "bezel", 2, "square", GRAU, modern),
  "ipad-pro-11-3-gen":  spec(2021, 11.0, "USB-C", "bezel", 2, "square", GRAU, modern),
  "ipad-pro-11-2-gen":  spec(2020, 11.0, "USB-C", "bezel", 2, "square", GRAU, modern),
  "ipad-pro-11-1-gen":  spec(2018, 11.0, "USB-C", "bezel", 1, "single", GRAU, modern),
  "ipad-pro-105":       spec(2017, 10.5, "Lightning", "home", 1, "single", SILBER, homeTaste),
  "ipad-pro-97":        spec(2016, 9.7,  "Lightning", "home", 1, "single", SILBER, homeTaste),
  "ipad-air-4-gen":     spec(2020, 10.9, "USB-C", "bezel", 1, "single", "#6E8AA0", modern),
  "ipad-air-3-gen":     spec(2019, 10.5, "Lightning", "home", 1, "single", SILBER, homeTaste),
  "ipad-air-2-gen":     spec(2014, 9.7,  "Lightning", "home", 1, "single", SILBER, homeTaste),
  "ipad-air-1-gen":     spec(2013, 9.7,  "Lightning", "home", 1, "single", SILBER, homeTaste),
  "ipad-mini-6":        spec(2021, 8.3,  "USB-C", "bezel", 1, "single", "#B9AE9C", modern),
  "ipad-mini-5":        spec(2019, 7.9,  "Lightning", "home", 1, "single", SILBER, homeTaste),
  "ipad-mini-4":        spec(2015, 7.9,  "Lightning", "home", 1, "single", SILBER, homeTaste),
  "ipad-mini-3":        spec(2014, 7.9,  "Lightning", "home", 1, "single", SILBER, homeTaste),
  "ipad-mini-2":        spec(2013, 7.9,  "Lightning", "home", 1, "single", SILBER, homeTaste),
  "ipad-mini-1":        spec(2012, 7.9,  "Lightning", "home", 1, "single", SILBER, homeTaste),
  "ipad-10":            spec(2022, 10.9, "USB-C", "bezel", 1, "single", "#6E8AA0", modern),
  "ipad-9":             spec(2021, 10.2, "Lightning", "home", 1, "single", GRAU, homeTaste),
  "ipad-8":             spec(2020, 10.2, "Lightning", "home", 1, "single", GRAU, homeTaste),
  "ipad-7":             spec(2019, 10.2, "Lightning", "home", 1, "single", GRAU, homeTaste),
  "ipad-6":             spec(2018, 9.7,  "Lightning", "home", 1, "single", SILBER, homeTaste),
  "ipad-5":             spec(2017, 9.7,  "Lightning", "home", 1, "single", SILBER, homeTaste),
};
