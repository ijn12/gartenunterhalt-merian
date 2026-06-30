"use client";

import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { StandortMap } from "@/components/StandortMap";
import { Container, Label } from "@/components/ui";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "@/components/icons";
import { useSiteContent } from "@/sanity/useSiteContent";

export function KontaktContent() {
  const { contact, opening } = useSiteContent();

  return (
    <main>
      <PageHero
        image="/hero/kontakt.svg"
        title={
          <>
            Fragen zum <span className="font-serif italic text-white/75">Garten</span>?
          </>
        }
        subtitle="Schreiben Sie kurz, welche Arbeiten anstehen. Für Termine, Fotos oder erste Abklärungen können Sie sich auch direkt per Telefon oder E-Mail melden."
      />

      <section className="bg-bg">
        <Container className="grid grid-cols-1 items-start gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
          {/* Left: details */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="mb-1 text-xl font-medium tracking-[-0.02em]">{contact.company}</h2>
              <p className="text-[15px] text-ink-2">{contact.owner}</p>
            </div>

            <div className="flex flex-col">
              {[
                {
                  Icon: PinIcon,
                  label: "Adresse",
                  value: `${contact.street}, ${contact.zip} ${contact.city}`,
                },
                { Icon: PhoneIcon, label: "Telefon", value: contact.phone, href: contact.phoneHref },
                { Icon: PhoneIcon, label: "Mobile", value: contact.mobile, href: contact.mobileHref },
                { Icon: MailIcon, label: "E-Mail", value: contact.email, href: contact.emailHref },
              ].map(({ Icon, label, value, href }) => {
                const inner = (
                  <div className="grid grid-cols-[auto_1fr] items-center gap-4 border-b border-line py-3.5 transition-colors group-hover:border-ink/20">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-white text-ink-2 ring-1 ring-line">
                      <Icon className="size-[18px]" />
                    </span>
                    <span>
                      <Label className="block">{label}</Label>
                      <span className="block text-[15px] text-ink">{value}</span>
                    </span>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} className="group">
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="group">
                    {inner}
                  </div>
                );
              })}
            </div>

            {/* Termine */}
            <div className="rounded-2xl border border-line bg-white p-6">
              <div className="mb-4 flex items-center gap-2.5">
                <ClockIcon className="size-[18px] text-ink-2" />
                <Label>{opening.title}</Label>
              </div>
              <dl className="flex flex-col">
                {opening.hours.map((o, i) => (
                  <div
                    key={o.day + i}
                    className={`flex items-center justify-between gap-6 py-2.5 ${
                      i !== opening.hours.length - 1 ? "border-b border-line-2" : ""
                    }`}
                  >
                    <dt className="text-[15px] text-ink-2">{o.day}</dt>
                    <dd className="text-[15px] font-medium tabular-nums">{o.time}</dd>
                  </div>
                ))}
              </dl>
              <Label as="p" className="mt-3">
                {opening.note}
              </Label>
            </div>

            {/* Abwesenheiten */}
            <div className="rounded-2xl border border-line bg-white p-6">
              <Label as="div" className="mb-4">
                {opening.holidaysTitle}
              </Label>
              <dl className="flex flex-col">
                {opening.holidays.map((h, i) => (
                  <div
                    key={h.label + i}
                    className={`flex items-center justify-between gap-6 py-2.5 ${
                      i !== opening.holidays.length - 1 ? "border-b border-line-2" : ""
                    }`}
                  >
                    <dt className="text-[15px] text-ink-2">{h.label}</dt>
                    <dd className="text-[14px] text-ink tabular-nums">{h.range}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right: form */}
          <ContactForm />
        </Container>
      </section>

      {/* Standort */}
      <section className="border-t border-line bg-white">
        <Container className="py-16 sm:py-20">
          <div className="mb-8 flex items-end justify-between gap-6">
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-[-0.03em]">Standort</h2>
            <Label>
              {contact.zip} {contact.city}
            </Label>
          </div>
          <div className="h-[420px] w-full">
            <StandortMap />
          </div>
        </Container>
      </section>
    </main>
  );
}
