import { defineArrayMember, defineField, defineType } from "sanity";

export const contactInfo = defineType({
  name: "contactInfo",
  title: "Kontakt & Standort",
  type: "document",
  groups: [
    { name: "contact", title: "Kontaktangaben", default: true },
    { name: "hours", title: "Öffnungszeiten" },
    { name: "holidays", title: "Ferien" },
    { name: "map", title: "Standort / Karte" },
  ],
  fields: [
    defineField({ name: "company", title: "Firma", type: "string", group: "contact" }),
    defineField({ name: "owner", title: "Inhaber", type: "string", group: "contact" }),
    defineField({ name: "street", title: "Strasse / Nr.", type: "string", group: "contact" }),
    defineField({ name: "zip", title: "PLZ", type: "string", group: "contact" }),
    defineField({ name: "city", title: "Ort", type: "string", group: "contact" }),
    defineField({ name: "country", title: "Land", type: "string", group: "contact" }),
    defineField({ name: "phone", title: "Telefon (Anzeige)", type: "string", group: "contact" }),
    defineField({
      name: "phoneHref",
      title: "Telefon (Link, z. B. tel:+41…)",
      type: "string",
      group: "contact",
    }),
    defineField({ name: "mobile", title: "Mobile (Anzeige)", type: "string", group: "contact" }),
    defineField({
      name: "mobileHref",
      title: "Mobile (Link, z. B. tel:+41…)",
      type: "string",
      group: "contact",
    }),
    defineField({ name: "email", title: "E-Mail (Anzeige)", type: "string", group: "contact" }),
    defineField({
      name: "emailHref",
      title: "E-Mail (Link, z. B. mailto:…)",
      type: "string",
      group: "contact",
    }),
    defineField({ name: "website", title: "Webseite (Anzeige)", type: "string", group: "contact" }),

    defineField({
      name: "openingTitle",
      title: "Titel Öffnungszeiten",
      type: "string",
      group: "hours",
      initialValue: "Öffnungszeiten ab August 2026",
    }),
    defineField({
      name: "openingHours",
      title: "Öffnungszeiten",
      type: "array",
      group: "hours",
      of: [
        defineArrayMember({
          type: "object",
          name: "openingRow",
          fields: [
            defineField({ name: "day", title: "Tag", type: "string" }),
            defineField({ name: "time", title: "Zeit", type: "string" }),
          ],
          preview: { select: { title: "day", subtitle: "time" } },
        }),
      ],
    }),
    defineField({ name: "openingNote", title: "Hinweis (z. B. Sonntag geschlossen)", type: "string", group: "hours" }),

    defineField({
      name: "holidaysTitle",
      title: "Titel Ferien",
      type: "string",
      group: "holidays",
      initialValue: "Geplante Ferien (geschlossen)",
    }),
    defineField({
      name: "holidays",
      title: "Ferien / Abwesenheiten",
      type: "array",
      group: "holidays",
      of: [
        defineArrayMember({
          type: "object",
          name: "holidayRow",
          fields: [
            defineField({ name: "label", title: "Bezeichnung", type: "string" }),
            defineField({ name: "range", title: "Zeitraum", type: "string" }),
          ],
          preview: { select: { title: "label", subtitle: "range" } },
        }),
      ],
    }),

    defineField({ name: "mapLabel", title: "Karten-Beschriftung", type: "string", group: "map" }),
    defineField({
      name: "mapEmbedUrl",
      title: "Google Maps Embed-URL",
      type: "url",
      group: "map",
      description: "In Google Maps: Teilen → Karte einbetten → src-URL kopieren.",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
    }),
  ],
  preview: { prepare: () => ({ title: "Kontakt & Standort" }) },
});
