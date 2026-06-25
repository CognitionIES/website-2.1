"use client";

import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { heroSlides } from "@/constants/hero";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const SLIDE_DURATION = 5000;

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goToPrevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const goToNextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const goToSlide = (index: SetStateAction<number>) => setCurrentSlide(index);

  return (
    <section
      className="relative h-[calc(100vh-4rem)] w-full overflow-hidden"
      onMouseEnter={() => !isMobile && setIsPaused(true)}
      onMouseLeave={() => !isMobile && setIsPaused(false)}
      onTouchStart={() => isMobile && setIsPaused(true)}
      onTouchEnd={() => isMobile && setIsPaused(false)}
      aria-label="Cognition IES Hero Slideshow"
    >
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Subtle ken-burns zoom on the active slide only */}
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              animation:
                currentSlide === index && !isPaused
                  ? `heroKenBurns ${SLIDE_DURATION * 1.6}ms ease-out forwards`
                  : undefined,
            }}
          >
            <Image
              src={isMobile ? slide.mobileImage : slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Layered overlay matching the careers hero */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/80 via-[#004f5e]/70 to-[#0098AF]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002930]/50 via-transparent to-transparent" />

          {/* Deterministic particles — no Math.random(), no SSR mismatch */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(14)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.45, 0], y: [0, -110] }}
                transition={{
                  duration: 4 + (i * 0.6) % 3,
                  repeat: Infinity,
                  delay: (i * 0.45) % 4,
                }}
                className="absolute w-1 h-1 bg-[#0098AF]/70 rounded-full"
                style={{ left: `${6 + (i * 6.5) % 88}%`, bottom: "16%" }}
              />
            ))}
          </div>

          {/* Text Overlay */}
          {isMobile ? (
            <div className="absolute bottom-14 left-0 right-0 z-10 px-5">
              <motion.div
                key={`slide-content-mobile-${index}`}
                initial={{ opacity: 0, y: 14 }}
                animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="text-white"
              >
                <span className="inline-block py-1 px-3 bg-white/10 backdrop-blur-sm text-white text-[10px] uppercase tracking-[0.18em] font-semibold rounded-full border border-white/20 mb-3">
                  {slide.majorService}
                </span>
                <p className="text-[11px] text-[#0098AF] font-semibold tracking-[0.18em] uppercase mb-1">
                  {slide.subtitle}
                </p>
                <h1
                  className="text-2xl font-bold leading-tight text-white mb-2"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  {slide.title}
                </h1>
                <p className="text-[13px] font-light leading-relaxed text-white/80">
                  {slide.description}
                </p>
              </motion.div>
            </div>
          ) : (
            <div className="absolute bottom-12 left-0 right-0 z-10 px-10 md:px-16 flex justify-end">
              <motion.div
                key={`slide-content-${index}`}
                initial={{ opacity: 0, y: 18 }}
                animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-right max-w-xl"
              >
                <span className="inline-block py-1.5 px-4 bg-white/10 backdrop-blur-sm text-white text-[10px] uppercase tracking-[0.2em] font-semibold rounded-full border border-white/20 mb-3">
                  {slide.majorService}
                </span>
                <p className="text-sm text-[#0098AF] font-semibold tracking-[0.18em] uppercase mb-1">
                  {slide.subtitle}
                </p>
                <h1
                  className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight text-white mb-3"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg text-white/75 font-light leading-relaxed line-clamp-2">
                  {slide.description}
                </p>
              </motion.div>
            </div>
          )}
        </div>
      ))}

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0098AF]/50 to-transparent z-10" />

      {/* Navigation Arrows — vertically centered, the standard position for slideshow nav */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/30 hover:bg-[#0098AF]/70 border border-white/20 flex items-center justify-center transition-all duration-200"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="text-white w-4 h-4 md:w-5 md:h-5" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/30 hover:bg-[#0098AF]/70 border border-white/20 flex items-center justify-center transition-all duration-200"
        aria-label="Next Slide"
      >
        <ChevronRight className="text-white w-4 h-4 md:w-5 md:h-5" />
      </button>

      {/* Slide indicators — progress-fill, higher-contrast against dark backgrounds */}
      {isMobile ? (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative h-2 w-5 rounded-full bg-white/45 overflow-hidden ring-1 ring-white/20"
              aria-label={`Go to slide ${index + 1}`}
            >
              {currentSlide === index && (
                <span
                  className="absolute inset-y-0 left-0 bg-[#0098AF] rounded-full"
                  style={{
                    animation: isPaused
                      ? undefined
                      : `heroProgressFill ${SLIDE_DURATION}ms linear forwards`,
                    width: isPaused ? "100%" : undefined,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      ) : (
        <div className="absolute bottom-12 right-4 flex flex-col gap-2.5 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative rounded-full overflow-hidden transition-all duration-300 ring-1 ring-white/20 ${
                currentSlide === index ? "w-2 h-6" : "w-2 h-2"
              } bg-white/45 hover:bg-white/65`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {currentSlide === index && (
                <span
                  className="absolute inset-x-0 top-0 bg-[#0098AF] rounded-full"
                  style={{
                    animation: isPaused
                      ? undefined
                      : `heroProgressFillVertical ${SLIDE_DURATION}ms linear forwards`,
                    height: isPaused ? "100%" : undefined,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      <style jsx global>{`
        @keyframes heroKenBurns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.08);
          }
          }
          @keyframes heroProgressFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        @keyframes heroProgressFillVertical {
          from {
            height: 0%;
          }
          to {
            height: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;