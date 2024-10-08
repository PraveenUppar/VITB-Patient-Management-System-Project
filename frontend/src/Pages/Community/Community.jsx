import React, { useState } from "react";
import { communityData } from "./CommunityData";
import { useNavigate } from "react-router-dom";

function Community() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCommunity, setFilteredCommunity] = useState(communityData);

  // Search handler to filter based on name or location
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = communityData.filter(
      (user) =>
        user.username.toLowerCase().includes(value) ||
        user.facility.toLowerCase().includes(value) ||
        user.qualification.toLowerCase().includes(value)
    );
    setFilteredCommunity(filtered);
  };

  return (
    <div className="flex">
      <div className="flex-1 p-8 bg-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">Community</h2>
        </div>

        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 border border-gray-400 rounded-md"
            placeholder="Search by Name / Facility / Specialization"
          />
        </div>

        {/* Grid Display for Community */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommunity.map((user, index) => (
            <CommunityCard
              key={index}
              name={user.username}
              role={user.role}
              registration={user.registration}
              facility={user.facility}
              qualification={user.qualification}
              experience={user.experience}
              email={user.email}
              phone={user.phone}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const CommunityCard = ({
  name,
  role,
  registration,
  facility,
  qualification,
  experience,
  email,
  phone,
}) => {
  const navigate = useNavigate();

  const handleViewFacility = () => {
    navigate(`/community/${user.name}`, { state: { user } });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-black">{name}</h3>
      <div className="flex gap-2">
        <p>
          <span className="bg-blue-100 font-semibold text-sm text-black border rounded-sm px-2 py-1 inline-block">
            Role: {role}
          </span>
        </p>
        <p>
          <span className="bg-blue-100 text-sm font-semibold text-black border rounded-sm px-2 py-1 inline-block">
            Registration No: {registration}
          </span>
        </p>
      </div>
      <div className="flex gap-2">
        <p>
          <span className="bg-blue-100 text-sm font-semibold mt-2 text-black border rounded-sm px-2 py-1 inline-block">
            Specialization: {qualification}
          </span>
        </p>
        <p>
          <span className="bg-blue-100 text-sm font-semibold mt-2 text-black border rounded-sm px-2 py-1 inline-block">
            Experience: {experience}
          </span>
        </p>
      </div>
      <p>
        <p>
          <span className="bg-blue-100 text-sm font-semibold mt-2 text-black border rounded-sm px-2 py-1 inline-block">
            Facility: {facility}
          </span>
        </p>
        <span className="bg-blue-100 text-sm font-semibold mt-2 text-black border rounded-sm px-2 py-1 inline-block">
          Email: {email}
        </span>
        <p>
          <span className="bg-blue-100 text-sm font-semibold mt-2 text-black border rounded-sm px-2 py-1 inline-block">
            Phone: {phone}
          </span>
        </p>
      </p>
    </div>
  );
};

export default Community;
