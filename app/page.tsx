import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import Hero from "@/components/HomePage/hero";
import AboutUs from "@/components/HomePage/AboutUs";
import RecentProjects from "@/components/HomePage/RecentProjects";
import ContactSection from "./contact/ContactSection";
import ServicesShowcase from "@/components/ServicesShowcase";
import CTA from "@/components/CTA";
import EngagementCarousel from "@/components/HomePage/EngagementModel";
import HomeClientSections from "./HomeClientSections";

export const metadata: Metadata = buildMetadata({
  title: "Cognition IES | Build Smarter. Hire Better. Scale Faster.",
  description:
    "Cognition IES delivers recruitment & resourcing, end-to-end Build & Operate engineering solutions, and ServiceCPQ SaaS software for businesses across India and the USA.",
  path: "/",
  ogTitle: "Cognition IES | Build Smarter. Hire Better. Scale Faster.",
  keywords: [
    "recruitment and resourcing",
    "engineering staffing solutions",
    "build and operate engineering",
    "ServiceCPQ SaaS platform",
    "talent deployment India",
    "engineering company India USA",
  ],
});

export default function Home() {
  return (
    <div className="relative bg-white dark:bg-[#0a0a0f]">
      <MegaMenu />
      <Hero />
      <main className="relative text-gray-800 font-sans overflow-hidden">
        <AboutUs />
        <ServicesShowcase />
        <EngagementCarousel />
        <RecentProjects />
        <HomeClientSections />
        <ContactSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
