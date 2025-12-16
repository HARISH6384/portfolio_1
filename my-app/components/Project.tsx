"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projectCards = [
    {
      id: 1,
      title: "Flim Flix",
      url: "https://flim-flix-nine.vercel.app/",
      img: "/images/flimflix.png",
      description: "Developed FilmFlix, a modern movie browsing website using React.js, Vite, and Tailwind CSS, with real-time data fetched from the TMDB API.",
      tech: "React.Js, Node.Js, MongoDB",
      back:"  Users can explore trending, popular,and top-rated movies with dynamic content (titles,posters, ratings, overviews) and enjoy a fast, mobile friendly UI with smooth navigation.."
    },
    {
      id: 2,
      title: "Travel Pro",
      url: "https://travel-pro-2.vercel.app/",
      img: "/images/travel.png",
      description: " Built with React.js andTailwind CSS, Travel Go is a modern, mobile-friendly platform that shares travel experiences, destination guides, and tips to inspire fellow travelers",
      tech: "React.Js, Node.Js, MongoDB",
      back:"Component-based architecture withsmooth routing, categorized blogs (Destinations,Tips, Culture, etc.), and a fast, responsive UI using utility-first styling"
    },
    {
      id: 3,
      title: "Project Three",
      img: "https://via.placeholder.com/400x200.png?text=Project+Three",
      description: "On Progress",
    
    },
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
    <section id="project" className="py-16 sm:py-20 mt-10 sm:mt-20 bg-[#f6f1e7]">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <AnimatedLine delay={0}>
          <h2 className="text-3xl sm:text-[50px] font-[Rye] font-extrabold  text-[#233729]  text-center mb-10 sm:mb-12">
            Projects
          </h2>
        </AnimatedLine>

        {/* MOBILE RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-16">
          {projectCards.map((project, index) => (
            <AnimatedLine key={project.id} delay={0.2 + index * 0.2}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="group perspective w-full max-w-[320px] sm:w-80 sm:h-96 h-[420px] mx-auto">
                  <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-xl shadow-xl">

                    {/* FRONT */}
                    <div className="absolute w-full h-full rounded-xl overflow-hidden [backface-visibility:hidden] bg-white flex flex-col">
                      <div className="h-1/2">
                        <img
                          src={project.img}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="h-1/2 p-4 flex flex-col bg-[#233729] justify-between">
                        <div>
                          <h3 className="text-lg sm:text-xl font-extrabold mb-2 text-white">
                            {project.title}
                          </h3>
                          <p className="text-[#F1A900] font-bold text-sm">
                            {project.description}
                          </p>
                        </div>
                        <p className="mt-2 text-[#F1A900] font-bold text-xs">{project.tech}</p>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="absolute w-full h-full bg-[#233729] text-white rounded-xl flex flex-col items-center justify-center p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <h3 className="text-lg sm:text-xl font-bold mb-4">{project.title}</h3>
                      <p className="mb-6 text-center text-sm sm:text-base">{project.back}</p>
                      <button className="px-5 py-2 sm:px-6 sm:py-2 bg-cyan-400 text-black rounded-md font-semibold hover:bg-cyan-500 transition">
                        View Project
                      </button>
                    </div>

                  </div>
                </div>
              </a>
            </AnimatedLine>
          ))}
        </div>
      </div>
    </section>
  );
}
