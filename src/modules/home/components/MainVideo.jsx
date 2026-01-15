import React from "react";
import { ArrowRight, CirclePlay } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "../../../components/layout/Section";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function HeroSectionVideo() {
  return (
    <Section className="relative">
      {/* FULL WIDTH */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* This padding MUST match MaxWrapper padding */}

        <div className="relative w-full rounded-3xl overflow-hidden shadow-lg">
          {/* Aspect ratio */}
          <div className="w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[15/7]">
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
            >
              <source
                src="https://swadeshassignments3.s3.ap-south-1.amazonaws.com/Qyoob.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* CTA */}
          <div className="absolute inset-0 flex items-end justify-center pb-6 sm:pb-10">
            <MotionLink
              to="/contact"
              className="
        inline-flex items-center gap-3
        rounded-xl
        bg-lime-400
        px-7 py-3
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
          </div>
        </div>
      </div>
    </Section>
  );
}
