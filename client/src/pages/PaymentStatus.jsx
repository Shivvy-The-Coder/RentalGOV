import React from 'react'
import { assets } from '../assets/assets';
const PaymentStatus = () => {
  return (
    <div className='w-full'>
            <div className='mx-auto w-[25rem] h-[40vh] bg-green-400/20 mt-5 flex flex-col rounded-md'>

                <div className='mx-auto mt-4'><img src={assets.PaymentTick} alt="" 
                           className='h-30 w-30' /></div>
                <div className='mx-auto my-5'>
                    <h1 className='text-4xl font-bold text-black'>₹10 </h1>
                </div>
                <div className='mx-auto'>
                    <h1 className='text-2xl font-bold text-black'>Payment Done </h1>
                </div>
                <div className='mx-auto'>
                    <h1 className='text-2xl font-bold text-black'>Recieved with thanks from ______ </h1>
                    <p>A sum of rupees 10 against Trade License Fees.</p>
                </div>

                <div className='mt-10 mx-auto'>
                        <p>Date : 06-08-2025</p>
                </div>

            </div>
    </div>
  )
}

export default PaymentStatus;
