import React from "react";
import { useLocation, useParams } from "react-router-dom";

const PatientsDetails = () => {
  const { state } = useLocation();
  const { patientName } = useParams();
  const patient = state?.patient;
  return (
    <div>
      <div className=" p-6 ">
        {/* Header Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          {/* Patient Name */}
          <div className="mb-4">
            <h2 className="text-3xl font-semibold text-gray-900">
              {patientName}
            </h2>
          </div>
          {/* Patient Information Section */}
          <div className="space-y-2">
            <p className="font-semibold bg-blue-100 text-sm text-black border rounded-sm px-2 py-1 inline-block">
              OPD Number:{" "}
              <span className="font-normal">{patient.opdNumber}</span>
            </p>
            <p className="font-semibold bg-blue-100 text-sm text-black border px-2 py-1 inline-block">
              Ward: <span className="font-normal">{patient.ward}</span>
            </p>
            <p className="font-semibold bg-blue-100 text-sm text-black border  px-2 py-1 inline-block">
              Bed Number: <span className="font-normal">{patient.bed}</span>
            </p>
            <p className="font-medium text-gray-800">
              Address: <span className="font-normal">{patient.address}</span>
            </p>

            <p className="font-medium text-gray-800">
              DOB: <span className="font-normal">{patient.dob}</span>
            </p>
            <p className="font-medium text-gray-800">
              Gender: <span className="font-normal">{patient.gender}</span>
            </p>
            <p className="font-medium text-gray-800">
              Age: <span className="font-normal">{patient.age}</span>
            </p>
            <p className="font-medium text-gray-800">
              Blood Group:{" "}
              <span className="font-normal">{patient.blood_group}</span>
            </p>
            <p className="font-medium text-gray-800">
              Admission Date:{" "}
              <span className="font-normal">{patient.admission_date}</span>
            </p>

            <p className="font-medium text-blue-700">
              Phone No: <span className="font-normal">{patient.phone}</span>
            </p>
            <p className="font-medium text-blue-700">
              Emergency Phone No:{" "}
              <span className="font-normal">{patient.emergency_phone}</span>
            </p>
            <button className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition">
              Edit Details
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Test Information Section */}
        <div className="mb-8 -mt-5 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Medical History</h2>
          <div className="grid grid-cols-4 gap-4">
            {" "}
            <div className="bg-green-100 p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-green-700">72bpm</div>
                <div className="text-lg font-semibold">Heart Rate</div>
              </div>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-yellow-700">70mg/dl</div>
                <div className="text-lg font-semibold">Blood Sugar</div>
              </div>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-yellow-700">
                  120 mmHg
                </div>
                <div className="text-lg font-semibold">Blood Pressure</div>
              </div>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-yellow-700">19</div>
                <div className="text-lg font-semibold">Body Mass Index</div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Tests</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 text-left">Test Number</th>
                  <th className="border p-2 text-left">Description</th>
                  <th className="border p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Test 1</td>
                  <td className="border p-2">Blood Test</td>
                  <td className="border p-2">Done</td>
                </tr>
                <tr>
                  <td className="border p-2">Test 2</td>
                  <td className="border p-2">X-rays</td>
                  <td className="border p-2">Ongoing</td>
                </tr>
                <tr>
                  <td className="border p-2">Test 3</td>
                  <td className="border p-2">MRI</td>
                  <td className="border p-2">Pending</td>
                </tr>
                <tr>
                  <td className="border p-2">Test 4</td>
                  <td className="border p-2">Ultrasound </td>
                  <td className="border p-2">Pending </td>
                </tr>
              </tbody>
            </table>
            <button className="bg-teal-600 text-white py-2 mt-2 px-4 rounded hover:bg-teal-700 transition">
              Edit Details
            </button>
          </div>
        </div>

        {/* Test Results Information Section */}
        <div className=" bg-white shadow-md mt-8 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Test Results</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 text-left">Test Number</th>
                  <th className="border p-2 text-left">Description</th>
                  <th className="border p-2 text-left">Test Results</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Test 1</td>
                  <td className="border p-2">Blood Test</td>
                  <td className="border p-2">Normal</td>
                </tr>
              </tbody>
            </table>
            <button className="bg-teal-600 text-white py-2 mt-2 px-4 rounded hover:bg-teal-700 transition">
              Edit Details
            </button>
          </div>
        </div>
        <div className=" bg-white shadow-md mt-8 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Current Symptoms</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 text-left">Symptoms</th>
                  <th className="border p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Primary Symptom</td>
                  <td className="border p-2">Chest Pain</td>
                </tr>
                <tr>
                  <td className="border p-2">Secondary Symptom</td>
                  <td className="border p-2">
                    Occurs 3-4 times per day,Central chest,Shortness of breath
                    and sweating.
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="bg-teal-600 text-white py-2 mt-2 px-4 rounded hover:bg-teal-700 transition">
              Edit Details
            </button>
          </div>
        </div>
        <div className="  bg-white shadow-md mt-8 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Consultation</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 text-left">Date</th>
                  <th className="border p-2 text-left">Visits</th>
                  <th className="border p-2 text-left">Consultation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">2024-05-01</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">
                    Myocardial Infarction, Gastroesophageal Reflux Disease
                    (GERD)
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">2024-05-10</td>
                  <td className="border p-2">2</td>
                  <td className="border p-2">
                    ECG and Cardiac Enzyme tests ordered
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="bg-teal-600 text-white py-2 mt-2 px-4 rounded hover:bg-teal-700 transition">
              Edit Details
            </button>
          </div>
        </div>
        <div className="  bg-white shadow-md mt-8 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Insurance Information</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 text-left">Info</th>
                  <th className="border p-2 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Insurance Provider</td>
                  <td className="border p-2">ABC Health Insurance Co.</td>
                </tr>
                <tr>
                  <td className="border p-2">Policy Holder Name</td>
                  <td className="border p-2">{patient.name}</td>
                </tr>
                <tr>
                  <td className="border p-2">Policy Number</td>
                  <td className="border p-2"> 123456789</td>
                </tr>
                <tr>
                  <td className="border p-2">Type of Plan</td>
                  <td className="border p-2">
                    Preferred Provider Organization (PPO)
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Coverage Start Date</td>
                  <td className="border p-2">January 1, 2024</td>
                </tr>
                <tr>
                  <td className="border p-2">Coverage End Date</td>
                  <td className="border p-2">December 31, 2024</td>
                </tr>
                <tr>
                  <td className="border p-2">Contact Information</td>
                  <td className="border p-2">+91 9994124567</td>
                </tr>
              </tbody>
            </table>
            <button className="bg-teal-600 text-white py-2 mt-2 px-4 rounded hover:bg-teal-700 transition">
              Edit Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsDetails;
