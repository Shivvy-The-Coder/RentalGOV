import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar.jsx";

const LandingPage = () => {
  const navigate = useNavigate();

  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() && password.trim()) {
      navigate("/form"); 
      console.log(username,password);
    } else {
      alert("Please enter both Username and Password");
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
       <Navbar/>
      <div className="grid md:grid-cols-2 gap-8 px-6 py-12 max-w-6xl mx-auto items-center">
        <div className="text-gray-800 space-y-6">
          <h2 className="text-2xl font-bold font-serif border-b-4 border-[#ff9933] inline-block pb-2">
            Welcome to the Jharkhand State Portal
          </h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt aspernatur veritatis consectetur 
            ratione sequi corporis voluptate porro similique distinctio vitae.
          </p>
          <ul className="list-disc ml-5 text-base space-y-1">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
          <h3 className="text-xl font-semibold mb-6 text-center text-[#0070c0]">
            Login
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username or Phone Number
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#0070c0] focus:outline-none"
                placeholder="Enter username/Ph.no"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#0070c0] focus:outline-none"
                placeholder="Enter password"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#0070c0] hover:bg-[#005999] text-white font-semibold py-2 px-4 rounded-md shadow"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-500 border-t">
        © 2025 Maintained by ACM India
      </footer>
    </div>
  );
};

export default LandingPage;
