"use client";

import Link from "next/link";
import { Container } from "./ui";
import { Reveal } from "./Reveal";
import { ArrowRight } from "./icons";
import { useSiteContent } from "@/sanity/useSiteContent";

export function OfferBand() {
  const { offer } = useSiteContent();
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0F6FA3_0%,#1E96D4_60%,#2BA6E0_100%)] text-white">
      <svg aria-hidden className="absolute inset-0 h-full w-full opacity-[0.16] mix-blend-soft-light">
        <defs>
          <pattern id="offer-circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M0 20h30v-20M40 0v30h40M0 60h20v20M40 80v-20h40M60 40h20"
              stroke="#fff"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="30" cy="20" r="2.5" fill="#fff" />
            <circle cx="40" cy="30" r="2.5" fill="#fff" />
            <circle cx="20" cy="60" r="2.5" fill="#fff" />
            <circle cx="60" cy="40" r="2.5" fill="#fff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#offer-circuit)" />
      </svg>

      <Container className="relative py-20 sm:py-24">
        <Reveal className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[38rem]">
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">
              {offer.title}
            </h2>
            <p className="mt-4 text-[17px] leading-[1.55] text-white/85">{offer.body}</p>
            {offer.deadline ? (
              <p className="mt-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-[13px] font-medium text-white">
                {offer.deadline}
              </p>
            ) : null}
          </div>
          <Link
            href={offer.ctaHref}
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-[15px] font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.45)]"
          >
            {offer.ctaLabel}
            <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
