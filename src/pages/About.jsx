import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function About() {
  const [active, setActive] = useState(null);
  const toggleSection = (section) => setActive(active === section ? null : section);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <Helmet>
        <title>About Hackademy Zone | Learn, Build, Connect</title>
        <meta
          name="description"
          content="Hackademy Zone: Where coders, hackers, and chillers unite. Join our tech community, access projects, and grow your skills in Nepal."
        />
        <meta property="og:title" content="About Hackademy Zone" />
        <meta property="og:description" content="Join our tech community, collaborate on projects, and level up your coding skills." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hackademyzone.netlify.app/about" />
        <meta property="og:image" content="https://hackademyzone.netlify.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-blue-500 mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Hackademy Zone
      </motion.h1>

      {/* Introduction */}
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-4 text-gray-300"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={fadeUp} className="text-lg md:text-xl">
          👾 <span className="text-blue-400 font-semibold">Welcome to Hackademy Zone</span> — where coders, hackers, and chillers unite. 🚀
        </motion.p>
        <motion.p variants={fadeUp}>
          💻 Whether you’re grinding LeetCode, tackling CTF challenges, or just vibing with memes, this is the spot. Hackademy isn’t just about learning — it’s about creating, breaking, fixing, and growing together.
        </motion.p>
        <motion.p variants={fadeUp}>
          ⚡ We help <span className="text-blue-400 font-semibold">students, devs, and creators</span> sharpen skills with real projects, collab with like-minded people, and build a career that matters. From <span className="text-blue-400 font-semibold">beginners</span> to <span className="text-blue-400 font-semibold">hardcore hackers</span>, there’s space for everyone.
        </motion.p>
        <motion.p variants={fadeUp}>
          🎯 Our mission: <span className="text-blue-400 font-semibold">Learn. Hack. Chill. Conquer.</span> With tutorials, projects, coding jams, and a supportive community, stay ahead in tech while having fun.
        </motion.p>
      </motion.div>

      {/* Server Areas */}
      <motion.div
        className="mt-16 max-w-4xl mx-auto text-center space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">🌐 Server Spaces</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              key: "tech",
              title: "💻 Tech Area",
              color: "blue-300",
              description:
                "Dive into coding discussions, share projects, get help with bugs, and collaborate on open-source. Innovation lives here.",
            },
            {
              key: "chill",
              title: "🎉 Chill Area",
              color: "purple-300",
              description:
                "Hang out with fellow members, share memes, talk about life, or just vibe together. Community isn’t only about work—it’s about fun too.",
            },
          ].map((section) => (
            <div
              key={section.key}
              role="button"
              tabIndex={0}
              onClick={() => toggleSection(section.key)}
              onKeyDown={(e) => e.key === "Enter" && toggleSection(section.key)}
              className={`cursor-pointer bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-${section.color} transition transform hover:scale-105`}
            >
              <h3 className={`text-2xl font-semibold text-${section.color} mb-2`}>
                {section.title}
              </h3>
              <AnimatePresence>
                {active === section.key && (
                  <motion.p
                    key={section.key}
                    className="text-gray-400 mt-3"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {section.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}

export default About;
