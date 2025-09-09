import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

// Import logo images (unchanged)
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

const LogoCard = ({
  software,
  index,
}: {
  software: { name: string; logo: StaticImageData };
  index: number;
}) => {
  return (
    <motion.div
      className="flex-shrink-0 bg-white rounded-2xl p-6 mx-4"
      style={{
        boxShadow: "0 4px 20px -2px hsla(185, 100%, 34%, 0.08)",
        border: "1px solid hsla(186, 67%, 85%, 0.5)",
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0 20px 60px -10px hsla(185, 100%, 34%, 0.25)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex flex-col items-center space-y-3 min-w-[120px]">
        <Image
          src={software.logo}
          alt={`${software.name} logo`}
          className="w-16 h-16 object-contain"
        />
        <h4
          className="text-sm font-semibold text-center"
          style={{ color: "hsl(184, 31%, 36%)" }}
        >
          {software.name}
        </h4>
      </div>
    </motion.div>
  );
};

export const SoftwareCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  // Calculate the total width of one set of logos (assuming each card is ~160px wide with margins)
  const logoWidth = 60  ; // Approximate width of each card (120px min-w + 2 * 16px padding + 2 * 8px margin)
  const totalWidth = softwareLogos.length * logoWidth;

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: [0, -totalWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: softwareLogos.length * 0.5, // Adjust speed based on number of logos
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls, totalWidth]);

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-16 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, hsl(196, 100%, 98%), hsla(195, 17%, 86%, 0.10), hsla(185, 100%, 28%, 0.05))",
      }}
    >
      {/* Layered background gradients */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsla(180, 8%, 91%, 1.00), hsl(185, 100%, 28%))",
        }}
      />
      <div
        className="absolute top-1/4 left-0 w-1/2 h-1/2 opacity-5 rounded-full blur-3xl"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsl(185, 100%, 34%), hsl(185, 100%, 28%))",
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-1/3 h-1/3 opacity-10 rounded-full blur-2xl"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsl(185, 100%, 28%), hsl(185, 100%, 28%))",
        }}
      />

      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: "hsl(184, 31%, 36%)" }}
          >
            Advanced Software{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(185, 100%, 34%), hsl(185, 100%, 28%))",
              }}
            >
              & Tools
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg max-w-7xl mx-auto"
            style={{ color: "hsl(184, 31%, 36%)" }}
          >
            We leverage industry-leading software and cutting-edge tools to
            deliver exceptional engineering solutions
          </motion.p>
        </div>

        {/* Infinite Scrolling Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex">
            <motion.div className="flex" animate={controls}>
              {[...softwareLogos, ...softwareLogos, ...softwareLogos].map(
                (software, index) => (
                  <LogoCard
                    key={`${software.name}-${index}`}
                    software={software}
                    index={index % softwareLogos.length}
                  />
                )
              )}
            </motion.div>
          </div>

          {/* Gradient Overlays for smooth fade effect */}
          <div
            className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, hsl(196, 100%, 98%), transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10"
            style={{
              backgroundImage:
                "linear-gradient(to left, hsl(196, 100%, 98%), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
};
