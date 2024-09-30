const Sidebar = () => {
  return (
    <>
      <div className="flex">
        <div className="w-72 bg-teal-900 h-screen p-6 flex flex-col justify-between text-white">
          <div>
            <h1 className="text-4xl font-bold mb-8">
              Patient Management System
            </h1>
            <br></br>
            <ul className="space-y-6 font-semibold text">
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-lg hover:bg-teal-700 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-lg hover:bg-teal-700 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  Patients
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block p-2 rounded-lg hover:bg-teal-700 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  Resource
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-lg hover:bg-teal-700 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  External Results
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-lg hover:bg-teal-700 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  Users
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-lg hover:bg-teal-700 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  Notice Board
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-lg hover:bg-teal-700 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  Notifications
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-2">Doctor Profile</p>
            <a href="#" className="block">
              Sign Out
            </a>
            <br></br>
            <p>Made in India</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
