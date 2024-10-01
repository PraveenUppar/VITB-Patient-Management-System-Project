import React from "react";
import { useLocation, useParams } from "react-router-dom";

function FacilityDetails() {
  const { state } = useLocation();
  const { facilityName } = useParams();
  const facility = state?.facility;

  if (!facility) {
    return <div className="p-8">Facility not found</div>;
  }

  return (
    <div>
      <div className=" p-6 ">
        {/* Header Section */}
        <div className=" bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h2 className="text-3xl font-bold mb-4">{facility.name}</h2>
            </div>
          </div>

          {/* Address Section */}
          <div className="mb-2">
            <p className="font-bold text-xl text-gray-800">Address:</p>
            <p className="text-gray-700">{facility.location}</p>
            <p className="text-gray-700">District: {facility.district}</p>
            <p className="text-gray-700">Taluk: {facility.taluk}</p>
            <p className="text-blue-700">
              PhoneNo:
              <a href={`tel:${facility.phone}`}>{facility.phone}</a>
            </p>
          </div>
        </div>

        {/* Available Features */}
        <div className="mb-4 mt-6  bg-white shadow-md rounded-lg p-6">
          <p className="font-bold text-xl text-gray-800">Available Services</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {/* You can modify this section to include features relevant to the facility */}
            {[
              "CT Scan",
              "X-Ray",
              "Neonatal Care",
              "Operation Theater",
              "Blood Bank",
              "Emergency Care",
              "Surgery",
              "Pediatric Care",
              "Radiology",
              "Cardiology",
              "Maternity Services",
              "Orthopedic Care",
              "Oncology",
              "Neurology",
              "Pharmacy",
              "Physical Therapy",
              "Laboratory Services",
              "Dialysis",
              "Mental Health Services",
            ].map((feature) => (
              <span
                key={feature}
                className="bg-green-100 border-green-300 text-black px-3 py-1 rounded-lg border "
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Bed Capacity */}
        <div className="mt-6 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Bed Capacity</h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Total Beds */}
            <div className=" p-4 rounded-lg border border-green-300">
              <h3 className="font-semibold text-black">Total Beds</h3>
              <p className="text-xl font-bold text-green-600">
                {facility.occupancy} / 1000{" "}
              </p>
              <div className="w-full bg-green-200 rounded-full h-2.5">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: "78%" }}
                ></div>
              </div>

              <p className="text-sm text-gray-500 mt-1">Currently Occupied</p>
              <p className="text-xs text-gray-400 mt-1">
                Last updated: 3 days ago
              </p>
            </div>

            {/* You can add more bed types if required */}
            {/* ICU Beds */}
            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <h3 className="font-semibold text-gray-800">ICU Bed</h3>
              <p className="text-xl font-bold text-blue-600">8 / 62</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">Currently Occupied</p>
              <p className="text-xs text-gray-400 mt-1">
                Last updated: 3 days ago
              </p>
            </div>

            {/* Isolation Beds */}
            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <h3 className="font-semibold text-gray-800">Isolation Bed</h3>
              <p className="text-xl font-bold text-blue-600">200 / 558</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "39%" }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">Currently Occupied</p>
              <p className="text-xs text-gray-400 mt-1">
                Last updated: 3 days ago
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Staff Capacity Section */}
        <div className="mb-8 -mt-5 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Staff Capacity</h2>
          <div className="grid grid-cols-5 gap-4">
            {" "}
            <div className="bg-green-100 p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-green-700">120</div>
                <div className="text-lg font-semibold">Total Staff</div>
              </div>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-yellow-700">70</div>
                <div className="text-lg font-semibold">Nurse</div>
              </div>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-yellow-700">5</div>
                <div className="text-lg font-semibold">Cardiologist</div>
              </div>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-yellow-700">9</div>
                <div className="text-lg font-semibold">Pediatrician</div>
              </div>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-yellow-700">36</div>
                <div className="text-lg font-semibold">Others</div>
              </div>
            </div>
          </div>
        </div>

        {/* Oxygen Information Section */}
        <div className=" bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Oxygen Information</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 text-left">Oxygen Capacity</th>
                  <th className="border p-2 text-left">Type B Cylinder</th>
                  <th className="border p-2 text-left">Type C Cylinder</th>
                  <th className="border p-2 text-left">Type D Cylinder</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">100%</td>
                  <td className="border p-2">9</td>
                  <td className="border p-2">12</td>
                  <td className="border p-2">39</td>
                </tr>
                <tr>
                  <td className="border p-2">50%</td>
                  <td className="border p-2">3</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" bg-white shadow-md rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Blood Bank Information</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 text-left">Blood Type</th>
                  <th className="border p-2 text-left">Type A </th>
                  <th className="border p-2 text-left">Type B </th>
                  <th className="border p-2 text-left">Type O </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">+ve</td>
                  <td className="border p-2">9</td>
                  <td className="border p-2">12</td>
                  <td className="border p-2">39</td>
                </tr>
                <tr>
                  <td className="border p-2">-ve</td>
                  <td className="border p-2">3</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacilityDetails;
