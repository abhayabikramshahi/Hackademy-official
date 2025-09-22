import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-black via-gray-900 to-black text-white py-6 relative overflow-hidden">
      {/* Floating blobs */}
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40 bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
        animate={{ x: [0, -15, 15, 0], y: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-sm md:text-base"
        >
          &copy; {new Date().getFullYear()} All rights reserved{" "}
          <span className="font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Hackademy Zone
          </span>
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mt-3 inline-block cursor-pointer"
        >
          🚀 Stay Crazy, Keep Hacking!
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
