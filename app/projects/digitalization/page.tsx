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
  Globe,
  Cpu,
  LayoutDashboard,
  ScanLine,
  BrainCircuit,
} from "lucide-react";
import Image from "next/image";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/footer";
import heroImage from "@/constants/images/home/our-recent-projects/digitalization.webp";
import aboutImage from "@/constants/images/projects/digitalization/about.webp";
import objectiveImage from "@/constants/images/projects/digitalization/objective.webp";
import outcomeImage from "@/constants/images/projects/digitalization/outcome.webp";

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
        alt="Digitalization"
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
          <span className="text-[#0098AF]/90">Digitalization</span>
        </motion.nav>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3"
        >
          Case Study · Digital Transformation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold text-white leading-tight max-w-2xl font-display"
        >
          Digitalization <em className="not-italic text-[#0098AF]">project.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-4 text-[15px] text-white/65 max-w-xl leading-relaxed"
        >
          Transforming industries with cutting-edge digital solutions — from
          physical plant to live digital twin.
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

//  Project Overview (AboutSection) ──

const ProjectOverview = () => {
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
          <SectionLabel>Project Overview</SectionLabel>
          <SectionHeading>
            Build & Operate{" "}
            <em className="not-italic text-[#0098AF]">model.</em>
          </SectionHeading>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-xl leading-relaxed">
            End-to-end ownership of a manufacturing plant's digital
            transformation journey.
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
                alt="Digitalization project"
                fill
                className="object-cover transition-transform duration-500 object-[90%_center] md:object-[95%_center] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/25 to-transparent" />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="px-3 py-1 bg-[#0098AF] text-white text-[11px] font-bold tracking-wider rounded-full">
                  Build & Operate
                </span>
                <span className="px-3 py-1 bg-white/90 dark:bg-[#0d0d14]/90 text-[#003C46] dark:text-white text-[11px] font-bold tracking-wider rounded-full">
                  Digital Twin
                </span>
              </div>
            </div>
            <div className="md:w-3/5 p-8 md:p-12 text-justify">
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098af] mb-2">
                Background
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#003C46] dark:text-white font-display mb-4">
                Project Overview
              </h3>
              <div className="space-y-3 mb-7">
                <p className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
                  A manufacturing plant sought to transition from manual,
                  disconnected processes to a fully digital operating model. The
                  challenges included layout inaccuracies, lack of plant
                  visibility, and frequent rework due to design-installation
                  gaps.
                </p>
                <p className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
                  Under a Build & Operate model, Cognition IES took full
                  ownership — from digital engineering setup to real-time
                  operational monitoring — delivering a live digital twin
                  ecosystem and ongoing operational support.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: ScanLine, label: "Layout inaccuracies" },
                  { icon: Zap, label: "No plant visibility" },
                  { icon: Shield, label: "Design-install gaps" },
                  { icon: TrendingUp, label: "Manual processes" },
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

//  Objective ─

const Objective = () => {
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
                alt="Objective"
                fill
                className="object-cover transition-transform duration-500 object-[5%_center] md:object-[5%_center] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/40 to-transparent" />
            </div>
            <div className="md:w-3/5 p-8 md:p-12 text-white">
              <SectionLabel>Our Objective</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-5">
                Objective
              </h2>
              <p className="text-[15px] text-white/75 leading-relaxed mb-6">
                To build and operate a fully digitized manufacturing environment
                by integrating physical plant data with real-time digital
                intelligence — enhancing accuracy, reducing downtime, and
                enabling{" "}
                <span className="text-[#0098AF] font-semibold">
                  predictive operations.
                </span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: Target, label: "Full operational accuracy" },
                  {
                    icon: BrainCircuit,
                    label: "Real-time digital intelligence",
                  },
                  { icon: Zap, label: "Reduced downtime" },
                  { icon: TrendingUp, label: "Predictive operations" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-3.5 bg-white/[0.07] border border-white/10 rounded-lg"
                  >
                    <Icon className="w-4 h-4 text-[#0098AF] flex-shrink-0" />
                    <span className="text-[13px] text-white/80">{label}</span>
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

//  Key Roles (Scope) ──

const scopeItems = [
  {
    title: "Process Lead",
    desc: "Oversaw process design and validation, ensuring alignment with operational requirements and project specifications.",
    icon: Target,
  },
  {
    title: "Structural Design Engineer",
    desc: "Designed and validated structural components, ensuring compliance with engineering standards and plant layout requirements.",
    icon: Shield,
  },
  {
    title: "Piping Design Engineer",
    desc: "Developed and validated piping designs, ensuring integration with the overall plant layout and operational efficiency.",
    icon: Code,
  },
  {
    title: "AVEVA – E3D & PCM Tool Experts",
    desc: "Utilized AVEVA E3D and PCM tools to create and manage 3D models, supporting design conformity and digital twin operations.",
    icon: Cpu,
  },
];

const Scope = () => {
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
          <SectionLabel>Team Deployed</SectionLabel>
          <SectionHeading>
            Key roles <em className="not-italic text-[#0098AF]">deployed.</em>
          </SectionHeading>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-xl leading-relaxed">
            To support build, validation, and continuous operations, the
            following expert roles were staffed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e8eaed] dark:bg-[#1e1e2e] rounded-xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e]">
          {scopeItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white dark:bg-[#0a0a0f] hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-200 p-6 relative"
              >
                <span className="text-[10px] font-bold tracking-[0.15em] text-[#aabbcc] mb-4 block">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="w-10 h-10 rounded-full bg-[#0098AF]/10 flex items-center justify-center mb-4 group-hover:bg-[#0098AF] transition-colors duration-200">
                  <Icon className="w-5 h-5 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-[19px] font-semibold text-[#003C46] dark:text-white font-display mb-2 group-hover:text-[#0098AF] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[#778899] dark:text-[#6677aa] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-[13px] text-[#778899] dark:text-[#6677aa] leading-relaxed max-w-3xl"
        >
          These professionals played a crucial role in plant layout validation,
          design conformity, and 3D model creation during the build phase, and
          provided continued engineering oversight for digital twin operations.
        </motion.p>
      </div>
    </section>
  );
};

//  Approach ──

const approachItems = [
  {
    title: "Digital Engineering Deployment",
    desc: "Laser scanning, 3D model generation, and as-built validation.",
    icon: ScanLine,
  },
  {
    title: "Domain-Specific Role Allocation",
    desc: "Placement of tool experts and design engineers across disciplines.",
    icon: Users,
  },
  {
    title: "Digital Twin Enablement",
    desc: "Layering of applications to create a responsive operational environment.",
    icon: Cpu,
  },
  {
    title: "Real-Time Operationalization",
    desc: "Dashboards, alerts, and proactive monitoring rolled out across teams.",
    icon: LayoutDashboard,
  },
  {
    title: "Sustained Operations",
    desc: "Ongoing support for optimization, upgrades, and training.",
    icon: Shield,
  },
];

const ApproachSection = () => {
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
            Build & Operate model{" "}
            <em className="not-italic text-[#0098AF]">approach.</em>
          </SectionHeading>
        </motion.div>

        {/* 5-item staggered list using border pattern */}
        <div className="space-y-px rounded-xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e]">
          {approachItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group flex items-start gap-5 bg-white dark:bg-[#0a0a0f] hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-200 px-7 py-5 relative"
              >
                <span className="text-[10px] font-bold tracking-[0.15em] text-[#aabbcc] mt-0.5 w-6 flex-shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="w-9 h-9 rounded-full bg-[#0098AF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0098AF] transition-colors duration-200">
                  <Icon className="w-4 h-4 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <h3 className="text-[19px] font-semibold text-[#003C46] dark:text-white font-display mb-1 group-hover:text-[#0098AF] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[#778899] dark:text-[#6677aa] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#e8eaed] dark:bg-[#1e1e2e]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

//  Outcomes ──

const outcomes = [
  {
    title: "Improved Accuracy",
    content:
      "3D validation reduced layout deviations drastically, saving hours in installation rework.",
    icon: Target,
  },
  {
    title: "Operational Efficiency",
    content:
      "Downtime was minimized through real-time alerts & predictive maintenance insights.",
    icon: Zap,
  },
  {
    title: "Energy Optimization",
    content:
      "Monitoring & simulation helped reduce energy consumption per unit produced.",
    icon: TrendingUp,
  },
  {
    title: "Scalable Infrastructure",
    content:
      "The platform is future-ready, adaptable for upcoming automation and robotics integration.",
    icon: Cpu,
  },
  {
    title: "Better Visibility",
    content:
      "Stakeholders access real-time status, performance metrics, and alerts via a centralized dashboard.",
    icon: LayoutDashboard,
  },
];

const metrics = [
  { metric: "Layout Error Rate", before: "~8%", after: "< 2%" },
  {
    metric: "Production Downtime",
    before: "12 hrs/month",
    after: "< 3 hrs/month",
  },
  {
    metric: "Rework due to fit issues",
    before: "5+ incidents/month",
    after: "0 incidents",
  },
];

const Outcome = () => {
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
            Key results{" "}
            <em className="not-italic text-[#0098AF]">&amp; outcomes.</em>
          </SectionHeading>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative rounded-xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e] group min-h-[320px]"
          >
            <Image
              src={outcomeImage}
              alt="Outcome"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>

          {/* Outcome list */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl overflow-hidden divide-y divide-[#e8eaed] dark:divide-[#1e1e2e]"
          >
            {outcomes.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 px-6 py-4 hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-150"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0098AF]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#0098AF] transition-colors duration-200">
                    <Icon className="w-4 h-4 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#003C46] dark:text-white mb-0.5 group-hover:text-[#0098AF] transition-colors duration-200">
                      {item.title}
                    </p>
                    <p className="text-[13px] text-[#778899] dark:text-[#6677aa] leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Metrics table */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl overflow-hidden"
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
                  {["Metric", "Before", "After"].map((h) => (
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
                {metrics.map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.03] transition-colors duration-150"
                  >
                    <td className="px-6 py-4 text-[13px] font-semibold text-[#003C46] dark:text-white">
                      {row.metric}
                    </td>
                    <td className="px-6 py-4 text-[13px] text-[#778899] dark:text-[#6677aa] line-through">
                      {row.before}
                    </td>
                    <td className="px-6 py-4 text-[13px] font-semibold text-[#0098AF]">
                      {row.after}
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
  {
    name: "3D Laser Scanning",
    desc: "Precise spatial data acquisition",
    icon: ScanLine,
  },
  {
    name: "AI-Powered Analysis",
    desc: "Validate scan data against design specs",
    icon: BrainCircuit,
  },
  {
    name: "Digital Twin Platforms",
    desc: "Intelligent replica of the facility",
    icon: Cpu,
  },
  {
    name: "Dashboard & Visualization",
    desc: "Real-time monitoring and analytics",
    icon: LayoutDashboard,
  },
];

const Tech = () => {
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
            Technologies <em className="not-italic text-[#0098AF]">used.</em>
          </SectionHeading>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tech grid */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-[#0a0a0f] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-[#e8eaed] dark:border-[#1e1e2e]">
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#aabbcc]">
                Technologies Used
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[#e8eaed] dark:bg-[#1e1e2e]">
              {technologies.map(({ name, desc, icon: Icon }) => (
                <div
                  key={name}
                  className="group bg-white dark:bg-[#0a0a0f] hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-150 p-5 flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-full bg-[#0098AF]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#0098AF] transition-colors duration-200">
                    <Icon className="w-4 h-4 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#003C46] dark:text-white">
                      {name}
                    </p>
                    <p className="text-[11px] text-[#aabbcc] leading-relaxed mt-0.5">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Client feedback */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-[#0a0a0f] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl p-8 relative overflow-hidden group hover:border-[#0098AF]/30 transition-colors duration-200"
          >
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-4">
              Client Feedback
            </p>
            <blockquote className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-[1.85] italic mb-7">
              "This digital transformation has fundamentally changed how we
              operate. We now have a living, breathing model of our plant that
              helps us plan better, run smoother, and grow smarter."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0098AF]/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-[#0098AF]" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#003C46] dark:text-white">
                  Head of Operations
                </p>
                <p className="text-[12px] text-[#aabbcc]">
                  Confidential Client
                </p>
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
          Ready to Transform?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight mb-5">
          Ready to digitize your{" "}
          <em className="not-italic text-[#0098AF]">business?</em>
        </h2>
        <p className="text-[15px] text-white/65 leading-relaxed max-w-2xl mx-auto mb-9">
          Contact us to explore how our digitalization solutions can transform
          your operations.
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

export default function DigitalizationProject() {
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0f]">
      <MegaMenu />
      <Hero />
      <ProjectOverview />
      <Objective />
      <Scope />
      <ApproachSection />
      <Outcome />
      <Tech />
      <CTASection />
      <Footer />
    </div>
  );
}
