"use client";

import React, { useRef } from "react";
import {
  ChevronRight,
  Home,
  ArrowRight,
  ArrowDown,
  Target,
  Users,
  Code,
  CheckCircle,
  Shield,
  TrendingUp,
  Zap,
  BarChart,
  Award,
  Wrench,
  Globe,
  DollarSign,
  Layers,
  GitMerge,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/footer";
import heroImage from "@/constants/images/projects/pcm/hero.webp";
import aboutImage from "@/constants/images/projects/pcm/project-overview.webp";
import objectiveImage from "@/constants/images/projects/pcm/objective.webp";
import objectiveImage2 from "@/constants/images/projects/pcm/objective-two.webp";
import approachImage from "@/constants/images/projects/pcm/pcm-approach.webp";
import keyImage from "@/constants/images/bg/key.webp";
import deliverablesImage from "@/constants/images/bg/deliverables.webp";

//  Shared helpers ──

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

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white font-display leading-tight mb-4">
    {children}
  </h2>
);

//  Hero 

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="relative h-[480px] md:h-[520px] overflow-hidden"
    >
      <Image
        src={heroImage}
        alt="Product Cost Management"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 via-[#004f5e]/75 to-[#0098AF]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#002930]/50 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0098AF]/50 to-transparent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.25, 0], y: [0, -80] }}
            transition={{
              duration: 4 + ((i * 0.5) % 3),
              repeat: Infinity,
              delay: (i * 0.43) % 4,
            }}
            className="absolute w-1 h-1 bg-[#0098AF]/60 rounded-full"
            style={{ left: `${10 + ((i * 8.3) % 80)}%`, bottom: "15%" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <motion.nav
          initial={{ opacity: 0, x: -12 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-2 text-[12px] text-white/50 mb-8"
        >
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-white/80 transition-colors"
          >
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <Link
            href="/projects"
            className="hover:text-white/80 transition-colors"
          >
            Projects
          </Link>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <span className="text-[#0098AF]/90">Product Cost Management</span>
        </motion.nav>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3"
        >
          Case Study · Cost Optimization
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold text-white leading-tight max-w-3xl font-display"
        >
          Industrial Equipment{" "}
          <em className="not-italic text-[#0098AF]">Cost Optimization.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-4 text-[15px] text-white/65 max-w-xl leading-relaxed"
        >
          Offshore engineering team for a US-based industrial equipment
          manufacturer — driving cost transformation without compromising
          quality.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0], y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.div>

      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-20"
        style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
      >
        <div className="absolute inset-0 bg-white dark:bg-[#0a0a0f]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(#003C46 1px, transparent 1px), linear-gradient(90deg, #003C46 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>
    </section>
  );
};

//  Client Profile & Project Overview 

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

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
          className="mb-10"
        >
          <SectionLabel>Client Profile & Overview</SectionLabel>
          <SectionHeading>
            Build & Operate{" "}
            <em className="not-italic text-[#0098AF]">engagement.</em>
          </SectionHeading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl overflow-hidden group hover:border-[#0098AF]/30 transition-colors duration-200 relative"
        >
          <div className="md:flex">
            <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
              <Image
                src={aboutImage}
                alt="Client profile"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/20 to-transparent" />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="px-3 py-1 bg-[#0098AF] text-white text-[11px] font-bold tracking-wider rounded-full">
                  Build & Operate
                </span>
                <span className="px-3 py-1 bg-white/90 dark:bg-[#0d0d14]/90 text-[#003C46] dark:text-white text-[11px] font-bold tracking-wider rounded-full">
                  PCM Approach
                </span>
              </div>
            </div>
            <div className="md:w-3/5 p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-2">
                    Client Profile
                  </p>
                  <h3 className="text-xl font-bold text-[#003C46] dark:text-white font-display mb-3">
                    North American Industrial Equipment Manufacturer
                  </h3>
                  <p className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
                    A reputed North American manufacturer in the industrial
                    equipment sector, offering products such as pressure
                    washers, air compressors, and other commercial-grade
                    machinery. To remain competitive in a price-sensitive
                    market, the client partnered with Cognition IES to establish
                    a dedicated offshore engineering and cost optimization team.
                  </p>
                </div>
                <div className="w-full h-px bg-[#e8eaed] dark:bg-[#1e1e2e]" />
                <div>
                  <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-2">
                    Project Overview
                  </p>
                  <p className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
                    The engagement aimed at driving a complete transformation in
                    product cost, design efficiency, and manufacturability.
                    Through our Build & Operate approach, Cognition IES
                    established and managed a specialized engineering team to
                    support design improvements, benchmarking, and cost control
                    initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </motion.div>
      </div>
    </section>
  );
};

//  Objectives & Roles ─

const clientObjectives = [
  { label: "Manufacturing Cost Reduction", icon: DollarSign },
  { label: "Improve Margins up to 50%", icon: TrendingUp },
  { label: "Move Down the Price Ladder", icon: BarChart },
  { label: "Re-imagine Product Architecture", icon: Layers },
  { label: "Benchmarking with Market Leaders", icon: Target },
  { label: "Reverse Engineering of Competitor Models", icon: GitMerge },
  { label: "Process Quality Enhancement", icon: CheckCircle },
  { label: "Factor of Safety Validation", icon: Shield },
];

const rolesBuilt = [
  "Product Designer",
  "Costing Engineer",
  "Manufacturing Engineer",
  "Hydraulic – SME",
  "FEA Engineer",
  "Sourcing Engineer",
];

const Objectives = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-[#f7f8fa] dark:bg-[#0d0d14] relative overflow-hidden"
    >
      <Grid light />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <SectionLabel>Objectives & Team</SectionLabel>
          <SectionHeading>
            Client objectives{" "}
            <em className="not-italic text-[#0098AF]">&amp; roles.</em>
          </SectionHeading>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Objectives image card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl overflow-hidden group hover:border-[#0098AF]/30 transition-colors duration-200 relative"
          >
            <div className="relative h-44 overflow-hidden">
              <Image
                src={objectiveImage}
                alt="Client Objectives"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#003C46]/50 to-[#003C46]/80" />
              <div className="absolute inset-0 flex items-end p-5">
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF]">
                  Client Objectives
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-px bg-[#e8eaed] dark:bg-[#1e1e2e]">
              {clientObjectives.map(({ label, icon: Icon }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-white dark:bg-[#0a0a0f] hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-150 px-5 py-3"
                >
                  <Icon className="w-4 h-4 text-[#0098AF] flex-shrink-0" />
                  <span className="text-[13px] text-[#556677] dark:text-[#8899aa]">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>

          {/* Roles built */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl overflow-hidden group hover:border-[#0098AF]/30 transition-colors duration-200 relative flex flex-col"
          >
            <div className="relative h-44 overflow-hidden">
              <Image
                src={objectiveImage2}
                alt="Roles Built"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#003C46]/50 to-[#003C46]/80" />
              <div className="absolute inset-0 flex items-end p-5">
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF]">
                  Roles Built
                </p>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-px bg-[#e8eaed] dark:bg-[#1e1e2e]">
              {rolesBuilt.map((role, index) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.06 }}
                  className="flex items-center gap-3 bg-white dark:bg-[#0a0a0f] hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-150 px-5 py-3.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0098AF] flex-shrink-0" />
                  <span className="text-[13px] font-medium text-[#556677] dark:text-[#8899aa]">
                    {role}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

//  Approach ──

const approachSections = [
  {
    title: "Team Setup & Onboarding",
    icon: Users,
    points: [
      "Recruited, trained, and deployed a cross-functional engineering team aligned to client goals.",
      "Enabled seamless integration with client's internal teams via virtual and physical collaboration hubs.",
    ],
  },
  {
    title: "Cost Benchmarking & Value Engineering (VAVE)",
    icon: BarChart,
    points: [
      "Reverse-engineered competitors' products for cost-performance insights.",
      "Conducted deep-dive analysis of existing product families to identify material and design inefficiencies.",
      "Applied VAVE and should-costing techniques to optimize part and assembly-level costs.",
    ],
  },
  {
    title: "Modular Design & SKU Rationalization",
    icon: Layers,
    points: [
      "Simplified and standardized SKUs across product families.",
      "Identified over-engineered components and proposed modular redesigns to reduce tooling, inventory, and fabrication costs.",
    ],
  },
  {
    title: "Cross-functional Collaboration & Knowledge Transfer",
    icon: GitMerge,
    points: [
      "Conducted design workshops with sourcing and manufacturing teams.",
      "Delivered training and documentation for long-term internal use and continuous improvement.",
    ],
  },
];

const ProjectApproach = () => {
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
          className="mb-12"
        >
          <SectionLabel>Execution Strategy</SectionLabel>
          <SectionHeading>
            Build & Operate{" "}
            <em className="not-italic text-[#0098AF]">strategy.</em>
          </SectionHeading>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Approach cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e8eaed] dark:bg-[#1e1e2e] rounded-xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e]">
            {approachSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group bg-white dark:bg-[#0a0a0f] hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-200 p-7 relative"
                >
                  <span className="text-[10px] font-bold tracking-[0.15em] text-[#aabbcc] mb-4 block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#0098AF]/10 flex items-center justify-center mb-4 group-hover:bg-[#0098AF] transition-colors duration-200">
                    <Icon className="w-5 h-5 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <h3 className="text-[14px] font-semibold text-[#003C46] dark:text-white font-display mb-3 group-hover:text-[#0098AF] transition-colors duration-200">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#0098AF] flex-shrink-0" />
                        <span className="text-[12px] text-[#778899] dark:text-[#6677aa] leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0098AF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              );
            })}
          </div>

          {/* Approach image */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e] min-h-[280px] group"
          >
            <Image
              src={approachImage}
              alt="Approach"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

//  Key Findings & Deliverables ─

const keyFindings = [
  "Major weight savings and design simplification opportunities across valves, cradles, tanks, and support structures.",
  "Several client components were over-engineered, leading to excess material usage and fabrication costs.",
  "Benchmark competitors utilized fabricated or modular designs with fewer parts and less hardware.",
  "Opportunities to standardize SKUs across product families were identified to improve inventory and sourcing efficiency.",
  "Hydraulic tanks, filter systems, and frames showed potential for leaner, cost-effective alternatives.",
];

const deliverables = [
  { label: "SWOT Analysis", icon: BarChart },
  { label: "Pareto Analysis (80/20)", icon: TrendingUp },
  { label: "Idea Pool Generation Report", icon: BookOpen },
  { label: "DFA / DFM / DFMEA Reports", icon: Wrench },
  { label: "Root Cause Analysis", icon: Target },
  { label: "Should-Costing", icon: DollarSign },
  { label: "FEA Reports", icon: Shield },
  { label: "Final Manufacturing Drawings", icon: Code },
  { label: "Costed BOM Evolution", icon: Layers },
  { label: "Vendor Identification", icon: Users },
  { label: "Function Cost-Worth Analysis", icon: CheckCircle },
  { label: "Competitive Benchmark Report", icon: GitMerge },
];

const PCMKeyFindings = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-[#f7f8fa] dark:bg-[#0d0d14] relative overflow-hidden"
    >
      <Grid light />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <SectionLabel>Analysis</SectionLabel>
          <SectionHeading>
            Key findings{" "}
            <em className="not-italic text-[#0098AF]">&amp; deliverables.</em>
          </SectionHeading>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Key Findings – image removed, creative gradient header + enhanced list */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e] group shadow-sm"
          >
            {/* Creative header (no image) */}
            <div className="h-16 bg-gradient-to-r from-[#003C46] via-[#003C46] to-[#0098AF] flex items-center px-6">
              <div className="flex items-center gap-3">
                <div className="w-7 h-px bg-white/60" />
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-white">
                  Key Findings
                </p>
              </div>
            </div>

            <div className="divide-y divide-[#e8eaed] dark:divide-[#1e1e2e] bg-white dark:bg-[#0a0a0f]">
              {keyFindings.map((finding, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -8 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.15 + index * 0.06 }}
                  className="flex items-start gap-4 px-6 py-5 hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-all duration-200 group/item"
                >
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#0098AF] ring-2 ring-[#0098AF]/20 flex-shrink-0 transition-all group-hover/item:scale-125" />
                  <p className="text-[13px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
                    {finding}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Deliverables – image removed, creative gradient header + icon grid */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e] group shadow-sm"
          >
            {/* Creative header (no image) */}
            <div className="h-16 bg-gradient-to-r from-[#003C46] via-[#003C46] to-[#0098AF] flex items-center px-6">
              <div className="flex items-center gap-3">
                <div className="w-7 h-px bg-white/60" />
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-white">
                  Deliverables
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-[#e8eaed] dark:bg-[#1e1e2e]">
              {deliverables.map(({ label, icon: Icon }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.04 }}
                  className="flex items-center gap-3 bg-white dark:bg-[#0a0a0f] hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-all duration-200 px-5 py-4 group/item"
                >
                  <div className="p-1.5 bg-[#0098AF]/10 rounded-lg transition-all group-hover/item:bg-[#0098AF]/20">
                    <Icon className="w-4 h-4 text-[#0098AF]" />
                  </div>
                  <span className="text-[12px] text-[#556677] dark:text-[#8899aa] font-medium">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
//  Summary of Gains 

const summaryGains = [
  { label: "35% Cost of Goods Reduction", icon: TrendingUp },
  { label: "20% Margin Increase", icon: BarChart },
  { label: "Improved Market Position with Competitive SKUs", icon: Target },
  { label: "Engineering Backbone for Scalable SKU Platforming", icon: Layers },
  { label: "Data-driven, Modular, Manufacturing-Friendly Design", icon: Award },
];

const businessImpacts = [
  { metric: "Manufacturing Cost per Unit", before: "100%", after: "65%" },
  { metric: "Gross Profit Margin", before: "~30%", after: "45–50%" },
  { metric: "Component Count (Avg.)", before: "High", after: "Reduced" },
  {
    metric: "Part Standardization",
    before: "Fragmented",
    after: "Streamlined",
  },
  { metric: "Engineering Complexity", before: "High", after: "Optimized" },
  { metric: "Time-to-Market (Future SKUs)", before: "100%", after: "~70%" },
];

const SummaryGains = () => {
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
          className="mb-12"
        >
          <SectionLabel>Results</SectionLabel>
          <SectionHeading>
            Business impact{" "}
            <em className="not-italic text-[#0098AF]">&amp; gains.</em>
          </SectionHeading>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Business impact table */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-[#e8eaed] dark:border-[#1e1e2e] bg-[#f7f8fa] dark:bg-[#0d0d14]">
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#aabbcc]">
                Business Impact
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e8eaed] dark:border-[#1e1e2e]">
                    {["Metric", "Before", "After"].map((h) => (
                      <th
                        key={h}
                        className="text-left px-5 py-3.5 text-[11px] font-bold tracking-wider text-[#aabbcc] uppercase"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8eaed] dark:divide-[#1e1e2e]">
                  {businessImpacts.map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.03] transition-colors duration-150"
                    >
                      <td className="px-5 py-3.5 text-[13px] font-semibold text-[#003C46] dark:text-white">
                        {row.metric}
                      </td>
                      <td className="px-5 py-3.5 text-[13px] text-[#778899] dark:text-[#6677aa] line-through">
                        {row.before}
                      </td>
                      <td className="px-5 py-3.5 text-[13px] font-semibold text-[#0098AF]">
                        {row.after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Summary of gains */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-[#e8eaed] dark:border-[#1e1e2e] bg-[#f7f8fa] dark:bg-[#0d0d14]">
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#aabbcc]">
                Summary of Gains
              </p>
            </div>
            <div className="divide-y divide-[#e8eaed] dark:divide-[#1e1e2e]">
              {summaryGains.map(({ label, icon: Icon }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 8 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.2 + index * 0.07 }}
                  className="group flex items-center gap-4 px-6 py-4 hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-150"
                >
                  <div className="w-9 h-9 rounded-full bg-[#0098AF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0098AF] transition-colors duration-200">
                    <Icon className="w-4 h-4 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="text-[13px] font-medium text-[#556677] dark:text-[#8899aa] group-hover:text-[#003C46] dark:group-hover:text-white transition-colors duration-200">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

//  CTA ─

const CTASection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-24 bg-[#003C46] overflow-hidden"
    >
      <Grid />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0098AF]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0098AF]/60 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-4">
          Ready to Optimize?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight mb-5">
          Ready to optimize your{" "}
          <em className="not-italic text-[#0098AF]">manufacturing costs?</em>
        </h2>
        <p className="text-[15px] text-white/65 leading-relaxed max-w-2xl mx-auto mb-9">
          Our engineering team specializes in cost optimization without
          compromising quality. Discover how we can improve your product's
          market competitiveness.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <button className="group inline-flex items-center gap-2 px-7 py-3 bg-[#0098AF] hover:bg-[#007B8F] text-white text-[15px] font-semibold rounded-lg transition-colors duration-200">
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </Link>
          <Link href="/projects">
            <button className="group inline-flex items-center gap-2 px-7 py-3 border border-white/20 hover:border-white/40 hover:bg-white/[0.06] text-white text-[15px] font-semibold rounded-lg transition-colors duration-200">
              View More Projects
              <Globe className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

//  Page 

export default function ProductCostManagement() {
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0f]">
      <MegaMenu />
      <Hero />
      <AboutSection />
      <Objectives />
      <ProjectApproach />
      <PCMKeyFindings />
      <SummaryGains />
      <CTASection />
      <Footer />
    </div>
  );
}
