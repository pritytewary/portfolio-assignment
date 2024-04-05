import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillsSection = ({ skills }) => {
  const [showSkills, setShowSkills] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setShowSkills(true);
    }
  }, [inView]);

  return (
    <motion.section
      className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-10 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="bg-gradient-to-tr from-purple-300 via-purple-600 to-blue-500 text-gray-800 text-6xl items-center flex justify-center py-0.5 px-6 font-bungee"
          initial={{ y: -20 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Skill
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              className="flex flex-col justify-center font-sansita"
              key={skill._id}
              initial={{ opacity: 0, y: 50 }}
              animate={
                showSkills ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <div className="text-3xl font-semibold mb-4"></div>
              <motion.div
                className="flex items-center mb-4"
                initial={{ x: -50, opacity: 0 }}
                animate={
                  showSkills ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
                }
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <img
                  src={skill.image.url}
                  alt={skill.name}
                  className="h-8 w-8 mr-4"
                />
                <p className="text-lg mr-4">{skill.name}</p>
                <div className="w-32 h-4 bg-gray-300 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <p className="ml-2">{`${skill.percentage}%`}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
