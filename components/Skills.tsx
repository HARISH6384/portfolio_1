"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiMongodb,
  SiDocker,
  SiTypescript,
  
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { FiZap } from "react-icons/fi";
import { IconType } from "react-icons";

const LINE = "#233729"; // main outline
const ACCENT = "#F1A900"; // yellow dot

// Added TypeScript types only
function SkillCard({
  Icon,
  label,
}: {
  Icon: IconType;
  label: string;
}) {
  return (
    <div className="flex mt-10 sm:mt-20 flex-col items-center gap-3 w-20 sm:w-28 min-w-[80px] sm:min-w-[110px]">
      <div className="flex items-center justify-center relative">
        <Icon size={55} className="sm:size-[80px]" color={LINE} />
        <span
          className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full"
          style={{ backgroundColor: ACCENT, top: "6px", right: "6px" }}
        ></span>
      </div>
      <span className="text-[10px] sm:text-[12px] uppercase tracking-wide text-[#233729] font-semibold text-center">
        {label}
      </span>
    </div>
  );
}

export default function SkillsSlider() {
  const skills: { Icon: IconType; label: string }[] = [
    { Icon: FaReact, label: "React" },
    { Icon: FaHtml5, label: "HTML" },
    { Icon: SiJavascript, label: "JavaScript" },
    { Icon: BsBootstrap, label: "Bootstrap" },
    { Icon: SiTailwindcss, label: "Tailwind" },
    { Icon: SiNextdotjs, label: "Next.js" },
    { Icon: SiNestjs, label: "Nest.js" },
    { Icon: FaNodeJs, label: "Node.js" },
    { Icon: FaGitAlt, label: "Git" },
    { Icon: FiZap, label: "Thunder" },
    { Icon: FaGithub, label: "GitHub" },
    { Icon: SiMongodb, label: "MongoDB" },
    { Icon: SiDocker, label: "Docker" },
    { Icon: SiTypescript, label: "TypeScript" },
  ];

  const looped = [...skills, ...skills];

  return (
    <section
      id="skills"
      className="
        w-full 
        bg-[#F6F1E5] 
        px-2 sm:px-4 
        py-10 
        rounded-lg
      "
    >
      <h2
        className="
          text-[26px] sm:text-[60px] 
          font-bold 
          text-[#233729] 
          mt-40 sm:mt-80 
          text-center 
          font-[Rye]

        "
      >
        Skills
      </h2>

      <div className="skills-wrapper overflow-hidden mt-6 sm:mt-10">
        <motion.div
          className="skills-track flex gap-6 sm:gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {looped.map((s, idx) =>
            <SkillCard key={idx} Icon={s.Icon} label={s.label} />
          )}
        </motion.div>
      </div>
    </section>
  );
}
