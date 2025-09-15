import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // 👈 Import icons
import Logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses' },
  { name: 'Community', path: '/community' },
  { name: 'About', path: '/about' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-rakh-kalo text-seto p-4 flex justify-between items-center shadow-md z-50 antialiased font-sans">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Hackademy Logo" className="h-[50px] w-[50px]" />
        <span className="text-2xl font-bold tracking-wide">Hackademy</span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6 text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.path} className="hover:text-hola transition-colors">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />} {/* 👈 Icons */}
      </button>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-rakh-kalo flex flex-col justify-center items-center space-y-8 z-50 text-2xl font-semibold transition-all duration-300">
          {/* Close Icon in Top Right */}
          <button
            className="absolute top-6 right-6 hover:text-hola transition-colors"
            onClick={toggleMenu}
          >
            <X size={36} strokeWidth={2.5} /> {/* Bold Close */}
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-hola transition-colors"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
