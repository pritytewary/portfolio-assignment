import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const AboutSection = ({ user }) => {
  return (
    <motion.section
      className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-10 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-tr from-purple-300 via-purple-600 to-blue-500 text-gray-800 text-6xl items-center flex justify-center py-0.5 px-6 font-about ">
              About Me
            </div>

            <motion.p
              className="text-lg mb-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {user.about.subtitle}
            </motion.p>
            <motion.p
              className="text-lg mb-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              {user.about.description}
            </motion.p>
            <motion.div
              className="flex items-center mb-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <FiPhone className="mr-2" />
              <p className="text-lg">{user.about.phoneNumber}</p>
            </motion.div>
            <motion.div
              className="flex items-center mb-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              <FiMail className="mr-2" />
              <p className="text-lg">{user.about.contactEmail}</p>
            </motion.div>
            <motion.div
              className="flex items-center mb-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <FiMapPin className="mr-2" />
              <p className="text-lg">{user.about.address}</p>
            </motion.div>
          </div>
          <motion.div
            animate={{ x: [0, 100, 0] }}
            className="relative overflow-hidden rounded-md"
          >
            <motion.div animate={{ x: [0, 100, 0] }} />
            <img
              className="absolute inset-0 w-80 h-80 object-cover ml-40 shadow-2xl shadow-purple-400 rounded-full"
              src="https://static-00.iconduck.com/assets.00/web-developer-illustration-1004x1024-wcqgbag3.png"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
