import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-black px-6 py-40">
      <div className="mx-auto max-w-7xl text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white">
          The Qyoob Platform
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed text-gray-400">
          A multi-agent orchestration platform for building and deploying
          enterprise AI agents. Self-hosted.
          <br />
          Extensible. Built for production workloads.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Primary CTA */}
          <button className="inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-lime-300">
            Request a Demo
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Secondary CTA */}
          <button className="rounded-xl border border-lime-400/40 px-6 py-3 text-sm font-medium text-lime-400 transition hover:border-lime-400 hover:bg-lime-400/10">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
