import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Logo from "../assets/logo.png";

function About() {
  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen antialiased font-sans px-6 py-12 flex flex-col items-center">
      
      {/* SEO */}
      <Helmet>
        <title>About Hackademy - Learn, Build & Share Tech Skills</title>
        <meta
          name="description"
          content="Hackademy is a community-driven platform for learners, developers, and tech enthusiasts. Join our courses, Discord community, and contribute to open-source projects."
        />
        <meta
          name="keywords"
          content="Hackademy, Coding, React, Python, Java, AI, Web Development, Tech Community, Open Source"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hackademy-discord-server.netlify.app/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Hackademy - Learn, Build & Share Tech Skills"
        />
        <meta
          property="og:description"
          content="Hackademy is a community-driven platform for learners, developers, and tech enthusiasts. Join our courses, Discord community, and contribute to open-source projects."
        />
        <meta property="og:url" content="https://hackademy-discord-server.netlify.app/about" />
        <meta property="og:image" content="https://hackademy-discord-server.netlify.app/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Hackademy - Learn, Build & Share Tech Skills"
        />
        <meta
          name="twitter:description"
          content="Hackademy is a community-driven platform for learners, developers, and tech enthusiasts. Join our courses, Discord community, and contribute to open-source projects."
        />
        <meta
          name="twitter:image"
          content="https://hackademy-discord-server.netlify.app/og-image.png"
        />
      </Helmet>

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
        className="text-4xl md:text-5xl font-extrabold text-[#22C55E] mb-8 text-center"
      >
        About Hackademy
      </motion.h1>

      {/* Main Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl text-center space-y-6 text-lg md:text-xl leading-relaxed"
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
        className="mt-12 text-[#22C55E] font-semibold text-lg md:text-xl text-center"
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
          href="/courses"
          className="px-6 py-3 border border-[#22C55E] text-[#22C55E] font-semibold rounded-lg hover:bg-[#22C55E] hover:text-[#0F1F0E] transition"
        >
          Explore Courses
        </a>
      </motion.div>
    </div>
  );
}

export default About;
