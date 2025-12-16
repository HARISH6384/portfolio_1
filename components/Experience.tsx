// "use client";

// import { motion } from "framer-motion";

// export default function Experience() {
//   const exp = [
//     {
//       title: "English",
//       desc: "Fluent",
//     },
//     {
//       title: "Tamil",
//       desc: "Fluent",
//     },
//   ];

//   // AnimatedLine component
//   function AnimatedLine({ children, delay = 10 }) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay }}
//       >
//         {children}
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="
//         absolute 
//         -mt-[70px] sm:-mt-[180px]
//         w-[90%] sm:w-full 
//         max-w-[400px] 
//         mx-auto 
//         left-1/2 -translate-x-1/2 sm:ml-12 sm:translate-x-0 sm:left-auto
//         px-4 sm:px-6 
//         bg-[#FFCF58] 
//         text-[#233729] 
//         p-6 sm:p-8 
//         rounded-md
//       "
//     >
//       {/* Animated title */}
//       <AnimatedLine delay={0}>
//         <h2
//           className="
//             text-[26px] sm:text-[32px] 
//             font-bold mb-6  
//             font-[CooperBlack]
//           "
//         >
//           Language
//         </h2>
//       </AnimatedLine>

//       {/* Animated language list */}
//       <div className="space-y-6 sm:space-y-8">
//         {exp.map((e, index) => (
//           <AnimatedLine key={e.title} delay={0.2 + index * 0.2}>
//             <div className="flex gap-3 sm:gap-4">
//               <span className="text-[#C57231] font-bold text-xl">*</span>
//               <div>
//                 <p className="font-semibold text-base sm:text-lg">{e.title}</p>
//                 <p className="text-sm mt-1">{e.desc}</p>
//               </div>
//             </div>
//           </AnimatedLine>
//         ))}
//       </div>

//       {/* Animated tags */}
//     </motion.div>
//   );
// }




"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Experience() {
  const exp = [
    { title: "English", desc: "Fluent" },
    { title: "Tamil", desc: "Fluent" },
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
    <div style={{ perspective: "1000px" }}>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 1,
          rotateX: [0, 10, -10, 0], // smooth sway (NO blinking)
          y: [0, -2, 2,0], // light flutter
        }}
        transition={{
          duration: 4, // longer = smoother
          repeat: Infinity,
          repeatType: "mirror", 
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "top center" }}
        className="
          absolute 
          -mt-[70px] sm:-mt-[10px]
          w-[90%] sm:w-full 
          max-w-[400px] 
          mx-auto 
          left-1/2 -translate-x-1/2 sm:ml-12 sm:translate-x-0 sm:left-auto
          px-4 sm:px-6 
          bg-[#FFCF58] 
          text-[#233729] 
          p-6 sm:p-8 
          rounded-md
        "
      >
        <AnimatedLine delay={0}>
          <h2
            className="
              text-[26px] sm:text-[32px] 
              font-bold mb-6  
              font-[CooperBlack]
            "
          >
            Language
          </h2>
        </AnimatedLine>

        <div className="space-y-6 sm:space-y-8">
          {exp.map((e, index) => (
            <AnimatedLine key={e.title} delay={0.2 + index * 0.2}>
              <div className="flex gap-3 sm:gap-4">
                <span className="text-[#C57231] font-bold text-xl">*</span>
                <div>
                  <p className="font-semibold text-base sm:text-lg">{e.title}</p>
                  <p className="text-sm mt-1">{e.desc}</p>
                </div>
              </div>
            </AnimatedLine>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
