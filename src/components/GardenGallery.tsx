import Image from "next/image";
import { Container, Label } from "./ui";
import { Reveal } from "./Reveal";

const galleryItems = [
  {
    src: "/hero/garden-gallery-1.svg",
    title: "Gepflegte Beete",
    body: "Pflanzen, Erde und Kanten werden so gepflegt, dass der Garten ruhig und aufgeräumt wirkt.",
  },
  {
    src: "/hero/garden-gallery-2.svg",
    title: "Saubere Wege",
    body: "Schnittgut, Laub und kleine Wildwuchsflächen werden nach dem Einsatz ordentlich hinterlassen.",
  },
  {
    src: "/hero/garden-gallery-3.svg",
    title: "Saison im Blick",
    body: "Frühling, Sommer und Herbst brauchen unterschiedliche Pflege. Genau danach wird geplant.",
  },
];

export function GardenGallery() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <Reveal className="mb-10 max-w-[46rem]">
          <Label as="p" className="mb-4">
            Einblicke
          </Label>
          <h2 className="text-[clamp(2.25rem,4.4vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.03em]">
            Ein Garten soll gepflegt aussehen,{" "}
            <span className="font-serif italic text-ink-2">ohne kompliziert zu werden</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="h-full">
              <article className="h-full overflow-hidden rounded-[24px] border border-line bg-bg">
                <div className="relative aspect-[4/3] bg-line-2">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-[1.25rem] font-medium leading-[1.15] tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.6] text-ink-2">{item.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
