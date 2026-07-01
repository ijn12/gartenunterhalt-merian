"use client";

import Image from "next/image";
import { Container, Label } from "./ui";
import { Reveal } from "./Reveal";
import { steps } from "@/lib/site";

const stepImages = [
  "/illustrations/step-1.png",
  "/illustrations/step-2.png",
  "/illustrations/step-3.png",
];

export function Steps() {
  return (
    <section id="ablauf" className="border-y border-line bg-sage">
      <Container className="py-16 sm:py-20 lg:py-24">
        <Reveal className="mb-10 max-w-[46rem] sm:mb-14">
          <Label as="p" className="mb-4">
            Ablauf
          </Label>
          <h2 className="text-[clamp(2.25rem,4.4vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.03em]">
            So einfach{" "}
            <span className="font-serif italic text-ink-2">geht&rsquo;s</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="h-full">
              <article className="flex h-full flex-col rounded-[22px] border border-line bg-white p-7 sm:p-8">
                <Image
                  src={stepImages[i] ?? stepImages[0]}
                  alt={`Schritt ${i + 1}`}
                  width={120}
                  height={120}
                  className="mb-6 h-16 w-16 object-contain object-left sm:h-[72px] sm:w-[72px]"
                />
                <h3 className="mb-2.5 text-[1.35rem] font-medium leading-[1.15] tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-ink-2">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
