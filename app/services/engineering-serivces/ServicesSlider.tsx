"use client";

import { motion, useAnimationControls, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Cog, Cpu, Zap, Wrench, Shield, FlaskConical, FileText,
  Factory, Building, Droplets, Check, Box, GitBranch,
  Loader2, Smartphone,
} from "lucide-react";

//  Types ──

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

//  Data 

const plantServices: Service[] = [
  {
    title: "Project Reports & Feasibility",
    description: "Comprehensive techno-economic analysis & feasibility studies",
    icon: <FileText className="h-6 w-6" />,
    features: ["Detailed techno-economic reports", "Feasibility studies & costing", "Project reports & evaluations"],
  },
  {
    title: "Chemical Plants & Technologies",
    description: "Specialized solutions for chemical plant design & technologies",
    icon: <FlaskConical className="h-6 w-6" />,
    features: ["Sulphuric Acid & Oleum plants", "Stable Bleaching Powder plants", "Activated Bleaching Earth plants", "Carbon Dioxide plant service"],
  },
  {
    title: "Calcium Chloride & CPW Plants",
    description: "End-to-end solutions for calcium chloride and CPW plants",
    icon: <Droplets className="h-6 w-6" />,
    features: ["Calcium chloride plant service", "Chlorinated paraffin wax plant", "Process & utilities integration", "Operation & maintenance support"],
  },
  {
    title: "Process Design & Optimization",
    description: "Advanced process engineering, design, and optimization solutions",
    icon: <Cog className="h-6 w-6" />,
    features: ["P&ID, FEED & hydraulic analysis", "Mass & energy balance", "Process equipment & heat exchanger design", "Safety studies (HAZOP, HAZID, SIL, QRA)"],
  },
  {
    title: "Piping & Mechanical Engineering",
    description: "Comprehensive piping, mechanical, and structural engineering",
    icon: <Wrench className="h-6 w-6" />,
    features: ["Piping layout, isometrics & stress analysis", "Equipment & static/rotating machinery", "Pressure vessels, tanks & HVAC systems", "3D modeling, GA & fabrication drawings"],
  },
  {
    title: "Electrical & Instrumentation",
    description: "Complete electrical and instrumentation solutions",
    icon: <Zap className="h-6 w-6" />,
    features: ["Load list, SLD & cable routing", "Switchgear, MCC & earthing systems", "Instrumentation design & datasheets", "Control room layouts & DCS integration"],
  },
  {
    title: "Civil & Structural Engineering",
    description: "Design and execution of plant civil and structural works",
    icon: <Building className="h-6 w-6" />,
    features: ["Site development & foundations", "Industrial buildings & utility blocks", "Pipe racks, platforms & supports", "Structural stress & lifting analysis"],
  },
  {
    title: "Digital Twin & Plant Modernization",
    description: "Next-gen digitalization solutions for plant lifecycle",
    icon: <Cpu className="h-6 w-6" />,
    features: ["High-precision 3D laser scanning", "As-built verification & data capture", "Intelligent CAD modeling", "Integration with design workflows"],
  },
  {
    title: "Safety & Compliance",
    description: "Comprehensive safety, risk assessment & regulatory compliance",
    icon: <Shield className="h-6 w-6" />,
    features: ["Hazard identification & analysis", "Safety instrumented systems", "Regulatory compliance audits", "Process & operational safety"],
  },
];

const productServices: Service[] = [
  {
    title: "Mechanical Design Services",
    description: "End-to-end mechanical product design and optimization",
    icon: <Wrench className="h-6 w-6" />,
    features: ["Product design & development (concept → production)", "Value engineering & DFM/DFA (cost & weight reduction)", "Product lifecycle management (PLM)"],
  },
  {
    title: "CAE, FEA & CFD",
    description: "Simulation-led validation and optimization",
    icon: <Loader2 className="h-6 w-6" />,
    features: ["Structural FEA (static, fatigue, durability)", "Thermal & fluid flow analysis (CFD)", "Crash, impact & NVH simulations", "Mold flow, casting & multiphysics studies"],
  },
  {
    title: "Prototyping & Manufacturing Support",
    description: "Rapid prototyping, validation and low-volume production",
    icon: <Factory className="h-6 w-6" />,
    features: ["3D printing, CNC machining & functional prototypes", "Concept validation & iterative design testing", "Material selection & prototype testing"],
  },
  {
    title: "Hydraulic Engineering",
    description: "Design, modeling and retrofit for hydraulic systems",
    icon: <Droplets className="h-6 w-6" />,
    features: ["Hydraulic circuit design & simulation", "Component selection (pumps, valves, actuators)", "System testing, retrofitting & performance optimization"],
  },
  {
    title: "Electrical & Embedded Systems",
    description: "Electronics, control panels and embedded product development",
    icon: <Zap className="h-6 w-6" />,
    features: ["Circuit design, PCB design & harness routing", "Control panel & system integration testing", "Microcontroller programming, BSP & RTOS work", "Vehicle telematics, IoT & BMS integration"],
  },
  {
    title: "Asset Management & Reliability",
    description: "Strategies and engineering for asset performance and lifecycle",
    icon: <Cog className="h-6 w-6" />,
    features: ["Predictive & preventive maintenance strategies", "Performance monitoring & analytics", "Spare parts optimization & lifecycle costing", "EAM system implementation support"],
  },
  {
    title: "Supply Chain, Sourcing & Procurement",
    description: "Procurement planning, supplier evaluation and logistics design",
    icon: <Box className="h-6 w-6" />,
    features: ["Supplier sourcing, RFx preparation & evaluation", "Should-costing & cost estimation", "Inventory optimization & demand forecasting"],
  },
  {
    title: "Embedded AI, IoT & Cybersecurity",
    description: "Connected product development with secure embedded systems",
    icon: <Smartphone className="h-6 w-6" />,
    features: ["IoT device integration & telematics", "AI/ML model embedding for edge devices", "Cyber security hardening for embedded systems", "Prototype to production firmware pipelines"],
  },
  {
    title: "Technical Publications & Training",
    description: "Comprehensive documentation and training deliverables",
    icon: <FileText className="h-6 w-6" />,
    features: ["User manuals, maintenance & service manuals", "Illustrated parts catalogs (IPC) & IETMs", "SOPs, regulatory documentation & compliance manuals"],
  },
  {
    title: "Testing, Validation & Failure Analysis",
    description: "Full test programs and root-cause investigations",
    icon: <GitBranch className="h-6 w-6" />,
    features: ["Functional & performance validation", "Failure analysis & root cause determination", "NVH, fatigue and durability test plans", "Design iteration based on test results"],
  },
];

//  ServiceCard ──

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="flex-shrink-0 w-80 rounded-xl border border-[#e8eaed] dark:border-[#1e1e2e] bg-white dark:bg-[#0d0d14] p-6 mx-3 group hover:border-[#0098AF]/30 transition-colors duration-200 relative overflow-hidden">
    {/* Icon */}
    <div className="w-10 h-10 rounded-full bg-[#0098AF]/10 flex items-center justify-center mb-4 group-hover:bg-[#0098AF] transition-colors duration-200 flex-shrink-0">
      <span className="text-[#0098AF] group-hover:text-white transition-colors duration-200">
        {service.icon}
      </span>
    </div>

    <h3 className="text-[15px] font-semibold text-[#003C46] dark:text-white mb-1 font-display group-hover:text-[#0098AF] transition-colors duration-200 leading-snug">
      {service.title}
    </h3>
    <p className="text-[12px] text-[#778899] dark:text-[#6677aa] mb-4 leading-relaxed">
      {service.description}
    </p>

    <ul className="space-y-1.5">
      {service.features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-2 text-[12px] text-[#556677] dark:text-[#8899aa] leading-relaxed">
          <span className="w-1 h-1 rounded-full bg-[#0098AF] mt-1.5 flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>

    {/* Bottom accent */}
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
  </div>
);

//  ServiceSlider 

const ServiceSlider = ({
  title, description, services, direction,
}: {
  title: string; description: string; services: Service[]; direction: "left" | "right";
}) => {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardWidth = 332; // 80 * 4 (w-80) + mx-3*2
  const singleSetWidth = services.length * cardWidth;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const run = async () => {
      const from = direction === "left" ? 0 : -singleSetWidth;
      const to   = direction === "left" ? -singleSetWidth : 0;
      while (!isHovered) {
        await controls.start({ x: to, transition: { duration: services.length * 3.2, ease: "linear" } });
        controls.set({ x: from });
      }
    };
    if (!isHovered) run();
    else controls.stop();
    return () => controls.stop();
  });

  return (
    <div className="space-y-7">
      <div>
        <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-2">{title}</p>
        <p className="text-[14px] text-[#778899] dark:text-[#6677aa] max-w-2xl leading-relaxed">{description}</p>
      </div>
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex md:cursor-grab md:active:cursor-grabbing"
          animate={controls}
          drag={isMobile ? "x" : false}
          dragConstraints={{ left: -singleSetWidth, right: 0 }}
          initial={{ x: direction === "left" ? 0 : -singleSetWidth }}
          style={{ width: `${singleSetWidth * 2}px` }}
        >
          {[...services, ...services].map((service, index) => (
            <ServiceCard key={`${service.title}-${index}`} service={service} />
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-10 bg-gradient-to-r from-white dark:from-[#0a0a0f] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none z-10 bg-gradient-to-l from-white dark:from-[#0a0a0f] to-transparent" />
      </div>
    </div>
  );
};

//  ServicesSlider (exported) 

export const ServicesSlider = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
            Services Portfolio
          </p>
          <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white font-display leading-tight mb-3">
            Our engineering{" "}
            <em className="not-italic text-[#0098AF]">services.</em>
          </h2>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-xl leading-relaxed">
            Comprehensive engineering solutions spanning plant infrastructure and product development.
          </p>
        </motion.div>

        <div className="space-y-14">
          <ServiceSlider
            title="Plant Engineering Services"
            direction="left"
            description="Optimizing industrial facilities with expertise in process design, automation, electrical infrastructure, mechanical systems, and safety compliance."
            services={plantServices}
          />
          <ServiceSlider
            title="Product Engineering Services"
            direction="right"
            description="Transforming ideas into market-ready products through innovative mechanical design, advanced analysis, electrical engineering, and prototyping."
            services={productServices}
          />
        </div>
      </div>
    </section>
  );
};