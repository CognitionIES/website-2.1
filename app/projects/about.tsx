"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  staffingProjects,
  buildOperateProjects,
} from "@/constants/projects-data";
import { ProjectCard } from "./ProjectCard";
import { Users, Settings } from "lucide-react";


function CategoryHeader({
  icon: Icon,
  title,
  subtitle,
  isInView,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  isInView: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-4 mb-8"
    >
      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-[#0098AF]/10 flex items-center justify-center group-hover:bg-[#0098AF] transition-colors duration-200">
          <Icon className="w-5 h-5 text-[#0098AF]" />
        </div>
        <div>
          <h3 className="text-[16px] font-semibold text-[#003C46] dark:text-white font-display">
            {title}
          </h3>
          <p className="text-[12px] text-[#778899] dark:text-[#6677aa]">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Rule */}
      <motion.div
        className="flex-1 h-px bg-gradient-to-r from-[#0098AF]/30 to-transparent"
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.7, delay: delay + 0.15 }}
      />
    </motion.div>
  );
}

//  ProjectsSection ─

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-[#f7f8fa] dark:bg-[#0d0d14] relative overflow-hidden"
      aria-labelledby="projects-section-title"
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

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
            Featured Work
          </p>
          <h2
            id="projects-section-title"
            className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white font-display leading-tight mb-4"
          >
            Our recent{" "}
            <em className="not-italic text-[#0098AF]">projects.</em>
          </h2>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-2xl leading-relaxed">
            Explore how Cognition IES is transforming businesses through{" "}
            <span className="text-[#0098AF] font-medium">recruitment solutions</span>{" "}
            and{" "}
            <span className="text-[#0098AF] font-medium">Build & Operate models</span>{" "}
            across IT and engineering sectors.
          </p>
        </motion.div>

        {/* Recruitment & Resourcing */}
        <div className="mb-14">
          <CategoryHeader
            icon={Users}
            title="Recruitment & Resourcing"
            subtitle="Expert talent deployment solutions"
            isInView={isInView}
            delay={0.1}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {staffingProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>

        {/* Build & Operate */}
        <div>
          <CategoryHeader
            icon={Settings}
            title="Build & Operate"
            subtitle="End-to-end solution development"
            isInView={isInView}
            delay={0.2}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {buildOperateProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + staffingProjects.length}
                isInView={isInView}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}