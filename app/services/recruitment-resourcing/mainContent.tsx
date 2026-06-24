"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import aboutImage1 from "@/constants/images/staffing-recruitment/about-2.webp";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const child = {
    hidden: { opacity: 0, y: 18 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  const quote =
    "In today's fast-paced and ever-evolving job market, finding the right opportunity or the right talent can feel overwhelming. That's where we come in. At Cognition IES, we believe recruitment is more than just matching resumes with job descriptions — it's about understanding people, purpose, and potential. We work closely with you to ensure every connection is meaningful, strategic, and long-lasting.";

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-28 bg-white dark:bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#003C46 1px, transparent 1px), linear-gradient(90deg, #003C46 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="mb-10">
          <motion.p custom={0} variants={child} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
            Recruitment & Resourcing
          </motion.p>
          <motion.h2 custom={1} variants={child} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="text-3xl md:text-4xl font-bold text-[#003C46] dark:text-white font-display leading-tight">
            Empowering Careers.{" "}
            <em className="not-italic text-[#0098AF]">Enabling Growth.</em>
          </motion.h2>
        </div>

        {/* Full-width image with overlaid quote card */}
        <motion.div
          custom={2}
          variants={child}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative rounded-xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e] shadow-sm"
        >
          <div className="relative h-[280px] md:h-[440px] w-full">
            <Image
              src={aboutImage1}
              alt="Staffing and Recruitment Services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/40 via-transparent to-transparent" />
          </div>

          {/* Quote card overlay — bottom-right on desktop, below image on mobile */}
          <div className="md:absolute md:bottom-5 md:right-5 md:max-w-sm bg-white/85 dark:bg-[#0d0d14]/95 backdrop-blur-sm p-5 border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl">
            <p className="text-[13px] text-[#556677] dark:text-[#8899aa] leading-[1.85] italic">
              &ldquo;{quote}&rdquo;
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}