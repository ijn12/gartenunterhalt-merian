"use client";

import { PageHero } from "@/components/PageHero";
import { PillButton } from "@/components/PillButton";
import { Container, Label } from "@/components/ui";
import { CalendarIcon, CheckIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { useSiteContent } from "@/sanity/useSiteContent";

export function BuchungContent() {
  const { booking, contact } = useSiteContent();
  const hasEmbed = Boolean(booking.embedUrl);
  const hasProviderLink = Boolean(booking.providerUrl);

  return (
    <main>
      <PageHero
        image="/photos/tree-pruning.jpg"
        title={
          <>
            Termin <span className="font-serif italic text-white/75">buchen</span>.
          </>
        }
        subtitle="Direkt einen Einsatz planen oder die gewünschte Gartenarbeit zuerst kurz abklären."
      />

      <section className="bg-bg">
        <Container className="grid grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:py-24">
          <div className="flex flex-col gap-7">
            <div>
              <Label as="p" className="mb-4">
                {booking.eyebrow}
              </Label>
              <h1 className="max-w-[38rem] text-[clamp(2.25rem,4.4vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.03em]">
                {booking.title}
              </h1>
              <p className="mt-5 max-w-[35rem] text-[17px] leading-[1.6] text-ink-2">
                {booking.intro}
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-orange-soft text-lavender-deep">
                  <CalendarIcon className="size-5" />
                </span>
                <div>
                  <h2 className="text-xl font-medium tracking-[-0.02em]">Gut vorbereitet buchen</h2>
                  <p className="text-sm text-ink-3">Das hilft bei der schnellen Einschätzung.</p>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {booking.notes.map((note) => (
                  <li key={note} className="grid grid-cols-[auto_1fr] gap-3 text-[15px] leading-[1.55] text-ink-2">
                    <CheckIcon className="mt-0.5 size-5 text-orange" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={contact.phoneHref}
                className="rounded-2xl border border-line bg-white p-5 transition-colors hover:border-ink/25"
              >
                <PhoneIcon className="mb-3 size-5 text-ink-2" />
                <Label as="div" className="mb-1">
                  Telefon
                </Label>
                <span className="text-[15px] font-medium">{contact.phone}</span>
              </a>
              <a
                href={contact.emailHref}
                className="rounded-2xl border border-line bg-white p-5 transition-colors hover:border-ink/25"
              >
                <MailIcon className="mb-3 size-5 text-ink-2" />
                <Label as="div" className="mb-1">
                  E-Mail
                </Label>
                <span className="text-[15px] font-medium">{contact.email}</span>
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-line bg-white p-5 shadow-[0_30px_70px_-50px_rgba(35,58,71,0.45)] sm:p-7">
            {hasEmbed ? (
              <iframe
                src={booking.embedUrl}
                title={`${booking.providerName} – Terminbuchung`}
                loading="lazy"
                className="h-[720px] w-full rounded-2xl border border-line"
              />
            ) : (
              <div className="flex min-h-[520px] flex-col justify-between rounded-2xl border border-dashed border-line bg-bg p-7 sm:p-9">
                <div>
                  <Label as="p" className="mb-4">
                    {booking.providerName}
                  </Label>
                  <h2 className="mb-4 text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.03] tracking-[-0.03em]">
                    {booking.fallbackTitle}
                  </h2>
                  <p className="max-w-[32rem] text-[16px] leading-[1.6] text-ink-2">
                    {booking.fallbackBody}
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {hasProviderLink ? (
                    <PillButton href={booking.providerUrl} size="md">
                      Direkt buchen
                    </PillButton>
                  ) : null}
                  <PillButton href={booking.primaryCtaHref} size="md" icon={false}>
                    {booking.primaryCtaLabel}
                  </PillButton>
                  <PillButton href={booking.secondaryCtaHref} variant="light" size="md" icon={false}>
                    {booking.secondaryCtaLabel}
                  </PillButton>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}
