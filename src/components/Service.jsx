import React from "react";
import { motion } from "framer-motion";

const ServiceSection = ({ services }) => {
  if (!services || services.length === 0) {
    return <div>No services available</div>;
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="sm:text-5xl text-6xl font-bold text-white pb-5 border-2 border-white bg-gradient-to-r from-gray-800 to-black cursor-pointer mb-8 text-center">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service._id}
              className="bg-black text-white rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={service.image.url}
                alt={service.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl  mb-2 font-bold text-emerald-600">
                  {service.name}
                </h2>
                <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{service.charge}</span>
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-300 transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
