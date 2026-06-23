import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import Hero from "./hero";
import AboutSection from "./mainContent";
import ServicesSection from "./Services";
import IndustriesWeServe from "./industriesWeServe";
import WhyPartner from "./CTA";
import ProcessSection from "./process";
import ToolsSection from "./tool";

export const metadata: Metadata = buildMetadata({
  title: "Recruitment & Resourcing Services",
  description:
    "Cognition IES connects exceptional talent with forward-thinking businesses through tailored recruitment and staffing solutions, including permanent, temporary, contract, and project-based hiring.",
  path: "/services/recruitment-resourcing",
  keywords: [
    "recruitment and resourcing services",
    "staffing solutions India",
    "talent acquisition services",
    "recruitment process outsourcing",
    "project-based hiring",
    "contract staffing services",
    "candidate screening and assessment",
    "employer branding services",
  ],
});

export default function Index() {
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0f]">
      <MegaMenu />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <IndustriesWeServe />
      <ToolsSection />
      <WhyPartner />
      <Footer />
    </div>
  );
}
