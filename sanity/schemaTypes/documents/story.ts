import { defineField, defineType } from "sanity";

export const story = defineType({
  name: "story",
  title: "Story / News",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Kurztext",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Bild",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "body",
      title: "Inhalt",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Veröffentlicht am",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "featured",
      title: "Auf der Hauptseite anzeigen",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Neueste zuerst",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "image", date: "publishedAt" },
    prepare({ title, media, date }) {
      return {
        title: title ?? "Story",
        subtitle: date ? new Date(date).toLocaleDateString("de-CH") : undefined,
        media,
      };
    },
  },
});
