import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function register(ev) {
    ev.preventDefault();
    try {
      const response = await fetch("http://localhost:7000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (response.ok) {
        setRedirect(true);
        alert("Registration Successful !! Redirecting you to Login.");
      } else {
        alert("Registration Failed. Please try again later.");
      }
    } catch (e) {
      alert("Registration Failed. Please try again later.");
    }
  }

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="mt-36 bg-gray-100">
      {/* Left Section: Sign-Up Form */}
      <div className="w-full max-w-md p-8 m-auto bg-white rounded-md shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Sign-Up
        </h2>
        <p className="text-center text-gray-500">
          Create your account to get started
        </p>

        <form className="mt-6" onSubmit={register}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Enter your name"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
          </div>
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
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:bg-green-700 focus:outline-none"
          >
            Sign-Up
          </button>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already a member?{" "}
              <Link to="/login" className="text-green-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
