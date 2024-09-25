import React, {useState} from "react";
import logo from '../assets/images/Moshitu.svg';

const signup = {
  url: '/signup',
  label: 'login/SignUp'
}

const Navbar = ({buttonLabel='Login/SignUp', dropdownOptions, link=signup}) => {

  const  [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="bg-green z-10 shadow-md w-full fixed px-20 py-6 top-0 right-0 left-0" style={{ backgroundColor: "#FEF0D2" }}>
      <div className="w-full px-0 flex justify-between items-center">
        {/* Left Side: Logo and Name */}
        <div className="flex items-center">
          <a href="/">
          <img
            src="/logo.png" // replace this with the logo's path
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <img src={logo} className="px-16 -py-28 w-1/4"/>
          </a>
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
            <a href="/about" className="text-gray-600 hover:text-green-500">
              About us
            </a>
          </li>
          <li>
          
           
          </li>
          { dropdownOptions ? (
            <div>
          <button className="text-gray-600 font-bold hover:text-white bg-buttonPrimary py-2 px-4 rounded-md" onClick={toggleDropdown}> 
            {buttonLabel}
          </button>  
          { dropdown && (
           <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
            {dropdownOptions.map((option, index) => (
                <li key={index} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  {option}
                </li>
              ))}
           </ul>
          )} 
          </div>
        ) : (
            <a className="text-gray-600 font-bold hover:text-white bg-buttonPrimary py-2 px-4 rounded-md" href="/signup" > {link.label} 
            </a>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;