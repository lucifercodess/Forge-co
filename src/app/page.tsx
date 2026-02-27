import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import WhatWeDo from "@/components/WhatWeDo";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import ParallaxBanner from "@/components/ParallaxBanner";
import ScrollScaleSection from "@/components/ScrollScaleSection";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050508]">
      <ScrollProgress />
      <Nav />
      <Hero />
      <WhatWeDo />
      <ScrollRevealBlock />
      <ParallaxBanner />
      <ScrollScaleSection>
        <Process />
      </ScrollScaleSection>
      <Testimonials />
      <Contact />
    </main>
  );
}
