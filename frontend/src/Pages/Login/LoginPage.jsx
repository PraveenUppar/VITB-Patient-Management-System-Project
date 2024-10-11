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
      alert("Check your Username and Password");
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className=" mt-36 bg-gray-100">
      {/* Left Section: Login Form */}
      <div className="w-full max-w-md p-8 m-auto bg-white rounded-md shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Welcome back!
        </h2>
        <p className="text-center text-gray-500">
          Enter your Credentials to access your account
        </p>

        <form className="mt-6" onSubmit={login}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Enter your email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Enter your password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <a href="#" className="text-sm text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:bg-green-700 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
