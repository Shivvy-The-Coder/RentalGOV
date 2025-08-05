import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const UnitForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
        <Navbar/>
            <div className="min-h-screen bg-[#f2f2f2] py-10 px-6">
        
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-[#0070c0] mb-6">
          Unit Registration Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name of Unit
            </label>
            <input
              type="text"
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Shop Unit Name
            </label>
            <input
              type="text"
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name of Unit Owner
            </label>
            <input
              type="text"
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Opening
            </label>
            <input
              type="date"
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address of Unit
            </label>
            <textarea
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Operational Units
            </label>
            <input
              type="number"
              min="1"
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0070c0] text-white py-2 rounded-md hover:bg-[#005999] font-semibold"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <div className="mt-6 border-t pt-6 space-y-4">
            <div className="flex justify-between text-lg font-medium">
              <span>Total Demand:</span>
              <span className="text-gray-600">N/A</span>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <span>Net Payment:</span>
              <span className="text-gray-600">N/A</span>
            </div>
            <button
              onClick={() => navigate("/payment")}
              className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold"
            >
              Proceed to Pay
            </button>
          </div>
        )}
      </div>
    </div>
    </div>

  );
};

export default UnitForm;
