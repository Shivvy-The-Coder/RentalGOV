import React from 'react';
import { assets } from '../assets/assets';

const PaymentStatus = () => {
  return (
    <div className="w-full h-full mt-5 flex  justify-center  px-4">
      <div className="w-full max-w-md bg-green-100 border border-green-300 rounded-xl shadow-md p-6 sm:p-8 text-center space-y-5">
        
        <div>
          <img src={assets.PaymentTick} alt="Payment Success" className="mx-auto h-24 w-24" />
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-green-800">₹10</h1>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-green-900">Payment Done</h2>
        </div>

        <div className="text-gray-800 text-sm sm:text-base leading-relaxed">
          <p className="font-medium">Received with thanks from <span className="font-bold">________</span></p>
          <p>A sum of rupees 10 against Trade License Fees.</p>
        </div>

        <div className="text-sm text-gray-600 mt-4">
          <p><strong>Date:</strong> 06-08-2025</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;
