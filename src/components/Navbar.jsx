import React from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router';
const Navbar = () => {
    const navigate =useNavigate()
    return (
    <div>
        <nav className="bg-white border-b shadow-md px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={assets.JACLOGO} alt="Emblem" className="sm:w-42 w-20 cursor-pointer" onClick={()=>navigate("/")} />
          <div>
            <h1 className="text-md sm:text-xl md:text-2xl font-serif font-bold text-gray-900 ">
              Government of Jharkhand
            </h1>
          </div>
        </div>
        <div className="text-sm text-gray-700">भारत सरकार</div>
      </nav>
    </div>
  )
}

export default Navbar;
