import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KontaktContent } from "./KontaktContent";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zu Gartenunterhalt Merian für Schnittarbeiten, Rasenpflege und saisonale Gartenarbeiten – per E-Mail, Telefon oder Kontaktformular.",
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
