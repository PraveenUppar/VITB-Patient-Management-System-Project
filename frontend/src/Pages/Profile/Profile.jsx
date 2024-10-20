import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className=" bg-gray-100 p-8">
      <div className="bg-white rounded-lg shadow-md max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-teal-900 to-blue-500 h-36 rounded-t-lg"></div>
        <div className="relative p-6 flex items-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden border-4 border-white -mt-12">
            {/* Placeholder for profile picture */}
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-bold">Dr. Rajesh Kumar</h2>
            <p className="text-gray-500">kuRaj@gmail.com</p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="ml-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        {/* Form Section */}
        <div className="p-6 grid grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-600 text-sm mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your First Name"
              disabled={!isEditing}
            />
          </div>

          {/* Nick Name */}
          <div>
            <label className="block text-gray-600 text-sm mb-2">
              Nick Name
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your First Name"
              disabled={!isEditing}
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-600 text-sm mb-2">Gender</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              disabled={!isEditing}
            >
              <option>Your First Name</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Country */}
          <div>
            <label className="block text-gray-600 text-sm mb-2">Country</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your First Name"
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Email Section */}
        <div className="px-6 pb-6">
          <h3 className="text-lg font-bold mb-4">Email</h3>
          <div className="bg-gray-100 p-4 rounded-lg flex items-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12H8m8 4H8m8-8H8m12-4a2 2 0 00-2-2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4z"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-semibold">kuRaj@gmail.com</p>
              <p className="text-xs text-gray-500">1 month ago</p>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-100 text-blue-500 rounded-lg hover:bg-blue-200">
            + Add Email Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
