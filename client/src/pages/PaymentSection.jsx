

import React, { useState } from "react";
import Navbar from "../components/Navbar";

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState("Card");

  const paymentOptions = [
    "Card Payment",
    "UPI / QR Code",
    "Net Banking",
    "PayTM",
    "Google Pay",
    "Amazon Pay",
    "BHIM",
    "Mobile Banking",
    "Rural Bank Payment",
  ];

  return (
            <div>
                <Navbar/>
                    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Left Section - Scrollable Payment Methods */}
        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-1 h-[500px] overflow-y-auto">
          <h3 className="text-xl font-semibold mb-4 text-[#0070c0]">Payment Options</h3>
          <ul className="space-y-3">
            {paymentOptions.map((option) => (
              <li
                key={option}
                className={`p-3 border rounded-md cursor-pointer ${
                  selectedMethod === option ? "bg-blue-100 border-blue-500" : "bg-gray-50 hover:bg-gray-100"
                }`}
                onClick={() => setSelectedMethod(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Payment Details */}
        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
          <h3 className="text-xl font-semibold text-[#0070c0] mb-6">Enter Payment Details ({selectedMethod})</h3>
          
          <form className="space-y-4">
            {selectedMethod === "Card Payment" && (
              <>
                <input
                  type="text"
                  placeholder="Card Holder Name"
                  className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-[#0070c0]"
                />
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-[#0070c0]"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Expiry (MM/YY)"
                    className="border px-4 py-2 rounded focus:ring-2 focus:ring-[#0070c0]"
                  />
                  <input
                    type="password"
                    placeholder="CVV"
                    className="border px-4 py-2 rounded focus:ring-2 focus:ring-[#0070c0]"
                  />
                </div>
              </>
            )}

            {selectedMethod === "UPI / QR Code" && (
              <input
                type="text"
                placeholder="Enter UPI ID (e.g. name@upi)"
                className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-[#0070c0]"
              />
            )}

            {selectedMethod === "Net Banking" && (
              <select className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-[#0070c0]">
                <option>Select your Bank</option>
                <option>SBI</option>
                <option>ICICI</option>
                <option>HDFC</option>
                <option>Axis</option>
              </select>
            )}

            {/* Common CAPTCHA */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Enter CAPTCHA:</label>
              <div className="flex items-center gap-3">
                <div className="px-6 py-2 bg-gray-200 rounded text-lg font-mono tracking-widest select-none">
                  7F2K9
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="flex-1 border px-4 py-2 rounded focus:ring-2 focus:ring-[#0070c0]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold"
            >
              Proceed
            </button>
          </form>
        </div>
      </div>
    </div>
            </div>
  );
};

export default PaymentPage;
