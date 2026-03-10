"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-24 bg-[#003C46] overflow-hidden"
      aria-labelledby="cta-title"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow blobs — static */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0098AF]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0098AF]/10 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0098AF]/60 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-4">
          Partner With Us
        </p>
        <h2
          id="cta-title"
          className="text-4xl md:text-5xl font-bold text-white font-display leading-tight mb-5"
        >
          Ready to transform{" "}
          <em className="not-italic text-[#0098AF]">your hiring?</em>
        </h2>
        <p className="text-[15px] md:text-[16px] text-white/65 leading-relaxed max-w-2xl mx-auto mb-9">
          Join hundreds of companies who trust us with their most important hiring decisions.
        </p>

        <Link href="/contact">
          <button className="group inline-flex items-center gap-2 px-7 py-3 bg-[#0098AF] hover:bg-[#007B8F] text-white text-[15px] font-semibold rounded-lg transition-colors duration-200">
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </Link>
      </motion.div>
    </section>
  );
}