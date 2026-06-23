"use client";

import React, { useRef } from "react";
import {
  ChevronRight,
  Home,
  ArrowRight,
  ArrowDown,
  Target,
  Eye,
  Heart,
  Zap,
  Users,
  Globe,
  Shield,
  Star,
  TrendingUp,
  Award,
} from "lucide-react";
import Image from "next/image";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/footer";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";

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

//  Hero 

const Hero = () => {
  const { IMAGES } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="relative h-[480px] md:h-[520px] overflow-hidden"
    >
      <Image
        src={IMAGES.HERO_IMAGE}
        alt="Cognition IES"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 via-[#004f5e]/75 to-[#0098AF]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#002930]/50 via-transparent to-transparent" />
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
          <span className="text-[#0098AF]/90">About Us</span>
        </motion.nav>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3"
        >
          Who We Are
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold text-white leading-tight max-w-3xl font-display"
        >
          Cognition IES <em className="not-italic text-[#0098AF]">Pvt. Ltd.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-4 text-[15px] text-white/65 max-w-xl leading-relaxed"
        >
          Empowering Growth Through People and Technology.
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

//  About Section 

const AboutSection = () => {
  const { IMAGES, TEXT, STATS } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-white dark:bg-[#0a0a0f] relative overflow-hidden"
    >
      <Grid light />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>About Us</SectionLabel>
            <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white font-display leading-tight mb-6">
              {TEXT.STORY_TITLE}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
                {TEXT.STORY_P1}
              </p>
              <p className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
                {TEXT.STORY_P2}
              </p>
              <p className="text-[15px] text-[#003C46] dark:text-white/80 font-medium leading-relaxed">
                {TEXT.STORY_P3}
              </p>
            </div>

            {/* Stats chips */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.slice(0, 2).map(
                (stat: { stat: string; label: string }, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                    className="border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl p-5 hover:border-[#0098AF]/30 transition-colors duration-200 group"
                  >
                    <p className="text-3xl font-bold text-[#0098AF] font-display mb-1">
                      {stat.stat}
                    </p>
                    <p className="text-[13px] text-[#778899] dark:text-[#6677aa]">
                      {stat.label}
                    </p>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e] group hover:border-[#0098AF]/30 transition-colors duration-200"
          >
            <Image
              src={IMAGES.STORY_IMAGE}
              alt="Our engineering journey"
              width={640}
              height={540}
              className="w-full h-[440px] sm:h-[500px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

//  Mission & Vision 

const MissionVision = () => {
  const { IMAGES, TEXT } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-[#f7f8fa] dark:bg-[#0d0d14] relative overflow-hidden"
    >
      <Grid light />
      {/* Subtle bg image layer */}
      <div className="absolute inset-0 opacity-[0.03]">
        <Image
          src={IMAGES.MISSION_VISION_BG}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <SectionLabel>Our Direction</SectionLabel>
          <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white font-display leading-tight">
            Mission &amp; <em className="not-italic text-[#0098AF]">Vision.</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="group border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl bg-white dark:bg-[#0a0a0f] p-8 hover:border-[#0098AF]/30 transition-colors duration-200 relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-full bg-[#0098AF]/10 flex items-center justify-center mb-6 group-hover:bg-[#0098AF] transition-colors duration-200">
              <Eye className="w-6 h-6 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
            </div>
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-2">
              Vision
            </p>
            <h3 className="text-2xl font-bold text-[#003C46] dark:text-white font-display mb-4">
              {TEXT.VISION_TITLE}
            </h3>
            <p className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
              {TEXT.VISION_DESC}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0098AF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl bg-white dark:bg-[#0a0a0f] p-8 hover:border-[#0098AF]/30 transition-colors duration-200 relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-full bg-[#0098AF]/10 flex items-center justify-center mb-6 group-hover:bg-[#0098AF] transition-colors duration-200">
              <Target className="w-6 h-6 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
            </div>
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-2">
              Mission
            </p>
            <h3 className="text-2xl font-bold text-[#003C46] dark:text-white font-display mb-4">
              {TEXT.MISSION_TITLE}
            </h3>
            <p className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
              {TEXT.MISSION_DESC}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0098AF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

//  Key Values 

// Fallback icons in order — replace with actual data if KEY_VALUES has icons
const VALUE_ICONS = [Heart, Shield, Zap, Star];

const KeyValues = () => {
  const { IMAGES, TEXT, KEY_VALUES } = ABOUT_CONSTANTS;
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
          className="text-center mb-14"
        >
          <SectionLabel>What Drives Us</SectionLabel>
          <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white font-display leading-tight">
            {TEXT.VALUES_TITLE}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e8eaed] dark:bg-[#1e1e2e] rounded-xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e]">
          {KEY_VALUES.map(
            (value: { title: string; desc: string }, index: number) => {
              const Icon = VALUE_ICONS[index % VALUE_ICONS.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group bg-white dark:bg-[#0a0a0f] hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-200 relative overflow-hidden"
                >
                  {/* Value image */}
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={IMAGES.KEY_VALUES[index]}
                      alt={value.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#003C46]/40 to-[#003C46]/70" />
                    <div className="absolute bottom-3 left-5">
                      <div className="w-8 h-8 rounded-full bg-[#0098AF]/20 border border-[#0098AF]/40 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#0098AF]" />
                      </div>
                    </div>
                    <span className="absolute top-3 right-4 text-[10px] font-bold tracking-[0.18em] uppercase text-white/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[15px] font-bold text-[#003C46] dark:text-white font-display mb-2 group-hover:text-[#0098AF] transition-colors duration-200">
                      {value.title}
                    </h3>
                    <p className="text-[13px] text-[#778899] dark:text-[#6677aa] leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0098AF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
};

//  Stats Section 

const STAT_ICONS = [Users, Globe, Award, TrendingUp];

const StatsSection = () => {
  const { STATS } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-24 bg-[#003C46] relative overflow-hidden"
    >
      <Grid />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0098AF]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0098AF]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <SectionLabel>Our Impact</SectionLabel>
          <h2 className="text-4xl md:text-[2.75rem] font-bold text-white font-display leading-tight">
            Our <em className="not-italic text-[#0098AF]">impact.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#0098AF]/20 rounded-xl overflow-hidden border border-[#0098AF]/20">
          {STATS.map((item: { stat: string; label: string }, index: number) => {
            const Icon = STAT_ICONS[index % STAT_ICONS.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group bg-[#003C46] hover:bg-[#0098AF]/[0.08] transition-colors duration-200 p-8 text-center relative"
              >
                <div className="w-10 h-10 rounded-full bg-[#0098AF]/10 border border-[#0098AF]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0098AF] group-hover:border-[#0098AF] transition-colors duration-200">
                  <Icon className="w-5 h-5 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-white font-display mb-2">
                  {item.stat}
                </p>
                <p className="text-[13px] text-white/50 leading-relaxed">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

//  CTA ─

const CTASection = () => {
  const { TEXT } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative bg-[#f5f4f0] py-28 md:py-36 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Top rule — animates in from left */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-px bg-[#003C46]/15 mb-14 origin-left"
        />

        {/* Asymmetric: big heading left, actions right */}
        <div className="grid grid-cols-12 items-end gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-8"
          >
            <Eyebrow>Work With Us</Eyebrow>
            <h2
              className="text-5xl md:text-7xl font-black text-[#003C46] leading-[0.9] tracking-[-0.04em]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {TEXT.CTA_TITLE}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="col-span-12 md:col-span-4 space-y-6"
          >
            <p className="text-[14px] text-[#556677] leading-relaxed">
              {TEXT.CTA_DESC}
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/contact">
                <button className="w-full group flex items-center justify-between px-6 py-4 bg-[#003C46] hover:bg-[#0098AF] text-white text-[13px] font-black tracking-[0.15em] uppercase rounded-xl transition-colors duration-200">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </Link>
              <Link href="/#services-showcase">
                <button className="w-full group flex items-center justify-between px-6 py-4 border border-[#003C46]/20 hover:border-[#0098AF]/50 hover:bg-[#0098AF]/[0.05] text-[#003C46] text-[13px] font-black tracking-[0.15em] uppercase rounded-xl transition-colors duration-200">
                  Explore Services
                  <Globe className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom rule — animates from right */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-px bg-[#003C46]/15 mt-16 origin-right"
        />
      </div>
    </section>
  );
};

//  Page 

export default function AboutPage() {
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0f]">
      <MegaMenu />
      <Hero />
      <AboutSection />
      <MissionVision />
      <KeyValues />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
const Eyebrow = ({
  children,
  invert = false,
}: {
  children: React.ReactNode;
  invert?: boolean;
}) => (
  <span
    className={`inline-block text-[10px] font-black tracking-[0.3em] uppercase mb-3 ${invert ? "text-[#0098AF]" : "text-[#0098AF]"}`}
  >
    {children}
  </span>
);
