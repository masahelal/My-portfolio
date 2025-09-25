import React from "react";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsBehance } from "react-icons/bs";
import RevealItem from "./revealItem";

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-white text-gray-800">
      <div className="bg-sky-300 text-black flex flex-wrap justify-center gap-6 py-4 font-semibold text-sm">
        <span>IoT Engineer</span>
        <span>Front-End Developer</span>
        <span>Mobile Developer</span>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16 grid gap-12 md:grid-cols-3">
        <RevealItem>
          <div>
            <h3 className="text-2xl font-bold mb-4">Masa.</h3>
            <p className="mb-6 text-gray-600">
              I’m an IoT Engineer & Front-End Developer passionate about
              building digital products that combine creativity with technology.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, BsBehance, FaYoutube, FaTwitter, FaInstagram].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="bg-blue-900 text-white p-2 rounded-full hover:bg-sky-400 hover:scale-110 transition-transform"
                  >
                    <Icon />
                  </div>
                )
              )}
            </div>
          </div>
        </RevealItem>

        <RevealItem delay={150}>
          <div>
            <h4 className="text-sky-400 font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-gray-700">
              {["Home", "About", "Certificates", "Skills", "Contact"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-sky-400 transition"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </RevealItem>

        <RevealItem delay={300}>
          <div>
            <h4 className="text-sky-400 font-semibold mb-3">Get In Touch</h4>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <textarea
                rows="3"
                placeholder="Your Message"
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-sky-400 transition">
                Send Message
              </button>
            </form>
          </div>
        </RevealItem>
      </div>

      <div className="bg-blue-900 text-sky-300 py-4 flex flex-col md:flex-row justify-between items-center text-sm px-6">
        <p>© 2025 Masa. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0 cursor-pointer hover:text-white transition">
          Terms & Conditions | Privacy Policy
        </p>
      </div>
    </footer>
  );
});

export default Footer;
