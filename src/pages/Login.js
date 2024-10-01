import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing FontAwesome icons
import { Link } from 'react-router-dom'; // Importing Link from React Router
import backgroundImage from '../assets/images/MH_1.jpg'; // Adjust the path based on your folder structure

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="p-8 rounded-lg shadow-lg max-w-sm w-full"
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Login</h2>
        <form className="space-y-6">
          {/* Email Field with Icon */}
          <div className="relative">
            <FaEnvelope className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <input
              id="email"
              type="email"
              className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field with Icon and Eye Toggle */}
          <div className="relative">
            <FaLock className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <input
              id="password"
              type={showPassword ? "text" : "password"} // Conditionally changing input type
              className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FaEye className="w-6 h-6 text-gray-500" />
              ) : (
                <FaEyeSlash className="w-6 h-6 text-gray-500" />
              )}
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-black hover:underline text-m"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
