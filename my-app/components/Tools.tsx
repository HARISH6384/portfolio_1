"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Experience() {
  const exp = [
    { title: "Responsible" },
    { title: "Well-organized" },
    { title: "Team work" },
    { title: "Time management" },
    { title: "Creative" },
    { title: "Initiative and anato" },
  ];

  function AnimatedLine({
    children,
    delay = 0,
  }: {
    children: ReactNode;
    delay?: number;
  }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      style={{ perspective: "1000px" }}
      className="hidden lg:block"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 1,
          rotateX: [0, 10, -10, 0],
          y: [0, -2, 2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "top center" }}
        className="
          absolute
          lg:-mt-[30px]
          lg:top-4 lg:right-10
          lg:w-[300px]
          bg-[#FFCF58]
          text-[#233729]
          p-8
          rounded-md
        "
      >
        {/* Title */}
        <AnimatedLine delay={0}>
          <h2
            className="
              text-[32px]
              font-bold mb-6
              font-[CooperBlack]
            "
          >
            Soft Skills
          </h2>
        </AnimatedLine>

        {/* Skills List */}
        <div className="space-y-2">
          {exp.map((e, index) => (
            <AnimatedLine key={e.title} delay={0.2 + index * 0.15}>
              <div className="flex gap-4">
                <span className="text-[#C57231] font-bold text-xl">*</span>
                <p className="font-semibold text-lg">{e.title}</p>
              </div>
            </AnimatedLine>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
