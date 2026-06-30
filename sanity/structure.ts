import type { StructureResolver } from "sanity/structure";

const singleton = (
  S: Parameters<StructureResolver>[0],
  id: string,
  title: string,
) => S.listItem().title(title).id(id).child(S.document().schemaType(id).documentId(id));

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Gartenunterhalt Merian")
    .items([
      S.listItem()
        .title("Inhalte (Seiten)")
        .child(
          S.list()
            .title("Inhalte")
            .items([
              singleton(S, "heroSection", "Startseite – Hero"),
              singleton(S, "aboutSection", "Über uns"),
              singleton(S, "marketingSections", "Startseite – Banner & CTA"),
              singleton(S, "servicesContent", "Gartenleistungen"),
              S.documentTypeListItem("usp").title("USPs / Gründe"),
              S.documentTypeListItem("value").title("Arbeitsweise / Werte"),
              singleton(S, "testimonialsSection", "Hinweise / Stimmen"),
              singleton(S, "pricing", "Richtpreise"),
              singleton(S, "offerSection", "Angebot"),
              singleton(S, "bookingContent", "Buchung"),
              singleton(S, "contactInfo", "Kontakt & Standort"),
              singleton(S, "legalContent", "Impressum, Footer & Rechtliches"),
            ]),
        ),
      S.divider(),
      singleton(S, "siteBanner", "Laufbanner"),
      S.documentTypeListItem("popup").title("Pop-ups & Ferien"),
      S.documentTypeListItem("story").title("Stories / News"),
    ]);
