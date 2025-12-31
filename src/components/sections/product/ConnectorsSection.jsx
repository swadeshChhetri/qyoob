// import { connectors } from "../../../data/connectors";
// import MaxWrapper from "../../layout/MaxWrapper";
// import Section from "../../layout/Section";

// export default function ConnectorsSection() {
//   return (
//     <Section className="bg-neutral-950 text-white">
//       {/* Header */}
//       <MaxWrapper>
//         <div className="space-y-8">
//           <div className="flex items-center gap-2 text-sm tracking-widest text-gray-400">
//             <span>🔧</span>
//             <span className="text-lime-400 font-semibold tracking-wide uppercase">
//               INTEGRATIONS
//             </span>
//           </div>

//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
//             Connect agents to the tools your teams already run on
//           </h2>

//           <p className="text-lg text-gray-400 max-w-3xl">
//             Bring data, actions, and workflows together by connecting agents
//             directly to the systems where work actually happens.
//           </p>

//           {/* Divider */}
//           <div className="h-px w-full bg-white/10" />
//           {/* Grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6">
//             {connectors.map((item) => (
//               <div
//                 key={item.name}
//                 className="
//         group
//         flex flex-col items-center gap-3 text-center
//         rounded-xl
//         border border-white/10
//         bg-white/5
//         px-4 py-5
//         transition-all duration-300
//         hover:-translate-y-0.5
//         hover:border-lime-400/30
//         hover:bg-white/10
//         hover:shadow-[0_0_24px_-12px_rgba(163,255,102,0.22)]
//       "
//               >
//                 {/* Icon */}
//                 <div
//                   className="
//           flex h-10 w-10 items-center justify-center
//           transition-transform duration-300
//           group-hover:scale-105
//         "
//                 >
//                   <img
//                     src={item.icon}
//                     alt={item.name}
//                     loading="lazy"
//                     className="h-full w-full object-contain"
//                   />
//                 </div>

//                 {/* Label */}
//                 <span
//                   className="
//           text-xs sm:text-sm
//           text-gray-300
//           transition-colors duration-300
//           group-hover:text-white
//         "
//                 >
//                   {item.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </MaxWrapper>
//     </Section>
//   );
// }

import { connectors } from "../../../data/connectors";
import MaxWrapper from "../../layout/MaxWrapper";
import Section from "../../layout/Section";

export default function ConnectorsSection() {
  return (
    <Section className="text-white">
      <MaxWrapper>
        <div className="space-y-10">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm tracking-widest text-gray-400">
              <span>🔧</span>
              <span className="text-lime-400 font-semibold uppercase">
                Integrations
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Connect Qyoob agents directly to where work happens
            </h2>

            <p className="text-lg text-gray-400 max-w-3xl">
             Qyoob agents don’t just access your tools — they operate inside them, executing workflows across email, documents, calendars, and collaboration platforms.
            </p>

            {/* Agent hint */}
            <p className="text-sm text-gray-500">
              Agents coordinate actions across these systems as part of a single, end-to-end workflow.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white/10" />

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6">
            {connectors.map((item) => (
              <div
                key={item.name}
                className="
                  group relative
                  flex flex-col items-center gap-3 text-center
                  rounded-xl
                  border border-white/5
                  bg-white/3
                  px-4 py-5

                  transition-all duration-300 ease-out
                  hover:-translate-y-0.5
                  hover:border-lime-400/30
                  hover:bg-white/10
                  hover:shadow-[0_0_24px_-12px_rgba(163,255,102,0.22)]
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex h-10 w-10 items-center justify-center
                    opacity-70
                    transition-all duration-300
                    group-hover:opacity-100
                    group-hover:scale-105
                  "
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Label */}
                <span
                  className="
                    text-xs sm:text-sm
                    text-gray-400
                    transition-colors duration-300
                    group-hover:text-white
                  "
                >
                  {item.name}
                </span>

                {/* Capability hint (hover only) */}
                {item.description && (
                  <span
                    className="
                      text-[11px] leading-snug text-gray-500
                      opacity-0 translate-y-1
                      transition-all duration-300
                      group-hover:opacity-100 group-hover:translate-y-0
                    "
                  >
                    {item.description}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </MaxWrapper>
    </Section>
  );
}
