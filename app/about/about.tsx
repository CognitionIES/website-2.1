/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { motion, useInView } from "framer-motion";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Grid = ({ light = false }: { light?: boolean }) => (
  <div
    className={`absolute inset-0 pointer-events-none ${light ? "opacity-[0.025]" : "opacity-[0.06]"}`}
    style={{
      backgroundImage: `linear-gradient(${light ? "#003C46" : "rgba(255,255,255,0.3)"} 1px, transparent 1px), linear-gradient(90deg, ${light ? "#003C46" : "rgba(255,255,255,0.3)"} 1px, transparent 1px)`,
      backgroundSize: "64px 64px",
    }}
  />
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
    {children}
  </p>
);
const AboutSection = () => {
  const { IMAGES, TEXT, STATS } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-white dark:bg-[#0a0a0f] relative overflow-hidden"
    >
      <Grid light />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>About Us</SectionLabel>
            <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white font-display leading-tight mb-6">
              {TEXT.STORY_TITLE}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
                {TEXT.STORY_P1}
              </p>
              <p className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
                {TEXT.STORY_P2}
              </p>
              <p className="text-[15px] text-[#003C46] dark:text-white/80 font-medium leading-relaxed">
                {TEXT.STORY_P3}
              </p>
            </div>

            {/* Stats chips */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.slice(0, 2).map(
                (stat: { stat: string; label: string }, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                    className="border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl p-5 hover:border-[#0098AF]/30 transition-colors duration-200 group"
                  >
                    <p className="text-3xl font-bold text-[#0098AF] font-display mb-1">
                      {stat.stat}
                    </p>
                    <p className="text-[13px] text-[#778899] dark:text-[#6677aa]">
                      {stat.label}
                    </p>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e] group hover:border-[#0098AF]/30 transition-colors duration-200"
          >
            <Image
              src={IMAGES.STORY_IMAGE}
              alt="Our engineering journey"
              width={640}
              height={540}
              className="w-full h-[440px] sm:h-[500px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;