import React from 'react';
import Filter from '../components/filter'
import PlainCard from '../components/plainCard';
import Image from '../components/image';
import logo from '../assets/images/bed2.jpg';
// import Navbar from '../components/navbar';

const Listing = () => {
  return (
    <>
    <div className='bg-white p-10'>
    <Filter />
    <div className='bg-gray-400 pt-10 pb-20 mb-20'>
    <h2 className='text-lg pb-5 px-10 font-bold'> 128 Apartment Search Results</h2>
    <div className="w-1/2 mb-20 items-center justify-center bg-white mx-10 my-10 py-0 border-t border-black rounded-lg shadow-lg p-0 flex">
    <Image logo={logo} />
    <PlainCard />
    </div>
    </div>
    </div>
    </>
   
  );
};

export default Listing;
