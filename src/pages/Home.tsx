import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-700 text-white">
      <motion.h1
        className="text-7xl font-extrabold mb-4 text-center leading-snug"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Deska Mulyana
      </motion.h1>
      <motion.p
        className="text-2xl font-medium mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        A Fullstack Developer Enthusiast
      </motion.p>
      <motion.a
        href="/projects"
        className="bg-gradient-to-r from-green-400 to-blue-500 px-8 py-4 rounded-lg text-lg font-bold shadow-lg transform hover:scale-105 transition-transform"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        View My Work
      </motion.a>
    </div>
  );
};

export default Home;
