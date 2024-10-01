import React, { useState } from "react";
import { facilitiesData } from "./FacilitiesData";
import { useNavigate } from "react-router-dom";

function Facilities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFacilities, setFilteredFacilities] = useState(facilitiesData);

  // Search handler to filter based on name or location
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = facilitiesData.filter(
      (facility) =>
        facility.name.toLowerCase().includes(value) ||
        facility.location.toLowerCase().includes(value)
    );
    setFilteredFacilities(filtered);
  };

  return (
    <div className="flex">
      <div className="flex-1 p-8 bg-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">Facilities</h2>
        </div>

        {/* Search input */}
        <div className="mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 border shadow-sm rounded-md"
            placeholder="Search by Facility / District Name"
          />
        </div>

        {/* Facility List */}
        <div className="grid grid-cols-2  gap-6">
          {filteredFacilities.map((facility, index) => (
            <FacilityCard
              key={index}
              name={facility.name}
              type={facility.type}
              location={facility.location}
              phone={facility.phone}
              taluk={facility.taluk}
              district={facility.district}
              facility={facility}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// FacilityCard component to display each facility's information
const FacilityCard = ({
  name,
  location,
  phone,
  type,
  taluk,
  district,
  facility,
}) => {
  const navigate = useNavigate();

  const handleViewFacility = () => {
    navigate(`/facility/${facility.name}`, { state: { facility } });
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-3 text-black">{name}</h3>

      <p>
        <span className="bg-blue-100 text-sm text-black border rounded-sm px-2 py-1 inline-block">
          {type}
        </span>
      </p>

      {/* Occupancy information styled */}
      <div className="flex justify-start items-center mt-2 space-x-2">
        <span className="text-sm flex bg-green-100 text-black border  rounded-sm px-2 py-1">
          ICU
        </span>
        <span className="text-sm flex bg-green-100 text-black border  rounded-sm px-2 py-1">
          Blood Bank
        </span>
        <span className="text-sm flex bg-green-100 text-black border  rounded-sm px-2 py-1">
          X-ray
        </span>
        <span className="text-sm flex bg-green-100 text-black border  rounded-sm px-2 py-1">
          CT-scan
        </span>
        <span className="text-sm flex bg-green-100 text-black border  rounded-sm px-2 py-1">
          MRI
        </span>
        <span>...</span>
      </div>

      <p className="text-gray-600 mt-3">
        <span className="font-semibold">District:{district}</span>
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">Taluk:{taluk}</span>
      </p>

      {/* Location */}
      <p className="text-gray-600">
        <span className="font-semibold">Location: {location}</span>
      </p>

      {/* Phone with blue color */}
      <p className="text-blue-600 font-semibold">Phone: {phone}</p>

      {/* View Facility Button */}
      <div className="mt-2">
        <button
          className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
          onClick={handleViewFacility}
        >
          View Facility
        </button>
      </div>
    </div>
  );
};

export default Facilities;
