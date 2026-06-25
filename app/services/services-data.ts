import { Settings, Factory, Monitor, Award, Users, Target, Zap } from "lucide-react";
import staffImage from "@/constants/images/home/staffing.webp";
import buildImage from "@/constants/images/build-operate/hero.webp";
import saasImage from "@/constants/images/home/our-services/saas.webp";

export const aboutStats = [
  { icon: Award, number: "10+", label: "Years Experience" },
  { icon: Users, number: "200+", label: "Happy Clients" },
  { icon: Target, number: "300+", label: "Projects Completed" },
  { icon: Zap, number: "98%", label: "Success Rate" },
];

export const services = [
  {
    id: "01",
    title: "Recruitment & Resourcing",
    description:
      "Quickly access skilled talent and build high-performing teams. We connect you with experts to drive growth and deliver results.",
    image: staffImage,
    href: "/services/recruitment-resourcing",
    icon: Settings,
  },
  {
    id: "02",
    title: "Engineering Services",
    description:
      "Turn ideas into reality with scalable engineering expertise. From product design to offshore delivery — end-to-end solutions ensuring precision, cost-efficiency, and faster execution.",
    image: buildImage,
    href: "/services/engineering-serivces",
    icon: Factory,
  },
  {
    id: "03",
    title: "SaaS Solutions — ServiceCPQ",
    description:
      "Streamline quoting & delivery with ServiceCPQ, our SaaS platform designed to simplify complex workflows and accelerate your business.",
    image: saasImage,
    href: "/services/saas-solution/servicecpq",
    icon: Monitor,
  },
];
