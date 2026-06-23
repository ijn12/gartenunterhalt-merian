import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KontaktContent } from "./KontaktContent";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zu Bolliger IT in Uerkheim – per Formular, Telefon oder E-Mail. Adresse, Öffnungszeiten und Standort auf der Karte.",
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
