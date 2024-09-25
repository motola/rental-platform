import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Moshitu.svg'




const Forgotpassword = () => {
  return (
    <>
    <div>
        <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: "#E6FBF4" }}>
          {/* Image at the top */}
          <Link to="/">
          <img
            src={logo} // Replace with your image path
            alt="Forgot Password"
            className="w-48 h-24 mb-6"
          />
         </Link>
    
          {/* Title and Paragraph */}
          <h1 className="text-2xl font-bold text-gray-700 mb-2">Forgot your password?</h1>
          <p className="text-gray-600 text-center mb-8 w-80">
            Enter your email address and we'll send you instructions on how to reset your password.
          </p>
          
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-80 p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
    
          {/* Reset Password Button */}
          <button className="w-80 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition mb-6">
            Reset Password
          </button>
    
          {/* Back to Signup/Login Links */}
          <div className="text-gray-600 text-sm mb-6">
            Remember your password?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>{" "}
            or{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </div>
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
        </div>
    </>
  );
};



export default Forgotpassword;



