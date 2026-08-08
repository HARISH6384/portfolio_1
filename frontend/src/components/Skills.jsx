import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaGitAlt, FaFigma
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-4xl mb-2" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-4xl mb-2" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-4xl mb-2" /> },
    { name: 'React', icon: <FaReact className="text-blue-400 text-4xl mb-2 animate-spin-slow" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-4xl mb-2" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-4xl mb-2" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500 text-4xl mb-2" /> },
    { name: 'Figma', icon: <FaFigma className="text-pink-500 text-4xl mb-2" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white" data-aos="fade-up">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gray-50 dark:bg-gray-700"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {skill.icon}
              <span className="text-lg font-semibold block">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
