import React, { useState } from "react";

const MyProfile = () => {
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "123-456-7890",
    companyName: "Doe Properties",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

      {/* Edit Form */}
      <div className="space-y-4">
        <div className="flex flex-col">
          <label className="text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={handleInputChange}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={profile.phoneNumber}
            onChange={handleInputChange}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={profile.companyName}
            onChange={handleInputChange}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Edit Profile Button */}
      <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
        Edit Profile
      </button>
    </div>
  );
};

export default MyProfile;
