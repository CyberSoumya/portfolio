// src/components/sections/Resume.jsx

import React from "react";

export const Resume = () => {
  return (
    <section id="resume" className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Download My Resume
        </h2>
        <a
          href="/resume.pdf"
          download
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
};
