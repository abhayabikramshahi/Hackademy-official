import React from "react";
import { FaDiscord } from "react-icons/fa"; // Discord icon

function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Hackademy Zone
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8">
          A place where techies and non-techies can connect — perfect for coders
          and chillers alike. Come, join, and enjoy the vibe — boom!
        </p>
        <p className="text-gray-400 mb-8">
          Join our community and start building your future today!
        </p>

        {/* Discord Join Now Button */}
        <a
          href="https://discord.gg/KEyZUcNUs2" // Replace with your server link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full text-lg font-semibold transition"
        >
          <FaDiscord className="text-2xl" />
          Join Now
        </a>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-red-500 transition">
          <h2 className="text-xl font-semibold mb-4">📚 Courses</h2>
          <p>
            Get access to high-quality courses in web development, programming,
            and more.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-red-500 transition">
          <h2 className="text-xl font-semibold mb-4">👥 Community</h2>
          <p>
            Collaborate with other learners, share ideas, and grow your skills
            together.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-red-500 transition">
          <h2 className="text-xl font-semibold mb-4">🚀 Projects</h2>
          <p>
            Work on real-world projects and build a portfolio that stands out.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Hackademy?</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          "Hackademy is a next-generation tech learning platform in Nepal where
          you can access courses, projects, and a vibrant tech community all in
          one place. Whether you are a beginner, an advanced developer, or just
          someone who wants to chill and meet people, Hackademy has something
          for everyone — tech or non-tech!"
        </p>
      </section>
    </main>
  );
}

export default Home;
