// app/page.jsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-8 sm:px-20">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-red-500">
          HackedMy Zone
        </h1>
        <p className="text-lg sm:text-2xl mb-8 max-w-2xl text-gray-300">
          Your ultimate tech hub for hacking, coding, and all things dev.
          Explore tutorials, projects, and resources designed for ambitious learners.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#courses"
            className="bg-red-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-red-600 transition"
          >
            Explore Courses
          </a>
          <a
            href="https://discord.com/invite/your-server"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-red-500 text-red-500 font-semibold py-3 px-6 rounded-full hover:bg-red-500 hover:text-black transition"
          >
            Join Our Community
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 sm:px-20 grid gap-12 sm:grid-cols-3 text-center">
        <div className="bg-gray-900 shadow-md rounded-xl p-6 hover:shadow-red-500/50 transition">
          <Image
            src="/icons/tutorial.svg"
            alt="Tutorials"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h3 className="font-bold text-xl mb-2 text-red-500">Tutorials</h3>
          <p className="text-gray-300">Step-by-step coding tutorials to level up your skills.</p>
        </div>
        <div className="bg-gray-900 shadow-md rounded-xl p-6 hover:shadow-red-500/50 transition">
          <Image
            src="/icons/projects.svg"
            alt="Projects"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h3 className="font-bold text-xl mb-2 text-red-500">Projects</h3>
          <p className="text-gray-300">Build real-world projects to strengthen your portfolio.</p>
        </div>
        <div className="bg-gray-900 shadow-md rounded-xl p-6 hover:shadow-red-500/50 transition">
          <Image
            src="/icons/community.svg"
            alt="Community"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h3 className="font-bold text-xl mb-2 text-red-500">Community</h3>
          <p className="text-gray-300">Collaborate, share ideas, and learn with like-minded devs.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-8 sm:px-20 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p>&copy; {new Date().getFullYear()} HackedMy Zone. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">Twitter</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">GitHub</a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">Discord</a>
        </div>
      </footer>
    </div>
  );
}
