import React from "react";
import Section from "../../layout/Section";

const PlatformCapabilities = () => {
  /* -----------------------------
     Data
  ------------------------------ */
  const OVERVIEW_CARDS = [
    {
      id: "orchestration",
      number: "1",
      title: "Orchestration",
      description:
        "The Qyoob Agent orchestrates user interactions across modalities (chat, voice, API). It routes requests through the Agent Registry and MCP Gateway, coordinating tasks across services and agents. The LLM Registry dynamically selects and serves appropriate models, supporting modular workflows.",
    },
    {
      id: "document-stores",
      number: "2",
      title: "Document Stores",
      description:
        "Establish secure connections to enterprise data sources including Google Drive, Microsoft SharePoint, Amazon S3, and other cloud storage platforms. Full compatibility with major document formats such as PDF, DOCX, JSON, TXT, and CSV.",
    },
    {
      id: "tools-management",
      number: "3",
      title: "Tools Management",
      description:
        "The MCP Gateway connects to external enterprise tools like GitHub, Jira, Notion, and Slack, while the Agent Registry manages callable agents. This enables composable, multi-agent workflows powered by external systems.",
    },
  ];

  /* -----------------------------
     Subcomponents
  ------------------------------ */
  function OverviewCard({ number, title, description }) {
    return (
      <div
        className="
          group relative rounded-2xl border border-lime-400/20
          p-6 sm:p-8
          transition-all duration-500
          hover:-translate-y-2
          hover:border-lime-400/40
          hover:shadow-[0_0_50px_-10px_rgba(163,255,102,0.4)]
          shadow-[0_0_40px_-15px_rgba(163,255,102,0.2)]
        "
      >
        <div className="bg-lime-400 text-black font-bold text-lg w-10 h-10 flex items-center justify-center rounded-md shadow-md mb-8 transition-transform duration-500 group-hover:scale-110">
          {number}
        </div>

        <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-lime-300">
          {title}
        </h4>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed md:text-md">
          {description}
        </p>
      </div>
    );
  }

  return (
    <Section>
      <div className="mx-auto px-6">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {OVERVIEW_CARDS.map((card) => (
            <OverviewCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PlatformCapabilities;
