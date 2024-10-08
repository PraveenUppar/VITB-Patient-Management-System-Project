import React, { useState } from "react";
import { testsData } from "./TestData";
import { useNavigate } from "react-router-dom";

function Tests() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTests, setFilteredTests] = useState(testsData);

  // Search handler to filter based on name or location
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = testsData.filter(
      (test) =>
        test.name.toLowerCase().includes(value) ||
        test.opdNumber.toLowerCase().includes(value) ||
        test.status.toLowerCase().includes(value)
    );
    setFilteredTests(filtered);
  };

  return (
    <div className="flex">
      <div className="flex-1 p-8 bg-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">Tests / Results</h2>
          <button className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition">
            Add Test
          </button>
        </div>

        {/* Search input */}
        <div className="mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 border border-gray-400 rounded-md"
            placeholder="Search by OPD Number / Test Number / Status"
          />
        </div>

        {/* Test Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTests.map((test, index) => (
            <TestCard key={index} test={test} />
          ))}
        </div>
      </div>
    </div>
  );
}

// TestCard component to display each test's information
const TestCard = ({ test }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/test/${test.name}`, { state: { test } });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg border ">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold  ">{test.name}</h3>
      </div>
      <div className="flex gap-2">
        <p>
          <span className="bg-blue-100 text-sm mt-1 text-black border rounded-sm px-2 py-1 inline-block">
            OPD Number: {test.opdNumber}
          </span>
        </p>
        <p>
          <span
            className={`text-sm text-black border mt-1 rounded-sm px-2 py-1 inline-block ${
              test.status === "Completed"
                ? "bg-green-100"
                : test.status === "Ongoing"
                ? "bg-yellow-100"
                : "bg-red-100"
            }`}
          >
            Status: {test.status}
          </span>
        </p>
      </div>

      <p className="mt-3">Date of Test: {test.dateOfSample}</p>
      <button
        className="bg-teal-600 text-white mt-2 py-2 px-4 rounded-lg hover:bg-teal-600 transition w-full"
        //className="mt-4 bg-white border  border-gray-300 px-4 py-2 rounded-lg w-full "
        onClick={handleViewDetails}
      >
        Result Details
      </button>
    </div>
  );
};

export default Tests;
