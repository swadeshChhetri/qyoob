import { Lock, ShieldCheck, FileText } from "lucide-react";

const SecurityComplianceSection = () => {
  return (
    <section className="bg-black px-6 py-32">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Security & Compliance
          </h2>
          <p className="mt-4 text-gray-400 text-xl">
            Enterprise-grade security built in from day one
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Auth */}
          <SecurityCard
            icon={<Lock />}
            title="Authentication & Authorization"
            items={[
              "SSO integration (SAML, OIDC)",
              "Role-based access control",
              "API key management",
              "OAuth 2.0 support",
            ]}
          />

          {/* Data Security */}
          <SecurityCard
            icon={<ShieldCheck />}
            title="Data Security"
            items={[
              "End-to-end encryption",
              "Data residency controls",
              "Secure credential storage",
              "Audit logging",
            ]}
          />

          {/* Compliance */}
          <SecurityCard
            icon={<FileText />}
            title="Compliance"
            items={[
              "SOC 2 Type II ready",
              "GDPR compliant",
              "HIPAA compatible",
              "Configurable retention policies",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const SecurityCard = ({ icon, title, items }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
        {icon}
      </div>

      <h3 className="mt-6 text-lg font-semibold text-white">
        {title}
      </h3>

      <ul className="mt-6 space-y-3 text-gray-300">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 text-lime-400">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecurityComplianceSection;
