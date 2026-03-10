import * as React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";

const usefulLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Careers", href: "/careers" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQs", href: "/faq" },
];

const services = [
  { name: "Recruitment & Resourcing", href: "/services/recruitment-resourcing" },
  { name: "Engineering Services", href: "/services/engineering-serivces/" },
  { name: "SaaS Solutions", href: "/services/saas-solution/servicecpq" },
];

const ColHeading = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0098AF] mb-4">
    {children}
  </p>
);

export default function UsefulLinks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const child = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: i * 0.06, ease: "easeOut" },
    }),
  };

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      {/* Quick Links */}
      <div>
        <ColHeading>Quick Links</ColHeading>
        <ul className="space-y-2.5">
          {usefulLinks.map((link, i) => (
            <motion.li
              key={link.name}
              custom={i}
              variants={child}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Link
                href={link.href}
                className="group flex items-center gap-1.5 text-[13px] text-white/55 hover:text-white transition-colors duration-200"
              >
                <ChevronRight className="w-3 h-3 text-[#0098AF] opacity-0 group-hover:opacity-100 -ml-1 transition-all duration-200 group-hover:translate-x-0.5" />
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div>
        <ColHeading>Our Services</ColHeading>
        <ul className="space-y-2.5">
          {services.map((service, i) => (
            <motion.li
              key={service.name}
              custom={i}
              variants={child}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Link
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-1.5 text-[13px] text-white/55 hover:text-white transition-colors duration-200"
              >
                <ChevronRight className="w-3 h-3 text-[#0098AF] opacity-0 group-hover:opacity-100 -ml-1 mt-0.5 flex-shrink-0 transition-all duration-200 group-hover:translate-x-0.5" />
                <span>{service.name}</span>
                <ExternalLink className="w-3 h-3 mt-0.5 flex-shrink-0 text-white/30 group-hover:text-[#0098AF] transition-colors duration-200" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

    </div>
  );
}