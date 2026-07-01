"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "./ui";
import { Reveal } from "./Reveal";
import { useSiteContent } from "@/sanity/useSiteContent";

export function CtaBand() {
  const { marketing, offer } = useSiteContent();
  return (
    <section id="kontakt-cta" className="bg-bg">
      <Container className="pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-ink px-8 py-16 text-white sm:px-14 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-95"
              style={{
                background:
                  "radial-gradient(80% 130% at 100% 0%, rgba(124,105,168,0.55), transparent 50%), radial-gradient(70% 120% at 0% 100%, rgba(124,105,168,0.32), transparent 55%), radial-gradient(55% 90% at 60% 50%, rgba(107,143,85,0.26), transparent 55%)",
              }}
            />
            <Image
              src="/illustrations/lavender.png"
              alt=""
              aria-hidden
              width={220}
              height={320}
              className="pointer-events-none absolute -bottom-8 right-6 hidden h-auto w-28 rotate-6 opacity-90 drop-shadow-[0_16px_28px_rgba(0,0,0,0.35)] sm:block lg:w-36"
            />

            <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[38rem]">
                {offer.deadline ? (
                  <p className="mb-4 inline-flex rounded-full bg-white/15 px-3 py-1 text-[13px] font-medium tracking-[0.02em] text-white">
                    {offer.deadline}
                  </p>
                ) : null}
                <h2 className="text-[clamp(2rem,3.8vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
                  {offer.title}
                </h2>
                <p className="mt-4 max-w-[32rem] text-[17px] leading-[1.55] text-white/80">
                  {marketing.ctaHeadingLine1}{" "}
                  <span className="text-white">{marketing.ctaHeadingAccent}?</span> {marketing.ctaBody}
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
