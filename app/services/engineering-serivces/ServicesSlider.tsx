"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Cog,
  Cpu,
  Zap,
  Wrench,
  Shield,
  FlaskConical,
  FileText,
  Factory,
  Building,
  Droplets,
  Check,
  Box,
  GitBranch,
  Loader2,
  Smartphone,
} from "lucide-react";

// ---------- Types ----------
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const plantServices: Service[] = [
  {
    title: "Project Reports & Feasibility",
    description: "Comprehensive techno-economic analysis & feasibility studies",
    icon: <FileText className="h-8 w-8" />,
    features: [
      "Detailed techno-economic reports",
      "Feasibility studies & costing",
      "Project reports & evaluations",
    ],
  },
  {
    title: "Chemical Plants & Technologies",
    description:
      "Specialized solutions for chemical plant design & technologies",
    icon: <FlaskConical className="h-8 w-8" />,
    features: [
      "Sulphuric Acid & Oleum plants",
      "Stable Bleaching Powder plants",
      "Activated Bleaching Earth plants",
      "Carbon Dioxide plant service",
    ],
  },
  {
    title: "Calcium Chloride & CPW Plants",
    description: "End-to-end solutions for calcium chloride and CPW plants",
    icon: <Droplets className="h-8 w-8" />,
    features: [
      "Calcium chloride plant service",
      "Chlorinated paraffin wax plant",
      "Process & utilities integration",
      "Operation & maintenance support",
    ],
  },
  {
    title: "Process Design & Optimization",
    description:
      "Advanced process engineering, design, and optimization solutions",
    icon: <Cog className="h-8 w-8" />,
    features: [
      "P&ID, FEED & hydraulic analysis",
      "Mass & energy balance",
      "Process equipment & heat exchanger design",
      "Safety studies (HAZOP, HAZID, SIL, QRA)",
    ],
  },
  {
    title: "Piping & Mechanical Engineering",
    description: "Comprehensive piping, mechanical, and structural engineering",
    icon: <Wrench className="h-8 w-8" />,
    features: [
      "Piping layout, isometrics & stress analysis",
      "Equipment & static/rotating machinery",
      "Pressure vessels, tanks & HVAC systems",
      "3D modeling, GA & fabrication drawings",
    ],
  },
  {
    title: "Electrical & Instrumentation",
    description: "Complete electrical and instrumentation solutions",
    icon: <Zap className="h-8 w-8" />,
    features: [
      "Load list, SLD & cable routing",
      "Switchgear, MCC & earthing systems",
      "Instrumentation design & datasheets",
      "Control room layouts & DCS integration",
    ],
  },
  {
    title: "Civil & Structural Engineering",
    description: "Design and execution of plant civil and structural works",
    icon: <Building className="h-8 w-8" />,
    features: [
      "Site development & foundations",
      "Industrial buildings & utility blocks",
      "Pipe racks, platforms & supports",
      "Structural stress & lifting analysis",
    ],
  },
  {
    title: "Digital Twin & Plant Modernization",
    description: "Next-gen digitalization solutions for plant lifecycle",
    icon: <Cpu className="h-8 w-8" />,
    features: [
      "High-precision 3D laser scanning",
      "As-built verification & data capture",
      "Intelligent CAD modeling",
      "Integration with design workflows",
    ],
  },
  {
    title: "Safety & Compliance",
    description:
      "Comprehensive safety, risk assessment & regulatory compliance",
    icon: <Shield className="h-8 w-8" />,
    features: [
      "Hazard identification & analysis",
      "Safety instrumented systems",
      "Regulatory compliance audits",
      "Process & operational safety",
    ],
  },
];

const productServices: Service[] = [
  {
    title: "Mechanical Design Services",
    description: "End-to-end mechanical product design and optimization",
    icon: <Wrench className="h-8 w-8" />,
    features: [
      "Product design & development (concept → production)",
      "Value engineering & DFM/DFA (cost & weight reduction)",
      "Product lifecycle management (PLM)",
    ],
  },
  {
    title: "CAE, FEA & CFD",
    description: "Simulation-led validation and optimization",
    icon: <Loader2 className="h-8 w-8" />,
    features: [
      "Structural FEA (static, fatigue, durability)",
      "Thermal & fluid flow analysis (CFD)",
      "Crash, impact & NVH simulations",
      "Mold flow, casting & multiphysics studies",
    ],
  },
  {
    title: "Prototyping & Manufacturing Support",
    description: "Rapid prototyping, validation and low-volume production",
    icon: <Factory className="h-8 w-8" />,
    features: [
      "3D printing, CNC machining & functional prototypes",
      "Concept validation & iterative design testing",
      "Material selection & prototype testing",
    ],
  },
  {
    title: "Hydraulic Engineering",
    description: "Design, modeling and retrofit for hydraulic systems",
    icon: <Droplets className="h-8 w-8" />,
    features: [
      "Hydraulic circuit design & simulation",
      "Component selection (pumps, valves, actuators)",
      "System testing, retrofitting & performance optimization",
    ],
  },
  {
    title: "Electrical & Embedded Systems",
    description: "Electronics, control panels and embedded product development",
    icon: <Zap className="h-8 w-8" />,
    features: [
      "Circuit design, PCB design & harness routing",
      "Control panel & system integration testing",
      "Microcontroller programming, BSP & RTOS work",
      "Vehicle telematics, IoT & BMS integration",
    ],
  },
  {
    title: "Asset Management & Reliability",
    description:
      "Strategies and engineering for asset performance and lifecycle",
    icon: <Cog className="h-8 w-8" />,
    features: [
      "Predictive & preventive maintenance strategies",
      "Performance monitoring & analytics",
      "Spare parts optimization & lifecycle costing",
      "EAM system implementation support",
    ],
  },
  {
    title: "Supply Chain, Sourcing & Procurement",
    description:
      "Procurement planning, supplier evaluation and logistics design",
    icon: <Box className="h-8 w-8" />,
    features: [
      "Supplier sourcing, RFx preparation & evaluation",
      "Should-costing & cost estimation",
      "Inventory optimization & demand forecasting",
    ],
  },
  {
    title: "Embedded AI, IoT & Cybersecurity",
    description: "Connected product development with secure embedded systems",
    icon: <Smartphone className="h-8 w-8" />,
    features: [
      "IoT device integration & telematics",
      "AI/ML model embedding for edge devices",
      "Cyber security hardening for embedded systems",
      "Prototype to production firmware pipelines",
    ],
  },
  {
    title: "Technical Publications & Training",
    description: "Comprehensive documentation and training deliverables",
    icon: <FileText className="h-8 w-8" />,
    features: [
      "User manuals, maintenance & service manuals",
      "Illustrated parts catalogs (IPC) & IETMs",
      "SOPs, regulatory documentation & compliance manuals",
    ],
  },
  {
    title: "Testing, Validation & Failure Analysis",
    description: "Full test programs and root-cause investigations",
    icon: <GitBranch className="h-8 w-8" />,
    features: [
      "Functional & performance validation",
      "Failure analysis & root cause determination",
      "NVH, fatigue and durability test plans",
      "Design iteration based on test results",
    ],
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="flex-shrink-0 w-80 rounded-3xl p-8 bg-white"
      style={{
        backgroundImage: "linear-gradient(145deg, #fff, hsl(196, 100%, 98%))",
        boxShadow: "0 4px 20px -2px hsla(185, 100%, 34%, 0.08)",
        border: "1px solid hsla(186, 67%, 85%, 0.5)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 60px -10px hsla(185, 100%, 34%, 0.25)",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex items-start space-x-4">
        <motion.div
          className="p-4 rounded-2xl"
          style={{
            backgroundColor: "hsla(185, 100%, 34%, 0.1)",
            color: "hsl(185, 100%, 34%)",
          }}
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.8 }}
        >
          {service.icon}
        </motion.div>
        <div className="flex-1 space-y-4">
          <div>
            <h3
              className="text-xl font-bold mb-3 leading-tight"
              style={{ color: "hsl(184, 31%, 36%)" }}
            >
              {service.title}
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{ color: "hsl(184, 31%, 36%)" }}
            >
              {service.description}
            </p>
          </div>
          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <motion.li
                key={idx}
                className="flex items-center text-sm leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + idx * 0.05 }}
                style={{ color: "hsl(184, 31%, 36%)" }}
              >
                <Check className="w-4 h-4 mr-3 text-teal-600 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceSlider = ({
  title,
  services,
  direction,
  description,
}: {
  title: string;
  services: Service[];
  direction: "left" | "right";
  description: string;
}) => {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile drag
  const cardWidth = 352;
  const singleSetWidth = services.length * cardWidth;

  // Check window.innerWidth only on client side
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile); // Update on resize
    return () => window.removeEventListener("resize", checkMobile); // Cleanup
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable auto scroll on mobile
    const animateCarousel = async () => {
      const initialX = direction === "left" ? 0 : -singleSetWidth;
      const endX = direction === "left" ? -singleSetWidth : 0;
      while (!isHovered) {
        await controls.start({
          x: endX,
          transition: {
            duration: services.length * 3,
            ease: "linear",
          },
        });
        controls.set({ x: initialX }); // Instant reset, no flicker
      }
    };
    if (!isHovered) animateCarousel();
    else controls.stop();
    return () => controls.stop();
  }, );

  return (
    <div className="space-y-10">
      <div>
        <h3
          className="text-4xl font-bold tracking-tight leading-tight mt-4"
          style={{ color: "hsl(184, 31%, 36%)" }}
        >
          {title}
        </h3>
        <p
          className="text-lg mt-3 max-w-3xl leading-relaxed"
          style={{ color: "hsl(184, 31%, 36%)" }}
        >
          {description}
        </p>
      </div>
      <div
        className="relative overflow-hidden rounded-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex space-x-8 md:cursor-grab md:active:cursor-grabbing"
          animate={controls}
          drag={isMobile ? "x" : false} // Use state instead of window.innerWidth
          dragConstraints={{ left: -singleSetWidth, right: 0 }}
          initial={{ x: direction === "left" ? 0 : -singleSetWidth }}
          style={{ width: `${singleSetWidth * 2}px` }}
        >
          {[...services, ...services].map((service, index) => (
            <ServiceCard
              key={`${service.title}-${index}`}
              service={service}
              index={index % services.length}
            />
          ))}
        </motion.div>
        <div className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10 bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  );
};

export const ServicesSlider = () => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-16 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsla(186, 61%, 83%, 1), hsla(0, 0%, 98%, 1))",
        }}
      />
      <div className="relative z-10 container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#003C46] mb-6"
          >
            Our Engineering{" "}
            <span className="font-semibold bg-gradient-to-br from-[#003C46] to-[#1C7A8A] bg-clip-text text-transparent">
              Services Portfolio
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-7xl mx-auto leading-relaxed"
            style={{ color: "hsl(184, 31%, 36%)" }}
          >
            Comprehensive engineering solutions spanning plant infrastructure
            and product development
          </motion.p>
        </div>
        <div className="space-y-6 lg:space-y-10">
          <ServiceSlider
            title="Plant Engineering Services"
            services={plantServices}
            direction="left"
            description="Optimizing industrial facilities with expertise in process design, automation, electrical infrastructure, mechanical systems, and safety compliance for enhanced efficiency and sustainability."
          />
          <ServiceSlider
            title="Product Engineering Services"
            services={productServices}
            direction="right"
            description="Transforming ideas into market-ready products through innovative mechanical design, advanced analysis, electrical engineering, prototyping, and comprehensive documentation."
          />
        </div>
      </div>
    </section>
  );
};
