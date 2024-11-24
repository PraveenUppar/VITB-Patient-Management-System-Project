import React, { useState } from "react";
import { patientsData } from "./PatientData";
import { useNavigate } from "react-router-dom";

function Patients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPatients, setFilteredPatients] = useState(patientsData);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

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

  // Add Patient modal toggle
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex">
      <div className="flex-1 p-8 bg-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">Patients</h2>
          <button
            className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
            onClick={toggleModal}
          >
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

        {/* Patient List */}
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

      {/* Add Patient Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-2xl font-bold mb-4">Add Patient</h2>
            <AddPatientForm closeModal={toggleModal} />
          </div>
        </div>
      )}
    </div>
  );
}

// PatientCard component to display each patient's information
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

// AddPatientForm component for the modal form
const AddPatientForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    opdNumber: "",
    ward: "",
    bed: "",
    type: "Normal", // Default type
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Patient Data:", formData);
    closeModal(); // Close the modal after form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">OPD Number</label>
        <input
          type="text"
          name="opdNumber"
          value={formData.opdNumber}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ward</label>
        <input
          type="text"
          name="ward"
          value={formData.ward}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Bed Number</label>
        <input
          type="text"
          name="bed"
          value={formData.bed}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="Normal">Normal</option>
          <option value="Moderate">Moderate</option>
          <option value="Critical">Critical</option>
        </select>
      </div>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Patients;
