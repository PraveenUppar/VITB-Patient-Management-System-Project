import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolled ? "bg-teal-900 shadow-lg py-2" : "bg-white py-4"
      } sticky top-0 z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Title */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className={`text-3xl font-bold transition-all duration-300 ${
                scrolled ? "text-white" : "text-gray-900"
              }`}
            >
              PMS
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex font-semibold space-x-8 text-lg">
            <Link
              smooth={true}
              duration={300}
              offset={-80}
              className={`cursor-pointer transition-colors duration-300 ${
                scrolled ? "text-white" : "text-gray-700 hover:text-red-500"
              }`}
            >
              About Us
            </Link>
            <Link
              smooth={true}
              duration={300}
              offset={-80}
              className={`cursor-pointer transition-colors duration-300 ${
                scrolled ? "text-white" : "text-gray-700 hover:text-red-500"
              }`}
            >
              Solutions
            </Link>

            <Link
              smooth={true}
              duration={300}
              offset={-80}
              className={`cursor-pointer transition-colors duration-300 ${
                scrolled ? "text-white" : "text-gray-700 hover:text-red-500"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Login and Registration */}
          <Link to="/login">
            <div className="hidden md:flex text-lg items-center font-semibold space-x-4">
              <a
                href="/get-started"
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
              >
                Get Started
              </a>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
