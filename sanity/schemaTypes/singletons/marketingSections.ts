import { defineField, defineType } from "sanity";

export const marketingSections = defineType({
  name: "marketingSections",
  title: "Startseite – Banner & CTA",
  type: "document",
  groups: [
    { name: "services", title: "Leistungen-Titel", default: true },
    { name: "strip", title: "Hinweis-Banner" },
    { name: "cta", title: "Abschluss-CTA" },
  ],
  fields: [
    defineField({
      name: "servicesHeadingLine1",
      title: "Titel – Anfang",
      type: "string",
      group: "services",
      initialValue: "Pflege für",
    }),
    defineField({
      name: "servicesHeadingAccent",
      title: "Titel – betont (kursiv)",
      type: "string",
      group: "services",
      initialValue: "Ihren Garten",
    }),
    defineField({
      name: "servicesCtaLabel",
      title: "Button – Text",
      type: "string",
      group: "services",
      initialValue: "Termin planen",
    }),

    defineField({ name: "stripHeadingLine1", title: "Banner – Titel Anfang", type: "string", group: "strip", initialValue: "Gartenarbeit" }),
    defineField({ name: "stripHeadingAccent", title: "Banner – Titel betont (kursiv)", type: "string", group: "strip", initialValue: "ohne Umwege" }),
    defineField({ name: "stripBody", title: "Banner – Text", type: "text", rows: 3, group: "strip" }),
    defineField({ name: "stripCtaLabel", title: "Banner – Button-Text", type: "string", group: "strip", initialValue: "Termin planen" }),
    defineField({ name: "stripCtaHref", title: "Banner – Button-Link", type: "string", group: "strip", initialValue: "/buchung" }),

    defineField({ name: "ctaHeadingLine1", title: "CTA – Titel Anfang", type: "string", group: "cta", initialValue: "Bereit für einen" }),
    defineField({ name: "ctaHeadingAccent", title: "CTA – Titel betont (kursiv)", type: "string", group: "cta", initialValue: "gepflegten Garten" }),
    defineField({ name: "ctaBody", title: "CTA – Text", type: "text", rows: 3, group: "cta" }),
    defineField({ name: "ctaLabel", title: "CTA – Button-Text", type: "string", group: "cta", initialValue: "Zur Buchung" }),
    defineField({ name: "ctaHref", title: "CTA – Button-Link", type: "string", group: "cta", initialValue: "/buchung" }),
  ],
  preview: { prepare: () => ({ title: "Startseite – Banner & CTA" }) },
});
