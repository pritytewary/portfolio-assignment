import React from "react";
import { motion } from "framer-motion";

const ProjectSection = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return <div>No skills to display</div>;
  }

  const sortedProjects = projects.sort((a, b) => a.sequence - b.sequence);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-gradient-to-tr from-purple-300 via-purple-600 to-blue-500 text-gray-800 text-6xl items-center flex justify-center py-0.5 px-6 font-bungee mb-12"
          initial={{ y: -20 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Projects
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sortedProjects.map((project, index) => (
            <motion.div
              key={project._id}
              className="   bg-gradient-to-r from-black to-gray-800 text-white shadow-lg rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={project.image.url}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 font-">
                <h2 className="text-xl font-semibold mb-4 font-about">
                  {project.title}
                </h2>
                <p className="mb-4 text-white font-sansita">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 font-bungee">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="  px-2 py-1 rounded-md text-xl font-bold text-emerald-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex justify-center font-nav">
                  <a
                    href={project.liveurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-purple-300 transition duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githuburl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
