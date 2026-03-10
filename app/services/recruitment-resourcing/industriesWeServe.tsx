"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Cpu, Wrench, Radio, Fuel } from "lucide-react";

const industries = [
  {
    icon: Wrench,
    name: "Engineering",
    description: "Specialized recruitment for engineering roles across mechanical, civil, electrical, and chemical disciplines.",
  },
  {
    icon: Cpu,
    name: "Information Technology",
    description: "From software development and IT support to cyber security and project management, we match the right candidate with the right opportunity.",
  },
  {
    icon: Fuel,
    name: "Oil & Gas",
    description: "Comprehensive staffing for upstream, midstream, and downstream operations with a safety-first approach.",
  },
  {
    icon: Radio,
    name: "Telecom",
    description: "Talent solutions for telecommunications, network infrastructure, and 5G technology companies.",
  },
  {
    icon: Building2,
    name: "BFSI",
    description: "From investment banking to accounting and everything in between, we match the right candidate with the right opportunity.",
  },
];

export default function IndustriesWeServe() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-[#f7f8fa] dark:bg-[#0d0d14] relative overflow-hidden"
      aria-labelledby="industries-section-title"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#003C46 1px, transparent 1px), linear-gradient(90deg, #003C46 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
            Industries
          </p>
          <h2
            id="industries-section-title"
            className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white font-display leading-tight mb-4"
          >
            Industries we{" "}
            <em className="not-italic text-[#0098AF]">serve.</em>
          </h2>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-xl leading-relaxed">
            Specialized recruitment expertise across key industries, delivering talent solutions that drive business growth.
          </p>
        </motion.div>

        {/* Cards — 3 cols top row, 2 cols bottom row centered */}
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {industries.slice(0, 3).map((industry, index) => (
              <IndustryCard key={industry.name} industry={industry} index={index} isInView={isInView} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {industries.slice(3).map((industry, index) => (
              <IndustryCard key={industry.name} industry={industry} index={index + 3} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({
  industry,
  index,
  isInView,
}: {
  industry: { icon: React.ElementType; name: string; description: string };
  index: number;
  isInView: boolean;
}) {
  const Icon = industry.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group bg-white dark:bg-[#0a0a0f] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl p-6 hover:border-[#0098AF]/30 transition-colors duration-200 relative overflow-hidden"
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-[#0098AF]/10 flex items-center justify-center mb-4 group-hover:bg-[#0098AF] transition-colors duration-200">
        <Icon className="w-5 h-5 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
      </div>

      <h3 className="text-[19px] font-semibold text-[#003C46] dark:text-white mb-2 group-hover:text-[#0098AF] font-display transition-colors duration-200">
        {industry.name}
      </h3>
      <p className="text-[13px] text-[#778899] dark:text-[#6677aa] leading-relaxed">
        {industry.description}
      </p>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}