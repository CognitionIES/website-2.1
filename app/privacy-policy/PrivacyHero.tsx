// components/PrivacyHero.tsx
"use client";
import { motion } from "framer-motion";

export const PrivacyHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-[#003C46] mb-4">
        Privacy Policy
      </h1>

      <p className="text-xl text-gray-600">
        Your privacy is important to us. This policy explains how we collect,
        use, and protect your information.
      </p>
    </motion.div>
  );
};