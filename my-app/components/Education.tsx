"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Education() {
  const items = [
    {
      year: "2022 – 2025",
      school: "Hindusthan college of Arts & Science",
      desc: "Bsc-Information Technology",
    },
    {
      year: "2021 – 2022",
      school: "Corporation Higher Secondary School",
      desc: "Computer Science",
    },
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
        className="mb-4"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <section id="#education">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="
          bg-[#233729] text-[#F6F1E5] 
          px-4 sm:px-6 
          py-8 
          h-auto md:h-[400px] 
          rounded-md w-full
        "
      >
        {/* Animated section title */}
        <AnimatedLine delay={0}>
          <h2
            className="
              text-3xl sm:text-4xl 
              font-extrabold font-playfair 
              tracking-tight text-[#F1A900] 
              mb-6
            "
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Education
          </h2>
        </AnimatedLine>

        <div className="mt-6 space-y-6 sm:space-y-8">
          {items.map((i, index) => (
            <AnimatedLine key={i.school} delay={0.2 + index * 0.2}>
              <div
                className="
                  flex 
                  gap-3 sm:gap-4 
                  items-start
                "
              >
                <span className="text-[#F1A900] font-bold text-lg">*</span>

                <div className="flex flex-col sm:flex-row sm:space-x-5">
                  <p className="text-[#F6F1E5] font-semibold text-sm sm:text-base">
                    {i.year}
                  </p>

                  <div>
                    <p className="font-bold text-sm sm:text-base">{i.school}</p>
                    <p className="text-xs sm:text-sm opacity-80">{i.desc}</p>
                  </div>
                </div>
              </div>
            </AnimatedLine>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
