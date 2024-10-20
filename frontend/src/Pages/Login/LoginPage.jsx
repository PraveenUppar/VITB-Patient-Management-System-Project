import { Link, Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../../UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:7000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
        alert("Login Successful !! Redirecting to Home Page");
      });
    } else {
      alert("Incorrect Username or Password");
    }
  }

  if (redirect) {
    return <Navigate to="/facilities" />;
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Content */}
      <div className="w-full md:w-1/2 bg-[#09342D] text-white p-8 flex flex-col justify-between">
        <div className="max-w-md mx-auto mt-12">
          {/* Title and Text */}
          <h1 className="text-5xl font-bold mb-4">PMS</h1>
          <p className="text-xl">
            Our goal is to continuously improve the quality and accessibility of
            public healthcare services using digital tools.
          </p>
        </div>
        {/* Footer Section */}
        <div className="max-w-md mx-auto text-md mt-4">
          <p>
            Streamlining hospital operations and improving patient care through
            an intuitive and integrated management platform.
          </p>
        </div>
      </div>

      {/* Right Section - Login */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-4xl font-bold text-green-700 mb-6 text-right">
            Authorized Login
          </h2>
          <form className="space-y-6" onSubmit={login}>
            {/* Email Input */}
            <div>
              <label
                className="block text-lg font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-5 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-md"
                placeholder="Enter your email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                className="block text-lg font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-5 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-md"
                placeholder="Enter your password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
              <a
                href="#"
                className="text-md text-green-600 hover:underline float-right mt-2"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-xl text-white py-3 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Login
            </button>
          </form>

          {/* Language Options */}
        </div>
      </div>
    </div>
  );
};

export default Login;
