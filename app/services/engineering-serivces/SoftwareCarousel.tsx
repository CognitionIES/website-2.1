"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

// ─── Logo imports (unchanged) ──────────────────────────────────────────────────
import AI_logo from "@/constants/images/software-logo/AI_logo.jpg";
import altairHyperWorks_logo from "@/constants/images/software-logo/altairHyperWorks_logo.jpg";
import AltiumDesigner_logo from "@/constants/images/software-logo/AltiumDesigner_logo.jpg";
import anasPreProcessor_logo from "@/constants/images/software-logo/ansaPreProcessor_logo.png";
import Ansys_logo from "@/constants/images/software-logo/Ansys_logo.png";
import ansysFluent_logo from "@/constants/images/software-logo/ansysFluent_logo.png";
import arena_logo from "@/constants/images/software-logo/arena_logo.png";
import assetPanda_logo from "@/constants/images/software-logo/assetPanda_logo.png";
import AutoCad_Logo from "@/constants/images/software-logo/AutoCad_Logo.png";
import AutodeskEagle_logo from "@/constants/images/software-logo/AutodeskEagle_logo.jpg";
import AutodeskElc_logo from "@/constants/images/software-logo/AutodeskElc_logo.jpg";
import autoDeskInventor_logo from "@/constants/images/software-logo/autoDeskInventor_logoo.png";
import autodeskMec_logo from "@/constants/images/software-logo/autodeskMec_logo.png";
import automationStudio_logo from "@/constants/images/software-logo/automationStudio_logo.png";
import comsolMultiphysics_logo from "@/constants/images/software-logo/comsolMultiphysics_logo.jpg";
import corelDraw_LOGO from "@/constants/images/software-logo/corelDraw_LOGO.png";
import Creo_logo from "@/constants/images/software-logo/Creo_logo.png";
import DesignX_logo from "@/constants/images/software-logo/DesignX_logo.png";
import DSCatia_logo from "@/constants/images/software-logo/DSCatia_logo.png";
import DSSolidWorks_logo from "@/constants/images/software-logo/DSSolidWorks_logo.jpg";
import Enovia_logo from "@/constants/images/software-logo/Enovia_logo.jpg";
import eplan_logo from "@/constants/images/software-logo/eplan_logo.png";
import festoFluidSIM_logo from "@/constants/images/software-logo/festoFluidSIM_logo.png";
import figma_logo from "@/constants/images/software-logo/figma_logo.png";
import FM_logo from "@/constants/images/software-logo/FM_logo.png";
import formLabs_logo from "@/constants/images/software-logo/formLabs_logo.png";
import freeRTOS_logo from "@/constants/images/software-logo/freeRTOS_logo.png";
import HyDraw_Cad from "@/constants/images/software-logo/HyDraw_Cad.png";
import hydroSYM_logo from "@/constants/images/software-logo/hydroSYM_logo.png";
import ID_logo from "@/constants/images/software-logo/ID_logo.png";
import infor_logo from "@/constants/images/software-logo/infor_logo.png";
import inforEAM_logo from "@/constants/images/software-logo/inforEAM_logo.jpg";
import jda_logo from "@/constants/images/software-logo/jda_logo.png";
import jtag_logo from "@/constants/images/software-logo/jtag_logo.png";
import keil_logo from "@/constants/images/software-logo/keil_logo.png";
import keyShot_logo from "@/constants/images/software-logo/keyShot_logo.jpg";
import KiCad_logo from "@/constants/images/software-logo/KiCad_logo.png";
import lauterbachD_Logo from "@/constants/images/software-logo/lauterbachD_Logo.png";
import madcapFlare_logo from "@/constants/images/software-logo/madcapFlare_logo.png";
import masterCam_logo from "@/constants/images/software-logo/masterCam_logo.png";
import maximo_logo from "@/constants/images/software-logo/maximo_logo.png";
import opistruct_logo from "@/constants/images/software-logo/opistruct_logo.png";
import oracleNestuite_logo from "@/constants/images/software-logo/oracleNestitute_logo.png";
import orCad_logo from "@/constants/images/software-logo/orCad_logo.png";
import photoshop_logo from "@/constants/images/software-logo/photoshop_logo.png";
import powerBI_logo from "@/constants/images/software-logo/powerBI_logo.png";
import qlick_logo from "@/constants/images/software-logo/qlick_logo.png";
import qnx_logo from "@/constants/images/software-logo/qnx_logo.png";
import rh_logo from "@/constants/images/software-logo/rh_logo.png";
import sap_logo from "@/constants/images/software-logo/sap_logo.jpg";
import sapAnalyticsCloud_logo from "@/constants/images/software-logo/sapAnalyticsCloud_logo.png";
import sapEAM_logo from "@/constants/images/software-logo/sapEAM_logo.jpg";
import SiemensNX_logo from "@/constants/images/software-logo/SiemensNX_logo.png";
import simbuliaAbaqus_logo from "@/constants/images/software-logo/simbulaAbaqus_logo.png";
import simplify3d_logo from "@/constants/images/software-logo/simplify3d_logo.png";
import smartCAM_logo from "@/constants/images/software-logo/smartCAM_logo.png";
import SolidEdge_logo from "@/constants/images/software-logo/SolidEdge_logo.jpg";
import star_ccm_logo from "@/constants/images/software-logo/star-cmm_logo.jpg";
import stm32CubeID_logo from "@/constants/images/software-logo/stm32CubeID_logo.jpg";
import tableau_logo from "@/constants/images/software-logo/tableau_logo.png";
import TeamCenter_logo from "@/constants/images/software-logo/TeamCenter_logo.jpg";
import UltiMakerCura_logo from "@/constants/images/software-logo/UltiMakerCura_logo.png";
import vxWorks_logo from "@/constants/images/software-logo/vxWorks_logo.png";
import windchill_logo from "@/constants/images/software-logo/windchill_logo.png";

const softwareLogos = [
  { name: "Adobe Illustrator", logo: AI_logo },
  { name: "Altair HyperWorks", logo: altairHyperWorks_logo },
  { name: "Altium Designer", logo: AltiumDesigner_logo },
  { name: "Ansa PreProcessor", logo: anasPreProcessor_logo },
  { name: "Ansys", logo: Ansys_logo },
  { name: "Ansys Fluent", logo: ansysFluent_logo },
  { name: "Arena", logo: arena_logo },
  { name: "Asset Panda", logo: assetPanda_logo },
  { name: "AutoCAD", logo: AutoCad_Logo },
  { name: "Autodesk Eagle", logo: AutodeskEagle_logo },
  { name: "Autodesk Electrical", logo: AutodeskElc_logo },
  { name: "Inventor", logo: autoDeskInventor_logo },
  { name: "Autodesk Mechanical", logo: autodeskMec_logo },
  { name: "Automation Studio", logo: automationStudio_logo },
  { name: "COMSOL", logo: comsolMultiphysics_logo },
  { name: "CorelDraw", logo: corelDraw_LOGO },
  { name: "Creo", logo: Creo_logo },
  { name: "DesignX", logo: DesignX_logo },
  { name: "CATIA", logo: DSCatia_logo },
  { name: "SolidWorks", logo: DSSolidWorks_logo },
  { name: "Enovia", logo: Enovia_logo },
  { name: "EPLAN", logo: eplan_logo },
  { name: "Festo FluidSIM", logo: festoFluidSIM_logo },
  { name: "Figma", logo: figma_logo },
  { name: "FrameMaker", logo: FM_logo },
  { name: "FormLabs", logo: formLabs_logo },
  { name: "FreeRTOS", logo: freeRTOS_logo },
  { name: "HyDraw CAD", logo: HyDraw_Cad },
  { name: "HydroSYM", logo: hydroSYM_logo },
  { name: "InDesign", logo: ID_logo },
  { name: "Infor", logo: infor_logo },
  { name: "Infor EAM", logo: inforEAM_logo },
  { name: "JDA", logo: jda_logo },
  { name: "JTAG", logo: jtag_logo },
  { name: "Keil", logo: keil_logo },
  { name: "KeyShot", logo: keyShot_logo },
  { name: "KiCad", logo: KiCad_logo },
  { name: "Lauterbach Debugger", logo: lauterbachD_Logo },
  { name: "Madcap Flare", logo: madcapFlare_logo },
  { name: "MasterCAM", logo: masterCam_logo },
  { name: "Maximo", logo: maximo_logo },
  { name: "OptiStruct", logo: opistruct_logo },
  { name: "Oracle Netsuite", logo: oracleNestuite_logo },
  { name: "OrCAD", logo: orCad_logo },
  { name: "Photoshop", logo: photoshop_logo },
  { name: "Power BI", logo: powerBI_logo },
  { name: "Qlik", logo: qlick_logo },
  { name: "QNX", logo: qnx_logo },
  { name: "Rhapsody", logo: rh_logo },
  { name: "SAP", logo: sap_logo },
  { name: "SAP Analytics Cloud", logo: sapAnalyticsCloud_logo },
  { name: "SAP EAM", logo: sapEAM_logo },
  { name: "Siemens NX", logo: SiemensNX_logo },
  { name: "Simulia Abaqus", logo: simbuliaAbaqus_logo },
  { name: "Simplify3D", logo: simplify3d_logo },
  { name: "SmartCAM", logo: smartCAM_logo },
  { name: "Solid Edge", logo: SolidEdge_logo },
  { name: "Star CCM", logo: star_ccm_logo },
  { name: "STM32 CubeID", logo: stm32CubeID_logo },
  { name: "Tableau", logo: tableau_logo },
  { name: "TeamCenter", logo: TeamCenter_logo },
  { name: "Ultimaker Cura", logo: UltiMakerCura_logo },
  { name: "VxWorks", logo: vxWorks_logo },
  { name: "Windchill", logo: windchill_logo },
];

// ─── LogoCard ─────────────────────────────────────────────────────────────────

const LogoCard = ({ software }: { software: { name: string; logo: StaticImageData } }) => (
  <div className="flex-shrink-0 bg-white dark:bg-[#0d0d14] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-xl p-4 mx-2.5 hover:border-[#0098AF]/30 transition-colors duration-200 group">
    <div className="flex flex-col items-center gap-2.5 min-w-[100px]">
      <div className="w-12 h-12 flex items-center justify-center">
        <Image
          src={software.logo}
          alt={`${software.name} logo`}
          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-200 opacity-70 group-hover:opacity-100"
        />
      </div>
      <p className="text-[11px] font-medium text-center text-[#778899] dark:text-[#6677aa] group-hover:text-[#003C46] dark:group-hover:text-white transition-colors duration-200 leading-tight">
        {software.name}
      </p>
    </div>
  </div>
);

// ─── SoftwareCarousel (exported) ──────────────────────────────────────────────

export const SoftwareCarousel = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  // Split into two rows
  const midpoint = Math.ceil(softwareLogos.length / 2);
  const row1 = softwareLogos.slice(0, midpoint);
  const row2 = softwareLogos.slice(midpoint);

  const cardWidth = 140; // min-w 100 + 2*px-4 + 2*mx-2.5
  const row1Width = row1.length * cardWidth;
  const row2Width = row2.length * cardWidth;

  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (!isHovered) {
      controls1.start({ x: [0, -row1Width], transition: { duration: row1.length * 1.8, repeat: Infinity, ease: "linear", repeatType: "loop" } });
      controls2.start({ x: [-row2Width, 0], transition: { duration: row2.length * 1.8, repeat: Infinity, ease: "linear", repeatType: "loop" } });
    } else {
      controls1.stop();
      controls2.stop();
    }
  }, [isHovered]);

  const child = {
    hidden: { opacity: 0, y: 18 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white dark:bg-[#0a0a0f] relative overflow-hidden">

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#003C46 1px, transparent 1px), linear-gradient(90deg, #003C46 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.p custom={0} variants={child} initial="hidden" animate={isInView ? "visible" : "hidden"}
          className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
          Tools & Software
        </motion.p>
        <motion.h2 custom={1} variants={child} initial="hidden" animate={isInView ? "visible" : "hidden"}
          className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white font-display leading-tight mb-3">
          Advanced software{" "}
          <em className="not-italic text-[#0098AF]">&amp; tools.</em>
        </motion.h2>
        <motion.p custom={2} variants={child} initial="hidden" animate={isInView ? "visible" : "hidden"}
          className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-xl leading-relaxed">
          We leverage industry-leading software and cutting-edge tools to deliver exceptional engineering solutions.
        </motion.p>
      </div>

      {/* Two-row marquee */}
      <div
        className="space-y-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Row 1 — left to right */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#0a0a0f] to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#0a0a0f] to-transparent pointer-events-none z-10" />
          <motion.div className="flex" animate={controls1} style={{ width: `${row1Width * 2}px` }}>
            {[...row1, ...row1].map((s, i) => <LogoCard key={`r1-${s.name}-${i}`} software={s} />)}
          </motion.div>
        </div>

        {/* Row 2 — right to left */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#0a0a0f] to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#0a0a0f] to-transparent pointer-events-none z-10" />
          <motion.div className="flex" animate={controls2} style={{ width: `${row2Width * 2}px` }}>
            {[...row2, ...row2].map((s, i) => <LogoCard key={`r2-${s.name}-${i}`} software={s} />)}
          </motion.div>
        </div>
      </div>
    </section>
  );
};