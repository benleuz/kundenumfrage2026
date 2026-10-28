/* Automatisch erzeugt aus Kundenumfrage-2026-Fragen.xlsx – Änderungen bitte in der Excel-Datei machen. */
var TEXTE = {
 "kopf_eyebrow": "Kundenumfrage 2026 & Workshop «Die Zukunft ist heute.»",
 "kopf_titel": "Wie zufrieden bist du mit Apriko?",
 "kopf_intro": "Deine Rückmeldung zu Software, Support und BPO fliesst direkt in unsere Planung 2027 ein. Und im Workshop «Die Zukunft ist heute.» zeigen wir dir, wie du mit KI und unserer API mehr aus Apriko herausholst.",
 "start_titel": "Kundenumfrage & Workshop",
 "start_text": "Wir möchten Apriko gemeinsam mit dir weiterentwickeln. Dafür haben wir zwei Dinge für dich:",
 "start_umfrage_titel": "Kundenumfrage · ca. 8 Minuten",
 "start_umfrage_text": "Sag uns, wie zufrieden du mit Software, Support und BPO bist, und wähle deine Top 3 für unsere Roadmap.",
 "start_ws_titel": "Workshop: Die Zukunft ist heute.",
 "start_ws_text": "KI & API in der Praxis, 1 Stunde: Wir zeigen dir, wie du aus deiner Apriko-Umgebung zum Beispiel ein eigenes Dashboard baust. Anmelden kannst du dich am Ende der Umfrage.",
 "start_knopf": "Umfrage starten",
 "ueber_einleitung": "Damit wir die Antworten richtig einordnen können. Der Firmenname ist freiwillig.",
 "lbl_firma": "Firma (optional)",
 "lbl_rolle": "Deine Funktion",
 "lbl_seit": "Kunde von Apriko seit",
 "lbl_leistungen": "Welche Leistungen nutzt ihr?",
 "kommentar_bereich": "Was möchtest du uns dazu noch sagen?",
 "api_frage": "Wusstest du, dass du über unsere offene API praktisch jedes System an Apriko anbinden kannst?",
 "api_kommentar": "Welche Systeme würdest du gerne anbinden? (z. B. Zeiterfassung, Buchhaltung, Jobportale)",
 "api_hinweis": "Ui, dann musst du dich unbedingt für unseren Workshop «Die Zukunft ist heute.» anmelden! In einer Stunde zeigen wir dir, wie du mit unserer API und KI zum Beispiel ein eigenes Dashboard baust. Anmelden kannst du dich am Ende der Umfrage.",
 "api_hinweis_nutzer": "Stark! Dann ist unser Workshop «Die Zukunft ist heute.» genau richtig für dich: Wir zeigen dir, was mit KI und unserer API noch alles drinliegt. Anmelden kannst du dich am Ende der Umfrage.",
 "bpo_kommentar": "Anmerkungen zu BPO",
 "roadmap_titel": "Deine Wunsch-Roadmap",
 "roadmap_intro": "Welche drei Themen sollen wir als Nächstes bauen? Zieh deine Top 3 nach rechts und sortiere sie: Platz 1 ist am wichtigsten. Fehlt dein Thema, füg es unten hinzu.",
 "roadmap_eigen": "Eigenes Thema hinzufügen",
 "roadmap_kommentar": "Möchtest du eines der Themen genauer beschreiben?",
 "nps_frage": "Wie wahrscheinlich ist es, dass du Apriko einem Geschäftskontakt weiterempfiehlst?",
 "nps_0": "0 = gar nicht wahrscheinlich",
 "nps_10": "10 = äusserst wahrscheinlich",
 "fortschritt_frage": "Hast du im 2026 Entwicklungsfortschritte bei Apriko bemerkt?",
 "fortschritt_kommentar": "Welche Fortschritte sind dir aufgefallen, oder was hast du vermisst?",
 "g_best": "Was schätzt du an Apriko am meisten?",
 "g_improve": "Was sollten wir als Erstes verbessern?",
 "gespraech": "Ich wünsche mir ein persönliches Gespräch zu meinem Feedback",
 "ws_titel": "Die Zukunft ist heute.",
 "ws_frage": "Möchtest du am Workshop teilnehmen?",
 "ws_name": "Name",
 "ws_mail": "E-Mail",
 "ws_anzahl": "Anzahl Personen",
 "ws_hinweis": "Die Details (Uhrzeit und Ort bzw. Zugangslink) schicken wir dir nach der Anmeldung per E-Mail.",
 "ws_bestaetigung": "Deine Workshop-Anmeldung ist eingegangen. Wir melden uns mit den Details.",
 "ws_mindestquote": "75",
 "ws_sperre_titel": "Hmm … da geht aber noch mehr!",
 "ws_sperre_text": "Du hast erst {prozent} % der Umfrage ausgefüllt. Um an unserem Workshop teilzunehmen, bitten wir dich, uns zuerst dein Feedback zu geben. Ab {mindest} % kannst du dich anmelden – das dauert nur noch ein paar Minuten.",
 "ws_sperre_offen": "Hier fehlt noch etwas:",
 "mail_betreff": "Kundenumfrage 2026 – <Firma>",
 "mail_anrede": "Hallo Apriko-Team",
 "mail_text": "hier sind meine Antworten zur Apriko-Kundenumfrage 2026.",
 "mail_gruss": "Liebe Grüsse",
 "empfaenger": "hello@apriko.com"
};
function T(k, fallback){ return (k in TEXTE) ? TEXTE[k] : (fallback || ''); }
var CONTACT = T('empfaenger','hello@apriko.com');
var SCALE = ['1','2','3','4','5'];
var SECTIONS = [
 {
  "id": "about",
  "title": "Über dich",
  "kind": "about"
 },
 {
  "id": "qualitaet",
  "title": "Qualität",
  "kind": "rating",
  "lead": "Wie zuverlässig und sauber funktioniert Apriko im Alltag?",
  "items": [
   [
    "q_stab",
    "Stabilität und Verfügbarkeit",
    "Systemausfälle, Wartungsfenster"
   ],
   [
    "q_perf",
    "Geschwindigkeit",
    "Ladezeiten, Lohnlauf, Auswertungen"
   ],
   [
    "q_lohn",
    "Korrektheit der Lohnabrechnung/Rechnung",
    "Sozialversicherungen, Quellensteuer, GAV, Faktura"
   ],
   [
    "q_rel",
    "Qualität neuer Releases",
    "Fehler nach Updates, Kommunikation zu Änderungen"
   ],
   [
    "q_daten",
    "Datenqualität und Auswertungen",
    "Reports, Statistiken, Exporte"
   ]
  ]
 },
 {
  "id": "funktion",
  "title": "Funktionalität",
  "kind": "rating",
  "lead": "Deckt die Software ab, was dein Team im Personalverleih braucht?",
  "items": [
   [
    "f_umfang",
    "Funktionsumfang insgesamt",
    ""
   ],
   [
    "f_bedien",
    "Bedienbarkeit",
    "Übersichtlichkeit, Anzahl Klicks"
   ],
   [
    "f_dispo",
    "Disposition und Einsatzplanung",
    ""
   ],
   [
    "f_rapport",
    "Rapporte und Zeiterfassung",
    ""
   ],
   [
    "f_lohn",
    "Lohnverarbeitung",
    ""
   ],
   [
    "f_faktura",
    "Fakturierung und Debitoren",
    ""
   ],
   [
    "f_schnitt",
    "Schnittstellen",
    "Buchhaltung, Banken, Sonstiges"
   ],
   [
    "f_mobile",
    "Nutzung unterwegs",
    "Smartphone, Tablet"
   ]
  ]
 },
 {
  "id": "support",
  "title": "Support",
  "kind": "rating",
  "lead": "Wie erlebst du unseren Support, wenn du Hilfe brauchst?",
  "items": [
   [
    "s_erreich",
    "Erreichbarkeit",
    ""
   ],
   [
    "s_reakt",
    "Reaktionszeit",
    ""
   ],
   [
    "s_loesung",
    "Qualität der Lösungen",
    "Problem beim ersten Kontakt gelöst"
   ],
   [
    "s_fach",
    "Fachwissen zu Personalverleih und Lohn",
    ""
   ],
   [
    "s_freund",
    "Freundlichkeit",
    ""
   ],
   [
    "s_doku",
    "Dokumentation und Schulungen",
    ""
   ]
  ]
 },
 {
  "id": "bpo",
  "title": "BPO",
  "kind": "bpo",
  "lead": "Business Process Outsourcing: Prozesse, die Apriko für euch übernimmt (z. B. Lohnverarbeitung).",
  "items": [
   [
    "b_termin",
    "Termintreue der Lohnläufe",
    ""
   ],
   [
    "b_fehler",
    "Fehlerfreiheit",
    ""
   ],
   [
    "b_komm",
    "Kommunikation und feste Ansprechperson",
    ""
   ],
   [
    "b_entl",
    "Entlastung deines Teams",
    ""
   ]
  ]
 },
 {
  "id": "roadmap",
  "title": "Roadmap",
  "kind": "roadmap"
 },
 {
  "id": "gesamt",
  "title": "Gesamteindruck",
  "kind": "overall",
  "items": [
   [
    "g_total",
    "Gesamtzufriedenheit mit Apriko",
    ""
   ]
  ]
 },
 {
  "id": "workshop",
  "title": "Workshop",
  "kind": "workshop",
  "lead": "KI & API in der Praxis, 1 Stunde: Wir zeigen dir, wie du aus deiner Apriko-Umgebung zum Beispiel ein eigenes Dashboard baust."
 }
];
var TOPICS = [
 [
  "sig",
  "Digitale Signatur",
  "Einsatz- und Rahmenverträge elektronisch unterschreiben"
 ],
 [
  "ats",
  "ATS Funktionen / Bewerbermanagement",
  "ATS, Multiposting, KI-Matching, etc"
 ],
 [
  "cvparse",
  "CV-Parsing",
  "Lebensläufe automatisch einlesen"
 ],
 [
  "app_ma",
  "App für Temporärmitarbeitende",
  "Rapporte erfassen, Lohnabrechnungen, Einsätze"
 ],
 [
  "portal",
  "Kundenportal",
  "Rapporte freigeben, Rechnungen, Einsätze"
 ],
 [
  "gav",
  "Automatische GAV-Prüfung",
  "Mindestlöhne und Zuschläge prüfen"
 ],
 [
  "dash",
  "Dashboards und Reporting",
  "Kennzahlen auf einen Blick"
 ],
 [
  "bank",
  "Banking-Anbindung",
  "Bankbewegungen automatisch verbuchen/Zahlungen automatisch hochladen"
 ],
 [
  "m365",
  "Microsoft-365-Integration",
  "Outlook, Teams, SharePoint"
 ],
 [
  "ki",
  "KI-Assistent in der Software",
  "Fragen stellen, Texte und Verträge entwerfen"
 ]
];
var ROLES = ["Geschäftsleitung", "Disposition / Recruiting", "Lohn / Administration", "Buchhaltung / Finanzen", "IT", "Andere"];
var SINCE = ["weniger als 1 Jahr", "1–2 Jahre", "3–5 Jahre", "mehr als 5 Jahre"];
var MA = ["bis 50", "51–200", "201–500", "über 500"];
var SERVICES = ["Software", "BPO Lohn- und Debitoren"];
var BPO_OPTIONS = [];
var FORTSCHRITT = ["Ja, deutlich", "Ja, etwas", "Kaum", "Nein", "Kann ich nicht beurteilen"];
var API_OPTIONS = ["Ja, und wir nutzen das bereits", "Ja, aber wir nutzen es (noch) nicht", "Nein, das war mir nicht bewusst", "Klingt spannend, bitte meldet euch bei uns"];
var WS_TERMINE = ["Montag, 23. November 2026, Nachmittag", "Mittwoch, 25. November 2026, Vormittag", "Ich kann leider nicht, bitte informiert mich über weitere Termine", "Nein, danke"];
/* Option in «Leistungen», die den BPO-Abschnitt einblendet: die erste, die «BPO» enthält */
var BPO_SERVICE = SERVICES.find(function(s){ return /bpo/i.test(s); }) || '';
/* Option in «API-Nutzung», die als Kontaktwunsch gilt: die letzte */
var API_LEAD = API_OPTIONS[API_OPTIONS.length-1] || '';
