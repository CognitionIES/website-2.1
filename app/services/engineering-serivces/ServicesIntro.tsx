"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cog, Cpu, Zap, Shield, FlaskConical,
  Factory, Settings, Lightbulb,
} from "lucide-react";

const keyServices = [
  { title: "Process Design", description: "Advanced process engineering solutions", icon: Cog, category: "Plant Engineering" },
  { title: "Industrial Automation", description: "Smart automation systems", icon: Cpu, category: "Plant Engineering" },
  { title: "Mechanical Design", description: "Innovative product development", icon: Settings, category: "Product Engineering" },
  { title: "CAE & CFD Analysis", description: "Computational engineering analysis", icon: FlaskConical, category: "Product Engineering" },
  { title: "Electrical Systems", description: "Comprehensive electrical solutions", icon: Zap, category: "Both Domains" },
  { title: "Safety & Compliance", description: "Regulatory compliance solutions", icon: Shield, category: "Plant Engineering" },
  { title: "Prototyping", description: "Rapid prototyping services", icon: Factory, category: "Product Engineering" },
  { title: "Innovation Consulting", description: "Strategic engineering guidance", icon: Lightbulb, category: "Consulting" },
];

// Chip colours by category
const categoryColor: Record<string, string> = {
  "Plant Engineering": "text-[#0098AF] bg-[#0098AF]/10",
  "Product Engineering": "text-[#003C46] bg-[#003C46]/10 dark:text-white dark:bg-white/10",
  "Both Domains": "text-[#007B8F] bg-[#007B8F]/10",
  "Consulting": "text-[#556677] bg-[#556677]/10",
};

const ServicePill = ({ service }: { service: typeof keyServices[0] }) => {
  const Icon = service.icon;
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-4 py-3 mx-3 rounded-xl border border-[#e8eaed] dark:border-[#1e1e2e] bg-white dark:bg-[#0d0d14] hover:border-[#0098AF]/30 transition-colors duration-200 group min-w-[220px]">
      <div className="w-8 h-8 rounded-full bg-[#0098AF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0098AF] transition-colors duration-200">
        <Icon className="w-4 h-4 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
      </div>
      <div>
        <p className="text-[13px] font-semibold text-[#003C46] dark:text-white leading-tight">{service.title}</p>
        <span className={`text-[10px] font-bold tracking-wide px-1.5 py-0.5 rounded ${categoryColor[service.category]}`}>
          {service.category}
        </span>
      </div>
    </div>
  );
};

export const ServicesIntro = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const child = {
    hidden: { opacity: 0, y: 18 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  // Duplicate for seamless loop
  const doubled = [...keyServices, ...keyServices];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white dark:bg-[#0a0a0f] relative overflow-hidden">

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#003C46 1px, transparent 1px), linear-gradient(90deg, #003C46 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.p custom={0} variants={child} initial="hidden" animate={isInView ? "visible" : "hidden"}
          className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
          What We Do
        </motion.p>
        <motion.h2 custom={1} variants={child} initial="hidden" animate={isInView ? "visible" : "hidden"}
          className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white font-display leading-tight mb-4">
          Engineering excellence{" "}
          <em className="not-italic text-[#0098AF]">across industries.</em>
        </motion.h2>
        <motion.div custom={2} variants={child} initial="hidden" animate={isInView ? "visible" : "hidden"}
          className="space-y-2 max-w-2xl">
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
            From complex plant infrastructure to innovative product development, we deliver comprehensive engineering solutions that drive efficiency, safety, and sustainability.
          </p>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
            Our expertise spans mechanical, electrical, process, and embedded systems engineering, backed by cutting-edge tools and decades of industry experience.
          </p>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#0a0a0f] to-transparent pointer-events-none z-10" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#0a0a0f] to-transparent pointer-events-none z-10" />

        <motion.div
          className="flex"
          animate={{ x: [0, -(keyServices.length * 244)] }}
          transition={{ duration: keyServices.length * 3.5, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        >
          {doubled.map((service, i) => (
            <ServicePill key={`${service.title}-${i}`} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};