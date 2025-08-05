import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState("Card Payment");

  const paymentOptions = [
    { id: "Card Payment", label: "Card Payment", icon: "💳" },
    { id: "UPI / QR Code", label: "UPI / QR Code", icon: "📱" },
    { id: "Net Banking", label: "Net Banking", icon: "🏦" },
    { id: "PayTM", label: "PayTM", icon: assets.Paytm , isImage:true },
    { id: "Google Pay", label: "Google Pay", icon: assets.Gpay ,isImage:true },
    { id: "Amazon Pay", label: "Amazon Pay", icon: assets.AmazonPay,isImage:true },
    { id: "BHIM", label: "BHIM", icon: assets.BHIM , isImage:true },
    { id: "Mobile Banking", label: "Mobile Banking", icon: "📲" },
    { id: "Rural Bank Payment", label: "Rural Bank Payment", icon: "🌾" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Payment Methods - Left Side */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </span>
                  Select Payment Method
                </h2>
              </div>
              
              <div className="p-4 max-h-96 overflow-y-auto">
                <div className="space-y-2">
                  {paymentOptions.map((option) => (
                    <button
                      key={option.id}
                      className={`w-full text-left p-3 rounded-md border transition-all duration-200 flex items-center space-x-3 ${
                        selectedMethod === option.id
                          ? "bg-blue-50 border-blue-300 ring-2 ring-blue-200"
                          : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedMethod(option.id)}
                    >
                      <span className="text-lg">
                        {typeof option.icon === "string" && option.icon.includes("/") ? (
                          <img src={option.icon} alt={option.label} className="h-6 w-6" />
                        ) : (
                          option.icon
                        )}
                      </span>
                      <span className={`font-medium ${
                        selectedMethod === option.id ? "text-blue-700" : "text-gray-700"
                      }`}>
                        {option.label}
                      </span>
                      {selectedMethod === option.id && (
                        <span className="ml-auto text-blue-600">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start">
                <span className="text-green-600 text-lg mr-3">🔒</span>
                <div>
                  <h3 className="text-sm font-semibold text-green-800 mb-1">Secure Payment</h3>
                  <p className="text-xs text-green-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus sed explicabo voluptas ducimus cupiditate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form - Right Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 text-sm font-bold">2</span>
                  </span>
                  Enter Payment Details - {selectedMethod}
                </h2>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  {/* Card Payment Fields */}
                  {selectedMethod === "Card Payment" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Holder Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Enter full name as on card"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          maxLength="19"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            maxLength="5"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVV *
                          </label>
                          <input
                            type="password"
                            placeholder="123"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            maxLength="4"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* UPI Payment Fields */}
                  {selectedMethod === "UPI / QR Code" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        UPI ID *
                      </label>
                      <input
                        type="text"
                        placeholder="yourname@upi (e.g., john@paytm, user@gpay)"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                      />
                      <p className="mt-2 text-xs text-gray-500">
                        Enter your registered UPI ID to proceed with payment
                      </p>
                    </div>
                  )}

                  {/* Net Banking Fields */}
                  {selectedMethod === "Net Banking" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Your Bank *
                      </label>
                      <select 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                      >
                        <option value="">Choose your bank</option>
                        <option value="sbi">State Bank of India (SBI)</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="axis">Axis Bank</option>
                        <option value="pnb">Punjab National Bank</option>
                        <option value="bob">Bank of Baroda</option>
                        <option value="canara">Canara Bank</option>
                        <option value="union">Union Bank of India</option>
                      </select>
                    </div>
                  )}

                  {/* Other payment methods */}
                  {(selectedMethod === "PayTM" || selectedMethod === "Google Pay" || selectedMethod === "Amazon Pay" || selectedMethod === "BHIM") && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter registered mobile number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        maxLength="10"
                        required
                      />
                    </div>
                  )}

                  {/* CAPTCHA Section */}
                  <div className="bg-gray-50 p-4 rounded-md border">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Security Verification *
                    </label>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="bg-white px-6 py-3 border-2 border-dashed border-gray-300 rounded text-xl font-mono tracking-widest select-none">
                        7F2K9
                      </div>
                      <div className="flex-1 min-w-0">
                        <input
                          type="text"
                          placeholder="Enter the code shown above"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-md font-semibold text-lg transition-colors duration-200 focus:ring-4 focus:ring-green-200 focus:outline-none"
                    >
                      Proceed to Pay
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-gray-300">
              © 2025  Maintained by ACM India.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PaymentPage;