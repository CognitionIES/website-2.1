import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/Badge";

interface EngagementModel {
  id: string;
  title: string;
  description: string;
  category: string;
}

const engagementModels: EngagementModel[] = [
  {
    id: "time-material",
    title: "Time & Material",
    description:
      "Agile and quick ramp-up, transparent cost structure, and access to pre-vetted technical talent. Ideal for projects where scope and duration evolve.",
    category: "Flexible",
  },
  {
    id: "rpo",
    title: "Recruitment Process Outsourcing",
    description:
      "Industry-focused recruiters and AI-driven hiring processes that reduce cost-per-hire while ensuring compliance and quality hires.",
    category: "Recruitment",
  },
  {
    id: "project-hiring",
    title: "Project-Based Hiring",
    description:
      "Fast-track recruitment tailored to specific project timelines, backed by strong domain expertise and strict delivery standards.",
    category: "Project",
  },
  {
    id: "fixed-price",
    title: "Fixed Price Model",
    description:
      "A predetermined cost is set for a well-defined project scope and deliverables, with payment milestones agreed upon upfront.",
    category: "Fixed",
  },
  {
    id: "dedicated-team",
    title: "Dedicated Team Model",
    description:
      "A team of engineers works exclusively for the client, acting as an extension of the client's in-house team for long-term projects.",
    category: "Dedicated",
  },
  {
    id: "odc",
    title: "Offshore Development Center",
    description:
      "Establish your own offshore development center with full control over team composition, processes, and long-term strategic goals.",
    category: "Offshore",
  },
  {
    id: "build-operate",
    title: "Build & Operate",
    description:
      "Long-term model where we build, manage, and scale dedicated teams with shared accountability and seamless client transfer options.",
    category: "Managed",
  },
];

const EngagementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % engagementModels.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? engagementModels.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 300);
    },
    [currentIndex, isTransitioning]
  );

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(!isAutoPlaying);
  }, [isAutoPlaying]);

  // Auto-play functionality
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (isAutoPlaying && !isPaused) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide, isAutoPlaying, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === " ") {
        event.preventDefault();
        toggleAutoPlay();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextSlide, prevSlide, toggleAutoPlay]);

  const getVisibleCards = () => {
    const extended = [
      ...engagementModels,
      ...engagementModels,
      ...engagementModels,
    ];
    const startIndex = currentIndex + engagementModels.length;
    return {
      cards: extended.slice(startIndex - 1, startIndex + 4),
      centerIndex: 1,
    };
  };

  const { cards, centerIndex } = getVisibleCards();

  return (
    <section
      className="w-full py-16 sm:py-20 lg:py-16 bg-gradient-to-br from-white via-[#0098af]/10 to-[#0098af]/20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      role="region"
      aria-label="Engagement Models Carousel"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  mb-8 sm:mb-8 opacity-100 ">
          <Badge
            variant="secondary"
            className="inline-block mb-2 bg-[#E6F0F5]/80 rounded-full px-4 py-1.5 text-xs font-medium tracking-wider text-[#0098AF] uppercase shadow-sm"
          >
            Models
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[hsl(222.2,84%,4.9%)]/90 mb-6">
            Our Engagement{" "}
            <span className="bg-gradient-to-r from-[hsl(187,100%,34%)] to-[hsl(194,100%,40%)] bg-clip-text text-transparent">
              Models
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-7xl mx-auto leading-relaxed">
            Flexible partnership models designed to meet your unique business
            needs and drive sustainable growth.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Controls */}

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-[hsl(0,0%,100%)] border-[hsl(220,15%,90%)] hover:bg-[hsl(194,30%,98%)] shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
            onClick={prevSlide}
            disabled={isTransitioning}
            aria-label="Previous engagement model"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-[hsl(0,0%,100%)] border-[hsl(220,15%,90%)] hover:bg-[hsl(194,30%,98%)] shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
            onClick={nextSlide}
            disabled={isTransitioning}
            aria-label="Next engagement model"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Cards Container */}
          <div className="flex items-center justify-center gap-6 px-4 sm:px-16">
            {/* Desktop: 3 cards visible */}
            <div className="hidden lg:flex items-center gap-6">
              {cards.slice(0, 3).map((model, index) => (
                <Card
                  key={`${model.id}-${index}`}
                  className={`
                    relative transition-all duration-500 ease-in-out cursor-pointer group
                    w-[340px] h-[260px]
                    ${
                      index === centerIndex
                        ? "scale-100 z-10 shadow-[0_10px_25px_-5px_hsl(187,100%,34%/0.1)]"
                        : "scale-90 opacity-70 hover:opacity-90 hover:scale-95"
                    }
                  `}
                  onClick={() => {
                    if (index === 0) prevSlide();
                    if (index === 2) nextSlide();
                  }}
                >
                  <CardContent
                    className={`
                      h-full p-8 rounded-xl transition-all duration-500
                      ${
                        index === centerIndex
                          ? "bg-[hsl(187,100%,34%)] text-[hsl(0,0%,100%)]"
                          : "bg-[hsl(0,0%,100%)] hover:shadow-[0_8px_30px_-4px_hsl(187,100%,34%/0.12)]"
                      }
                    `}
                  >
                    <h3 className="text-2xl font-bold mb-4 leading-tight">
                      {model.title}
                    </h3>

                    <p
                      className={`text-base leading-relaxed ${
                        index === centerIndex
                          ? "text-[hsl(0,0%,100%/0.9)]"
                          : "text-[hsl(215.4,16.3%,46.9%)]"
                      }`}
                    >
                      {model.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tablet: 2 cards visible */}
            <div className="hidden md:flex lg:hidden items-center gap-6">
              {cards.slice(0, 2).map((model, index) => (
                <Card
                  key={`${model.id}-${index}`}
                  className={`
                    relative transition-all duration-500 ease-in-out cursor-pointer group
                    w-[320px] h-[280px]
                    ${
                      index === 0
                        ? "scale-100 z-10 shadow-[0_10px_25px_-5px_hsl(187,100%,34%/0.1)]"
                        : "scale-95 opacity-80 hover:opacity-90"
                    }
                  `}
                  onClick={() => {
                    if (index === 1) nextSlide();
                  }}
                >
                  <CardContent
                    className={`
                      h-full p-6 rounded-xl transition-all duration-500
                      ${
                        index === 0
                          ? "bg-[hsl(187,100%,34%)] text-[hsl(0,0%,100%)]"
                          : "bg-[hsl(0,0%,100%)] hover:shadow-[0_8px_30px_-4px_hsl(187,100%,34%/0.12)]"
                      }
                    `}
                  >
                    <Badge
                      variant="outline"
                      className={`mb-3 ${
                        index === 0
                          ? "border-[hsl(0,0%,100%/0.3)] text-[hsl(0,0%,100%)]"
                          : "border-[hsl(187,100%,34%/0.3)] text-[hsl(187,100%,34%)]"
                      }`}
                    >
                      {model.category}
                    </Badge>

                    <h3 className="text-lg font-bold mb-3 leading-tight">
                      {model.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed ${
                        index === 0
                          ? "text-[hsl(0,0%,100%/0.9)]"
                          : "text-[hsl(215.4,16.3%,46.9%)]"
                      }`}
                    >
                      {model.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mobile: 1 card visible */}
            <div className="md:hidden w-full max-w-[340px] mx-auto">
              <Card className="w-full h-[320px] shadow-[0_10px_25px_-5px_hsl(187,100%,34%/0.1)]">
                <CardContent className="h-full p-6 rounded-xl bg-[hsl(187,100%,34%)] text-[hsl(0,0%,100%)]">
                  <Badge
                    variant="outline"
                    className="mb-4 border-[hsl(0,0%,100%/0.3)] text-[hsl(0,0%,100%)]"
                  >
                    {engagementModels[currentIndex].category}
                  </Badge>

                  <h3 className="text-xl font-bold mb-4 leading-tight">
                    {engagementModels[currentIndex].title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[hsl(0,0%,100%/0.9)]">
                    {engagementModels[currentIndex].description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-10 gap-2">
            {engagementModels.map((_, index) => (
              <button
                key={index}
                className={`
                  relative transition-all duration-300 rounded-full
                  ${
                    index === currentIndex
                      ? "w-6 h-2 bg-[hsl(187,100%,34%)] shadow-lg"
                      : "w-2 h-2 bg-[hsl(220,15%,85%)] hover:bg-[hsl(187,100%,34%/0.6)]"
                  }
                `}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                aria-label={`Go to slide ${index + 1}: ${
                  engagementModels[index].title
                }`}
              >
                {index === currentIndex && (
                  <span className="absolute inset-0 bg-[hsl(187,100%,34%)] rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-xs mx-auto">
            <div className="w-full bg-[hsl(220,15%,85%)] rounded-full h-1">
              <div
                className="bg-[hsl(187,100%,34%)] h-1 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    ((currentIndex + 1) / engagementModels.length) * 100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementCarousel;
