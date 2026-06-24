"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  Menu,
  X,
  Server,
  Users,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import logo from "@/constants/images/cognition-logo-02.webp";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

//  Data 

interface Service {
  title: string;
  href: string;
  icon: React.ReactNode;
  description: string;
  tag?: string;
}

const servicesData: Service[] = [
  {
    title: "Recruitment & Resourcing",
    href: "/services/recruitment-resourcing",
    icon: <Users className="w-4 h-4" />,
    description: "Professional staffing and talent deployment",
    tag: "Hiring",
  },
  {
    title: "Engineering Services",
    href: "/services/engineering-serivces",
    icon: <Server className="w-4 h-4" />,
    description: "End-to-end engineering delivery",
    tag: "Core",
  },
  {
    title: "SaaS Solutions ServiceCPQ",
    href: "/services/saas-solution/servicecpq",
    icon: <Server className="w-4 h-4" />,
    description: "Configure, price, quote automated",
    tag: "New",
  },
];

const navLinks = [
  { title: "Projects", href: "/projects" },
  { title: "Careers", href: "/careers" },
  { title: "About Us", href: "/about" },
];

//  Dropdown ──

const ServicesDropdown = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 8, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 6, scale: 0.98 }}
    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
    className="absolute top-[calc(100%+12px)] left-0 w-[380px] bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,60,70,0.12)] border border-[#e8eaed] overflow-hidden z-50"
  >
    {/* Header strip */}
    <div className="px-5 pt-5 pb-3 border-b border-[#f0f2f4]">
      <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#aabbcc]">
        Our Services
      </p>
    </div>

    <div className="p-2">
      {servicesData.map((service, i) => (
        <Link
          key={service.title}
          href={service.href}
          onClick={onClose}
          className="group flex items-start gap-3 p-3.5 rounded-xl hover:bg-[#f7fbfc] transition-colors duration-150 relative"
        >
          {/* Icon */}
          <div className="w-9 h-9 rounded-xl bg-[#0098AF]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#0098AF] transition-colors duration-200">
            <span className="text-[#0098AF] group-hover:text-white transition-colors duration-200">
              {service.icon}
            </span>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[14px] font-semibold text-[#003C46] group-hover:text-[#0098AF] transition-colors duration-200 leading-tight">
                {service.title}
              </span>
              {service.tag && (
                <span
                  className={cn(
                    "text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full flex-shrink-0",
                    service.tag === "New"
                      ? "bg-[#0098AF] text-white"
                      : "bg-[#e8eaed] text-[#778899]",
                  )}
                >
                  {service.tag}
                </span>
              )}
            </div>
            <p className="text-[12px] text-[#778899] leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Arrow */}
          <ArrowUpRight className="w-4 h-4 text-[#aabbcc] group-hover:text-[#0098AF] opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0 mt-1" />

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-3.5 right-3.5 h-px bg-[#0098AF] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
        </Link>
      ))}
    </div>

    {/* Footer CTA */}
    <div className="px-5 py-4 bg-[#f7f8fa] border-t border-[#f0f2f4]">
      <Link
        href="/services"
        onClick={onClose}
        className="group flex items-center justify-between text-[12px] font-semibold text-[#0098AF] hover:text-[#007B8F] transition-colors duration-200"
      >
        <span>View all services</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </Link>
    </div>
  </motion.div>
);

//  Main navbar ──

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openMobileService, setOpenMobileService] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsSticky(y > 20);
      setScrolled(y > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowServices(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowServices(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShowServices(false), 180);
  };

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "w-full z-50 transition-all duration-300",
          isSticky
            ? "fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,60,70,0.08),0_4px_24px_rgba(0,60,70,0.06)]"
            : "relative bg-white",
        )}
      >
        {/* Top accent line — only when not scrolled */}
        <div
          className={cn(
            "absolute top-0 left-0 right-0 h-[2px] bg-[#0098AF] transition-opacity duration-300",
            scrolled ? "opacity-0" : "opacity-100",
          )}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px]">
            {/* ── Logo  */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src={logo}
                alt="Cognition IES"
                width={120}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </Link>

            {/* ── Desktop nav ── */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Home */}
              <Link
                href="/"
                className="group relative px-4 py-2 text-[14px] font-medium text-[#556677] hover:text-[#003C46] transition-colors duration-200"
              >
                Home
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 group-hover:w-4 h-[2px] bg-[#0098AF] rounded-full transition-all duration-200" />
              </Link>

              {/* Services — with dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={cn(
                    "group relative flex items-center gap-1.5 px-4 py-2 text-[14px] font-medium transition-colors duration-200",
                    showServices
                      ? "text-[#0098AF]"
                      : "text-[#556677] hover:text-[#003C46]",
                  )}
                  onClick={() => setShowServices(!showServices)}
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      showServices
                        ? "rotate-180 text-[#0098AF]"
                        : "text-[#aabbcc]",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] bg-[#0098AF] rounded-full transition-all duration-200",
                      showServices ? "w-4" : "w-0 group-hover:w-4",
                    )}
                  />
                </button>

                <AnimatePresence>
                  {showServices && (
                    <ServicesDropdown onClose={() => setShowServices(false)} />
                  )}
                </AnimatePresence>
              </div>

              {/* Rest of nav links */}
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group relative px-4 py-2 text-[14px] font-medium text-[#556677] hover:text-[#003C46] transition-colors duration-200"
                >
                  {link.title}
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 group-hover:w-4 h-[2px] bg-[#0098AF] rounded-full transition-all duration-200" />
                </Link>
              ))}
            </div>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="group flex items-center gap-2 px-5 py-2.5 bg-[#003C46] hover:bg-[#0098AF] text-white text-[13px] font-semibold rounded-lg transition-colors duration-200"
              >
                Contact Us
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* ── Mobile hamburger  */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-lg text-[#556677] hover:text-[#003C46] hover:bg-[#f7f8fa] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ── Mobile menu  */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden bg-white border-t border-[#f0f2f4]"
            >
              <div className="px-4 py-5 space-y-1 max-h-[calc(100svh-60px)] overflow-y-auto">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-3 text-[14px] font-medium text-[#556677] hover:text-[#003C46] hover:bg-[#f7f8fa] rounded-xl transition-colors duration-150"
                >
                  Home
                </Link>

                {/* Mobile Services accordion */}
                <div>
                  <button
                    onClick={() => setOpenMobileService(!openMobileService)}
                    className="flex items-center justify-between w-full px-4 py-3 text-[14px] font-medium text-[#556677] hover:text-[#003C46] hover:bg-[#f7f8fa] rounded-xl transition-colors duration-150"
                  >
                    Services
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 text-[#aabbcc] transition-transform duration-200",
                        openMobileService ? "rotate-180 text-[#0098AF]" : "",
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {openMobileService && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.18 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 pt-1 pb-2 space-y-1">
                          {servicesData.map((service) => (
                            <Link
                              key={service.title}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className="group flex items-start gap-3 px-4 py-3 text-[13px] text-[#556677] hover:text-[#003C46] hover:bg-[#f7fbfc] rounded-xl transition-colors duration-150"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#0098AF]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#0098AF] transition-colors duration-200">
                                <span className="text-[#0098AF] group-hover:text-white transition-colors duration-200">
                                  {service.icon}
                                </span>
                              </div>
                              <div>
                                <p className="font-semibold text-[#003C46] leading-tight mb-0.5">
                                  {service.title}
                                </p>
                                <p className="text-[11px] text-[#aabbcc]">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-3 text-[14px] font-medium text-[#556677] hover:text-[#003C46] hover:bg-[#f7f8fa] rounded-xl transition-colors duration-150"
                  >
                    {link.title}
                  </Link>
                ))}

                {/* Mobile CTA */}
                <div className="pt-3 mt-3 border-t border-[#f0f2f4]">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between w-full px-5 py-3.5 bg-[#003C46] hover:bg-[#0098AF] text-white text-[14px] font-semibold rounded-xl transition-colors duration-200"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Sticky spacer */}
      {isSticky && <div className="h-[60px]" />}
    </>
  );
}
