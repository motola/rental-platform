import React from "react";

const Sidebar = ({ setSelectedMenu }) => {
  return (
    <div className="w-1/4 p-6 bg-white shadow-lg">
      {/* User Persona */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://via.placeholder.com/100"  // Placeholder image
          alt="User Icon"
          className="rounded-full h-24 w-24"
        />
        <h3 className="mt-4 text-lg font-bold">John Doe</h3>
        <p className="text-gray-500">johndoe@example.com</p>
      </div>

      {/* Menu List */}
      <ul className="space-y-4">
        <li
          className="cursor-pointer text-blue-600 hover:text-blue-800"
          onClick={() => setSelectedMenu("profile")}
        >
          My Profile
        </li>
        <li
          className="cursor-pointer text-blue-600 hover:text-blue-800"
          onClick={() => setSelectedMenu("houseListings")}
        >
          House Listings
        </li>
        <li
          className="cursor-pointer text-blue-600 hover:text-blue-800"
          onClick={() => setSelectedMenu("myListings")}
        >
          My Listings
        </li>
        <li
          className="cursor-pointer text-blue-600 hover:text-blue-800"
          onClick={() => setSelectedMenu("inbox")}
        >
          Inbox
        </li>
        <li
          className="cursor-pointer text-red-600 hover:text-red-800"
          onClick={() => alert("Logging Out")}
        >
          Log Out
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
