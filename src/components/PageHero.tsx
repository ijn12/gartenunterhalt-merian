import type { ReactNode } from "react";
import { Container } from "./ui";

type PageHeroProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  /** Background image path (garden photos live in /public/photos). */
  image?: string;
};

export function PageHero({ title, subtitle, image = "/photos/garden-path.jpg" }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(18,30,14,0.84) 0%, rgba(18,30,14,0.58) 50%, rgba(18,30,14,0.32) 100%)",
        }}
      />
      <Container className="relative pb-16 pt-16 sm:pb-20 sm:pt-24">
        <h1 className="max-w-[40rem] text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.035em] text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-[34rem] text-lg leading-[1.5] text-white/85">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}
