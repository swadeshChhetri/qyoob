import React from "react";
import { ArrowRight } from "lucide-react";
import Section from "../../../components/layout/Section";
import MaxWrapper from "../../../components/layout/MaxWrapper";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function CallToActionSection() {
  return (
    <Section className="bg-black relative">
      <MaxWrapper className="flex flex-col items-center text-center space-y-10">
        {/* ---------- HEADLINE ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white max-w-5xl"
        >
          Ready to transform your organization with AI?
        </motion.h2>

        {/* ---------- CTA BUTTON ---------- */}
        <MotionLink
          to="/contact"
          className="
        inline-flex items-center gap-3
        rounded-xl
        bg-lime-400
        px-7 py-3
        text-black font-medium
        hover:bg-lime-500
        focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400
      "
          whileHover="hover"
          whileFocus="hover"
        >
          <span>Get in Touch</span>

          {/* Arrow animation */}
          <motion.span
            variants={{
              hover: { x: 6 },
            }}
            transition={{
              duration: 0.15,
              ease: "easeOut",
            }}
          >
            <ArrowRight size={18} />
          </motion.span>
        </MotionLink>
      </MaxWrapper>
    </Section>
  );
}
