"use client";

import Image from "next/image";
import { PillButton } from "./PillButton";
import { Container, Label } from "./ui";
import { Reveal } from "./Reveal";
import { useSiteContent } from "@/sanity/useSiteContent";

export function About() {
  const { about } = useSiteContent();

  return (
    <section id="ueber" className="border-y border-line bg-white">
      <Container className="grid grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-24">
        <Reveal>
          <h2 className="mb-6 text-[clamp(2.25rem,4.4vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.03em]">
            {about.headingLine1}
            <br />
            <span className="font-serif italic text-ink-2">{about.headingAccent}</span>
            <br />
            <span className="whitespace-nowrap">{about.headingLine3}</span>
          </h2>
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`${i === about.paragraphs.length - 1 ? "mb-7" : "mb-5"} max-w-[30rem] text-[17px] leading-[1.6] text-ink-2`}
            >
              {p}
            </p>
          ))}
          <div className="flex flex-wrap items-center gap-4">
            <PillButton href={about.ctaHref} size="md" icon={false}>
              {about.ctaLabel}
            </PillButton>
            <span className="font-mono text-xs text-ink-3">{about.note}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="relative aspect-[25/24] overflow-hidden rounded-3xl border border-line bg-line-2">
            <Image
              src={about.photoUrl}
              alt={about.photoAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_15%]"
              priority
            />

            <div className="absolute bottom-5 left-5 flex max-w-[20rem] items-center gap-3 rounded-2xl border border-line bg-white/90 px-4 py-3 backdrop-blur-md">
              <div className="flex size-9 items-center justify-center rounded-full bg-blue text-sm font-semibold tracking-[-0.02em] text-white">
                {about.badgeInitials}
              </div>
              <div>
                <div className="text-sm font-medium tracking-[-0.01em]">{about.badgeName}</div>
                <Label>{about.badgeRole}</Label>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
