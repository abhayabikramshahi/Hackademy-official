import React from "react";
import { motion } from "framer-motion";

function Courses() {
  const courses = [
    {
      title: "Java Programming",
      desc: "Learn the fundamentals of Java, OOP, and build real-world projects.",
      icon: "☕",
    },
    {
      title: "Spring Boot & Microservices",
      desc: "Build scalable backend systems with Spring Boot, JPA, and Microservices.",
      icon: "⚡",
    },
    {
      title: "React Frontend Development",
      desc: "Master modern frontend development with React, Tailwind & Hooks.",
      icon: "⚛️",
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Crack coding interviews with strong DSA and problem-solving skills.",
      icon: "📊",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-blue-500 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Courses
      </motion.h1>

      {/* Courses Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg p-6 border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/20 transition transform hover:scale-105 cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl mb-4">{course.icon}</div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">{course.title}</h2>
            <p className="text-gray-300">{course.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Courses;
