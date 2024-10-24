import React from "react";
import {Link} from "react-router-dom";
import logo from '../assets/images/Moshitu.svg';

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6" style={{ backgroundColor: "#E6FBF4" }}>
      {/* Sign-up Header */}
      
      <Link to="/" className="pl-52 px-25">
      <img src={logo} className="ml-72 -py-28 w-1/3"/>
      </Link>
  
      <h1 className="text-3xl w-1/4 mx-0 px-0 py-10 pb-0 font-bold mb-4 text-left"> Admin Sign Up</h1>
      
      {/* Paragraph */}
      <p className="text-base w-1/4 text-left mb-8">
      Create your account to find the perfect rental, manage your bookings, and connect with trusted property owners. 
      Your new home is just a few clicks away!
      </p>

      {/* Signup Form */}
      <form className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>

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
         {/* Phone Number*/}
        <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
        Phone Number
        </label>
        <input
        type="tel"
        id="phone"
        placeholder="Enter your phone number"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
        />
        </div>
        {/*Company Name*/}
        <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="company">
        Phone Number
        </label>
        <input
        type="tel"
        id="company"
        placeholder="Enter your company name"
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

        <p className="text-center text-gray-600 mt-4 mb-6">
          Already have an account?{" "}
          <a href="/login" className="text-green-500 font-semibold hover:underline">
            Log in
          </a>
          
        </p>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-200"
        >
          Sign Up
        </button>

        {/* "Already have an account" Link */}
    
      </form>
    </div>
  );
};

export default Signup;
