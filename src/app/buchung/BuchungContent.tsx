"use client";

import { PageHero } from "@/components/PageHero";
import { PillButton } from "@/components/PillButton";
import { CalEmbed } from "@/components/CalEmbed";
import { Label } from "@/components/ui";
import { useSiteContent } from "@/sanity/useSiteContent";

export function BuchungContent() {
  const { booking } = useSiteContent();
  const hasCal = Boolean(booking.calLink);
  const hasEmbed = Boolean(booking.embedUrl);
  const hasProviderLink = Boolean(booking.providerUrl);

  function renderEmbed() {
    if (hasCal) {
      // No fixed height and no overflow-hidden clipping: the box grows with the
      // widget's real content height, so the page scrolls instead of the embed.
      return (
        <div className="w-full overflow-hidden rounded-2xl border border-line">
          <CalEmbed
            calLink={booking.calLink}
            calOrigin={booking.calOrigin}
            namespace={booking.calNamespace}
          />
        </div>
      );
    }

    if (hasEmbed) {
      return (
        <iframe
          src={booking.embedUrl}
          title={`${booking.providerName} – Terminbuchung`}
          loading="lazy"
          className="h-[780px] w-full rounded-2xl border border-line"
        />
      );
    }

    return (
      <div className="flex min-h-[520px] w-full flex-col justify-between rounded-2xl border border-dashed border-line bg-bg p-7 sm:p-9">
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
    );
  }

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
        {/*
          The Cal.com embed script only initializes one inline instance per
          namespace, so it must be mounted exactly once. Mobile vs. desktop
          only differ in the surrounding "card" chrome, applied responsively.
          Mobile: full-width right under the hero photo, no card chrome.
          Desktop/tablet: framed, padded card inside the page container.
        */}
        <div className="mx-auto w-full max-w-[80rem] sm:px-8 sm:py-16 md:py-20 lg:px-10 lg:py-24">
          <div className="border-line bg-white sm:rounded-[28px] sm:border sm:p-6 sm:shadow-[0_30px_70px_-50px_rgba(35,58,71,0.45)]">
            {renderEmbed()}
          </div>
        </div>
      </section>
    </main>
  );
}
