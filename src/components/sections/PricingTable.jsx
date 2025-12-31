import React, { useState } from "react";
import { X } from "lucide-react";

const PricingTableSection = () => {
  const [billing, setBilling] = useState("monthly");

  const monthlyPlans = [
    {
      name: "Enterprise (Cloud Hosted)",
      price: "$5,000",
      period: "month",
      features: {
        queries: "20,000+ queries/month",
        docker: "One-click Docker deployment",
        sso: "SSO Authentication",
        tools: "Custom AI tools",
        onboarding: "White glove onboarding",
        support: "Priority support",
        rateLimit: "Up to 200 queries/minute",
        contracts: "SLA, MSA and DPA available",
      },
    },
    {
      name: "Enterprise (Self-hosted)",
      price: "N/A",
      period: "month",
      popular: true,
      features: {
        queries: "Unlimited queries",
        docker: "Self-hosted deployment",
        sso: "SSO Authentication",
        tools: "Custom AI tools",
        onboarding: "White glove onboarding",
        support: "Priority support",
        rateLimit: "No rate limits",
        contracts: "SLA, MSA and DPA available",
      },
    },
  ];

  const annualPlans = [
    {
      name: "Enterprise (Cloud Hosted)",
      price: "$50,000+",
      period: "year",
      features: { ...monthlyPlans[0].features },
    },
    {
      name: "Enterprise (Self-hosted)",
      price: "$100,000+",
      period: "year",
      popular: true,
      features: { ...monthlyPlans[1].features },
    },
  ];

  const plans = billing === "monthly" ? monthlyPlans : annualPlans;

  const featureLabels = {
    queries: "Queries",
    docker: "Deployment",
    sso: "SSO Authentication",
    tools: "Custom AI Tools",
    onboarding: "Onboarding",
    support: "Support",
    rateLimit: "Rate Limits",
    contracts: "Legal Agreements",
  };

  return (
    <section className="text-white py-16 sm:py-20 lg:py-28 bg-black">
      <div className="container mx-auto">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">
          Choose your
          <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-600">
            plan
          </span>
        </h1>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-10 gap-3">
          {["monthly", "annual"].map((mode) => (
            <button
              key={mode}
              onClick={() => setBilling(mode)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                billing === mode
                  ? "bg-lime-400 text-black"
                  : "bg-gray-800 text-white"
              }`}
            >
              {mode === "monthly" ? "Monthly" : "Annual"}
            </button>
          ))}
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-700">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-900">
            <div className="p-6 border-r border-gray-700">
              <h3 className="text-lg font-semibold text-gray-400">Features</h3>
            </div>

            {plans.map((plan, i) => (
              <div
                key={i}
                className={`p-6 text-center ${
                  plan.popular
                    ? "bg-lime-400/10 border-l-2 border-r-2 border-lime-400"
                    : ""
                } border-r border-gray-700`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-lime-400">
                    {plan.price}
                  </span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>

                {plan.popular && (
                  <div className="inline-block bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-semibold mt-2">
                    Popular
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Rows */}
          {Object.entries(featureLabels).map(([key, label], idx) => (
            <div
              key={key}
              className={`grid grid-cols-3 ${
                idx % 2 === 0 ? "bg-gray-900/50" : "bg-gray-900"
              }`}
            >
              <div className="p-4 border-r border-gray-700 flex items-center">
                <span className="font-medium text-gray-300">{label}</span>
              </div>

              {plans.map((plan, j) => (
                <div
                  key={j}
                  className={`p-4 flex justify-center items-center border-r border-gray-700 ${
                    plan.popular ? "bg-lime-400/5" : ""
                  }`}
                >
                  {plan.features[key] || <X className="text-gray-600" />}
                </div>
              ))}
            </div>
          ))}

          {/* CTA Row */}
          <div className="grid grid-cols-3 bg-gray-900 border-t border-gray-700">
            <div></div>
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`p-6 border-r border-gray-700 flex justify-center ${
                  plan.popular ? "bg-lime-400/10" : ""
                }`}
              >
                <button
                  className={`px-6 py-3 rounded-xl text-black font-semibold shadow-lg hover:scale-105 transition ${
                    plan.popular
                      ? "bg-lime-400 hover:bg-lime-600"
                      : "bg-lime-600 hover:bg-lime-700"
                  }`}
                >
                  Contact Us
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE CARDS */}
        <div className="md:hidden space-y-8 mt-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-700 p-6 bg-gray-900/60"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-lime-400">
                  {plan.price}
                </span>
                <span className="text-gray-400">/{plan.period}</span>
              </div>

              {/* Popular Tag */}
              {plan.popular && (
                <div className="inline-block bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Popular
                </div>
              )}

              {/* Features */}
              <div className="space-y-3">
                {Object.entries(featureLabels).map(([key, label]) => (
                  <div
                    key={key}
                    className="flex justify-between border-b border-gray-700 pb-2"
                  >
                    <span className="text-gray-300">{label}</span>
                    <span className="text-gray-200">
                      {plan.features[key] || <X className="text-gray-600" />}
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-3 rounded-xl font-semibold text-black bg-lime-400 hover:bg-lime-600 transition">
                Contact Us
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTableSection;
