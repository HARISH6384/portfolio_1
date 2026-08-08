import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  return (
    <section id="contact" className="py-20 bg-gray-900 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
        Contact Me
      </h2>
      <form className="max-w-md mx-auto space-y-6">
        {['name', 'email', 'message'].map((field) =>
          field !== 'message' ? (
            <input
              key={field}
              type={field === 'email' ? 'email' : 'text'}
              placeholder={field === 'message' ? 'Message...' : field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-gray-200 focus:border-blue-400 focus:outline-none"
              required
            />
          ) : (
            <textarea
              key={field}
              placeholder="Message..."
              rows="4"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-gray-200 focus:border-blue-400 focus:outline-none"
              required
            />
          )
        )}
        <button type="submit" className="w-full bg-blue-500 py-3 text-white rounded hover:bg-blue-400 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};
export default Contact;
