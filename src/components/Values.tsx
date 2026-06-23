"use client";

import { Eye, HeartHandshake, Target, type LucideIcon } from "lucide-react";
import { Container } from "./ui";
import { Reveal } from "./Reveal";
import { values as fallbackValues } from "@/lib/site";
import { useSiteCms } from "@/sanity/useSiteCms";
import type { CmsValue } from "@/sanity/types";

const ICON_MAP: Record<CmsValue["icon"], LucideIcon> = {
  eye: Eye,
  target: Target,
  heart: HeartHandshake,
};

const FALLBACK_ICONS: LucideIcon[] = [Eye, Target, HeartHandshake];

export function Values() {
  const { content } = useSiteCms();
  const items =
    content?.values && content.values.length > 0
      ? content.values
      : fallbackValues.map((v, i) => ({
          _id: v.title,
          title: v.title,
          body: v.body,
          icon: (["eye", "target", "heart"] as const)[i] ?? "eye",
          sortOrder: i,
        }));

  return (
    <section className="bg-bg">
      <Container className="pb-12 pt-20 sm:pb-16 sm:pt-28">
        <Reveal className="mb-12 max-w-[40rem]">
          <h2 className="text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
            Wofür <span className="font-serif italic text-ink-2">Bolliger&nbsp;IT</span> steht.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 divide-y divide-line border-y border-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {items.map((v, i) => {
            const Icon =
              "icon" in v && v.icon in ICON_MAP
                ? ICON_MAP[v.icon as CmsValue["icon"]]
                : FALLBACK_ICONS[i] ?? Eye;
            return (
              <Reveal key={v.title + i} delay={i * 0.1} className="h-full">
                <div className="flex h-full flex-col gap-5 px-0 py-8 md:px-9 md:py-4">
                  <Icon className="size-9 stroke-[1.5] text-orange" aria-hidden />
                  <h3 className="font-serif text-[26px] italic leading-tight tracking-[-0.01em] text-ink">
                    {v.title}
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-ink-2">{v.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
