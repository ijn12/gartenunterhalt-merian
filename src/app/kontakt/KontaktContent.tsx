"use client";

import { PageHero } from "@/components/PageHero";
import { Container, Label } from "@/components/ui";
import { PhoneIcon, MailIcon, PinIcon } from "@/components/icons";
import { useSiteContent } from "@/sanity/useSiteContent";

export function KontaktContent() {
  const { contact } = useSiteContent();
  const region = [contact.street, `${contact.zip} ${contact.city}`.trim()]
    .filter(Boolean)
    .join(" · ");

  return (
    <main>
      <PageHero
        image="/photos/spring-flowers.jpg"
        title={
          <>
            Fragen zum <span className="font-serif italic text-white/75">Garten</span>?
          </>
        }
        subtitle="Melden Sie sich direkt per Telefon oder E-Mail – am besten mit ein paar Worten dazu, welche Arbeiten anstehen."
      />

      <section className="bg-bg">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-medium tracking-[-0.02em]">{contact.company}</h2>
              <p className="mt-1 text-[15px] text-ink-2">{contact.owner}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href={contact.phoneHref}
                className="group rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_18px_40px_-28px_rgba(35,58,71,0.5)]"
              >
                <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-orange-soft text-lavender-deep">
                  <PhoneIcon className="size-5" />
                </span>
                <Label as="div" className="mb-1">
                  Telefon
                </Label>
                <span className="text-[17px] font-medium">{contact.phone}</span>
              </a>
              <a
                href={contact.emailHref}
                className="group rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_18px_40px_-28px_rgba(35,58,71,0.5)]"
              >
                <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-orange-soft text-lavender-deep">
                  <MailIcon className="size-5" />
                </span>
                <Label as="div" className="mb-1">
                  E-Mail
                </Label>
                <span className="break-all text-[17px] font-medium">{contact.email}</span>
              </a>
            </div>

            {region ? (
              <div className="mt-4 flex items-center justify-center gap-2.5 rounded-2xl border border-line bg-white px-6 py-4 text-[15px] text-ink-2">
                <PinIcon className="size-[18px] text-ink-3" />
                <span>
                  <span className="font-medium text-ink">Einsatzgebiet:</span> {region}
                </span>
              </div>
            ) : null}
          </div>
        </Container>
      </section>
    </main>
  );
}
