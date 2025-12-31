// import MaxWrapper from "../../layout/MaxWrapper";
// import Section from "../../layout/Section";

// export default function OverviewSection() {
//   return (
//     <Section className="bg-neutral-950 text-white">
//       <MaxWrapper>
//         {/* Heading */}
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
//           From one-off agent actions <br />
//           to reliable, coordinated execution
//         </h2>

//         {/* Subheading */}
//         <p className="mt-6 max-w-4xl text-xl text-gray-400 leading-relaxed">
//          Qyoob turns individual agent actions into structured workflows—so teams can run complex operations reliably across tools, systems, and teams.
//         </p>

//         {/* Value Cards */}
//         <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Card 1 */}
//           <div
//             className="
//     rounded-2xl bg-black p-6
//     border border-transparent

//     transition-all duration-300 ease-out
//     hover:-translate-y-1
//     hover:border-lime-500/60
//     hover:shadow-[0_20px_40px_-15px_rgba(163,165,102,0.6)]
//   "
//           >
//             <h3 className="text-lg font-medium mb-2">
//               Workflows, not one-off actions
//             </h3>
//             <p className="text-gray-400 leading-relaxed">
//              Design agent workflows with clear steps, ownership, and handoffs—so work continues automatically across tools and teams without manual coordination.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div
//             className="
//     rounded-2xl bg-black p-6
//     border border-transparent

//     transition-all duration-300 ease-out
//     hover:-translate-y-1
//     hover:border-lime-500/60
//     hover:shadow-[0_20px_40px_-15px_rgba(163,165,102,0.6)]
//   "
//           >
//             <h3 className="text-lg font-medium mb-2">
//               Designed for real operators
//             </h3>
//             <p className="text-gray-400 leading-relaxed">
//               Qyoob is designed for day-to-day business execution—where agents need context, history, and guardrails to deliver consistent outcomes, not just good responses.
//             </p>
//           </div>

//           {/* Card 3 – Highlighted */}
//           <div
//             className="
//     rounded-2xl bg-black p-6
//     border border-transparent

//     transition-all duration-300 ease-out
//     hover:-translate-y-1
//     hover:border-lime-500/60
//     hover:shadow-[0_20px_40px_-15px_rgba(163,165,102,0.6)]
//   "
//           >
//             <h3 className="text-lg font-medium mb-2">
//               Multi-agent execution at scale
//             </h3>
//             <p className="text-gray-400 leading-relaxed">
//               Coordinate multiple agents across workflows with defined roles, shared state, and enforced guardrails—so execution stays reliable as complexity increases.
//             </p>
//           </div>
//         </div>

//         {/* Product Screenshot */}
//         <div className="mt-24">
//           <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
//             <img
//               src="image/retailPlaybooks.png"
//               alt="Product UI overview"
//               loading="lazy"
//               className="w-full aspect-[16/9] object-cover"
//             />
//           </div>
//         </div>
//       </MaxWrapper>
//     </Section>
//   );
// }

import MaxWrapper from "../../layout/MaxWrapper";
import Section from "../../layout/Section";

export default function OverviewSection() {
  return (
    <Section className="relative text-white overflow-hidden">
      {/* Subtle system background */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_60%,rgba(163,255,102,0.08),transparent_55%)]
        "
      />

      <MaxWrapper className="relative">
        {/* Heading */}
        <h2 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          From one-off agent actions <br />
          to reliable, coordinated execution
        </h2>

        {/* Subheading */}
        <p className="mt-6 max-w-4xl text-xl text-gray-400 leading-relaxed">
          Qyoob turns individual agent actions into structured workflows—so
          teams can run complex operations reliably across tools, systems, and
          teams.
        </p>

        {/* Value Cards – Stepped Layout */}
        <div className="relative mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Connector line (desktop only) */}
          <div
            aria-hidden
            className="
              hidden lg:block
              absolute top-1/2 left-0 right-0 h-px
              bg-gradient-to-r from-transparent via-lime-500/30 to-transparent
            "
          />

          {/* Card 1 */}
          <div
            className="
    group relative rounded-2xl bg-black p-6
    border border-transparent
    shadow-none
    lg:-translate-y-12

    transition-all duration-300 ease-out
    hover:-translate-y-[52px]
    hover:border-lime-500/30
    hover:shadow-[0_25px_60px_-20px_rgba(163,255,102,0.35)]
  "
          >
            {/* System marker */}
            <span className="absolute left-0 top-6 h-10 w-[3px] bg-lime-500/70 rounded-r" />

            <h3 className="text-lg font-medium mb-2">
              Workflows, not one-off actions
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Design agent workflows with clear steps, ownership, and
              handoffs—so work continues automatically across tools and teams
              without manual coordination.
            </p>
          </div>

          {/* Card 2 – Elevated */}
          <div
            className="
    group relative rounded-2xl bg-black p-6
    border border-transparent
    shadow-none
    lg:-translate-y-12

    transition-all duration-300 ease-out
    hover:-translate-y-[52px]
    hover:border-lime-500/30
    hover:shadow-[0_25px_60px_-20px_rgba(163,255,102,0.35)]
  "
          >
            <span className="absolute left-0 top-6 h-10 w-[3px] bg-lime-500/80 rounded-r" />

            <h3 className="text-lg font-medium mb-2">
              Designed for real operators
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Qyoob is designed for day-to-day business execution—where agents
              need context, history, and guardrails to deliver consistent
              outcomes, not just good responses.
            </p>
          </div>

          {/* Card 3 – Most elevated / scale */}
          <div
            className="
    group relative rounded-2xl bg-black p-6
    border border-transparent
    shadow-none
    lg:-translate-y-12

    transition-all duration-300 ease-out
    hover:-translate-y-[52px]
    hover:border-lime-500/30
    hover:shadow-[0_25px_60px_-20px_rgba(163,255,102,0.35)]
  "
          >
            <span className="absolute left-0 top-6 h-10 w-[3px] bg-lime-500 rounded-r" />

            <h3 className="text-lg font-medium mb-2">
              Multi-agent execution at scale
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Coordinate multiple agents across workflows with defined roles,
              shared state, and enforced guardrails—so execution stays reliable
              as complexity increases.
            </p>
          </div>
        </div>

        {/* Product Screenshot */}
        <div className="mt-26">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10">
            <img
              src="image/retailPlaybooks.png"
              alt="Product UI overview"
              loading="lazy"
              className="w-full aspect-[16/9] object-container"
            />
          </div>
        </div>
      </MaxWrapper>
    </Section>
  );
}
