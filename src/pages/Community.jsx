import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/logo.png'; // optional, use your Hackademy logo

function Community() {
  return (
    <div className="bg-rakh-kalo text-seto min-h-screen flex flex-col items-center justify-center px-6 py-12 font-sans">
      
      {/* Logo */}
      <motion.img
        src={Logo}
        alt="Hackademy Logo"
        className="h-32 w-32 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* Coming Soon Text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl md:text-5xl font-bold text-[#22C55E] mb-4 text-center"
      >
        Community Page
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        className="text-center text-gray-300 text-lg md:text-xl max-w-xl"
      >
        🚀 This section is coming soon! Join our Discord to connect with fellow learners and stay updated on the latest community activities.
      </motion.p>
    </div>
  );
}

export default Community;
