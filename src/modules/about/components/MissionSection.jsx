import React from "react";
import { motion } from "framer-motion";
import Section from "../../../components/layout/Section";
import MaxWrapper from "../../../components/layout/MaxWrapper";

export default function MissionSection() {
  return (
    <Section className="bg-black relative">
      <MaxWrapper className="flex flex-col items-center text-center space-y-6">
        {/* ---------- TITLE ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white"
        >
          Mission
        </motion.h2>

        {/* ---------- STATEMENT ---------- */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-300 text-base sm:text-lg md:text-2xl leading-relaxed max-w-5xl"
        >
          Empowering organizations with innovative AI solutions to drive
          collaboration, enhance productivity, and transform business
          operations.
        </motion.p>
      </MaxWrapper>
    </Section>
  );
}
