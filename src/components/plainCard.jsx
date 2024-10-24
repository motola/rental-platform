import React from 'react';

import { MdLocationOn } from 'react-icons/md';
import { FaPoundSign }  from 'react-icons/fa';


const PlainCard = ({favouriteIcon}) => {
  return (
  
  <>
      {/* Card with details */}
      <div className="flex-col px-4 mt-4 my-0">
        <div className='flex w-full'>
        <h2 className="text-xl w-2/3 py-0 font-bold">Charming 2-Bedroom Flat in Central London</h2>
        <div className="favourite-icon ml-20 mt-0 py-0">
            {favouriteIcon}
          </div>
          </div>
        <p className="text-gray-700 py-1">Spacious 2-bedroom flat with open-plan living, modern kitchen, and ample storage. Close to transport, shops, and eateries. Perfect for 
            professionals or couples. Available now.</p>
        <p className="flex text-gray-500 py-2">  <MdLocationOn className="text-red-500 mr-1" size={22} /> London</p>
        <h1 className="text-2xl font-semibold  flex py-2"> <FaPoundSign className="text-green-500 items-center mt-2 mr-0" size={18} color="black" /> 1,200 pcm</h1>
        <h1 className="font-semibold hover:underline pb-0 pt-3"><a href="">View Property </a> </h1>
      </div>
    </>
  );
};




export default PlainCard;
