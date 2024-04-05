import React, { useState } from "react";
import { motion } from "framer-motion";

const TimelineSection = ({ timeline }) => {
  if (!timeline || timeline.length === 0) {
    return <div>No timeline data available</div>;
  }

  const education = timeline.filter((item) => item.forEducation);
  const experience = timeline.filter((item) => !item.forEducation);

  const [activeTab, setActiveTab] = useState("experience");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="sm:text-5xl text-6xl font-bold text-white pb-5 border-2 border-white bg-gradient-to-r from-gray-800 to-black cursor-pointer mb-8 text-center">
          Resume
        </h1>

        <div className="flex justify-center mb-8">
          <button
            className={`mr-4 text-5xl font-semibold text-white border border-white px-40 py-2 ${
              activeTab === "experience" ? "bg-purple-300" : ""
            }`}
            onClick={() => handleTabChange("experience")}
          >
            Experience
          </button>
          <button
            className={`text-5xl font-semibold text-white border border-white px-40 py-2 ${
              activeTab === "education" ? "bg-purple-300" : ""
            }`}
            onClick={() => handleTabChange("education")}
          >
            Education
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {activeTab === "education" && (
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Education</h2>
              {education.map((item, index) => (
                <motion.div
                  key={item._id}
                  className="mb-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {item.company_name}
                  </h3>
                  <p className="text-lg text-gray-300 mb-2">{item.jobTitle}</p>
                  <p className="text-lg text-gray-400 mb-2">
                    {item.startDate} - {item.endDate}
                  </p>
                  <p className="text-lg text-gray-400 mb-4">{item.summary}</p>
                  <ul className="list-disc list-inside text-lg text-gray-400">
                    {item.bulletPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "experience" && (
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Experience</h2>
              {experience.map((item, index) => (
                <motion.div
                  key={item._id}
                  className="mb-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {item.company_name}
                  </h3>
                  <p className="text-lg text-gray-300 mb-2">{item.jobTitle}</p>
                  <p className="text-lg text-gray-400 mb-2">
                    {item.startDate} - {item.endDate}
                  </p>
                  <p className="text-lg text-gray-400 mb-4">{item.summary}</p>
                  <ul className="list-disc list-inside text-lg text-gray-400">
                    {item.bulletPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
