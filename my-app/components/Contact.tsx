"use client";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

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
          GitHub
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
          Instagram
        </a>
      ),
    },
    {
      icon: <FaMapMarkerAlt size={22} color="#F1A900" />,
      content: <>Coimbatore, India</>,
    },
  ];

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (
      form.elements.namedItem("description") as HTMLTextAreaElement
    ).value;

    try {
      await emailjs.send(
        "service_gd41fhz",
        "template_wqyxxff",
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "ROYmexzjQCZBy12mJ"
      );

      alert("✅ Message Sent Successfully!");

      form.reset();
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#233729] mt-40 text-[#F6F1E5] px-6 py-16 flex flex-col items-center"
    >
      <AnimatedLine delay={0}>
        <h1 className="text-[48px] h1-hero font-bold mb-12 text-[#F6F1E5]">
          Contact Me
        </h1>
      </AnimatedLine>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <AnimatedLine delay={0.2}>
            <p className="text-lg leading-relaxed opacity-90 max-w-md">
              I’d love to hear from you! Whether you have a project idea, job
              opportunity, collaboration request, or just want to say hello —
              feel free to reach out.
            </p>
          </AnimatedLine>

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

        <AnimatedLine delay={1.5}>
          <div className="bg-white text-[#233729] rounded-lg p-8 shadow-xl">
            <form className="space-y-6" onSubmit={sendEmail}>
              <div>
                <label className="block mb-2 font-semibold">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full p-3 rounded bg-[#F6F1E5] focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full p-3 rounded bg-[#F6F1E5] focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                  name="description"
                  rows={5}
                  required
                  className="w-full p-3 rounded bg-[#F6F1E5] focus:outline-none"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full bg-[#F1A900] text-[#233729] font-bold py-3 rounded-lg hover:bg-[#d89200] transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </AnimatedLine>
      </div>
    </section>
  );
}