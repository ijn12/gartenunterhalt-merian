import { defineArrayMember, defineField, defineType } from "sanity";

const ICON_OPTIONS = [
  { title: "Haus / Vor-Ort", value: "Home" },
  { title: "Desktop / PC", value: "Desktop" },
  { title: "Mobile / Handy", value: "Mobile" },
  { title: "Gaming", value: "Gaming" },
  { title: "Werkzeug / Reparatur", value: "Wrench" },
  { title: "Herz / Beratung", value: "Heart" },
  { title: "Box / Neugerät", value: "Box" },
  { title: "Terminal / Linux", value: "Penguin" },
];

export const servicesContent = defineType({
  name: "servicesContent",
  title: "Dienstleistungen",
  type: "document",
  groups: [
    { name: "home", title: "Übersicht (Startseite)", default: true },
    { name: "detail", title: "Detailseite" },
  ],
  fields: [
    defineField({
      name: "homeServices",
      title: "Service-Kacheln (Startseite)",
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
              initialValue: "Home",
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
      title: "Detaillierte Dienstleistungen",
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
              initialValue: "Heart",
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
  preview: { prepare: () => ({ title: "Dienstleistungen" }) },
});
