import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: icon library like lucide-react

const Navbar = ({
  onHomeClick,
  onProjectsClick,
  onSkillsClick,
  onAboutClick,
  onContactClick,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (callback) => {
    callback();
    setMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className="py-4 px-6 md:px-10 bg-[#0d1117] text-gray-100 sticky top-0 border-b z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-violet-600">
          Shubham Dunagrwal
        </h1>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-5 text-white text-lg">
          <li
            onClick={onHomeClick}
            className="text-xl font-semibold text-transparent bg-clip-text bg-white hover:bg-gradient-to-r from-sky-500 to-violet-600"
          >
            Home
          </li>
          <li
            onClick={onProjectsClick}
            className="text-xl font-semibold text-transparent bg-clip-text bg-white hover:bg-gradient-to-r from-sky-500 to-violet-600"
          >
            Projects
          </li>
          <li
            onClick={onSkillsClick}
            className="text-xl font-semibold text-transparent bg-clip-text bg-white hover:bg-gradient-to-r from-sky-500 to-violet-600"
          >
            Skills
          </li>
          <li
            onClick={onAboutClick}
            className="text-xl font-semibold text-transparent bg-clip-text bg-white hover:bg-gradient-to-r from-sky-500 to-violet-600"
          >
            About
          </li>
          <li
            onClick={onContactClick}
            className="text-xl font-semibold text-transparent bg-clip-text bg-white hover:bg-gradient-to-r from-sky-500 to-violet-600"
          >
            Contact
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="mt-4 flex flex-col space-y-4 md:hidden text-white text-lg">
          <li onClick={() => handleLinkClick(onHomeClick)}>Home</li>
          <li onClick={() => handleLinkClick(onProjectsClick)}>Projects</li>
          <li onClick={() => handleLinkClick(onSkillsClick)}>Skills</li>
          <li onClick={() => handleLinkClick(onAboutClick)}>About</li>
          <li onClick={() => handleLinkClick(onContactClick)}>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
