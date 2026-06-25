"use client";

import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import timeImage from "@/constants/images/staffing-recruitment/time.webp"
import rpoImage from "@/constants/images/staffing-recruitment/rpo.webp"
import projectImage from "@/constants/images/staffing-recruitment/rpo-1.webp"

interface Service {
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  id: string;
}

const services: Service[] = [
  {
    id: "contract-staffing",
    title: "Time & Material",
    subtitle: "Pay only for the hours or effort utilized.",
    description:
      "Scale quickly without long-term commitments. Our contract staffing services provide skilled professionals for short- or mid-term assignments. We manage everything from sourcing and onboarding to payroll and compliance so you can focus on delivery, not HR.",
    image: timeImage,
  },
  {
    id: "rpo",
    title: "Recruitment Process Outsource",
    subtitle: "End-to-End Hiring, Handled by Experts",
    description:
      "Outsource your recruitment engine and reduce cost-per-hire. With RPO, our team acts as an extension of your HR department, managing the entire hiring process sourcing, screening, interviews, compliance, and analytics with speed, consistency, and scale.",
    image: rpoImage,
  },
  {
    id: "project-based",
    title: "Project-Based Hiring",
    subtitle: "Onboard Full Teams for Specific Deliverables",
    description:
      "Deploy pre-assembled talent for mission-critical milestones. Ideal for product launches, system rollouts, or digital transformation projects, our project-based hiring delivers fully-equipped tech or engineering teams with defined scopes, timelines, and KPIs.",
    image: projectImage,
  },
];

const ServiceCard = ({ service, index, isInView }: { service: Service; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    className="group bg-white dark:bg-[#0d0d14] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl overflow-hidden hover:border-[#0098AF]/30 transition-colors duration-200 flex flex-col relative"
  >
    {/* Image */}
    <div className="relative h-48 overflow-hidden flex-shrink-0">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/40 to-transparent" />
    </div>

    {/* Body */}
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-[19px] font-semibold text-[#003C46] dark:text-white font-display group-hover:text-[#0098AF] transition-colors duration-200 mb-1">
        {service.title}
      </h3>
      <p className="text-[15px] font-semibold text-[#0098AF] mb-3">
        {service.subtitle}
      </p>

      {/* Description — visible on hover overlay */}
      <div className="relative flex-1">
        <p className="text-[13px] text-[#778899] dark:text-[#6677aa] leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>

    {/* Bottom accent */}
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
  </motion.div>
);

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-[#f7f8fa] dark:bg-[#0d0d14] relative overflow-hidden"
      aria-labelledby="services-section-title"
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
            Engagement Models
          </p>
          <h2
            id="services-section-title"
            className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white font-display leading-tight mb-4"
          >
            Our engagement{" "}
            <em className="not-italic text-[#0098AF]">models.</em>
          </h2>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-xl leading-relaxed">
            Tailored hiring solutions to meet your business needs whether you're scaling fast or building for the future.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}