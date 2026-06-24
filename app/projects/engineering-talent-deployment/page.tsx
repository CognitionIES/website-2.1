"use client";

import React, { useRef } from "react";
import {
  ChevronRight,
  Home,
  ArrowRight,
  Users,
  Code,
  Database,
  GitBranch,
  Globe,
  CheckCircle,
  Clock,
  TrendingUp,
  Zap,
  Shield,
  Target,
  ArrowDown,
} from "lucide-react";
import Image from "next/image";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/footer";
import heroImage from "@/constants/images/hero/pexels-edmond-dantes-8068878.webp";
import aboutImage from "@/constants/images/projects/it/about.webp";
import objectiveImage from "@/constants/images/projects/it/objective.webp";
import overviewImage from "@/constants/images/projects/it/overview.webp";

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
        alt="Engineering Talent Deployment"
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
          <span className="text-[#0098AF]/90">
            Engineering Talent Deployment
          </span>
        </motion.nav>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3"
        >
          Case Study · Engineering Staffing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold text-white leading-tight max-w-2xl font-display"
        >
          Engineering Talent{" "}
          <em className="not-italic text-[#0098AF]">Deployment.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-4 text-[15px] text-white/65 max-w-xl leading-relaxed"
        >
          Strategic staffing solution for engineering teams across multiple
          disciplines.
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

      {/* Bottom clip — next section is white */}
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

//  Project Objective ──

const ProjectObjective = () => {
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
          <SectionLabel>Project Objective</SectionLabel>
          <SectionHeading>
            Engineering Talent{" "}
            <em className="not-italic text-[#0098AF]">Resourcing.</em>
          </SectionHeading>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-xl leading-relaxed">
            Showcasing our latest success in engineering talent deployment and
            staffing excellence.
          </p>
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
                alt="Engineering talent deployment"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/20 to-transparent" />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="px-3 py-1 bg-[#0098AF] text-white text-[11px] font-bold tracking-wider rounded-full">
                  Contractual Staffing
                </span>
                <span className="px-3 py-1 bg-white/90 dark:bg-[#0d0d14]/90 text-[#003C46] dark:text-white text-[11px] font-bold tracking-wider rounded-full">
                  Zero Attrition
                </span>
              </div>
            </div>
            <div className="md:w-3/5 p-8 md:p-12">
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098af] mb-2">
                Multidisciplinary Recruitment
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#003C46] dark:text-white font-display mb-1">
                Engineering Talent Resourcing
              </h3>
              <p className="text-[15px] font-semibold text-[#0098AF] mb-5">
                Design, Plant & EPC Projects
              </p>
              <p className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed mb-7">
                Successfully deployed key engineering personnel including
                Mechanical Design Engineers, Electrical & Instrumentation (E&I)
                Engineers, and SmartPlant/AutoCAD-based tool specialists for
                ongoing plant engineering and industrial design projects.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    label: "Engagement Type",
                    value: "Contractual & Permanent Staffing",
                  },
                  {
                    label: "Core Tools",
                    value:
                      "SmartPlant 3D, AutoCAD, CAESAR II, STAAD.Pro, SPI, SolidWorks",
                  },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 p-4 bg-[#f7f8fa] dark:bg-[#0d0d14] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-lg"
                  >
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0098AF] flex-shrink-0" />
                    <div>
                      <p className="text-[12px] font-bold text-[#aabbcc] uppercase tracking-wider mb-0.5">
                        {label}
                      </p>
                      <p className="text-[13px] text-[#556677] dark:text-[#8899aa]">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </motion.div>
      </div>
    </section>
  );
};

//  Project Overview 

const ProjectOverview = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-[#f7f8fa] dark:bg-[#0d0d14] relative overflow-hidden"
    >
      <Grid light />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-[#003C46] rounded-xl overflow-hidden border border-[#0098AF]/20 relative group"
        >
          <Grid />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0098AF]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="md:flex relative z-10">
            <div className="md:w-2/5 relative overflow-hidden h-72 md:h-auto">
              <Image
                src={objectiveImage}
                alt="Project overview"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/40 to-transparent" />
            </div>
            <div className="md:w-3/5 p-8 md:p-12 text-white">
              <SectionLabel>Case Background</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6">
                Project Overview
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-[15px] text-white/75 leading-relaxed">
                  A major engineering project required rapid mobilization of
                  skilled professionals across mechanical, electrical, and
                  piping disciplines. The client needed engineers familiar with
                  advanced design tools and standards, capable of integrating
                  with their existing offshore project support team.
                </p>
                <p className="text-[15px] text-white/65 leading-relaxed">
                  This project demanded not just technical skill but also domain
                  familiarity, tool-specific expertise, and quick adaptability
                  to client processes. Our challenge was to ensure full
                  operational readiness in under four weeks while ensuring team
                  stability over the long term.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    icon: Clock,
                    title: "Niche Roles",
                    sub: "Requiring specific tool proficiency",
                  },
                  {
                    icon: Shield,
                    title: "Standardized Hiring",
                    sub: "Across departments with varied timelines",
                  },
                ].map(({ icon: Icon, title, sub }) => (
                  <div
                    key={title}
                    className="flex items-start gap-3 p-4 bg-white/[0.07] border border-white/10 rounded-xl"
                  >
                    <Icon className="w-4 h-4 text-[#0098AF] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[13px] font-semibold text-white mb-0.5">
                        {title}
                      </p>
                      <p className="text-[12px] text-white/55">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

//  Objectives 

const Objectives = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-white dark:bg-[#0a0a0f] relative overflow-hidden"
    >
      <Grid light />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e] group"
          >
            <Image
              src={overviewImage}
              alt="Objective"
              width={800}
              height={500}
              className="w-full h-[340px] md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/30 to-transparent" />
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/90 dark:bg-[#0d0d14]/90 rounded-full border border-[#e8eaed] dark:border-[#1e1e2e]">
              <Target className="w-3.5 h-3.5 text-[#0098AF]" />
              <span className="text-[12px] font-semibold text-[#003C46] dark:text-white">
                Mission Critical
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#003C46] rounded-xl p-8 md:p-10 relative overflow-hidden border border-[#0098AF]/20"
          >
            <Grid />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0098AF]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="relative z-10">
              <SectionLabel>Our Objective</SectionLabel>
              <h2 className="text-3xl font-bold text-white font-display mb-5">
                Objective
              </h2>
              <p className="text-[15px] text-white/75 leading-relaxed mb-6">
                Delivering experienced engineering professionals to support
                design, development, and execution across{" "}
                <span className="text-[#0098AF] font-semibold">
                  capital projects, manufacturing setups, and plant engineering
                  functions.
                </span>
              </p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Full compliance coverage",
                  "Seamless onboarding",
                  "Domain-specific tool expertise",
                  "Zero attrition target",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3.5 bg-white/[0.07] border border-white/10 rounded-lg"
                  >
                    <CheckCircle className="w-4 h-4 text-[#0098AF] flex-shrink-0" />
                    <span className="text-[13px] text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2.5 mt-6">
                <div className="w-2 h-2 rounded-full bg-[#0098AF]" />
                <span className="text-[13px] font-semibold text-[#0098AF]">
                  Mission Accomplished
                </span>
                <CheckCircle className="w-4 h-4 text-[#0098AF]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

//  Approach ──

const steps = [
  {
    title: "Requirement Scoping & Skill Mapping",
    description:
      "Worked closely with project leads to define skill sets, project alignment, and tool-specific criteria.",
    icon: Target,
  },
  {
    title: "Sourcing Strategy",
    description:
      "Deployed targeted hiring campaigns across mechanical, electrical, and instrumentation talent pools.",
    icon: Users,
  },
  {
    title: "Tool-Based Evaluation",
    description:
      "Screened candidates for software/tool proficiency (e.g., SmartPlant 3D, CAESAR II, STAAD, SPI).",
    icon: Code,
  },
  {
    title: "Onboarding & Compliance",
    description:
      "Streamlined background verification, documentation, and payroll onboarding.",
    icon: CheckCircle,
  },
  {
    title: "Post-Deployment Support",
    description:
      "Continuous check-ins, engagement tracking, and attrition control processes.",
    icon: Shield,
  },
  {
    title: "Ongoing Coordination",
    description:
      "Regular follow-ups for performance check-ins, engagement, and attrition control.",
    icon: TrendingUp,
  },
];

const ProjectApproach = () => {
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
          <SectionLabel>Methodology</SectionLabel>
          <SectionHeading>
            Our <em className="not-italic text-[#0098AF]">approach.</em>
          </SectionHeading>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-xl leading-relaxed">
            A proven contract staffing model tailored to engineering roles —
            ensuring seamless integration and exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e8eaed] dark:bg-[#1e1e2e] rounded-xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e]">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group bg-white dark:bg-[#0a0a0f] hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-200 p-7 relative"
              >
                <span className="text-[10px] font-bold tracking-[0.15em] text-[#aabbcc] mb-4 block">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="w-10 h-10 rounded-full bg-[#0098AF]/10 flex items-center justify-center mb-4 group-hover:bg-[#0098AF] transition-colors duration-200">
                  <Icon className="w-5 h-5 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-[19px] font-semibold text-[#003C46] dark:text-white font-display mb-2 group-hover:text-[#0098AF] transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-[15px] text-[#778899] dark:text-[#6677aa] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

//  Key Results ──

const results = [
  {
    title: "Rapid Deployment",
    description: "From requirement to full team deployment",
    icon: Zap,
    metric: "< 4 weeks",
  },
  {
    title: "Zero Attrition",
    description: "Perfect team retention throughout contract period",
    icon: Shield,
    metric: "0% turnover",
  },
  {
    title: "Cost Efficiency",
    description: "Reduced hiring costs through streamlined process",
    icon: TrendingUp,
    metric: "35% savings",
  },
  {
    title: "Quality Assurance",
    description: "All engineers met or exceeded expectations",
    icon: CheckCircle,
    metric: "100% success",
  },
];

const keyPositions = [
  { name: "Mechanical Design Engineers", count: "8", icon: Users },
  { name: "Electrical & Instrumentation Engineers", count: "6", icon: Code },
  { name: "Piping Layout & Stress Engineers", count: "5", icon: Target },
  { name: "SmartPlant & SPI Specialists", count: "4", icon: Database },
  { name: "Plant Maintenance Support", count: "3", icon: Shield },
  { name: "HVAC & Utility Systems Designers", count: "2", icon: CheckCircle },
];

const kpiData = [
  {
    metric: "Hiring Turnaround Time",
    before: "8–10 weeks",
    after: "< 4 weeks",
    improvement: "60% faster",
  },
  {
    metric: "Team Retention Rate",
    before: "85%",
    after: "100%",
    improvement: "+15%",
  },
  {
    metric: "Client Satisfaction Score",
    before: "8.2/10",
    after: "9.8/10",
    improvement: "+20%",
  },
  {
    metric: "Compliance Accuracy",
    before: "Manual process",
    after: "Fully automated",
    improvement: "100%",
  },
];

const KeyResults = () => {
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
          <SectionLabel>Outcomes</SectionLabel>
          <SectionHeading>
            Key results{" "}
            <em className="not-italic text-[#0098AF]">&amp; impact.</em>
          </SectionHeading>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-xl leading-relaxed">
            Measurable outcomes that exceeded expectations and delivered
            exceptional value.
          </p>
        </motion.div>

        {/* 4 metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group bg-[#f7f8fa] dark:bg-[#0d0d14] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl p-6 hover:border-[#0098AF]/30 transition-colors duration-200 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#0098AF]/10 flex items-center justify-center group-hover:bg-[#0098AF] transition-colors duration-200">
                    <Icon className="w-4 h-4 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="text-[22px] font-bold text-[#0098AF] font-display">
                    {result.metric}
                  </span>
                </div>
                <h3 className="text-[14px] font-semibold text-[#003C46] dark:text-white mb-1.5 group-hover:text-[#0098AF] transition-colors duration-200">
                  {result.title}
                </h3>
                <p className="text-[13px] text-[#778899] dark:text-[#6677aa] leading-relaxed">
                  {result.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Positions + KPI table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Key positions */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-[#f7f8fa] dark:bg-[#0d0d14] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl overflow-hidden"
          >
            <div className="px-5 py-3.5 border-b border-[#e8eaed] dark:border-[#1e1e2e]">
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#aabbcc]">
                Key Positions Filled
              </p>
            </div>
            <div className="divide-y divide-[#e8eaed] dark:divide-[#1e1e2e]">
              {keyPositions.map(({ name, count, icon: Icon }) => (
                <div
                  key={name}
                  className="flex items-center justify-between px-5 py-3.5 hover:bg-white dark:hover:bg-[#0a0a0f] transition-colors duration-150"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#0098AF]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-[#0098AF]" />
                    </div>
                    <span className="text-[13px] font-medium text-[#556677] dark:text-[#8899aa]">
                      {name}
                    </span>
                  </div>
                  <span className="text-[13px] font-bold text-[#003C46] dark:text-white">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* KPI table */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl overflow-hidden"
          >
            <div className="px-5 py-3.5 border-b border-[#e8eaed] dark:border-[#1e1e2e] bg-[#f7f8fa] dark:bg-[#0d0d14]">
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#aabbcc]">
                Performance Metrics
              </p>
            </div>
            <div className="divide-y divide-[#e8eaed] dark:divide-[#1e1e2e]">
              {kpiData.map((row, i) => (
                <div
                  key={i}
                  className="px-5 py-4 hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.03] transition-colors duration-150"
                >
                  <p className="text-[13px] font-semibold text-[#003C46] dark:text-white mb-1.5">
                    {row.metric}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-[12px] text-[#778899] dark:text-[#6677aa]">
                      <span className="line-through mr-2">{row.before}</span>
                      <span className="text-[#0098AF] font-semibold">
                        {row.after}
                      </span>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#0098AF]/10 text-[#0098AF] text-[11px] font-bold">
                      {row.improvement}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Success summary banner */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#003C46] rounded-xl p-8 text-center relative overflow-hidden border border-[#0098AF]/20"
        >
          <Grid />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0098AF]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full bg-[#0098AF]/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-[#0098AF]" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display mb-3">
              Project Successfully Completed
            </h3>
            <p className="text-[15px] text-white/65 max-w-2xl mx-auto leading-relaxed">
              Delivered a complete engineering team of 40+ professionals with
              zero attrition, exceeding all performance metrics and client
              expectations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

//  Tools & Testimonial ──

const technologies = [
  { name: "SmartPlant 3D", icon: Code, level: "Expert" },
  { name: "AutoCAD", icon: Globe, level: "Expert" },
  { name: "CAESAR II", icon: Database, level: "Advanced" },
  { name: "STAAD.Pro", icon: GitBranch, level: "Advanced" },
  { name: "SPI", icon: Globe, level: "Expert" },
  { name: "SolidWorks", icon: Code, level: "Advanced" },
];

const TechAndTestimonial = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

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
          <SectionLabel>Technology</SectionLabel>
          <SectionHeading>
            Tools{" "}
            <em className="not-italic text-[#0098AF]">&amp; testimonial.</em>
          </SectionHeading>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Core tools */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-[#0a0a0f] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-[#e8eaed] dark:border-[#1e1e2e]">
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#aabbcc]">
                Core Tools
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[#e8eaed] dark:bg-[#1e1e2e]">
              {technologies.map(({ name, icon: Icon, level }) => (
                <div
                  key={name}
                  className="group bg-white dark:bg-[#0a0a0f] hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-150 p-5 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-full bg-[#0098AF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0098AF] transition-colors duration-200">
                    <Icon className="w-4 h-4 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#003C46] dark:text-white">
                      {name}
                    </p>
                    <p className="text-[11px] text-[#aabbcc]">{level}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-[#0a0a0f] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl p-8 relative overflow-hidden group hover:border-[#0098AF]/30 transition-colors duration-200"
          >
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-4">
              Client Testimonial
            </p>
            <blockquote className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-[1.85] italic mb-7">
              "Cognition's engineering staffing model made it easy for us to
              quickly bring in a skilled, multi-disciplinary team with the right
              tools and experience. Their support helped us stay on schedule
              without putting extra pressure on our internal recruitment team."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0098AF]/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#0098AF]" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#003C46] dark:text-white">
                  HR Head
                </p>
                <p className="text-[12px] text-[#aabbcc]">Engineering Client</p>
              </div>
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
          Ready to Scale?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight mb-5">
          Ready to scale your{" "}
          <em className="not-italic text-[#0098AF]">team?</em>
        </h2>
        <p className="text-[15px] text-white/65 leading-relaxed max-w-2xl mx-auto mb-9">
          Let us help you build a high-performing engineering team with zero
          hassle and guaranteed results.
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

//  App ─

function App() {
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0f]">
      <MegaMenu />
      <Hero />
      <ProjectObjective />
      <ProjectOverview />
      <Objectives />
      <ProjectApproach />
      <KeyResults />
      <TechAndTestimonial />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
