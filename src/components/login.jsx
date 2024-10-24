import React from "react";
import {Link} from 'react-router-dom';
import logo from '../assets/images/Moshitu.svg';


const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6" style={{ backgroundColor: "#E6FBF4" }}>
      {/* Site Header */}
      <Link to="/" className="pl-52 px-25"><img src={logo} className="ml-72 -py-28 w-1/3"/></Link>
      
      {/* Login Header */}
      <h1 className="text-3xl w-1/4 mx-0 px-0 py-10 pb-0 font-bold mb-4 text-left">Log In</h1>

      {/* Paragraph */}
      <p className="text-base w-1/4 text-left mb-8">
        Log in to your account to manage bookings, access exclusive properties, and more.
      </p>

      {/* Login Form */}
      <form className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>

        {/* Log In Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-200"
        >
          Log In
        </button>

        {/* "Don't have an account" Link */}
        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-green-500 font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </form>

      {/* OR Separator */}
      <div className="flex items-center my-6 w-full max-w-md">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 text-gray-500">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Log In with Google Button */}
      <button
        className="w-full max-w-md bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 flex items-center justify-center space-x-2"
      >
        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google logo" className="w-6 h-6" />
        <span>Log In with Google</span>
      </button>
      <p className="text-center text-gray-600 mt-4">
          Can't remember your password?{" "}
          <a href="/forgot" className="text-green-500 font-semibold hover:underline">
            Forgot Password
          </a>
        </p>
    </div>
  );
};

export default Login;
