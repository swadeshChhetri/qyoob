import React from "react";
import { motion } from "framer-motion";
import Section from "../../../components/layout/Section";
import MaxWrapper from "../../../components/layout/MaxWrapper";
// import { storyTimeline } from "./storyData";
// import { iconMap } from "./iconMap";
import { ArrowRight } from "lucide-react";
import {
  Network,
  Sparkles,
  Building2,
  Brain,
  Layers,
  // ArrowRight,
} from "lucide-react";

const iconMap = {
  network: Network,
  sparkles: Sparkles,
  building: Building2,
  brain: Brain,
  layers: Layers,
};

// storyData.js
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
];

export default function OurStorySection() {
  return (
    <Section className="bg-black overflow-hidden">
      <MaxWrapper>
        {/* ---------- HEADER ---------- */}
        <div className="text-center mb-16 space-y-6 mx-auto">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold text-white">
            Our Story
          </h2>

          <p className="text-gray-300 max-w-4xl text-lg mx-auto font-normal text-center">
            Founded in 2019, our journey began with a clear focus: applying
            advanced AI and data science to real-world business challenges. Over
            the years, we have evolved from delivering custom analytical systems
            to building enterprise-grade AI platforms, foundation models, and
            generative AI solutions tailored for modern organizations. Today, we
            enable teams to design, deploy, and manage intelligent systems with
            flexibility, control, and speed.
            <br />
            <br />
            Our work spans industries and use cases, but our approach remains
            consistent: deep technical rigor paired with a strong understanding
            of business needs.
          </p>
        </div>

        {/* ---------- TIMELINE ---------- */}
        <div className="relative overflow-x-auto">
          <div className="flex items-start gap-20 min-w-max px-4">
            {storyTimeline.map((item, idx) => {
              const Icon = iconMap[item.icon];

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: idx * 0.05,
                  }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center w-[260px]"
                >
                  {/* Icon */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border-8 border-lime-400 flex items-center justify-center text-lime-400">
                      <Icon size={30} />
                    </div>

                    {/* Arrow (decorative, not part of layout) */}
                    {idx !== storyTimeline.length - 1 && (
                      <ArrowRight
                        size={36}
                        className="absolute -right-12 text-lime-400"
                      />
                    )}
                  </div>

                  {/* Connector */}
                  <div className="w-8px h-6 bg-gray-600 my-4" />

                  {/* Text */}
                  <h4 className="text-white font-semibold text-lg">
                    {item.year}
                  </h4>

                  <p className="text-white font-medium mt-1">{item.title}</p>

                  <p className="text-gray-400 text-sm mt-2 leading-relaxed max-w-[220px]">
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
