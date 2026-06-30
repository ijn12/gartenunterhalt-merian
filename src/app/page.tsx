import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Reasons } from "@/components/Reasons";
import { GardenGallery } from "@/components/GardenGallery";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <GardenGallery />
        <Reasons />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
