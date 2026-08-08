import React from "react";
import bg from "../assets/Shadows.jpg";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4">
      {/* Animated Background */}
      <div
        className="absolute inset-0 animate-bgpan bg-[length:200%_200%]
                   bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 mix-blend-multiply z-0"
      />

      {/* Overlay Image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-25 z-0"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6
                       bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent">
          Hi, I'm Harish
        </h1>
           <div className="text-center space-y-4 px-4 z-10">
        
        <p className="text-xl">
          <Typewriter
            words={['Frontend Developer', 'Backend Developer', 'React Enthusiast']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <a
          href="#projects"
          className="inline-block mt-6 px-6 py-3 bg-white text-indigo-800 font-semibold rounded shadow hover:bg-indigo-100 transition"
        >
          View Projects
        </a>
 </div>
      </div>
    </section>
  );
};

export default Home;
