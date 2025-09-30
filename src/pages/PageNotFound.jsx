import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function PageNotFound() {
  return (
    <main className="bg-white text-black min-h-screen flex flex-col items-center justify-center px-4">
      {/* Animated 404 */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-7xl md:text-9xl font-extrabold mb-6 text-gray-800"
      >
        404
      </motion.h1>

      {/* Heading */}
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-4xl font-semibold mb-4"
      >
        Page Not Found
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-gray-500 mb-6 text-center max-w-md"
      >
        Oops! The page you are looking for doesn’t exist. It might have been
        moved, deleted, or never existed in the first place.
      </motion.p>

      {/* Back Home Button */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link
          to="/"
          className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </main>
  );
}

export default PageNotFound;
