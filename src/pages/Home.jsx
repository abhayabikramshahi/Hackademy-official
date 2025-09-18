// pages/Home.jsx
import React from "react";
import SEO from "../components/SEO";
import { FaDiscord } from "react-icons/fa";

function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <SEO
        title="Hackademy Zone | Learn, Build, and Connect"
        description="Hackademy Zone is a next-gen tech learning platform in Nepal. Access courses, join community, and work on projects with coders and creators."
        image="https://hackademyzone.netlify.app/og-image.png"
        url="https://hackademyzone.netlify.app/"
      />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Welcome to Hackademy Zone
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-6">
          A vibrant community where techies and non-techies connect, learn, and build together.
        </p>
        <p className="text-gray-400 mb-8">
          Join our community and start building your future today!
        </p>
        <a
          href="https://discord.gg/KEyZUcNUs2"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
        >
          <FaDiscord className="text-2xl" />
          Join Now
        </a>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            icon: "📚",
            title: "Courses",
            description:
              "High-quality courses in web development, programming, and more to level up your skills.",
          },
          {
            icon: "👥",
            title: "Community",
            description:
              "Collaborate, share ideas, and grow your skills with fellow learners.",
          },
          {
            icon: "🚀",
            title: "Projects",
            description:
              "Work on real-world projects and build a portfolio that stands out.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-red-500 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-4">
              {feature.icon} {feature.title}
            </h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Hackademy?</h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Hackademy is a next-generation tech learning platform in Nepal where you can access courses, projects, and a vibrant tech community. 
          Whether you are a beginner, advanced developer, or just looking to explore, Hackademy has something for everyone — tech or non-tech!
        </p>
      </section>
    </main>
  );
}

export default Home;
