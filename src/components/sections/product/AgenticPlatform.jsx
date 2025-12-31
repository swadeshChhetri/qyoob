import React from "react";
import Section from "../../layout/Section";
import MaxWrapper from "../../layout/MaxWrapper";

const SplitSection = () => {
  return (
    <Section className="bg-black text-white">
      <MaxWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          {/* LEFT SIDE – CONTENT */}
          <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Build agents in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
                minutes
              </span>{" "}
              not months
            </h1>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "Create multiple agents for any role or team",
                "Fine-tune sources and personality without code",
                "Get your assistants to handle advanced workflows",
                "Configure them to appear in tools like Slack",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2 h-2 bg-lime-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE – VIDEO */}
          <div className="relative w-full">
            <div
              className="
              rounded-2xl overflow-hidden bg-gradient-to-br
              from-gray-900 to-black border border-gray-800
              h-[220px] sm:h-[300px] md:h-[350px] lg:h-[325px]
            "
            >
              <video
                className="w-full h-full object-contain"
                loop
                autoPlay
                muted
                playsInline
              >
                <source src="/video/builtAgent.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-3 -right-3 w-16 sm:w-24 h-16 sm:h-24 bg-cyan-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-3 -left-3 w-20 sm:w-32 h-20 sm:h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </MaxWrapper>
    </Section>
  );
};

export default SplitSection;
