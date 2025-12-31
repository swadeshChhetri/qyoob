import React, { useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, TrendingUp, Clock, Users, Target } from "lucide-react";
import Section from "../../layout/Section";
import MaxWrapper from "./../../layout/MaxWrapper";

const statsData = [
  {
    title: "Global law firm automates compiling and analysis of legal docs",
    value: 62,
    suffix: "%",
    label: "time savings",
    icon: Clock,
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "European fintech scaleup uses AI agent for new hire onboarding",
    value: 10,
    suffix: "h",
    label: "per week/employee saved",
    icon: Users,
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
  },
  {
    title:
      "Leading Swedish mining manufacturer automates R&D analysis workflows",
    value: 50,
    suffix: "%",
    label: "time savings",
    icon: TrendingUp,
    gradient: "from-lime-500 to-pink-500",
    bgColor: "bg-lime-500/10",
  },
  {
    title: "Industrial market leader uses AI agent to augment customer support",
    value: 2,
    suffix: "x",
    label: "number of issues resolved",
    icon: Target,
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
  },
];

// Framer Motion CountUp Component
const CountUp = ({ value, suffix = "", duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: duration * 1000,
  });

  const displayValue = useTransform(spring, (latest) => {
    return Math.floor(latest) + suffix;
  });

  React.useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [spring, value, isInView]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const StatsSection = () => {
  return (
    <Section className="bg-black text-black">
      <MaxWrapper>
        <div className="text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white bg-clip-text text-transparent"
          >
            Real Impact, Measured
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
              Results
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            See how industry leaders are transforming their operations with
            AI-powered solutions
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {statsData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden text-start"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-0 transition-opacity duration-300 rounded-3xl" />

                  <div className="relative bg-[#111] rounded-3xl p-1 transition-all duration-300">
                    <div className="bg-[#111] rounded-3xl p-8 flex items-stretch min-h-[220px]">
                      {/* Left Section - Content */}
                      <div className="flex-1 pr-6 flex flex-col justify-between">
                        <div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className={`inline-flex items-center justify-center p-3 rounded-2xl bg-lime-500 mb-4`}
                          >
                            <IconComponent className="w-6 h-6" />
                          </motion.div>
                          <h3 className="text-xl font-semibold leading-tight text-gray-100 group-hover:text-white transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        {/* <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors mt-4">
                          <span className="text-sm font-medium">
                            Case Study
                          </span>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div> */}
                      </div>

                      {/* Right Section - Stats */}
                      <div className="w-32 flex-shrink-0 flex flex-col items-center justify-center text-center border-l border-gray-800 pl-6 ml-6">
                        <div
                          className={`text-4xl font-bold bg-gradient-to-r bg-lime-400 bg-clip-text text-transparent mb-2`}
                        >
                          <CountUp
                            value={item.value}
                            suffix={item.suffix}
                            duration={2}
                          />
                        </div>
                        <p className="text-sm text-gray-400 font-medium leading-tight">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-3 mx-auto"
          >
            View All Case Studies
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </motion.div> */}
        </div>
      </MaxWrapper>
    </Section>
  );
};

export default StatsSection;
