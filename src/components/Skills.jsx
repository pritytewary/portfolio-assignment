import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SkillsSection = ({ skills }) => {
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    if (showSkills) {
      const delay = 200;
      let animationDelay = 0;

      skills.forEach((_, index) => {
        setTimeout(() => {
          setShowSkills((prev) => ({ ...prev, [index]: true }));
        }, animationDelay);
        animationDelay += delay;
      });
    }
  }, [showSkills, skills]);

  const handleSkillClick = () => {
    setShowSkills(true);
  };

  if (!skills || skills.length === 0) {
    return <div>No skills to display</div>;
  }

  return (
    <motion.section
      className="bg-gradient-to-r from-black to-gray-800 text-white py-10 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        <h1
          className="flex items-center justify-center text-6xl font-bold text-white  pb-5 border-2 border-white bg-gradient-to-r from-gray-800 to-black cursor-pointer"
          onClick={handleSkillClick}
        >
          Skill
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <div
              className="flex flex-col justify-center"
              key={skill._id}
              style={{ display: showSkills ? "flex" : "none" }}
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
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
