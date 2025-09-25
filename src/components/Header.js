import React, { useState } from "react";

const Header = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 rounded-full mx-4 sm:mx-6 my-4 shadow-lg sticky top-4 z-50 backdrop-blur">
      <div className="flex items-center gap-2">
        <div className="bg-sky-300 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-blue-900">
          M
        </div>
        <span className="font-semibold text-base sm:text-lg">Masa.</span>
      </div>

      <nav className="hidden md:flex gap-8 font-medium">
        <button
          onClick={() => scrollToSection(refs.heroRef)}
          className="hover:text-sky-300 transition"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection(refs.aboutRef)}
          className="hover:text-sky-300 transition"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection(refs.certificatesRef)}
          className="hover:text-sky-300 transition"
        >
          Certificates
        </button>
        <button
          onClick={() => scrollToSection(refs.skillsRef)}
          className="hover:text-sky-300 transition"
        >
          Skills
        </button>
      </nav>
      <button
        className="hidden md:block bg-white text-blue-900 px-5 py-2 rounded-full font-semibold hover:bg-sky-300 hover:text-white transition"
        onClick={() => scrollToSection(refs.contactRef)}
      >
        Contact Me
      </button>
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>
      {isOpen && (
        <div className="absolute top-20 right-4 bg-blue-900 rounded-xl shadow-lg p-6 flex flex-col gap-4 md:hidden">
          <button
            onClick={() => {
              scrollToSection(refs.heroRef);
              setIsOpen(false);
            }}
            className="hover:text-sky-300"
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection(refs.aboutRef);
              setIsOpen(false);
            }}
            className="hover:text-sky-300"
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToSection(refs.certificatesRef);
              setIsOpen(false);
            }}
            className="hover:text-sky-300"
          >
            Certificates
          </button>
          <button
            onClick={() => {
              scrollToSection(refs.skillsRef);
              setIsOpen(false);
            }}
            className="hover:text-sky-300"
          >
            Skills
          </button>
          <button
            onClick={() => {
              scrollToSection(refs.contactRef);
              setIsOpen(false);
            }}
            className="bg-white text-blue-900 px-4 py-2 rounded-full font-semibold hover:bg-sky-300 hover:text-white"
          >
            Contact Me
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
