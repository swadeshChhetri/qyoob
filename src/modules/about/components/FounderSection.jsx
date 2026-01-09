import React from "react";
import { motion } from "framer-motion";
import Section from "../../../components/layout/Section";
import MaxWrapper from "../../../components/layout/MaxWrapper";

export default function FounderSection() {
  return (
    <Section className="bg-black relative">
      <MaxWrapper>
        {/* ---------- TITLE ---------- */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold text-white">
            Founder
          </h2>
        </div>

        {/* ---------- CONTENT ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-8 md:gap-12 items-stretch">

            {/* ---------- IMAGE ---------- */}
            <div className="relative overflow-hidden rounded-xl h-full">
              <img
                src="/image/founder.jpg"
                alt="Founder portrait"
                className="w-full h-full object-cover grayscale"
                loading="lazy"
              />

              {/* subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* ---------- TEXT ---------- */}
            <div className="space-y-5 text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
              <p>
                With over 15 years of industry experience, our founder has led
                the design and delivery of advanced analytical and predictive
                systems across a wide range of sectors.
              </p>

              <p>
                In the Property and Casualty industry, this included building
                vision-based systems and natural language processing models to
                automate property assessments and predict home-related outcomes.
                Across Automotive, Payroll &amp; HR, Financial Services,
                Telecommunications, Music, and Retail, the work focused on
                developing predictive models, advanced computer vision
                solutions, and automation systems that improved accuracy,
                efficiency, and operational decision-making.
              </p>

              <p>
                This breadth of experience shapes how we approach AI today:
                focusing on solutions that are technically sound, operationally
                practical, and aligned with real business impact.
              </p>
            </div>
          </div>
        </motion.div>
      </MaxWrapper>
    </Section>
  );
}
