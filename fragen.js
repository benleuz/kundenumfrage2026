/* Fragen und Roadmap-Themen – gemeinsam für index.html und auswertung.html.
   Hier ändern, beide Seiten übernehmen es. */
var CONTACT = "hello@apriko.com";
var SCALE = ["1","2","3","4","5"];

var SECTIONS = [
 {id:"about", title:"Über Sie", kind:"about"},
 {id:"qualitaet", title:"Qualität", kind:"rating", lead:"Wie zuverlässig und sauber funktioniert Apriko im Alltag?",
  items:[
   ["q_stab","Stabilität und Verfügbarkeit","Systemausfälle, Wartungsfenster"],
   ["q_perf","Geschwindigkeit","Ladezeiten, Lohnlauf, Auswertungen"],
   ["q_lohn","Korrektheit der Lohnabrechnung","Sozialversicherungen, Quellensteuer, GAV"],
   ["q_rel","Qualität neuer Releases","Fehler nach Updates, Kommunikation zu Änderungen"],
   ["q_daten","Datenqualität und Auswertungen","Reports, Statistiken, Exporte"]]},
 {id:"funktion", title:"Funktionalität", kind:"rating", lead:"Deckt die Software ab, was Ihr Team im Personalverleih braucht?",
  items:[
   ["f_umfang","Funktionsumfang insgesamt",""],
   ["f_bedien","Bedienbarkeit","Übersichtlichkeit, Anzahl Klicks"],
   ["f_dispo","Disposition und Einsatzplanung",""],
   ["f_rapport","Rapporte und Zeiterfassung",""],
   ["f_lohn","Lohnverarbeitung",""],
   ["f_faktura","Fakturierung und Debitoren",""],
   ["f_schnitt","Schnittstellen","Buchhaltung, Swissdec/ELM, Banken"],
   ["f_mobile","Nutzung unterwegs","Smartphone, Tablet"]]},
 {id:"support", title:"Support", kind:"rating", lead:"Wie erleben Sie unseren Support, wenn Sie Hilfe brauchen?",
  items:[
   ["s_erreich","Erreichbarkeit",""],
   ["s_reakt","Reaktionszeit",""],
   ["s_loesung","Qualität der Lösungen","Problem beim ersten Kontakt gelöst"],
   ["s_fach","Fachwissen zu Personalverleih und Lohn",""],
   ["s_freund","Freundlichkeit",""],
   ["s_doku","Dokumentation und Schulungen",""]]},
 {id:"bpo", title:"BPO", kind:"bpo", lead:"Business Process Outsourcing: Prozesse, die Apriko für Sie übernimmt (z. B. Lohnverarbeitung).",
  items:[
   ["b_termin","Termintreue der Lohnläufe",""],
   ["b_fehler","Fehlerfreiheit",""],
   ["b_komm","Kommunikation und feste Ansprechperson",""],
   ["b_entl","Entlastung Ihres Teams",""],
   ["b_preis","Preis-Leistungs-Verhältnis",""]]},
 {id:"roadmap", title:"Roadmap", kind:"roadmap"},
 {id:"gesamt", title:"Gesamteindruck", kind:"overall"}
];

var BPO_OPTIONS = ["Lohnverarbeitung","Quellensteuer-Abrechnung","Behördenmeldungen (AHV, SUVA, BVG)","Debitorenbuchhaltung und Mahnwesen","Kreditoren und Zahlungsverkehr","Rapporterfassung","Bewerber-Vorselektion","Jahresabschluss-Unterstützung"];

var TOPICS = [
 ["sig","Digitale Signatur","Einsatz- und Rahmenverträge elektronisch unterschreiben"],
 ["ats","ATS / Bewerbermanagement","Bewerbungen erfassen, Pipeline, Absagen"],
 ["multipost","Multiposting Stelleninserate","Jobs auf mehreren Portalen gleichzeitig"],
 ["cvparse","CV-Parsing","Lebensläufe automatisch einlesen"],
 ["match","KI-Matching","Kandidaten passend zum Auftrag vorschlagen"],
 ["app_ma","App für Temporärmitarbeitende","Rapporte, Lohnabrechnungen, Einsätze"],
 ["portal","Kundenportal","Rapporte freigeben, Rechnungen, Einsätze"],
 ["zeit","Mobile Zeiterfassung","Stempeln und Rapportieren per Smartphone"],
 ["gav","Automatische GAV-Prüfung","Mindestlöhne und Zuschläge prüfen"],
 ["dms","Digitales Personaldossier","Dokumente, Bewilligungen, Fristen"],
 ["dash","Dashboards und Reporting","Kennzahlen auf einen Blick"],
 ["erech","E-Rechnung","Rechnungen elektronisch versenden"],
 ["fibu","Buchhaltungs-Schnittstellen","Abacus, Bexio, Sage u. a."],
 ["bank","Banking-Anbindung","Zahlungen und Kontoauszüge automatisch"],
 ["m365","Microsoft-365-Integration","Outlook, Teams, SharePoint"],
 ["ki","KI-Assistent in der Software","Fragen stellen, Texte und Verträge entwerfen"]
];

var ROLES = ["Geschäftsleitung","Disposition / Recruiting","Lohn / Administration","Buchhaltung / Finanzen","IT","Andere"];
var SINCE = ["weniger als 1 Jahr","1–2 Jahre","3–5 Jahre","mehr als 5 Jahre"];
var SERVICES = ["Software (SaaS)","BPO Lohnverarbeitung","Weitere BPO-Leistungen","Implementierung / Beratung"];
