import React from "react";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-white via-gray-50 to-white text-gray-700 py-10 px-6 shadow-inner">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 border-b border-gray-200 pb-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Hackademy Zone</h2>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            Hackademy Zone is your hub for coding, ethical hacking, and
            tech-driven learning. Build, break, and innovate with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-black">
                About Us
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-black">
                Courses
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Connect With Us
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hackademy Zone. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
