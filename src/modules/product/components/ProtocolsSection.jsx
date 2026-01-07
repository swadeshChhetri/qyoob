const ProtocolsSection = () => {
  return (
    <section className="bg-black px-6 py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        {/* MCP Card */}
        <div className="relative rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-950/60 to-black p-10">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500">
              <img src="/icons/package.svg" alt="" className="h-6 w-6 te" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Model Context Protocol
              </h3>
              <p className="text-xs text-orange-400">Industry Standard</p>
            </div>
          </div>

          <p className="mt-6 text-gray-400 leading-relaxed">
            MCP is an open standard for connecting AI systems to data sources
            and tools. Qyoob supports the full MCP specification, giving you
            access to a growing ecosystem of pre-built integrations.
          </p>
        </div>

        {/* A2A Card */}
        <div className="relative rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/60 to-black p-10">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center text-white justify-center rounded-xl bg-emerald-500">
              <img src="/icons/brain.svg" alt="" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Agent-to-Agent Protocol
              </h3>
              <p className="text-xs text-emerald-400">Next Generation</p>
            </div>
          </div>

          <p className="mt-6 text-gray-400 leading-relaxed">
            A2A enables autonomous collaboration between AI agents. Agents can
            discover, communicate with, and delegate to each other—creating a
            distributed network of specialized capabilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProtocolsSection;
