// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const CORE_CAPABILITIES = [
//   {
//     id: "orchestration",
//     label: "Multi-Agent Orchestration",
//     icon: "🤖",
//     title: "Multi-Agent Orchestration",
//     description:
//       "Coordinate multiple agents with defined roles, dependencies, and execution order.",
//     points: [
//       "Role-based agent execution",
//       "Dependency-aware workflows",
//       "Parallel and sequential runs",
//       "Failure recovery paths",
//     ],
//   },
//   {
//     id: "knowledge",
//     label: "Knowledge Base & Search",
//     icon: "🔍",
//     title: "Knowledge Base & Search",
//     description:
//       "Ground agents in your internal knowledge across documents, databases, and tools.",
//     points: [
//       "Unified semantic search",
//       "Source-backed answers",
//       "Structured + unstructured data",
//       "Permission-aware access",
//     ],
//   },
//   {
//     id: "visibility",
//     label: "Real-Time Visibility",
//     icon: "📺",
//     title: "Real-Time Visibility",
//     description:
//       "See exactly what agents are doing as they work. Every step logged, every decision transparent, fully auditable.",
//     points: [
//       "Token-by-token streaming output",
//       "Real-time execution events",
//       "Complete audit trail",
//       "Tool call and handoff visibility",
//     ],
//   },
// ];

// export default function CoreCapabilitiesSection() {
//   const [activeId, setActiveId] = useState("visibility");

//   const active = CORE_CAPABILITIES.find(
//     (cap) => cap.id === activeId
//   );

//   return (
//     <section className="bg-black px-6 py-32">
//       <div className="mx-auto max-w-6xl text-center">
//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-semibold text-white">
//           Core Capabilities
//         </h2>
//         <p className="mt-4 text-gray-400">
//           Everything you need to build production-ready AI agents
//         </p>

//         {/* Selector pills */}
//         <div className="mt-16 flex flex-wrap justify-center gap-3">
//           {CORE_CAPABILITIES.map((cap) => {
//             const isActive = cap.id === activeId;

//             return (
//               <button
//                 key={cap.id}
//                 onClick={() => setActiveId(cap.id)}
//                 className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition
//                   ${
//                     isActive
//                       ? "bg-lime-400/10 text-lime-400 ring-1 ring-lime-400"
//                       : "text-gray-500 hover:text-gray-300"
//                   }
//                 `}
//               >
//                 <span>{cap.icon}</span>
//                 {cap.label}
//               </button>
//             );
//           })}
//         </div>

//         {/* Content Card */}
//         <div className="mt-16">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={active.id}
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -16 }}
//               transition={{ duration: 0.25 }}
//               className="mx-auto max-w-5xl rounded-3xl bg-white/5 p-10 text-left backdrop-blur"
//             >
//               <div className="flex items-start gap-6">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20 text-2xl">
//                   {active.icon}
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-semibold text-white">
//                     {active.title}
//                   </h3>
//                   <p className="mt-2 max-w-2xl text-gray-400">
//                     {active.description}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
//                 {active.points.map((point) => (
//                   <div
//                     key={point}
//                     className="flex items-center gap-3 rounded-xl bg-black/40 px-4 py-3"
//                   >
//                     <span className="text-lime-400">✓</span>
//                     <span className="text-gray-300">{point}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }


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
      "Coordinate multiple agents with defined roles, dependencies, and execution order.",
    points: [
      "Role-based agent execution",
      "Dependency-aware workflows",
      "Parallel and sequential runs",
      "Failure recovery paths",
    ],
    icon: "orchestration",
    iconBg: "bg-blue-500",
  },
  {
    id: "knowledge",
    label: "Knowledge Base & Search",
    title: "Knowledge Base & Search",
    description:
      "Ground agents in your internal knowledge across documents, databases, and tools.",
    points: [
      "Unified semantic search",
      "Source-backed answers",
      "Structured + unstructured data",
      "Permission-aware access",
    ],
    icon: "search",
    iconBg: "bg-purple-500",
  },
  {
    id: "mcp",
    label: "Tool Integration via MCP",
    title: "Tool Integration via MCP",
    description:
      "Connect agents to enterprise systems using the Model Context Protocol (MCP)—an open standard for AI-tool integration.",
    points: [
      "Model Context Protocol (MCP) support",
      "Pre-built connectors for common tools",
      "Easy custom tool development",
      "OAuth and token-based auth",
    ],
    badge: "Industry Standard",
    icon: "package",
    iconBg: "bg-orange-500",
  },
];

/* ------------------------------------------------------------------ */
/* ICONS */
/* ------------------------------------------------------------------ */

function CapabilityIcon({ type }) {
  const base = "h-10 w-10 text-white";
  switch (type) {
    case "orchestration":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19 12a7 7 0 0 0-14 0" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case "package":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
          <path d="M12 12v9" />
          <path d="M12 12l8-4.5" />
          <path d="M12 12l-8-4.5" />
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
  const active = CORE_CAPABILITIES.find(c => c.id === activeId);

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
          {CORE_CAPABILITIES.map(cap => {
            const isActive = cap.id === activeId;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveId(cap.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition
                  ${
                    isActive
                      ? "bg-lime-400/10 text-lime-400 ring-1 ring-lime-400 font-medium"
                      : "bg-white/5 text-gray-400 hover:text-gray-200 font-medium"
                  }
                `}
              >
                <div className={`h-7 w-7 rounded-md ${cap.iconBg} flex items-center justify-center`}>
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
                <div className={`h-14 w-14 rounded-2xl ${active.iconBg} flex items-center justify-center`}>
                  <CapabilityIcon type={active.icon} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-semibold text-white">
                      {active.title}
                    </h3>
                    {active.badge && (
                      <span className="rounded-full bg-lime-400/10 px-3 py-1 text-xs text-lime-400">
                        {active.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 max-w-3xl text-gray-400">
                    {active.description}
                  </p>
                </div>
              </div>

              {/* Points */}
              <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                {active.points.map(point => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-xl bg-black/40 px-4 py-3"
                  >
                    <span className="text-lime-400">✓</span>
                    <span className="text-gray-300">{point}</span>
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
