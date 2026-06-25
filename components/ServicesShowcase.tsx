"use client";

import { useState } from "react";
import saasImage from "@/constants/images/home/our-services/saas.webp";
import { ArrowUpRight, Settings, Factory, Monitor, ArrowLeft, ArrowRight } from "lucide-react";
import buildImage from "@/constants/images/build-operate/hero.webp";
import Image from "next/image";
import Link from "next/link";
import staffImage from "@/constants/images/home/staffing.webp";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Recruitment & Resourcing",
    description:
      "Quickly access skilled talent and build high-performing teams. We connect you with experts to drive growth and deliver results.",
    image: staffImage,
    href: "/services/recruitment-resourcing",
    icon: Settings,
  },
  {
    id: "02",
    title: "Engineering Services",
    description:
      "Turn ideas into reality with scalable engineering expertise. From product design to offshore delivery, we provide end-to-end solutions that ensure precision, cost-efficiency, and faster project execution.",
    image: buildImage,
    href: "/services/engineering-serivces",
    icon: Factory,
  },
  {
    id: "03",
    title: "SaaS Solutions (ServiceCPQ)",
    description:
      "Streamline quoting & delivery with ServiceCPQ, our SaaS platform designed to simplify complex workflows and accelerate your business.",
    image: saasImage,
    href: "/services/saas-solution/servicecpq",
    icon: Monitor,
  },
];

type Service = (typeof services)[number];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const IconComponent = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group bg-white dark:bg-[#0d0d14] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl overflow-hidden hover:border-[#0098AF]/30 dark:hover:border-[#0098AF]/30 transition-colors duration-200 relative flex flex-col"
    >
      {/* Image */}
      <Link href={service.href} className="relative h-48 block overflow-hidden flex-shrink-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <span className="text-[18px] font-bold tracking-[0.15em] text-[#0098AF]/60 tabular-nums">
            {service.id}
          </span>
          <div className="w-9 h-9 rounded-full bg-[#0098AF]/10 flex items-center justify-center group-hover:bg-[#0098AF] transition-colors duration-200">
            <IconComponent className="h-4 w-4 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
          </div>
        </div>

        <h3 className="text-[20px] font-semibold text-[#003C46] dark:text-white mb-2 group-hover:text-[#0098AF] transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-[14px] text-[#778899] dark:text-[#6677aa] leading-relaxed flex-1">
          {service.description}
        </p>

        <div className="mt-5 pt-4 border-t border-[#e8eaed] dark:border-[#1e1e2e] flex items-center justify-between">
          <Link
            href={service.href}
            className="text-[13px] font-semibold text-[#0098AF] hover:text-[#007B8F] transition-colors duration-200"
          >
            Learn more
          </Link>
          <ArrowUpRight className="w-4 h-4 text-[#aabbcc] group-hover:text-[#0098AF] transition-colors duration-200" />
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
};

/* Mobile slider */
const MobileSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = services.length;

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-400 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {services.map((service, index) => (
          <div key={service.id} className="w-full flex-shrink-0 px-1">
            <ServiceCard service={service} index={index} />
          </div>
        ))}
      </div>

      <button
        onClick={() => setActiveIndex((p) => (p - 1 + total) % total)}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0098AF] flex items-center justify-center"
        aria-label="Previous"
      >
        <ArrowLeft className="w-4 h-4 text-white" />
      </button>
      <button
        onClick={() => setActiveIndex((p) => (p + 1) % total)}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0098AF] flex items-center justify-center"
        aria-label="Next"
      >
        <ArrowRight className="w-4 h-4 text-white" />
      </button>

      <div className="mt-4 flex justify-center gap-2">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`rounded-full transition-all duration-200 ${
              activeIndex === i ? "w-5 h-2 bg-[#0098AF]" : "w-2 h-2 bg-[#e8eaed]"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ServicesShowcase = () => (
  <section className="py-20 md:py-28 bg-[#f7f8fa] dark:bg-[#0d0d14] relative overflow-hidden">
    {/* Grid texture */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04]"
      style={{
        backgroundImage: `linear-gradient(#003C46 1px, transparent 1px), linear-gradient(90deg, #003C46 1px, transparent 1px)`,
        backgroundSize: "64px 64px",
      }}
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mb-12"
      >
        <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
          Services
        </p>
        <h2
          className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white leading-tight mb-4"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          Scalable solutions for{" "}
          <em className="not-italic text-[#0098AF]">smarter tomorrow.</em>
        </h2>
        <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-xl leading-relaxed">
          From recruiting the right talent to building dedicated teams and deploying powerful SaaS tools, we help you grow with confidence.
        </p>
      </motion.div>

      {/* Mobile slider / Desktop grid */}
      <div className="md:hidden">
        <MobileSlider />
      </div>
      <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <p className="text-[13px] text-[#aabbcc] mb-4">
          Ready to transform your business? Let's talk.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#0098AF] hover:bg-[#007B8F] text-white text-[14px] font-semibold transition-colors duration-200"
        >
          Start Your Project
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ServicesShowcase;