"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import { FiChevronRight, FiHome } from "react-icons/fi";
import { ArrowDown } from "lucide-react";
import heroImage from "@/constants/images/hero/eng-services.webp";
import Image from "next/image";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative h-[480px] md:h-[520px] overflow-hidden">

      {/* Background image */}
      <Image
        src={heroImage}
        alt="Engineering Services"
        fill
        className="object-cover"
        priority
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 via-[#004f5e]/75 to-[#0098AF]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#002930]/50 via-transparent to-transparent" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Deterministic particles — no Math.random, no SSR mismatch */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.25, 0], y: [0, -80] }}
            transition={{
              duration: 4 + (i * 0.5) % 3,
              repeat: Infinity,
              delay: (i * 0.43) % 4,
            }}
            className="absolute w-1 h-1 bg-[#0098AF]/60 rounded-full"
            style={{ left: `${10 + (i * 8.3) % 80}%`, bottom: "15%" }}
          />
        ))}
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0098AF]/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">

        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, x: -12 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-2 text-[12px] text-white/50 mb-8"
        >
          <Link href="/" className="flex items-center gap-1 hover:text-white/80 transition-colors">
            <FiHome className="w-3.5 h-3.5" />
            Home
          </Link>
          <FiChevronRight className="w-3 h-3 text-white/30" />
          <Link href="/services" className="hover:text-white/80 transition-colors">Services</Link>
          <FiChevronRight className="w-3 h-3 text-white/30" />
          <span className="text-[#0098AF]/90">Engineering Services</span>
        </motion.nav>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3"
        >
          Services · Engineering
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold text-white leading-tight max-w-2xl font-display"
        >
          Turn ideas into reality with{" "}
          <em className="not-italic text-[#0098AF]">scalable engineering.</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-4 text-[15px] text-white/65 max-w-xl leading-relaxed"
        >
          Comprehensive plant and product engineering solutions — from concept to commissioning.
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0], y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.div>

      {/* Bottom clip */}
      <div
        className="absolute bottom-0 left-0 right-0 h-10 bg-white dark:bg-[#0a0a0f]"
        style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
      />
    </section>
  );
}