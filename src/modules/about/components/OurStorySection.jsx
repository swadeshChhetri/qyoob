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
        {/* ---------- TIMELINE (Dashboard Style – Fixed) ---------- */}
        <div className="relative max-w-6xl mx-auto py-24">
          {/* Center spine */}
          <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white/10 -translate-x-1/2" />

          <div className="flex flex-col gap-24">
            {storyTimeline.map((item, idx) => {
              const Icon = iconMap[item.icon];
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: idx * 0.05,
                  }}
                  className={`relative flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`
              relative
              w-full md:w-[48%]
              bg-black
              border border-white/10
              rounded-xl
              px-6 py-5
            `}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-md bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400">
                          <Icon size={20} />
                        </div>

                        <h4 className="text-white text-lg font-semibold leading-snug">
                          {item.title}
                        </h4>
                      </div>

                      {/* Date */}
                      <span className="text-md font-medium text-gray-400">
                        {item.year}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-md leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Connector dot */}
                  <span
                    className={`
              absolute
              left-1/2
              w-3.5 h-3.5
              bg-lime-400
              rounded-full
              -translate-x-1/2
            `}
                    style={{
                      top: "32px",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </MaxWrapper>
    </Section>
  );
}
