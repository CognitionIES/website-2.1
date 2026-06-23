// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import FaqButton from "../components/FaqButton";

const favicon = "/favicon.ico";

// Body font 
// Inter — the gold standard for B2B / SaaS. Clean, legible at any size,
// universally trusted. Replaces Geist Sans + Calibri.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

//  Display font
// DM Serif Display — humanist serif with high contrast strokes.
// Professional, editorial feel. Used by Google, Framer, and top-tier agencies.
// Only has weight 400 — that's enough; its visual weight looks bold at large sizes.
const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CognitionIES",
  description:
    "CognitionIES – Engineering, IT talent, digitalization, and product cost optimization solutions.",
  icons: {
    icon: favicon,
  },
  alternates: {
    canonical: "https://www.cognitionies.com/",
  },
  verification: {
    google: "gfLbTnLkHYqYNbPGr9MXVVXVwQQbF73E5zUYgB5dgBM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <head>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8PV551Z0KZ"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8PV551Z0KZ');
          `}
        </Script>
      </head>
      {/* font-sans now resolves to Inter via tailwind.config */}
      <body className="font-sans antialiased relative min-h-screen">
        <FaqButton />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}