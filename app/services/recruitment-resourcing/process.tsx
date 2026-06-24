/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SearchIcon, GlobeIcon, ClipboardIcon,
  CalendarIcon, DocumentIcon, SupportIcon,
} from "./CustomIcons";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  deliverable: string;
  icon: React.ComponentType<any>;
}

const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Role Discovery",
    description: "We begin by deeply understanding your requirements, team structure, culture, and long-term goals.",
    deliverable: "Role brief, success profile, key KPIs.",
    icon: SearchIcon,
  },
  {
    id: "sourcing",
    title: "Sourcing & Outreach",
    description: "Leveraging multi-channel sourcing (job boards, our talent pool, referrals, and passive outreach via LinkedIn, GitHub, etc.), we identify top-fit candidates.",
    deliverable: "ATS, sourcing automation, boolean search.",
    icon: GlobeIcon,
  },
  {
    id: "screening",
    title: "Screening & Evaluation",
    description: "Our recruiters conduct technical and behavioral assessments based on the role type (permanent, contract, or leadership).",
    deliverable: "Pre-screening, skill assessments, culture-fit scoring.",
    icon: ClipboardIcon,
  },
  {
    id: "interview",
    title: "Interview Coordination",
    description: "We manage end-to-end interview scheduling, candidate communication, and feedback loops.",
    deliverable: "Reduced time-to-hire, streamlined candidate experience.",
    icon: CalendarIcon,
  },
  {
    id: "offer",
    title: "Offer & Onboarding Support",
    description: "We ensure smooth offer rollouts, counteroffer handling, background checks, and onboarding support especially for contract and RPO hires.",
    deliverable: "Compliance, documentation, payroll integration (for C2H/Contract).",
    icon: DocumentIcon,
  },
  {
    id: "support",
    title: "Post-Hire Support",
    description: "For contract, RPO, and C2H models, we stay engaged post-hire for performance check-ins, replacements (if needed), and payroll support.",
    deliverable: "Ongoing support and performance optimization.",
    icon: SupportIcon,
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-white dark:bg-[#0a0a0f] relative overflow-hidden"
      aria-labelledby="process-section-title"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.035]"
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
          className="mb-14"
        >
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
            Our Process
          </p>
          <h2
            id="process-section-title"
            className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white font-display leading-tight mb-4"
          >
            How we{" "}
            <em className="not-italic text-[#0098AF]">work.</em>
          </h2>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-xl leading-relaxed">
            A unified talent acquisition process for every hiring model. Whether you need permanent hires, project-based consultants, or scalable offshore teams.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8eaed] dark:bg-[#1e1e2e] rounded-xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e]">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group bg-white dark:bg-[#0a0a0f] hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-200 p-7 relative flex flex-col"
              >
                {/* Step number */}
                <span className="text-[10px] font-bold tracking-[0.15em] text-[#aabbcc] mb-4">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-[#0098AF]/10 flex items-center justify-center mb-4 group-hover:bg-[#0098AF] transition-colors duration-200">
                  <IconComponent className="w-5 h-5 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
                </div>

                {/* Title */}
                <h3 className="text-[19px] font-semibold text-[#003C46] dark:text-white mb-2 font-display">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-[#778899] dark:text-[#6677aa] leading-relaxed flex-1 mb-4">
                  {step.description}
                </p>

                {/* Deliverable */}
                <div className="px-3 py-2 rounded-lg bg-[#0098AF]/08 border border-[#0098AF]/15 dark:border-[#0098AF]/20">
                  <p className="text-[12px] text-[#003C46] dark:text-[#aabbcc]">
                    <span className="font-semibold text-[#0098AF]">Deliverable: </span>
                    {step.deliverable}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0098AF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}