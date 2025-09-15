import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

function Home() {
  const features = [
    {
      id: 1,
      title: "📚 Courses",
      desc: "Learn React, Python, Java, and more from professional devs with real-world projects.",
    },
    {
      id: 2,
      title: "👥 Community",
      desc: "Collaborate, share ideas, and grow with like-minded learners in our official server.",
    },
    {
      id: 3,
      title: "🚀 Open Source",
      desc: "Contribute to projects and showcase your skills to the global developer ecosystem.",
    },
  ];

  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleCardClick = (feature) => {
    setSelectedFeature(feature);
  };

  const handleClose = () => {
    setSelectedFeature(null);
  };

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen antialiased font-sans">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Hackademy - Learn, Build & Share Tech Skills</title>
        <meta
          name="description"
          content="Join Hackademy, a community-driven platform to learn React, Python, Java, contribute to open source, and collaborate with developers worldwide."
        />
        <meta name="keywords" content="Hackademy, Coding, React, Python, Java, Tech Community, Open Source" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hackademy - Learn, Build & Share Tech Skills" />
        <meta property="og:description" content="Join Hackademy, a community-driven platform to learn React, Python, Java, contribute to open source, and collaborate with developers worldwide." />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hackademy - Learn, Build & Share Tech Skills" />
        <meta name="twitter:description" content="Join Hackademy, a community-driven platform to learn React, Python, Java, contribute to open source, and collaborate with developers worldwide." />
        <meta name="twitter:image" content="https://yourwebsite.com/og-image.png" />
      </Helmet>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Welcome to <span className="text-[#22C55E]">Hackademy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-gray-400"
        >
          A community-driven platform for learning, building, and sharing tech knowledge.  
          Click on any feature to learn more.
        </motion.p>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {features.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i, duration: 0.8, ease: "easeOut" }}
            className="bg-[#1A1A1A] text-white p-6 rounded-xl border border-[#333] shadow-lg hover:shadow-[#22C55E]/30 hover:border-[#22C55E] cursor-pointer transition"
            onClick={() => handleCardClick(item)}
          >
            <h2 className="text-2xl font-bold mb-2 text-[#22C55E]">{item.title}</h2>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Feature Info Box */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
          >
            <motion.div className="bg-[#22C55E] text-black rounded-2xl p-8 max-w-lg w-full text-center relative shadow-2xl">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-black text-3xl font-bold hover:opacity-70 transition"
              >
                ×
              </button>
              <h2 className="text-3xl font-bold mb-4">{selectedFeature.title}</h2>
              <p className="text-black">{selectedFeature.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
