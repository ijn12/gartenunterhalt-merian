import type { ServiceIconName } from "@/components/icons";

export const contact = {
  company: "Gartenunterhalt Merian",
  owner: "Merian",
  street: "Adresse folgt",
  zip: "0000",
  city: "Region Aargau",
  country: "Schweiz",
  phone: "Telefon folgt",
  phoneHref: "tel:+41000000000",
  mobile: "Mobile folgt",
  mobileHref: "tel:+41000000000",
  email: "info@gartenunterhalt-merian.ch",
  emailHref: "mailto:info@gartenunterhalt-merian.ch",
  website: "www.gartenunterhalt-merian.ch",
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

/** Home page – compact gardening service overview. */
export const homeServices: ServiceItem[] = [
  {
    icon: "Home",
    title: "Gartenunterhalt",
    desc: "Regelmässige Pflege für private Gärten: jäten, schneiden, aufräumen und kleine Arbeiten rund ums Grün.",
  },
  {
    icon: "Wrench",
    title: "Hecken & Sträucher",
    desc: "Saubere Formschnitte, Rückschnitte und saisonale Pflege, damit Wege, Beete und Sitzplätze wieder Luft bekommen.",
  },
  {
    icon: "Heart",
    title: "Bepflanzung & Pflege",
    desc: "Neue Pflanzen setzen, bestehende Beete auffrischen und den Garten passend zur Jahreszeit vorbereiten.",
  },
  {
    icon: "Box",
    title: "Saisonarbeiten",
    desc: "Frühlingsputz, Herbstschnitt, Laub, Grüngut und alles, was vor oder nach der Gartensaison anfällt.",
  },
  {
    icon: "Mobile",
    title: "Rasenpflege",
    desc: "Mähen, Kanten schneiden und einfache Pflegearbeiten für eine gepflegte, nutzbare Rasenfläche.",
  },
  {
    icon: "Heart",
    title: "Beratung vor Ort",
    desc: "Gemeinsam anschauen, was nötig ist, realistisch priorisieren und eine unkomplizierte Lösung finden.",
  },
];

/** Optional detail content, kept for CMS compatibility and future service sections. */
export const services: ServiceDetail[] = [
  {
    icon: "Heart",
    title: "Gartenunterhalt nach Bedarf",
    paragraphs: [
      "Ob einmaliger Einsatz oder wiederkehrende Pflege: Der Garten wird zuerst vor Ort angeschaut, damit Aufwand und Prioritäten klar sind.",
      "Danach entsteht ein einfacher Vorschlag für die nächsten Schritte.",
    ],
    image: "/hero/garden-gallery-1.svg",
  },
  {
    icon: "Wrench",
    title: "Schnittarbeiten",
    paragraphs: [
      "Hecken, Sträucher und kleinere Gehölze werden mit Blick auf Form, Gesundheit und Saison gepflegt.",
    ],
    image: "/hero/garden-gallery-2.svg",
  },
  {
    icon: "Home",
    title: "Saisonale Einsätze",
    paragraphs: [
      "Frühling und Herbst bringen oft viel Arbeit auf einmal. Ein geplanter Einsatz hilft, den Garten rechtzeitig bereit zu machen.",
    ],
    image: "/hero/garden-gallery-3.svg",
  },
  {
    icon: "Box",
    title: "Bepflanzung",
    paragraphs: [
      "Beete auffrischen, neue Pflanzen einsetzen und vorhandene Pflanzen so pflegen, dass sie zum Standort passen.",
    ],
    image: "/hero/garden-about.svg",
  },
];

export const offer = {
  title: "Erster Garten-Check",
  body: "Bei neuen Anfragen schauen wir gemeinsam an, welche Arbeiten wirklich sinnvoll sind und welche Priorität haben.",
  deadline: "Unverbindlich anfragen",
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

export const reasons: { title: string; body: string }[] = [
  {
    title: "Persönlich geplant",
    body: "Jeder Garten ist anders. Deshalb beginnt die Arbeit mit einem kurzen Gespräch und einem Blick vor Ort.",
  },
  {
    title: "Saisonal sinnvoll",
    body: "Schnitt, Pflege und Pflanzung werden so geplant, dass sie zur Jahreszeit und zum Zustand des Gartens passen.",
  },
  {
    title: "Sauber abgeschlossen",
    body: "Nach dem Einsatz soll der Garten gepflegt aussehen und wieder Freude machen – inklusive sauberem Aufräumen.",
  },
];

export const values: { title: string; body: string }[] = [
  { title: "Ruhig", body: "Guter Gartenunterhalt muss nicht kompliziert sein: anschauen, planen, sauber umsetzen." },
  { title: "Natürlich", body: "Pflanzen, Boden und Saison geben den Takt vor." },
  { title: "Verlässlich", body: "Klare Absprachen und realistische Termine sind wichtiger als leere Versprechen." },
];

export const impressum = {
  bank: "Valiant Bank, Schöftland",
  hosting: "Netzone, Schöftland – Hosting in der Schweiz",
  responsible: "Merian",
  privacyOfficer: "Merian",
  treuhand: "Savita Treuhand",
} as const;

export const privacyNote =
  "Diese Angaben dienen der Kontaktaufnahme und Terminabklärung. Bitte senden Sie keine vertraulichen Informationen über das Formular. Sie können sich jederzeit auch direkt per Telefon oder E-Mail melden.";

export const map = {
  lat: 47.2936,
  lng: 8.0079,
  zoom: 14,
  label: "Gartenunterhalt Merian · Region Aargau",
  embedUrl: "",
} as const;

export const booking = {
  eyebrow: "Termin buchen",
  title: "Gartenarbeit direkt planen.",
  intro:
    "Die Online-Buchung wird hier eingebunden, sobald der Anbieter feststeht. Bis dahin können Sie Ihren Wunschtermin direkt per Telefon oder E-Mail anfragen.",
  providerName: "Online-Buchung",
  providerUrl: "",
  embedUrl: "",
  fallbackTitle: "Online-Buchung folgt",
  fallbackBody:
    "Wir bereiten eine direkte Terminbuchung vor. Für dringende Einsätze oder erste Abklärungen melden Sie sich bitte über Kontakt.",
  primaryCtaLabel: "Kontakt aufnehmen",
  primaryCtaHref: "/kontakt",
  secondaryCtaLabel: "Anrufen",
  secondaryCtaHref: contact.phoneHref,
  notes: [
    "Kurze Beschreibung des Gartens oder der gewünschten Arbeiten hilft bei der Planung.",
    "Fotos können später per E-Mail nachgereicht werden.",
    "Termine hängen von Wetter, Saison und Verfügbarkeit ab.",
  ],
} as const;

export const nav: { label: string; href: string }[] = [
  { label: "Start", href: "/" },
  { label: "Buchung", href: "/buchung" },
  { label: "Kontakt", href: "/kontakt" },
];
