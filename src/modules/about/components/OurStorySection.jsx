import React from "react";
import { motion } from "framer-motion";
import Section from "../../../components/layout/Section";
import MaxWrapper from "../../../components/layout/MaxWrapper";
import { Network, Sparkles, Building2, Brain, Layers, Box } from "lucide-react";

const iconMap = {
  network: Network,
  sparkles: Sparkles,
  building: Building2,
  brain: Brain,
  layers: Layers,
  box: Box,
};

const storyTimeline = [
  {
    year: "2019",
    title: "Foundation",
    description:
      "Started with a vision to innovate in AI and data science, empowering organizations with advanced AI.",
    icon: "network",
  },
  {
    year: "2020 - 2021",
    title: "Product Launch and Custom Model APIs",
    description: "Built APIs for diverse AI needs and solutions.",
    icon: "sparkles",
  },
  {
    year: "2022",
    title: "Foundation Models",
    description:
      "Partnered with enterprises to develop scalable AI models for rapid deployment.",
    icon: "building",
  },
  {
    year: "2023",
    title: "Growth & Partnerships",
    description:
      "Team grew to 50+ people and expanded Fortune 500 collaborations.",
    icon: "brain",
  },
  {
    year: "2023 - 2024",
    title: "Generative AI Solutions",
    description: "Built Generative AI solutions for enterprise and verticals.",
    icon: "layers",
  },
  {
    year: "2025",
    title: "Birth of Qyoob",
    description:
      "Released Qyoob AI Studio to simplify creating, training, and managing AI agents with extensive customization.",
    icon: "box",
  },
];

export default function OurStorySection() {
  return (
    <Section className="bg-black">
      <MaxWrapper>
        {/* ---------- HEADER ---------- */}
        <div className="text-center mb-20 space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Our Story
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Founded in 2019, our journey began with a clear focus: applying
            advanced AI and data science to real-world business challenges. Over
            the years, we evolved from custom analytical systems to
            enterprise-grade AI platforms and generative AI solutions.
          </p>
        </div>

        {/* ---------- TIMELINE ---------- */}
        {/* <div className="relative max-w-5xl mx-auto py-16">
          {/* Center line *
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-lime-400/30 -translate-x-1/2" />

          <div className="flex flex-col gap-24">
            {storyTimeline.map((item, idx) => {
              const Icon = iconMap[item.icon];
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`relative flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Content Card *
                  <div className="w-full md:w-[45%] bg-black border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full border-4 border-lime-400 flex items-center justify-center text-lime-400">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h4 className="text-white font-semibold text-lg">
                          {item.year}
                        </h4>
                        <p className="text-lime-400 text-sm">{item.title}</p>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Center Dot *
                  <span className="absolute left-1/2 top-8 w-4 h-4 bg-lime-400 rounded-full -translate-x-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div> */}
        {/* ---------- MILESTONE GRID ---------- */}
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {storyTimeline.map((item, idx) => {
              const Icon = iconMap[item.icon];

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.05,
                  }}
                  className="
            relative
            bg-black
            border border-white/10
            rounded-2xl
            p-8
            hover:border-lime-400/40
            transition-colors
          "
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className="
              w-14 h-14
              rounded-xl
              border border-lime-400/40
              flex items-center justify-center
              text-lime-400
              bg-lime-400/5
            "
                    >
                      <Icon size={26} />
                    </div>
                  </div>

                  {/* Year */}
                  <h4 className="text-white font-semibold text-lg">
                    {item.year}
                  </h4>

                  {/* Title */}
                  <p className="text-lime-400 text-sm mt-1 font-medium">
                    {item.title}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </MaxWrapper>
    </Section>
  );
}
