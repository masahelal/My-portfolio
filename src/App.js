import React, { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Certificats from "./components/Certificates";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/Footer";
function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const certificatesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        refs={{ heroRef, aboutRef, certificatesRef, skillsRef, contactRef }}
      />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={certificatesRef}>
        <Certificats />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
