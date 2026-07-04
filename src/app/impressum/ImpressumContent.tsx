"use client";

import { PageHero } from "@/components/PageHero";
import { Container, Label } from "@/components/ui";
import { useSiteContent } from "@/sanity/useSiteContent";

export function ImpressumContent() {
  const { contact, legal } = useSiteContent();

  const rows: { label: string; value: React.ReactNode }[] = [
    {
      label: "Inhaber",
      value: (
        <>
          {contact.company}
          <br />
          {contact.owner}
          <br />
          {contact.street}
          {contact.city ? (
            <>
              <br />
              {contact.zip} {contact.city}
            </>
          ) : null}
        </>
      ),
    },
    {
      label: "Telefon",
      value: (
        <a href={contact.phoneHref} className="hover:text-ink">
          {contact.phone}
        </a>
      ),
    },
    {
      label: "E-Mail",
      value: (
        <a href={contact.emailHref} className="hover:text-ink">
          {contact.email}
        </a>
      ),
    },
    { label: "Verantwortlich für den Inhalt", value: contact.owner },
  ];

  return (
    <main>
      <PageHero image="/photos/magnolia.jpg" title="Impressum" subtitle={legal.impressumSubtitle} />
      <section className="bg-bg">
        <Container className="py-16 sm:py-20">
          <dl className="max-w-[44rem] overflow-hidden rounded-2xl border border-line bg-white">
            {rows.map((r, i) => (
              <div
                key={r.label}
                className={`grid grid-cols-1 gap-1 px-6 py-5 sm:grid-cols-[200px_1fr] sm:gap-6 ${
                  i !== rows.length - 1 ? "border-b border-line-2" : ""
                }`}
              >
                <Label as="dt">{r.label}</Label>
                <dd className="text-[15px] leading-[1.6] text-ink-2">{r.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mx-auto mt-8 max-w-[44rem] space-y-3 text-[13.5px] leading-[1.6] text-ink-3">
            <p>
              <strong className="font-medium text-ink-2">Haftungsausschluss:</strong> Für die Inhalte
              externer Links, auf die diese Website verweist, wird keine Haftung übernommen – für deren
              Inhalt sind ausschliesslich die jeweiligen Betreiber verantwortlich.
            </p>
            <p>
              <strong className="font-medium text-ink-2">Urheberrecht:</strong> Alle Texte, Bilder und
              Grafiken auf dieser Website sind urheberrechtlich geschützt und dürfen ohne Zustimmung
              nicht weiterverwendet werden.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
