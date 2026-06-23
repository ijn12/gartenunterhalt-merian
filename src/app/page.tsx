import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ServiceStrip } from "@/components/ServiceStrip";
import { Services } from "@/components/Services";
import { Stories } from "@/components/cms/Stories";
import { Reasons } from "@/components/Reasons";
import { Testimonials } from "@/components/Testimonials";
import { Values } from "@/components/Values";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ServiceStrip />
        <Services />
        <Reasons />
        <Stories />
        <Testimonials />
        <Values />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
