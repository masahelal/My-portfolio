import React from "react";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsBehance } from "react-icons/bs";

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-white text-gray-800">
      <div className="bg-sky-300 text-black flex flex-wrap justify-center gap-6 py-4 font-semibold text-sm">
        <span>IoT Engineer</span>
        <span>Front-End Developer</span>
        <span>Mobile Developer</span>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold mb-4">Masa.</h3>
          <p className="mb-6 text-gray-600">
            I’m an IoT Engineer & Front-End Developer passionate about building
            digital products that combine creativity with technology.
          </p>
          <div className="flex gap-3">
            {[FaFacebookF, BsBehance, FaYoutube, FaTwitter, FaInstagram].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="bg-blue-900 text-white p-2 rounded-full hover:bg-sky-400 transition"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <h4 className="text-sky-400 font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-gray-700">
            <li>Home</li>
            <li>About</li>
            <li>Certificates</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sky-400 font-semibold mb-3">Get In Touch</h4>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border p-2 rounded-md"
            />
            <textarea
              rows="3"
              placeholder="Your Message"
              className="border p-2 rounded-md"
            />
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-sky-400 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="bg-blue-900 text-sky-300 py-4 flex flex-col md:flex-row justify-between items-center text-sm px-6">
        <p>© 2025 Masa. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0">Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
});

export default Footer;
