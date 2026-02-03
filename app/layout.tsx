// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import FaqButton from "../components/FaqButton";

const favicon = "/favicon.ico";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        <FaqButton />
        <main className="">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
