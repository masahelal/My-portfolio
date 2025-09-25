import React from "react";
import certificate1 from "./Screenshot 2025-09-25 131049.png";

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

const Certificates = () => {
  return (
    <section className="top-0 min-h-screen py-16 px-8 bg-gray-50 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-center mb-12">My Certificates</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-70 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
              <p className="text-gray-600 mb-2">{cert.platform}</p>
              <a
                href={cert.link}
                className="inline-block text-sky-300 hover:underline"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
