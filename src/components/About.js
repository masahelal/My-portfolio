import React from "react";
import profile from "./photo_2025-09-17_14-07-32.jpg";
import RevealItem from "./revealItem";
import { Download } from "lucide-react";

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-center gap-12 py-16 px-4 sm:px-8"
    >
      <RevealItem delay={0}>
        <div className="relative flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64">
          <img
            src={profile}
            alt="Profile"
            className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg"
          />
          <span className="absolute top-2 left-4 bg-sky-300 text-black px-3 py-1 rounded-full text-xs font-semibold shadow">
            IoT Engineer
          </span>
          <span className="absolute bottom-2 right-2 bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
            Mobile Developer
          </span>
          <span className="absolute bottom-10 left-4 bg-sky-300 text-black px-3 py-1 rounded-full text-xs font-semibold shadow">
            Front-End Developer
          </span>
          <span className="absolute top-12 right-6 bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
            ITE
          </span>
        </div>
      </RevealItem>

      <RevealItem delay={200}>
        <div className="flex-1 max-w-xl text-center md:text-left">
          <h2 className="text-lg text-sky-400 font-semibold mb-2">About Me</h2>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            Who is <span className="text-blue-900">Masa Helal?</span>
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed">
            I’m an IoT Engineer and Front-End Developer passionate about
            building modern, interactive, and professional web applications.
            With experience in IoT systems and software development, I love
            creating solutions that blend hardware and software into seamless
            experiences.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8">
            <div>
              <h3 className="text-3xl font-bold text-blue-900">20+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-900">10+</h3>
              <p className="text-gray-600">Industries Covered</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-900">2+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>

          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-sky-400 transition shadow">
            <Download size={18} /> Download CV
          </button>
        </div>
      </RevealItem>
    </section>
  );
});

export default AboutMe;
