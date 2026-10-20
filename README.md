# b-repair.ch

[![Deploy nach Hostinger](https://github.com/rin0r/b-repair-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/rin0r/b-repair-website/actions/workflows/deploy.yml)

**Der Balken oben zeigt, ob der letzte Stand online ging.**
Grün = alles live. Rot = die Änderung hängt, die Website steht noch auf dem
vorherigen Stand. Ein Klick darauf führt zum Protokoll mit dem Grund.

## Preise ändern

Alle Preise stehen in [`data/preise.json`](data/preise.json) – eine Zeile pro
Modell. Zahl überschreiben, **Commit changes**, fertig: Etwa drei Minuten
später steht sie auf b-repair.ch.

```json
{"modell": "iPhone 15 Pro", "display": 429, "displayPremium": 219, …}
```

`null` heisst: wird für dieses Modell nicht angeboten. Zahlen ohne
Anführungszeichen, und die Kommas zwischen den Feldern müssen stehen bleiben.

### Wenn der Balken rot ist

Der häufigste Grund: Beim Markieren einer Zahl wurde ein Feld mitgelöscht,
oder es ist eine Ziffer zu viel gerutscht. Das Protokoll nennt Modell und
Feld. Solange der Fehler drin ist, wird **nichts** hochgeladen – die Website
bleibt heil, aber auch alle anderen Änderungen warten.

Vor dem Commit lokal prüfen:

```
node scripts/preise-pruefen.mjs
```

## Wie es online geht

Jeder Push auf `main` startet
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. **Preise prüfen** – fehlende Felder, Zahlen ausserhalb 20–999
2. **Bauen** – 166 Seiten aus den Preisdaten
3. **Export prüfen** – bricht ab, falls der Build unvollständig blieb
4. **Hochladen** – nur geänderte Dateien, per FTP nach
   `/domains/b-repair.ch/public_html/`

Die Zugangsdaten liegen als Repository-Secrets (`FTP_SERVER`,
`FTP_USERNAME`, `FTP_PASSWORD`).

## Technik

Next.js 13 (App Router), Tailwind, statischer Export. Hostinger liefert die
Seite aus; `trailingSlash` sorgt dafür, dass jede Route als `index.html` in
ihrem eigenen Ordner landet, weil Apache sonst `/reparatur/ipad` nicht
auflösen kann. `public/.htaccess` regelt 404-Seite, Weiterleitung von `www`
und `http`, die alten URLs der Vorgängerseite, Caching und Kompression.
