# Apriko Kundenumfrage 2026 – Einrichtung

Die Antworten werden beim Absenden direkt in **Supabase** gespeichert (Projekt «Apriko CRM», Tabelle `umfrage_antworten`). Klappt das beim Kunden ausnahmsweise nicht, erscheint als Rückfall ein **Antwort-Code**, den er per E-Mail schickt.

## Supabase

- Der Schlüssel in `index.html` / `auswertung.html` ist der **öffentliche** (publishable) Schlüssel. Er darf laut Zugriffsregeln nur **neue Antworten einfügen** – nicht lesen, ändern oder löschen.
- **Lesen und Löschen** darf nur, wer mit `benjamin@apriko.com` angemeldet ist. Weitere Personen: Regel «Umfrage: nur Auswerter lesen» in Supabase um deren E-Mail ergänzen.
- **Einmalig nötig:** In Supabase unter *Authentication → Users → Add user → Create new user* den Benutzer `benjamin@apriko.com` mit Passwort anlegen und «Auto Confirm User» anhaken. Mit diesem Login meldest du dich in der Auswertung an.
- Den **service_role**- bzw. **secret**-Schlüssel nie in eine Webseite einbauen.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Die Umfrage für Kunden |
| `auswertung.html` | Auswertung: Codes aus den Mails einfügen |
| `fragen.js` | Alle Fragen, Listen, Roadmap-Themen und Texte – **wird aus der Excel-Datei erzeugt**, nicht von Hand ändern |
| `code.js` | Erzeugt und liest die Antwort-Codes |
| `style.css` | Gemeinsames Design (Apriko-Farben) |
| `logo.png` | **Selbst hinzufügen:** Apriko-Logo (hell, für dunklen Hintergrund). Ohne Datei steht dort «Apriko» als Text. |

Fragen und Texte änderst du in **Kundenumfrage-2026-Fragen.xlsx** (Blatt «Texte» enthält auch die Empfängeradresse). Die Excel-Datei an Claude geben → neue `fragen.js` → im Repo ersetzen.

## Auf GitHub Pages veröffentlichen

1. Neues Repository, z. B. `apriko-umfrage` (öffentlich).
2. Die Dateien hochladen.
3. **Settings → Pages → Deploy from a branch → main / root**.
4. Nach ein bis zwei Minuten: `https://<benutzer>.github.io/apriko-umfrage/` – diesen Link schickst du den Kunden.

## So läuft es für den Kunden

1. Umfrage ausfüllen (BPO-Teil erscheint nur, wenn BPO angehakt ist).
2. «Antworten senden» → der Antwort-Code erscheint.
3. «Per E-Mail senden» öffnet das Mailprogramm mit fertiger Nachricht an dich. Falls sich nichts öffnet: «Code kopieren» und selbst mailen.

## Auswerten

1. `auswertung.html` öffnen und mit deinem Supabase-Login anmelden – alle Antworten werden geladen («Neu laden» für den aktuellen Stand).
2. **Tests löschen:** Im Block «Alle Antworten» bei der Testantwort auf «Löschen» → «Ja, löschen». Endgültig, fliesst danach nirgends mehr ein.
3. Nur falls ein Kunde einen Code gemailt hat: Code oder ganze Mail ins Feld kopieren → «Hinzufügen».
4. Doppelte Codes zählen nur einmal. Die Codes bleiben in diesem Browser gespeichert – du kannst laufend neue dazulegen.
5. «CSV herunterladen» für Excel.

Die Codes sind nur in dem Browser gespeichert, in dem du sie eingefügt hast. Bewahre die Mails auf (oder die Codes in einer Textdatei), dann kannst du jederzeit neu einlesen.

## Gut zu wissen

- **Rücklauf:** Nur im Rückfall-Fall (Code per Mail) muss der Kunde selbst etwas abschicken.
- **Datenschutz:** Die Antworten liegen in deinem Supabase-Projekt (Region London, eu-west-2).
- **Ändern der Fragen während der Umfrage:** Antworten bleiben lesbar, solange die Schlüssel in `fragen.js` (z. B. `q_stab`) gleich bleiben. Neue Fragen erscheinen in der Auswertung erst ab den neuen Antworten.

## Auswertung – wie gerechnet wird

- **NPS:** Anteil 9–10 minus Anteil 0–6, in Prozentpunkten (−100 bis +100).
- **Bewertungen:** Durchschnitt 1–5, «k. A.» zählt nicht. Zahl in Klammern = Anzahl Antworten.
- **Roadmap:** Jeder Kunde wählt seine Top 3. Platz 1 = 3 Punkte, Platz 2 = 2, Platz 3 = 1; eigene Themen der Kunden separat aufgelistet.
