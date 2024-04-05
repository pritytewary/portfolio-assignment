import React, { useState, useEffect } from "react";

const ContactForm = ({ contactDetails, user }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    // Populate the form fields with user's contact details
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
    // Add your logic to handle form submission here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="flex justify-around items-center bg-gradient-to-r from-black to-gray-800 text-white  sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="max-w-lg w-full mr-8">
        <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
      <div>
        {/* Displaying user's contact details */}
        <h2 className="text-lg font-bold mb-4">Your Contact Details</h2>
        <p className="mb-2">
          <span className="font-semibold">Phone:</span> {user.about.phoneNumber}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Email:</span>{" "}
          {user.about.contactEmail}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Address:</span> {user.about.address}
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
