const Contact = () => {
  return (
    <div>
      <section id="contact-us" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-semibold mb-12 text-center text-gray-900">
            Need Help? Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center mt-20 space-x-4">
                <span className="text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--ic"
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6 20h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1zm6-13c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-5c3.27 0 7 2.46 7 7.15c0 2.98-2.13 6.12-6.39 9.39c-.36.28-.86.28-1.22 0C7.13 15.26 5 12.13 5 9.15C5 4.46 8.73 2 12 2z"
                    ></path>
                  </svg>
                </span>
                <span>
                  <h3 className="font-semibold text-xl">Address</h3>
                  <p className="text-gray-600">
                    VIT Bhopal Astha Sehore 466114
                  </p>
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--ic"
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M22 4H2v16h20V4zm-2 4l-8 5l-8-5V6l8 5l8-5v2z"
                    ></path>
                  </svg>
                </span>
                <span>
                  <h3 className="font-semibold text-xl">Email</h3>
                  <p className="text-gray-600">pms@gmail.com</p>
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--ic"
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
                    ></path>
                  </svg>
                </span>
                <span>
                  <h3 className="font-semibold text-xl">Phone</h3>
                  <p className="text-gray-600">+91 9846513184</p>
                </span>
              </div>
            </div>

            {/* Contact Form */}
            {/* Contact Form */}
            <div>
              <form className="bg-white shadow-md rounded-lg p-8 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Eg: PMS"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Eg: pms@gmail.com"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-900 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
