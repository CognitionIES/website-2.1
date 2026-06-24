// app/careers/page.tsx
"use client";

import Footer from "@/components/footer";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import AboutSection from "./AboutSection";
import OpenPositions from "./OpenPositions";
import { buildMetadata } from "@/lib/seo";
import { Metadata } from "next";
// import OpenPositions from "./OpenPositions";  ← add when ready
export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Join Cognition IES, explore open roles across engineering, recruitment, and technology, and grow your career with a team shaping talent and technology solutions worldwide.",
  path: "/careers",
  keywords: [
    "Cognition IES careers",
    "engineering jobs India",
    "recruitment company jobs",
  ],
});
export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      <MegaMenu />
      <HeroSection />
      <OpenPositions />
      <BenefitsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}