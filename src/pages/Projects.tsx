import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: 'Project One',
      description: 'DigiCar Point',
      details: 'A platform offering car rental services to meet your travel needs. With a proven track record since 2018, DigiCarPoint has served over 10,000 customers, providing modern and reliable solutions for personal and business journeys.',
      link: '#',
      image: './src/assets/img/project_1.png',
    },
    {
      title: 'Project Two',
      description: 'NeedSkincareID',
      details: 'A design project showcasing a skincare product with sleek packaging, aimed at boosting confidence in any situation. This project emphasizes modern aesthetics to attract users and enhance the brands appeal.',
      link: '#',
      image: './src/assets/img/project_2.png',
    },
    {
      title: 'Project Three',
      description: 'Shinta Sport Center',
      details: 'A vibrant graphic design celebrating Indonesias cultural richness and diversity in sports. Featuring colorful artistic elements, this project highlights the spirit of sportsmanship while promoting the nations cultural identity.',
      link: '#',
      image: './src/assets/img/project_3.png',
    },
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, transition: { duration: 1 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <div className="py-10 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-100">My Projects</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 transition-shadow"
            whileHover="hover"
            variants={cardVariants}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover shadow-lg filter brightness-90 hover:brightness-75 transition-all duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <button
                onClick={() => openModal(project)}
                className="text-indigo-500 hover:text-indigo-600 font-medium"
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pop-up Modal with Smooth Animation */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto object-contain"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 px-3 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedProject.details}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
