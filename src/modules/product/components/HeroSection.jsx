import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../../components/layout/Section";
import MaxWrapper from "../../../components/layout/MaxWrapper";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const HeroSection = () => {
  return (
    <Section className="relative bg-black px-6">
      <MaxWrapper className="flex flex-col items-center text-center space-y-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight"
        >
          The Qyoob Platform
        </motion.h1>

        {/* Subheading */}
        <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-400">
          A multi-agent orchestration platform for building and deploying
          enterprise AI agents. Self-hosted.
          <br />
          Extensible. Built for production workloads.
        </p>

        {/* CTA */}
        {/* <div className="absolute inset-0 flex items-end justify-center pb-6 sm:pb-10"></div> */}

        {/* CTA buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mt-2">
          {/* Primary CTA */}
          {/* <button className="inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-lime-300">
            Request a Demo
            <ArrowRight className="h-4 w-4" />
          </button> */}

          <MotionLink
            to="/contact"
            className="
        inline-flex items-center gap-3
        rounded-xl
        bg-lime-400
        px-5 py-3
        text-black font-medium
        hover:bg-lime-500
        focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400
      "
            whileHover="hover"
            whileFocus="hover"
          >
            <span>Request a Demo</span>

            <motion.span
              variants={{
                hover: { x: 6 },
              }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </MotionLink>

          {/* Secondary CTA */}
          <button className="rounded-xl border border-lime-400/40 px-6 py-3 text-sm font-medium text-lime-400 transition hover:border-lime-400 hover:bg-lime-400/10">
            Contact Sales
          </button>
        </div>
      </MaxWrapper>
    </Section>
  );
};

export default HeroSection;
