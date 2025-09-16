import React from "react";
import { motion } from "framer-motion";

function Java() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-blue-500 mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Java Programming
      </motion.h1>

      {/* Course Intro */}
      <motion.p
        className="max-w-3xl text-center text-lg text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Master the fundamentals of <span className="text-blue-400 font-semibold">Java</span>, 
        one of the most powerful and widely used programming languages.  
        From basic syntax to Object-Oriented Programming (OOP) and real-world projects,  
        this course will help you build a solid foundation in software development.
      </motion.p>

      {/* What You Will Learn */}
      <div className="max-w-5xl w-full">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">📘 What You Will Learn</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-300">
          <li className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition">
            ✅ Java Basics: Syntax, Variables, Data Types
          </li>
          <li className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition">
            ✅ Control Flow: if-else, loops, switch
          </li>
          <li className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition">
            ✅ OOP Concepts: Classes, Objects, Inheritance, Polymorphism
          </li>
          <li className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition">
            ✅ Exception Handling & File I/O
          </li>
          <li className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition">
            ✅ Collections Framework & Generics
          </li>
          <li className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition">
            ✅ Build Real-World Mini Projects
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold shadow-lg hover:shadow-blue-500/40 transition">
          Enroll Now 🚀
        </button>
      </motion.div>
    </div>
  );
}

export default Java;
