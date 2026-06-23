import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import React from "react";
import Hero from "./hero";
import Features from "./features";
//import Problems from "./problem";
//import Benefits from "./benefits";
//import Integration from "./integeration";
import CTA from "./CTA";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import VideoShowcase from "./videoShowcase";
import Partner from "./partner";
import WhyChoose from "./whyChooseUs";
import Industries from "./industries";

export const metadata: Metadata = buildMetadata({
  title: "ServiceCPQ | AI-Powered After-Sales SaaS Platform",
  description:
    "ServiceCPQ by Cognition IES is an AI-powered platform unifying Configure Price Quote (CPQ), warranty and claims management, and repair workflows for seamless after-sales service management.",
  path: "/services/saas-solution/servicecpq",
  keywords: [
    "ServiceCPQ",
    "Configure Price Quote software",
    "CPQ platform",
    "after-sales service software",
    "warranty and claims management software",
    "repair management software",
    "AI-powered CPQ",
    "service management SaaS",
  ],
});

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MegaMenu />
      <Hero />
      <main className="flex-grow">
        <Partner />
        <Features />
        <VideoShowcase />
        {/* <Benefits /> */}
        <Industries />
        {/* <Integration /> */}
        <div className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-3/4 h-full bg-[#0098af]/5 rounded-l-[100px] -z-10"></div>
          <WhyChoose />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
  