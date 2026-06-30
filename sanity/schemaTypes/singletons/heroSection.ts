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
      initialValue: "Gartenunterhalt",
    }),
    defineField({
      name: "headingAccent",
      title: "Titel – betontes Wort (kursiv)",
      type: "string",
      group: "hero",
      initialValue: "mit",
    }),
    defineField({
      name: "headingLine2",
      title: "Titel – Zeile 2",
      type: "string",
      group: "hero",
      initialValue: "ruhiger Hand.",
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
      initialValue: "Termin planen",
    }),
    defineField({
      name: "primaryCtaHref",
      title: "Button 1 – Link",
      type: "string",
      group: "hero",
      initialValue: "/buchung",
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Button 2 – Text",
      type: "string",
      group: "hero",
      initialValue: "Kontakt aufnehmen",
    }),
    defineField({
      name: "secondaryCtaHref",
      title: "Button 2 – Link",
      type: "string",
      group: "hero",
      initialValue: "/kontakt",
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
      initialValue: false,
    }),
    defineField({
      name: "countdownTitle",
      title: "Countdown – Titel",
      type: "string",
      group: "countdown",
      initialValue: "Online-Buchung folgt",
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
      initialValue: "Termine aktuell per Telefon oder E-Mail",
    }),
  ],
  preview: { prepare: () => ({ title: "Startseite – Hero" }) },
});
