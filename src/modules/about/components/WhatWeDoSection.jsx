import React from "react";
import { motion } from "framer-motion";
import Section from "../../../components/layout/Section";
import MaxWrapper from "../../../components/layout/MaxWrapper";
// import { whatWeDoItems } from "./whatWeDoData";

// whatWeDoData.js
const whatWeDoItems = [
  "Design and deploy custom AI and machine learning systems",
  "Build scalable foundation and generative AI models",
  "Enable automation through vision, NLP, and predictive analytics",
  "Support enterprises with flexible, customizable AI platforms",
  "Help teams operationalize AI from experimentation to production",
];


export default function WhatWeDoSection() {
  return (
    <Section className="bg-black relative">
      <MaxWrapper>
        {/* ---------- TITLE ---------- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-white">
            What We Do
          </h2>
        </div>

        {/* ---------- GRID ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {whatWeDoItems.map((text, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="
                relative rounded-xl
                bg-white/5 backdrop-blur-sm
                border border-transparent
                hover:border-lime-400/80
                transition-colors duration-300
                px-6 py-5
              "
            >
              <div className="flex items-start gap-4">
                {/* Bullet */}
                <span className="mt-2 h-2 w-2 rounded-full bg-lime-400 shrink-0" />

                {/* Text */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed md:text-lg">
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </MaxWrapper>
    </Section>
  );
}
