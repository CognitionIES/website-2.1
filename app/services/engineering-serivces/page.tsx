import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import HeroSection from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { ServicesIntro } from "./ServicesIntro";
import { ServicesSlider } from "./ServicesSlider";
import { SoftwareCarousel } from "./SoftwareCarousel";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import CTASection from "./CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Engineering Services | Plant & Product Engineering",
  description:
    "Comprehensive plant and product engineering solutions from Cognition IES — process design, piping and mechanical engineering, electrical and instrumentation, CAE/FEA/CFD, embedded systems, and more, from concept to commissioning.",
  path: "/services/engineering-serivces",
  keywords: [
    "plant engineering services",
    "product engineering services",
    "process design and optimization",
    "piping and mechanical engineering",
    "electrical and instrumentation engineering",
    "civil and structural engineering",
    "digital twin plant modernization",
    "CAE FEA CFD analysis",
    "mechanical design services",
    "hydraulic engineering services",
    "asset management and reliability",
    "embedded AI IoT cybersecurity",
    "supply chain sourcing procurement",
    "technical publications and training",
  ],
});

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
