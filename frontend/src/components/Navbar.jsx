import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
      <header className='  w-full z-10 fixed  '>
      
    <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:py-0">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="flex gap-4 items-center">
          <ul className="flex gap-4">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
          <button
            onClick={() => setDark(!dark)}
            className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {dark ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
    </header>
  );
}
