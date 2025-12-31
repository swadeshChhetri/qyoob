import React from "react";
import { User, Users, Network } from "lucide-react";
import MaxWrapper from "./../../layout/MaxWrapper";
import Section from "../../layout/Section";

/* -----------------------------
   Config / Data
------------------------------ */
const FEATURES = [
  {
    title: "Enterprise-Focused",
    description: "AI that scales from individuals to the entire enterprise.",
    icon: User,
  },
  {
    title: "Outcome-Driven",
    description:
      "AI that boosts productivity, accelerates teams, and transforms enterprises.",
    icon: Users,
  },
  {
    title: "Tech-Forward",
    description:
      "Intelligent agents for people, teams, and enterprise systems.",
    icon: Network,
  },
];

/* -----------------------------
   Sub Components
------------------------------ */
function FeatureItem({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-lime-400 p-3 rounded-full shrink-0">
        <Icon size={20} className="text-black" />
      </div>

      <div>
        <p className="text-lg font-medium mb-1">{title}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

/* -----------------------------
   Main Section
------------------------------ */
export default function WhyQyoobSection() {
  return (
    <Section className="relative bg-black text-white">
      {/* Section Header */}
      <MaxWrapper>
        <div className="text-center space-y-8">
          <h2 className="text-sm font-bold tracking-[0.2em] text-lime-400">
            WHY QYOOB
          </h2>

          <p className="text-3xl sm:text-xl md:text-5xl font-semibold leading-tight">
            The Future of Enterprise Automation Starts
            <br />
            with
            <span className="px-3 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
              AI Agents
            </span>
          </p>

          {/* Content Wrapper */}
          <div className="w-full bg-[#0f0f0f] rounded-3xl overflow-hidden flex flex-col md:flex-row">
            {/* LEFT */}
            <div className="w-full md:w-1/2 bg-[#1b1b1b] px-8 md:px-14 py-14 flex flex-col text-start">
              <h3 className="text-2xl font-medium mb-10">
                AI that powers your people, teams, and enterprise
              </h3>

              <div className="space-y-10">
                {FEATURES.map((feature) => (
                  <FeatureItem key={feature.title} {...feature} />
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-full md:w-1/2 bg-[#151515] flex">
              <img
                src="/image/ai_work.png"
                alt="Enterprise AI agents working across teams and systems"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </MaxWrapper>
    </Section>
  );
}
