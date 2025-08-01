import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const techs = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"];
const stats = [
  { label: "Projects Completed", value: "30+", icon: "👨‍💻" },
  { label: "Years Experience", value: "1+", icon: "📊" },
];

const About = () => {
  return (
    <section id="about" className="bg-[#0d1117] text-white py-16 px-6 lg:px-32">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-2"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center text-gray-400 mb-10"
      >
        Get to know more about me, my skills, and my journey as a developer
      </motion.p>

      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Side - My Story */}
        <motion.div
          className="lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-2">My Story</h3>
          <p className="text-gray-300">
            I'm a passionate Full Stack Developer with over 1 years of
            experience creating dynamic web applications. My journey began with
            a curiosity about how websites work, which evolved into a deep love
            for coding and problem-solving.
          </p>
          <p className="text-gray-300">
            I specialize in building scalable applications using modern
            technologies like React, Node.js, and MongoDB. I believe in writing
            clean, efficient code and creating user experiences that are both
            functional and beautiful.
          </p>
          <p className="text-gray-300">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing my knowledge with
            the developer community.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all duration-300"
          >
            <FaDownload /> Download Resume
          </a>
        </motion.div>

        {/* Right Side - Tech & Stats */}
        <motion.div
          className="lg:w-1/2 space-y-10"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Technologies */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Technologies I Use</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techs.map((tech, idx) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={idx}
                  className="bg-gray-800 text-center py-3 rounded-md shadow-md cursor-pointer transition-transform"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Stats</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {stats.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-5 rounded-md shadow-md text-center"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-2xl font-bold">{item.value}</div>
                  <p className="text-sm text-gray-400">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
