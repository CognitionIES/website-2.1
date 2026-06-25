"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CAREERS_CONSTANTS } from "@/constants/home/careers";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

interface CareersContent {
  IMAGE: string;
  SUBTITLE: string;
  DESCRIPTION: string;
}

const Careers: React.FC = () => {
  const { IMAGE, SUBTITLE, DESCRIPTION } = CAREERS_CONSTANTS as unknown as CareersContent;
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.2 }
    );
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  const child = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-28 bg-[#f7f8fa] dark:bg-[#0d0d14] relative overflow-hidden"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#003C46 1px, transparent 1px), linear-gradient(90deg, #003C46 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`grid grid-cols-1 gap-10 items-center ${isMobile ? "" : "md:grid-cols-3 md:gap-12"}`}>

          {/* Image — spans 2/3 on desktop */}
          <motion.div
            custom={0}
            variants={child}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`relative rounded-xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e] shadow-sm ${
              isMobile ? "h-[220px] w-full" : "md:col-span-2 h-[360px] md:h-[420px]"
            } order-1`}
          >
            <Image
              src={IMAGE}
              alt="Team collaborating in office"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              loading="lazy"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/20 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-[#0d0d14]/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#e8eaed] dark:border-[#1e1e2e]">
              <p className="text-[12px] font-medium text-[#003C46] dark:text-white italic">
                Building the future together
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <div className="md:col-span-1 order-2 space-y-4">
            <motion.p custom={1} variants={child} initial="hidden" animate={isInView ? "visible" : "hidden"}
              className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF]">
              We're Hiring
            </motion.p>

            <motion.h2 custom={2} variants={child} initial="hidden" animate={isInView ? "visible" : "hidden"}
              className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white leading-tight"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
              Join our{" "}
              <em className="not-italic text-[#0098AF]">team.</em>
            </motion.h2>

            <motion.div custom={3} variants={child} initial="hidden" animate={isInView ? "visible" : "hidden"}
              className="w-12 h-[3px] bg-gradient-to-r from-[#0098AF] to-transparent rounded-full" />

            <motion.p custom={4} variants={child} initial="hidden" animate={isInView ? "visible" : "hidden"}
              className="text-[15px] font-semibold text-[#003C46] dark:text-white leading-snug">
              {SUBTITLE}
            </motion.p>

            <motion.p custom={5} variants={child} initial="hidden" animate={isInView ? "visible" : "hidden"}
              className="text-[14px] text-[#556677] dark:text-[#8899aa] leading-[1.85]">
              {DESCRIPTION}
            </motion.p>

            <motion.div custom={6} variants={child} initial="hidden" animate={isInView ? "visible" : "hidden"}
              className="pt-2">
              <Link href="/careers">
                <button className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0098AF] hover:bg-[#007B8F] text-white text-[14px] font-semibold transition-colors duration-200">
                  View Opportunities
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Careers;