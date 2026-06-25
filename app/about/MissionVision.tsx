"use client";

// Displays the mission and vision statements with a background image
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";
import { useRef } from "react";
import { Eye, Target } from "lucide-react";

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

const MissionVision = () => {
  const { IMAGES, TEXT } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-[#f7f8fa] dark:bg-[#0d0d14] relative overflow-hidden"
    >
      <Grid light />
      {/* Subtle bg image layer */}
      <div className="absolute inset-0 opacity-[0.03]">
        <Image
          src={IMAGES.MISSION_VISION_BG}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <SectionLabel>Our Direction</SectionLabel>
          <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white font-display leading-tight">
            Mission &amp; <em className="not-italic text-[#0098AF]">Vision.</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="group border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl bg-white dark:bg-[#0a0a0f] p-8 hover:border-[#0098AF]/30 transition-colors duration-200 relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-full bg-[#0098AF]/10 flex items-center justify-center mb-6 group-hover:bg-[#0098AF] transition-colors duration-200">
              <Eye className="w-6 h-6 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
            </div>
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-2">
              Vision
            </p>
            <h3 className="text-2xl font-bold text-[#003C46] dark:text-white font-display mb-4">
              {TEXT.VISION_TITLE}
            </h3>
            <p className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
              {TEXT.VISION_DESC}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0098AF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl bg-white dark:bg-[#0a0a0f] p-8 hover:border-[#0098AF]/30 transition-colors duration-200 relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-full bg-[#0098AF]/10 flex items-center justify-center mb-6 group-hover:bg-[#0098AF] transition-colors duration-200">
              <Target className="w-6 h-6 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
            </div>
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-2">
              Mission
            </p>
            <h3 className="text-2xl font-bold text-[#003C46] dark:text-white font-display mb-4">
              {TEXT.MISSION_TITLE}
            </h3>
            <p className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
              {TEXT.MISSION_DESC}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0098AF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;