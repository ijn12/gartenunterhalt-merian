"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Container } from "../ui";
import { Reveal } from "../Reveal";
import { useSiteCms } from "@/sanity/useSiteCms";

export function Stories() {
  const { content } = useSiteCms();
  const stories = content?.stories ?? [];

  if (stories.length === 0) return null;

  return (
    <section className="border-y border-line bg-white">
      <Container className="py-14 sm:py-16 lg:py-20">
        <Reveal className="mb-10 max-w-[40rem]">
          <h2 className="text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
            Aktuelles von{" "}
            <span className="font-serif italic text-ink-2">Bolliger&nbsp;IT</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, i) => (
            <Reveal key={story._id} delay={i * 0.08} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-[22px] border border-line bg-bg">
                {story.imageUrl && (
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={story.imageUrl}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  {story.publishedAt && (
                    <time
                      dateTime={story.publishedAt}
                      className="mb-3 text-[12px] font-medium uppercase tracking-[0.08em] text-ink-3"
                    >
                      {new Date(story.publishedAt).toLocaleDateString("de-CH", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  )}
                  <h3 className="mb-3 text-[1.25rem] font-medium leading-[1.15] tracking-[-0.02em]">
                    {story.title}
                  </h3>
                  {story.excerpt && (
                    <p className="mb-4 text-[15px] leading-[1.6] text-ink-2">{story.excerpt}</p>
                  )}
                  {story.body && story.body.length > 0 && (
                    <div className="prose prose-sm max-w-none text-ink-2 [&_p]:text-[15px] [&_p]:leading-[1.6]">
                      <PortableText value={story.body} />
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
