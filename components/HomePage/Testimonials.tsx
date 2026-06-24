"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

type Testimonial = {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "I am pleased to provide this reference for Cognition IES, which has been a reliable partner in supporting our engineering and cost analysis initiatives. They bring strong capabilities in teardown and idea generation, offering valuable insights that helped us refine our product design and explore cost-effective alternatives. Their approach to feature value and cost analysis has been beneficial in identifying areas for improvement. Cognition's should-cost studies have provided useful visibility into cost structures. We have had a very positive experience working with Cognition and would recommend them to organizations seeking engineering design support especially in the VAVE space.",
    author: "Anonymous",
    position: "Senior Vice President",
    company: "Confidential Client",
  },
  {
    id: "testimonial-2",
    quote: "Partnering with Cognition IES for our plant's digital transformation has been a game-changer. The precision laser scanning helped us uncover layout inconsistencies. The digital twin they built is not just a model it's a dynamic tool that gives us real-time visibility into our operations. We've seen significant improvements in our decision-making, reduced downtime, and far fewer issues during equipment installation and changeovers. Cognition IES didn't just deliver a service; they've empowered us with a smarter, scalable way to run our facility.",
    author: "Anonymous",
    position: "Project Manager",
    company: "Confidential Client",
  },
  {
    id: "testimonial-3",
    quote: "Working with Cognition IES transformed our approach to product development. Their comprehensive analysis identified optimization opportunities we hadn't considered. The team's expertise in value engineering delivered a 15% reduction in manufacturing costs while enhancing product quality. Their clear communication and structured methodology made complex engineering concepts accessible to our entire team. I highly recommend their services to any company looking to gain a competitive edge.",
    author: "Anonymous",
    position: "Senior Principal Engineer",
    company: "Confidential Client",
  },
];

const Testimonials = () => {
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
      { threshold: 0.2 }
    );
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-28 bg-white dark:bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.035]"
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
            Testimonials
          </p>
          <h2
            className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white leading-tight mb-4"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Voices of{" "}
            <em className="not-italic text-[#0098AF]">success.</em>
          </h2>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-lg leading-relaxed">
            Discover how our solutions have transformed businesses and created lasting impact.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <Carousel opts={{ align: "center", loop: true }} className="w-full">
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.id} className="basis-full">
                  <div className="mx-auto max-w-3xl lg:max-w-4xl bg-[#f7f8fa] dark:bg-[#0d0d14] rounded-xl border border-[#e8eaed] dark:border-[#1e1e2e] p-8 lg:p-10 relative">

                    {/* Quote icon */}
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-[#0098AF]/15" />

                    {/* Quote text */}
                    <blockquote className="text-[15px] md:text-[16px] text-[#556677] dark:text-[#8899aa] leading-[1.9] italic mb-8 max-h-[220px] overflow-y-auto pr-2">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    {/* Divider */}
                    <div className="h-px bg-[#e8eaed] dark:bg-[#1e1e2e] mb-6" />

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#0098AF]/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[13px] font-bold text-[#0098AF]">
                          {t.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#003C46] dark:text-white">
                          {t.author}
                        </p>
                        <p className="text-[12px] text-[#778899] dark:text-[#6677aa]">
                          {t.position} · <span className="text-[#0098AF]">{t.company}</span>
                        </p>
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent rounded-b-xl" />
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
      </div>
    </section>
  );
};

export default Testimonials;