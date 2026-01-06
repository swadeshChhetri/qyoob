const BenefitsSection = () => {
  return (
    <section className="bg-black px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-semibold text-white">
          Three things change when you deploy Qyoob.
        </h2>

        {/* Benefits */}
        <div className="mt-20 grid grid-cols-1 gap-14 md:grid-cols-3">
          <Benefit
            number="1."
            title="Complex work runs itself."
            description="Tasks that span multiple systems and steps complete automatically. No manual handoffs, no dropped balls, no waiting for someone to push it forward."
          />

          <Benefit
            number="2."
            title="Answers come from everywhere."
            description="Ask a question in plain language. Get an answer pulled from documents, databases, and tools across your organization—with sources you can verify."
          />

          <Benefit
            number="3."
            title="Teams stay connected without meetings."
            description="A single request can pull from any department's tools and knowledge. Work flows across functions without anyone playing traffic cop."
          />
        </div>

        {/* Divider line */}
        <div className="mt-24 h-px w-full bg-white/10" />
      </div>
    </section>
  );
};

const Benefit = ({ number, title, description }) => {
  return (
    <div>
      <span className="text-5xl font-medium text-lime-400">{number}</span>

      <h3 className="mt-6 text-2xl font-semibold text-white">{title}</h3>

      <p className="mt-4 text-gray-400 leading-relaxed text-md">{description}</p>
    </div>
  );
};

export default BenefitsSection;
