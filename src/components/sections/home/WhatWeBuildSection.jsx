import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import HeroSectionVideo from "./MainVideo";
import { Link } from "react-router-dom";
// import MaxWrapper from "../components/layout/MaxWrapper";
import MaxWrapper from "../../layout/MaxWrapper";
import Section from "../../layout/Section";

const dynamicContent = [
  {
    heading: "Autonomous AI agents built for enterprise",
    paragraph:
      "Securely integrated with your tools and systems, working together to automate complex workflows across your organization.",
    button: "Contact Us",
    image: "/image/mainpage.png",
  },
  {
    heading: "Seamless, human-like collaboration with AI",
    paragraph: "Across text, voice, images, video, and your desktop.",
    button: "Try Demo",
    image: "/image/mainpage.png",
  },
];

const WhatWeBuildSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dynamicContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { heading, paragraph, button, image } = dynamicContent[currentIndex];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };
  return (
    <Section>
      <MaxWrapper>
        <div className="flex flex-col md:flex-row bg-black/80 border border-[#1b1b1b] rounded-3xl overflow-hidden">
          {/* LEFT */}
          <div className="md:w-1/2 min-h-[420px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-5 max-w-xl p-8"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  {heading}
                </h2>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  {paragraph}
                </p>

                <Link
                  to="/contact"
                  className="inline-block bg-lime-400 hover:bg-lime-500 text-black font-medium px-6 py-3 rounded-md"
                >
                  {button}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT */}
          <div className="md:w-1/2 bg-[#151515]">
            <img
              src={image}
              alt="AI Agent Builder Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </MaxWrapper>
    </Section>
  );
};

export default WhatWeBuildSection;
