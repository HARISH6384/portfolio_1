"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-[var(--green-deep)] text-black py-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-4">© {new Date().getFullYear()} Harish — Portfolio</div>
        <div className="text-sm opacity-80">Built with Next.js & Tailwind</div>
      </div>
    </motion.footer>
  );
}
