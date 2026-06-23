import { defineArrayMember, defineField, defineType } from "sanity";

export const siteBanner = defineType({
  name: "siteBanner",
  title: "Laufbanner unter dem Header",
  type: "document",
  fields: [
    defineField({
      name: "enabled",
      title: "Banner aktiv",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "variant",
      title: "Stil",
      type: "string",
      options: {
        list: [
          { title: "Orange", value: "orange" },
          { title: "Dunkel", value: "dark" },
          { title: "Info (hell)", value: "light" },
        ],
        layout: "radio",
      },
      initialValue: "orange",
    }),
    defineField({
      name: "messages",
      title: "Nachrichten (rotierend)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "bannerMessage",
          fields: [
            defineField({ name: "text", title: "Text", type: "string", validation: (r) => r.required() }),
            defineField({ name: "link", title: "Link (optional)", type: "url", validation: (r) => r.uri({ allowRelative: true, scheme: ["http", "https", "mailto", "tel"] }) }),
          ],
          preview: {
            select: { title: "text" },
          },
        }),
      ],
      validation: (rule) => rule.min(1).error("Mindestens eine Nachricht hinzufügen, wenn das Banner aktiv ist."),
    }),
    defineField({
      name: "speed",
      title: "Laufgeschwindigkeit",
      type: "string",
      options: {
        list: [
          { title: "Langsam", value: "slow" },
          { title: "Normal", value: "normal" },
          { title: "Schnell", value: "fast" },
        ],
        layout: "radio",
      },
      initialValue: "normal",
      description: "Wie schnell die Nachrichten wie an einer Börsen-Anzeige durchlaufen.",
    }),
    defineField({
      name: "startDate",
      title: "Anzeigen ab",
      type: "datetime",
    }),
    defineField({
      name: "endDate",
      title: "Anzeigen bis",
      type: "datetime",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Laufbanner" };
    },
  },
});
