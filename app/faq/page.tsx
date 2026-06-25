import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import Hero from "./hero";
import CTASection from "@/components/CTA";
import FAQList from "./faq-list";

export const metadata: Metadata = buildMetadata({
  title: "FAQs",
  description:
    "Answers to common questions about Cognition IES's recruitment & resourcing, engineering services, and ServiceCPQ SaaS platform.",
  path: "/faq",
  keywords: [
    "Cognition IES FAQ",
    "engineering services questions",
    "recruitment services questions",
  ],
});

export default function FAQPage() {
  return (
    <div>
      <MegaMenu />
      <Hero />
      <FAQList />
      <CTASection />
      <Footer />
    </div>
  );
}