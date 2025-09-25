import React from "react";

const Header = ({ scrollToSection, refs }) => {
  return (
    <header className="bg-blue-900 text-white flex justify-between items-center p-4 rounded-full mx-4 my-4">
      <div className="flex items-center gap-2">
        <div className="bg-sky-300 w-8 h-8 rounded-full flex items-center justify-center font-bold">
          M
        </div>
        <span className="font-semibold">Masa.</span>
      </div>

      <nav className="flex gap-6">
        <button onClick={() => scrollToSection(refs.heroRef)}>Home</button>
        <button onClick={() => scrollToSection(refs.aboutRef)}>About</button>
        <button onClick={() => scrollToSection(refs.certificatesRef)}>
          Certificates
        </button>
        <button onClick={() => scrollToSection(refs.skillsRef)}>Skills</button>
      </nav>

      <button className="bg-white text-blue-900 px-4 py-2 rounded-full hover:bg-sky-300 hover:text-white">
        Contact Me
      </button>
    </header>
  );
};

export default Header;
