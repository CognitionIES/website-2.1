"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FiMail, FiMapPin } from "react-icons/fi";
import { useState, useCallback, useRef, useEffect } from "react";
import { CONTACT_CONSTANTS } from "@/constants/contactPage/constants";
import Link from "next/link";
import { Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", phone: "",
    subject: "", interestedIn: "", message: "", consent: false,
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  const { TITLE, DESCRIPTION, EMAIL } = CONTACT_CONSTANTS.CONTACT;

  // Once-only intersection
  useEffect(() => {
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.15 }
    );
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  const handleInputChange = useCallback((field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setStatus("");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: "aba4ac86-a28e-496a-86bb-e3c981356299", ...formData }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", company: "", phone: "", subject: "", interestedIn: "", message: "", consent: false });
      } else {
        setStatus("Oops! Something went wrong.");
      }
    } catch {
      setStatus("Error submitting form.");
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, isSubmitting]);

  const interestOptions = [
    { value: "Recruitment And Resourcing", label: "Recruitment & Resourcing" },
    { value: "Engineering Services", label: "Engineering Services" },
    { value: "ServiceCPQ", label: "ServiceCPQ" },
    { value: "Others", label: "Others" },
  ];

  const fieldClass = "h-11 text-[15px] bg-[#f7f8fa] dark:bg-[#13131a] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-lg text-[#003C46] dark:text-white placeholder:text-[#aabbcc] focus-visible:ring-1 focus-visible:ring-[#0098AF]/40 focus-visible:border-[#0098AF] transition-colors";

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-white dark:bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#003C46 1px, transparent 1px), linear-gradient(90deg, #003C46 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
            Contact
          </p>
          <h2
            className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white leading-tight mb-4"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            {TITLE}
          </h2>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-lg leading-relaxed">
            {DESCRIPTION}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4 order-2 lg:order-1">

            {/* Email card */}
            <div className="bg-[#f7f8fa] dark:bg-[#0d0d14] rounded-xl border border-[#e8eaed] dark:border-[#1e1e2e] overflow-hidden">
              <div className="px-5 py-3.5 border-b border-[#e8eaed] dark:border-[#1e1e2e] flex items-center gap-2">
                <FiMail className="w-4 h-4 text-[#0098AF]" />
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#aabbcc]">Contact Us</p>
              </div>
              <div className="p-5">
                <p className="text-[13px] text-[#778899] dark:text-[#6677aa] mb-1">{EMAIL.TITLE}</p>
                <Link href={`mailto:${EMAIL.ADDRESS}`} className="text-[14px] font-medium text-[#0098AF] hover:underline break-all">
                  {EMAIL.ADDRESS}
                </Link>
              </div>
            </div>

            {/* Locations card */}
            <div className="bg-[#f7f8fa] dark:bg-[#0d0d14] rounded-xl border border-[#e8eaed] dark:border-[#1e1e2e] overflow-hidden">
              <div className="px-5 py-3.5 border-b border-[#e8eaed] dark:border-[#1e1e2e] flex items-center gap-2">
                <FiMapPin className="w-4 h-4 text-[#0098AF]" />
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#aabbcc]">Our Locations</p>
              </div>
              <div className="divide-y divide-[#e8eaed] dark:divide-[#1e1e2e]">
                <div className="p-5">
                  <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#0098AF] mb-1">Headquarters</p>
                  <p className="text-[14px] font-medium text-[#003C46] dark:text-white mb-0.5">Vadodara, India – 390007</p>
                  <p className="text-[13px] text-[#778899] dark:text-[#6677aa]">1st floor Kplex, Genda Circle, Vadodara, Gujarat</p>
                </div>
                <div className="p-5">
                  <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#0098AF] mb-1">Branch Office</p>
                  <p className="text-[14px] font-medium text-[#003C46] dark:text-white">Mid West, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white dark:bg-[#0d0d14] rounded-xl border border-[#e8eaed] dark:border-[#1e1e2e] p-6 lg:p-8">
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-2">Send a message</p>
              <h3
                className="text-2xl font-bold text-[#003C46] dark:text-white mb-6"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                Get in touch.
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Full Name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required disabled={isSubmitting} className={fieldClass} />
                  <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required disabled={isSubmitting} className={fieldClass} />
                  <Input placeholder="Company Name" value={formData.company} onChange={(e) => handleInputChange("company", e.target.value)} required disabled={isSubmitting} className={fieldClass} />
                  <Input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required disabled={isSubmitting} className={fieldClass} />
                </div>

                <Input placeholder="Subject" value={formData.subject} onChange={(e) => handleInputChange("subject", e.target.value)} required disabled={isSubmitting} className={fieldClass} />

                <Select value={formData.interestedIn} onValueChange={(v) => handleInputChange("interestedIn", v)} disabled={isSubmitting}>
                  <SelectTrigger className={`${fieldClass} w-full`}>
                    <SelectValue placeholder="Interested In" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-[#13131a] border-[#e8eaed] dark:border-[#1e1e2e]">
                    {interestOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required disabled={isSubmitting}
                  className={`${fieldClass} h-28 resize-none`}
                />

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent-contact"
                    checked={formData.consent}
                    onCheckedChange={(c) => handleInputChange("consent", !!c)}
                    disabled={isSubmitting}
                    className="mt-0.5 border-[#e8eaed] data-[state=checked]:bg-[#0098AF] data-[state=checked]:border-[#0098AF]"
                  />
                  <label htmlFor="consent-contact" className="text-[13px] text-[#778899] dark:text-[#6677aa] leading-relaxed cursor-pointer">
                    I agree to receive further communication. See our{" "}
                    <Link href="/privacy-policy" className="text-[#0098AF] hover:underline font-medium">Privacy Policy</Link>.
                  </label>
                </div>

                {status && (
                  <p className={`text-[13px] font-medium text-center ${status.includes("Error") || status.includes("Oops") ? "text-red-500" : "text-emerald-600"}`}>
                    {status}
                  </p>
                )}

                <div className="h-px bg-[#e8eaed] dark:bg-[#1e1e2e]" />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-[15px] font-semibold bg-[#0098AF] hover:bg-[#007B8F] text-white rounded-lg transition-colors duration-200 disabled:opacity-40"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}