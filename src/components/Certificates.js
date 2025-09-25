import React from "react";
import certificate1 from "./Screenshot 2025-09-25 131049.png";
import RevealItem from "./revealItem";

const certificates = [
  {
    id: 1,
    title: "React Basics",
    platform: "Coursera",
    image: certificate1,
    link: "#",
  },
  {
    id: 2,
    title: "Java Advanced",
    platform: "Udemy",
    image: certificate1,
    link: "#",
  },
  {
    id: 3,
    title: "IoT Fundamentals",
    platform: "edX",
    image: certificate1,
    link: "#",
  },
];

const Certificates = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen bg-white py-20 px-8 flex flex-col items-center"
    >
      <RevealItem delay={0}>
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
          My <span className="text-sky-400">Certificates</span>
        </h2>
      </RevealItem>

      <RevealItem delay={150}>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-900 mb-1">
                  {cert.title}
                </h3>
                <p className="text-gray-600 mb-3">{cert.platform}</p>
                <a
                  href={cert.link}
                  className="inline-block text-sky-400 font-medium hover:underline"
                >
                  View Certificate →
                </a>
              </div>
            </div>
          ))}
        </div>
      </RevealItem>
    </section>
  );
});

export default Certificates;
