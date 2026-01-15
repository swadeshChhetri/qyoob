// import React from "react";
// import { Link } from "react-router-dom";
// import Section from "./Section";

// const QuickAction = () => {
//   return (
//     <Section className="text-center space-y-8">
//       <h2 className="text-3xl md:text-5xl font-semibold text-white">
//         Ready to see it in action?
//       </h2>

//       <div className="flex items-center justify-center gap-6 font-semibold">
//         <Link
//           to="/contact"
//           className="px-8 py-3 rounded-full border border-lime-400 text-white hover:bg-lime-400 hover:text-black transition"
//         >
//           Request a demo
//         </Link>
//           <Link
//           to="/contact"
//           className="px-8 py-3 rounded-full border border-lime-400 bg-lime-400 text-black transition"
//         >
//           Contact Sales
//         </Link>
//       </div>
//     </Section>
//   );
// };

// export default QuickAction;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Section from "./Section";

const MotionLink = motion(Link);

const QuickAction = () => {
  return (
    <Section className="text-center space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-semibold text-white"
      >
        Ready to see it in action?
      </motion.h2>

      <div className="flex items-center justify-center gap-6 font-semibold">
        {/* Secondary CTA */}
        <MotionLink
          to="/contact"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.12, ease: "easeOut" }}
          className="px-8 py-3 rounded-full border border-lime-400 text-white
                     hover:bg-lime-400 hover:text-black transition-colors"
        >
          Request a demo
        </MotionLink>

        {/* Primary CTA */}
        <MotionLink
          to="/contact"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.12, ease: "easeOut" }}
          className="px-8 py-3 rounded-full border border-lime-400
                     bg-lime-400 text-black transition-colors"
        >
          Contact Sales
        </MotionLink>
      </div>
    </Section>
  );
};

export default QuickAction;
