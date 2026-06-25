import { motion } from "framer-motion";
import { FOOTER_CONSTANTS } from "../../constants/footer/constants";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function CompanyInfo() {
  const { DESCRIPTION, iamge } = FOOTER_CONSTANTS.COMPANY;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const child = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  return (
    <div ref={ref} className="space-y-6">

      {/* Logo */}
      <motion.div
        custom={0}
        variants={child}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Image
          src={iamge}
          alt="Cognition IES"
          width={220}
          height={52}
          className="brightness-110"
          loading="lazy"
        />
      </motion.div>

      {/* Description */}
      <motion.p
        custom={1}
        variants={child}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-[14px] text-white/60 leading-[1.85] max-w-sm"
      >
        {DESCRIPTION}
      </motion.p>

      {/* Decorative line */}
      <motion.div
        custom={2}
        variants={child}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex items-center gap-3"
      >
        <div className="h-px w-16 bg-gradient-to-r from-[#0098AF] to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#0098AF]/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#0098AF]/30" />
      </motion.div>

    </div>
  );
}