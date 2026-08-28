/* ─── iPhone Modell-Metadaten ──────────────────────────────────────
   Pro Modell: technische Eckdaten (für Text & SEO) und die
   Render-Merkmale, aus denen components/DeviceRender.tsx das
   Gerätebild zeichnet. Key = Slug aus modelSlug() in repairData.ts. */

export type Front = "home" | "notch" | "island";
export type CamStyle = "single" | "dual-h" | "dual-v" | "square" | "pill" | "bar";

export type DeviceSpec = {
  year: number;
  display: "LCD" | "OLED";
  size: number;                        // Zoll
  connector: "Lightning" | "USB-C";
  front: Front;
  cams: 1 | 2 | 3;
  camStyle: CamStyle;
  body: string;                        // Gehäusefarbe (Hex) für das Rendering
  issues: string[];                    // typische Defekte dieses Modells
};

const spec = (
  year: number,
  display: "LCD" | "OLED",
  size: number,
  connector: "Lightning" | "USB-C",
  front: Front,
  cams: 1 | 2 | 3,
  camStyle: CamStyle,
  body: string,
  issues: string[],
): DeviceSpec => ({ year, display, size, connector, front, cams, camStyle, body, issues });

export const iphoneSpecs: Record<string, DeviceSpec> = {
  "iphone-17-pro-max": spec(2025, "OLED", 6.9, "USB-C", "island", 3, "bar", "#B4693C", [
    "Displaybruch – das grosse 6.9″-Panel ist bei Stürzen besonders exponiert",
    "Gesprungenes Kameraglas an der Kameraleiste",
    "USB-C-Buchse ausgeleiert oder verschmutzt",
  ]),
  "iphone-17-pro": spec(2025, "OLED", 6.3, "USB-C", "island", 3, "bar", "#B4693C", [
    "Displaybruch nach Sturz",
    "Gesprungenes Kameraglas an der Kameraleiste",
    "Verbogener Rahmen nach Sturz auf die Ecke",
  ]),
  "iphone-17-air": spec(2025, "OLED", 6.5, "USB-C", "island", 1, "bar", "#414855", [
    "Sehr flaches Gehäuse – der Rahmen verbiegt bei Stürzen leichter",
    "Displaybruch",
    "Akkukapazität sinkt bei der kompakten Zelle schneller unter 80 %",
  ]),
  "iphone-17": spec(2025, "OLED", 6.3, "USB-C", "island", 2, "pill", "#3E6E8E", [
    "Displaybruch nach Sturz",
    "Gesprungenes Kameraglas",
    "USB-C-Buchse verschmutzt – Kabel hält nicht mehr",
  ]),

  "iphone-16-pro-max": spec(2024, "OLED", 6.9, "USB-C", "island", 3, "square", "#7E7A72", [
    "Displaybruch am 6.9″-Panel – dem grössten iPhone-Display",
    "Gesprungenes Kameraglas – Fotos werden milchig",
    "USB-C-Buchse mit Wackelkontakt",
  ]),
  "iphone-16-pro": spec(2024, "OLED", 6.3, "USB-C", "island", 3, "square", "#7E7A72", [
    "Displaybruch nach Sturz",
    "Gesprungenes Kameraglas",
    "Verbogener Titanrahmen nach Sturz auf die Ecke",
  ]),
  "iphone-16-plus": spec(2024, "OLED", 6.7, "USB-C", "island", 2, "pill", "#3E4A5C", [
    "Displaybruch am 6.7″-OLED",
    "Gesprungene Glasrückseite",
    "USB-C-Buchse ausgeleiert",
  ]),
  "iphone-16e": spec(2025, "OLED", 6.1, "USB-C", "notch", 1, "single", "#2F3540", [
    "Displaybruch nach Sturz",
    "Akkukapazität unter 80 %",
    "USB-C-Buchse mit Wackelkontakt",
  ]),
  "iphone-16": spec(2024, "OLED", 6.1, "USB-C", "island", 2, "pill", "#2E5F8A", [
    "Displaybruch nach Sturz",
    "Gesprungenes Kameraglas der vertikalen Kameraleiste",
    "USB-C-Buchse verschmutzt",
  ]),

  "iphone-15-pro-max": spec(2023, "OLED", 6.7, "USB-C", "island", 3, "square", "#5C5B55", [
    "Displaybruch am 6.7″-Panel",
    "Gesprungenes Kameraglas des Teleobjektivs",
    "USB-C-Buchse mit Wackelkontakt",
  ]),
  "iphone-15-pro": spec(2023, "OLED", 6.1, "USB-C", "island", 3, "square", "#5C5B55", [
    "Displaybruch nach Sturz",
    "USB-C-Buchse ausgeleiert",
    "Titanrahmen verzogen nach Sturz auf die Ecke",
  ]),
  "iphone-15-plus": spec(2023, "OLED", 6.7, "USB-C", "island", 2, "square", "#7E8B93", [
    "Displaybruch am 6.7″-OLED",
    "USB-C-Buchse mit Wackelkontakt",
    "Gesprungene Glasrückseite",
  ]),
  "iphone-15": spec(2023, "OLED", 6.1, "USB-C", "island", 2, "square", "#6E8AA0", [
    "USB-C-Buchse ausgeleiert oder verschmutzt – Kabel hält nicht mehr",
    "Displaybruch nach Sturz",
    "Akkukapazität unter 80 %",
  ]),

  "iphone-14-pro-max": spec(2022, "OLED", 6.7, "Lightning", "island", 3, "square", "#56505E", [
    "Displaybruch am 6.7″-Panel",
    "Rattern oder Vibrieren der Hauptkamera",
    "Gesprungenes Kameraglas",
  ]),
  "iphone-14-pro": spec(2022, "OLED", 6.1, "Lightning", "island", 3, "square", "#56505E", [
    "Displaybruch rund um die Dynamic Island",
    "Rattern oder Vibrieren der Hauptkamera",
    "Gesprungenes Kameraglas",
  ]),
  "iphone-14-plus": spec(2022, "OLED", 6.7, "Lightning", "notch", 2, "square", "#3D4A5F", [
    "Displaybruch am 6.7″-OLED",
    "Gesprungene Glasrückseite",
    "Ladebuchse ausgeleiert",
  ]),
  "iphone-14": spec(2022, "OLED", 6.1, "Lightning", "notch", 2, "square", "#2E4A6B", [
    "Displaybruch nach Sturz",
    "Gesprungene Glasrückseite – dank neuem Innenaufbau günstiger zu tauschen als beim iPhone 13",
    "Akkuverschleiss",
  ]),

  "iphone-13-pro-max": spec(2021, "OLED", 6.7, "Lightning", "notch", 3, "square", "#5A7290", [
    "Displaybruch am grossen 6.7″-Panel",
    "Gesprungenes Kameraglas",
    "Akkukapazität unter 80 %",
  ]),
  "iphone-13-pro": spec(2021, "OLED", 6.1, "Lightning", "notch", 3, "square", "#5A7290", [
    "Displaybruch am ProMotion-OLED",
    "Gesprungenes Kameraglas – Fotos werden milchig",
    "Akkuverschleiss",
  ]),
  "iphone-13": spec(2021, "OLED", 6.1, "Lightning", "notch", 2, "square", "#2C4C7A", [
    "Face ID nach unsachgemässem Displaytausch deaktiviert – Panel und Platine sind gepaart",
    "Displaybruch nach Sturz",
    "Akkukapazität unter 80 %",
  ]),
  "iphone-13-mini": spec(2021, "OLED", 5.4, "Lightning", "notch", 2, "square", "#2C4C7A", [
    "Kurze Akkulaufzeit durch die kleine Zelle",
    "Displaybruch nach Sturz",
    "Ladebuchse verschmutzt",
  ]),

  "iphone-12-pro-max": spec(2020, "OLED", 6.7, "Lightning", "notch", 3, "square", "#2B4C63", [
    "Displaybruch am 6.7″-OLED",
    "Gesprungenes Kameraglas",
    "Akkuverschleiss",
  ]),
  "iphone-12-pro": spec(2020, "OLED", 6.1, "Lightning", "notch", 3, "square", "#2B4C63", [
    "„Kein Netz“-Fehler durch defektes Antennenmodul – ein bekanntes Problem der 12er-Reihe",
    "Displaybruch am OLED",
    "Gesprungenes Kameraglas",
  ]),
  "iphone-12": spec(2020, "OLED", 6.1, "Lightning", "notch", 2, "square", "#31567E", [
    "„Kein Netz“-Fehler durch defektes Antennenmodul – ein bekanntes Problem der 12er-Reihe",
    "Displaybruch nach Sturz",
    "Gesprungene Glasrückseite – wegen der MagSafe-Magnete aufwendiger im Tausch",
  ]),
  "iphone-12-mini": spec(2020, "OLED", 5.4, "Lightning", "notch", 2, "square", "#31567E", [
    "Kleiner Akku – die Kapazität fällt schneller unter 80 %",
    "Touch-Aussetzer auf dem Sperrbildschirm",
    "Displaybruch nach Sturz",
  ]),

  "iphone-11-pro-max": spec(2019, "OLED", 6.5, "Lightning", "notch", 3, "square", "#4E5851", [
    "Displaybruch am 6.5″-OLED",
    "Akkukapazität unter 80 %",
    "Gesprungenes Kameraglas",
  ]),
  "iphone-11-pro": spec(2019, "OLED", 5.8, "Lightning", "notch", 3, "square", "#4E5851", [
    "Grünstich oder eingebrannte Bereiche im OLED-Display",
    "Displaybruch nach Sturz",
    "Akkuverschleiss",
  ]),
  "iphone-11": spec(2019, "LCD", 6.1, "Lightning", "notch", 2, "square", "#3C4550", [
    "Ausfall der Rückkamera – schwarzes Bild oder Autofokus-Rattern",
    "Displaybruch nach Sturz",
    "Akkukapazität unter 80 %",
  ]),

  "iphone-xs-max": spec(2018, "OLED", 6.5, "Lightning", "notch", 2, "dual-v", "#4A4A4C", [
    "Displaybruch am grossen 6.5″-OLED",
    "Gesprungene Glasrückseite",
    "Akkukapazität unter 80 %",
  ]),
  "iphone-xs": spec(2018, "OLED", 5.8, "Lightning", "notch", 2, "dual-v", "#4A4A4C", [
    "Displaybruch am OLED-Panel",
    "Ladebuchse mit Wackelkontakt",
    "Gesprungene Glasrückseite",
  ]),
  "iphone-xr": spec(2018, "LCD", 6.1, "Lightning", "notch", 1, "single", "#3E5A78", [
    "Displaybruch am LCD – der häufigste Defekt dieses Modells",
    "Akkuverschleiss nach vielen Ladezyklen",
    "Ladebuchse verschmutzt",
  ]),
  "iphone-x": spec(2017, "OLED", 5.8, "Lightning", "notch", 2, "dual-v", "#45464A", [
    "Grüner Streifen im OLED-Display nach Sturz oder Feuchtigkeit",
    "Touch-Aussetzer im oberen Displaybereich (defekter Touch-IC)",
    "Face ID fällt nach Feuchtigkeit aus",
  ]),

  "iphone-8-plus": spec(2017, "LCD", 5.5, "Lightning", "home", 2, "dual-h", "#3A3A3C", [
    "Gesprungene Glasrückseite",
    "Aufgeblähter Akku, der das Display heraushebt",
    "Ladebuchse ausgeleiert",
  ]),
  "iphone-8": spec(2017, "LCD", 4.7, "Lightning", "home", 1, "single", "#3A3A3C", [
    "Gesprungenes Rückglas – das erste iPhone mit Glasrückseite seit dem 4s",
    "Aufgeblähter Akku, der das Display anhebt",
    "Displaybruch nach Sturz",
  ]),
  "iphone-7-plus": spec(2016, "LCD", 5.5, "Lightning", "home", 2, "dual-h", "#33353A", [
    "Defekter Audio-IC („Loop Disease“) – das Gegenüber hört nichts mehr",
    "Displaybruch nach Sturz",
    "Rückkamera mit Autofokus-Rattern",
  ]),
  "iphone-7": spec(2016, "LCD", 4.7, "Lightning", "home", 1, "single", "#33353A", [
    "Ausfall des Audio-ICs („Loop Disease“) – Mikrofon stumm, Lautsprecher-Symbol ausgegraut",
    "Home-Button ohne Funktion nach unsachgemässem Displaytausch",
    "Akkuverschleiss",
  ]),
  "iphone-6s-plus": spec(2015, "LCD", 5.5, "Lightning", "home", 1, "single", "#6E6E73", [
    "Gealterter Akku mit spontanen Abschaltungen",
    "Displaybruch am grossen 5.5″-Panel",
    "Ladebuchse mit Wackelkontakt",
  ]),
  "iphone-6s": spec(2015, "LCD", 4.7, "Lightning", "home", 1, "single", "#6E6E73", [
    "Spontane Abschaltungen bei niedrigem Akkustand",
    "Displaybruch nach Sturz",
    "Home-Button reagiert nicht mehr",
  ]),
  "iphone-6-plus": spec(2014, "LCD", 5.5, "Lightning", "home", 1, "single", "#7C7C81", [
    "Verbogenes Gehäuse – begünstigt Fehler am Touch-IC",
    "Touch-Aussetzer durch defekten Touch-IC",
    "Stark gealterter Akku",
  ]),
  "iphone-6": spec(2014, "LCD", 4.7, "Lightning", "home", 1, "single", "#7C7C81", [
    "Touch-Aussetzer durch defekten Touch-IC auf der Platine",
    "Akku deutlich unter 80 % Kapazität – Abschaltungen bei Kälte",
    "Ladebuchse verschmutzt oder ausgeleiert",
  ]),
};

export const getSpec = (slug: string): DeviceSpec | undefined => iphoneSpecs[slug];
