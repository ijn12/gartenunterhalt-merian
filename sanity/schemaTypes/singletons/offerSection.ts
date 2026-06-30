import { defineField, defineType } from "sanity";

export const offerSection = defineType({
  name: "offerSection",
  title: "Angebot",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titel", type: "string", initialValue: "Exklusives Angebot" }),
    defineField({ name: "body", title: "Text", type: "text", rows: 4 }),
    defineField({ name: "deadline", title: "Gültigkeit (z. B. Gültig bis …)", type: "string" }),
    defineField({ name: "ctaLabel", title: "Button – Text", type: "string", initialValue: "Kostenvoranschlag anfragen" }),
    defineField({ name: "ctaHref", title: "Button – Link", type: "string", initialValue: "/kontakt" }),
  ],
  preview: { prepare: () => ({ title: "Angebot" }) },
});
