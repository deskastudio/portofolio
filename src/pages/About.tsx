import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div
      data-testid="motion-div" // Menambahkan test id di sini
      className="mt-10 max-w-5xl mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg shadow-2xl text-white transition-colors duration-500"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Gambar */}
        <div className="flex justify-center">
          <img
            src="/assets/img/profile.jpg"  // Perbaikan path gambar
            alt="Profile"
            className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-white dark:border-gray-700"
          />
        </div>

        {/* Konten */}
        <div>
          <h2 className="text-5xl font-extrabold mb-6 text-center md:text-left text-white">
            About Me
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-center md:text-left">
            Hello! I'm <span className="font-bold text-yellow-300">Deska Mulyana</span>, a passionate{' '}
            <span className="font-bold text-yellow-300">Fullstack Developer</span> with expertise in building
            end-to-end web applications. I enjoy creating solutions that are efficient, scalable, and tailored to user needs.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-center md:text-left">
            With proficiency in technologies like{' '}
            <span className="font-bold text-yellow-300">React</span>,{' '}
            <span className="font-bold text-yellow-300">Node.js</span>,{' '}
            <span className="font-bold text-yellow-300">Express</span>,{' '}
            <span className="font-bold text-yellow-300">TypeScript</span>, and{' '}
            <span className="font-bold text-yellow-300">PostgreSQL</span>, I excel in crafting both frontend
            and backend systems. From designing interactive UIs to managing robust server-side logic and databases, I thrive on turning complex ideas into reality.
          </p>
          <p className="text-lg leading-relaxed text-center md:text-left">
            Outside of coding, I enjoy learning about new technologies, contributing to open-source projects,
            and exploring the ever-evolving world of software development. Let's collaborate and create
            something extraordinary together!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
