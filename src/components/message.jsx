import React from 'react';
import PlainCard from './plainCard';
import Image from './image.jsx';

const Message = () => {

    return (
        <>
        <div className="w-full">


        <div className="flex flex-row w-1/2 mx-auto my-60 bg-gray-100">
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

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="phone"
            id="password"
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
        <div  className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone" for="comment">Message to Landlord</label>
        <textarea  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" id="comment" name="comment" rows="4" cols="50" placeholder="Write your comment here..."></textarea>
        <button type="submit">Submit</button>
        </div>

        

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-200"
        >
          Send Mail
        </button>

      </form>
       <div className="w-2/3">
      <Image />
      <PlainCard />
      </div>
      </div>
      
      </div>
        
        </>
    )

}


export default Message