/* eslint-disable react-hooks/exhaustive-deps */

import Footer from "@/components/footer";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PrivacyHero } from "./PrivacyHero";
import PrivacyContainer from "./PrivacyContainer";
import { PolicySection } from ".//PolicySection";
import { policySections } from "./policyData";



export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read Cognition IES's privacy policy covering how we collect, use, and protect your personal information.",
  path: "/privacy-policy",
  keywords: [
    "Cognition IES privacy policy",
    "data protection policy",
  ],
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#E6F0F5]/40 min-h-screen">
      <MegaMenu />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PrivacyHero />

        <PrivacyContainer>
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg text-gray-500">
              <strong>Effective Date:</strong> May 1st, 2025
            </p>

            {policySections.map((section) => (
              <PolicySection
                key={section.title}
                title={section.title}
              >
                {section.content}
              </PolicySection>
            ))}
          </div>
        </PrivacyContainer>
      </div>

      <Footer />
    </div>
  );
}