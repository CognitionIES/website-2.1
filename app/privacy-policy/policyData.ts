// policyData.ts

import { ReactNode } from "react";

export interface PolicySection {
    content: ReactNode;
    title: string;
    paragraphs: string[];
}

export const policySections: PolicySection[] = [
    {
        title: "1. Introduction",
        paragraphs: [
            "We, at Cognition IES (hereinafter referred to as 'Cognition', 'we', 'our', 'us'), are committed to safeguarding the privacy of our website visitors.",
            "Personal data means any information relating to an identified or identifiable natural person.",
            "By accessing or using our website, you consent to the practices described in this Privacy Policy.",
        ],
        content: undefined
    },
    {
        title: "2. Applicability",
        paragraphs: [
            "This policy applies to Cognition IES and any associated third parties processing personal data on behalf of Cognition.",
            "Our website may contain links to third-party websites. This Privacy Policy only applies to Cognition.",
        ],
        content: undefined
    },
];