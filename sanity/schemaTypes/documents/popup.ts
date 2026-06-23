import { defineField, defineType } from "sanity";

export const popup = defineType({
  name: "popup",
  title: "Pop-up / Hinweis",
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
      name: "popupType",
      title: "Typ",
      type: "string",
      options: {
        list: [
          { title: "Ferien / Abwesenheit", value: "vacation" },
          { title: "Information", value: "info" },
          { title: "Wichtiger Hinweis", value: "alert" },
        ],
        layout: "radio",
      },
      initialValue: "info",
    }),
    defineField({
      name: "enabled",
      title: "Aktiv",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "dismissible",
      title: "Schliessbar",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "linkLabel",
      title: "Button-Text (optional)",
      type: "string",
    }),
    defineField({
      name: "linkUrl",
      title: "Button-Link (optional)",
      type: "url",
      validation: (rule) =>
        rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto", "tel"] }),
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
    defineField({
      name: "priority",
      title: "Priorität (höher = zuerst)",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: "Priorität", name: "priorityDesc", by: [{ field: "priority", direction: "desc" }] },
  ],
  preview: {
    select: { title: "title", enabled: "enabled", popupType: "popupType" },
    prepare({ title, enabled, popupType }) {
      const typeLabel =
        popupType === "vacation" ? "Ferien" : popupType === "alert" ? "Hinweis" : "Info";
      return {
        title: title ?? "Pop-up",
        subtitle: `${typeLabel}${enabled ? " · aktiv" : " · inaktiv"}`,
      };
    },
  },
});
