"use client";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRef } from "react";
import { ArrowRight, Globe } from "lucide-react";

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

export default CTASection;