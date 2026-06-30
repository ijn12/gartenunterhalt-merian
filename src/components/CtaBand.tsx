"use client";

import Link from "next/link";
import { Container } from "./ui";
import { Reveal } from "./Reveal";
import { useSiteContent } from "@/sanity/useSiteContent";

export function CtaBand() {
  const { marketing } = useSiteContent();
  return (
    <section className="bg-bg">
      <Container className="pb-20 sm:pb-28 lg:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-ink px-8 py-16 text-white sm:px-14 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-95"
              style={{
                background:
                  "radial-gradient(85% 140% at 100% 0%, rgba(255,117,32,0.52), transparent 48%), radial-gradient(70% 120% at 0% 100%, rgba(255,117,32,0.38), transparent 52%), radial-gradient(55% 90% at 65% 50%, rgba(30,150,212,0.18), transparent 55%)",
              }}
            />
            <div className="relative flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[34rem]">
                <h2 className="text-[clamp(2rem,3.8vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
                  {marketing.ctaHeadingLine1}{" "}
                  <span className="font-serif italic text-white/80">{marketing.ctaHeadingAccent}</span>?
                </h2>
                <p className="mt-4 max-w-[30rem] text-[17px] leading-[1.55] text-white/75">
                  {marketing.ctaBody}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={marketing.ctaHref}
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-[15px] font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.5)]"
                >
                  {marketing.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
