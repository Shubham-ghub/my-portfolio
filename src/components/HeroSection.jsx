import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className='min-h-150 bg-[#0d1117] px-10 flex flex-col md:flex-row justify-between items-center py-10'>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-5xl font-bold'>
          <span className='text-white'>Hello, I'm </span>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-700'>
            Shubham Dungarwal
          </span>
        </h1>

        <motion.p
          className='text-gray-100 text-2xl pt-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full Stack Developer
        </motion.p>

        <motion.p
          className='text-gray-100 pt-3 text-md w-10/12'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I build full stack web applications using MongoDB, Express, React, and Node.js.
          From clean frontends to robust backends, I create fast, responsive, and modern
          web solutions that help users and businesses work smarter.
        </motion.p>

        <motion.div
          className="flex items-center space-x-5 pt-5 mt-10 flex-wrap"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <a target='_blank' rel="noopener noreferrer" href="mailto:dungarwalshubham@gmail.com">
            <button className="text-black text-xl py-1.5 font-semibold rounded-md flex items-center px-2.5 bg-gradient-to-r from-indigo-500 to-blue-700 hover:scale-110 transition-transform">
              <Mail className="mr-1" /> Hire Me
            </button>
          </a>

          <a href="/resume.pdf" download>
            <button className="text-black text-xl py-1.5 font-semibold rounded-md flex items-center px-2.5 bg-gradient-to-r from-indigo-500 to-blue-700 hover:scale-110 transition-transform">
              Download Resume <Download className="ml-1" />
            </button>
          </a>

          <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/shubham-dungarwal">
            <Linkedin className='text-white text-2xl hover:scale-110 transition-transform' />
          </a>

          <a target='_blank' rel="noopener noreferrer" href="https://github.com/Shubham-ghub">
            <Github className="text-white text-2xl hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-10 md:mt-0 md:ml-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 120 }}
      >
        <div className="bg-[url('/images/my-pic.jpg')] bg-cover h-80 w-80 rounded-full "></div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
