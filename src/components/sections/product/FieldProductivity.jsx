import Section from "../../layout/Section";
import MaxWrapper from "../../layout/MaxWrapper";

export default function FieldProductivity() {
  return (
    <Section className="relative bg-black text-white">
      <MaxWrapper>
        {/* =====================
            HEADER ZONE
        ====================== */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-sm font-bold tracking-[0.2em] text-lime-400">
            FIELD PRODUCTIVITY
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Playbooks for
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
              coordinated execution
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mb-10 sm:mb-14 leading-relaxed">
            Turn complex, cross-tool work into structured agent workflows that
            move from intent to outcome — without manual follow-ups.
          </p>
        </div>

        {/* =====================
            SECTION SEPARATOR
        ====================== */}
        <div className="mt-20" />

        {/* =====================
            CONTENT ZONE
        ====================== */}
        <div className="w-full bg-[#0f0f0f] rounded-3xl overflow-hidden flex flex-col lg:flex-row min-h-[420px]">
          {/* LEFT */}
          <div className="w-full lg:w-1/2 bg-[#1b1b1b] px-6 flex flex-col justify-center">
            <h3 className="text-2xl font-medium mb-12 md:text-3xl">
              Built for real-world execution
            </h3>

            <ul className="space-y-6 text-md">
              <li className="text-lime-400 cursor-pointer">
                Workflow setup and context gathering
              </li>

              <li className="text-lime-400 cursor-pointer">
                Multi-step task coordination
              </li>

              {/* Active Item */}
              <li className="rounded-xl border border-lime-400/20 bg-black/40 p-6">
                <p className="text-lime-400 mb-2 font-medium">
                  Decision mapping and execution
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Align agents around shared context, dependencies, and
                  priorities, so actions happen in the right order and at the
                  right time.
                </p>
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2 bg-[#151515] flex items-center justify-center">
            <img
              src="image/fieldProductivity.png"
              alt="Product UI preview"
              loading="lazy"
              className="w-full h-full rounded-2xl object-cover shadow-[0_0_60px_-15px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </MaxWrapper>
    </Section>
  );
}
