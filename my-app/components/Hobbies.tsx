"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { FaCode, FaFilm, FaMusic, FaPlane } from "react-icons/fa"; // hobby icons

export default function Hobbies() {
  const items = [
    { name: "Coding", icon: <FaCode /> },
    { name: "Movies", icon: <FaFilm /> },
    { name: "Music", icon: <FaMusic /> },
    { name: "Traveling", icon: <FaPlane /> },
  ];

  // AnimatedLine helper
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
        className="mb-4 flex items-center gap-3"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <section id="education">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:block lg:-mt-[400px] lg:ml-[1100px]"
      >
        {/* Section Title */}
        <AnimatedLine delay={0}>
          <h2
            className="text-3xl sm:text-4xl font-extrabold font-playfair tracking-tight text-[#F1A900] mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hobbies
          </h2>
        </AnimatedLine>

        {/* List */}
        <div className="mt-6 space-y-6 sm:space-y-8">
          {items.map((item, index) => (
            <AnimatedLine key={item.name} delay={0.2 + index * 0.2}>
              {/* Icon */}
              <span className="text-[#F1A900] text-xl sm:text-2xl">
                {item.icon}
              </span>
              {/* Text */}
              <p className="text-[#F6F1E5] font-semibold text-sm sm:text-base">
                {item.name} 
              </p>
            </AnimatedLine>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
