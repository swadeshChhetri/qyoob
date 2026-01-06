import React from "react";
import { motion } from "framer-motion";
import HeroSectionVideo from "./MainVideo";
import { Link } from "react-router-dom";
// import MaxWrapper from "../../layout/MaxWrapper";
import Section from "../../../components/layout/Section";
import MaxWrapper from "../../../components/layout/MaxWrapper";

export default function HeroSection() {
  return (
    <Section className="relative overflow-hidden">
      {/* ---------- TOP TEXT ---------- */}
      <MaxWrapper className="flex flex-col items-center text-center space-y-6">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight"
        >
          Agentic AI for the Enterprise
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="text-gray-400 text-base sm:text-lg  max-w-4xl md:text-xl leading-relaxed lg:text-xl mx-auto"

           
        >
          Build AI agents that automate complex work, search across all your company data, and connect to the tools your teams already use-running securely on your systems.
        </motion.p>
      </MaxWrapper>

      {/* ---------- VIDEO ---------- */}
      <HeroSectionVideo />
    </Section>
  );
}
