import React from "react";
import { motion } from "framer-motion";
import Section from "../../layout/Section";
import MaxWrapper from "./../../layout/MaxWrapper";

const AgenticSection = () => {
  return (
    <Section id="about" className="bg-black text-white">
      <MaxWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <p className="text-lime-400 font-semibold tracking-wide uppercase">
              Intelligent Automation
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Agentic AI for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
                Enterprise
              </span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
              Powered by MCP and A2A protocols, Agentic AI transforms operations
              through secure, multi-agent collaboration that automates complex
              enterprise workflows from start to finish.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="flex justify-center md:justify-end"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.img
              src="https://cdn.prod.website-files.com/689afa31276b60a32fa171e5/689c7e03780865058475c51c_Group%2040.svg"
              alt="Agentic AI Diagram"
              className="
            w-full
            max-w-[380px]
            sm:max-w-[480px]
            md:max-w-[600px]
            lg:max-w-[720px]
            xl:max-w-[850px]
            2xl:max-w-[950px]
            rounded-2xl shadow-lg
          "
            />
          </motion.div>
        </div>
      </MaxWrapper>
    </Section>
  );
};

export default AgenticSection;
