"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Projects", href: "/projects" },
    { name: "Community", href: "/community" },
  ];

  return (
    <nav className="bg-black text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-20 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/file.svg" // your logo
            alt="Hackademy Zone Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-red-500 font-bold text-xl">Hackademy Zone</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-red-500 transition"
              >
                {link.name}
              </Link>
            )
          )}
          <a
            href="https://discord.com/invite/your-server"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-black font-semibold py-2 px-4 rounded-full hover:bg-red-600 transition"
          >
            Join
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-red-500 transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}
          <a
            href="https://discord.com/invite/your-server"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-black font-semibold py-2 px-4 rounded-full hover:bg-red-600 transition text-center"
          >
            Join
          </a>
        </div>
      )}
    </nav>
  );
}
