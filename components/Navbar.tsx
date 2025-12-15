"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHero, setShowHero] = useState(false);

  const handleLinkClick =
    (section: string) =>
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();

      if (section === "resume") {
        const link = document.createElement("a");
        link.href = "/images/harish.pdf";
        link.download = "Harish_Resume.pdf";
        link.click();
        setIsOpen(false);
        return;
      }

      const element = document.getElementById(section);
      if (element) element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    };

  const sections = ["about", "project", "resume", "skills"];

  return (
    <nav className="bg-[var(--green-dark)] text-cream px-6 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* LOGO + NAME */}
        <div className="flex items-start gap-3 relative">
          <div className="w-8 h-8 rounded-sm bg-[var(--mustard)] flex items-center justify-center text-[var(--green-dark)] font-semibold">
            ✦
          </div>

          {/* NAME */}
          <div className="relative">
            <div
              onClick={() => {
                setShowHero(true);
                setTimeout(() => setShowHero(false), 3500);
              }}
              className="
                cursor-pointer
                font-extrabold font-[CooperBlack] text-4xl
                bg-gradient-to-r from-white to-yellow-500
                bg-clip-text text-transparent  transition-all duration-500 hover:from-yellow-500 hover:to-white
              "
            >
              Harish
            </div>

            {/* HERO ANIMATION */}
            <AnimatePresence>
              {showHero && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.85 }}
                  animate={{ opacity: 1, y: 10, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-2"
                >
                  {/* Hi bubble */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="
                      mb-1 px-3 py-1
                      bg-yellow-400 text-green-900
                      rounded-full font-bold text-xs shadow-lg
                      text-center 
                    "
                  >
                    Hi 👋
                  </motion.div>

                  {/* HERO BODY */}
                  <div className="flex flex-col items-center">

                    {/* HEAD */}
                    <div className="relative w-8 h-8 rounded-full bg-[#f2c9ac]">
                      {/* Hair */}
                      <div className="absolute -top-1 left-0 w-full h-3 bg-[#2b2b2b] rounded-t-full" />

                      {/* Eyes */}
                      <div className="absolute top-3 left-2 w-1 h-1 bg-black rounded-full" />
                      <div className="absolute top-3 right-2 w-1 h-1 bg-black rounded-full" />

                      {/* Smile */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-black rounded-full" />
                    </div>

                    {/* BODY (Hero chest) */}
                    <div className="relative w-10 h-12 bg-[#4f6f52] rounded-md mt-1">
                      {/* Left arm */}
                      <div className="absolute -left-2 top-2 w-2 h-7 bg-[#f2c9ac] rounded-full" />

                      {/* Right arm waving */}
                      <motion.div
                        className="absolute -right-2 top-2 w-2 h-7 bg-[#f2c9ac] rounded-full origin-top"
                        animate={{ rotate: [0, 35, -25, 35, 0] }}
                        transition={{ duration: 1, repeat: 2 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 text-md font-extrabold ">
          {sections.map((section) => (
            <Link
              key={section}
              href={section === "resume" ? "/resume.pdf" : `#${section}`}
              onClick={handleLinkClick(section)}
              className="
                relative font-extrabold
                after:absolute after:w-0 after:h-[2px] after:bg-[var(--mustard)]
                after:left-0 after:-bottom-1 
                after:transition-all after:duration-300
                hover:after:w-full
                bg-gradient-to-r from-white to-yellow-500
                bg-clip-text text-transparent  transition-all duration-500 hover:from-yellow-500 hover:to-white
              "
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}

          <Link href="#contact" onClick={handleLinkClick("contact")}>
            <button className="
              bg-[var(--mustard)] text-[var(--green-dark)]
              px-4 py-2 rounded-full font-semibold
              transition-all duration-300
              hover:scale-105 hover:shadow-lg
            ">
              Get in touch!
            </button>
          </Link>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
