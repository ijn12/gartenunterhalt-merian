import { defineArrayMember, defineField, defineType } from "sanity";

export const testimonialsSection = defineType({
  name: "testimonialsSection",
  title: "Kundenstimmen",
  type: "document",
  fields: [
    defineField({
      name: "headingLine1",
      title: "Überschrift – Anfang",
      type: "string",
      initialValue: "Was meine Kunden",
    }),
    defineField({
      name: "headingAccent",
      title: "Überschrift – betont (kursiv)",
      type: "string",
      initialValue: "über mich",
    }),
    defineField({
      name: "headingLine2",
      title: "Überschrift – Ende",
      type: "string",
      initialValue: "sagen.",
    }),
    defineField({
      name: "items",
      title: "Stimmen",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "testimonial",
          fields: [
            defineField({ name: "quote", title: "Zitat", type: "text", rows: 3, validation: (r) => r.required() }),
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "role", title: "Rolle / Kundentyp", type: "string" }),
            defineField({ name: "photo", title: "Foto (optional)", type: "image", options: { hotspot: true } }),
          ],
          preview: { select: { title: "name", subtitle: "role", media: "photo" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Kundenstimmen" }) },
});
