"use client";

import dynamic from "next/dynamic";

const TestimonialSlider = dynamic(
  () => import("@/components/HomePage/Testimonials"),
  { ssr: false },
);
const Careers = dynamic(() => import("@/components/HomePage/Careers"), {
  ssr: false,
});

export default function HomeClientSections() {
  return (
    <>
      <TestimonialSlider />
      <Careers />
    </>
  );
}
