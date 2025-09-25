import React, { useRef, useState, useEffect } from "react";
import profile from "./photo_2025-09-17_14-07-32.jpg";

const Hero = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`section ${
        visible ? "show" : ""
      } h-screen flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-8`}
    >
      <div className="flex-1">
        <p className="text-lg mb-2">Hello There!</p>
        <h1 className="text-4xl font-bold mb-4">
          I’m <span className="text-sky-300 underline">Masa Helal,</span> <br />
          IoT Engineer Based in SYR.
        </h1>
        <p className="text-gray-600 mb-6">
          I’m an ITE student in Damascuse university
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-sky-300">
            View My Portfolio
          </button>
          <button className="border border-blue-900 text-blue-900 px-6 py-3 rounded-full hover:bg-sky-300 hover:text-white">
            Hire Me
          </button>
        </div>
      </div>

      <div className="flex-1 relative w-full h-96 md:h-[500px]">
        <img
          src={profile}
          alt="Profile"
          className="w-full h-full object-cover rounded-lg"
        />
        <span className="absolute top-4 right-4 bg-sky-300 px-3 py-1 rounded-full text-sm">
          IoT Engineer
        </span>
        <span className="absolute bottom-4 left-4 bg-blue-900 text-white px-3 py-1 rounded-full text-sm">
          Front-End Developer
        </span>
      </div>
    </section>
  );
};

export default Hero;
