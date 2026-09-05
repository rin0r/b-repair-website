/* ─── Preisquelle ──────────────────────────────────────────────────
   Liest data/preise.json und prüft den Inhalt beim Bauen.
   Ist eine Zahl vertippt oder ein Feld vergessen, bricht der Bau mit
   einer klaren Meldung ab – die Seite geht dann gar nicht erst kaputt
   online, sondern die bisherige Fassung bleibt stehen. */

import preise from "@/data/preise.json";

export type PreisZeile = {
  modell: string;
  display: number | null;
  rueckseite: number | null;
  batterie: number | null;
  ladebuchse: number | null;
  kameraglas: number | null;
  lautsprecher: number | null;
  datenrettung: number | null;
  kamera: number | null;
  aktuell?: boolean;
  aelter?: boolean;
};

export const preisFelder = [
  "display", "rueckseite", "batterie", "ladebuchse",
  "kameraglas", "lautsprecher", "datenrettung", "kamera",
] as const;

export const preisGruppen = [
  "iphone", "ipad", "samsung-s", "samsung-a", "samsung-note", "huawei",
] as const;

function pruefe(gruppe: string, rows: unknown): PreisZeile[] {
  if (!Array.isArray(rows)) {
    throw new Error(`data/preise.json: Die Gruppe "${gruppe}" fehlt oder ist keine Liste.`);
  }
  return rows.map((row, i) => {
    const r = row as Record<string, unknown>;
    const wo = `data/preise.json → ${gruppe}, Eintrag ${i + 1}`;
    if (typeof r.modell !== "string" || !r.modell.trim()) {
      throw new Error(`${wo}: "modell" fehlt oder ist leer.`);
    }
    for (const feld of preisFelder) {
      const v = r[feld];
      if (v === null) continue;
      if (typeof v !== "number" || !Number.isFinite(v) || v < 0) {
        throw new Error(
          `${wo} ("${r.modell}"): "${feld}" muss eine Zahl sein oder null – gefunden: ${JSON.stringify(v)}.`,
        );
      }
    }
    return row as PreisZeile;
  });
}

const quelle = preise as unknown as Record<string, unknown>;

/** Geprüfte Preiszeilen, nach Gruppe. Einzige Preisquelle der Website. */
export const preisDaten: Record<string, PreisZeile[]> = Object.fromEntries(
  preisGruppen.map((g) => [g, pruefe(g, quelle[g])]),
);
