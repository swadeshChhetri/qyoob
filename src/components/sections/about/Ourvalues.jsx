import Section from "../../layout/Section";
import MaxWrapper from "../../layout/MaxWrapper";

/* -----------------------------
   Icons (isolated, reusable)
------------------------------ */
function ConnectIcon() {
  return (
    <svg
      className="h-24 w-24"
      fill="none"
      stroke="black"
      strokeWidth="3"
      viewBox="0 0 100 100"
    >
      <circle cx="40" cy="50" r="25" />
      <circle cx="60" cy="50" r="25" />
      <circle cx="50" cy="50" r="25" />
    </svg>
  );
}

function ChallengeIcon() {
  return (
    <svg
      className="h-24 w-24"
      fill="none"
      stroke="black"
      strokeWidth="3"
      viewBox="0 0 100 100"
    >
      <line x1="50" y1="10" x2="50" y2="90" />
      <line x1="10" y1="50" x2="90" y2="50" />
      <line x1="20" y1="20" x2="80" y2="80" />
      <line x1="80" y1="20" x2="20" y2="80" />
    </svg>
  );
}

function OwnIcon() {
  return (
    <svg
      className="h-24 w-24"
      fill="none"
      stroke="black"
      strokeWidth="3"
      viewBox="0 0 100 100"
    >
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        return (
          <line
            key={i}
            x1="50"
            y1="10"
            x2="50"
            y2="0"
            transform={`rotate(${angle} 50 50)`}
          />
        );
      })}
    </svg>
  );
}

/* -----------------------------
   Data (single source of truth)
------------------------------ */
const VALUES = [
  {
    id: "responsibility",
    title: "Responsibility",
    description:
      "Security, reliability, and governance are at the center of everything we build. Qyoob ensures that data remains protected, policies are enforced, and every AI-driven action can be traced, explained, and trusted. This commitment enables organizations to scale confidently and compliantly.",
    Icon: ConnectIcon,
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description:
      "Work transforms when people and systems connect. Qyoob unifies workflows, knowledge, and teams across the enterprise — helping organizations operate as one. This spirit of collaboration extends internally and externally, driving partnerships built on shared success and mutual growth.",
    Icon: ChallengeIcon,
  },
  {
    id: "alwaysImproving",
    title: "Always Improving",
    description:
      "We believe progress is continuous. Qyoob evolves with every insight, interaction, and iteration. Our mindset is to learn consistently, improve rapidly, and innovate boldly — ensuring customers stay ahead in a world that never stops changing.",
    Icon: OwnIcon,
  },
];

/* -----------------------------
   Card Component
------------------------------ */
function ValueCard({ title, description, Icon }) {
  return (
    <div
      className="
        group rounded-2xl
        border border-white/10
        bg-white/5
        p-8 text-center
        transition-all duration-300
        hover:-translate-y-1
        hover:border-lime-400/30
        hover:shadow-[0_0_40px_-15px_rgba(163,255,102,0.25)]
      "
    >
      <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-lime-500">
        <Icon />
      </div>

      <h3 className="mb-4 text-3xl font-medium text-lime-300">{title}</h3>

      <p className="text-md font-semibold leading-tight text-gray-100 transition-colors group-hover:text-white">
        {description}
      </p>
    </div>
  );
}

/* -----------------------------
   Main Section
------------------------------ */
export default function OurValuesSection() {
  return (
    <Section size="default" className="bg-black text-white">
      <MaxWrapper>
        {/* Heading */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">The Principles That Drive Us</h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value) => (
              <ValueCard key={value.id} {...value} />
            ))}
          </div>
        </div>
      </MaxWrapper>
    </Section>
  );
}
