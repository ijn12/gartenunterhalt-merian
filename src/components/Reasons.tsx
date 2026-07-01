"use client";

import { Container } from "./ui";
import { Reveal } from "./Reveal";
import { reasons as fallbackReasons } from "@/lib/site";
import { useSiteCms } from "@/sanity/useSiteCms";

function ReasonCard({ index, title, body }: { index: number; title: string; body: string }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="flex h-full flex-col rounded-[22px] border border-line bg-white p-7 sm:p-8">
      <div className="mb-5">
        <span className="font-mono text-[2.75rem] leading-none tracking-[-0.04em] text-orange">
          {number}
        </span>
      </div>

      <h3 className="mb-3 text-[1.35rem] font-medium leading-[1.15] tracking-[-0.02em]">{title}</h3>
      <p className="text-[15px] leading-[1.6] text-ink-2">{body}</p>
    </article>
  );
}

export function Reasons() {
  const { content } = useSiteCms();
  const items =
    content?.usps && content.usps.length > 0
      ? content.usps.map((usp) => ({ title: usp.title, body: usp.body }))
      : fallbackReasons;

  return (
    <section id="gruende" className="border-y border-line bg-bg">
      <Container className="py-16 sm:py-20 lg:py-24">
        <Reveal className="mb-10 max-w-[48rem] sm:mb-12">
          <h2 className="text-[clamp(2.25rem,4.4vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.03em]">
            Gartenpflege mit
            <br />
            <span className="font-serif italic text-ink-2">Sorgfalt</span> und Freude.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((r, i) => (
            <Reveal key={r.title + i} delay={i * 0.08} className="h-full">
              <ReasonCard index={i} title={r.title} body={r.body} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
