import React, { useEffect, useRef } from "react";
// import profileImage from "../assets/profile.jpg"; // 🔁 Replace with your image path

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
      }
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="bg-gray-800 py-20 px-4 sm:px-6 lg:px-20 min-h-screen flex items-center"
    >
      <div
        ref={aboutRef}
        className="flex flex-col md:flex-row gap-12 items-center md:items-start max-w-6xl mx-auto transform translate-y-8 opacity-0 transition-all duration-700"
      >
        {/* Image Section */}
        {/* <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
          <img
            src={profileImage}
            alt="My Profile"
            className="w-full h-full object-cover"
          />
        </div> */}

        {/* Text Content */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            I'm a passionate web developer with a focus on creating beautiful,
            responsive, and interactive applications. My tools include React,
            Tailwind CSS, and Vite — and I love building modern UIs with great UX.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
