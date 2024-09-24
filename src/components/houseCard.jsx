import React from 'react';
import logo from '../assets/images/bed3.jpg';
import logo2 from '../assets/images/bed1.jpg';
import logo3 from '../assets/images/bed2.jpg';
import PlainCard from '../components/plainCard';
import { MdLocationOn } from 'react-icons/md';
import { FaPoundSign }  from 'react-icons/fa';

// Card Component for the first section (70% width)
const HouseCard = () => {
  return (
    <div className="w-4/5 items-center justify-center mx-10 py-0 mb-0 border-t border-black bg-white rounded-lg shadow-lg p-0 flex">
      {/* Big Image */}
      <div className="w-4/5 py-0">
        <img
          src={logo} // Replace with your big image path
          alt="Big"

          className="w-full h-72 object-cover h-auto rounded-l-lg"
        />
      </div>
      
      {/* Smaller Images */}
      <div className="w-1/3 flex flex-col px-1 py-0 mb-0">
        <img
          src={logo2} // Replace with your small image path
          alt="Small 1"
          className="w-full h-36 object-cover lg pb-1"
        />
        <img
          src={logo3} // Replace with your small image path
          alt="Small 2"
          className="w-full h-36 object-cover pb-0 mb-0"
        />
      </div>

      {/* Card with details */}
      <PlainCard />
     
    </div>
    


 
  );
};




export default HouseCard;
