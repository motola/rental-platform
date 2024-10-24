import React, { useState } from 'react';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Filter = () => {
  // State to store filter options
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    location: '',
    postcode: '',
    minBedrooms: '',
    maxBedrooms: '',
    apartmentType: '',
    radius: 10, // default radius in miles
  });

  // Handle change in input fields
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Handle the save action
  const handleSave = () => {
    // Logic to save apartments using the filter options
    console.log('Saved filters:', filters);
  };

  // Handle filter submission
  const handleFilter = () => {
    // Logic to apply filters and fetch data based on the filter options
    console.log('Applied filters:', filters);
  };

  return (
    // Main rapper
    <div className="w-full mt-20">

      {/* First block wrapper  */}
      <div className='w-full flex flex-col'>
      <section className="mb-0 pt-10">
          {/* Price Range and Location */}
        {/* <h2 className="text-xl pt-20 font-bold mb-4">Price Range & Location</h2> */}
       
        <div className="flex flex-col space-y-4">
          {/* Min and Max Price */}
          <div className="flex w-2/2 mt-0 space-x-20">
            <div className="flex-2 w-1/5">
              <label className="block text-gray-600 mb-1">Min Price (£)</label>
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter minimum price"
              />
            </div>
            <div className="flex-2 w-1/5">
              <label className="block text-gray-600 mb-1">Max Price (£)</label>
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter maximum price"
              />
            </div>
               {/* Postcode or Location */}
          <div className="flex-4 w-1/3">
            <label className="block text-gray-600 mb-1">Postcode or Location</label>
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter postcode or location"
            />
          </div>
          <div className="my-8">
            
            <button
              className="w-full flex py-3 px-4 items-center bg-green-600 text-white font-bold rounded hover:bg-green-700"
              onClick={handleSave}
            >
              <FaStar className="h-7 w-7 mr-2" /> 
             Saved Apartments
            </button>
          </div>
          </div>

       

          {/* Save Button */}
         
        </div>
      </section>
      </div>

      {/* Additional Filters */}
      <section>
        {/* <h2 className="text-xl font-bold mb-4">Additional Filters</h2> */}
        <div className="flex flex-col space-y-2">
          {/* Min and Max Bedrooms */}
          <div className="w-5/5 flex flex-row space-x-4">
            <div className="w-1/5 flex-1">
              <label className="block mb-1">Min Bedrooms</label>
              <input
                type="number"
                name="minBedrooms"
                value={filters.minBedrooms}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter minimum bedrooms"
              />
            </div>
            <div className="w-1/5 flex-1">
              <label className="block text-gray-600 mb-1">Max Bedrooms</label>
              <input
                type="number"
                name="maxBedrooms"
                value={filters.maxBedrooms}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter maximum bedrooms"
              />
            </div>
            {/* Apartment Type Dropdown */}
            <div className="w-1/5">
            <label className="flex flex text-gray-600 mb-1">Apartment Type</label>
            <select
              name="apartmentType"
              value={filters.apartmentType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Apartment Type</option>
              <option value="flat">Flat</option>
              <option value="house">House</option>
              <option value="studio">Studio</option>
            </select>
          </div>
            {/* Radius Slider */}
            <div className="w-1/5">
            <label className="flex text-gray-600 mb-1">Radius (miles)</label>
            <input
              type="range"
              name="radius"
              value={filters.radius}
              onChange={handleChange}
              min="1"
              max="50"
              className="w-full"
            />
            <div className="text-gray-600">Radius: {filters.radius} miles</div>
          </div>
           {/* Filter Button */}
          <div className="w-1/5 py-4">
            <button
              className="w-2/2 py-4 px-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
              onClick={handleFilter}
            >
              Apply Filters
            </button>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Filter;
