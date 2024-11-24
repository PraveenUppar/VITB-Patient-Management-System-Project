import React, { useState } from "react";
import { testsData } from "./TestData";
import { useNavigate } from "react-router-dom";

function Tests() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTests, setFilteredTests] = useState(testsData);
  const [showForm, setShowForm] = useState(false);

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

  const handleAddTestClick = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTest = {
      name: formData.get("name"),
      opdNumber: formData.get("opdNumber"),
      status: formData.get("status"),
      dateOfSample: formData.get("dateOfSample"),
    };
    setFilteredTests([...filteredTests, newTest]);
    setShowForm(false); // Close the form after submission
    e.target.reset();
  };

  return (
    <div className="flex">
      <div className="flex-1 p-8 bg-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">Tests / Results</h2>
          <button
            onClick={handleAddTestClick}
            className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
          >
            {showForm ? "Close Form" : "Add Test"}
          </button>
        </div>

        {/* Add Test Form */}
        {showForm && (
          <form
            className="mb-6 p-4 bg-white rounded-lg shadow-lg"
            onSubmit={handleFormSubmit}
          >
            <h3 className="text-2xl font-bold mb-4">Add New Test</h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Test Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-3 border border-gray-400 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                OPD Number
              </label>
              <input
                type="text"
                name="opdNumber"
                className="w-full p-3 border border-gray-400 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Status
              </label>
              <select
                name="status"
                className="w-full p-3 border border-gray-400 rounded-md"
                required
              >
                <option value="Completed">Completed</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Date of Test
              </label>
              <input
                type="date"
                name="dateOfSample"
                className="w-full p-3 border border-gray-400 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
            >
              Submit
            </button>
          </form>
        )}

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
        onClick={handleViewDetails}
      >
        Result Details
      </button>
    </div>
  );
};

export default Tests;
