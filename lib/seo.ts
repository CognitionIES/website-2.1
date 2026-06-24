// lib/seo.ts
import type { Metadata } from "next";

const SITE_NAME = "Cognition IES";
const BASE_URL = "https://www.cognitionies.com";
const DEFAULT_OG_IMAGE = "/og-image.jpg";

// Site-wide keywords merged into every page, on top of page-specific ones.
export const BASE_KEYWORDS = [
  "Cognition IES",
  "engineering consultancy",
  "engineering services India",
  "engineering services USA",
];

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogTitle?: string; // 
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  ogTitle, // NEW
}: BuildMetadataInput): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;
  const socialTitle = ogTitle ?? fullTitle;

  const mergedKeywords = Array.from(
    new Set([...keywords, ...BASE_KEYWORDS].map((k) => k.trim())),
  );

  return {
    title: fullTitle,
    description,
    keywords: mergedKeywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: socialTitle, // CHANGED from fullTitle
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle, // CHANGED from fullTitle
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}