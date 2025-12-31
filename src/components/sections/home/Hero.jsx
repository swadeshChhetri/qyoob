import React from "react";
import { motion } from "framer-motion";
import HeroSectionVideo from "./MainVideo";
import { Link } from "react-router-dom";
import MaxWrapper from "../../layout/MaxWrapper";
import Section from "../../layout/Section";

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
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-5xl"
        >
          Agentic AI for the Enterprise
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed"
        >
          Qyoob empowers enterprises to build and deploy advanced AI agents that
          automate complex, multi-step workflows. With powerful orchestration,
          secure data connectivity, and seamless integrations across enterprise
          tools, Qyoob enables faster decisions, smarter operations, and
          natural, human-like interactions for every team.
        </motion.p>
      </MaxWrapper>

      {/* ---------- VIDEO ---------- */}
      <HeroSectionVideo />
    </Section>
  );
}
