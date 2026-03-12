"use client";

import React, { useRef, useState } from "react";
import {
  ChevronRight,
  Home,
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  Settings,
  Factory,
  Monitor,
  Award,
  Users,
  Target,
  Zap,
  Plus,
  Minus,
} from "lucide-react";
import Image from "next/image";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/footer";
import heroImage from "@/constants/images/hero/services-hero.png";
import saasImage from "@/constants/images/home/our-services/saas.jpg";
import buildImage from "@/constants/images/build-operate/hero.jpg";
import staffImage from "@/constants/images/home/staffing.jpg";

// ─── Shared helpers ───────────────────────────────────────────────────────────

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

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => {
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
};

// ─── About / Intro ────────────────────────────────────────────────────────────

const aboutStats = [
  { icon: Award, number: "10+", label: "Years Experience" },
  { icon: Users, number: "200+", label: "Happy Clients" },
  { icon: Target, number: "300+", label: "Projects Completed" },
  { icon: Zap, number: "98%", label: "Success Rate" },
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-white dark:bg-[#0a0a0f] relative overflow-hidden"
    >
      <Grid light />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>About Cognition</SectionLabel>
            <SectionHeading>
              Innovating the future of{" "}
              <em className="not-italic text-[#0098AF]">business solutions.</em>
            </SectionHeading>
            <div className="space-y-4 text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
              <p>
                At Cognition, we're passionate about transforming businesses
                through cutting-edge technology and innovative solutions. Our
                mission is to empower organizations with the tools and expertise
                they need to thrive in an ever-evolving landscape.
              </p>
              <p>
                What sets us apart is our commitment to understanding your
                unique challenges and delivering tailored solutions that drive
                real results. We combine deep technical expertise with strategic
                thinking to create value that lasts.
              </p>
            </div>

            {/* Promise chip */}
            <div className="mt-7 flex items-start gap-4 p-5 border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl hover:border-[#0098AF]/30 transition-colors duration-200 group">
              <div className="w-9 h-9 rounded-full bg-[#0098AF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0098AF] transition-colors duration-200">
                <Zap className="w-4 h-4 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#003C46] dark:text-white mb-1">
                  Our Promise
                </p>
                <p className="text-[13px] text-[#778899] dark:text-[#6677aa] leading-relaxed">
                  We deliver exceptional results through innovation, expertise,
                  and unwavering commitment to your success.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 gap-px bg-[#e8eaed] dark:bg-[#1e1e2e] rounded-2xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e]">
              {aboutStats.map(({ icon: Icon, number, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="group bg-white dark:bg-[#0a0a0f] hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-200 p-8 text-center relative"
                >
                  <div className="w-10 h-10 rounded-full bg-[#0098AF]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0098AF] transition-colors duration-200">
                    <Icon className="w-5 h-5 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <p className="text-4xl font-bold text-[#003C46] dark:text-white font-display mb-1">
                    {number}
                  </p>
                  <p className="text-[12px] text-[#aabbcc] tracking-wider uppercase">
                    {label}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0098AF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── Services showcase ────────────────────────────────────────────────────────

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
      "Turn ideas into reality with scalable engineering expertise. From product design to offshore delivery — end-to-end solutions ensuring precision, cost-efficiency, and faster execution.",
    image: buildImage,
    href: "/services/engineering-serivces",
    icon: Factory,
  },
  {
    id: "03",
    title: "SaaS Solutions — ServiceCPQ",
    description:
      "Streamline quoting & delivery with ServiceCPQ, our SaaS platform designed to simplify complex workflows and accelerate your business.",
    image: saasImage,
    href: "/services/saas-solution/servicecpq",
    icon: Monitor,
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) => {
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
};

const ServicesShowcase = () => {
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
};

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "What makes Cognition different from other service providers?",
    answer:
      "We combine deep technical expertise with strategic business understanding to deliver solutions that not only work but drive real business value. Our approach is collaborative, transparent, and focused on long-term success rather than quick fixes.",
  },
  {
    question: "How do you ensure the security of our data and systems?",
    answer:
      "Security is paramount in everything we do. We implement industry-leading security practices, conduct regular audits, maintain compliance with major standards (SOC 2, ISO 27001), and use advanced encryption and monitoring tools to protect your data and systems.",
  },
  {
    question: "What is your typical project timeline and process?",
    answer:
      "Our process begins with a comprehensive discovery phase (1–2 weeks), followed by solution design and planning (1–2 weeks), implementation (varies by scope), testing and deployment (1–2 weeks), and ongoing support. We use agile methodologies to ensure flexibility and regular communication.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Absolutely. We offer comprehensive post-launch support including monitoring, regular maintenance, performance optimization, and strategic guidance. Our support packages are flexible and can be customized based on your specific needs.",
  },
  {
    question: "Can you work with our existing technology stack?",
    answer:
      "Yes, we're technology-agnostic and experienced with a wide range of platforms and tools. We'll assess your current infrastructure and recommend the best approach — whether building on your existing stack or strategically migrating to new solutions.",
  },
  {
    question: "How do you handle project communication and updates?",
    answer:
      "You'll have access to dedicated project managers, weekly progress reports, and scheduled check-ins. We adapt our communication style to match your preferences and requirements.",
  },
];

const FAQItem = ({
  faq,
  index,
}: {
  faq: (typeof faqs)[number];
  index: number;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="border-b border-[#e8eaed] dark:border-[#1e1e2e] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 px-1 text-left group"
      >
        <span
          className={`text-[15px] font-semibold leading-snug transition-colors duration-200 ${open ? "text-[#0098AF]" : "text-[#003C46] dark:text-white group-hover:text-[#0098AF]"}`}
        >
          {faq.question}
        </span>
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200 ${open ? "bg-[#0098AF] text-white" : "bg-[#f7f8fa] dark:bg-[#1e1e2e] text-[#778899]"}`}
        >
          {open ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 px-1">
              <div className="pl-4 border-l-2 border-[#0098AF]/30">
                <p className="text-[14px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const AccordionSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });

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
          <SectionLabel>Frequently Asked Questions</SectionLabel>
          <SectionHeading>
            Have questions?{" "}
            <em className="not-italic text-[#0098AF]">We've got answers.</em>
          </SectionHeading>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* FAQ list */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="border border-[#e8eaed] dark:border-[#1e1e2e] rounded-2xl overflow-hidden bg-white dark:bg-[#0a0a0f] px-6"
          >
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </motion.div>

          {/* Sidebar — sticky contact nudge */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:sticky lg:top-24 space-y-5"
          >
            <div className="bg-[#003C46] rounded-2xl p-8 relative overflow-hidden border border-[#0098AF]/20">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0098AF]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/3" />
              <div className="relative z-10">
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
                  Still Unsure?
                </p>
                <h3 className="text-2xl font-bold text-white font-display mb-3 leading-tight">
                  Talk to our team directly.
                </h3>
                <p className="text-[14px] text-white/60 leading-relaxed mb-6">
                  Get personalized answers about your specific project or
                  requirements — no commitment needed.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex w-full items-center justify-between px-5 py-3 bg-[#0098AF] hover:bg-[#007B8F] text-white text-[14px] font-semibold rounded-xl transition-colors duration-200"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Quick links */}
            <div className="border border-[#e8eaed] dark:border-[#1e1e2e] rounded-2xl overflow-hidden">
              <div className="px-5 py-3.5 border-b border-[#e8eaed] dark:border-[#1e1e2e] bg-[#f7f8fa] dark:bg-[#0d0d14]">
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#aabbcc]">
                  Explore Services
                </p>
              </div>
              <div className="divide-y divide-[#e8eaed] dark:divide-[#1e1e2e]">
                {services.map((s) => (
                  <Link
                    key={s.id}
                    href={s.href}
                    className="group flex items-center justify-between px-5 py-4 hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-150"
                  >
                    <span className="text-[13px] font-medium text-[#556677] dark:text-[#8899aa] group-hover:text-[#0098AF] transition-colors duration-200">
                      {s.title}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#aabbcc] group-hover:text-[#0098AF] transition-colors duration-200" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── CTA ──────────────────────────────────────────────────────────────────────

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
          Ready?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight mb-5">
          Still have <em className="not-italic text-[#0098AF]">questions?</em>
        </h2>
        <p className="text-[15px] text-white/65 leading-relaxed max-w-2xl mx-auto mb-9">
          Contact our team for personalized assistance or to discuss your
          project needs.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 px-7 py-3 bg-[#0098AF] hover:bg-[#007B8F] text-white text-[15px] font-semibold rounded-lg transition-colors duration-200"
        >
          Get in Touch
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </motion.div>
    </section>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0f]">
      <MegaMenu />
      <Hero />
      <AboutSection />
      <ServicesShowcase />
      <AccordionSection />
      <CTASection />
      <Footer />
    </div>
  );
}
