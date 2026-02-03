"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Briefcase,
  ChevronRight,
  Search,
  Filter,
  Users,
} from "lucide-react";
import Link from "next/link"; // ← Next.js Link (replaces react-router-dom)
import { jobs, getDepartments } from "@/data/jobs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const OpenPositions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const departments = getDepartments();

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "all" || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-[hsl(220_20%_99%)] dark:bg-[hsl(240_80%_4%)] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[hsl(243_85%_38%/0.05)] dark:bg-[hsl(243_85%_65%/0.05)] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-[hsl(260_60%_95%/0.5)] dark:bg-[hsl(260_40%_18%/0.5)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0098AF]/10 text-[#0098AF] text-sm font-medium rounded-full mb-4">
            <Users className="w-4 h-4" />
            Open Positions
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#003C46] dark:text-[hsl(243_50%_18%)] mb-4">
            Find Your <span className="bg-gradient-to-r from-[#0098AF] to-[#007B8F] bg-clip-text text-transparent">Perfect Role</span>
          </h2>
          <p className="text-lg text-[hsl(0_0%_36%)] dark:text-[hsl(220_15%_65%)] max-w-2xl">
            Explore our current openings and take the next step in your career
            journey with us.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-10"
        >
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[hsl(0_0%_36%)] dark:text-[hsl(220_15%_65%)]" />
            <Input
              type="text"
              placeholder="Search positions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 border-[hsl(240_20%_88%)] dark:border-[hsl(240_40%_20%)] bg-[hsl(0_0%_100%)] dark:bg-[hsl(240_60%_8%)] focus-visible:ring-[hsl(243_85%_38%)] dark:focus-visible:ring-[hsl(243_85%_65%)]"
            />
          </div>
          <div className="relative w-full sm:w-56">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[hsl(0_0%_36%)] dark:text-[hsl(220_15%_65%)] z-10" />
            <Select
              value={selectedDepartment}
              onValueChange={setSelectedDepartment}
            >
              <SelectTrigger className="pl-10 h-12 border-[hsl(240_20%_88%)] dark:border-[hsl(240_40%_20%)] bg-[hsl(0_0%_100%)] dark:bg-[hsl(240_60%_8%)] focus:ring-[hsl(243_85%_38%)] dark:focus:ring-[hsl(243_85%_65%)]">
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent className="bg-[hsl(0_0%_100%)] dark:bg-[hsl(240_60%_8%)] border-[hsl(240_20%_88%)] dark:border-[hsl(240_40%_20%)] z-50">
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Job Count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-[hsl(0_0%_36%)] dark:text-[hsl(220_15%_65%)] mb-6"
        >
          Showing {filteredJobs.length} position
          {filteredJobs.length !== 1 ? "s" : ""}
        </motion.p>

        {/* Job Listings */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                layout
                exit={{ opacity: 0, scale: 0.95 }}
                className="group"
              >
                <Link href={`/careers/${job.id}`}>
                  {" "}
                  {/* ← Next.js href (no 'to') */}
                  <div className="job-card bg-[hsl(0_0%_100%)] dark:bg-[hsl(240_60%_8%)] rounded-xl border border-[hsl(240_20%_88%)] dark:border-[hsl(240_40%_20%)] p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[hsl(243_85%_38%/0.3)] dark:hover:border-[hsl(243_85%_65%/0.3)] relative overflow-hidden">
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex-1 relative z-10">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-medium px-2.5 py-1 bg-[#0098AF]/10 text-[#0098AF] rounded-full ">
                          {job.department}
                        </span>
                        <span className="text-xs font-medium px-2.5 py-1 bg-[hsl(220_15%_96%)] dark:bg-[hsl(240_40%_15%)] rounded-full text-[hsl(0_0%_36%)] dark:text-[hsl(220_15%_65%)]">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="font-display text-lg md:text-xl font-semibold text-[#003C46] group-hover:text-[#0098AF] transition-colors duration-300 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[hsl(0_0%_36%)] dark:text-[hsl(220_15%_65%)]">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4" />
                          {job.experience}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 relative z-10">
                      <Button
                        variant="outline"
                        className="border-[#0098AF] text-[#0098AF] hover:bg-[#0098AF] hover:text-[hsl(220_20%_99%)] dark:hover:text-[hsl(240_80%_4%)] group/btn transition-all duration-300"
                      >
                        View Job
                        <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No results */}
        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 bg-[hsl(220_15%_96%)] dark:bg-[hsl(240_40%_15%)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-[hsl(0_0%_36%)] dark:text-[hsl(220_15%_65%)]" />
            </div>
            <h3 className="font-display text-xl font-semibold text-[hsl(240_80%_12%)] dark:text-[hsl(220_20%_95%)] mb-2">
              No positions found
            </h3>
            <p className="text-[hsl(0_0%_36%)] dark:text-[hsl(220_15%_65%)]">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OpenPositions;