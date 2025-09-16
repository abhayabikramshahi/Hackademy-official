export default function CommunityPage() {
  return (
    <div className="pt-20 min-h-screen bg-black text-white px-8 sm:px-20">
      <h1 className="text-4xl font-bold text-red-500 mb-6">Community</h1>
      <p className="text-gray-300 text-lg mb-10">
        Join our active developer community! Collaborate, share projects, get help, and connect with like-minded learners.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <a
          href="https://discord.com/invite/your-server"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-red-600 transition flex items-center gap-1 justify-center"
        >
          Get Access →
        </a>
        <a
          href="https://github.com/your-org"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 border border-red-500 text-red-500 font-semibold py-3 px-6 rounded-full hover:bg-red-500 hover:text-black transition flex items-center gap-1 justify-center"
        >
          GitHub
        </a>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {["Project Discussions", "Collaboration Opportunities", "Mentorship Programs", "Hackathons", "Open Source Contributions", "Study Groups"].map((topic) => (
          <div
            key={topic}
            className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-red-500/50 transition flex flex-col justify-between"
          >
            <h2 className="text-xl font-semibold text-red-500 mb-2">{topic}</h2>
            <p className="text-gray-300">
              Engage in {topic} with the community and level up your skills.
            </p>
            <a
              href="https://discord.com/invite/your-server"
              className="text-red-500 font-semibold hover:text-red-600 flex items-center gap-1 mt-2"
            >
              Get Access →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
