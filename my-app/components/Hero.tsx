"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="bg-[var(--green-dark)] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-8">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="relative inline-block lg:inline">
            {/* Typewriter effect for PORTFOLIO */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="h1-hero text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight text-[var(--cream)]"
            >
              <Typewriter
                words={["PORTFOLIO"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.h1>

            {/* Typewriter effect for FOLIO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute md:-right-6 md:top-8 opacity-20 text-[3rem] sm:text-[4rem] md:text-[6rem] top-1 md:left-70 left-20"
            >
              <h2
                className="
                  font-display 
                  text-transparent bg-clip-text 
                  bg-gradient-to-r from-yellow-300 to-yellow-500
                  transition-all duration-500
                  hover:from-yellow-500 hover:to-yellow-300
                "
              >
                <Typewriter
                  words={["FOLIO"]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={120}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
            </motion.div>
          </div>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-6 max-w-md mx-auto lg:mx-0 text-sm bg-blackPanel text-white p-4 rounded-sm"
          >
            I love design and anything related to art. I approach problems in a
            rational, pragmatic way and seek the simplest, most functional
            solutions possible.
          </motion.p>
        </div>

        {/* RIGHT SIDE IMAGE WITH GLASS EFFECT */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0"
        >
          <div className="relative w-60 sm:w-72 h-72 sm:h-96 lg:w-72 lg:h-96">

            {/* GLASS BOX BEHIND THE IMAGE */}
            <div
              className="
              absolute -left-6 -top-6
              
              bg-white/10 
              backdrop-blur-md 
              border border-white/20 
              shadow-lg
          
              "
            />

            {/* MAIN IMAGE */}
<Image
  src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
  alt="Green Theme Developer GIF"
  fill
  className="object-cover rounded-full"
  style={{
    filter: "hue-rotate(105deg) saturate(0.0) brightness(1.0)  contrast(1.1)",
    mixBlendMode: "lighten",
    opacity: "0.95"
  }}
/>










          </div>
        </motion.div>
      </div>
    </section>
  );
}
