"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import digitalImage from "@/constants/images/home/our-recent-projects/digitalization.jpg";
import pcmImage2 from "@/constants/images/home/our-recent-projects/pcm.jpg";
import Link from "next/link";
import heroImage from "@/constants/images/hero/pexels-fauxels-3183197.jpg";
import { Button } from "@/components/ui/button";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string | StaticImageData;
  href: string;
};

const projects: Project[] = [
  {
    id: "project-0",
    title: "IT Talent Deployment",
    category: "Recruitment Support",
    description: "Successfully staffed and deployed a team of skilled full-stack developers (React & Node.js) for a growing IT company. Ensured quick turnaround, seamless onboarding, and end-to-end compliance support.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    href: "/projects/it-talent-deployment",
  },
  {
    id: "project-1",
    title: "Digitalization",
    category: "Build and Operate",
    description: "Comprehensive Digital Transformation of a Manufacturing Plant through 3D Scanning, Digital Twin, and Real-Time Data Integration to Improve Efficiency and Accuracy.",
    image: digitalImage,
    href: "/projects/digitalization",
  },
  {
    id: "project-2",
    title: "Industrial Equipment Cost Optimization & Benchmarking",
    category: "Build and Operate",
    description: "Conducted a detailed cost and function analysis of Industrial Equipment, identifying cost-saving opportunities through competitive benchmarking and design optimization.",
    image: pcmImage2,
    href: "/projects/product-cost-management",
  },
  {
    id: "project-3",
    title: "Engineering Talent Deployment",
    category: "Recruitment Support",
    description: "Delivering experienced engineering professionals to support design, development, and execution across capital projects, manufacturing setups, and plant engineering functions.",
    image: heroImage,
    href: "/projects/engineering-talent-deployment",
  },
];

const RecentProjects = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.15 }
    );
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="projects-heading"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
            Featured Work
          </p>
          <h2
            id="projects-heading"
            className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white leading-tight mb-4"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Our recent{" "}
            <em className="not-italic text-[#0098AF]">projects.</em>
          </h2>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-lg leading-relaxed">
            Showcasing how we build, operate, and deliver impact across industries.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem
                  key={project.id}
                  className={cn("pl-4", isMobile ? "basis-full" : "basis-1/2")}
                >
                  <div className="group h-[420px] sm:h-[460px] bg-white dark:bg-[#0d0d14] rounded-xl border border-[#e8eaed] dark:border-[#1e1e2e] hover:border-[#0098AF]/30 transition-colors duration-200 overflow-hidden flex flex-col">

                    {/* Image */}
                    <div className="relative h-[220px] sm:h-[260px] flex-shrink-0 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        {...(index < 2 ? { priority: true } : { loading: "lazy" })}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/50 to-transparent opacity-60" />
                      <span className="absolute top-4 left-4 px-2.5 py-1 bg-white/95 dark:bg-[#0d0d14]/90 rounded-full text-[11px] font-semibold text-[#003C46] dark:text-white tracking-wide">
                        {project.category}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-[20px] font-semibold text-[#003C46] dark:text-white group-hover:text-[#0098AF] transition-colors duration-200 mb-2 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-[13px] text-[#778899] dark:text-[#6677aa] leading-relaxed flex-1">
                        {project.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-[#e8eaed] dark:border-[#1e1e2e] flex items-center justify-between">
                        <Link
                          href={project.href}
                          className="text-[13px] font-semibold text-[#0098AF] hover:text-[#007B8F] transition-colors duration-200"
                        >
                          View in detail
                        </Link>
                        <ArrowUpRight className="w-4 h-4 text-[#aabbcc] group-hover:text-[#0098AF] transition-colors duration-200" />
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {!isMobile && (
              <>
                <CarouselPrevious className="absolute left-[-44px] lg:left-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0098AF] text-white hover:bg-[#007B8F] border-none" aria-label="Previous" />
                <CarouselNext className="absolute right-[-44px] lg:right-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0098AF] text-white hover:bg-[#007B8F] border-none" aria-label="Next" />
              </>
            )}
          </Carousel>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link href="/projects">
            <Button className="bg-[#0098AF] hover:bg-[#007B8F] text-white rounded-lg px-7 py-2.5 text-[14px] font-semibold transition-colors duration-200">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProjects;