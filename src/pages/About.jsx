import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-blue-500 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About HackAcademy Zone
      </motion.h1>

      {/* Content Section */}
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="text-lg md:text-xl mb-4">
          Welcome to <span className="text-blue-400 font-semibold">HackAcademy Zone</span>, 
          the ultimate place where coding meets creativity. 🚀
        </p>
        <p className="text-gray-300 mb-4">
          We empower students, developers, and creators to sharpen their coding skills, 
          explore real-world projects, and build a strong tech career. 
          Whether you’re a beginner or an advanced coder, HackAcademy Zone is your hub for growth.
        </p>
        <p className="text-gray-300 mb-4">
          Our mission is simple: <span className="text-blue-400 font-semibold">
          Learn, Code, and Conquer</span>. With structured tutorials, project-based learning, 
          and a supportive community, you’ll always stay one step ahead in the tech game.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl w-full"
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
        {/* Feature Card 1 */}
        <motion.div
          className="bg-gray-900 rounded-2xl shadow-lg p-6 hover:shadow-blue-500 transition transform hover:scale-105"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-blue-400 mb-2">🚀 Practical Learning</h2>
          <p className="text-gray-400">Hands-on coding with real-world projects to boost your skills.</p>
        </motion.div>

        {/* Feature Card 2 */}
        <motion.div
          className="bg-gray-900 rounded-2xl shadow-lg p-6 hover:shadow-blue-500 transition transform hover:scale-105"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-blue-400 mb-2">👩‍💻 Community</h2>
          <p className="text-gray-400">Join like-minded learners and collaborate on exciting challenges.</p>
        </motion.div>

        {/* Feature Card 3 */}
        <motion.div
          className="bg-gray-900 rounded-2xl shadow-lg p-6 hover:shadow-blue-500 transition transform hover:scale-105"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-blue-400 mb-2">🎯 Career Ready</h2>
          <p className="text-gray-400">Master skills that make you job-ready and future-proof.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
