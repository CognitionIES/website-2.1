"use client";

import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import Hero from "./hero";
import AboutSection from "./mainContent";
import ServicesSection from "./Services";
import IndustriesWeServe from "./industriesWeServe";
import WhyPartner from "./CTA";
import ProcessSection from "./process";
import ToolsSection from "./tool";

export default function Index() {
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0f]">
      <MegaMenu />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <IndustriesWeServe />
      <ToolsSection />
      <WhyPartner />
      <Footer />
    </div>
  );
}