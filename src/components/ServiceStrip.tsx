"use client";

import Link from "next/link";
import { Container } from "./ui";
import { Reveal } from "./Reveal";
import { useSiteContent } from "@/sanity/useSiteContent";

export function ServiceStrip() {
  const { marketing } = useSiteContent();
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0F6FA3_0%,#1E96D4_60%,#2BA6E0_100%)] text-white">
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.18] mix-blend-soft-light"
      >
        <defs>
          <pattern id="strip-circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
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
        <rect width="100%" height="100%" fill="url(#strip-circuit)" />
      </svg>

      <Container className="relative flex flex-col items-center gap-5 py-16 text-center sm:py-20">
        <Reveal className="flex flex-col items-center gap-5">
          <h2 className="max-w-[56rem] text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.03em]">
            {marketing.stripHeadingLine1}{" "}
            <span className="font-serif italic text-white/85">{marketing.stripHeadingAccent}</span>.
          </h2>
          <p className="max-w-[34rem] text-[17px] leading-[1.55] text-white/85">{marketing.stripBody}</p>
          <Link
            href={marketing.stripCtaHref}
            className="mt-2 inline-flex items-center justify-center rounded-full border border-white bg-white px-7 py-4 text-[15px] font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.45)]"
          >
            {marketing.stripCtaLabel}
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
