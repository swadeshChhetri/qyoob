import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "How long does AI implementation typically take?",
    answer:
      "Neural network deployment varies by complexity, typically ranging from 8-16 weeks. Simple implementations may be faster.",
    category: "Implementation",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We architect AI solutions across multiple sectors: Financial Services, Healthcare, Manufacturing, Retail, and more.",
    category: "Services",
  },
  {
    question: "How do you ensure AI system security?",
    answer:
      "Our AI defense matrix includes quantum-resistant encryption, multi-layer authentication, and continuous system audits.",
    category: "Security",
  },
  {
    question: "Can I customize the AI agent's personality?",
    answer:
      "Absolutely! You can choose from pre-built personalities or create completely custom ones to match your brand voice.",
    category: "Customization",
  },
  {
    question: "What support do you provide after implementation?",
    answer:
      "We offer 24/7 support, regular updates, and continuous optimization to ensure your AI agents perform at their best.",
    category: "Support",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start.",
    category: "Pricing",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Implementation",
    "Services",
    "Security",
    "Customization",
    "Support",
    "Pricing",
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section id="faq" className="bg-black text-white">
      <div className="">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
            Questions
          </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our AI agents and platform. Can't
            find the answer you're looking for?
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-lime-400 text-black shadow-lg shadow-lime-400/25"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black hover:border-lime-400/30 transition-all duration-300 overflow-hidden">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-start w-full p-6 text-left relative z-10"
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-lime-400 rounded-full flex-shrink-0" />
                      <span className="text-xs font-semibold text-lime-400 uppercase tracking-wide">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-lime-200 transition-colors leading-relaxed">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-lime-400/10 flex items-center justify-center group-hover:bg-lime-400/20 transition-colors">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-lime-400" />
                    ) : (
                      <Plus className="w-4 h-4 text-lime-400" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 relative z-10">
                        <div className="w-12 h-px bg-gradient-to-r from-lime-400 to-transparent mb-4" />
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-lime-400/5 to-green-400/5 border border-lime-400/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <Sparkles className="w-12 h-12 text-lime-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-6">
              Our team is here to help you get the answers you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-lime-400/25"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-lime-400 text-lime-400 hover:bg-lime-400/10 font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
