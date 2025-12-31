import React, { useState } from "react";
import { motion } from "framer-motion";

const DataSourceImageSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return; // Disable for mobile

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;

    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-28">
      <div className="w-full">
        <motion.div
          className="
            relative max-w-5xl mx-auto rounded-xl 
            bg-[#0a0a0a] border border-[#333]
            hover:border-lime-400/40
            shadow-lg hover:shadow-[0_0_50px_-10px_rgba(163,255,102,0.4)]
            overflow-hidden
            p-2 sm:p-4
          "
          style={{ perspective: 1200 }}
          animate={{
            rotateX: mousePos.y,
            rotateY: mousePos.x,
            scale: mousePos.x || mousePos.y ? 1.02 : 1,
          }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="/image/fullchart.png"
            alt="Full Chart"
            className="
              w-full max-w-full 
              rounded-lg object-contain select-none pointer-events-none
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DataSourceImageSection;
