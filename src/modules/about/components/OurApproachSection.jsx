import React from "react";
import { motion } from "framer-motion";
import Section from "../../../components/layout/Section";
import MaxWrapper from "../../../components/layout/MaxWrapper";

export default function OurApproachSection() {
  return (
    <Section className="bg-black relative">
      <MaxWrapper>
        <div className="flex flex-col items-center">
          
          {/* ---------- HEADING ---------- */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-4xl font-semibold text-white text-center"
          >
            Our Approach
          </motion.h2>

          {/* ---------- CONTENT ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-10 max-w-5xl text-left space-y-6"
          >
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We believe AI should be adaptable, transparent, and purpose-driven.
              Our solutions are designed to integrate into existing workflows,
              scale with organizational needs, and provide measurable value
              without unnecessary complexity.
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Whether supporting enterprise innovation or building AI-native
              products, we focus on delivering systems that work in practice,
              not just in theory.
            </p>
          </motion.div>

        </div>
      </MaxWrapper>
    </Section>
  );
}
