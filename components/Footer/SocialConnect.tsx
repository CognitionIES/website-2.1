import { motion } from "framer-motion";
import { Mail, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function SocialConnect() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const child = {
    hidden: { opacity: 0, y: 14 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  return (
    <div ref={ref} className="space-y-5">

      {/* Heading */}
      <motion.p
        custom={0}
        variants={child}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0098AF]"
      >
        Connect With Us
      </motion.p>

      {/* LinkedIn */}
      <motion.div
        custom={1}
        variants={child}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Link
          href="https://www.linkedin.com/company/cognition-ies"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:border-[#0098AF]/40 hover:bg-white/[0.04] transition-all duration-200"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0098AF]/20 transition-colors duration-200">
            <svg className="w-4 h-4 text-white/70 group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium text-white/80 group-hover:text-white transition-colors duration-200">LinkedIn</p>
            <p className="text-[11px] text-white/40 truncate">Follow for latest updates</p>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-white/25 group-hover:text-[#0098AF] flex-shrink-0 transition-colors duration-200" />
        </Link>
      </motion.div>

      {/* Email */}
      <motion.div
        custom={2}
        variants={child}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Link
          href="mailto:info@cognitionies.com"
          className="group flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:border-[#0098AF]/40 hover:bg-white/[0.04] transition-all duration-200"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0098AF]/20 transition-colors duration-200">
            <Mail className="w-4 h-4 text-white/70 group-hover:text-white transition-colors duration-200" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium text-white/80 group-hover:text-white transition-colors duration-200">Email Us</p>
            <p className="text-[11px] text-white/40 truncate">info@cognitionies.com</p>
          </div>
        </Link>
      </motion.div>

      {/* CTA */}
      <motion.div
        custom={3}
        variants={child}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="pt-1"
      >
        <Link
          href="/contact"
          className="group flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#0098AF] hover:bg-[#007B8F] text-white text-[13px] font-semibold transition-colors duration-200"
        >
          Start Your Project
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </motion.div>

    </div>
  );
}