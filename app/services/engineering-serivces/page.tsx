"use client";

import HeroSection from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { ServicesIntro } from "./ServicesIntro";
import { ServicesSlider } from "./ServicesSlider";
import { SoftwareCarousel } from "./SoftwareCarousel";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import CTASection from "./CTASection";

const Index = () => {
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0f]">
      <MegaMenu />
      <HeroSection />
      <AboutSection />
      <ServicesIntro />
      <ServicesSlider />
      <SoftwareCarousel />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;