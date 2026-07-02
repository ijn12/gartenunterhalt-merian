import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KontaktContent } from "./KontaktContent";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zu Gärtnerei Merian für Gartenreinigung, Bepflanzung, Baumpflege und saisonale Gartenarbeiten – direkt per Telefon oder E-Mail.",
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <KontaktContent />
      <Footer />
    </>
  );
}
