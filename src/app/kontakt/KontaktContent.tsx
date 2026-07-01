"use client";

import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Container, Label } from "@/components/ui";
import { PhoneIcon, MailIcon, PinIcon } from "@/components/icons";
import { useSiteContent } from "@/sanity/useSiteContent";

export function KontaktContent() {
  const { contact } = useSiteContent();

  return (
    <main>
      <PageHero
        image="/photos/spring-flowers.jpg"
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
                  label: "Einsatzgebiet",
                  value: [contact.street, `${contact.zip} ${contact.city}`.trim()]
                    .filter(Boolean)
                    .join(" · "),
                },
                { Icon: PhoneIcon, label: "Telefon", value: contact.phone, href: contact.phoneHref },
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
          </div>

          {/* Right: form */}
          <ContactForm />
        </Container>
      </section>
    </main>
  );
}
