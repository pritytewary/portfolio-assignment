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

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Kolkata",
    };
    return new Date(dateString).toLocaleDateString("en-IN", options);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-gradient-to-tr from-purple-300 via-purple-600 to-blue-500 text-red-300 text-6xl items-center flex justify-center py-0.5 px-6 font-bungee mb-12"
          initial={{ y: -20 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Resume
        </motion.div>

        <div className="flex justify-center mb-8">
          <button
            className={`mr-4 text-5xl font-semibold text-white border border-white px-40 py-2 font-nav ${
              activeTab === "experience" ? "bg-purple-300" : ""
            }`}
            onClick={() => handleTabChange("experience")}
          >
            Experience
          </button>
          <button
            className={`text-5xl font-semibold text-white border border-white px-40 py-2 font-nav ${
              activeTab === "education" ? "bg-purple-300" : ""
            }`}
            onClick={() => handleTabChange("education")}
          >
            Education
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-white">
          {activeTab === "education" && (
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Education</h2>
              {education.map((item, index) => (
                <motion.div
                  key={item._id}
                  className="mb-8 bg-gradient-to-t from-orange-200 via-lime-400 to-teal-500 rounded-lg p-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-semibold text-white mb-2 font-logo">
                    {item.company_name}
                  </h3>
                  <p className="text-lg  mb-2 font-sansita">{item.jobTitle}</p>
                  <p className="text-lg  mb-2 font-sansita">
                    {formatDate(item.startDate)} - {formatDate(item.endDate)}
                  </p>
                  <p className="text-lg  mb-4 font-sansita">{item.summary}</p>
                  <ul className="list-disc list-inside text-lg  font-vibur">
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
              <h2 className="text-4xl font-bold text-white mb-6 font-about">
                Experience
              </h2>
              {experience.map((item, index) => (
                <motion.div
                  key={item._id}
                  className="mb-8 bg-gradient-to-t from-orange-200 via-lime-400 to-teal-500 rounded-lg p-6 "
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-semibold text-white mb-2 font-logo">
                    {item.company_name}
                  </h3>
                  <p className="text-lg text-white mb-2 font-sansita">
                    {item.jobTitle}
                  </p>
                  <p className="text-lg text-white mb-2 font-sansita">
                    {formatDate(item.startDate)} - {formatDate(item.endDate)}
                  </p>
                  <p className="text-lg text-white mb-4 font-sansita">
                    {item.summary}
                  </p>
                  <ul className="list-disc list-inside text-lg text-white font-vibur">
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
