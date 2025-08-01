import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-[#0d1117] py-16 px-4 md:px-24 text-white">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <p className="text-gray-300 mt-2">
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold">Contact Information</h3>
          <div className="bg-[#2D3748] p-4 rounded-md flex items-center gap-4">
            <FaEnvelope className="text-blue-400 text-xl" />
            <div>
              <h4 className="font-medium">Email</h4>
              <p>dungarwalshubham56@gmail.com</p>
            </div>
          </div>
          <div className="bg-[#2D3748] p-4 rounded-md flex items-center gap-4">
            <FaPhone className="text-blue-400 text-xl" />
            <div>
              <h4 className="font-medium">Phone</h4>
              <p>+91 7909913336</p>
            </div>
          </div>
          <div className="bg-[#2D3748] p-4 rounded-md flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-400 text-xl" />
            <div>
              <h4 className="font-medium">Location</h4>
              <p>Indore, India</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Me</h3>
            <div className="flex gap-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="bg-[#2D3748] p-3 rounded-full hover:bg-blue-600 transition">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-[#2D3748] p-3 rounded-full hover:bg-blue-600 transition">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-[#2D3748] p-8 rounded-md shadow-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input type="text" className="w-full p-3 rounded bg-[#1A202C] border border-gray-700 focus:outline-none" placeholder="Full Name" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full p-3 rounded bg-[#1A202C] border border-gray-700 focus:outline-none" placeholder="Email Address" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Message</label>
            <textarea className="w-full p-3 rounded bg-[#1A202C] border border-gray-700 focus:outline-none" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded text-white font-semibold hover:opacity-90 transition">
            <span className="inline-flex items-center justify-center gap-2">
             <FaTelegramPlane/>
              Send Message
            </span>
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;