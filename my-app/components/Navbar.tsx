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

  const navLinkClass = `
    relative font-extrabold
    after:absolute after:w-0 after:h-[2px] after:bg-[var(--mustard)]
    after:left-0 after:-bottom-1
    after:transition-all after:duration-300
    hover:after:w-full
    bg-gradient-to-r from-white to-yellow-500
    bg-clip-text text-transparent
    transition-all duration-500
    hover:from-yellow-500 hover:to-white
  `;

  return (
    <nav className="bg-[var(--green-dark)] text-cream px-6 py-6 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-start gap-3 relative">
          <div className="w-8 h-8 rounded-sm bg-[var(--mustard)] flex items-center justify-center text-[var(--green-dark)] font-semibold">
            ✦
          </div>

          <div className="relative">
            <div
              onClick={() => {
                setShowHero(true);
                setTimeout(() => setShowHero(false), 3500);
              }}
              className="
                cursor-pointer font-extrabold font-[CooperBlack] text-4xl
                bg-gradient-to-r from-white to-yellow-500
                bg-clip-text text-transparent
                transition-all duration-500
                hover:from-yellow-500 hover:to-white
              "
            >
              Harish
            </div>

            <AnimatePresence>
              {showHero && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.85 }}
                  animate={{ opacity: 1, y: 10, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-2"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mb-1 px-3 py-1 bg-yellow-400 text-green-900 rounded-full font-bold text-xs shadow-lg"
                  >
                    Hi 👋
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-8 text-md">
          {sections.map((section) => (
            <Link
              key={section}
              href={section === "resume" ? "/resume.pdf" : `#${section}`}
              onClick={handleLinkClick(section)}
              className={navLinkClass}
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

        {/* MOBILE TOGGLE */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU – desktop style clone */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="
        md:hidden
        absolute left-0 top-full
        w-full
        bg-[var(--green-dark)]
        text-cream
        z-50
        
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col gap-6 text-lg">
          {sections.map((section) => (
            <Link
              key={section}
              href={section === 'resume' ? '/resume.pdf' : `#${section}`}
              onClick={handleLinkClick(section)}
              className={navLinkClass}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}

          <Link href="#contact" onClick={handleLinkClick("contact")}>
            <button
              className="
                bg-[var(--mustard)] text-[var(--green-dark)]
                px-4 py-2 rounded-full font-semibold
                transition-all duration-300
                hover:scale-105 hover:shadow-lg
              "
            >
              Get in touch!
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>


    </nav>
  );
}
