"use client";

import { ABOUT_CONSTANTS } from "@/constants/home/about";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, easeOut } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  // once: true — animates only the first time it enters view
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  const imageAnim = {
    hidden: { opacity: 0, x: isMobile ? 0 : 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: easeOut, delay: 0.2 } },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-28 bg-white dark:bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#003C46 1px, transparent 1px), linear-gradient(90deg, #003C46 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section label + heading */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`mb-10 ${isMobile ? "text-center" : ""}`}
        >
          <motion.p variants={child} className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
            About Us
          </motion.p>
          <motion.h2
            variants={child}
            className="text-3xl md:text-4xl font-bold text-[#003C46] dark:text-white leading-tight"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            {ABOUT_CONSTANTS.TITLE}
          </motion.h2>
          <motion.div
            variants={child}
            className={`mt-2 w-16 h-[3px] bg-gradient-to-r from-[#0098AF] to-transparent rounded-full ${isMobile ? "mx-auto" : ""}`}
          />
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-10 md:gap-12">

          {/* Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 md:order-1 space-y-4"
          >
            <motion.p
              variants={child}
              className="text-[15px] md:text-[16px] text-[#556677] dark:text-[#8899aa] leading-[1.85]"
            >
              {ABOUT_CONSTANTS.DESCRIPTION_1}
            </motion.p>
            <motion.h3
              variants={child}
              className="text-[17px] md:text-lg font-semibold text-[#003C46] dark:text-white"
            >
              {ABOUT_CONSTANTS.SUBTITLE}
            </motion.h3>
            <motion.p
              variants={child}
              className="text-[15px] md:text-[16px] text-[#556677] dark:text-[#8899aa] leading-[1.85]"
            >
              {ABOUT_CONSTANTS.DESCRIPTION_2}
            </motion.p>
            <motion.p
              variants={child}
              className="text-[17px] md:text-lg font-semibold text-[#003C46] dark:text-white"
            >
              {ABOUT_CONSTANTS.DESCRIPTION_3}
            </motion.p>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageAnim}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`order-1 md:order-2 relative rounded-xl overflow-hidden shadow-sm border border-[#e8eaed] dark:border-[#1e1e2e] ${
              isMobile ? "w-full h-[200px] sm:h-[260px]" : "md:h-[400px] md:w-[540px]"
            }`}
          >
            <Image
              src={ABOUT_CONSTANTS.IMAGE}
              alt="Team collaboration"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 540px"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;