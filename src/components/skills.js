import React from "react";

function Skills() {
  return (
    <section className="h-screen relative bg-white">
      <div className="absolute top-0 left-0 w-full h-20 bg-blue-900 clip-path"></div>

      <div className="relative px-8 py-24">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sky-300">- Skills</p>
            <h2 className="text-4xl font-bold">
              <span className="text-sky-300">Skills</span> I have
            </h2>
          </div>

          <button className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-800 transition">
            View All Skills
            <span className="bg-sky-300 text-black rounded-full w-6 h-6 flex items-center justify-center">
              +
            </span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full mb-4">
              <span className="text-blue-700 font-bold">React</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Front-End Developer</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              ...
            </p>
            <a
              href="#"
              className="text-blue-700 font-semibold flex items-center gap-1"
            >
              Learn more →
            </a>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full mb-4">
              <span className="text-blue-700 font-bold">IoT</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">IoT Engineer</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              ...
            </p>
            <a
              href="#"
              className="text-blue-700 font-semibold flex items-center gap-1"
            >
              Learn more →
            </a>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full mb-4">
              <span className="text-blue-700 font-bold">Flutter</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mobile Developer</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              ...
            </p>
            <a
              href="#"
              className="text-blue-700 font-semibold flex items-center gap-1"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
