import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsSection = ({ testimonials }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === (testimonials?.length ?? 0) - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <section className=" px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black to-gray-800 h-full">
      <div className="max-w-7xl mx-auto">
        <h1 className="sm:text-5xl text-6xl font-bold text-white pb-5 border-2 border-white bg-gradient-to-r from-gray-800 to-black cursor-pointer mb-8 text-center">
          Testimonials
        </h1>
        <div className="relative">
          <AnimatePresence initial={false}>
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              mode="wait"
            >
              <div className="bg-black bg-opacity-75 rounded-lg p-8">
                <img
                  src={testimonials?.[index]?.image.url}
                  alt={testimonials?.[index]?.name}
                  className="rounded-full w-16 h-16 mx-auto mb-4"
                />
                <p className="text-white text-lg mb-4">
                  "{testimonials?.[index]?.review}"
                </p>
                <p className="text-gray-300 text-sm">
                  - {testimonials?.[index]?.name},{" "}
                  {testimonials?.[index]?.position}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
