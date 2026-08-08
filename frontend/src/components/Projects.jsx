import React from 'react'

export default function Projects() {
  return (
    // <section id="projects" className="py-20 bg-gray-100 text-gray-900" data-aos="fade-left">
    //   <div className="container mx-auto px-6 max-w-6xl">
    //     <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
    //     <div className="grid md:grid-cols-3 gap-8">
    //       {[1, 2, 3].map((project) => (
    //         <div
    //           key={project}
    //           className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
    //           data-aos="zoom-in"
    //           data-aos-delay={project * 100}
    //         >
    //           <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
    //           <p className="mb-4">
    //             Description for project {project}. Built with React, Tailwind CSS, and more.
    //           </p>
    //           <a href="#" className="text-indigo-600 hover:underline">
    //             View Details
    //           </a>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
<>
<section id="projects" className="py-20 bg-gray-100 text-gray-900" data-aos="fade-left">
  <div className="container mx-auto px-6 max-w-6xl">
    <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Project Card 1 */}
      <div className="relative group perspective">
        <div className="book relative w-full h-64 bg-white shadow-lg rounded-lg transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden flex items-center justify-center p-4">
            <p className="text-lg font-semibold">Project 1</p>
          </div>
          {/* Back */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-indigo-600 text-white flex items-center justify-center p-4 rounded-lg">
            <p className="text-lg font-semibold">Travel Go</p>
          </div>
        </div>
      </div>

      {/* Duplicate the above for more cards */}
      <div className="relative group perspective">
        <div className="book relative w-full h-64 bg-white shadow-lg rounded-lg transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
          <div className="absolute w-full h-full backface-hidden flex items-center justify-center p-4">
            <p className="text-lg font-semibold">Project 2</p>
          </div>
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-indigo-600 text-white flex items-center justify-center p-4 rounded-lg">
            <p className="text-lg font-semibold">TMBD Movie:Flim Flix</p>
          </div>
        </div>
      </div>

      <div className="relative group perspective">
        <div className="book relative w-full h-64 bg-white shadow-lg rounded-lg transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
          <div className="absolute w-full h-full backface-hidden flex items-center justify-center p-4">
            <p className="text-lg font-semibold">project 3</p>
          </div>
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-indigo-600 text-white flex items-center justify-center p-4 rounded-lg">
            <p className="text-lg font-semibold">E-Commerce</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   </>
  )
}
