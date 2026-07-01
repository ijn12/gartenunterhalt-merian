import { defineArrayMember, defineField, defineType } from "sanity";

const ICON_OPTIONS = [
  { title: "Blatt / Gartenreinigung", value: "Cleanup" },
  { title: "Blume / Bepflanzung", value: "Planting" },
  { title: "Schere / Schnitt & Winter", value: "Winter" },
  { title: "Baum / Baumpflege", value: "Tree" },
  { title: "Setzling / Rasenpflege", value: "Lawn" },
  { title: "Gespräch / Beratung", value: "Advice" },
  { title: "Sonne / Saison", value: "Season" },
  { title: "Bäume / Hecken", value: "Hedge" },
];

export const servicesContent = defineType({
  name: "servicesContent",
  title: "Gartenleistungen",
  type: "document",
  groups: [
    { name: "home", title: "Übersicht (Startseite)", default: true },
    { name: "detail", title: "Optionale Details" },
  ],
  fields: [
    defineField({
      name: "homeServices",
      title: "Leistungs-Kacheln (Startseite)",
      type: "array",
      group: "home",
      of: [
        defineArrayMember({
          type: "object",
          name: "homeService",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: { list: ICON_OPTIONS },
              initialValue: "Cleanup",
            }),
            defineField({ name: "title", title: "Titel", type: "string", validation: (r) => r.required() }),
            defineField({ name: "desc", title: "Beschreibung", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title", subtitle: "icon" } },
        }),
      ],
    }),
    defineField({
      name: "services",
      title: "Detaillierte Gartenleistungen",
      type: "array",
      group: "detail",
      of: [
        defineArrayMember({
          type: "object",
          name: "service",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: { list: ICON_OPTIONS },
              initialValue: "Cleanup",
            }),
            defineField({ name: "title", title: "Titel", type: "string", validation: (r) => r.required() }),
            defineField({
              name: "image",
              title: "Bild",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "paragraphs",
              title: "Textabschnitte",
              type: "array",
              of: [defineArrayMember({ type: "text", rows: 3 })],
            }),
          ],
          preview: { select: { title: "title", media: "image" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Gartenleistungen" }) },
});
