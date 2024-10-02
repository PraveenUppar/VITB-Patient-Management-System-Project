import React from "react";
import { useLocation, useParams } from "react-router-dom";

const TestsDetails = () => {
  const { state } = useLocation();
  const { testName } = useParams();
  const test = state?.test;

  // Ensure that the test object is present
  if (!test) {
    return <p>Loading test details...</p>;
  }

  return (
    <div>
      <div className="p-6">
        {/* Header Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="mb-4">
            <h2 className="text-3xl font-semibold text-gray-900">
              {test.name}
            </h2>
          </div>

          {/* Patient Information Section */}
          <h3 className="text-2xl font-bold mb-4">Patient Information</h3>
          <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 border border-gray-300">
                  Name:
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                  {test.patientName}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 border border-gray-300">
                  Gender:
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                  {test.patientGender}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 border border-gray-300">
                  Age:
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                  {test.patientAge}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 border border-gray-300">
                  Blood Group:
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                  {test.bloodGroup}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 border border-gray-300">
                  Admission Date:
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                  {test.admissionDate}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 border border-gray-300">
                  Phone No:
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                  {test.phoneNumber}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 border border-gray-300">
                  Emergency Phone No:
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                  {test.emergencyPhoneNumber}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Test Information Section */}
          <h3 className="text-2xl font-bold mb-4 mt-6">Test Information</h3>
          <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 border border-gray-300">
                  Test Name:
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                  {test.testType}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 border border-gray-300">
                  Test ID:
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                  {test.name}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 border border-gray-300">
                  Test Date:
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                  {test.testDate}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 border border-gray-300">
                  Lab Technician:
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                  {test.labTechnician}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 border border-gray-300">
                  Doctor:
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                  {test.doctor}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 border border-gray-300">
                  Test Status:
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                  <span
                    className={`font-normal ${
                      test.status === "Completed"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {test.status}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Test Results Section */}
          <h3 className="text-2xl font-bold mb-4 mt-6">Test Results</h3>
          <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 border border-gray-300">
                  Result Date:
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                  {test.resultDate}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 border border-gray-300">
                  Outcome:
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                  {test.outcome}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Test History Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Test History</h3>
            <p className="px-6 py-4">No previous tests available.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestsDetails;
