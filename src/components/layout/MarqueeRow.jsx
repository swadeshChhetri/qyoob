import { motion } from "framer-motion";

export function MarqueeRow({ items, direction = "left", duration = 40 }) {
  return (
    <motion.div
      className="flex w-max gap-6"
      animate={{
        x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
      }}
    >
      {[...items, ...items].map((tool, idx) => (
        <motion.div
          key={`${tool.name}-${idx}`}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex min-w-[220px] items-center gap-4
                       rounded-2xl border border-slate-200
                       bg-black px-5 py-4 backdrop-blur"
        >
          <div
            className="flex size-12 items-center justify-center
                            rounded-lg bg-white shadow-sm p-2"
          >
            <img
              src={tool.icon}
              alt={tool.name}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </div>

          <span className="text-sm font-medium text-white">{tool.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
