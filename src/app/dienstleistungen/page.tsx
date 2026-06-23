import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ServicesGrid } from "@/components/Services";
import { OfferBand } from "@/components/OfferBand";
import { Tariffs } from "@/components/Tariffs";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Dienstleistungen",
  description:
    "Persönliche Beratung, Reparaturen, Hilfe bei Ihnen zuhause, Schulungen, Neugeräte und Linux statt Windows – die Dienstleistungen von Bolliger IT im Überblick.",
};

export default function DienstleistungenPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/hero/dienstleistungen.svg"
          title={
            <>
              Was ich für Sie{" "}
              <span className="font-serif italic text-white/75">tun kann</span>.
            </>
          }
          subtitle="Ein Ansprechpartner für alles, was piept, blinkt oder nicht mehr startet – vom Heim-WLAN über Reparaturen bis zum Umstieg auf Linux."
        />

        <section className="bg-bg">
          <Container className="py-16 sm:py-20 lg:py-24">
            <ServicesGrid />
          </Container>
        </section>

        <OfferBand />
        <Tariffs />
      </main>
      <Footer />
    </>
  );
}
