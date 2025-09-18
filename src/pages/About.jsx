import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function About() {
  const [active, setActive] = useState(null);

  const toggleSection = (section) => {
    setActive(active === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-blue-500 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Hackademy Zone
      </motion.h1>

      {/* Content Section */}
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="text-lg md:text-xl mb-4">
          👾 <span className="text-blue-400 font-semibold">Welcome to Hackademy Zone</span> — 
          where coders, hackers, and chillers unite. 🚀
        </p>
        <p className="text-gray-300 mb-4">
          💻 Whether you’re grinding LeetCode, breaking into CTF challenges, or just vibing with memes, 
          this is the spot. HackAcademy isn’t just about learning — it’s about creating, breaking, fixing, 
          and growing together.
        </p>
        <p className="text-gray-300 mb-4">
          ⚡ We help <span className="text-blue-400 font-semibold">students, devs, and creators</span> 
          sharpen their skills with real projects, collab with like-minded people, and build a career that 
          actually matters. From <span className="text-blue-400 font-semibold">beginner coders</span> 
          to <span className="text-blue-400 font-semibold">hardcore hackers</span>, there’s a space for you here.
        </p>
        <p className="text-gray-300 mb-4">
          🎯 Our mission is simple: <span className="text-blue-400 font-semibold">
          Learn. Hack. Chill. Conquer.</span> With tutorials, projects, late-night coding jams, 
          and a community that always has your back, you’ll stay one step ahead in the tech game — 
          while having fun on the side.
        </p>
      </motion.div>

      {/* Server Areas */}
      <motion.div
        className="mt-16 max-w-4xl w-full text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-6">🌐 Server Spaces</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tech Area */}
          <div
            onClick={() => toggleSection("tech")}
            className="cursor-pointer bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-blue-500 transition transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-blue-300 mb-2">💻 Tech Area</h3>
            <AnimatePresence>
              {active === "tech" && (
                <motion.p
                  key="tech"
                  className="text-gray-400 mt-3"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  Dive into coding discussions, share projects, get help with bugs, 
                  and collaborate on open-source. This is where innovation happens.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Chill Area */}
          <div
            onClick={() => toggleSection("chill")}
            className="cursor-pointer bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-purple-500 transition transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-purple-300 mb-2">🎉 Chill Area</h3>
            <AnimatePresence>
              {active === "chill" && (
                <motion.p
                  key="chill"
                  className="text-gray-400 mt-3"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  Hang out with fellow members, share memes, talk about life, or 
                  just vibe together. Because community isn’t only about work—it’s about fun too.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
