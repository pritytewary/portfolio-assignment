import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      layoutId="navbar"
      aria-hidden="true"
      style={{
        width: "100%",
      }}
      transition={{
        type: "spring",
        bounce: 0.25,
        stiffness: 130,
        damping: 9,
        duration: 0.3,
      }}
    >
      <nav className="bg-gradient-to-r from-black to-gray-700 shadow-md text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-white text-3xl font-bold"></a>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Skills
                </a>
                <a
                  href="#"
                  className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-gray-100 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-100 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-100 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-100 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </a>
            <a
              href="#"
              className="text-gray-100 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-100 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
