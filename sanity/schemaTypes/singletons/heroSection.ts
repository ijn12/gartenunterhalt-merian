import { defineArrayMember, defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Startseite – Hero",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "countdown", title: "Countdown" },
  ],
  fields: [
    defineField({
      name: "headingLine1",
      title: "Titel – Zeile 1",
      type: "string",
      group: "hero",
      initialValue: "Reparieren",
    }),
    defineField({
      name: "headingAccent",
      title: "Titel – betontes Wort (kursiv)",
      type: "string",
      group: "hero",
      initialValue: "statt",
    }),
    defineField({
      name: "headingLine2",
      title: "Titel – Zeile 2",
      type: "string",
      group: "hero",
      initialValue: "wegwerfen.",
    }),
    defineField({
      name: "subcopy",
      title: "Untertitel",
      type: "text",
      rows: 3,
      group: "hero",
    }),
    defineField({
      name: "backgroundImage",
      title: "Hintergrundbild",
      type: "image",
      options: { hotspot: true },
      group: "hero",
    }),
    defineField({
      name: "primaryCtaLabel",
      title: "Button 1 – Text",
      type: "string",
      group: "hero",
      initialValue: "Kontaktieren Sie mich",
    }),
    defineField({
      name: "primaryCtaHref",
      title: "Button 1 – Link",
      type: "string",
      group: "hero",
      initialValue: "/kontakt",
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Button 2 – Text",
      type: "string",
      group: "hero",
      initialValue: "Dienstleistungen ansehen",
    }),
    defineField({
      name: "secondaryCtaHref",
      title: "Button 2 – Link",
      type: "string",
      group: "hero",
      initialValue: "/dienstleistungen",
    }),
    defineField({
      name: "stats",
      title: "Kennzahlen",
      type: "array",
      group: "hero",
      of: [
        defineArrayMember({
          type: "object",
          name: "stat",
          fields: [
            defineField({ name: "value", title: "Wert", type: "string" }),
            defineField({ name: "label", title: "Beschriftung", type: "string" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        }),
      ],
    }),

    defineField({
      name: "countdownEnabled",
      title: "Countdown anzeigen",
      type: "boolean",
      group: "countdown",
      initialValue: true,
    }),
    defineField({
      name: "countdownTitle",
      title: "Countdown – Titel",
      type: "string",
      group: "countdown",
      initialValue: "Eröffnung August 2026",
    }),
    defineField({
      name: "countdownTarget",
      title: "Countdown – Zieldatum",
      type: "datetime",
      group: "countdown",
    }),
    defineField({
      name: "countdownStatusLabel",
      title: "Status – Label",
      type: "string",
      group: "countdown",
      initialValue: "Status",
    }),
    defineField({
      name: "countdownStatusText",
      title: "Status – Text",
      type: "string",
      group: "countdown",
      initialValue: "Werkstatt wird eingerichtet – Anfragen jetzt möglich",
    }),
  ],
  preview: { prepare: () => ({ title: "Startseite – Hero" }) },
});
