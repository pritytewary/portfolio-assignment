import React, { useState, useEffect, useRef } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactForm = ({ contactDetails, user }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    setFormData({
      name: user.about.name || "",
      email: user.contactEmail || "",
      phone: user.phoneNumber || "",
      message: "",
    });
  }, [contactDetails, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const animationControls = useAnimation();
  const [formRef, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      animationControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [animationControls, inView]);

  return (
    <motion.div
      ref={formRef}
      initial={{ opacity: 0, y: 50 }}
      animate={animationControls}
      className="flex flex-col bg-gradient-to-r from-black via-gray-900 to-black text-white px-4 sm:px-6 lg:px-8  pb-6 md:pb-10  "
    >
      <motion.h2 className="text-3xl font-extrabold mb-4 font-abc bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-700 text-transparent bg-clip-text inline-block text-center">
        Get In Touch
      </motion.h2>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-8 font-sansita w-full max-w-4xl mx-auto mb-8">
        <motion.p className="flex items-center gap-3 text-lg sm:text-xl">
          <span className="font-semibold">
            <FiPhone size={25} />
          </span>{" "}
          {user.about.phoneNumber}
        </motion.p>
        <motion.p className="flex items-center gap-3 text-lg sm:text-xl">
          <span className="font-semibold">
            <FiMail size={25} />
          </span>{" "}
          {user.about.contactEmail}
        </motion.p>
        <motion.p className="flex items-center gap-3 text-lg sm:text-xl">
          <span className="font-semibold">
            <FiMapPin size={25} />
          </span>{" "}
          {user.about.address}
        </motion.p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full font-nav mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow-xl shadow-gray-600 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow-xl shadow-gray-600appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="shadow-xl shadow-gray-600 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your phone number"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow-xl shadow-gray-600 appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-tr from-purple-400 via-purple-600 rounded-full to-blue-500 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full md:w-auto"
          >
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
