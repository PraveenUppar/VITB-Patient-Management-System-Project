import React, { useState } from "react";
import { patientsData } from "./PatientData";
import { useNavigate } from "react-router-dom";

function Patients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPatients, setFilteredPatients] = useState(patientsData);

  // Search handler to filter based on name or location
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = patientsData.filter(
      (patient) =>
        patient.name.toLowerCase().includes(value) ||
        patient.opdNumber.toLowerCase().includes(value) ||
        patient.bed.toLowerCase().includes(value) ||
        patient.type.toLowerCase().includes(value)
    );
    setFilteredPatients(filtered);
  };

  return (
    <div className="flex">
      <div className="flex-1 p-8 bg-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">Patients</h2>
          <button className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition">
            Add Patient
          </button>
        </div>

        {/* Search input */}
        <div className="mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 border border-gray-400 rounded-md"
            placeholder="Search by Patient Name / OPD Number / Status"
          />
        </div>

        {/* Facility List */}
        <div className="grid grid-cols-3 gap-6">
          {filteredPatients.map((patient, index) => (
            <PatientCard
              key={index}
              name={patient.name}
              opdNumber={patient.opdNumber}
              patient={patient}
              ward={patient.ward}
              bed={patient.bed}
              type={patient.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// FacilityCard component to display each facility's information
const PatientCard = ({ name, ward, bed, patient, opdNumber, type }) => {
  const navigate = useNavigate();

  const handleViewFacility = () => {
    navigate(`/patient/${patient.name}`, { state: { patient } });
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-black">{name}</h3>
      <div className="flex gap-2">
        <p>
          <span className="bg-blue-100 text-sm text-black border rounded-sm px-2 py-1 inline-block">
            OPD Number: {opdNumber}
          </span>
        </p>
        <p>
          <span className="bg-blue-100 text-sm text-black border rounded-sm px-2 py-1 inline-block">
            Ward: {ward}
          </span>
        </p>
        <p>
          <span className="bg-blue-100 text-sm text-black border rounded-sm px-2 py-1 inline-block">
            Bed Number: {bed}
          </span>
        </p>
      </div>
      <p>
        <span
          className={`text-sm mt-2 text-black border rounded-sm px-2 py-1 inline-block ${
            type === "Normal"
              ? "bg-green-100"
              : type === "Moderate"
              ? "bg-yellow-100"
              : "bg-red-100"
          }`}
        >
          Status: {type}
        </span>
      </p>

      {/* View Facility Button */}
      <div className="mt-2">
        <button
          className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
          onClick={handleViewFacility}
        >
          Patient Details
        </button>
      </div>
    </div>
  );
};

export default Patients;
