"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "./ui";
import { Reveal } from "./Reveal";
import { ArrowRight } from "./icons";
import { useSiteContent } from "@/sanity/useSiteContent";

export function OfferBand() {
  const { offer } = useSiteContent();
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-95"
        style={{
          background:
            "radial-gradient(80% 130% at 0% 0%, rgba(124,105,168,0.5), transparent 50%), radial-gradient(70% 120% at 100% 100%, rgba(124,105,168,0.32), transparent 55%)",
        }}
      />
      <Image
        src="/illustrations/lavender.png"
        alt=""
        aria-hidden
        width={220}
        height={320}
        className="pointer-events-none absolute -bottom-6 right-6 hidden h-auto w-28 rotate-6 opacity-90 drop-shadow-[0_16px_28px_rgba(0,0,0,0.35)] sm:block lg:w-36"
      />

      <Container className="relative py-20 sm:py-24">
        <Reveal className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[40rem]">
            {offer.deadline ? (
              <p className="mb-4 inline-flex rounded-full bg-white/15 px-3 py-1 text-[13px] font-medium tracking-[0.02em] text-white">
                {offer.deadline}
              </p>
            ) : null}
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">
              {offer.title}
            </h2>
            <p className="mt-4 max-w-[34rem] text-[17px] leading-[1.55] text-white/85">{offer.body}</p>
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
