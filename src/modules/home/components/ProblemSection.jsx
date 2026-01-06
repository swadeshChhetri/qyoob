import React from "react";
import { motion } from "framer-motion";
import HeroSectionVideo from "./MainVideo";
import Section from "../../../components/layout/Section";
import MaxWrapper from "../../../components/layout/MaxWrapper";

export default function ProblemSection() {
  return (
    <Section className="relative overflow-hidden">
      {/* ---------- TOP TEXT ---------- */}
      <MaxWrapper className="flex flex-col items-center text-center space-y-6">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-4xl md:text-5xl font-semibold text-white"
        >
          
          Your teams are buried in busywork.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="text-gray-400 sm:text-lg max-w-4xl md:text-xl leading-relaxed lg:text-xl"
        >
          Information lives in dozens of systems. Simple requests bounce between departments. Critical tasks stall waiting for the right person to respond. Your people spend more time coordinating than doing actual work.
        </motion.p>
      </MaxWrapper>
    </Section>
  );
}
