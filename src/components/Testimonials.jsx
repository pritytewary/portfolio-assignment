import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsSection = ({ testimonials }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === (testimonials?.length ?? 0) - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-gray-900 to-black pt-20 sm:pt-24 h-[400px] ">
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white  sm:pb-8 text-center"></h1>
        <div className="relative">
          <AnimatePresence initial={false}>
            <motion.div
              key={index}
              className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-900 bg-opacity-90 rounded-lg p-6 sm:p-8 text-center shadow-xl shadow-purple-200">
                <img
                  src={testimonials?.[index]?.image.url}
                  alt={testimonials?.[index]?.name}
                  className="rounded-full w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4"
                />
                <p className="text-white text-lg sm:text-xl mb-6 font-vibur">
                  "{testimonials?.[index]?.review}"
                </p>
                <p className="text-gray-300 text-base sm:text-sm font-sansita">
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
