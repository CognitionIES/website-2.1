"use client"; 

import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Clock,
  Building,
  CheckCircle2,
  ExternalLink,
  Share2,
  Heart,
} from "lucide-react";
import { getJobById } from "@/data/jobs";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";

interface JobDetailsProps {
  jobId: string; // ← Receive from server prop
}

const JobDetails = ({ jobId }: JobDetailsProps) => {
  const router = useRouter();
  const job = getJobById(jobId);
  const [isSaved, setIsSaved] = useState(false);
const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!job) {
    return (
      <div className="min-h-screen bg-[hsl(220_20%_99%)] dark:bg-[hsl(240_80%_4%)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-[hsl(240_80%_12%)] dark:text-[hsl(243_50%_18%)] mb-4">
            Job Not Found
          </h1>
          <p className="text-[hsl(0_0%_36%)] dark:text-[hsl(220_15%_65%)] mb-6">
            The position you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/careers">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Careers
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    window.open("https://docs.google.com/forms", "_blank");
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${job.title} at Cognition IES`,
          text: job.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(220_20%_99%)] dark:bg-[hsl(240_80%_4%)]">
      {/* Hero Header */}
      <MegaMenu />
      <section className="bg-gradient-to-br from-[#0098af] dark:from-[#0098af] via-[#0098af]/80 dark:via-[#0098af]/80 to-[#0098af]/80 dark:to-[#0098af]/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0098af] dark:from-[#0098af] to-[#0098af]/90 dark:to-[#0098af]/80" />
      
        {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => {
            // On server (or pre-mount): render with safe/default values
            // On client after mount: use real randoms
            const left = mounted ? `${Math.random() * 100}%` : "50%";
            const duration = mounted ? 3 + Math.random() * 2 : 5;
            const delay = mounted ? Math.random() * 3 : 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.2, 0],
                  y: [-20, -100],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  delay,
                }}
                className="absolute w-1 h-1 bg-[hsl(220_20%_99%/0.3)] dark:bg-[hsl(240_80%_4%/0.3)] rounded-full"
                style={{
                  left,
                  bottom: "20%",
                }}
              />
            );
          })}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => router.push("/careers")}
              className="inline-flex items-center gap-2 text-[hsl(220_20%_99%)] dark:text-[hsl(240_80%_4%)]/80 hover:text-[hsl(220_20%_99%)] dark:hover:text-[hsl(240_80%_4%)] transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">Back to all positions</span>
            </button>
          </motion.div>

          {/* Job header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1.5 bg-[hsl(220_20%_99%/0.1)] dark:bg-[hsl(240_80%_4%/0.1)] backdrop-blur-sm border border-[hsl(220_20%_99%/0.2)] dark:border-[hsl(240_80%_4%/0.2)] rounded-full text-[hsl(220_20%_99%)] dark:text-[hsl(240_80%_4%)] text-sm font-medium">
                {job.department}
              </span>
              <span className="px-3 py-1.5 bg-[hsl(220_20%_99%/0.1)] dark:bg-[hsl(240_80%_4%/0.1)] backdrop-blur-sm border border-[hsl(220_20%_99%/0.2)] dark:border-[hsl(240_80%_4%/0.2)] rounded-full text-[hsl(220_20%_99%)] dark:text-[hsl(240_80%_4%)] text-sm font-medium">
                {job.type}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[hsl(220_20%_99%)] dark:text-[hsl(240_80%_4%)] mb-6">
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-[hsl(220_20%_99%)] dark:text-[hsl(240_80%_4%)]/80">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {job.location}
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                {job.experience}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {job.type}
              </span>
              <span className="flex items-center gap-2">
                <Building className="w-5 h-5" />
                {job.department}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 80L48 73.3C96 67 192 53 288 48C384 43 480 47 576 50C672 53 768 57 864 58.3C960 60 1056 58 1152 53.3C1248 48 1344 40 1392 36.7L1440 33V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
              className="fill-[hsl(220_20%_99%)] dark:fill-[hsl(240_80%_4%)]"
            />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="font-display text-2xl font-bold text-[#003C46] mb-4">
                  About This Role
                </h2>
                <p className="text-[hsl(0_0%_36%)] dark:text-[hsl(220_15%_65%)] leading-relaxed text-lg">
                  {job.description}
                </p>
              </motion.div>

              {/* Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="font-display text-2xl font-bold text-[#003C46]  mb-4">
                  Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#0098AF] mt-0.5 flex-shrink-0" />
                      <span className="text-[hsl(0_0%_36%)] dark:text-[hsl(220_15%_65%)]">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="font-display text-2xl font-bold text-[#003C46]  mb-4">
                  Requirements
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#0098AF] mt-0.5 flex-shrink-0" />
                      <span className="text-[hsl(0_0%_36%)] dark:text-[hsl(220_15%_65%)]">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="font-display text-2xl font-bold text-[#003C46]  mb-4">
                  What We Offer
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {job.benefits.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                      className="flex items-center gap-3 bg-[#0098AF]/5  rounded-lg p-4"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#0098AF] flex-shrink-0" />
                      <span className="text-[hsl(240_80%_12%)] dark:text-[hsl(220_20%_95%)] font-medium">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="sticky top-8"
              >
                <div className="bg-[hsl(0_0%_100%)] dark:bg-[hsl(240_60%_8%)] rounded-2xl border border-[hsl(240_20%_88%)] dark:border-[hsl(240_40%_20%)] p-6 shadow-sm">
                  <h3 className="font-display text-lg font-semibold text-[hsl(240_80%_12%)] dark:text-[hsl(220_20%_95%)] mb-4">
                    Interested in this role?
                  </h3>
                  <p className="text-sm text-[hsl(0_0%_36%)] dark:text-[hsl(220_15%_65%)] mb-6">
                    Apply now and take the next step in your career journey with
                    us.
                  </p>

                  <Button
                    onClick={handleApply}
                    className="w-full mb-3 bg-[#0098AF] hover:bg-[#007B8F] text-white  h-12 text-base font-medium"
                  >
                    Apply Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setIsSaved(!isSaved)}
                      className={`flex-1 ${isSaved ? "border-[#0098AF] dark:border-[#0098AF] text-[#0098AF] dark:text-[#0098AF]" : "border-[hsl(240_20%_88%)] dark:border-[hsl(240_40%_20%)]"}`}
                    >
                      <Heart
                        className={`w-4 h-4 mr-2 ${isSaved ? "fill-[#0098AF] dark:fill-[#0098AF]" : ""}`}
                      />
                      {isSaved ? "Saved" : "Save"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleShare}
                      className="flex-1"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[#DFDFEE] dark:border-[hsl(240_40%_20%)]">
                    <h4 className="font-medium text-[hsl(240_80%_12%)] dark:text-[hsl(220_20%_95%)] mb-3">
                      Quick Info
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#5C5C5C]">
                          Department
                        </span>
                        <span className="font-medium text-[#003C46]">
                          {job.department}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#5C5C5C]">Location</span>
                        <span className="font-medium text-[#003C46]">
                          {job.location}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#5C5C5C]">
                          Experience
                        </span>
                        <span className="font-medium text-[#003C46]">
                          {job.experience}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#5C5C5C]">Job Type</span>
                        <span className="font-medium text-[#003C46]">
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobDetails;