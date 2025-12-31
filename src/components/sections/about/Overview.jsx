import React from "react";
import MaxWrapper from "./../../layout/MaxWrapper";
import Section from "../../layout/Section";

/* -----------------------------
   Main Section
------------------------------ */
export default function OverviewSection() {
  return (
    <Section
      id="overview"
      className="relative overflow-hidden bg-black text-white py-20"
    >
      <MaxWrapper>
        {/* Header */}
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
            Powering the future of enterprise
            <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
              AI
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Qyoob is where enterprises activate powerful AI agents to transform
            work. Our goal is simple: amplify human capability through true
            superintelligence. And we’re making it real—uniting data, tools, IT,
            and business teams with secure AI that scales across the enterprise.
          </p>
        </div>

        {/* Visual */}
        <div className="mx-auto mt-20 max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-black bg-[#151515] aspect-[16/8]">
            <img
              src="/image/qyoobTeam.jpg"
              alt="Enterprise AI platform overview"
              loading="lazy"
              className="h-full w-full object-fill"
            />
          </div>
        </div>

  
        {/* Narrative Sections */}
        <div className="mx-auto mt-24">
          <div className="space-y-24">
            {/* Block 1 */}
            <section className="space-y-8">
              <h3 className="text-3xl font-semibold leading-tight">
                We’re creating a future where bold ideas grow, and progress
                accelerates.
              </h3>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                From accelerating clinical innovation to speeding up product
                delivery to expanding financial insight, organizations are
                reinventing their most valuable operations for the age of AI
                with Qyoob. Our unified platform enables enterprises to design,
                launch, and oversee autonomous AI agents—anchored in company
                knowledge and powered by advanced language models. With Qyoob,
                teams move beyond automation and into intelligent execution.
                Processes become predictive, flexible, and transparent.
                Information becomes immediate and actionable. Qyoob gives global
                enterprises the foundation to scale AI confidently and transform
                work across every function—securely, responsibly, and with
                measurable impact.
              </p>
            </section>

            {/* Block 2 */}
            <section className="space-y-8">
              <h3 className="text-3xl font-semibold leading-tight">
                Our Commitment
              </h3>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Qyoob is creating AI that radically shortens the distance
                between imagination and execution. Innovation is no longer gated
                by complexity, capacity, or speed — the barriers are
                disappearing. Today, teams across the enterprise can rapidly
                build intelligent solutions that deliver precise insights, solve
                critical problems, and execute meaningful work — all while
                operating within the guardrails of brand, policy, security, and
                regulation.
                <br />
                <br />
                With Qyoob, organizations aren’t simply reshaping workflows to
                achieve dramatic productivity gains, unify knowledge, and
                accelerate time to market — they’re elevating the people behind
                the work. Individuals are learning faster, collaborating more
                effectively, and advancing their own performance in ways that
                unlock new levels of possibility.
                <br />
                <br />
                From the earliest vision behind Qyoob to the shared purpose that
                drives our entire team today, our commitment is to put people at
                the center of every breakthrough. We empower individuals to
                build their own solutions, tackle complex challenges, and
                achieve outcomes once thought out of reach — with speed,
                confidence, and clarity.
                <br />
                <br />
                We’re growing across every discipline, and if you believe in a
                future where AI amplifies human potential at scale, we’d love to
                build that future together.
              </p>
            </section>
          </div>
        </div>
      </MaxWrapper>
    </Section>
  );
}
