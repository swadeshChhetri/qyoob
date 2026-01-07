import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/* DATA */
/* ------------------------------------------------------------------ */

const CORE_CAPABILITIES = [
  {
    id: "orchestration",
    label: "Multi-Agent Orchestration",
    title: "Multi-Agent Orchestration",
    description:
      "Build agents that automatically spawn specialized sub-agents based on the task at hand. Your main agent acts as a supervisor, delegating work to specialized workers that handle specific tools and knowledge sources.",
    points: [
      "Sub-agents created dynamically at runtime",
      "Central coordination with delegated execution",
      "Automatic context and history sharing",
      "Full control over iteration limits and behavior",
    ],
    icon: "orchestration",
    iconBg: "bg-blue-500",
  },
  {
    id: "knowledge",
    label: "Knowledge Base & Search",
    title: "Knowledge Base & Search",
    description:
      "Turn your documents into searchable, queryable knowledge. Advanced hybrid search combines semantic understanding with keyword precision to surface exactly what you need.",
    points: [
      "Semantic + keyword hybrid search",
      "Smart reranking for better results",
      "PDF, DOCX, PPTX, XLSX, images, audio support",
      "OCR for scanned documents",
    ],
    icon: "search",
    iconBg: "bg-purple-500",
  },
  {
    id: "mcp",
    label: "Tool Integration via MCP",
    title: "Tool Integration via MCP",
    description:
      "Connect agents to enterprise systems using the Model Context Protocol (MCP)—an open standard for AI-tool integration. Pre-built connectors for common tools, or add your own custom integrations.",
    points: [
      "Model Context Protocol (MCP) support",
      "Pre-built connectors for databases, email, PM tools",
      "Easy custom tool development",
      "OAuth and token-based auth",
    ],
    badge: "Industry Standard",
    icon: "package",
    iconBg: "bg-orange-500",
  },
  {
    id: "a2a",
    label: "Agent Collaboration via A2A",
    title: "Agent Collaboration via A2A",
    description:
      "Agents discover and delegate tasks to each other automatically using the Agent-to-Agent (A2A) protocol. Work flows across functions without bottlenecks or manual coordination.",
    points: [
      "Built on Agent-to-Agent (A2A) protocol",
      "Automatic agent discovery",
      "Smart task routing and delegation",
      "Cross-functional request handling",
    ],
    badge: "Next Generation",
    icon: "a2a",
    iconBg: "bg-green-500",
  },
  {
    id: "memory",
    label: "Memory & Context",
    title: "Memory & Context",
    description:
      "Agents remember what matters. User preferences persist across sessions, and learned patterns are available to all users of an agent.",
    points: [
      "Persistent user preferences and context",
      "Shared agent memory across users",
      "Semantic memory retrieval",
      "Privacy controls and filtering",
    ],
    icon: "memory",
    iconBg: "bg-yellow-500",
  },
  {
    id: "visibility",
    label: "Real-Time Visibility",
    title: "Real-Time Visibility",
    description:
      "See exactly what agents are doing as they work. Every step logged, every decision transparent, fully auditable.",
    points: [
      "Token-by-token streaming output",
      "Real-time execution events",
      "Complete audit trail",
      "Tool call and handoff visibility",
    ],
    icon: "visibility",
    iconBg: "bg-indigo-500",
  },
  {
    id: "safety",
    label: "Quality & Safety",
    title: "Quality & Safety",
    description:
      "Built-in validation at every stage. Requests are checked before processing, responses validated before delivery, with optional critique loops for accuracy.",
    points: [
      "Input validation before processing",
      "Output validation before delivery",
      "Optional agent critique loops",
      "Configurable guardrail policies",
    ],
    icon: "safety",
    iconBg: "bg-teal-500",
  },
];

/* ------------------------------------------------------------------ */
/* ICONS */
/* ------------------------------------------------------------------ */

function CapabilityIcon({ type }) {
  const base = "h-10 w-10 text-white";

  // Standard props for all SVGs
  const commonProps = {
    className: base,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
  };

  switch (type) {
    case "orchestration":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );

    case "knowledge":
    case "search":
      return (
        <svg {...commonProps}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );

    case "mcp":
    case "package":
      // Custom Box/Tape Icon
      return (
        <svg {...commonProps}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
          <line x1="7.5" y1="4.5" x2="16.5" y2="9.5" />
        </svg>
      );

    case "a2a":
      // Custom Brain Icon
      return (
        <svg {...commonProps}>
          <path d="M15.5 13a3.5 3.5 0 0 0-3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" />
          <path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-7 0v-1.8" />
          <path d="M17.5 16a3.5 3.5 0 0 0 0-7h-.5" />
          <path d="M19 9.3v-2.8a3.5 3.5 0 0 0-7 0" />
          <path d="M6.5 16a3.5 3.5 0 0 1 0-7h.5" />
          <path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" />
        </svg>
      );

    case "memory":
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );

    case "visibility":
      return (
        <svg {...commonProps}>
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
          <polyline points="17 2 12 7 7 2" />
        </svg>
      );

    case "safety":
      return (
        <svg {...commonProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/* COMPONENT */
/* ------------------------------------------------------------------ */

export default function CoreCapabilitiesSection() {
  const [activeId, setActiveId] = useState("mcp");

  // Safety check in case activeId doesn't exist in data
  const active =
    CORE_CAPABILITIES.find((c) => c.id === activeId) || CORE_CAPABILITIES[0];

  return (
    <section className="bg-black px-6 py-32">
      <div className="mx-auto max-w-6xl text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Core Capabilities
        </h2>
        <p className="mt-4 text-gray-400 text-xl">
          Everything you need to build production-ready AI agents
        </p>

        {/* Pills */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {CORE_CAPABILITIES.map((cap) => {
            const isActive = cap.id === activeId;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveId(cap.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition border
                  ${
                    isActive
                      ? "bg-lime-400/10 text-lime-400 border-lime-400 font-medium"
                      : "bg-white/5 text-gray-400 border-transparent hover:text-gray-200 font-medium"
                  }
                `}
              >
                <div
                  className={`h-6 w-6 rounded-md ${cap.iconBg} flex items-center justify-center`}
                >
                  <CapabilityIcon type={cap.icon} />
                </div>
                {cap.label}
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div className="mt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 text-left backdrop-blur"
            >
              {/* Header */}
              <div className="flex items-start gap-6">
                <div
                  className={`h-14 w-14 rounded-2xl ${active.iconBg} flex items-center justify-center shrink-0`}
                >
                  <CapabilityIcon type={active.icon} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-4xl font-semibold text-white">
                      {active.title}
                    </h3>
                    {active.badge && (
                      <span className="rounded-full bg-lime-400/10 px-3 py-1 text-xs text-lime-400 border border-lime-400/20">
                        {active.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 max-w-3xl text-gray-400 leading-relaxed text-lg">
                    {active.description}
                  </p>
                </div>
              </div>

              {/* Points */}
              <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                {active.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-xl bg-black/40 px-4 py-3 border border-white/5"
                  >
                    <span className="text-lime-400 mt-0.5">✓</span>
                    <span className="text-gray-300 text-md">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
