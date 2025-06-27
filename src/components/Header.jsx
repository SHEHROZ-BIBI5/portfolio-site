 

import React, { useState } from 'react';

const socialLinks = [
  {
    href: 'https://linkedin.com/in/shehrozbibi5',
    label: 'LinkedIn',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/>
      </svg>
    ),
  },
  {
    href: 'https://github.com/SHEHROZ-BIBI5',
    label: 'GitHub',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
      </svg>
    ),
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-2xl shadow-xl border-b border-blue-100">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo & Title */}
        <div className="flex items-center gap-4">
          <span className="inline-block w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 via-purple-400 to-pink-400 shadow-lg border-4 border-transparent bg-clip-padding animate-spin-slow relative before:absolute before:inset-0 before:rounded-full before:border-2 before:border-white before:opacity-70"></span>
          <div>
            <h1 className="font-extrabold text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 drop-shadow tracking-tight" style={{ fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif" }}>
              Shehroz Bibi
            </h1>
            <p className="text-xs md:text-sm text-blue-500 font-medium tracking-wide">
              Full Stack Web Developer
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-2 items-center">
          <a href="#about" className="px-4 py-2 rounded-lg font-semibold text-blue-700 hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 hover:text-purple-700 transition-all duration-200">
            About
          </a>
          <a href="#projects" className="px-4 py-2 rounded-lg font-semibold text-blue-700 hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 hover:text-purple-700 transition-all duration-200">
            Projects
          </a>
          <a href="#contact" className="px-4 py-2 rounded-lg font-semibold text-blue-700 hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 hover:text-purple-700 transition-all duration-200">
            Contact
          </a>
          {/* Social Icons */}
          <div className="flex gap-2 ml-4">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 text-blue-700 hover:text-white hover:bg-gradient-to-tr hover:from-blue-500 hover:to-pink-500 shadow transition-all duration-200"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 group"
          onClick={() => setOpen(!open)}
          aria-label="Open Menu"
        >
          <span className={`w-7 h-1 bg-blue-500 rounded transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-7 h-1 bg-blue-500 rounded transition-all ${open ? 'opacity-0' : ''}`}></span>
          <span className={`w-7 h-1 bg-blue-500 rounded transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden bg-white/90 backdrop-blur-2xl shadow-2xl rounded-b-xl px-6 py-6 flex flex-col gap-4 animate-fade-in-down">
          <a href="#about" className="py-2 rounded-lg font-semibold text-blue-700 hover:bg-blue-50 hover:shadow transition" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#projects" className="py-2 rounded-lg font-semibold text-blue-700 hover:bg-blue-50 hover:shadow transition" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#contact" className="py-2 rounded-lg font-semibold text-blue-700 hover:bg-blue-50 hover:shadow transition" onClick={() => setOpen(false)}>
            Contact
          </a>
          <div className="flex gap-3 mt-2">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 text-blue-700 hover:text-white hover:bg-gradient-to-tr hover:from-blue-500 hover:to-pink-500 shadow transition-all duration-200"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;