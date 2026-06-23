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
              singleton(S, "aboutSection", "Über mich (Inhaber)"),
              singleton(S, "marketingSections", "Startseite – Banner & CTA"),
              singleton(S, "servicesContent", "Dienstleistungen"),
              S.documentTypeListItem("usp").title("USPs / Gründe"),
              S.documentTypeListItem("value").title("Vision / Mission / Philosophie"),
              singleton(S, "testimonialsSection", "Kundenstimmen"),
              singleton(S, "pricing", "Tarife & Preise"),
              singleton(S, "offerSection", "Angebot"),
              singleton(S, "contactInfo", "Kontakt & Standort"),
              singleton(S, "legalContent", "Impressum, Footer & Rechtliches"),
            ]),
        ),
      S.divider(),
      singleton(S, "siteBanner", "Laufbanner"),
      S.documentTypeListItem("popup").title("Pop-ups & Ferien"),
      S.documentTypeListItem("story").title("Stories / News"),
    ]);
