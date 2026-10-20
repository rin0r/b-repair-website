/* Prüft data/preise.json, bevor gebaut wird.
   Läuft ohne npm-Installation, dauert Sekunden – so steht der Fehler
   ganz oben im Protokoll und nicht hinter einem Minuten langen Build.

   Lokal:  node scripts/preise-pruefen.mjs
*/

import { readFileSync } from "node:fs";

const FELDER = [
  "display", "displayPremium", "rueckseite", "batterie", "ladebuchse",
  "kameraglas", "lautsprecher", "datenrettung", "kamera",
];
const GRUPPEN = ["iphone", "ipad", "samsung-s", "samsung-a", "samsung-note", "pixel"];

/* Spanne, in der sich jeder Reparaturpreis bewegt. Ein Vertipper wie
   2999 statt 299 ist technisch eine gültige Zahl und rutscht sonst
   unbemerkt auf die Seite. */
const MIN = 20;
const MAX = 999;

const fehler = [];
const pfad = new URL("../data/preise.json", import.meta.url);

let daten;
try {
  daten = JSON.parse(readFileSync(pfad, "utf8"));
} catch (e) {
  console.error(`data/preise.json ist kein gültiges JSON:\n  ${e.message}`);
  console.error("\nMeist fehlt ein Komma zwischen zwei Zeilen oder eines steht zu viel am Ende.");
  process.exit(1);
}

for (const gruppe of GRUPPEN) {
  const zeilen = daten[gruppe];
  if (!Array.isArray(zeilen)) {
    fehler.push(`Gruppe "${gruppe}" fehlt oder ist keine Liste.`);
    continue;
  }
  zeilen.forEach((zeile, i) => {
    const wo = `${gruppe}, Eintrag ${i + 1}`;
    const name = typeof zeile.modell === "string" ? zeile.modell : "?";
    if (!zeile.modell || typeof zeile.modell !== "string") {
      fehler.push(`${wo}: "modell" fehlt oder ist leer.`);
      return;
    }
    for (const feld of FELDER) {
      if (!(feld in zeile)) {
        fehler.push(
          `${wo} ("${name}"): "${feld}" fehlt ganz.\n` +
          `    Beim Ändern wurde das Feld wohl versehentlich mitgelöscht.\n` +
          `    Trage eine Zahl ein, oder null wenn ihr das nicht anbietet.`,
        );
        continue;
      }
      const v = zeile[feld];
      if (v === null) continue;
      if (typeof v !== "number" || !Number.isFinite(v)) {
        fehler.push(`${wo} ("${name}"): "${feld}" ist keine Zahl – gefunden: ${JSON.stringify(v)}.`);
        continue;
      }
      if (v < MIN || v > MAX) {
        fehler.push(
          `${wo} ("${name}"): "${feld}" ist ${v} – das liegt ausserhalb von ${MIN} bis ${MAX}.\n` +
          `    Ist da eine Ziffer zu viel oder zu wenig?`,
        );
      }
    }
  });
}

if (fehler.length) {
  console.error(`\n${fehler.length} Problem(e) in data/preise.json:\n`);
  for (const f of fehler) console.error(`  • ${f}`);
  console.error("\nDie Website wurde NICHT neu hochgeladen – der bisherige Stand bleibt online.\n");
  process.exit(1);
}

const anzahl = GRUPPEN.reduce((n, g) => n + daten[g].length, 0);
console.log(`data/preise.json in Ordnung – ${anzahl} Modelle geprüft.`);
