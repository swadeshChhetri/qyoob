import { Zap, Database, Box, Network, Activity, Shield } from "lucide-react";

const PlatformArchitectureSection = () => {
  return (
    <section className="bg-black px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Platform Architecture
          </h2>
          <p className="mt-4 text-gray-400">
            Built on production-grade infrastructure components
          </p>
        </div>

        {/* Architecture Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Row 1 */}
          <ArchitectureCard
            icon={<Zap />}
            title="Agent Runtime"
            description="Core execution engine for running agents and managing workflows"
            gradient="from-yellow-900/70 to-black"
            border="border-yellow-500/30"
          />

          <ArchitectureCard
            icon={<Database />}
            title="Knowledge Store"
            description="Vector database and document processing pipeline"
            gradient="from-blue-900/70 to-black"
            border="border-blue-500/30"
          />

          <ArchitectureCard
            icon={<Box />}
            title="Tool Registry"
            description="MCP server management and tool discovery"
            gradient="from-purple-900/70 to-black"
            border="border-purple-500/30"
          />

          {/* Row 2 */}
          <ArchitectureCard
            icon={<Network />}
            title="Orchestration Layer"
            description="Multi-agent coordination and A2A protocol handling"
            gradient="from-emerald-900/70 to-black"
            border="border-emerald-500/30"
          />

          <ArchitectureCard
            icon={<Activity />}
            title="Observability"
            description="Real-time monitoring, logging, and tracing"
            gradient="from-orange-900/70 to-black"
            border="border-orange-500/30"
          />

          <ArchitectureCard
            icon={<Shield />}
            title="Control Plane"
            description="Configuration, deployment, and policy management"
            gradient="from-indigo-900/70 to-black"
            border="border-indigo-500/30"
          />
        </div>
      </div>
    </section>
  );
};

const ArchitectureCard = ({ icon, title, description, gradient, border }) => {
  return (
    <div
      className={`rounded-3xl border ${border} bg-gradient-to-br ${gradient} p-6 flex gap-5`}
    >
      <div className="flex h-12 w-18 items-center justify-center rounded-xl bg-white/10 text-white">
        {icon}
      </div>
      <div className="items-center gap-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-4 text-gray-300 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
};

export default PlatformArchitectureSection;
