"use client";

import { Container, Label } from "./ui";
import { Reveal } from "./Reveal";
import { useSiteContent } from "@/sanity/useSiteContent";

function RateTable({
  title,
  rows,
}: {
  title: string;
  rows: { label: string; price: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white">
      <Label as="div" className="border-b border-line px-6 py-4">
        {title}
      </Label>
      <dl>
        {rows.map((r, i) => (
          <div
            key={r.label + i}
            className={`flex items-center justify-between gap-6 px-6 py-4 ${
              i !== rows.length - 1 ? "border-b border-line-2" : ""
            }`}
          >
            <dt className="text-[15px] text-ink-2">{r.label}</dt>
            <dd className="shrink-0 font-medium tracking-[-0.01em] tabular-nums">{r.price}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function Tariffs() {
  const { pricing } = useSiteContent();
  return (
    <section className="border-t border-line bg-bg">
      <Container className="py-20 sm:py-24">
        <Reveal className="mb-10 max-w-[40rem]">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.04] tracking-[-0.03em]">
            {pricing.heading}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <RateTable title={pricing.tariffsTitle} rows={pricing.tariffs} />
          </Reveal>
          <Reveal delay={0.1}>
            <RateTable title={pricing.wegpauschalenTitle} rows={pricing.wegpauschalen} />
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-[52rem] text-[13.5px] leading-[1.6] text-ink-3">{pricing.tariffNote}</p>
        </Reveal>
      </Container>
    </section>
  );
}
