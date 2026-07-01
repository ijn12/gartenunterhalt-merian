import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BuchungContent } from "./BuchungContent";

export const metadata: Metadata = {
  title: "Buchung",
  description:
    "Termin bei Gärtnerei Merian für Gartenreinigung, Bepflanzung, Baumpflege oder saisonale Gartenarbeiten direkt planen oder anfragen.",
};

export default function BuchungPage() {
  return (
    <>
      <Header />
      <BuchungContent />
      <Footer />
    </>
  );
}
