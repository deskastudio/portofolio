import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <motion.nav
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold tracking-wide">
          <Link to="/">My Portfolio</Link>
        </h1>
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className="hover:text-gray-300 transition-all duration-300 font-medium tracking-wide"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300 transition-all duration-300 font-medium tracking-wide"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-gray-300 transition-all duration-300 font-medium tracking-wide"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300 transition-all duration-300 font-medium tracking-wide"
          >
            Contact
          </Link>
          <motion.button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-white text-gray-700 shadow-lg focus:outline-none"
            whileHover={{ scale: 1.1 }}
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
