"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { Zap } from "lucide-react";
import { aboutStats } from "./services-data";

// Tiny, hook-free presentational pieces — kept local to this file since
// there's no shared "section-ui" file in this folder. Happy to extract
// these into one shared file if you'd rather not duplicate them in
// service-showcase.tsx as well.
const Grid = ({ light = false }: { light?: boolean }) => (
  <div
    className={`absolute inset-0 pointer-events-none ${light ? "opacity-[0.025]" : "opacity-[0.06]"}`}
    style={{
      backgroundImage: `linear-gradient(${light ? "#003C46" : "rgba(255,255,255,0.3)"} 1px, transparent 1px), linear-gradient(90deg, ${light ? "#003C46" : "rgba(255,255,255,0.3)"} 1px, transparent 1px)`,
      backgroundSize: "64px 64px",
    }}
  />
);

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
    {children}
  </p>
);

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white font-display leading-tight mb-4">
    {children}
  </h2>
);

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-white dark:bg-[#0a0a0f] relative overflow-hidden"
    >
      <Grid light />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>About Cognition</SectionLabel>
            <SectionHeading>
              Innovating the future of{" "}
              <em className="not-italic text-[#0098AF]">business solutions.</em>
            </SectionHeading>
            <div className="space-y-4 text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
              <p>
                At Cognition, we're passionate about transforming businesses
                through cutting-edge technology and innovative solutions. Our
                mission is to empower organizations with the tools and expertise
                they need to thrive in an ever-evolving landscape.
              </p>
              <p>
                What sets us apart is our commitment to understanding your
                unique challenges and delivering tailored solutions that drive
                real results. We combine deep technical expertise with strategic
                thinking to create value that lasts.
              </p>
            </div>

            {/* Promise chip */}
            <div className="mt-7 flex items-start gap-4 p-5 border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl hover:border-[#0098AF]/30 transition-colors duration-200 group">
              <div className="w-9 h-9 rounded-full bg-[#0098AF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0098AF] transition-colors duration-200">
                <Zap className="w-4 h-4 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#003C46] dark:text-white mb-1">
                  Our Promise
                </p>
                <p className="text-[13px] text-[#778899] dark:text-[#6677aa] leading-relaxed">
                  We deliver exceptional results through innovation, expertise,
                  and unwavering commitment to your success.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 gap-px bg-[#e8eaed] dark:bg-[#1e1e2e] rounded-2xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e]">
              {aboutStats.map(({ icon: Icon, number, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="group bg-white dark:bg-[#0a0a0f] hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-200 p-8 text-center relative"
                >
                  <div className="w-10 h-10 rounded-full bg-[#0098AF]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0098AF] transition-colors duration-200">
                    <Icon className="w-5 h-5 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <p className="text-4xl font-bold text-[#003C46] dark:text-white font-display mb-1">
                    {number}
                  </p>
                  <p className="text-[12px] text-[#aabbcc] tracking-wider uppercase">
                    {label}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0098AF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
