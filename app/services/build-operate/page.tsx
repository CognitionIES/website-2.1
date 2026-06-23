import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import WhyChooseUs from "./about";
//import CapabilitiesGrid from "./CapabilitiesGrid";
import ClosingCTA from "./ClosingCTA";
import Footer from "@/components/footer";
import ExpertiseHighlight from "./ExpertiseHighlight";
import HeroSection from "./HeroSection";
import Hero from "./Hero";
import { ProcessWorkflow } from "./processWorkFlow";

export const metadata: Metadata = buildMetadata({
  title: "Build & Operate Engineering Services",
  description:
    "End-to-end Build & Operate engineering solutions from Cognition IES — complete ownership from concept to deployment, with dedicated expert teams and flexible engagement models.",
  path: "/services/build-operate",
  keywords: [
    "build and operate engineering",
    "end-to-end engineering ownership",
    "dedicated engineering teams",
    "flexible engagement models engineering",
    "engineering project management",
    "scalable engineering teams",
  ],
});

export default function Home() {
  return (
    <div>
      <MegaMenu />
      <div>
        <Hero />
        <HeroSection />
        <WhyChooseUs />
        {/* <CapabilitiesGrid /> */}
        <ProcessWorkflow />
        <ExpertiseHighlight />
        <ClosingCTA />
        <Footer />
      </div>
    </div>
  );
}
