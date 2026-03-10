"use client";

import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import Hero from "@/components/HomePage/hero";
import AboutUs from "@/components/HomePage/AboutUs";
import dynamic from "next/dynamic";
import RecentProjects from "@/components/HomePage/RecentProjects";
import ContactSection from "./contact/ContactSection";
import ServicesShowcase from "@/components/ServicesShowcase";
import CTA from "@/components/CTA";
import EngagementCarousel from "@/components/HomePage/EngagementModel";

const TestimonialSlider = dynamic(
  () => import("@/components/HomePage/Testimonials"),
  { ssr: false },
);
const Careers = dynamic(() => import("@/components/HomePage/Careers"), {
  ssr: false,
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
        <TestimonialSlider />
        <Careers />
        <ContactSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}