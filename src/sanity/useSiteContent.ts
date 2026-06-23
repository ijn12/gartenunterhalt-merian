"use client";

import { useSiteCms } from "./useSiteCms";
import {
  contact as fbContact,
  homeServices as fbHomeServices,
  services as fbServices,
  offer as fbOffer,
  openingHours as fbOpeningHours,
  openingNote as fbOpeningNote,
  holidays as fbHolidays,
  tariffs as fbTariffs,
  tariffNote as fbTariffNote,
  wegpauschalen as fbWegpauschalen,
  impressum as fbImpressum,
  privacyNote as fbPrivacyNote,
  map as fbMap,
} from "@/lib/site";
import type { ServiceIconName } from "@/components/icons";

/** Use the CMS value when present, otherwise the hardcoded fallback. */
function val<T>(cms: T | null | undefined, fallback: T): T {
  return cms === undefined || cms === null || cms === "" ? fallback : cms;
}

/** Use a CMS array only when it actually has entries. */
function arr<T>(cms: T[] | null | undefined, fallback: T[]): T[] {
  return cms && cms.length > 0 ? cms : fallback;
}

const HERO_FALLBACK = {
  headingLine1: "Reparieren",
  headingAccent: "statt",
  headingLine2: "wegwerfen.",
  subcopy:
    "Technische Hilfe aus einer Hand. Mit über 30 Jahren Erfahrung in Multimedia und IT verlängert Bolliger IT das Leben Ihrer Technik – ehrlich, persönlich, unabhängig.",
  backgroundImageUrl: "/hero/hero-bit.jpeg",
  primaryCtaLabel: "Kontaktieren Sie mich",
  primaryCtaHref: "/kontakt",
  secondaryCtaLabel: "Dienstleistungen ansehen",
  secondaryCtaHref: "/dienstleistungen",
  stats: [
    { value: "30+", label: "Jahre Erfahrung" },
    { value: "1:1", label: "Mensch zu Mensch" },
  ],
  countdownEnabled: true,
  countdownTitle: "Eröffnung August 2026",
  countdownTargetMs: new Date(2026, 7, 15, 9, 0, 0).getTime(),
  countdownStatusLabel: "Status",
  countdownStatusText: "Werkstatt wird eingerichtet – Anfragen jetzt möglich",
};

const ABOUT_FALLBACK = {
  headingLine1: "Ein Techniker.",
  headingAccent: "Eine Werkstatt.",
  headingLine3: "Volle Verantwortung.",
  paragraphs: [
    "Hinter Bolliger IT stehe ich, Roger Bolliger. Nach meiner Lehre als Audio-Video-Elektroniker bin ich 1998 in die IT gewechselt. Ich habe einige Jahre ein Informatikgeschäft geleitet, bis ich krankheitsbedingt kürzertreten musste.",
    "Nach wie vor bin ich mit Herz und Seele technikbegeistert. Meine langjährige Erfahrung gebe ich gerne an meine Kunden weiter.",
  ],
  photoUrl: "/roger-office.jpg",
  photoAlt: "Roger Bolliger in seinem Büro bei Jactronic AG",
  badgeInitials: "RB",
  badgeName: "Roger Bolliger",
  badgeRole: "Inhaber & Techniker",
  ctaLabel: "Kontaktieren Sie mich",
  ctaHref: "/kontakt",
  note: "Antwort i. d. R. innert 24h",
};

const MARKETING_FALLBACK = {
  servicesHeadingLine1: "Dienstleistungen von",
  servicesHeadingAccent: "Bolliger IT",
  servicesCtaLabel: "Alle Dienstleistungen ansehen",
  stripHeadingLine1: "Technische Hilfe",
  stripHeadingAccent: "aus einer Hand",
  stripBody:
    "Ein Ansprechpartner für alles, was piept, blinkt oder nicht mehr startet – vom Heim-WLAN bis zum Custom-Gaming-Rig.",
  stripCtaLabel: "Kontaktieren Sie mich",
  stripCtaHref: "/kontakt",
  ctaHeadingLine1: "Etwas piept, blinkt oder",
  ctaHeadingAccent: "startet nicht mehr",
  ctaBody:
    "Schildern Sie mir Ihr Anliegen – ich melde mich i. d. R. innert 24 Stunden zurück.",
  ctaLabel: "Kontaktieren Sie mich",
  ctaHref: "/kontakt",
};

const TESTIMONIALS_FALLBACK = {
  headingLine1: "Was meine Kunden",
  headingAccent: "über mich",
  headingLine2: "sagen.",
  items: [
    {
      quote:
        "Ich beziehe schon mein ganzes Leben Technik und Support von Roger. Zuverlässig, kompetent – und jemand, dem man wirklich vertrauen kann.",
      name: "Ikenna Nwalor",
      role: "Privatkunde",
      photoUrl: "/testimonials/ikenna-nwalor.png" as string | undefined,
    },
    { quote: "Irgendwer hat sicher bald was Positives zu berichten…", name: "Platzhalter", role: "KMU", photoUrl: undefined },
    { quote: "Folgt sicher auch bald.", name: "Platzhalter", role: "Gaming-Kunde", photoUrl: undefined },
    { quote: "Hier folgt bald eine weitere Stimme aus der Region.", name: "Platzhalter", role: "Privatkunde", photoUrl: undefined },
  ],
};

export function useSiteContent() {
  const { content, loading } = useSiteCms();
  const c = content;

  const contact = {
    company: val(c?.contact?.company, fbContact.company),
    owner: val(c?.contact?.owner, fbContact.owner),
    street: val(c?.contact?.street, fbContact.street),
    zip: val(c?.contact?.zip, fbContact.zip),
    city: val(c?.contact?.city, fbContact.city),
    country: val(c?.contact?.country, fbContact.country),
    phone: val(c?.contact?.phone, fbContact.phone),
    phoneHref: val(c?.contact?.phoneHref, fbContact.phoneHref),
    mobile: val(c?.contact?.mobile, fbContact.mobile),
    mobileHref: val(c?.contact?.mobileHref, fbContact.mobileHref),
    email: val(c?.contact?.email, fbContact.email),
    emailHref: val(c?.contact?.emailHref, fbContact.emailHref),
    website: val(c?.contact?.website, fbContact.website),
  };

  const opening = {
    title: val(c?.contact?.openingTitle, "Öffnungszeiten ab August 2026"),
    hours: arr(c?.contact?.openingHours, fbOpeningHours),
    note: val(c?.contact?.openingNote, fbOpeningNote),
    holidaysTitle: val(c?.contact?.holidaysTitle, "Geplante Ferien (geschlossen)"),
    holidays: arr(c?.contact?.holidays, fbHolidays),
  };

  const map = {
    label: val(c?.contact?.mapLabel, fbMap.label),
    embedUrl: val(c?.contact?.mapEmbedUrl, fbMap.embedUrl),
  };

  const hero = {
    headingLine1: val(c?.hero?.headingLine1, HERO_FALLBACK.headingLine1),
    headingAccent: val(c?.hero?.headingAccent, HERO_FALLBACK.headingAccent),
    headingLine2: val(c?.hero?.headingLine2, HERO_FALLBACK.headingLine2),
    subcopy: val(c?.hero?.subcopy, HERO_FALLBACK.subcopy),
    backgroundImageUrl: val(c?.hero?.backgroundImageUrl, HERO_FALLBACK.backgroundImageUrl),
    primaryCtaLabel: val(c?.hero?.primaryCtaLabel, HERO_FALLBACK.primaryCtaLabel),
    primaryCtaHref: val(c?.hero?.primaryCtaHref, HERO_FALLBACK.primaryCtaHref),
    secondaryCtaLabel: val(c?.hero?.secondaryCtaLabel, HERO_FALLBACK.secondaryCtaLabel),
    secondaryCtaHref: val(c?.hero?.secondaryCtaHref, HERO_FALLBACK.secondaryCtaHref),
    stats: arr(c?.hero?.stats, HERO_FALLBACK.stats),
    countdownEnabled: c?.hero?.countdownEnabled ?? HERO_FALLBACK.countdownEnabled,
    countdownTitle: val(c?.hero?.countdownTitle, HERO_FALLBACK.countdownTitle),
    countdownTargetMs: c?.hero?.countdownTarget
      ? Date.parse(c.hero.countdownTarget)
      : HERO_FALLBACK.countdownTargetMs,
    countdownStatusLabel: val(c?.hero?.countdownStatusLabel, HERO_FALLBACK.countdownStatusLabel),
    countdownStatusText: val(c?.hero?.countdownStatusText, HERO_FALLBACK.countdownStatusText),
  };

  const about = {
    headingLine1: val(c?.about?.headingLine1, ABOUT_FALLBACK.headingLine1),
    headingAccent: val(c?.about?.headingAccent, ABOUT_FALLBACK.headingAccent),
    headingLine3: val(c?.about?.headingLine3, ABOUT_FALLBACK.headingLine3),
    paragraphs: arr(c?.about?.paragraphs, ABOUT_FALLBACK.paragraphs),
    photoUrl: val(c?.about?.photoUrl, ABOUT_FALLBACK.photoUrl),
    photoAlt: val(c?.about?.photoAlt, ABOUT_FALLBACK.photoAlt),
    badgeInitials: val(c?.about?.badgeInitials, ABOUT_FALLBACK.badgeInitials),
    badgeName: val(c?.about?.badgeName, ABOUT_FALLBACK.badgeName),
    badgeRole: val(c?.about?.badgeRole, ABOUT_FALLBACK.badgeRole),
    ctaLabel: val(c?.about?.ctaLabel, ABOUT_FALLBACK.ctaLabel),
    ctaHref: val(c?.about?.ctaHref, ABOUT_FALLBACK.ctaHref),
    note: val(c?.about?.note, ABOUT_FALLBACK.note),
  };

  const homeServices = arr(
    c?.services?.homeServices?.map((s) => ({
      icon: (s.icon ?? "Home") as ServiceIconName,
      title: s.title ?? "",
      desc: s.desc ?? "",
    })),
    fbHomeServices,
  );

  const detailServices = arr(
    c?.services?.services?.map((s) => ({
      icon: (s.icon ?? "Heart") as ServiceIconName,
      title: s.title ?? "",
      image: s.imageUrl ?? "",
      paragraphs: s.paragraphs ?? [],
    })),
    fbServices,
  );

  const marketing = {
    servicesHeadingLine1: val(c?.marketing?.servicesHeadingLine1, MARKETING_FALLBACK.servicesHeadingLine1),
    servicesHeadingAccent: val(c?.marketing?.servicesHeadingAccent, MARKETING_FALLBACK.servicesHeadingAccent),
    servicesCtaLabel: val(c?.marketing?.servicesCtaLabel, MARKETING_FALLBACK.servicesCtaLabel),
    stripHeadingLine1: val(c?.marketing?.stripHeadingLine1, MARKETING_FALLBACK.stripHeadingLine1),
    stripHeadingAccent: val(c?.marketing?.stripHeadingAccent, MARKETING_FALLBACK.stripHeadingAccent),
    stripBody: val(c?.marketing?.stripBody, MARKETING_FALLBACK.stripBody),
    stripCtaLabel: val(c?.marketing?.stripCtaLabel, MARKETING_FALLBACK.stripCtaLabel),
    stripCtaHref: val(c?.marketing?.stripCtaHref, MARKETING_FALLBACK.stripCtaHref),
    ctaHeadingLine1: val(c?.marketing?.ctaHeadingLine1, MARKETING_FALLBACK.ctaHeadingLine1),
    ctaHeadingAccent: val(c?.marketing?.ctaHeadingAccent, MARKETING_FALLBACK.ctaHeadingAccent),
    ctaBody: val(c?.marketing?.ctaBody, MARKETING_FALLBACK.ctaBody),
    ctaLabel: val(c?.marketing?.ctaLabel, MARKETING_FALLBACK.ctaLabel),
    ctaHref: val(c?.marketing?.ctaHref, MARKETING_FALLBACK.ctaHref),
  };

  const pricing = {
    heading: val(c?.pricing?.heading, "Tarife 2026"),
    tariffsTitle: val(c?.pricing?.tariffsTitle, "Stundentarife"),
    tariffs: arr(c?.pricing?.tariffs, fbTariffs),
    wegpauschalenTitle: val(c?.pricing?.wegpauschalenTitle, "Wegpauschalen (Auto)"),
    wegpauschalen: arr(c?.pricing?.wegpauschalen, fbWegpauschalen),
    tariffNote: val(c?.pricing?.tariffNote, fbTariffNote),
  };

  const offer = {
    title: val(c?.offer?.title, fbOffer.title),
    body: val(c?.offer?.body, fbOffer.body),
    deadline: val(c?.offer?.deadline, fbOffer.deadline),
    ctaLabel: val(c?.offer?.ctaLabel, "Kostenvoranschlag anfragen"),
    ctaHref: val(c?.offer?.ctaHref, "/kontakt"),
  };

  const testimonials = {
    headingLine1: val(c?.testimonials?.headingLine1, TESTIMONIALS_FALLBACK.headingLine1),
    headingAccent: val(c?.testimonials?.headingAccent, TESTIMONIALS_FALLBACK.headingAccent),
    headingLine2: val(c?.testimonials?.headingLine2, TESTIMONIALS_FALLBACK.headingLine2),
    items: arr(
      c?.testimonials?.items?.map((t) => ({
        quote: t.quote ?? "",
        name: t.name ?? "",
        role: t.role ?? "",
        photoUrl: t.photoUrl,
      })),
      TESTIMONIALS_FALLBACK.items,
    ),
  };

  const legal = {
    impressumSubtitle: val(c?.legal?.impressumSubtitle, "Angaben gemäss schweizerischem Recht."),
    bank: val(c?.legal?.bank, fbImpressum.bank),
    hosting: val(c?.legal?.hosting, fbImpressum.hosting),
    responsible: val(c?.legal?.responsible, fbImpressum.responsible),
    privacyOfficer: val(c?.legal?.privacyOfficer, fbImpressum.privacyOfficer),
    treuhand: val(c?.legal?.treuhand, fbImpressum.treuhand),
    footerTagline: val(
      c?.legal?.footerTagline,
      "Ehrliche PC- und Geräte-Reparatur aus dem Aargau. Werkstatt-Eröffnung im August 2026.",
    ),
    footerLinks: arr(c?.legal?.footerLinks, [
      { label: "Datenschutz", href: "#" },
      { label: "AGB", href: "#" },
    ]),
    privacyNote: val(c?.legal?.privacyNote, fbPrivacyNote),
  };

  return { loading, contact, opening, map, hero, about, homeServices, detailServices, marketing, pricing, offer, testimonials, legal };
}
