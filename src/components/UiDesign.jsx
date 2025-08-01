import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const uiProjects = [
  {
    title: "ZOMATO Clone",
    description:
      "I created a responsive clone of the GreenGeeks website using HTML and CSS, featuring a clean layout, modern design, and mobile-friendly structure.",
    tech: ["HTML5", "CSS"],
    image: "/images/zomato1.png",
    codeLink: "https://github.com/Shubham-ghub/zomato-clone.git",
    liveLink: "https://shubham-ghub.github.io/zomato-clone/",
  },
  {
    title: "Beauty Product UI",
    description:
      "I created a responsive clone of the GreenGeeks website using HTML and CSS, featuring a clean layout, modern design, and mobile-friendly structure.",
    tech: ["HTML5", "CSS"],
    image: "/images/beauty.png",
    codeLink: "https://github.com/Shubham-ghub/medium-clone-UI.git",
    liveLink: "https://shubham-ghub.github.io/beauty-product-ui/",
  },
  {
    title: "Medium Clone",
    description:
      "I created a responsive clone of the GreenGeeks website using HTML and CSS, featuring a clean layout, modern design, and mobile-friendly structure.",
    tech: ["HTML5", "CSS"],
    image: "/images/medium.png",
    codeLink: "https://github.com/your-username/cranbery",
    liveLink: "https://shubham-ghub.github.io/medium-clone-UI/",
  },
];

const UIDesign = () => {
  return (
    <section
      id="ui-design"
      className="bg-[#0d1117] text-white py-16 px-6 lg:px-32"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        UI Design
      </motion.h2>
      <motion.p
        className="text-center text-gray-400 mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        "I craft modern, responsive, and user-friendly UI designs that focus on
        visual appeal, usability, and seamless user experience."
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {uiProjects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-[#161b22] rounded-xl overflow-hidden shadow-lg flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col justify-between h-full">
              <div className="mb-4">
                <div className="text-sm text-gray-400 flex items-center gap-2">
                
                </div>
                <h3 className="text-xl font-semibold mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-700 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-sm px-4 py-2 rounded-md transition"
                >
                  <FaGithub />
                  Code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-sm px-4 py-2 rounded-md transition"
                >
                  <BiLinkExternal />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Posts */}
      <div className="text-center mt-12">
        <button className="px-6 py-2 border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white transition rounded-md">
          View All Posts
        </button>
      </div>
    </section>
  );
};

export default UIDesign;
