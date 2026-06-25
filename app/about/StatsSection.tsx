"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";
import { Award, Globe, TrendingUp, Users } from "lucide-react";
import { useRef } from "react";

const STAT_ICONS = [Users, Globe, Award, TrendingUp];


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

const StatsSection = () => {
  const { STATS } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-24 bg-[#003C46] relative overflow-hidden"
    >
      <Grid />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0098AF]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0098AF]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <SectionLabel>Our Impact</SectionLabel>
          <h2 className="text-4xl md:text-[2.75rem] font-bold text-white font-display leading-tight">
            Our <em className="not-italic text-[#0098AF]">impact.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#0098AF]/20 rounded-xl overflow-hidden border border-[#0098AF]/20">
          {STATS.map((item: { stat: string; label: string }, index: number) => {
            const Icon = STAT_ICONS[index % STAT_ICONS.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group bg-[#003C46] hover:bg-[#0098AF]/[0.08] transition-colors duration-200 p-8 text-center relative"
              >
                <div className="w-10 h-10 rounded-full bg-[#0098AF]/10 border border-[#0098AF]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0098AF] group-hover:border-[#0098AF] transition-colors duration-200">
                  <Icon className="w-5 h-5 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-white font-display mb-2">
                  {item.stat}
                </p>
                <p className="text-[13px] text-white/50 leading-relaxed">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


export default StatsSection;