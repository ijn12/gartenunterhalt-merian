import type { ServiceIconName } from "@/components/icons";

export const contact = {
  company: "Gärtnerei Merian",
  owner: "Timon Merian",
  street: "Region Luzern",
  zip: "",
  city: "",
  country: "Schweiz",
  phone: "078 685 18 99",
  phoneHref: "tel:+41786851899",
  mobile: "078 685 18 99",
  mobileHref: "tel:+41786851899",
  email: "timonmerian@gmail.com",
  emailHref: "mailto:timonmerian@gmail.com",
  website: "www.gärtnerei-merian.ch",
} as const;

export type ServiceItem = {
  icon: ServiceIconName;
  title: string;
  desc: string;
};

export type ServiceDetail = Omit<ServiceItem, "desc"> & {
  /** Placeholder or photo - swap files in /public/hero/ when real garden photos are ready. */
  image: string;
  paragraphs: string[];
};

/** Home page – service overview taken from the flyer. */
export const homeServices: ServiceItem[] = [
  {
    icon: "Cleanup",
    title: "Gartenreinigung",
    desc: "Garten von Laub, Unkraut und abgebrochenen Ästen befreien – damit alles wieder gepflegt und aufgeräumt wirkt.",
  },
  {
    icon: "Planting",
    title: "Bepflanzung",
    desc: "Saisonale Bepflanzung von Beeten: passende Pflanzen setzen und bestehende Beete auffrischen.",
  },
  {
    icon: "Winter",
    title: "Wintervorbereitung",
    desc: "Rückschnitt von Hecken und Sträuchern, damit der Garten gut durch die kalte Jahreszeit kommt.",
  },
  {
    icon: "Tree",
    title: "Baumpflege",
    desc: "Rückschnitt, Formgebung und Jungbaumpflege – fachgerecht und mit Blick auf Gesundheit und Wuchs.",
  },
  {
    icon: "Lawn",
    title: "Rasenpflege",
    desc: "Mähen, Kanten schneiden und einfache Pflegearbeiten für eine gepflegte, nutzbare Rasenfläche.",
  },
  {
    icon: "Advice",
    title: "Gratis Besichtigung",
    desc: "Vor Ort und unverbindlich gemeinsam anschauen, was nötig ist, und eine passende Lösung finden.",
  },
];

/** The four core services from the flyer, shown as photo cards on the home page. */
export const services: ServiceDetail[] = [
  {
    icon: "Cleanup",
    title: "Gartenreinigung",
    paragraphs: [
      "Garten von Laub, Unkraut und abgebrochenen Ästen befreien – damit alles wieder gepflegt und aufgeräumt wirkt.",
    ],
    image: "/photos/garden-path.jpg",
  },
  {
    icon: "Winter",
    title: "Wintervorbereitung",
    paragraphs: [
      "Rückschnitt von Hecken und Sträuchern, damit der Garten gut durch die kalte Jahreszeit kommt.",
    ],
    image: "/photos/tree-pruning.jpg",
  },
  {
    icon: "Planting",
    title: "Bepflanzung",
    paragraphs: [
      "Saisonale Bepflanzung von Beeten: passende Pflanzen setzen und bestehende Beete auffrischen.",
    ],
    image: "/photos/spring-flowers.jpg",
  },
  {
    icon: "Tree",
    title: "Baumpflege",
    paragraphs: [
      "Rückschnitt, Formgebung und Jungbaumpflege – fachgerecht und mit Blick auf Gesundheit und Wuchs.",
    ],
    image: "/photos/magnolia.jpg",
  },
];

export const offer = {
  title: "Erster Einsatz nicht zufrieden? Sie zahlen nichts.",
  body: "So einfach ist das. Timon steht mit seinem Namen für sauber ausgeführte Gartenarbeit – überzeugen Sie sich beim ersten Einsatz ganz ohne Risiko.",
  deadline: "Zufriedenheitsversprechen",
} as const;

export const openingHours: { day: string; time: string }[] = [
  { day: "Montag – Freitag", time: "nach Vereinbarung" },
  { day: "Samstag", time: "nach Vereinbarung" },
  { day: "Sonntag", time: "geschlossen" },
];

export const openingNote = "Termine werden wetter- und saisonabhängig geplant.";

export const holidays: { label: string; range: string }[] = [
  { label: "Betriebsferien", range: "folgt" },
];

export const tariffs: { label: string; price: string }[] = [
  { label: "Gartenunterhalt", price: "nach Aufwand" },
  { label: "Schnittarbeiten", price: "nach Aufwand" },
  { label: "Saisonarbeiten", price: "nach Vereinbarung" },
];

export const tariffNote =
  "Der genaue Aufwand hängt von Garten, Saison und Entsorgung ab. Vor dem Einsatz wird transparent besprochen, was gemacht wird.";

export const wegpauschalen: { label: string; price: string }[] = [
  { label: "Region", price: "nach Vereinbarung" },
];

/** "So einfach geht's" – the three steps from the flyer. */
export const steps: { title: string; body: string }[] = [
  {
    title: "Kontakt aufnehmen",
    body: "Anruf, E-Mail oder über die Website – melden Sie sich unkompliziert.",
  },
  {
    title: "Gratis Besichtigung",
    body: "Vor Ort und unverbindlich schauen wir gemeinsam an, was Ihr Garten braucht.",
  },
  {
    title: "Ausführung",
    body: "Termin nach Wunsch – die Arbeit wird sauber und zuverlässig erledigt.",
  },
];

export const reasons: { title: string; body: string }[] = [
  {
    title: "Persönlich geplant",
    body: "Jeder Garten ist ein kleines Projekt. Deshalb beginnt die Arbeit mit einem Blick vor Ort und einem kurzen Gespräch.",
  },
  {
    title: "Mit Sorgfalt & Freude",
    body: "Seit über fünf Jahren kümmert sich Timon um Gärten aller Art – mit Erfahrung, Sorgfalt und echter Freude an der Arbeit.",
  },
  {
    title: "Sauber abgeschlossen",
    body: "Nach dem Einsatz soll der Garten gepflegt aussehen und wieder Freude machen – inklusive sauberem Aufräumen.",
  },
];

export const values: { title: string; body: string }[] = [
  { title: "Sorgfältig", body: "Jeder Garten ist ein kleines Projekt, dem Timon mit Sorgfalt und Freude begegnet." },
  { title: "Natürlich", body: "Pflanzen, Boden und Saison geben den Takt vor." },
  { title: "Verlässlich", body: "Klare Absprachen und realistische Termine sind wichtiger als leere Versprechen." },
];

export const impressum = {
  bank: "Angaben folgen",
  hosting: "Hosting in der Schweiz",
  responsible: "Timon Merian",
  privacyOfficer: "Timon Merian",
  treuhand: "Angaben folgen",
} as const;

export const privacyNote =
  "Diese Angaben dienen der Kontaktaufnahme und Terminabklärung. Bitte senden Sie keine vertraulichen Informationen über das Formular. Sie können sich jederzeit auch direkt per Telefon oder E-Mail melden.";

export const map = {
  lat: 47.0502,
  lng: 8.3093,
  zoom: 11,
  label: "Gärtnerei Merian · Region Luzern",
  embedUrl: "",
} as const;

export const booking = {
  eyebrow: "Termin buchen",
  title: "Gartenarbeit direkt planen.",
  intro:
    "Die Online-Buchung wird hier eingebunden, sobald das Buchungstool bereitsteht. Bis dahin können Sie Ihren Wunschtermin direkt per Telefon oder E-Mail anfragen.",
  providerName: "Online-Buchung",
  providerUrl: "",
  embedUrl: "",
  fallbackTitle: "Online-Buchung folgt in Kürze",
  fallbackBody:
    "Ein Tool zum Buchen von freien Terminen ist in Vorbereitung. Für dringende Einsätze oder eine gratis Besichtigung melden Sie sich bitte direkt per Telefon oder E-Mail.",
  primaryCtaLabel: "Kontakt aufnehmen",
  primaryCtaHref: "/kontakt",
  secondaryCtaLabel: "Anrufen",
  secondaryCtaHref: contact.phoneHref,
  notes: [
    "Eine kurze Beschreibung des Gartens oder der gewünschten Arbeiten hilft bei der Planung.",
    "Fotos können später per E-Mail nachgereicht werden.",
    "Termine hängen von Wetter, Saison und Verfügbarkeit ab.",
  ],
} as const;

export const nav: { label: string; href: string }[] = [
  { label: "Start", href: "/" },
  { label: "Buchung", href: "/buchung" },
  { label: "Kontakt", href: "/kontakt" },
];
