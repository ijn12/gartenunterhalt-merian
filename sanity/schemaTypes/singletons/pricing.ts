import { defineArrayMember, defineField, defineType } from "sanity";

const rateRow = (name: string) =>
  defineArrayMember({
    type: "object",
    name,
    fields: [
      defineField({ name: "label", title: "Bezeichnung", type: "string" }),
      defineField({ name: "price", title: "Preis", type: "string" }),
    ],
    preview: { select: { title: "label", subtitle: "price" } },
  });

export const pricing = defineType({
  name: "pricing",
  title: "Tarife & Preise",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Überschrift", type: "string", initialValue: "Tarife 2026" }),
    defineField({
      name: "tariffsTitle",
      title: "Titel – Stundentarife",
      type: "string",
      initialValue: "Stundentarife",
    }),
    defineField({
      name: "tariffs",
      title: "Stundentarife",
      type: "array",
      of: [rateRow("tariffRow")],
    }),
    defineField({
      name: "wegpauschalenTitle",
      title: "Titel – Wegpauschalen",
      type: "string",
      initialValue: "Wegpauschalen (Auto)",
    }),
    defineField({
      name: "wegpauschalen",
      title: "Wegpauschalen",
      type: "array",
      of: [rateRow("wegRow")],
    }),
    defineField({ name: "tariffNote", title: "Hinweis", type: "text", rows: 3 }),
  ],
  preview: { prepare: () => ({ title: "Tarife & Preise" }) },
});
