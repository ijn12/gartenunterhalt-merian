import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutSection = defineType({
  name: "aboutSection",
  title: "Über uns",
  type: "document",
  fields: [
    defineField({ name: "headingLine1", title: "Titel – Zeile 1", type: "string", initialValue: "Ein Garten." }),
    defineField({
      name: "headingAccent",
      title: "Titel – Zeile 2 (kursiv)",
      type: "string",
      initialValue: "Ein Plan.",
    }),
    defineField({ name: "headingLine3", title: "Titel – Zeile 3", type: "string", initialValue: "Saubere Arbeit." }),
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
      description: "Dieses Bild erscheint im Abschnitt „Über uns“.",
    }),
    defineField({ name: "photoAlt", title: "Bildbeschreibung (Alt-Text)", type: "string" }),
    defineField({ name: "badgeInitials", title: "Badge – Initialen", type: "string", initialValue: "GM" }),
    defineField({ name: "badgeName", title: "Badge – Name", type: "string", initialValue: "Gartenunterhalt Merian" }),
    defineField({ name: "badgeRole", title: "Badge – Rolle", type: "string", initialValue: "Pflege, Schnitt & Saisonarbeiten" }),
    defineField({ name: "ctaLabel", title: "Button – Text", type: "string", initialValue: "Termin planen" }),
    defineField({ name: "ctaHref", title: "Button – Link", type: "string", initialValue: "/buchung" }),
    defineField({ name: "note", title: "Notiz neben Button", type: "string", initialValue: "Unkomplizierte Abklärung" }),
  ],
  preview: { prepare: () => ({ title: "Über uns" }) },
});
