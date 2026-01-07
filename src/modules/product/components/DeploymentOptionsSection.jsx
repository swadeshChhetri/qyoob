import { Server, Cloud } from "lucide-react";

const DeploymentOptionsSection = () => {
  return (
    <section className="bg-black px-6 py-32">
      <div className="mx-auto max-w-6xl text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Deployment Options
        </h2>
        <p className="mt-4 text-gray-400 text-xl">
          Deploy where it makes sense for your organization
        </p>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Self-Hosted */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Server className="h-6 w-6 text-white" />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-white">
              Self-Hosted
            </h3>
            <p className="mt-2 text-gray-400 leading-relaxed">
              Full control over your deployment. Run on your own
              infrastructure, behind your firewall.
            </p>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-lime-400">✓</span>
                Your infrastructure
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lime-400">✓</span>
                Your data stays in-house
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lime-400">✓</span>
                Complete control
              </li>
            </ul>
          </div>

          {/* Cloud */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Cloud className="h-6 w-6 text-white" />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-white">
              Cloud
            </h3>
            <p className="mt-2 text-gray-400 leading-relaxed">
              Managed deployment on AWS, GCP, or Azure. We
              handle the infrastructure.
            </p>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-lime-400">✓</span>
                Managed service
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lime-400">✓</span>
                Auto-scaling
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lime-400">✓</span>
                High availability
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentOptionsSection;
