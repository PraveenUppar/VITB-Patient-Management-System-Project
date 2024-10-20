import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="flex sticky top-0 h-screen">
        <div className="w-72 bg-teal-900 h-screen p-6 flex flex-col justify-between text-white">
          <div>
            <Link>
              <h1 className="text-4xl font-bold mb-8">
                Patient Management System
              </h1>
            </Link>

            <br></br>
            <ul className="space-y-6 font-semibold text">
              <li>
                <a
                  href="/facilities"
                  className="flex items-center p-2 gap-2 rounded-lg hover:bg-teal-700 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"
                    ></path>
                  </svg>
                  <span>Facilities</span>
                </a>
              </li>
              <li>
                <a
                  href="/patients"
                  className="flex items-center p-2 gap-2 rounded-lg hover:bg-teal-700 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--ic"
                    width="24"
                    height="24"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M15.39 14.56C13.71 13.7 11.53 13 9 13s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm11-3V7c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2z"
                    ></path>
                  </svg>
                  <span>Patients</span>
                </a>
              </li>
              <li>
                <a
                  href="/tests"
                  className="flex items-center p-2 gap-2 rounded-lg hover:bg-teal-700 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--iconoir"
                    width="24"
                    height="24"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    >
                      <path d="M6.141 19.995c2.458 1.72 4.281-.012 5.318-1.492l7.3-10.426l1.967-1.065l-6.554-4.588l-8.447 12.064c-1.037 1.48-2.041 3.786.416 5.507"></path>
                      <path d="M16.091 11.02c-2.876-.853-4.403.781-7.28-.071"></path>
                    </g>
                  </svg>
                  <span>Tests / Results </span>
                </a>
              </li>

              <li>
                <a
                  href="/community"
                  className="flex items-center p-2 gap-2 rounded-lg hover:bg-teal-700 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--ic"
                    width="24"
                    height="24"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4l-.01-18zM17 14H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"
                    ></path>
                  </svg>
                  <span>Community</span>
                </a>
              </li>

              <li>
                <a
                  href="/profile"
                  className="flex items-center p-2 gap-2 rounded-lg hover:bg-teal-700 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--iconoir"
                    width="24"
                    height="24"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"></path>
                      <path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></path>
                    </g>
                  </svg>
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center gap-2 block p-2 rounded-lg hover:bg-teal-700 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--carbon"
                    width="24"
                    height="24"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M6 30h12a2 2 0 0 0 2-2v-3h-2v3H6V4h12v3h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M20.586 20.586L24.172 17H10v-2h14.172l-3.586-3.586L22 10l6 6l-6 6z"
                    ></path>
                  </svg>
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
          <p>Made with ❤️ in India</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
