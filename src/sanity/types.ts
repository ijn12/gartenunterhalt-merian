import type { PortableTextBlock } from "@portabletext/types";
import type { ServiceIconName } from "@/components/icons";

export type BannerMessage = {
  text: string;
  link?: string;
};

export type SiteBanner = {
  enabled: boolean;
  variant: "orange" | "dark" | "light";
  speed?: "slow" | "normal" | "fast";
  messages: BannerMessage[];
  startDate?: string;
  endDate?: string;
};

export type SitePopup = {
  _id: string;
  title: string;
  body: string;
  popupType: "vacation" | "info" | "alert";
  enabled: boolean;
  dismissible: boolean;
  linkLabel?: string;
  linkUrl?: string;
  startDate?: string;
  endDate?: string;
  priority: number;
};

export type CmsStory = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  imageUrl?: string;
  body?: PortableTextBlock[];
  publishedAt?: string;
  featured: boolean;
};

export type CmsUsp = {
  _id: string;
  title: string;
  body: string;
  sortOrder: number;
};

export type CmsValue = {
  _id: string;
  title: string;
  body: string;
  icon: "eye" | "target" | "heart";
  sortOrder: number;
};

export type CmsContact = {
  company?: string;
  owner?: string;
  street?: string;
  zip?: string;
  city?: string;
  country?: string;
  phone?: string;
  phoneHref?: string;
  mobile?: string;
  mobileHref?: string;
  email?: string;
  emailHref?: string;
  website?: string;
  openingTitle?: string;
  openingHours?: { day: string; time: string }[];
  openingNote?: string;
  holidaysTitle?: string;
  holidays?: { label: string; range: string }[];
  mapLabel?: string;
  mapEmbedUrl?: string;
};

export type CmsHero = {
  headingLine1?: string;
  headingAccent?: string;
  headingLine2?: string;
  subcopy?: string;
  backgroundImageUrl?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  stats?: { value: string; label: string }[];
  countdownEnabled?: boolean;
  countdownTitle?: string;
  countdownTarget?: string;
  countdownStatusLabel?: string;
  countdownStatusText?: string;
};

export type CmsAbout = {
  headingLine1?: string;
  headingAccent?: string;
  headingLine3?: string;
  paragraphs?: string[];
  photoUrl?: string;
  photoAlt?: string;
  badgeInitials?: string;
  badgeName?: string;
  badgeRole?: string;
  ctaLabel?: string;
  ctaHref?: string;
  note?: string;
};

export type CmsServiceHome = {
  icon?: ServiceIconName;
  title?: string;
  desc?: string;
};

export type CmsServiceDetail = {
  icon?: ServiceIconName;
  title?: string;
  imageUrl?: string;
  paragraphs?: string[];
};

export type CmsServices = {
  homeServices?: CmsServiceHome[];
  services?: CmsServiceDetail[];
};

export type CmsMarketing = {
  servicesHeadingLine1?: string;
  servicesHeadingAccent?: string;
  servicesCtaLabel?: string;
  stripHeadingLine1?: string;
  stripHeadingAccent?: string;
  stripBody?: string;
  stripCtaLabel?: string;
  stripCtaHref?: string;
  ctaHeadingLine1?: string;
  ctaHeadingAccent?: string;
  ctaBody?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type CmsPricing = {
  heading?: string;
  tariffsTitle?: string;
  tariffs?: { label: string; price: string }[];
  wegpauschalenTitle?: string;
  wegpauschalen?: { label: string; price: string }[];
  tariffNote?: string;
};

export type CmsOffer = {
  title?: string;
  body?: string;
  deadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type CmsTestimonial = {
  quote?: string;
  name?: string;
  role?: string;
  photoUrl?: string;
};

export type CmsTestimonials = {
  headingLine1?: string;
  headingAccent?: string;
  headingLine2?: string;
  items?: CmsTestimonial[];
};

export type CmsLegal = {
  impressumSubtitle?: string;
  bank?: string;
  hosting?: string;
  responsible?: string;
  privacyOfficer?: string;
  treuhand?: string;
  footerTagline?: string;
  footerLinks?: { label: string; href: string }[];
  privacyNote?: string;
};

export type SiteCmsContent = {
  banner: SiteBanner | null;
  popups: SitePopup[];
  stories: CmsStory[];
  usps: CmsUsp[];
  values: CmsValue[];
  contact: CmsContact | null;
  hero: CmsHero | null;
  about: CmsAbout | null;
  services: CmsServices | null;
  marketing: CmsMarketing | null;
  pricing: CmsPricing | null;
  offer: CmsOffer | null;
  testimonials: CmsTestimonials | null;
  legal: CmsLegal | null;
};
