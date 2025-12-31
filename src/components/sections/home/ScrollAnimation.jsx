import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollAnimationSection = () => {
  const sectionRef = useRef(null);

  // Track scroll progress inside this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Lines scaling progressively
  const scaleX1 = useTransform(scrollYProgress, [0, 0.33], [0, 1]);
  const scaleX2 = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);
  const scaleX3 = useTransform(scrollYProgress, [0.66, 1], [0, 1]);

  // Image change (fade between 3 images)
  const images = [
    "image/fullchart.png",
    "image/createagent.png",
    "image/hero.webp",
  ];

  const currentIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, images.length - 1]
  );

  return (
    <section ref={sectionRef} className="h-[200vh] text-black">
      {/* Sticky pinned content */}
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center items-start space-y-6">
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Interactive Scroll
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
              Animation
            </span>
          </h2>

          {/* Progressive Lines */}
          <div className="flex space-x-6 mt-4">
            {[scaleX1, scaleX2, scaleX3].map((scaleX, i) => (
              <div
                key={i}
                className="h-1 w-32 bg-gray-300 rounded-full overflow-hidden"
              >
                <motion.div
                  style={{ scaleX }}
                  className="h-full bg-lime-400 origin-left"
                />
              </div>
            ))}
          </div>

          <p className="text-gray-600 max-w-md mt-4">
            Scroll to see the lines fill progressively in deep green as the
            image changes.
          </p>
        </div>

        {/* Right Side: Image Frame */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <div className="w-[99%] h-[400px] relative bg-black rounded-2xl border-[8px] border-[#1f1f1f] shadow-[0_0_30px_rgba(0,255,0,0.15)] flex items-center justify-center overflow-hidden">
            {/* Inner screen */}
            <div className="absolute top-2 left-2 right-2 bottom-2 bg-[#0a0a0a] rounded-xl border border-[#333] overflow-hidden">
              {images.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Scroll Animation"
                  className="absolute w-full h-full object-cover rounded-lg"
                  style={{
                    opacity: useTransform(
                      currentIndex,
                      [i - 0.5, i, i + 0.5],
                      [0, 1, 0]
                    ),
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              ))}
            </div>

            {/* TV stand/base line */}
            <div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-32 h-[6px] bg-[#1f1f1f] rounded-full shadow-[0_2px_10px_rgba(0,255,0,0.2)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollAnimationSection;
