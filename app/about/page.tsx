"use client";

// AboutUs Page
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import Hero from "./hero"
//import CompanyStory from "./CompanyStory";
import MissionVision from "./MissionVision";
import KeyValues from "./KeyValues";
import StatsSection from "./StatsSection";
import CTASection from "./CTA";
import About from "./about";
export const metadata: Metadata = {
  title: "About Us - CognitionIES",
  description: "Learn more about CognitionIES, our vision, and expertise in engineering and IT solutions.",
  alternates: {
    canonical: "https://www.cognitionies.com/about/",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans overflow-hidden">
      <MegaMenu />
      <Hero />
      <About />
      {/* <CompanyStory /> */}
      <MissionVision />
      <KeyValues />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
}