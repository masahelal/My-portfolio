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
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-16">
      <div className="max-w-3xl w-full">
        <RevealItem>
          <p className="text-sky-300 font-semibold mb-2">— Contact Us</p>
        </RevealItem>

        <RevealItem delay={100}>
          <h2 className="text-4xl font-bold leading-snug mb-4">
            Let’s Talk for{" "}
            <span className="text-sky-500 italic">Your Next Projects</span>
          </h2>
        </RevealItem>

        <RevealItem delay={200}>
          <p className="text-gray-600 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </RevealItem>

        <div className="space-y-6">
          <RevealItem delay={300}>
            <div className="flex items-center gap-4">
              <div className="bg-sky-300 p-3 rounded-full text-blue-900 text-lg">
                <FaPhoneAlt />
              </div>
              <span className="text-gray-700">+9639999999</span>
            </div>
          </RevealItem>

          <RevealItem delay={400}>
            <div className="flex items-center gap-4">
              <div className="bg-sky-300 p-3 rounded-full text-blue-900 text-lg">
                <FaEnvelope />
              </div>
              <span className="text-gray-700">helalmasa5@gmail.com</span>
            </div>
          </RevealItem>

          <RevealItem delay={500}>
            <div className="flex items-center gap-4">
              <div className="bg-sky-300 p-3 rounded-full text-blue-900 text-lg">
                <FaSkype />
              </div>
              <span className="text-gray-700">example</span>
            </div>
          </RevealItem>

          <RevealItem delay={600}>
            <div className="flex items-center gap-4">
              <div className="bg-sky-300 p-3 rounded-full text-blue-900 text-lg">
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
