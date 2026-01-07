import React from "react";
import { CirclePlay } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "../../layout/Section";

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
          <div className="absolute inset-0 flex items-end justify-center pb-6 sm:pb-10 pointer-events-none">
            <Link
              to="/contact"
              className="pointer-events-auto flex items-center gap-2
                         bg-lime-400 hover:bg-lime-500 text-black font-semibold
                         px-6 sm:px-8 py-3 rounded-full transition shadow-lg"
            >
              <CirclePlay size={20} />
              Request a demo
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
