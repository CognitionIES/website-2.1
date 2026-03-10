"use client";

import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { heroSlides } from "@/constants/hero";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
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
          <Image
            src={isMobile ? slide.mobileImage : slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />

          {/* Layered overlay matching the careers hero */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/80 via-[#004f5e]/70 to-[#0098AF]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002930]/50 via-transparent to-transparent" />

          {/* Deterministic particles — no Math.random(), no SSR mismatch */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0], y: [0, -90] }}
                transition={{
                  duration: 4 + (i * 0.6) % 3,
                  repeat: Infinity,
                  delay: (i * 0.45) % 4,
                }}
                className="absolute w-1 h-1 bg-[#0098AF]/60 rounded-full"
                style={{ left: `${10 + (i * 8.5) % 80}%`, bottom: "18%" }}
              />
            ))}
          </div>

          {/* Text Overlay */}
          {isMobile ? (
            <div className="absolute bottom-14 left-0 right-0 z-10 px-5">
              <div className="text-white">
                <span className="inline-block py-1 px-3 bg-white/10 backdrop-blur-sm text-white text-[10px] uppercase tracking-[0.18em] font-semibold rounded-full border border-white/20 mb-3">
                  {slide.majorService}
                </span>
                <p className="text-[11px] text-[#0098AF] font-semibold tracking-[0.18em] uppercase mb-1">
                  {slide.subtitle}
                </p>
                <h1 className="text-2xl font-bold leading-tight text-white mb-2"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
                  {slide.title}
                </h1>
                <p className="text-[13px] font-light leading-relaxed text-white/80">
                  {slide.description}
                </p>
              </div>
            </div>
          ) : (
            <div className="absolute bottom-12 right-10 z-10 text-right max-w-2xl">
              <motion.div
                key={`slide-content-${index}`}
                initial={{ opacity: 0, y: 18 }}
                animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="inline-block py-1.5 px-4 bg-white/10 backdrop-blur-sm text-white text-[10px] uppercase tracking-[0.2em] font-semibold rounded-full border border-white/20 mb-3">
                  {slide.majorService}
                </span>
                <p className="text-sm text-[#0098AF] font-semibold tracking-[0.18em] uppercase mb-1">
                  {slide.subtitle}
                </p>
                <h1
                  className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight text-white mb-4"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg text-white/75 font-light leading-relaxed">
                  {slide.description}
                </p>
              </motion.div>
            </div>
          )}
        </div>
      ))}

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0098AF]/50 to-transparent z-10" />

      {/* Navigation Arrows */}
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

      {/* Slide indicators — vertical on desktop, horizontal on mobile */}
      {isMobile ? (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-5 h-2 bg-[#0098AF]"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      ) : (
        <div className="absolute bottom-12 right-4 flex flex-col gap-2.5 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-2 h-5 bg-[#0098AF]"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Hero;
// Write an excellent blog or article about closures in javascript, explaining the concept, how it works, and providing examples

// What is async await in JavaScript?
/*import { useEffect, useState, useRef } from "react";
import { heroSlides } from "@/constants/hero";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(
    Array(heroSlides.length).fill(false)
  );
  const [loadingProgress, setLoadingProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const slideTimerRef = useRef<number | null>(null);

  // Progress animation for current slide
  useEffect(() => {
    if (isPaused) return;

    setLoadingProgress(0);

    const startTime = Date.now();
    const duration = 5000; // 5 seconds, same as slide duration

    const animateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / duration) * 100, 100);
      setLoadingProgress(progress);

      if (progress < 100) {
        slideTimerRef.current = requestAnimationFrame(animateProgress);
      }
    };

    slideTimerRef.current = requestAnimationFrame(animateProgress);

    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, duration);

    return () => {
      clearTimeout(timer);
      if (slideTimerRef.current) {
        cancelAnimationFrame(slideTimerRef.current);
      }
    };
  }, [currentSlide, isPaused]);

  // Handle pause/resume
  useEffect(() => {
    if (isPaused && slideTimerRef.current) {
      cancelAnimationFrame(slideTimerRef.current);
    }
  }, [isPaused]);

  // Navigation functions
  const goToPrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Handle image load
  const handleImageLoad = (index: number) => {
    const newLoadState = [...isLoaded];
    newLoadState[index] = true;
    setIsLoaded(newLoadState);
  };

  return (
    <section
      className="relative h-[calc(100vh-4rem)] w-full overflow-hidden font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Engineering Innovation Hero Slideshow"
    >
      {/* Progress Bar 
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10 z-30">
        <div
          ref={progressRef}
          className="h-full bg-[#0098af] transition-all duration-300 ease-linear"
          style={{ width: `${loadingProgress}%` }}
        />
      </div>

      {/* Slides 
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            currentSlide === index
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={currentSlide !== index}
        >
          {slide.blurImage ? (
            <div
              className={`blur-load w-full h-full ${
                isLoaded[index] ? "loaded" : ""
              }`}
              style={{ backgroundImage: `url(${slide.blurImage})` }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={1920}
                height={1080}
                onLoad={() => handleImageLoad(index)}
                className="w-full h-full object-cover object-center brightness-[0.85]"
              />
            </div>
          ) : (
            <Image
              src={slide.image}
              alt={slide.title}
              width={1920}
              height={1080}
              onLoad={() => handleImageLoad(index)}
              className="w-full h-full object-cover object-center brightness-[0.85]"
            />
          )}

          <div className="absolute inset-0 hero-gradient" />

          {/* Text Overlay 
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left md:max-w-2xl lg:max-w-3xl">
                <div
                  className={`transition-all duration-700 delay-100 ${
                    currentSlide === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <span className="hero-subtitle text-sm sm:text-base font-medium tracking-widest uppercase text-[#33C3F0] mb-4 inline-block">
                    {slide.subtitle}
                  </span>
                </div>

                <h1
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 leading-tight text-white tracking-tight transition-all duration-700 delay-200 whitespace-normal max-w-full ${
                    currentSlide === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {slide.title}
                </h1>

                <p
                  className={`text-sm sm:text-base md:text-lg mb-8 text-white/90 font-light leading-relaxed max-w-xl transition-all duration-700 delay-300 ${
                    currentSlide === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {slide.description}
                </p>

                <button
                  className={`group px-7 py-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-medium rounded-md transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#0098af]/50 shadow-lg hover:shadow-xl delay-400 ${
                    currentSlide === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <span className="relative">
                    Explore Solutions
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0098af] group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows with improved design 
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4 sm:px-6 md:px-8 z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={goToPrevSlide}
          className="p-3 rounded-full bg-black/10 backdrop-blur-md border border-white/10 text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-[#0098af]/30 focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={goToNextSlide}
          className="p-3 rounded-full bg-black/10 backdrop-blur-md border border-white/10 text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-[#0098af]/30 focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Slide Indicators (redesigned) 
      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative transition-all duration-300 ease-out focus:outline-none group`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index ? "true" : "false"}
          >
            <span
              className={`block h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-10 bg-brand-blue"
                  : "w-4 bg-white/40 group-hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

export default Hero;
 */
