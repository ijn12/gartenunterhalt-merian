import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutSection = defineType({
  name: "aboutSection",
  title: "Über mich (Inhaber)",
  type: "document",
  fields: [
    defineField({ name: "headingLine1", title: "Titel – Zeile 1", type: "string", initialValue: "Ein Techniker." }),
    defineField({
      name: "headingAccent",
      title: "Titel – Zeile 2 (kursiv)",
      type: "string",
      initialValue: "Eine Werkstatt.",
    }),
    defineField({ name: "headingLine3", title: "Titel – Zeile 3", type: "string", initialValue: "Volle Verantwortung." }),
    defineField({
      name: "paragraphs",
      title: "Textabschnitte",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 4 })],
    }),
    defineField({
      name: "photo",
      title: "Foto vom Inhaber",
      type: "image",
      options: { hotspot: true },
      description: "Dieses Bild erscheint im Abschnitt „Über mich“.",
    }),
    defineField({ name: "photoAlt", title: "Bildbeschreibung (Alt-Text)", type: "string" }),
    defineField({ name: "badgeInitials", title: "Badge – Initialen", type: "string", initialValue: "RB" }),
    defineField({ name: "badgeName", title: "Badge – Name", type: "string", initialValue: "Roger Bolliger" }),
    defineField({ name: "badgeRole", title: "Badge – Rolle", type: "string", initialValue: "Inhaber & Techniker" }),
    defineField({ name: "ctaLabel", title: "Button – Text", type: "string", initialValue: "Kontaktieren Sie mich" }),
    defineField({ name: "ctaHref", title: "Button – Link", type: "string", initialValue: "/kontakt" }),
    defineField({ name: "note", title: "Notiz neben Button", type: "string", initialValue: "Antwort i. d. R. innert 24h" }),
  ],
  preview: { prepare: () => ({ title: "Über mich (Inhaber)" }) },
});
