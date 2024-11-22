import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-black text-white p-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/deskastudio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/deskamulyana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://instagram.com/deskamlyn_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Deska Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
