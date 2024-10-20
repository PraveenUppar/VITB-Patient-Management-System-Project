const About = () => {
  return (
    <div>
      <section id="about-us" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            <div className="flex flex-col justify-center">
              <p className="text-red-500 text-3xl font-semibold uppercase tracking-wide mb-2">
                Who We Are ?
              </p>
              <br></br>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Your Trusted Partner in Patient Management
              </h3>
              <p className="italic text-lg font-semibold text-gray-700 mb-6">
                We are committed to transforming healthcare delivery by
                providing innovative and efficient patient management solutions
                tailored to the needs of hospitals and healthcare providers.
              </p>
              <ul className="space-y-4 mb-6 font-semibold text-xl">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="text-gray-700">
                    Your Trusted Healthcare Partner.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="text-gray-700">
                    Advocates for Seamless Patient Care
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="text-gray-700">
                    Empowering Healthcare Professionals.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="text-gray-700">
                    Scalable Solutions for Growth
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="text-gray-700">
                    Robust Solutions for Efficient Operations
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
