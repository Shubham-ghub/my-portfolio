import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 70 },
];

const barVariant = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0d1117] text-white py-16 px-6 lg:px-32">
      <motion.h2
        className="text-4xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>
      <motion.p
        className="text-center text-gray-400 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        A visual representation of my proficiency in various web technologies.
      </motion.p>

      <div className="space-y-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
          >
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium">{skill.name}</span>
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
              <motion.div
                className="bg-blue-600 h-4 rounded-full"
                custom={skill.level}
                variants={barVariant}
                initial="hidden"
                whileInView="visible"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
