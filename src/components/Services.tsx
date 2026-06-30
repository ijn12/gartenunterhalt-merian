"use client";

import Image from "next/image";
import { Container } from "./ui";
import { Reveal } from "./Reveal";
import { PillButton } from "./PillButton";
import { serviceIcons } from "./icons";
import type { ServiceDetail, ServiceItem } from "@/lib/site";
import { useSiteContent } from "@/sanity/useSiteContent";

export function ServiceCard({ s }: { s: ServiceItem }) {
  const Icon = serviceIcons[s.icon] ?? serviceIcons.Home;
  return (
    <div className="group flex h-full flex-col gap-4 rounded-[22px] border border-line bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#d9d6cc] hover:shadow-[0_24px_50px_-28px_rgba(0,0,0,0.2)]">
      <div className="flex size-11 items-center justify-center rounded-xl bg-orange-soft text-[#7a4400] transition-transform duration-200 group-hover:scale-105">
        <Icon className="size-[22px] stroke-[1.5]" aria-hidden />
      </div>
      <h3 className="text-[22px] font-medium leading-[1.1] tracking-[-0.02em]">{s.title}</h3>
      <p className="text-[14.5px] leading-[1.55] text-ink-2">{s.desc}</p>
    </div>
  );
}

export function ServiceDetailCard({ s }: { s: ServiceDetail }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-line bg-white transition-all duration-200 hover:-translate-y-1 hover:border-[#d9d6cc] hover:shadow-[0_24px_50px_-28px_rgba(0,0,0,0.2)]">
      {s.image ? (
        <div className="relative aspect-[2/1] overflow-hidden bg-line-2">
          <Image
            src={s.image}
            alt={s.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[rgba(35,58,71,0.35)] to-transparent"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <h3 className="text-[22px] font-medium leading-[1.1] tracking-[-0.02em]">{s.title}</h3>
        <div className="flex flex-col gap-3">
          {s.paragraphs.map((p) => (
            <p key={p} className="text-[14.5px] leading-[1.55] text-ink-2">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServicesGrid() {
  const { detailServices } = useSiteContent();
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {detailServices.map((s, i) => (
        <Reveal key={s.title + i} delay={(i % 3) * 0.08} className="h-full">
          <ServiceDetailCard s={s} />
        </Reveal>
      ))}
    </div>
  );
}

export function HomeServicesGrid() {
  const { homeServices } = useSiteContent();
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {homeServices.map((s, i) => (
        <Reveal key={s.title + i} delay={(i % 3) * 0.08} className="h-full">
          <ServiceCard s={s} />
        </Reveal>
      ))}
    </div>
  );
}

export function Services() {
  const { marketing } = useSiteContent();
  return (
    <section id="services" className="bg-bg">
      <Container className="py-20 sm:py-28 lg:py-32">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 sm:mb-14 md:flex-row md:items-end">
          <Reveal>
            <h2 className="max-w-[45rem] text-[clamp(2.25rem,4.4vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.03em]">
              {marketing.servicesHeadingLine1}{" "}
              <span className="font-serif italic text-ink-2">{marketing.servicesHeadingAccent}</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <PillButton href="/buchung" variant="ghost" size="md">
              {marketing.servicesCtaLabel}
            </PillButton>
          </Reveal>
        </div>

        <HomeServicesGrid />
      </Container>
    </section>
  );
}
