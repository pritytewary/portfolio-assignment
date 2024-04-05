import React from "react";
import { motion } from "framer-motion";

const Hero = ({ user }) => {
  return (
    <motion.section
      className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-10 px-4 sm:px-6 lg:px-8  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold mb-4 font-hero"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {user.about.name}
            </motion.h1>
            <motion.h2
              className="text-2xl sm:text-3xl  font-bold mb-4 font-abc"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              ------------- I am a {user.about.title}
            </motion.h2>
            <motion.p
              className="text-lg mb-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              {user.about.subtitle}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative overflow-hidden rounded-full"
          >
            <motion.img
              src={user.about.avatar.url}
              alt="Profile"
              className=" w-[500px] h-[500px] object-cover shadow-lg rounded-full"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
