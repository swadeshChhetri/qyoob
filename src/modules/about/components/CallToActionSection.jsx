import React from "react";
import { ArrowRight } from "lucide-react";
import Section from "../../../components/layout/Section";
import MaxWrapper from "../../../components/layout/MaxWrapper";
import { Link } from "react-router-dom";

export default function CallToActionSection() {
  return (
    <Section className="bg-black relative">
      <MaxWrapper className="flex flex-col items-center text-center space-y-10">
        {/* ---------- HEADLINE ---------- */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white max-w-4xl">
          Ready to transform your organization with AI?
        </h2>

        {/* ---------- CTA BUTTON ---------- */}
        <Link
          to="/contact"
          className="
            inline-flex items-center gap-3
            rounded-xl
            bg-lime-400
            px-7 py-3
            text-black font-medium
            transition-all duration-200
            hover:bg-lime-300
            focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400
          "
        >
          Get in Touch
          <ArrowRight size={18} />
        </Link>
      </MaxWrapper>
    </Section>
  );
}
