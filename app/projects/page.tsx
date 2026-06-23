import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import React from "react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Hero from "./hero";
import Footer from "@/components/footer";
import { ProjectsSection } from "./about";
import CTASection from "@/components/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Explore how Cognition IES transforms businesses through recruitment and resourcing solutions and end-to-end Build & Operate engineering models across IT and engineering sectors.",
  path: "/projects",
  keywords: [
    "engineering project case studies",
    "recruitment and resourcing case studies",
    "build and operate case studies",
    "IT and engineering project execution",
  ],
});

const Projects: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0f]">
      <MegaMenu />
      <Hero />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Projects;
