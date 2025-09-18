import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from '../assets/logo.png'

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {name: "Staffs", path: "/staffs"},
  { name: "Community", path: "/community" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
  <img 
    src={Logo} 
    className="h-12 w-auto" // height 48px, width auto
    alt="Hackademy Logo" 
  />
  <span className="text-2xl font-bold tracking-wide">Hackademy Zone</span>
</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-red-500 transition font-medium"
            >
              {item.name}
            </Link>
          ))}

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-red-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="hover:text-red-500 transition font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
