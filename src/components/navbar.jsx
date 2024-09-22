import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green z-10 shadow-md w-full fixed px-20 py-6 top-0 right-0 left-0" style={{ backgroundColor: "#FEF0D2" }}>
      <div className="w-full px-0 flex justify-between items-center">
        {/* Left Side: Logo and Name */}
        <div className="flex items-center">
          <img
            src="/logo.png" // replace this with the logo's path
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-xl font-semibold text-gray-800"> Moshitu</span>
        </div>

        {/* Right Side: Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <a href="#home" className="text-gray-600 hover:text-green-500">
              Rents
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-600 hover:text-green-500">
             Shared Apartment
            </a>
          </li>
          <li>
            <a href="#properties" className="text-gray-600 hover:text-green-500">
             Short-let
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-600 hover:text-green-500">
              About us
            </a>
          </li>
          <li>
            <a href="#faq" className="text-gray-600 font-bold hover:text-white bg-buttonPrimary py-2 px-2 rounded-md">
             Sign Up/Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;