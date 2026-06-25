import { StaticImageData } from "next/image";
import saasImage from "@/constants/images/home/hero/saas.webp";
import recruitmentImage from "@/constants/images/home/hero/recruit.webp";
import saas2 from "@/constants/images/home/hero/saas-mobile.webp";
import recruit2 from "@/constants/images/home/hero/recruit-mobile.webp";
import buildImage from "@/constants/images/build-operate/hero.webp";

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  majorService: string;
  description: string;
  image: string | StaticImageData;
  mobileImage: string | StaticImageData;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Empowering Teams, Elevating Success",
    subtitle: "The Right People for the Right Roles",
    majorService: "Recruitment & Resourcing ",
    description:
      "We connect exceptional talent with forward-thinking businesses, delivering tailored recruitment & staffing solutions that build strong, high-performing teams.",
    image: recruitmentImage,
    mobileImage: recruit2,
  },
  {
    id: 2,
    title: "Engineering Solutions ",
    subtitle: "End-to-End Solutions for Sustainable Growth",
    majorService: "Engineering Solutions",
    description:
      "From concept to daily operations, we design, build, & manage robust technology platforms & infrastructure that drive reliability, scalability, & long-term value.",
    image: buildImage,
    mobileImage: buildImage,
  },
  {
    id: 3,
    title: "Accelerate Growth with Smart SaaS",
    subtitle: "Scalable Software for a Digital Future",
    majorService: "SaaS Solutions",
    description:
      "We deliver secure, cloud-based applications that streamline processes, improve efficiency, and empower your business to thrive in a rapidly evolving digital landscape.",
    image: saasImage,
    mobileImage: saas2,
  },
];