"use client";

import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui";
import { useSiteContent } from "@/sanity/useSiteContent";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-line-2 py-6 first:pt-0 last:border-0 last:pb-0">
      <h2 className="text-lg font-medium tracking-[-0.02em] text-ink">{title}</h2>
      <div className="mt-2 space-y-3 text-[15px] leading-[1.65] text-ink-2">{children}</div>
    </div>
  );
}

export function DatenschutzContent() {
  const { contact } = useSiteContent();
  const stand = new Intl.DateTimeFormat("de-CH", { month: "long", year: "numeric" }).format(new Date());

  return (
    <main>
      <PageHero
        image="/photos/garden-path.jpg"
        title="Datenschutz"
        subtitle="Kurz und verständlich: welche Daten diese Website bearbeitet und wofür."
      />

      <section className="bg-bg">
        <Container className="py-16 sm:py-20">
          <div className="max-w-[44rem] rounded-2xl border border-line bg-white px-6 py-2 sm:px-8">
            <Section title="Verantwortliche Stelle">
              <p>
                Verantwortlich für die Datenbearbeitung auf dieser Website ist:
                <br />
                {contact.company}, {contact.owner}
                <br />
                {contact.street}
                {contact.city ? `, ${contact.zip} ${contact.city}` : ""}
                <br />
                <a href={contact.emailHref} className="hover:text-ink">
                  {contact.email}
                </a>{" "}
                ·{" "}
                <a href={contact.phoneHref} className="hover:text-ink">
                  {contact.phone}
                </a>
              </p>
            </Section>

            <Section title="Server-Logfiles">
              <p>
                Beim Aufrufen dieser Website erhebt unser Hosting-Anbieter automatisch technische
                Zugriffsdaten, die Ihr Browser übermittelt – etwa IP-Adresse, Datum und Uhrzeit,
                aufgerufene Seite sowie Browser- und Betriebssystemtyp. Diese Daten dienen ausschliesslich
                der technischen Sicherheit und Stabilität der Website und werden nicht mit anderen Daten
                zusammengeführt.
              </p>
            </Section>

            <Section title="Terminbuchung über Cal.com">
              <p>
                Für die Online-Terminbuchung binden wir den Buchungsdienst Cal.com ein (Anzeige über
                app.cal.eu). Wenn Sie darüber einen Termin anfragen, werden die von Ihnen eingegebenen
                Angaben – etwa Name, E-Mail-Adresse und Terminwunsch – direkt an Cal.com übermittelt und
                dort verarbeitet, um die Buchung zu ermöglichen. Es gilt zusätzlich die
                Datenschutzerklärung von{" "}
                <a
                  href="https://cal.com/privacy"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline decoration-line-2 underline-offset-2 hover:text-ink"
                >
                  Cal.com
                </a>
                .
              </p>
            </Section>

            <Section title="Kontakt per Telefon oder E-Mail">
              <p>
                Wenn Sie uns per Telefon oder E-Mail kontaktieren, verwenden wir Ihre Angaben
                ausschliesslich zur Bearbeitung Ihrer Anfrage. Diese Kommunikation läuft über Ihr eigenes
                E-Mail-Programm bzw. Telefon und nicht über ein Formular auf dieser Website.
              </p>
            </Section>

            <Section title="Cookies & lokaler Speicher">
              <p>
                Diese Website selbst setzt keine Tracking- oder Werbe-Cookies. Lediglich technisch
                notwendige Einträge im lokalen Speicher Ihres Browsers (localStorage) werden verwendet,
                damit z.&nbsp;B. ein bereits geschlossener Hinweis-Banner nicht erneut angezeigt wird. Der
                eingebundene Buchungsdienst Cal.com kann eigene Cookies setzen; hierfür gilt dessen
                Datenschutzerklärung.
              </p>
            </Section>

            <Section title="Ihre Rechte">
              <p>
                Nach dem Schweizer Datenschutzgesetz (DSG) haben Sie das Recht auf Auskunft über die von
                uns bearbeiteten Daten sowie auf deren Berichtigung, Löschung oder Einschränkung der
                Bearbeitung. Wenden Sie sich dazu einfach an die oben genannte Kontaktadresse.
              </p>
            </Section>

            <Section title="Änderungen dieser Erklärung">
              <p>
                Wir passen diese Erklärung an, sobald sich die Website oder die rechtlichen Vorgaben
                ändern. Es gilt jeweils die aktuell auf dieser Seite veröffentlichte Fassung.
              </p>
              <p className="text-[13px] text-ink-3">Stand: {stand}</p>
            </Section>
          </div>
        </Container>
      </section>
    </main>
  );
}
