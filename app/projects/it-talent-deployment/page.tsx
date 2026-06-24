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
} from "lucide-react";
import Image from "next/image";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/footer";
import { ArrowDown } from "lucide-react";
import heroImage from "@/constants/images/projects/it/hero.webp";
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
        alt="IT Talent Deployment"
        fill
        className="object-cover"
        priority
      />

      {/* Overlays — no grid on photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 via-[#004f5e]/75 to-[#0098AF]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#002930]/50 via-transparent to-transparent" />

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0098AF]/50 to-transparent" />

      {/* Particles */}
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

      {/* Content */}
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
          <span className="text-[#0098AF]/90">IT Talent Deployment</span>
        </motion.nav>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3"
        >
          Case Study · Recruitment
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold text-white leading-tight max-w-2xl font-display"
        >
          IT Talent <em className="not-italic text-[#0098AF]">Deployment.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-4 text-[15px] text-white/65 max-w-xl leading-relaxed"
        >
          A proven contract staffing model for IT development — seamless
          integration, exceptional results.
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
            IT Talent <em className="not-italic text-[#0098AF]">Deployment.</em>
          </SectionHeading>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-xl leading-relaxed">
            Showcasing our latest success in IT talent deployment and staffing
            excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl overflow-hidden group hover:border-[#0098AF]/30 transition-colors duration-200 relative"
        >
          <div className="md:flex">
            {/* Image */}
            <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
              <Image
                src={aboutImage}
                alt="IT talent deployment team"
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

            {/* Content */}
            <div className="md:w-3/5 p-8 md:p-12">
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-2">
                Recruitment Support
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#003C46] dark:text-white font-display mb-1">
                IT Talent Deployment
              </h3>
              <p className="text-[15px] font-semibold text-[#0098AF] mb-5">
                Software Development Team
              </p>
              <p className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed mb-7">
                Successfully recruited and deployed a team of skilled full-stack
                developers (React & Node.js) for a growing IT company. Ensured
                quick turnaround, seamless onboarding, and end-to-end compliance
                support.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Zap, label: "Rapid deployment" },
                  { icon: Shield, label: "Full compliance" },
                  { icon: Users, label: "Expert team" },
                  { icon: Target, label: "Zero attrition" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 text-[13px] text-[#556677] dark:text-[#8899aa]"
                  >
                    <Icon className="w-4 h-4 text-[#0098AF] flex-shrink-0" />
                    {label}
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
        {/* Dark card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-[#003C46] rounded-xl overflow-hidden border border-[#0098AF]/20 relative group"
        >
          <Grid />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0098AF]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />

          <div className="md:flex relative z-10">
            {/* Image */}
            <div className="md:w-2/5 relative overflow-hidden h-72 md:h-auto">
              <Image
                src={objectiveImage}
                alt="Project overview"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/40 to-transparent" />
              {/* Stats overlay */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-white font-display">
                        12
                      </p>
                      <p className="text-[11px] text-white/70 uppercase tracking-wider">
                        Months
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white font-display">
                        0%
                      </p>
                      <p className="text-[11px] text-white/70 uppercase tracking-wider">
                        Attrition
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-3/5 p-8 md:p-12 text-white">
              <SectionLabel>Case Background</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6">
                Project Overview
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-[15px] text-white/75 leading-relaxed">
                  A rapidly growing IT firm needed a team of full-stack
                  developers to fast-track the development of a new SaaS
                  platform. They were seeking skilled professionals proficient
                  in{" "}
                  <span className="text-[#0098AF] font-semibold">
                    React.js and Node.js
                  </span>
                  , with a strong understanding of scalable architecture and
                  agile development.
                </p>
                <p className="text-[15px] text-white/65 leading-relaxed">
                  The client required quick hiring with minimal internal
                  resource overhead, and full compliance coverage including
                  payroll, taxation, and documentation.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    icon: Clock,
                    title: "Time Pressure",
                    sub: "Rapid deployment needed",
                  },
                  {
                    icon: Shield,
                    title: "Full Compliance",
                    sub: "End-to-end coverage",
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

//  Objective ─

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
          {/* Image */}
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

          {/* Dark card */}
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
                To staff and manage a{" "}
                <span className="text-[#0098AF] font-semibold">
                  high-performing full-stack development team
                </span>{" "}
                on a contract, ensuring smooth onboarding, delivery readiness,
                and full compliance coverage.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Full compliance coverage",
                  "Seamless onboarding",
                  "Delivery readiness",
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
    title: "Requirement Scoping",
    description:
      "Collaborated with the client to finalize job descriptions, skill expectations, and team composition.",
    icon: Target,
  },
  {
    title: "Talent Sourcing & Screening",
    description:
      "Leveraged our tech talent pool to identify and evaluate suitable candidates.",
    icon: Users,
  },
  {
    title: "Technical Evaluation",
    description:
      "Conducted pre-interviews, coding tests, and cultural fit assessments.",
    icon: Code,
  },
  {
    title: "Onboarding & Documentation",
    description:
      "Handled all offer roll-outs, background verification, and documentation.",
    icon: CheckCircle,
  },
  {
    title: "Payroll & Compliance",
    description:
      "Managed PF, ESI, taxation, and monthly payroll with complete compliance support.",
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
            A proven contract staffing model tailored for IT development roles —
            ensuring seamless integration and exceptional results.
          </p>
        </motion.div>

        {/* gap-px grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e8eaed] dark:bg-[#1e1e2e] rounded-xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e]">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group bg-white dark:bg-[#0a0a0f] hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-200 p-6 relative"
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
    title: "Rapid Talent Onboarding",
    description: "From requirement to deployment in record time.",
    icon: Zap,
    metric: "< 3 weeks",
  },
  {
    title: "Exceptional Team Stability",
    description: "Zero attrition during the entire contract period.",
    icon: Shield,
    metric: "0% attrition",
  },
  {
    title: "Accelerated Integration",
    description: "Developers aligned with sprint goals within the first week.",
    icon: TrendingUp,
    metric: "5 days",
  },
  {
    title: "Process Automation Ready",
    description:
      "All timesheets, billing, and compliance handled through automation.",
    icon: CheckCircle,
    metric: "100% automated",
  },
];

const kpiData = [
  {
    metric: "Hiring Turnaround Time",
    before: "7–9 weeks",
    after: "Less than 3 weeks",
    improvement: "70% faster",
  },
  {
    metric: "Team Stability (Attrition Rate)",
    before: "~20% per quarter",
    after: "0% attrition in 6 months",
    improvement: "100% retention",
  },
  {
    metric: "Sprint Integration Time",
    before: "2–3 weeks",
    after: "Within 5 working days",
    improvement: "75% faster",
  },
  {
    metric: "Compliance / Billing Accuracy",
    before: "Manual + delayed",
    after: "100% automated, on-time",
    improvement: "Full automation",
  },
];

const services = [
  { name: "Contract Staffing", icon: Users },
  { name: "Full-Stack Developer Hiring", icon: Code },
  { name: "Payroll & Compliance", icon: Shield },
  { name: "HR Documentation & Support", icon: CheckCircle },
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
            <em className="not-italic text-[#0098AF]">&amp; outcomes.</em>
          </SectionHeading>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-xl leading-relaxed">
            Measurable impact and exceptional results that exceeded client
            expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
          {/* Result cards — 3 cols */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
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

          {/* Services delivered — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-[#f7f8fa] dark:bg-[#0d0d14] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl overflow-hidden"
          >
            <div className="px-5 py-3.5 border-b border-[#e8eaed] dark:border-[#1e1e2e]">
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#aabbcc]">
                Services Delivered
              </p>
            </div>
            <div className="divide-y divide-[#e8eaed] dark:divide-[#1e1e2e]">
              {services.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 px-5 py-4 hover:bg-white dark:hover:bg-[#0a0a0f] transition-colors duration-150"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0098AF]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#0098AF]" />
                  </div>
                  <span className="text-[13px] font-medium text-[#556677] dark:text-[#8899aa]">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* KPI table */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-[#e8eaed] dark:border-[#1e1e2e] bg-[#f7f8fa] dark:bg-[#0d0d14]">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#aabbcc]">
              Performance Metrics Comparison
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e8eaed] dark:border-[#1e1e2e]">
                  {["Metric", "Before", "After", "Improvement"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-6 py-4 text-[12px] font-bold tracking-wider text-[#aabbcc] uppercase"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e8eaed] dark:divide-[#1e1e2e]">
                {kpiData.map((row, i) => (
                  <tr
                    key={i}
                    className="group hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.03] transition-colors duration-150"
                  >
                    <td className="px-6 py-4 text-[13px] font-semibold text-[#003C46] dark:text-white">
                      {row.metric}
                    </td>
                    <td className="px-6 py-4 text-[13px] text-[#778899] dark:text-[#6677aa]">
                      {row.before}
                    </td>
                    <td className="px-6 py-4 text-[13px] font-semibold text-[#0098AF]">
                      {row.after}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#0098AF]/10 text-[#0098AF] text-[11px] font-bold tracking-wide">
                        {row.improvement}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

//  Tech & Testimonial ─

const technologies = [
  { name: "React.js", icon: Code, level: "Expert" },
  { name: "Node.js", icon: Globe, level: "Expert" },
  { name: "PostgreSQL", icon: Database, level: "Advanced" },
  { name: "CI/CD & GitLab", icon: GitBranch, level: "Advanced" },
  { name: "API Integration", icon: Globe, level: "Expert" },
  { name: "Microservices", icon: Code, level: "Advanced" },
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
            Technologies{" "}
            <em className="not-italic text-[#0098AF]">&amp; roles placed.</em>
          </SectionHeading>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-[#0a0a0f] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-[#e8eaed] dark:border-[#1e1e2e]">
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#aabbcc]">
                Technology Stack
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
              "The team delivered quality candidates within days, and took
              complete responsibility from onboarding to payroll. This allowed
              us to scale faster and stay focused on our product roadmap. Their
              expertise in full-stack development was exactly what we needed."
            </blockquote>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0098AF]/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#0098AF]" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#003C46] dark:text-white">
                  HR Head
                </p>
                <p className="text-[12px] text-[#aabbcc]">IT Services Client</p>
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
          <em className="not-italic text-[#0098AF]">IT team?</em>
        </h2>
        <p className="text-[15px] text-white/65 leading-relaxed max-w-2xl mx-auto mb-9">
          Let us help you build a high-performing team with zero hassle and
          guaranteed results.
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
