const Home = () => {
  return (
    <div>
      <section>
        <div className="container relative mx-auto px-4 py-12">
          <div
            className="welcome text-center relative"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <h2 className="text-4xl font-bold">WELCOME TO PMS</h2>
            <p className="mt-4 text-lg">
              One stop solution for health professional to manage there work
              load{" "}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container relative mx-auto px-4 py-2">
          {/* Content Section */}
          <div className="content flex flex-col lg:flex-row gap-8 ">
            {/* Why Choose Medilab Box */}
            <div className="lg:w-1/3 flex justify-center">
              <div
                className="why-box bg-white p-6 rounded shadow-md"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <h3 className="text-2xl font-semibold mb-4">About Us</h3>
                <p className="text-gray-600 mb-6">
                  PMS is a comprehensively designed to streamline hospital
                  operations by providing real-time data on available resources
                  (beds, oxygen, ICU, blood, etc.), managing patient records,
                  and fostering a commutation between doctor community for
                  seamless collaboration.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div
                className="why-box bg-white p-6 rounded shadow-md"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <h3 className="text-2xl font-semibold mb-4">Features</h3>
                <p className="text-gray-600 mb-6">
                  <li>
                    Improved Hospital Efficiency: Real-time tracking of
                    resources like ICU beds and oxygen can optimize patient
                    care.
                  </li>
                  <li>
                    Improved Patient Care: Up-to-date patient records aid to
                    make informed decisions.
                  </li>
                  <li>
                    Medical Records: Detailed medical records of patients
                    support precise diagnoses and treatments.
                  </li>
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div
                className="why-box bg-white p-6 rounded shadow-md"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <h3 className="text-2xl font-semibold mb-4">Services</h3>
                <p className="text-gray-600 mb-6">
                  <li>
                    Hospital Listing: Details like the number of beds, oxygen
                    supply, ICU availability, blood stock, address, local
                    bodies, patient count, doctors, and nurses.
                  </li>
                  <li>
                    Patient Management: Patient details like name, age, patient
                    number, gender, blood group, date of birth, and contact
                    information.
                  </li>
                  <li>
                    Resource Requests: Handles requests for medical tests like
                    blood sugar, BP, and heartbeat testing.
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container relative mx-auto px-4 py-12">
          {/* Content Section */}
          <div className="content flex flex-col lg:flex-row gap-8">
            {/* Why Choose Medilab Box */}
            <div className="lg:w-1/3 flex justify-center">
              <div
                className="why-box bg-white p-6 rounded shadow-md"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <h3 className="text-2xl font-semibold mb-4">Problem</h3>
                <p className="text-gray-600 mb-6">
                  Every human being’s lifesaver is a hospital. Hospitals save
                  countless lives daily and contribute to our ability to live
                  happy, healthy lives. Hospitals have a lot going on all the
                  time, so managing a whole hospital by hand takes work. An
                  entire hospital would require much time and work to manage
                  physically.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div
                className="why-box bg-white p-6 rounded shadow-md"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <h3 className="text-2xl font-semibold mb-4">Solution</h3>
                <p className="text-gray-600 mb-6">
                  PMS is a comprehensively designed to streamline hospital
                  operations by providing real-time data on available resources
                  (beds, oxygen, ICU, blood, etc.), managing patient records,
                  and fostering a commutation between doctor community for
                  seamless collaboration.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div
                className="why-box bg-white p-6 rounded shadow-md"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <h3 className="text-2xl font-semibold mb-4"> Contact Us</h3>
                <p className="text-gray-600 mb-6">
                  We’d love to hear from you! If you have any questions,
                  suggestions, or feedback, please feel free to reach out.
                  <br></br>
                  <br></br>
                  <li>Email: pms@gmail.com</li>
                  <li>Phone: +91 4549844131</li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
