"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "./services-data";

const Grid = ({ light = false }: { light?: boolean }) => (
  <div
    className={`absolute inset-0 pointer-events-none ${light ? "opacity-[0.025]" : "opacity-[0.06]"}`}
    style={{
      backgroundImage: `linear-gradient(${light ? "#003C46" : "rgba(255,255,255,0.3)"} 1px, transparent 1px), linear-gradient(90deg, ${light ? "#003C46" : "rgba(255,255,255,0.3)"} 1px, transparent 1px)`,
      backgroundSize: "64px 64px",
    }}
  />
);

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
    {children}
  </p>
);

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white font-display leading-tight mb-4">
    {children}
  </h2>
);

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group bg-white dark:bg-[#0a0a0f] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl overflow-hidden hover:border-[#0098AF]/30 transition-colors duration-200 relative flex flex-col"
    >
      <Link
        href={service.href}
        className="relative h-48 block overflow-hidden flex-shrink-0"
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <span className="text-[17px] font-bold tracking-[0.15em] text-[#0098AF]/50 tabular-nums">
            {service.id}
          </span>
          <div className="w-9 h-9 rounded-full bg-[#0098AF]/10 flex items-center justify-center group-hover:bg-[#0098AF] transition-colors duration-200">
            <Icon className="w-4 h-4 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
          </div>
        </div>
        <h3 className="text-[19px] font-semibold text-[#003C46] dark:text-white mb-2 font-display group-hover:text-[#0098AF] transition-colors duration-200">
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
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}

export function ServicesShowcase() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });

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
          <SectionLabel>Services</SectionLabel>
          <SectionHeading>
            Scalable solutions for{" "}
            <em className="not-italic text-[#0098AF]">smarter tomorrow.</em>
          </SectionHeading>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-xl leading-relaxed">
            From recruiting the right talent to engineering delivery and
            powerful SaaS tools, we help you grow with confidence.
          </p>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

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
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#0098AF] hover:bg-[#007B8F] text-white text-[14px] font-semibold transition-colors duration-200"
          >
            Start Your Project
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
