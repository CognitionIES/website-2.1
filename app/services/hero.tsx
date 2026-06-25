"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home, ArrowDown } from "lucide-react";
import heroImage from "@/constants/images/hero/services-hero.webp";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section
      ref={ref}
      className="relative h-[480px] md:h-[520px] overflow-hidden"
    >
      <Image
        src={heroImage}
        alt="Our Services"
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
          <span className="text-[#0098AF]/90">Services</span>
        </motion.nav>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3"
        >
          What We Offer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold text-white leading-tight max-w-2xl font-display"
        >
          Our <em className="not-italic text-[#0098AF]">Services.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-4 text-[15px] text-white/65 max-w-xl leading-relaxed"
        >
          From recruiting the right talent to engineering solutions and SaaS
          tools — we help you grow with confidence.
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
}
