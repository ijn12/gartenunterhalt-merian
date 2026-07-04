import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DatenschutzContent } from "./DatenschutzContent";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Gärtnerei Merian: welche Daten diese Website bearbeitet und wofür.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <DatenschutzContent />
      <Footer />
    </>
  );
}
