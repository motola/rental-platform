import React from "react";
import Slider from "react-slick";
import Maps from '../components/maps';
import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";


const Details = ({data}) => {
   const { thumbnails, bedDescription, price, address, uploadTime, contact } = data
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    
    <div className="mx-auto  pt-18">
      {/* Big Image with Scrollable Thumbnails */}
      
      <div className="mb-8 px-40 p-8">
        <Slider {...settings}>
          {thumbnails.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Property Image ${index + 1}`}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex-col bg-gray-100">
      {/* Bed Description and Price */}
      <div className="flex flex-col md:flex-row justify-between px-40 bg-gray-100 " style={{background:"F6F6F6"  }}>
        {/* Description Section (70% wide) */}
        <div className="flex-grow md:basis-[70%] p-6 pb-0 mb-0 ">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-gray-800">{bedDescription}</h1>
            <p className="text-xl font-semibold text-black-600"> £{parseInt(price).toLocaleString()}</p>
          </div>
          <div className="border-b border-gray-400 pb-4">
          <p className="flex w-2/4 text-gray-700 mb-4 text-lg"><CiLocationOn className="h-9 w-9 mr-2"/>{address}</p>
          <p className="text-gray-500 text-lg pt-2 text-right">Uploaded: {uploadTime}</p>
        </div>

        <div className="mt-6 p-4">
  <h2 className="text-2xl bg-white w-56 p-2 font-bold mb-4">Home Features</h2>
  
  <ul className="list-disc mb-4">
    <div className="flex flex-row">
      <div className="w-1/3 flex flex-col">
      <li className="flex items-center text-xl py-4">
        <svg className="w-4 h-4 mr-2" fill="#039B67" viewBox="0 0 20 20"><path d="M10 3a7 7 0 10-7 7 7 7 0 007-7zM10 0a10 10 0 10 10 10A10 10 0 0010 0zm1 14H9v-2h2zm0-4H9V7h2z"></path></svg>
        Square footage
      </li>
      <li className="flex items-center text-xl py-4">
        <svg className="w-4 h-4 mr-2" fill="#039B67" viewBox="0 0 20 20"><path d="M10 3a7 7 0 10-7 7 7 7 0 007-7zM10 0a10 10 0 10 10 10A10 10 0 0010 0zm1 14H9v-2h2zm0-4H9V7h2z"></path></svg>
        2 Bedrooms
      </li>
      <li className="flex items-center  text-xl py-4">
        <svg className="w-4 h-4 mr-2" fill="#039B67" viewBox="0 0 20 20"><path d="M10 3a7 7 0 10-7 7 7 7 0 007-7zM10 0a10 10 0 10 10 10A10 10 0 0010 0zm1 14H9v-2h2zm0-4H9V7h2z"></path></svg>
        3 Bathrooms
      </li>
      <li className="flex items-center  text-xl py-4">
        <svg className="w-4 h-4 mr-2" fill="#039B67" viewBox="0 0 20 20"><path d="M10 3a7 7 0 10-7 7 7 7 0 007-7zM10 0a10 10 0 10 10 10A10 10 0 0010 0zm1 14H9v-2h2zm0-4H9V7h2z"></path></svg>
        Bungalow
      </li>
      </div>
      <div className="w-1/2 flex flex-col">
      <li className="flex items-center text-xl py-4">
        <svg className="w-4 h-4 mr-2" fill="#039B67" viewBox="0 0 20 20"><path d="M10 3a7 7 0 10-7 7 7 7 0 007-7zM10 0a10 10 0 10 10 10A10 10 0 0010 0zm1 14H9v-2h2zm0-4H9V7h2z"></path></svg>
        Well furnished
      </li>
      <li className="flex items-center text-xl py-4">
        <svg className="w-4 h-4 mr-2" fill="#039B67" viewBox="0 0 20 20"><path d="M10 3a7 7 0 10-7 7 7 7 0 007-7zM10 0a10 10 0 10 10 10A10 10 0 0010 0zm1 14H9v-2h2zm0-4H9V7h2z"></path></svg>
        Kitchen appliances (Stove, Refrigerator...)
      </li>
      <li className="flex items-center text-xl py-4">
        <svg className="w-4 h-4 mr-2" fill="#039B67" viewBox="0 0 20 20"><path d="M10 3a7 7 0 10-7 7 7 7 0 007-7zM10 0a10 10 0 10 10 10A10 10 0 0010 0zm1 14H9v-2h2zm0-4H9V7h2z"></path></svg>
        In-unit Laundry Facilities
      </li>
      <li className="flex items-center text-xl py-4">
        <svg className="w-4 h-4 mr-2" fill="#039B67" viewBox="0 0 20 20"><path d="M10 3a7 7 0 10-7 7 7 7 0 007-7zM10 0a10 10 0 10 10 10A10 10 0 0010 0zm1 14H9v-2h2zm0-4H9V7h2z"></path></svg>
        Heating & Cooling System
      </li>
      </div>
    </div>
  </ul>

  <h3 className="text-2xl font-bold mb-2">Description</h3>
  <p className="text-gray-700 text-xl mb-4">
  Spacious 2-bedroom flat with open-plan living, modern kitchen, and ample storage. Close to transport, shops, and eateries. Perfect for professionals or couples. Available now.
  </p>

  {/* Buttons for Save and Share */}
  <div className="flex py-6 space-x-2">
    <button className="border border-green-600 text-2xl hover:bg-green-500 hover:text-white transition duration-300 text-green-600 py-2 px-4 rounded">
      Save
    </button>
    <button className="border border-gray-300 hover:bg-black hover:text-white transition duration-300 text-2xl text-gray-800 py-2 px-4 rounded">
      Share
    </button>
  </div>
  </div>
        </div>

        {/* Contact Section (30% wide) */}
        <div className="flex-grow-0 md:basis-[30%] p-4 border-l border-gray-200">
          <div className="bg-white p-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Contact Address</h1>
          <p className="flex text-gray-700 text-lg py-2 mb-2"><IoCallOutline className="h-7 w-7 mr-2" /> {contact.phone}</p>
          <p className="flex text-gray-700 text-lg py-2 mb-4"><FaRegEnvelope className="h-7 w-7 mr-2" /> {contact.email}</p>

          {/* Buttons */}
          <div className="flex flex-col items-center space-y-2">
            <button className="w-full text-xl bg-green-400 text-black font-bold mt-6 hover:bg-green-500  py-4 px-2">
              Contact Agent
            </button>
            {/* <button className="w-4/5 bg-gray-300 text-gray-800 py-2 px-4 rounded">
              More Listings
            </button> */}
          </div>
          </div>

          <div className="mt-8">
      <button className="w-full bg-gray-200 text-xl font-bold text-gray-800 py-2 px-4 rounded hover:bg-green-600 hover:text-white transition duration-300">
        Terms and Policies of the Property
      </button>

      {/* Video Section */}
      <div className="mt-6">
        <video controls className="w-full h-96">
          <source src="your-video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
        </div>
        
      </div>
      <Maps address={address} />
    </div>
    
    </div>
  );
};

export default Details;
