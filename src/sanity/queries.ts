import { groq } from "next-sanity";

export const siteCmsQuery = groq`{
  "banner": *[_type == "siteBanner" && _id == "siteBanner"][0]{
    enabled,
    variant,
    speed,
    messages[]{ text, link },
    startDate,
    endDate
  },
  "popups": *[_type == "popup" && enabled == true] | order(priority desc, _createdAt desc){
    _id,
    title,
    body,
    popupType,
    enabled,
    dismissible,
    linkLabel,
    linkUrl,
    startDate,
    endDate,
    priority
  },
  "stories": *[_type == "story" && featured == true] | order(publishedAt desc)[0...6]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "imageUrl": image.asset->url,
    body,
    publishedAt,
    featured
  },
  "usps": *[_type == "usp"] | order(sortOrder asc, _createdAt asc){
    _id,
    title,
    body,
    sortOrder
  },
  "values": *[_type == "value"] | order(sortOrder asc, _createdAt asc){
    _id,
    title,
    body,
    icon,
    sortOrder
  },
  "contact": *[_type == "contactInfo" && _id == "contactInfo"][0]{
    company, owner, street, zip, city, country,
    phone, phoneHref, mobile, mobileHref, email, emailHref, website,
    openingTitle, openingHours[]{ day, time }, openingNote,
    holidaysTitle, holidays[]{ label, range },
    mapLabel, mapEmbedUrl
  },
  "hero": *[_type == "heroSection" && _id == "heroSection"][0]{
    headingLine1, headingAccent, headingLine2, subcopy,
    "backgroundImageUrl": backgroundImage.asset->url,
    primaryCtaLabel, primaryCtaHref, secondaryCtaLabel, secondaryCtaHref,
    stats[]{ value, label },
    countdownEnabled, countdownTitle, countdownTarget, countdownStatusLabel, countdownStatusText
  },
  "about": *[_type == "aboutSection" && _id == "aboutSection"][0]{
    headingLine1, headingAccent, headingLine3, paragraphs,
    "photoUrl": photo.asset->url, photoAlt,
    badgeInitials, badgeName, badgeRole, ctaLabel, ctaHref, note
  },
  "services": *[_type == "servicesContent" && _id == "servicesContent"][0]{
    homeServices[]{ icon, title, desc },
    services[]{ icon, title, "imageUrl": image.asset->url, paragraphs }
  },
  "marketing": *[_type == "marketingSections" && _id == "marketingSections"][0]{
    servicesHeadingLine1, servicesHeadingAccent, servicesCtaLabel,
    stripHeadingLine1, stripHeadingAccent, stripBody, stripCtaLabel, stripCtaHref,
    ctaHeadingLine1, ctaHeadingAccent, ctaBody, ctaLabel, ctaHref
  },
  "pricing": *[_type == "pricing" && _id == "pricing"][0]{
    heading, tariffsTitle, tariffs[]{ label, price },
    wegpauschalenTitle, wegpauschalen[]{ label, price }, tariffNote
  },
  "offer": *[_type == "offerSection" && _id == "offerSection"][0]{
    title, body, deadline, ctaLabel, ctaHref
  },
  "testimonials": *[_type == "testimonialsSection" && _id == "testimonialsSection"][0]{
    headingLine1, headingAccent, headingLine2,
    items[]{ quote, name, role, "photoUrl": photo.asset->url }
  },
  "legal": *[_type == "legalContent" && _id == "legalContent"][0]{
    impressumSubtitle, bank, hosting, responsible, privacyOfficer, treuhand,
    footerTagline, footerLinks[]{ label, href }, privacyNote
  },
  "booking": *[_type == "bookingContent" && _id == "bookingContent"][0]{
    eyebrow, title, intro, providerName, providerUrl, embedUrl,
    fallbackTitle, fallbackBody,
    primaryCtaLabel, primaryCtaHref, secondaryCtaLabel, secondaryCtaHref,
    notes
  }
}`;
