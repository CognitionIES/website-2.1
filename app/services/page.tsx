import type { Metadata } from "next";
import Footer from "@/components/footer";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "./hero";
import { AboutSection } from "./abou-section";
import { ServicesShowcase } from "./service-showcase";

// No "use client" here — this stays a Server Component so `metadata`
// can be exported. Hero / AboutSection / ServicesShowcase each carry
// their own "use client" directive.
export const metadata: Metadata = buildMetadata({
  title: "Our Services",
  description:
    "Explore Cognition IES's core services — Recruitment & Resourcing, Engineering Services, and ServiceCPQ SaaS solutions — built to help businesses scale across India and the USA.",
  path: "/services",
  keywords: ["Cognition IES services", "recruitment engineering SaaS company"],
});

export default function ServicesPage() {
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0f]">
      <MegaMenu />
      <Hero />
      <AboutSection />
      <ServicesShowcase />
      <Footer />
    </div>
  );
}
