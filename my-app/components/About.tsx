"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { steps } from "framer-motion";


// Type for AnimatedLine props
interface AnimatedLineProps {
  children: ReactNode;
  delay?: number;
}

// AnimatedLine for fade-up animation
function AnimatedLine({ children, delay = 0 }: AnimatedLineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="mb-3"
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[var(--cream)] overflow-hidden py-10 md:py-20"
    >
      {/* BACKGROUND OUTLINE TEXT */}
      <h1
        className="
          absolute right-0 md:top-40 top-140
          text-[80px] sm:text-[120px] md:text-[170px]
          font-bold opacity-10 leading-none 
          pointer-events-none select-none 
          text-[var(--green-dark)]
        "
      >
        HOPE<br />HOPE<br />HOPE
      </h1>

      <div
        className="
          container mx-auto px-4 sm:px-6 
          grid grid-cols-1 md:grid-cols-2 
          gap-10 md:gap-16 
          relative z-10
        "
      >
        {/* LEFT SIDE TEXT */}
        <div className="pt-5 md:pt-10">
          {/* Animated heading */}
          <AnimatedLine delay={0}>
            <h2
              className="
                text-4xl sm:text-5xl md:text-7xl 
                font-bold leading-tight 
                text-transparent bg-clip-text 
                bg-gradient-to-r 
                from-[var(--green-dark)] to-[var(--green-light)]
                transition-all duration-500 
                hover:from-[var(--green-light)] hover:to-[var(--green-dark)]
              "
            >
              Hello,<br />I’m Harish!
            </h2>
          </AnimatedLine>

          {/* Animated paragraph */}
          <AnimatedLine delay={0.3}>
            <p
              className="
                mt-4 text-[var(--green-dark)] 
                leading-relaxed 
                max-w-md text-base sm:text-lg
              "
            >
              I'm a passionate Mern Stack developer with experience building
              fast, responsive, and user-friendly web applications. I
              specialize in turning clean UI concepts into smooth, interactive
              digital experiences. I focus on writing high-quality code,
              delivering modern designs, and creating seamless user journeys.
            </p>
          </AnimatedLine>

          {/* Animated button */}
          <AnimatedLine delay={0.6}>
            <a
              href="https://www.linkedin.com/in/harish-r-a814672b8"
              target="_blank"
              className="
                inline-block mt-6 
                bg-[var(--mustard)] 
                text-[var(--green-dark)] 
                px-5 py-3 rounded-full 
                font-semibold shadow 
                text-sm sm:text-base
              "
            >
              LinkedIn
            </a>
          </AnimatedLine>
        </div>

        {/* RIGHT SIDE IMAGE BOX */}
        <div className="relative flex justify-center">
          <motion.div
            className="
              bg-[var(--green-dark)] 
              w-[220px] h-[300px] 
              sm:w-[260px] sm:h-[340px] 
              md:w-[300px] md:h-[380px] 
              rounded-lg relative overflow-hidden
            "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(34, 197, 94, 0.5)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="absolute top-4 left-4 right-4 h-2 bg-[var(--mustard)] rounded-full"
              animate={{ scaleX: [1, 1.1, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-4 left-4 right-4 h-2 bg-[var(--mustard)] rounded-full"
              animate={{ scaleX: [1, 1.05, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            />

            <motion.div
              className="absolute inset-0 flex justify-center items-center"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 rgba(255, 255, 255, 0)",
                  "0 0 15px rgba(255, 255, 255, 0.6)",
                  "0 0 0 rgba(255, 255, 255, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="
                  w-40 h-40 sm:w-48 sm:h-48 
                  bg-white rounded-full border-4 border-[var(--mustard)]
                  flex justify-center items-center relative overflow-hidden
                "
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(255, 193, 7, 0.5)",
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="https://media.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.gif"
                    alt="Computer Usage Animation - Developer Typing"
                    width={100}
                    height={100}
                    className="rounded-full object-cover filter hue-rotate-90 saturate-150"
                    style={{
                      filter: "hue-rotate(90deg) saturate(1.5)",
                    }}
                  />
                </motion.div>

                <motion.div
                  className="absolute bottom-6 right-6 w-1 h-4 bg-[var(--green-dark)]"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: steps(2),
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute top-8 right-8 text-[var(--mustard)] text-sm font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              console.log("Hello!");
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-8 text-[var(--green-light)] text-sm font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              &lt;div&gt;Code&lt;/div&gt;
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="h-20 sm:h-28 md:h-32"></div>
    </section>
  );
}
