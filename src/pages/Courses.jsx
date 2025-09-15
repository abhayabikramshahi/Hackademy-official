import React from 'react';
import { motion } from 'framer-motion';

function Courses() {
  const courses = [
    { title: "⚛️ React", desc: "Build dynamic UIs with components, hooks, and routing." },
    { title: "🐍 Python", desc: "Learn backend, automation, and AI with Python." },
    { title: "☕ Java", desc: "Master OOP concepts and backend development." },
    { title: "📊 Data Structures", desc: "Understand algorithms and optimize problem-solving." },
    { title: "🌐 Web Dev", desc: "HTML, CSS, JS — from basics to advanced projects." },
    { title: "🤖 AI & ML", desc: "Dive into machine learning and neural networks." },
  ];

  return (
    <div className="bg-rakh-kalo text-seto min-h-screen font-sans px-6 py-16">
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        📚 Our <span className="text-[#FF4C29]">Courses</span>
      </motion.h1>

      {/* Course Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="bg-[#1A1A1A] text-seto p-6 rounded-xl border border-[#333] shadow-lg hover:shadow-[#FF4C29]/30 hover:border-[#FF4C29] transition"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold mb-2 text-[#FF4C29]">{course.title}</h2>
            <p className="text-gray-300">{course.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
