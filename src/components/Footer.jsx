import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white w-full py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <Link to="/" className="hover:text-red-500 transition">Home</Link>
          <Link to="/about" className="hover:text-red-500 transition">About</Link>
          <Link to="/courses" className="hover:text-red-500 transition">Courses</Link>
          <Link to="/community" className="hover:text-red-500 transition">Community</Link>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-red-500 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-red-500 transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-red-500 transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-red-500 transition"><Github size={20} /></a>
          </div>
        </div>

        {/* About */}
        <div className="flex flex-col gap-2 max-w-sm">
          <h3 className="font-bold text-lg mb-2">About Hackademy</h3>
          <p className="text-gray-400 text-sm">
            Hackademy is a next-gen tech learning platform in Nepal offering courses, projects, and a tech community to help you level up your skills.
          </p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} Hackademy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
