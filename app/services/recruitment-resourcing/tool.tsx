/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DatabaseIcon, BrainIcon, NetworkIcon, VideoIcon } from "./CustomIcons";

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const tools: Tool[] = [
  {
    id: "ats",
    title: "Applicant Tracking Systems",
    description:
      "Advanced ATS platforms like BambooHR and Lever streamline our recruitment workflow, ensuring no candidate falls through the cracks. We leverage automation for efficient candidate management, interview scheduling, and communication tracking throughout the hiring process.",
    icon: DatabaseIcon,
  },
  {
    id: "ai-tools",
    title: "AI-Powered Recruitment Tools",
    description:
      "Cutting-edge artificial intelligence helps us identify the best candidates faster. Our AI tools analyze resumes, predict candidate success, and match skills with job requirements, reducing time-to-hire while improving placement quality and cultural fit assessments.",
    icon: BrainIcon,
  },
  {
    id: "crm",
    title: "CRM Systems",
    description:
      "Salesforce and other enterprise CRM solutions enable us to build lasting relationships with clients and candidates. We track engagement history, preferences, and feedback to deliver personalized experiences and maintain long-term talent pipeline management.",
    icon: NetworkIcon,
  },
  {
    id: "video-platforms",
    title: "Video Interviewing Platforms",
    description:
      "Modern video interviewing technology facilitates seamless remote interviews and assessments. Our platforms support live interviews, pre-recorded assessments, and collaborative evaluation tools, ensuring global talent access while maintaining interview quality and consistency.",
    icon: VideoIcon,
  },
];

export default function ToolsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-white dark:bg-[#0a0a0f] relative overflow-hidden"
      aria-labelledby="tools-section-title"
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
          className="mb-12"
        >
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
            Technology
          </p>
          <h2
            id="tools-section-title"
            className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white font-display leading-tight mb-4"
          >
            Tools &{" "}
            <em className="not-italic text-[#0098AF]">technologies.</em>
          </h2>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-xl leading-relaxed">
            Leveraging cutting-edge technology to deliver superior recruitment outcomes.
          </p>
        </motion.div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-[#f7f8fa] dark:bg-[#0d0d14] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl p-6 hover:border-[#0098AF]/30 transition-colors duration-200 relative overflow-hidden flex gap-5"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0098AF]/10 flex items-center justify-center group-hover:bg-[#0098AF] transition-colors duration-200 mt-0.5">
                  <IconComponent className="w-5 h-5 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
                </div>

                <div>
                  <h3 className="text-[18px] font-semibold text-[#003C46] dark:text-white mb-2 font-display group-hover:text-[#0098AF] transition-colors duration-200">
                    {tool.title}
                  </h3>
                  <p className="text-[13px] text-[#778899] dark:text-[#6677aa] leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}