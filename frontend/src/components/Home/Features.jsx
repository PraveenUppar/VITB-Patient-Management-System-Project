const Features = () => {
  return (
    <div>
      <div className="bg-gray-50 py-10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: "Hospital Listing",
                description:
                  "Provides essential details for each hospital, including bed count, oxygen supply, ICU availability, blood stock, address, local bodies, patient count, and staff information (doctors and nurses).",
              },
              {
                icon: "Doctor Community",
                description:
                  "Offers comprehensive profiles for doctors, including their roles, education, affiliated hospitals, email addresses, and contact numbers for easy communication and collaboration.",
              },
              {
                icon: "Patient Management",
                description:
                  "Maintains detailed patient records, capturing essential information such as name, age, patient number, gender, blood group, date of birth, and contact information for efficient care management.",
              },
              {
                icon: "Healthcare Profile",
                description:
                  "Features comprehensive profiles for healthcare professionals, including name, contact details, date of birth, and information from the doctor community to enhance patient trust and engagement.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:bg-teal-900 transition-all duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl group"
              >
                <div className="mb-3 text-3xl transition-all duration-700 ease-in-out group-hover:text-white group-hover:scale-110 flex items-center justify-center">
                  <span className="material-icons">{feature.icon}</span>
                </div>
                <p className="text-gray-600 mt-2 text-center transition-all duration-700 ease-in-out group-hover:text-white group-hover:scale-110">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
