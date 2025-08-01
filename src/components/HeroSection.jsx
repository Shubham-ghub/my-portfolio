import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className='min-h-screen bg-[#0d1117] px-6 md:px-10 flex flex-col md:flex-row justify-between items-center py-10'>

      {/* Left Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left"
      >
        {/* Name */}
        <h1 className='text-4xl sm:text-5xl font-bold'>
          <span className='text-white'>Hello, I'm </span>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-700'>
            Shubham Dungarwal
          </span>
        </h1>

        {/* Role */}
        <motion.p
          className='text-gray-100 text-xl sm:text-2xl pt-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p
          className='text-gray-100 pt-3 text-base sm:text-md max-w-xl mx-auto md:mx-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I build full stack web applications using MongoDB, Express, React, and Node.js.
          From clean frontends to robust backends, I create fast, responsive, and modern
          web solutions that help users and businesses work smarter.
        </motion.p>

        {/* Buttons & Icons */}
        <motion.div
          className="flex flex-wrap gap-4 md:gap-5 pt-5 mt-8 items-center justify-center md:justify-start"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {/* Hire Me */}
          <a target='_blank' rel="noopener noreferrer" href="mailto:dungarwalshubham@gmail.com">
            <button className="text-black text-base sm:text-lg py-2 px-3 font-semibold rounded-md flex items-center bg-gradient-to-r from-indigo-500 to-blue-700 hover:scale-110 transition-transform">
              <Mail className="mr-1" /> Hire Me
            </button>
          </a>

          {/* Resume Download */}
          <a href="/resume.pdf" download>
            <button className="text-black text-base sm:text-lg py-2 px-3 font-semibold rounded-md flex items-center bg-gradient-to-r from-indigo-500 to-blue-700 hover:scale-110 transition-transform">
              Download Resume <Download className="ml-1" />
            </button>
          </a>

          {/* LinkedIn */}
          <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/shubham-dungarwal">
            <Linkedin className='text-white text-2xl hover:scale-110 transition-transform' />
          </a>

          {/* GitHub */}
          <a target='_blank' rel="noopener noreferrer" href="https://github.com/Shubham-ghub">
            <Github className="text-white text-2xl hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="mt-10 md:mt-0 md:ml-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 120 }}
      >
        <div className="bg-[url('/images/my-pic.jpg')] bg-cover bg-center h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-full shadow-lg border-2 border-white"></div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
