"use client"
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { signUp } from "../../services/operations/auth";
import { useRouter } from "next/navigation";

function Register() {
  const navigate = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const { name, email, password, location } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await signUp(formData, navigate, dispatch);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleOnSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleOnChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={handleOnChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Location"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Password"
              required
            />
            <div
              className="absolute right-3 top-10 cursor-pointer text-gray-600"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={22} />
              ) : (
                <AiOutlineEye size={22} />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm">Already have an account? </span>
          <button
            onClick={() => navigate.push("/login")}
            className="text-blue-500 hover:underline"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;