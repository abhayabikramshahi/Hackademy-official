import React from 'react';
import { motion } from 'framer-motion';

function Discord() {
  return (
    <motion.main
      className="min-h-screen bg-gray-100 text-gray-900 p-6 flex flex-col gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <header className="text-3xl font-bold border-b border-gray-300 pb-2">
        Discord Server
      </header>

      {/* Roles Section */}
      <section className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Roles</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Admin</li>
          <li>Moderator</li>
          <li>Member</li>
        </ul>
      </section>

      {/* Members Section */}
      <section className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Members</h2>
        <ul className="text-gray-700">
          <li>John Doe (Admin)</li>
          <li>Jane Smith (Moderator)</li>
          <li>Alex Johnson (Member)</li>
        </ul>
      </section>

      {/* Admin Section */}
      <section className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Admin Panel</h2>
        <p className="text-gray-700">Manage roles, members, and server settings here.</p>
      </section>
    </motion.main>
  );
}

export default Discord;
