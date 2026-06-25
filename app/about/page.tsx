
import React, { useRef } from "react";

import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import { buildMetadata } from "@/lib/seo";
import { Metadata } from "next";
import Hero from "./hero";
import AboutSection from "./about";
import MissionVision from "./MissionVision";
import KeyValues from "./KeyValues";
import StatsSection from "./StatsSection";
import CTASection from "./CTA";


export const metadata: Metadata = buildMetadata({
  title: "Engineering & Recruitment Services in Vadodara",
  description:
    "Cognition IES, based in Vadodara, delivers recruitment & resourcing, end-to-end Build & Operate engineering solutions, and ServiceCPQ SaaS software for businesses across India and the USA.",
  path: "/",
  ogTitle: "Cognition IES | Build Smarter. Hire Better. Scale Faster.",
  keywords: [
    "engineering services Vadodara",
    "recruitment services Vadodara",
    "recruitment and resourcing",
    "engineering staffing solutions",
    "build and operate engineering",
    "ServiceCPQ SaaS platform",
    "engineering company Vadodara",
  ],
});

export default function AboutPage() {
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0f]">
      <MegaMenu />
      <Hero />
      <AboutSection />
      <MissionVision />
      <KeyValues />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

