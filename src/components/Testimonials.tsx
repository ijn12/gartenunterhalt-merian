"use client";

import Image from "next/image";
import { Container, Label } from "./ui";
import { Reveal } from "./Reveal";
import { QuoteIcon } from "./icons";
import { useSiteContent } from "@/sanity/useSiteContent";

export function Testimonials() {
  const { testimonials } = useSiteContent();

  return (
    <section className="bg-blue text-white">
      <Container className="py-16 sm:py-20">
        <Reveal className="mb-10 text-center sm:mb-11">
          <h2 className="text-[clamp(2rem,3.8vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em]">
            {testimonials.headingLine1}{" "}
            <span className="font-serif italic text-white/80">{testimonials.headingAccent}</span>{" "}
            {testimonials.headingLine2}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 0.1} className="h-full">
              <figure className="flex h-full flex-col gap-4 rounded-[22px] border border-white/18 bg-white/[0.08] p-6 backdrop-blur-sm">
                <QuoteIcon className="h-[22px] w-7 text-white/50" />
                <blockquote className="text-[15px] leading-[1.55] text-white/95">
                  „{t.quote}“
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 border-t border-white/15 pt-3.5">
                  {t.photoUrl ? (
                    <Image
                      src={t.photoUrl}
                      alt={t.name}
                      width={36}
                      height={36}
                      className="size-9 shrink-0 rounded-full border border-white/25 object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="size-9 shrink-0 rounded-full border border-white/25"
                      style={{
                        background:
                          "repeating-linear-gradient(135deg, rgba(255,255,255,.25) 0 6px, rgba(255,255,255,.15) 6px 12px)",
                      }}
                    />
                  )}
                  <span>
                    <span className="block text-sm font-medium text-white/95">{t.name}</span>
                    <Label tone="light">{t.role}</Label>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
