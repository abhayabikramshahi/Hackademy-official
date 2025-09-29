// pages/Home.jsx
import React from "react";
import SEO from "../components/SEO";
import { FaDiscord } from "react-icons/fa";
import { useNavigate  } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleJoinClick = () => {
  window.open("https://discord.com/invite/KEyZUcNUs2", "_blank"); // opens in new tab
  // or, if you want to redirect in the same tab:
  // window.location.href = "https://discord.com/invite/KEyZUcNUs2";
}

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <SEO
        title="Hackademy Zone | Learn, Build, and Connect"
        description="Hackademy Zone is a next-gen tech learning platform in Nepal. Access courses, join community, and work on projects with coders and creators."
        image="https://hackademyzone.netlify.app/og-image.png"
        url="https://hackademyzone.netlify.app/"
      />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
          Welcome to Hackademy Zone
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mb-6">
          A vibrant community where techies and non-techies connect, learn, and build together.
        </p>
        <p className="text-gray-500 mb-8">
          Join our community and start building your future today!
        </p>
        <button
          onClick={handleJoinClick}
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full text-lg font-semibold text-white transition duration-300 shadow-md"
        >
          <FaDiscord className="text-2xl" />
          Join Now
        </button>
      </section>
    </main>
  );
}

export default Home;
