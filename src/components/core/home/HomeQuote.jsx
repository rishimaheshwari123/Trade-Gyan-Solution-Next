"use client";
import React, { useState } from "react";
import { sendContactForm } from "../../../services/operations/auth";

const HomeQuote = () => {
  const initialFormData = {
    name: "",
    email: "",
    contact: "",
    message: "",
    role: "Investor",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sendContactForm(formData);
    if (response?.data?.success) {
      setFormData(initialFormData);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-around lg:p-5 bg-gray-50">
      {/* Google Map Section */}
      <div className="md:w-1/2 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Find Us in Bhopal
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14662.38355328528!2d77.4562741!3d23.2577881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69e288cb22d9%3A0x560387e9851c6181!2sTrade%20Gyan%20Solution!5e0!3m2!1sen!2sin!4v1728912306890!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          className="w-[100%] lg:h-[62vh] h-[38vh]"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="md:w-1/2 bg-white p-10 rounded-lg shadow-lg mt-6 md:mt-0">
        <h6 className="text-3xl font-bold mb-4 text-gray-800">Sign Up Now!</h6>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Type your name"
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="contact number"
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email (Optional)"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Role Selection (Investor or Trader) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Are you an Investor or Trader?
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="Investor"
                  checked={formData.role === "Investor"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Investor
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="Trader"
                  checked={formData.role === "Trader"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Trader
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="message (Optional)"
              className="w-full p-2 border border-gray-300 rounded-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeQuote;
