import React from "react";
import { FaReact, FaMicrochip, FaMobileAlt } from "react-icons/fa";
import RevealItem from "./revealItem";

function Skills() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 relative">
      <div className="max-w-6xl mx-auto px-8 py-20">
        <RevealItem>
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-sky-400">- Skills</p>
              <h2 className="text-4xl font-bold text-blue-900">
                <span className="text-sky-400">Skills</span> I Have
              </h2>
            </div>

            <button className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-full shadow-md hover:bg-sky-400 transition">
              View All Skills
              <span className="bg-white text-blue-900 rounded-full w-6 h-6 flex items-center justify-center">
                +
              </span>
            </button>
          </div>
        </RevealItem>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <RevealItem delay={100}>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4 text-blue-700 text-3xl">
                <FaReact />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Front-End Developer
              </h3>
              <p className="text-gray-600 mb-4">
                Building modern responsive UIs with React, Tailwind CSS, and
                JavaScript.
              </p>
              <a
                href="#"
                className="text-sky-500 font-semibold flex items-center gap-1"
              >
                Learn more →
              </a>
            </div>
          </RevealItem>

          <RevealItem delay={200}>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4 text-blue-700 text-3xl">
                <FaMicrochip />
              </div>
              <h3 className="text-xl font-semibold mb-2">IoT Engineer</h3>
              <p className="text-gray-600 mb-4">
                Integrating hardware and software to design smart connected
                systems.
              </p>
              <a
                href="#"
                className="text-sky-500 font-semibold flex items-center gap-1"
              >
                Learn more →
              </a>
            </div>
          </RevealItem>

          <RevealItem delay={300}>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4 text-blue-700 text-3xl">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Developer</h3>
              <p className="text-gray-600 mb-4">
                Creating cross-platform mobile apps using Flutter and Dart.
              </p>
              <a
                href="#"
                className="text-sky-500 font-semibold flex items-center gap-1"
              >
                Learn more →
              </a>
            </div>
          </RevealItem>
        </div>
      </div>
    </section>
  );
}

export default Skills;
