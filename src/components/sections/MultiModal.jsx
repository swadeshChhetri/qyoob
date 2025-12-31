// import React from "react";
// import {
//   MessagesSquare,
//   AudioLines,
//   Workflow,
//   ImagePlus,
// } from "lucide-react";
// import Section from "../layout/Section";
// import MaxWrapper from "../layout/MaxWrapper";

// /* -----------------------------
//    Config
// ------------------------------ */
// const FEATURES = [
//   { id: "chat", label: "CHAT", Icon: MessagesSquare },
//   { id: "voice", label: "VOICE", Icon: AudioLines },
//   { id: "api", label: "API", Icon: Workflow },
//   { id: "image", label: "IMAGE", Icon: ImagePlus },
// ];

// /* -----------------------------
//    Subcomponent
// ------------------------------ */
// function FeatureItem({ label, Icon }) {
//   return (
//     <div className="flex flex-col items-center space-y-2">
//       <Icon size={36} className="text-lime-400" />
//       <span className="text-white text-base sm:text-lg font-medium tracking-wide">
//         {label}
//       </span>
//     </div>
//   );
// }

// /* -----------------------------
//    Main Section
// ------------------------------ */
// export default function MultimodalSection() {
//   return (
//     <Section className="relative bg-black text-white overflow-hidden">
//       {/* Decorative background */}
//       <div
//         aria-hidden
//         className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"
//       />

//       <MaxWrapper>
//         <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
//           {/* Tagline */}
//           <p className="text-lime-400 text-sm sm:text-base tracking-wide uppercase">
//             Tagline
//           </p>

//           {/* Heading */}
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//             Multimodal
//             <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
//               Interfaces
//             </span>
//           </h2>

//           {/* Description */}
//           <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
//             Build AI agents that communicate naturally — voice or text — and
//             integrate seamlessly with tools like Teams and Slack.
//           </p>

//           {/* Features */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 pt-6">
//             {FEATURES.map((feature) => (
//               <FeatureItem key={feature.id} {...feature} />
//             ))}
//           </div>
//         </div>
//       </MaxWrapper>
//     </Section>
//   );
// }


import React from "react";
import {
  MessagesSquare,
  AudioLines,
  Workflow,
  ImagePlus,
} from "lucide-react";
import Section from "../layout/Section";
import MaxWrapper from "../layout/MaxWrapper";

/* -----------------------------
   Config
------------------------------ */
const FEATURES = [
  { id: "chat", label: "Chat", Icon: MessagesSquare },
  { id: "voice", label: "Voice", Icon: AudioLines },
  { id: "api", label: "API", Icon: Workflow },
  { id: "image", label: "Image", Icon: ImagePlus },
];

/* -----------------------------
   Subcomponent
------------------------------ */
function FeatureItem({ label, Icon }) {
  return (
    <div
      className="
        group relative flex flex-col items-center gap-3
        transition-opacity duration-300
        hover:opacity-100
      "
    >
      <div
        className="
          flex h-14 w-14 items-center justify-center rounded-xl
          border border-white/10 bg-black
          transition-all duration-300 ease-out
          group-hover:border-lime-500/40
          group-hover:shadow-[0_0_20px_rgba(163,255,102,0.35)]
        "
      >
        <Icon
          size={26}
          className="text-lime-400 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <span className="text-sm font-medium tracking-wide text-white">
        {label}
      </span>
    </div>
  );
}

/* -----------------------------
   Main Section
------------------------------ */
export default function MultimodalSection() {
  return (
    <Section className="relative bg-black text-white overflow-hidden">
      {/* System background glow */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_45%,rgba(163,255,102,0.12),transparent_55%)]
        "
      />

      <MaxWrapper>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Capability hint (NOT a fake tagline) */}
          <p className="text-lime-400 text-sm uppercase tracking-wide">
            One agent, many interfaces
          </p>

          {/* Heading */}
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Multimodal{" "}
            <span className="text-lime-400">Interfaces</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-gray-400 text-base sm:text-lg leading-relaxed">
            Build AI agents that communicate naturally—via text, voice, APIs, or
            images—and integrate seamlessly with tools like Teams and Slack.
          </p>

          {/* Interfaces */}
          <div className="relative mt-16 flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            {/* Central agent core */}
            <div
              aria-hidden
              className="
                absolute h-24 w-24 rounded-full
                bg-lime-500/10 blur-2xl
              "
            />

            {FEATURES.map((feature) => (
              <FeatureItem key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </MaxWrapper>
    </Section>
  );
}