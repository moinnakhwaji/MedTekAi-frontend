import React, { useState } from "react";
import { routes } from "./Data";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#141414] px-6 py-4 flex items-center justify-between shadow-md z-[9999] fixed top-0 left-0 w-full">
      {/* Logo Section */}
      <div className="flex items-center space-x-3 text-white">
        <svg
          width="40"
          height="40"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="150" height="150" rx="20" fill="#1f1e24" />
          <path
            d="M75 35C78 35 80 37 80 40V65H105C108 65 110 67 110 70C110 73 108 75 105 75H80V100C80 103 78 105 75 105C72 105 70 103 70 100V75H45C42 75 40 73 40 70C40 67 42 65 45 65H70V40C70 37 72 35 75 35Z"
            fill="#4CAF50"
          />
          <circle cx="75" cy="75" r="30" stroke="#4CAF50" strokeWidth="3" fill="none" />
          <circle cx="58" cy="58" r="3" fill="#4CAF50" />
          <circle cx="92" cy="58" r="3" fill="#4CAF50" />
          <circle cx="58" cy="92" r="3" fill="#4CAF50" />
          <circle cx="92" cy="92" r="3" fill="#4CAF50" />
          <line x1="58" y1="58" x2="75" y2="75" stroke="#4CAF50" strokeWidth="2" />
          <line x1="92" y1="58" x2="75" y2="75" stroke="#4CAF50" strokeWidth="2" />
          <line x1="58" y1="92" x2="75" y2="75" stroke="#4CAF50" strokeWidth="2" />
          <line x1="92" y1="92" x2="75" y2="75" stroke="#4CAF50" strokeWidth="2" />
        </svg>
        <h1 className="text-xl font-semibold tracking-wide">HealMind</h1>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center space-x-6">
        {Object.values(routes).map((route, index) => (
          <Link
            key={index}
            to={route.path}
            className="text-gray-300 hover:text-[#4CAF50] transition duration-300"
          >
            {route.name}
          </Link>
        ))}
        <Link to="/login">
          <button className="bg-[#4CAF50] text-white font-semibold px-5 py-2 rounded-md transition-all duration-300 hover:bg-[#388E3C] hover:shadow-md">
            Login
          </button>
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-[#1f1e24] shadow-lg z-[9999] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden flex flex-col items-center py-10 space-y-6`}
      >
        {Object.values(routes).map((route, index) => (
          <Link
            key={index}
            to={route.path}
            className="text-gray-300 hover:text-[#4CAF50] transition duration-300 text-lg"
            onClick={() => setIsOpen(false)}
          >
            {route.name}
          </Link>
        ))}
        <Link to="/login" onClick={() => setIsOpen(false)}>
          <button className="bg-[#4CAF50] text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:bg-[#388E3C]">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
