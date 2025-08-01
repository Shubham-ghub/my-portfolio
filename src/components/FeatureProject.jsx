import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
    title: "Food Delivery App",
    description: "A full-stack MERN food delivery app with user authentication, cart system, and admin panel.",
    tech: ["React", "Node.js", "MongoDB"],
    liveLink: "https://your-foodapp-demo.netlify.app",
    codeLink: "https://github.com/your-username/food-delivery-app",
    image: "/images/daily-dabba.png",
  },
  {
    title: "Pokemon Game App",
    description: "Guess the Pokémon is a fun React JS game using Context API for global state management. It fetches Pokémon data from an API, allowing users to guess names with limited attempts. The app tracks scores, updates UI dynamically, and offers a responsive, clean design built with Tailwind CSS for better user experience.",
    tech: ["React", "Node.js", "Context API"],
    liveLink: "https://pokemon-game-blue.vercel.app/",
    codeLink: "https://github.com/Shubham-ghub/pokemon-game.git",
    image: "https://api.triviacreator.com/v1/imgs/quiz/cover-a9135ee4-dbcf-43cc-a2d0-ab721187296b.png",
  },
  {
    title: "Khatabook Clone",
    description: "A React-based clone of the Khatabook app to manage personal finances and transactions.",
    tech: ["React", "Tailwind", "Context API"],
    liveLink: "https://khatabook-react-seven.vercel.app/",
    codeLink: "https://github.com/Shubham-ghub/khatabook_react.git",
    image: "/images/khatabook.png",
  },
  
];

const FeatureProject = () => {
  return (
    <section id="projects" className="bg-[#0d1117] text-white py-16 px-6 lg:px-32">
      <motion.h2
        className="text-4xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className="text-center text-gray-400 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Some of the cool things I’ve built recently
      </motion.p>

      <div className="grid gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="md:w-1/2 w-full h-60 object-fill"
            />

            {/* Project Content */}
            <div className="p-6 md:w-1/2 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-600 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm transition-all"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-gray-400 hover:bg-gray-800 px-4 py-2 rounded-md text-sm transition-all"
                >
                  <FaGithub className="text-lg" />
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureProject;
