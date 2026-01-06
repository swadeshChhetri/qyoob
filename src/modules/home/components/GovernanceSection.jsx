import { Eye, ShieldCheck, Database } from "lucide-react";

const GovernanceSection = () => {
  return (
    <section className="bg-black px-6 py-28">
      <div className="mx-auto max-w-6xl text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Powerful automation. Complete oversight.
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
          You get speed without giving up control. Every action agents take is
          visible, auditable, and governed by rules you set.
        </p>

        {/* Feature Grid */}
        <div className="mt-20 grid grid-cols-1 gap-14 md:grid-cols-3">
          <Feature
            icon={<Eye className="h-10 w-10 text-lime-400" />}
            title="See Everything"
            description="Watch what agents do in real time. Every step, every decision—fully transparent."
          />

          <Feature
            icon={<ShieldCheck className="h-10 w-10 text-lime-400" />}
            title="Catch Issues Before They Ship"
            description="Built-in safeguards validate responses before they reach your teams."
          />

          <Feature
            icon={<Database className="h-10 w-10 text-lime-400" />}
            title="Keep Data In-House"
            description="Deploy on your infrastructure. Use your own models. Nothing leaves your environment."
          />
        </div>

        {/* Divider */}
        <div className="mt-24 h-px w-full bg-white/10" />
      </div>
    </section>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Icon container */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-400/10">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>

      <p className="mt-4 max-w-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default GovernanceSection;
