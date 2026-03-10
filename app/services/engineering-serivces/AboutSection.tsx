"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import aboutImage from "@/constants/images/hero/build-operate.png";

export const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const child = {
    hidden: { opacity: 0, y: 18 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
    }),
  };

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-[#f7f8fa] dark:bg-[#0d0d14] relative overflow-hidden"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#003C46 1px, transparent 1px), linear-gradient(90deg, #003C46 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Image column */}
          <motion.div
            custom={0}
            variants={child}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5"
          >
            <div className="relative rounded-xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e] group">
              <Image
                src={aboutImage}
                alt="Engineering team collaboration"
                className="w-full h-[340px] md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                width={480}
                height={420}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/30 via-transparent to-transparent" />

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          </motion.div>

          {/* Content column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.p
              custom={1}
              variants={child}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF]"
            >
              About Our Engineering Practice
            </motion.p>

            <motion.h2
              custom={2}
              variants={child}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-3xl md:text-4xl font-bold text-[#003C46] dark:text-white font-display leading-tight"
            >
              Engineering excellence that{" "}
              <em className="not-italic text-[#0098AF]">drives industry.</em>
            </motion.h2>

            <motion.div
              custom={3}
              variants={child}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              <p className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-[1.85]">
                Our comprehensive engineering services combine cutting-edge technology with deep industry expertise to deliver innovative solutions that transform complex challenges into competitive advantages. We specialize in both plant engineering and product development, ensuring seamless integration across all phases of your project lifecycle.
              </p>
              <p className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-[1.85]">
                From initial concept through final implementation, our multidisciplinary team leverages advanced CAE tools, simulation technologies, and proven methodologies to optimize performance, enhance safety, and drive sustainability.
              </p>
            </motion.div>

            {/* Stat pills */}
            <motion.div
              custom={4}
              variants={child}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap gap-3 pt-2"
            >
              {[
                { label: "Plant Engineering", value: "9+ Disciplines" },
                { label: "Product Engineering", value: "10+ Capabilities" },
                { label: "Tools & Software", value: "60+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 py-2.5 rounded-lg border border-[#e8eaed] dark:border-[#1e1e2e] bg-white dark:bg-[#0a0a0f]"
                >
                  <p className="text-[11px] text-[#aabbcc] uppercase tracking-wider mb-0.5">{stat.label}</p>
                  <p className="text-[14px] font-semibold text-[#003C46] dark:text-white">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};