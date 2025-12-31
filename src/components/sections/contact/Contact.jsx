import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import MaxWrapper from "../../layout/MaxWrapper";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "info@qyoob.ai",
      subtext: "We'll reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+16158146524",
      subtext: "Mon to Fri, 10am to 7pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "401 Ronan Way, Spring Hill, Tennessee",
      subtext: "Come say hello at our office",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/mnneeyrr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setIsSubmitted(true);
      e.target.reset();
    } catch (err) {
      setError("Something went wrong. Please try again later.", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-16 sm:py-20 lg:py-28"
    >
      <MaxWrapper>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Get in touch with
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
              us
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Whether you’re exploring AI agents or need help with onboarding, our
            team is ready to support you.
          </p>
        </motion.div>

        {/* Grid Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16"
        >
          {/* Contact info cards */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 sm:space-y-8"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 sm:p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black hover:border-lime-400/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-lime-400/10 flex items-center justify-center group-hover:bg-lime-400/20 transition">
                      <Icon className="w-6 h-6 text-lime-400" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-lime-400 font-medium">
                        {item.description}
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Stats card */}
            {/* <motion.div
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-2xl border border-lime-400/20 bg-gradient-to-br from-lime-400/5 to-transparent"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-lime-400 mb-2">24/7</div>
                <p className="text-gray-300 text-sm">Response Time</p>
                <p className="text-gray-400 text-xs mt-1">Average reply under 6 hours</p>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="relative rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 lg:p-12 shadow-xl">
              {/* Glow */}
              <div className="absolute -top-3 -right-3 w-16 sm:w-24 h-16 sm:h-24 bg-lime-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-3 -left-3 w-20 sm:w-32 h-20 sm:h-32 bg-green-500/10 rounded-full blur-xl"></div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Send us a message
              </h3>

              <p className="text-gray-400 mb-8 text-sm sm:text-base">
                Fill out the form below and we’ll get back to you ASAP.
              </p>

              {/* Success Message */}

              {/* Error Message */}
              {error && (
                <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-300 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    required
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 resize-none"
                  />
                </div>

                {/* Honeypot */}
                <input type="text" name="_gotcha" className="hidden" />

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-lime-400 hover:bg-lime-500 disabled:opacity-60 text-black font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-lime-500/20 flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </motion.button>
              </form>

              {isSubmitted && (
                <div className="mt-6 rounded-xl border border-lime-400/30 bg-lime-400/10 p-4 text-lime-300 text-sm">
                  Your message has been submitted successfully. Our team will
                  get back to you shortly.
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </MaxWrapper>
    </section>
  );
}
