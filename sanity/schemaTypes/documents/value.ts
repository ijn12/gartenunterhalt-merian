import { defineField, defineType } from "sanity";

export const value = defineType({
  name: "value",
  title: "Vision / Mission / Philosophie",
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
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Auge (Vision)", value: "eye" },
          { title: "Ziel (Mission)", value: "target" },
          { title: "Herz (Philosophie)", value: "heart" },
        ],
        layout: "radio",
      },
      initialValue: "eye",
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
    select: { title: "title", icon: "icon" },
    prepare({ title, icon }) {
      return { title: title ?? "Wert", subtitle: icon };
    },
  },
});
