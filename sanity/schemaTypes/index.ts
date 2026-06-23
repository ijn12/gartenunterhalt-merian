import { popup } from "./documents/popup";
import { story } from "./documents/story";
import { usp } from "./documents/usp";
import { value } from "./documents/value";
import { siteBanner } from "./singletons/siteBanner";
import { contactInfo } from "./singletons/contactInfo";
import { heroSection } from "./singletons/heroSection";
import { aboutSection } from "./singletons/aboutSection";
import { servicesContent } from "./singletons/servicesContent";
import { pricing } from "./singletons/pricing";
import { offerSection } from "./singletons/offerSection";
import { testimonialsSection } from "./singletons/testimonialsSection";
import { legalContent } from "./singletons/legalContent";
import { marketingSections } from "./singletons/marketingSections";

export const schemaTypes = [
  // Singletons – Seiteninhalte
  heroSection,
  aboutSection,
  servicesContent,
  marketingSections,
  testimonialsSection,
  pricing,
  offerSection,
  contactInfo,
  legalContent,
  // Singletons – Banner
  siteBanner,
  // Dokumente
  popup,
  story,
  usp,
  value,
];
