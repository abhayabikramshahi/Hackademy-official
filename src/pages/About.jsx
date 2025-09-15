import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

function About() {
  return (
    <div className="bg-rakh-kalo text-white min-h-screen antialiased font-sans px-6 py-12 flex flex-col items-center">
      
      {/* Logo */}
      <motion.img
        src={Logo}
        alt="Hackademy Logo"
        className="h-40 w-40 mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-[#22C55E] mb-6 text-center"
      >
        About Hackademy
      </motion.h1>

      {/* Main Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl text-center space-y-6 text-lg md:text-xl"
      >
        <p>
          Hackademy is a <span className="text-[#22C55E] font-semibold">community-driven platform</span> for learners, developers, and tech enthusiasts. 
          Our mission is to provide a space to learn, share, and grow in the tech world.
        </p>
        <p>
          We offer high-quality <span className="text-[#22C55E] font-semibold">courses</span> in programming, web development, AI, and more. 
          All courses focus on practical, real-world skills to prepare you for professional growth.
        </p>
        <p>
          Join our vibrant <span className="text-[#22C55E] font-semibold">community</span> on Discord to collaborate, share ideas, participate in challenges, and network with like-minded learners.
        </p>
        <p>
          Contribute to <span className="text-[#22C55E] font-semibold">open-source projects</span> and showcase your skills to the global tech ecosystem.
        </p>
        <p>
          Hackademy’s goal is simple: empower individuals with knowledge, skills, and community support to excel in technology and innovation.
        </p>
      </motion.div>

      {/* Owner Info */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        className="mt-8 text-[#22C55E] font-semibold text-lg md:text-xl text-center"
      >
        Created & Owned by: Abhaya Bikram Shahi
      </motion.p>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        className="mt-8 flex flex-col md:flex-row gap-4 justify-center"
      >
        <a
          href="https://discord.gg/V94hsatdc8"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#22C55E] text-[#0F1F0E] font-semibold rounded-lg hover:opacity-90 transition"
        >
          Join Discord
        </a>
        <a
          href="/"
          className="px-6 py-3 border border-[#22C55E] text-[#22C55E] font-semibold rounded-lg hover:bg-[#22C55E] hover:text-[#0F1F0E] transition"
        >
          Explore Courses
        </a>
      </motion.div>
    </div>
  );
}

export default About;
