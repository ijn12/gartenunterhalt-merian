"use client";

import { motion } from "framer-motion";
import { PillButton } from "./PillButton";
import { OpeningCountdown } from "./OpeningCountdown";
import { Container, Label } from "./ui";
import { useSiteContent } from "@/sanity/useSiteContent";

export function Hero() {
  const { hero } = useSiteContent();

  return (
    <section id="top" className="relative isolate overflow-x-hidden">
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-[center_42%] bg-no-repeat lg:bg-right"
        style={{ backgroundImage: `url('${hero.backgroundImageUrl}')` }}
      />
      {/* Mobile/tablet: even scrim over centered crop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,18,26,0.82) 0%, rgba(8,18,26,0.58) 48%, rgba(8,18,26,0.52) 100%)",
        }}
      />
      {/* Desktop: lighter left-to-right scrim for copy on the dark side */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden lg:block"
        style={{
          background:
            "linear-gradient(100deg, rgba(8,18,26,0.72) 0%, rgba(8,18,26,0.45) 42%, rgba(8,18,26,0.15) 100%)",
        }}
      />

      <Container className="relative grid grid-cols-1 items-center gap-8 pb-10 pt-10 sm:gap-10 sm:pb-14 sm:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-20 lg:pt-20">
        {/* Left: copy */}
        <motion.div
          initial={{ y: 28 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="mb-4 text-[clamp(2.875rem,8.5vw,5rem)] font-medium leading-[0.98] tracking-[-0.035em] text-white sm:mb-5">
            {hero.headingLine1}{" "}
            <span className="font-serif italic font-normal text-white/80">{hero.headingAccent}</span>{" "}
            <br className="hidden sm:block" />
            {hero.headingLine2}
          </h1>

          <p className="mb-5 max-w-[29rem] text-base leading-[1.5] text-white/85 sm:mb-7 sm:text-lg">
            {hero.subcopy}
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-3.5">
            <PillButton
              href={hero.primaryCtaHref}
              variant="white"
              size="sm"
              icon={false}
              className="sm:py-[18px] sm:pl-[34px] sm:pr-7 sm:text-[15px]"
            >
              {hero.primaryCtaLabel}
            </PillButton>
            <PillButton
              href={hero.secondaryCtaHref}
              variant="outline"
              size="sm"
              icon={false}
              className="sm:py-[18px] sm:pl-[34px] sm:pr-7 sm:text-[15px]"
            >
              {hero.secondaryCtaLabel}
            </PillButton>
          </div>

          <div className="mt-6 grid max-w-sm grid-cols-2 gap-5 border-t border-white/20 pt-4 sm:mt-10 sm:gap-6 sm:pt-5">
            {hero.stats.map((s, i) => (
              <div key={s.label + i}>
                <div className="text-2xl font-medium leading-none tracking-[-0.03em] text-white sm:text-[28px]">
                  {s.value}
                </div>
                <Label as="div" className="mt-1.5 sm:mt-2" tone="light">
                  {s.label}
                </Label>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: countdown card */}
        {hero.countdownEnabled && (
          <div>
            <OpeningCountdown
              title={hero.countdownTitle}
              targetMs={hero.countdownTargetMs}
              statusLabel={hero.countdownStatusLabel}
              statusText={hero.countdownStatusText}
            />
          </div>
        )}
      </Container>
    </section>
  );
}
