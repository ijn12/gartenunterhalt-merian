import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImpressumContent } from "./ImpressumContent";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben zu Gärtnerei Merian.",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <ImpressumContent />
      <Footer />
    </>
  );
}
