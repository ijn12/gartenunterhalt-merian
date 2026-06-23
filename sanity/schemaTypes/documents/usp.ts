import { defineField, defineType } from "sanity";

export const usp = defineType({
  name: "usp",
  title: "USP / Grund",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Text",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sortOrder",
      title: "Reihenfolge",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [{ title: "Reihenfolge", name: "sortOrderAsc", by: [{ field: "sortOrder", direction: "asc" }] }],
  preview: {
    select: { title: "title", sortOrder: "sortOrder" },
    prepare({ title, sortOrder }) {
      return { title: title ?? "USP", subtitle: sortOrder != null ? `#${sortOrder}` : undefined };
    },
  },
});
