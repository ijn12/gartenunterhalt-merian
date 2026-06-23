import type { ServiceIconName } from "@/components/icons";

export const contact = {
  company: "Bolliger IT",
  owner: "Roger Bolliger",
  street: "Dorfstrasse 76",
  zip: "4813",
  city: "Uerkheim",
  country: "Schweiz",
  phone: "062 543 58 91",
  phoneHref: "tel:+41625435891",
  mobile: "078 402 91 65",
  mobileHref: "tel:+41784029165",
  email: "roger@bolligerit.ch",
  emailHref: "mailto:roger@bolligerit.ch",
  website: "www.bolligerit.ch",
} as const;

export type ServiceItem = {
  icon: ServiceIconName;
  title: string;
  desc: string;
};

export type ServiceDetail = Omit<ServiceItem, "desc"> & {
  /** Placeholder or photo – swap files in /public/services/ */
  image: string;
  paragraphs: string[];
};

/** Home page – service overview (matches Roger's current site). */
export const homeServices: ServiceItem[] = [
  {
    icon: "Home",
    title: "Vor-Ort-Service",
    desc: "Gerne löse ich Ihre Probleme rund um PC, Notebook, Drucker, Internet, E-Mail, Telekom-Abos, WLAN, NAS usw. vor Ort.",
  },
  {
    icon: "Desktop",
    title: "PC-Service im Geschäft",
    desc: "Ich bringe Ihre Geräte wie PCs, Drucker, Router, NAS, Modems, TV-Boxen usw. wieder in Schuss.",
  },
  {
    icon: "Mobile",
    title: "Support für mobile Geräte",
    desc: "Grundlegende Hilfe rund um Apps, E-Mail, Updates und Cloud für iPhones, Tablets und Co.",
  },
  {
    icon: "Gaming",
    title: "PC-Gaming",
    desc: "Beratung, Support und Aufrüstung für Gaming-PCs – von der Luft- bis zur Custom-Wasserkühlung.",
  },
  {
    icon: "Wrench",
    title: "Allgemeine Reparaturen",
    desc: "Stecker lose, Kabel ab … Ich repariere und löte auch kleinere Defekte an technischen Geräten.",
  },
  {
    icon: "Heart",
    title: "Beratung mit Herz",
    desc: "Bei technischen Fragen rund um neue Programme, Provider- oder Abowechsel, WLAN und Handy-Abos helfe ich gerne und unabhängig.",
  },
];

/** Dienstleistungen page – detailed service descriptions. */
export const services: ServiceDetail[] = [
  {
    icon: "Heart",
    title: "Persönliche Beratung",
    paragraphs: [
      "Bei Problemen berate ich Sie persönlich. Ein Anruf genügt!",
      "Sie schlagen sich nicht mit endlosen Hotlines, doofen Ticketsystemen oder einfallslosen KI-Assistenten herum.",
      "Ich bin persönlich für Sie da!",
    ],
    image: "/services/dienstleistungen/persoenliche-beratung.jpg",
  },
  {
    icon: "Wrench",
    title: "Professionelle Arbeit",
    paragraphs: [
      "Mit fast 40 Jahren Berufserfahrung im TV- und Informatikbereich kenne ich mich bestens aus. Es muss nicht immer alles gleich weggeworfen und entsorgt werden. Oft gibt es Lösungen, um ein Gerät ohne grosse Kosten wieder zum Laufen zu bringen. Dabei stehe ich gerne neutral und professionell auf Ihrer Seite.",
    ],
    image: "/services/dienstleistungen/professionelle-arbeit.jpg",
  },
  {
    icon: "Home",
    title: "Hilfe bei Ihnen zu Hause",
    paragraphs: [
      "Oft ist es besser und persönlicher, die Probleme vor Ort zu lösen. Auf Voranmeldung besuche ich Sie gerne bei Ihnen zu Hause, um die Probleme direkt vor Ort zu beheben – oder um diskretere Angelegenheiten wie Steuer- und Banksachen unter vier Augen zu klären.",
    ],
    image: "/services/dienstleistungen/hilfe-zuhause.jpg",
  },
  {
    icon: "Desktop",
    title: "Beratung und Schulung",
    paragraphs: [
      "Oft liegen die Probleme nicht an den Geräten. Gerne berate und schule ich Sie. Gemeinsam erstellen wir Spickzettel oder kleine Anleitungen, um kompliziertere Aufgaben am PC oder Handy einfach zu lösen.",
    ],
    image: "/services/dienstleistungen/beratung-schulung.jpg",
  },
  {
    icon: "Box",
    title: "Neugeräte",
    paragraphs: [
      "Falls Ihr Gerät wirklich nicht mehr zu retten ist oder sich eine Reparatur nicht mehr lohnt, verkaufe ich Ihnen gerne auch neue PCs, Mini-PCs oder Notebooks. Eine kleine Auswahl finden Sie im Geschäft, oder wir bestellen etwas Passendes von Asus, HP oder Lenovo für Sie.",
      "Desktop-PCs bauen wir Ihnen auf Wunsch auch individuell in unserer Werkstatt zusammen.",
      "Oder wir suchen für Sie eine günstige Occasion.",
    ],
    image: "/services/dienstleistungen/neugeraete.jpg",
  },
  {
    icon: "Penguin",
    title: "Weg von Windows",
    paragraphs: [
      "Microsoft wird immer grösser, teurer und will mit Ihren Daten Geld verdienen.",
      "Daher biete ich Ihnen gerne ein Linux-System als Alternative an. Linux ist einfach und sicher: Sie können damit Briefe schreiben, mailen, surfen, drucken und scannen. Und das Beste: Es kostet keinen Franken an Lizenzgebühren oder Abokosten. Linux läuft zudem auch auf älterer Hardware schnell und stabil, sodass wir Ihre alten Geräte weiterverwenden können.",
      "Gerne zeige ich Ihnen Linux an einem Demogerät.",
    ],
    image: "/services/dienstleistungen/weg-von-windows.jpg",
  },
];

export const offer = {
  title: "Exklusives Angebot",
  body: "Kommen Sie mit Ihren technischen Problemen zu mir und wir suchen eine optimale Lösung. Bis am 30.09.2026 erstelle ich Ihnen einen unabhängigen Kostenvoranschlag kostenlos.",
  deadline: "Gültig bis 30.09.2026",
} as const;

export const openingHours: { day: string; time: string }[] = [
  { day: "Montag", time: "14:00 – 18:00" },
  { day: "Mittwoch", time: "14:00 – 18:00" },
  { day: "Freitag", time: "14:00 – 18:00" },
  { day: "Sonst", time: "nach Vereinbarung" },
];

export const openingNote = "Sonntag geschlossen";

export const holidays: { label: string; range: string }[] = [
  { label: "Weihnachten 2026", range: "24.12.2026 – 04.01.2027" },
  { label: "Sportferien 2027", range: "24.01.2027 – 31.01.2027" },
  { label: "Frühlingsferien 2027", range: "folgt" },
];

export const tariffs: { label: string; price: string }[] = [
  { label: "Schulungen / Privatlektionen", price: "CHF 88.– / Std." },
  { label: "Reparaturen im Geschäft", price: "CHF 100.– / Std." },
  { label: "Reparaturen beim Kunden", price: "CHF 120.– / Std." },
  { label: "Kostenvoranschlag", price: "CHF 50.– / Gerät" },
];

export const tariffNote =
  "Stundentarife werden auf die Viertelstunde gerundet. Neukunden im Laden in der Regel bar, mit EC, Kreditkarte oder Twint. Bekannte Kunden auch auf Rechnung (zahlbar innert 10 Tagen).";

export const wegpauschalen: { label: string; price: string }[] = [
  { label: "Pauschale bis 10 km", price: "CHF 10.–" },
  { label: "Pauschale bis 25 km", price: "CHF 20.–" },
  { label: "Mehr als 25 km", price: "nach Aufwand" },
];

export const reasons: { title: string; body: string }[] = [
  {
    title: "Persönlich statt Hotline",
    body: "Sie schildern mir Ihre Sorgen, ich löse sie bestmöglich und unabhängig. Ohne überteuerte Hotline. Ohne KI-Assistent. Einfach Mensch zu Mensch.",
  },
  {
    title: "Über 30 Jahre Erfahrung",
    body: "Als gelernter Audio-/Video-Elektroniker gebe ich mein fundiertes Wissen aus Multimedia und IT gerne weiter – bei Hardware, Software und beim Neukauf.",
  },
  {
    title: "Reparieren statt wegwerfen",
    body: "Nicht alles muss gleich ersetzt werden. Oft bringe ich ein Gerät ohne grosse Kosten wieder zum Laufen – das schont Ihr Budget und die Umwelt.",
  },
];

export const values: { title: string; body: string }[] = [
  { title: "Meine Vision", body: "PC-Support von Mensch zu Mensch – zu fairen Preisen." },
  { title: "Meine Mission", body: "Reparieren statt Wegwerfen schont das Budget und die Umwelt." },
  { title: "Meine Philosophie", body: "Zufriedene Kunden machen auch mich glücklich." },
];

export const impressum = {
  bank: "Valiant Bank, Schöftland",
  hosting: "Netzone, Schöftland – Hosting in der Schweiz",
  responsible: "Roger Bolliger",
  privacyOfficer: "Roger Bolliger",
  treuhand: "Savita Treuhand",
} as const;

export const privacyNote =
  "Diese Angaben werden zur Bearbeitung Ihrer Anfrage per E-Mail an die Firma BolligerIT weitergeleitet. Die Daten werden nicht 1:1 verschlüsselt. Vermeiden Sie die Eingabe von vertraulichen Daten. Geben Sie keinesfalls Passwörter oder Zugangsdaten in dieses Formular ein. Das Formular dient zur Kontaktaufnahme oder für Terminanfragen mit BolligerIT. Im Zweifelsfall dürfen Sie mich auch gerne anrufen oder mir eine E-Mail senden.";

export const map = {
  lat: 47.2936,
  lng: 8.0079,
  zoom: 14,
  label: "Bolliger IT · Uerkheim",
  /** Placeholder embed (Adnovum AG, Zürich) until the Uerkheim address is registered. */
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d346458.3595932172!2d7.628674447861343!3d47.28100270005983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a13efae0fed%3A0x28c4bb0f16ded18a!2sAdnovum%20AG%20(Zurich%2C%20Headquarter)!5e0!3m2!1sen!2sch!4v1780069138899!5m2!1sen!2sch",
} as const;

export const nav: { label: string; href: string }[] = [
  { label: "Hauptseite", href: "/" },
  { label: "Dienstleistungen", href: "/dienstleistungen" },
  { label: "Kontakt", href: "/kontakt" },
];
