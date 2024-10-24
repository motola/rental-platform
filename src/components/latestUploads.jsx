import React from 'react';
import logo from '../assets/images/bed3.jpg';
import PlainCard from './plainCard';


const Uploads = () => {
    return (
      <div className="w-1/5 mx-5 bg-white rounded-lg shadow-lg p-4 flex flex-col">
        {/* Latest Upload Header */}
        <h2 className="text-xl font-bold mb-2">Latest Upload</h2>
        
        {/* Image on top */}
        <img
          src={logo} // Replace with your latest upload image path
          alt="Latest Upload"
          className="w-full h-64 object-cover rounded-lg mb-2" // Fixed height and cover aspect
        />
        
        {/* Details below the image */}
        <div className="flex justify-between">
          <PlainCard />
        </div>
      </div>
      
    );
  };
  
  
  
  export default Uploads;