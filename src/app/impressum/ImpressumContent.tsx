"use client";

import { PageHero } from "@/components/PageHero";
import { Container, Label } from "@/components/ui";
import { useSiteContent } from "@/sanity/useSiteContent";

export function ImpressumContent() {
  const { contact, legal } = useSiteContent();

  const rows: { label: string; value: React.ReactNode }[] = [
    {
      label: "Adresse",
      value: (
        <>
          {contact.company}
          <br />
          {contact.owner}
          <br />
          {contact.street}
          <br />
          {contact.zip} {contact.city}
        </>
      ),
    },
    {
      label: "Telefon",
      value: (
        <>
          <a href={contact.phoneHref} className="hover:text-ink">
            {contact.phone}
          </a>
          <br />
          <a href={contact.mobileHref} className="hover:text-ink">
            {contact.mobile}
          </a>
        </>
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
    { label: "Bankverbindung", value: legal.bank },
    { label: "Hosting", value: legal.hosting },
    { label: "Verantwortlich für die Seite", value: legal.responsible },
    { label: "Datenschutzbeauftragter", value: legal.privacyOfficer },
    { label: "Treuhand", value: legal.treuhand },
  ];

  return (
    <main>
      <PageHero image="/hero/impressum.svg" title="Impressum" subtitle={legal.impressumSubtitle} />
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
        </Container>
      </section>
    </main>
  );
}
