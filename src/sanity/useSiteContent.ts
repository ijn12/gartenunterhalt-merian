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
  booking as fbBooking,
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
  headingLine1: "Gärten gepflegt",
  headingAccent: "mit",
  headingLine2: "Sorgfalt & Freude.",
  subcopy:
    "Gärtnerei Merian kümmert sich um Gärten aller Art in der Region Luzern: Gartenreinigung, Bepflanzung, Wintervorbereitung und Baumpflege – persönlich geplant und sauber umgesetzt.",
  backgroundImageUrl: "/photos/garden-path.jpg",
  primaryCtaLabel: "Kontaktieren Sie mich",
  primaryCtaHref: "/kontakt",
  secondaryCtaLabel: "Termin planen",
  secondaryCtaHref: "/buchung",
  stats: [
    { value: "5+ Jahre", label: "Erfahrung im Garten" },
    { value: "Gratis", label: "Besichtigung vor Ort" },
  ],
  countdownEnabled: false,
  countdownTitle: "Online-Buchung folgt",
  countdownTargetMs: new Date(2026, 7, 15, 9, 0, 0).getTime(),
  countdownStatusLabel: "Hinweis",
  countdownStatusText: "Termine aktuell per Telefon oder E-Mail",
};

const ABOUT_FALLBACK = {
  headingLine1: "Über mich:",
  headingAccent: "Timon Merian,",
  headingLine3: "Ihr Gärtner.",
  paragraphs: [
    "Ich bin Timon Merian und kümmere mich seit über fünf Jahren um Gärten aller Art in der Region Luzern.",
    "Jeder Garten ist für mich ein kleines Projekt, dem ich mit Sorgfalt und Freude begegne.",
  ],
  photoUrl: "/photos/portrait-timon.png",
  photoAlt: "Timon Merian, Gärtnerei Merian",
  badgeInitials: "TM",
  badgeName: "Timon Merian",
  badgeRole: "Gärtnerei Merian",
  ctaLabel: "Gratis Besichtigung",
  ctaHref: "/kontakt",
  note: "Unverbindlich & kostenlos",
};

const MARKETING_FALLBACK = {
  servicesHeadingLine1: "Alles rund um",
  servicesHeadingAccent: "Ihren Garten",
  servicesCtaLabel: "Gratis Besichtigung",
  stripHeadingLine1: "Gartenarbeit",
  stripHeadingAccent: "ohne Umwege",
  stripBody:
    "Sie sagen, was im Garten ansteht. Wir schauen es gemeinsam an und planen den passenden Einsatz.",
  stripCtaLabel: "Termin planen",
  stripCtaHref: "/buchung",
  ctaHeadingLine1: "Bereit für einen",
  ctaHeadingAccent: "gepflegten Garten",
  ctaBody:
    "Ob Gartenreinigung, Bepflanzung oder Baumpflege: Eine kurze Anfrage reicht für den ersten Schritt. Ich würde mich riesig freuen.",
  ctaLabel: "Kontakt aufnehmen",
  ctaHref: "/kontakt",
};

const TESTIMONIALS_FALLBACK = {
  headingLine1: "Gärten brauchen",
  headingAccent: "Pflege",
  headingLine2: "und Zeit.",
  items: [
    {
      quote:
        "Die richtigen Arbeiten zur richtigen Zeit machen oft mehr aus als grosse Umbauten.",
      name: "Saisonale Pflege",
      role: "Rasen, Hecken, Beete",
      photoUrl: undefined as string | undefined,
    },
    { quote: "Ein gepflegter Garten soll Freude machen, nicht zur dauernden Aufgabe werden.", name: "Unterhalt", role: "nach Bedarf", photoUrl: undefined },
    { quote: "Vor Ort sieht man schnell, was wirklich nötig ist und was warten kann.", name: "Beratung", role: "persönlich", photoUrl: undefined },
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
    title: val(c?.contact?.openingTitle, "Erreichbarkeit"),
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
      icon: (s.icon ?? "Cleanup") as ServiceIconName,
      title: s.title ?? "",
      desc: s.desc ?? "",
    })),
    fbHomeServices,
  );

  const detailServices = arr(
    c?.services?.services?.map((s) => ({
      icon: (s.icon ?? "Cleanup") as ServiceIconName,
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
    ctaLabel: val(c?.offer?.ctaLabel, "Gratis Besichtigung"),
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
      "Gärten aller Art – gepflegt mit Sorgfalt und Freude in der Region Luzern.",
    ),
    footerLinks: arr(c?.legal?.footerLinks, [
      { label: "Datenschutz", href: "#" },
      { label: "AGB", href: "#" },
    ]),
    privacyNote: val(c?.legal?.privacyNote, fbPrivacyNote),
  };

  const booking = {
    eyebrow: val(c?.booking?.eyebrow, fbBooking.eyebrow),
    title: val(c?.booking?.title, fbBooking.title),
    intro: val(c?.booking?.intro, fbBooking.intro),
    providerName: val(c?.booking?.providerName, fbBooking.providerName),
    providerUrl: val(c?.booking?.providerUrl, fbBooking.providerUrl),
    embedUrl: val(c?.booking?.embedUrl, fbBooking.embedUrl),
    calLink: fbBooking.calLink,
    calNamespace: fbBooking.calNamespace,
    calOrigin: fbBooking.calOrigin,
    fallbackTitle: val(c?.booking?.fallbackTitle, fbBooking.fallbackTitle),
    fallbackBody: val(c?.booking?.fallbackBody, fbBooking.fallbackBody),
    primaryCtaLabel: val(c?.booking?.primaryCtaLabel, fbBooking.primaryCtaLabel),
    primaryCtaHref: val(c?.booking?.primaryCtaHref, fbBooking.primaryCtaHref),
    secondaryCtaLabel: val(c?.booking?.secondaryCtaLabel, fbBooking.secondaryCtaLabel),
    secondaryCtaHref: val(c?.booking?.secondaryCtaHref, fbBooking.secondaryCtaHref),
    notes: arr(c?.booking?.notes, [...fbBooking.notes]),
  };

  return {
    loading,
    contact,
    opening,
    map,
    hero,
    about,
    homeServices,
    detailServices,
    marketing,
    pricing,
    offer,
    testimonials,
    legal,
    booking,
  };
}
