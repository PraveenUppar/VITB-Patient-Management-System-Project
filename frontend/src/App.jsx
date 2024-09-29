import React from "react";
import "./index.css";

function App() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-teal-900 h-screen p-6 flex flex-col justify-between text-white">
        <div>
          <h1 className="text-3xl font-bold mb-8">care</h1>
          <ul className="space-y-6">
            <li>
              <a href="#" className="block">
                Facilities
              </a>
            </li>
            <li>
              <a href="#" className="block">
                Patients
              </a>
            </li>
            <li>
              <a href="#" className="block">
                Assets
              </a>
            </li>
            <li>
              <a href="#" className="block">
                Sample Test
              </a>
            </li>
            <li>
              <a href="#" className="block">
                Shifting
              </a>
            </li>
            <li>
              <a href="#" className="block">
                Resource
              </a>
            </li>
            <li>
              <a href="#" className="block">
                External Results
              </a>
            </li>
            <li>
              <a href="#" className="block">
                Users
              </a>
            </li>
            <li>
              <a href="#" className="block">
                Notice Board
              </a>
            </li>
            <li>
              <a href="#" className="block">
                Notifications
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-2">Dev Doctor</p>
          <a href="#" className="block">
            Sign Out
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">Facilities</h2>
            <p>Total Facilities: 10</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-teal-600 text-white py-2 px-4 rounded">
              Export
            </button>
            <button className="bg-gray-300 py-2 px-4 rounded">
              Advanced Filters
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            className="w-full p-3 border rounded-md"
            placeholder="Search by Facility / District Name"
          />
        </div>

        {/* Facility List */}
        <div className="grid grid-cols-2 gap-6">
          <FacilityCard
            name="Test-August-Secondweek"
            location="Alathur Block Panchayat, Palakkad District"
            phone="+91 46722 10678"
            occupancy="1/18"
          />
          <FacilityCard
            name="Dummy Facility 1"
            location="Alangad Block Panchayat, Ernakulam District"
            phone="+91 99999 99888"
            occupancy="42/0"
          />
          <FacilityCard
            name="NR HOSPITAL"
            location="Poothrikka Grama Panchayat, Ernakulam District"
            phone="+91 90723 03850"
            occupancy="14/38"
          />
          <FacilityCard
            name="Gday Hospital"
            location="Virajpet"
            phone="+91 88489 78757"
            occupancy="3/12"
          />
          <FacilityCard
            name="EKM General Hospital"
            location="Ernakulam District Panchayat"
            phone="+91 88935 93812"
            occupancy="N/A"
          />
        </div>
      </div>
    </div>
  );
}

const FacilityCard = ({ name, location, phone, occupancy }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{location}</p>
      <p className="text-gray-600">{phone}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-500">Occupancy: {occupancy}</span>
        <div className="space-x-2">
          <button className="bg-teal-600 text-white py-1 px-3 rounded text-sm">
            View Facility
          </button>
          <button className="bg-gray-300 py-1 px-3 rounded text-sm">
            View Patients
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
