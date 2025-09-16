export default function ReactJSCoursePage() {
  return (
    <div className="pt-20 min-h-screen bg-black text-white px-8 sm:px-20">
      {/* Course Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-red-500 mb-6">
        React JS Course
      </h1>

      {/* Course Description */}
      <p className="text-gray-300 text-lg sm:text-xl mb-10">
        Learn React JS from scratch. Build dynamic user interfaces, master components, hooks, state management, and create real-world projects.
      </p>

      {/* Key Features */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {[
          "Components & JSX",
          "State & Props",
          "Hooks",
          "Routing with React Router",
          "Context API",
          "Real-world Project"
        ].map((feature) => (
          <div
            key={feature}
            className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-red-500/50 transition"
          >
            <h2 className="text-xl font-semibold text-red-500 mb-2">{feature}</h2>
            <p className="text-gray-300 text-sm">{`Learn ${feature.toLowerCase()} in depth.`}</p>
          </div>
        ))}
      </div>

      {/* Get Access Button */}
      <a
        href="/courses"
        className="bg-red-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-red-600 transition inline-flex items-center gap-1"
      >
        Get Access →
      </a>
    </div>
  );
}
