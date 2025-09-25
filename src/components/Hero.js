import React from "react";
import profile from "./photo_2025-09-17_14-07-32.jpg";
import RevealItem from "./revealItem";

const Hero = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 py-12 sm:py-20 gap-12"
    >
      <div className="flex-1 text-center md:text-left">
        <RevealItem delay={0}>
          <p className="text-lg text-gray-700 mb-2">👋 Hello There!</p>
        </RevealItem>

        <RevealItem delay={150}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            I’m <span className="text-sky-400 underline">Masa Helal,</span>
            <br />
            IoT Engineer Based in SYR.
          </h1>
        </RevealItem>

        <RevealItem delay={300}>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            I’m an ITE student at Damascus University, passionate about IoT,
            front-end development, and modern web technologies.
          </p>
        </RevealItem>

        <RevealItem delay={450}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-900 text-white px-6 py-3 rounded-full shadow hover:bg-sky-400 hover:shadow-lg transition">
              View My Portfolio
            </button>
            <button className="border border-blue-900 text-blue-900 px-6 py-3 rounded-full hover:bg-sky-400 hover:text-white transition">
              Hire Me
            </button>
          </div>
        </RevealItem>
      </div>

      <RevealItem delay={600}>
        <div className="flex-1 relative w-full max-w-md h-[380px] sm:h-[420px]">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
          <span className="absolute top-4 right-4 bg-sky-300 px-3 py-1 rounded-full text-sm font-semibold">
            IoT Engineer
          </span>
          <span className="absolute bottom-4 left-4 bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Front-End Developer
          </span>
        </div>
      </RevealItem>
    </section>
  );
});

export default Hero;
