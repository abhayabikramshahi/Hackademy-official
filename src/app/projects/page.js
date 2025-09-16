export default function ProjectsPage() {
  return (
    <div className="pt-20 min-h-screen bg-black text-white px-8 sm:px-20">
      <h1 className="text-4xl font-bold text-red-500 mb-6">Projects</h1>
      <p className="text-gray-300 text-lg mb-10">
        Check out cool projects built by our community and contributors.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {["Portfolio Site", "E-commerce App", "Chat App", "Hacking Tool", "Game App", "Blog Platform"].map((project) => (
          <div
            key={project}
            className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-red-500/50 transition flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-red-500 mb-2">{project}</h2>
              <p className="text-gray-300 mb-4">
                A complete {project} built with modern technologies.
              </p>
            </div>
            <a
              href="/projects" // or specific project page if available
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
