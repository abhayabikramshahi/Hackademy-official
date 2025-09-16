import Link from "next/link";

const courses = [
  { name: "React JS", slug: "react-js", description: "Learn React from scratch with hands-on projects." },
  { name: "Python", slug: "python", description: "Dive into Python for scripting, automation, and data science." },
  { name: "JavaScript", slug: "javascript", description: "Learn JavaScript fundamentals and advanced concepts." },
  { name: "CSS", slug: "css", description: "Become a CSS pro for beautiful and responsive web designs." },
  { name: "MERN Stack", slug: "mern-stack", description: "Full-stack development with MongoDB, Express, React, Node.js." },
];

export default function CoursesPage() {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-black text-white px-8 sm:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-red-500 mb-4">Our Courses</h1>
        <p className="text-gray-400 text-lg sm:text-xl">
          Explore coding courses at Hackademy Zone. Learn, build, and level up your skills.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.slug}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-red-500/50 transition flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold text-red-500 mb-3">{course.name}</h2>
              <p className="text-gray-300 mb-6">{course.description}</p>
            </div>

            {/* Get Access Button */}
            <Link
              href={`/courses/${course.slug}`}
              className="inline-flex items-center justify-center gap-2 text-red-500 font-semibold hover:text-red-600 transition"
            >
              Get Access →
            </Link>
          </div>
        ))}
      </div>

      {/* Optional Footer CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 mb-4">Want access to all courses?</p>
        <a
          href="/signup" 
          className="bg-red-500 text-black font-semibold py-3 px-8 rounded-full hover:bg-red-600 transition"
        >
          Join Hackademy Zone
        </a>
      </div>
    </div>
  );
}
