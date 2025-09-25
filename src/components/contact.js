import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaSkype,
  FaMapMarkerAlt,
} from "react-icons/fa";
import RevealItem from "./revealItem";

const ContactMe = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-6 py-16">
      <div className="max-w-3xl w-full text-center md:text-left">
        <RevealItem>
          <p className="text-sky-400 font-semibold mb-2">— Contact Me</p>
        </RevealItem>

        <RevealItem delay={100}>
          <h2 className="text-4xl font-bold leading-snug mb-4">
            Let’s Talk for{" "}
            <span className="text-sky-500 italic">Your Next Projects</span>
          </h2>
        </RevealItem>

        <RevealItem delay={200}>
          <p className="text-gray-600 mb-10">
            I’d love to hear from you! Whether you have a project idea, a
            question, or just want to connect, feel free to reach out.
          </p>
        </RevealItem>

        <div className="space-y-6">
          <RevealItem delay={300}>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="bg-sky-300 p-3 rounded-full text-blue-900 text-lg shadow">
                <FaPhoneAlt />
              </div>
              <span className="text-gray-700">+9639999999</span>
            </div>
          </RevealItem>

          <RevealItem delay={400}>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="bg-sky-300 p-3 rounded-full text-blue-900 text-lg shadow">
                <FaEnvelope />
              </div>
              <span className="text-gray-700">helalmasa5@gmail.com</span>
            </div>
          </RevealItem>

          <RevealItem delay={500}>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="bg-sky-300 p-3 rounded-full text-blue-900 text-lg shadow">
                <FaSkype />
              </div>
              <span className="text-gray-700">example</span>
            </div>
          </RevealItem>

          <RevealItem delay={600}>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="bg-sky-300 p-3 rounded-full text-blue-900 text-lg shadow">
                <FaMapMarkerAlt />
              </div>
              <span className="text-gray-700">5455 Damascus Syria</span>
            </div>
          </RevealItem>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
