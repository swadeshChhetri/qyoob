import React from "react";
import { Cloud, GitBranch, Folder, Kanban, Zap, Globe } from "lucide-react";
import Section from "../../layout/Section";
import MaxWrapper from "../../layout/MaxWrapper";

const useCases = [
  {
    meta: "SUPPORT",
    title: "Customer Support Agent",
    description:
      "Interact with a Customer Support Agent through multiple modalities to resolve issues, access product information, and deliver troubleshooting support by operating directly across enterprise systems and knowledge bases.",
    icons: [
      <Cloud key="crm" className="text-sky-400" />,
      <Folder key="storage" className="text-green-400" />,
      <Kanban key="jira" className="text-blue-400" />,
    ],
  },
  {
    meta: "ENGINEERING",
    title: "Coding Agent",
    description:
      "Accelerate development workflows with an agent that works across repositories, issue tracking, and collaboration tools—automating repetitive tasks and improving code quality through coordinated execution.",
    icons: [
      <Globe key="platform" className="text-blue-500" />,
      <Zap key="automation" className="text-orange-400" />,
      <Kanban key="tracking" className="text-blue-400" />,
      <GitBranch key="code" className="text-white" />,
    ],
  },
  {
    meta: "MARKETING",
    title: "Marketing Agent",
    description:
      "Run data-driven marketing workflows with automated analytics, personalized recommendations, and cross-platform insights that continuously optimize engagement and conversions.",
    icons: [
      <Zap key="automation" className="text-orange-400" />,
      <Globe key="meta" className="text-blue-500" />,
    ],
  },
  {
    meta: "ANALYTICS",
    title: "Data Analysis Agent",
    description:
      "Automate data ingestion, analysis, and reporting to surface insights, visualize key metrics, and support faster decision-making without manual effort.",
    icons: [
      <Kanban key="tracking" className="text-blue-400" />,
      <Folder key="storage" className="text-green-400" />,
      <GitBranch key="code" className="text-white" />,
    ],
  },
];

const UseCases = () => {
  return (
    <Section id="services" className="text-white">
      <MaxWrapper>
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          Use <span className="text-lime-400">Cases</span>
        </h2>

        {/* Supporting line */}
        <p className="text-gray-400 text-base sm:text-lg max-w-3xl mb-12 leading-relaxed">
          Pre-built agent workflows designed for real operational roles — not
          demos or one-off automations.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="
                group relative
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                p-6 sm:p-8

                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:border-lime-400/30
                hover:bg-white/[0.06]
                hover:shadow-[0_20px_40px_-18px_rgba(163,255,102,0.25)]
              "
            >
              {/* Meta label */}
              <span className="mb-3 inline-block text-xs tracking-widest text-gray-500 uppercase">
                {useCase.meta}
              </span>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-lime-300">
                {useCase.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed text-base sm:text-lg">
                {useCase.description}
              </p>

              {/* Divider */}
              <div className="mb-4 h-px w-full bg-white/10" />

              {/* Execution capabilities */}
              <div className="flex gap-4 text-xl sm:text-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                {useCase.icons}
              </div>
            </div>
          ))}
        </div>
      </MaxWrapper>
    </Section>
  );
};

export default UseCases;
