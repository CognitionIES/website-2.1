"use client";

// Displays the key values with images and hover effects
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";
import { useRef } from "react";
import { Heart, Shield, Star, Zap } from "lucide-react";


const Grid = ({ light = false }: { light?: boolean }) => (
  <div
    className={`absolute inset-0 pointer-events-none ${light ? "opacity-[0.025]" : "opacity-[0.06]"}`}
    style={{
      backgroundImage: `linear-gradient(${light ? "#003C46" : "rgba(255,255,255,0.3)"} 1px, transparent 1px), linear-gradient(90deg, ${light ? "#003C46" : "rgba(255,255,255,0.3)"} 1px, transparent 1px)`,
      backgroundSize: "64px 64px",
    }}
  />
);
const VALUE_ICONS = [Heart, Shield, Zap, Star];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
    {children}
  </p>
);

const KeyValues = () => {
  const { IMAGES, TEXT, KEY_VALUES } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-white dark:bg-[#0a0a0f] relative overflow-hidden"
    >
      <Grid light />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <SectionLabel>What Drives Us</SectionLabel>
          <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white font-display leading-tight">
            {TEXT.VALUES_TITLE}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e8eaed] dark:bg-[#1e1e2e] rounded-xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e]">
          {KEY_VALUES.map(
            (value: { title: string; desc: string }, index: number) => {
              const Icon = VALUE_ICONS[index % VALUE_ICONS.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group bg-white dark:bg-[#0a0a0f] hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-200 relative overflow-hidden"
                >
                  {/* Value image */}
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={IMAGES.KEY_VALUES[index]}
                      alt={value.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#003C46]/40 to-[#003C46]/70" />
                    <div className="absolute bottom-3 left-5">
                      <div className="w-8 h-8 rounded-full bg-[#0098AF]/20 border border-[#0098AF]/40 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#0098AF]" />
                      </div>
                    </div>
                    <span className="absolute top-3 right-4 text-[10px] font-bold tracking-[0.18em] uppercase text-white/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[15px] font-bold text-[#003C46] dark:text-white font-display mb-2 group-hover:text-[#0098AF] transition-colors duration-200">
                      {value.title}
                    </h3>
                    <p className="text-[13px] text-[#778899] dark:text-[#6677aa] leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0098AF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
};

export default KeyValues;