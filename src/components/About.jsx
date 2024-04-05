import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const AboutSection = ({ user }) => {
  return (
    <motion.section
      className="bg-black text-white py-10 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <div className="bg-gray-800 border-y border-x border-white text-white text-6xl items-center flex justify-center ">
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
            <motion.div
              className="absolute inset-0 w-80 h-80 object-cover bg-gradient-to-r from-pink-400 to-purple-600 rounded-full"
              animate={{ x: [0, 100, 0] }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
