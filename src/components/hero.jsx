import React from "react";
import { BsSearch } from "react-icons/bs";
import bgImage from "../assets/images/bgH1.jpg"

const Hero = () => {
  return (
    <section className="bg-cover bg-no-repeat h-screen top-20 right-0 left-0 w-full" style={{backgroundImage:`url(${bgImage})`, height: '85vh'  }}>
      <div className="flex flex-col items-start py-20 justify-center h-full bg-black bg-opacity-50 p-12 pl-16">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
        Your New Discovery Starts Here
        </h1>
        <p className="text-lg w-full max-w-xl text-white mb-6 text-left">
        Welcome to Moshitu, the ultimate destination for 
        all your rental needs. Whether you're looking for a short-term stay, a long-term rental, or a shared apartment, we've got you covered.
        </p>
        <div className="flex w-full max-w-2xl items-center">
          <input
            type="text"
            placeholder=" Search for homes..."
            className="p-2 rounded-l-md border-2 w-full border-gray-300 outline-none"
          />
          <button className="bg-green-500 text-white p-2 py-3 rounded-r-md flex items-center">
            <BsSearch className="h-5 w-5"/>
            <span className="ml-2"></span>
          </button>
        </div>
        <h2 className="text-2xl font-semibold text-white mt-8 text-center">
        Discover your perfect space today with us
        </h2>
      </div>
    </section>
  );
};

export default Hero;
