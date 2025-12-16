"use client";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ContactPage() {
  // AnimatedLine helper
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

  const contacts: { icon: ReactNode; content: ReactNode }[] = [
    {
      icon: <FaEnvelope size={22} color="#F1A900" />,
      content: (
        <a href="mailto:hharish6384@gmail.com" className="hover:underline">
          hharish6384@gmail.com
        </a>
      ),
    },
    {
      icon: <FaWhatsapp size={22} color="#F1A900" />,
      content: (
        <a
          href="https://wa.me/6384232664"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          WhatsApp
        </a>
      ),
    },
    {
      icon: <FaGithub size={22} color="#F1A900" />,
      content: (
        <a
          href="https://github.com/HARISH6384"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          github
        </a>
      ),
    },
    {
      icon: <FaInstagram size={22} color="#F1A900" />,
      content: (
        <a
          href="https://www.instagram.com/_harishh._1?igsh=MWZ2aRjczh5MjNxNq=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          instagram
        </a>
      ),
    },

    {
      icon: <FaMapMarkerAlt size={22} color="#F1A900" />,
      content: <>Coimbatore, India</>,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#233729] mt-40 text-[#F6F1E5] px-6 py-16 flex flex-col items-center "
    >
      {/* Page Title */}
      <AnimatedLine delay={0}>
        <h1 className="text-[48px]  h1-hero font-bold mb-12 text-[#F6F1E5]">
          Contact Me
        </h1>
      </AnimatedLine>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
        <div className="space-y-8">
          <AnimatedLine delay={0.2}>
            <p className="text-lg leading-relaxed opacity-90 max-w-md">
              I’d love to hear from you! Whether you have a project idea, job
              opportunity, collaboration request, or just want to say hello —
              feel free to reach out.
            </p>
          </AnimatedLine>

          {/* CONTACT DETAILS */}
          <div className="space-y-4">
            {contacts.map((c, index) => (
              <AnimatedLine key={index} delay={0.4 + index * 0.2}>
                <div className="flex items-center gap-4">
                  {c.icon}
                  {c.content}
                </div>
              </AnimatedLine>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE – CONTACT FORM */}
        <AnimatedLine delay={1.5}>
          <div className="bg-white text-[#233729] rounded-lg p-8 shadow-xl">
<form
  className="space-y-6"
  onSubmit={async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const data = {
    name: (form.elements.namedItem("name") as HTMLInputElement).value,
    email: (form.elements.namedItem("email") as HTMLInputElement).value,
    description: (form.elements.namedItem("description") as HTMLTextAreaElement).value,
  };

  try {
    const res = await fetch("https://portfolio-webserver-cf1n.onrender.com/portfolio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed to send message");

    const result = await res.json();
    alert("Message sent!");
    console.log(result,"message");
    form.reset();
  } catch (error) {
    alert("Oops! Something went wrong.");
    console.error(error);
  }
}}

>
  <div>
    <label className="block mb-2 font-semibold">Name</label>
    <input
      name="name"
      type="text"
      className="w-full p-3 rounded bg-[#F6F1E5] focus:outline-none"
      placeholder="Your name"
    />
  </div>

  <div>
    <label className="block mb-2 font-semibold">Email</label>
    <input
      name="email"
      type="email"
      className="w-full p-3 rounded bg-[#F6F1E5] focus:outline-none"
      placeholder="you@example.com"
    />
  </div>

  <div>
    <label className="block mb-2 font-semibold">Message</label>
    <textarea
      name="description"
      rows={5}
      className="w-full p-3 rounded bg-[#F6F1E5] focus:outline-none"
      placeholder="Write your message..."
    ></textarea>
  </div>

  <button
    type="submit"
    className="mt-4 w-full bg-[#F1A900] text-[#233729] font-bold py-3 rounded-lg hover:bg-[#d89200] transition"
  >
    Send Message
  </button>
</form>

          </div>
        </AnimatedLine>
      </div>
    </section>
  );
}









