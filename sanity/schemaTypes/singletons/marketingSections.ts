import { defineField, defineType } from "sanity";

export const marketingSections = defineType({
  name: "marketingSections",
  title: "Startseite – Banner & CTA",
  type: "document",
  groups: [
    { name: "services", title: "Dienstleistungen-Titel", default: true },
    { name: "strip", title: "Blauer Banner" },
    { name: "cta", title: "Abschluss-CTA" },
  ],
  fields: [
    defineField({
      name: "servicesHeadingLine1",
      title: "Titel – Anfang",
      type: "string",
      group: "services",
      initialValue: "Dienstleistungen von",
    }),
    defineField({
      name: "servicesHeadingAccent",
      title: "Titel – betont (kursiv)",
      type: "string",
      group: "services",
      initialValue: "Bolliger IT",
    }),
    defineField({
      name: "servicesCtaLabel",
      title: "Button – Text",
      type: "string",
      group: "services",
      initialValue: "Alle Dienstleistungen ansehen",
    }),

    defineField({ name: "stripHeadingLine1", title: "Banner – Titel Anfang", type: "string", group: "strip", initialValue: "Technische Hilfe" }),
    defineField({ name: "stripHeadingAccent", title: "Banner – Titel betont (kursiv)", type: "string", group: "strip", initialValue: "aus einer Hand" }),
    defineField({ name: "stripBody", title: "Banner – Text", type: "text", rows: 3, group: "strip" }),
    defineField({ name: "stripCtaLabel", title: "Banner – Button-Text", type: "string", group: "strip", initialValue: "Kontaktieren Sie mich" }),
    defineField({ name: "stripCtaHref", title: "Banner – Button-Link", type: "string", group: "strip", initialValue: "/kontakt" }),

    defineField({ name: "ctaHeadingLine1", title: "CTA – Titel Anfang", type: "string", group: "cta", initialValue: "Etwas piept, blinkt oder" }),
    defineField({ name: "ctaHeadingAccent", title: "CTA – Titel betont (kursiv)", type: "string", group: "cta", initialValue: "startet nicht mehr" }),
    defineField({ name: "ctaBody", title: "CTA – Text", type: "text", rows: 3, group: "cta" }),
    defineField({ name: "ctaLabel", title: "CTA – Button-Text", type: "string", group: "cta", initialValue: "Kontaktieren Sie mich" }),
    defineField({ name: "ctaHref", title: "CTA – Button-Link", type: "string", group: "cta", initialValue: "/kontakt" }),
  ],
  preview: { prepare: () => ({ title: "Startseite – Banner & CTA" }) },
});
