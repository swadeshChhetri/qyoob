import React from "react";
import { motion } from "framer-motion";
import Section from "../../../components/layout/Section";
import MaxWrapper from "../../../components/layout/MaxWrapper";

export default function AboutUsSection() {
  return (
    <Section className="bg-black relative">
      <MaxWrapper className="flex flex-col items-center text-center space-y-8">
        {/* ---------- HEADING ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-7xl font-semibold text-white"
        >
          About Us
        </motion.h2>

        {/* ---------- DESCRIPTION ---------- */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl"
        >
          We build practical, scalable AI solutions that help organizations
          solve complex problems, operate more efficiently, and unlock new
          opportunities through data-driven intelligence.
        </motion.p>

        {/* ---------- IMAGE ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="w-[90%] max-w-5xl mt-10 mx-auto"
        >
          <div className="relative h-[220px] sm:h-[260px] md:h-[570px] overflow-hidden rounded-2xl border border-white/10">
            <img
              src="/image/team.jpg"
              alt="Our team"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </MaxWrapper>
    </Section>
  );
}
