import { defineArrayMember, defineField, defineType } from "sanity";

export const legalContent = defineType({
  name: "legalContent",
  title: "Impressum, Footer & Rechtliches",
  type: "document",
  groups: [
    { name: "impressum", title: "Impressum", default: true },
    { name: "footer", title: "Footer" },
  ],
  fields: [
    defineField({ name: "impressumSubtitle", title: "Impressum – Untertitel", type: "string", group: "impressum", initialValue: "Angaben gemäss schweizerischem Recht." }),

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
  ],
  preview: { prepare: () => ({ title: "Impressum, Footer & Rechtliches" }) },
});
