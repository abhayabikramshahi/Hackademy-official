import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/logo.png';

function PopupModal({ isOpen, onJoined }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999] backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="bg-[#111111] text-seto rounded-2xl shadow-2xl max-w-lg w-full p-8 flex flex-col items-center text-center relative"
      >
        {/* Logo */}
        <img src={Logo} alt="Hackademy Logo" className="h-40 w-40 mb-6" />
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-[#FF4C29]">
          Welcome to Hackademy!
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-6">
          Join our tech community, explore courses, and start building amazing projects today! 🚀
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <a
            href="https://discord.gg/V94hsatdc8"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onJoined} // important!
            className="flex-1 px-6 py-3 bg-[#FF4C29] text-kalo font-semibold rounded-lg hover:opacity-90 transition"
          >
            Join Discord
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PopupModal;
