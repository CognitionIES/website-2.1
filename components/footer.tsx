"use client";

import React from "react";
import CompanyInfo from "./Footer/CompanyInfo";
import UsefulLinks from "./Footer/UsefulLinks";
import SocialConnect from "./Footer/SocialConnect";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#003C46] text-[#F5FDFF] relative overflow-hidden">

      {/* Grid texture — same as other dark sections */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Soft glow — top right only, static */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-[#0098AF]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0098AF]/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Company info */}
          <div className="lg:col-span-5">
            <CompanyInfo />
          </div>

          {/* Links */}
          <div className="lg:col-span-4">
            <UsefulLinks />
          </div>

          {/* Social / CTA */}
          <div className="lg:col-span-3">
            <SocialConnect />
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-[13px] text-white/50 font-light">
              © {new Date().getFullYear()} Cognition IES. All rights reserved.
            </p>
            <Link
              href="/privacy"
              className="text-[13px] text-white/50 hover:text-[#0098AF] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}