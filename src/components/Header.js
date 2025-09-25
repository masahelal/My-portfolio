import React from "react";
const Header = ({ scrollToSection, refs }) => {
  return (
    <header className="bg-blue-900 text-white flex justify-between items-center px-8 py-4 rounded-full mx-6 my-4 shadow-lg sticky top-4 z-50 backdrop-blur">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-sky-300 w-10 h-10 rounded-full flex items-center justify-center font-bold text-blue-900">
          M
        </div>
        <span className="font-semibold text-lg">Masa.</span>
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
        className="bg-white text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-sky-300 hover:text-white transition"
        onClick={() => scrollToSection(refs.contactRef)}
      >
        Contact Me
      </button>
    </header>
  );
};
export default Header;
