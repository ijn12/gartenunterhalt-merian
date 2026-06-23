import { defineArrayMember, defineField, defineType } from "sanity";

export const legalContent = defineType({
  name: "legalContent",
  title: "Impressum, Footer & Rechtliches",
  type: "document",
  groups: [
    { name: "impressum", title: "Impressum", default: true },
    { name: "footer", title: "Footer" },
    { name: "privacy", title: "Datenschutz" },
  ],
  fields: [
    defineField({ name: "impressumSubtitle", title: "Impressum – Untertitel", type: "string", group: "impressum", initialValue: "Angaben gemäss schweizerischem Recht." }),
    defineField({ name: "bank", title: "Bankverbindung", type: "string", group: "impressum" }),
    defineField({ name: "hosting", title: "Hosting", type: "string", group: "impressum" }),
    defineField({ name: "responsible", title: "Verantwortlich für die Seite", type: "string", group: "impressum" }),
    defineField({ name: "privacyOfficer", title: "Datenschutzbeauftragter", type: "string", group: "impressum" }),
    defineField({ name: "treuhand", title: "Treuhand", type: "string", group: "impressum" }),

    defineField({
      name: "footerTagline",
      title: "Footer – Kurztext",
      type: "text",
      rows: 3,
      group: "footer",
    }),
    defineField({
      name: "footerLinks",
      title: "Footer – rechtliche Links",
      type: "array",
      group: "footer",
      of: [
        defineArrayMember({
          type: "object",
          name: "footerLink",
          fields: [
            defineField({ name: "label", title: "Text", type: "string" }),
            defineField({ name: "href", title: "Link", type: "string" }),
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        }),
      ],
    }),

    defineField({
      name: "privacyNote",
      title: "Datenschutzhinweis (Kontaktformular)",
      type: "text",
      rows: 6,
      group: "privacy",
    }),
  ],
  preview: { prepare: () => ({ title: "Impressum, Footer & Rechtliches" }) },
});
