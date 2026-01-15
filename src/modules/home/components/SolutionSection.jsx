// import { motion } from "framer-motion";

// const SolutionSection = () => {
//   return (
//     <section className="relative bg-black py-28 px-6 text-center overflow-hidden">
//       {/* Soft gradient glow */}
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_60%)]" />

//       <div className="relative mx-auto max-w-5xl">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-semibold text-white"
//         >
//           What if work just… happened?
//         </motion.h2>

//         {/* Description */}
//         <div className="mt-6 space-y-4 text-gray-400 text-xl leading-relaxed">
//           <p>
//             Imagine asking a question and getting an answer pulled from every
//             system—instantly.
//           </p>
//           <p>
//             Imagine requests that touch five departments resolving themselves.
//           </p>
//           <p>Imagine your teams focused on decisions, not logistics.</p>
//         </div>

//         {/* Highlight line */}
//         <p className="mt-8 text-2xl text-lime-400">
//           That&apos;s what AI agents do.
//         </p>

//         {/* Sub heading */}
//         <div className="mt-24">
//           <motion.h3
//             initial={{ opacity: 0, y: 28 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="text-2xl font-semibold text-white"
//           >
//             Three ways to work with your agents
//           </motion.h3>
//           <p className="mt-2 text-gray-400 text-md">
//             Choose the interaction mode that fits the task at hand
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
//           <FeatureCard
//             title="Chat"
//             description="Conversation that thinks with you"
//           />
//           <FeatureCard
//             title="Enterprise Search"
//             description="Your entire organization, one search away"
//           />
//           <FeatureCard
//             title="Task"
//             description="Describe it. Delegate it. Done."
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// const FeatureCard = ({ title, description }) => {
//   return (
//     <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-sm transition hover:border-white/20">
//       <h4 className="text-xl font-semibold text-white">{title}</h4>
//       <p className="mt-2 text-md text-gray-400">{description}</p>
//     </div>
//   );
// };

// export default SolutionSection;

import { motion } from "framer-motion";
import { useState } from "react";

const SolutionSection = () => {
  const [active, setActive] = useState("");

  return (
    <section className="relative bg-black py-28 px-6 text-center overflow-hidden">
      {/* Soft gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-white"
        >
          What if work just… happened?
        </motion.h2>

        {/* Description */}
        <div className="mt-6 space-y-4 text-gray-400 text-xl leading-relaxed">
          <p>
            Imagine asking a question and getting an answer pulled from every
            system—instantly.
          </p>
          <p>
            Imagine requests that touch five departments resolving themselves.
          </p>
          <p>Imagine your teams focused on decisions, not logistics.</p>
        </div>

        <p className="mt-8 text-2xl text-lime-400">
          That&apos;s what AI agents do.
        </p>

        {/* Sub heading */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white"
          >
            Three ways to work with your agents
          </motion.h3>
          <p className="mt-2 text-gray-400 text-md">
            Choose the interaction mode that fits the task at hand
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: "Chat", description: "Conversation that thinks with you" },
            {
              title: "Enterprise Search",
              description: "Your entire organization, one search away",
            },
            { title: "Task", description: "Describe it. Delegate it. Done." },
          ].map((item) => (
            <FeatureCard
              key={item.title}
              {...item}
              active={active === item.title}
              onSelect={() => setActive(item.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description, active, onSelect }) => {
  return (
    <motion.div
      onClick={onSelect}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      // className={`
      //   cursor-pointer rounded-2xl border px-6 py-8 backdrop-blur-sm
      //   ${
      //     active
      //       ? "border-lime-400/60 bg-white/10"
      //       : "border-lime-400/60 bg-white/10"
      //   }
      // `}
        className= "cursor-pointer rounded-2xl border px-6 py-8 hover:border-lime-400/60 bg-white/10"
    >
      <h4 className="text-xl font-semibold text-white">{title}</h4>
      <p className="mt-2 text-md text-gray-400">{description}</p>
    </motion.div>
  );
};


export default SolutionSection;
