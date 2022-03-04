import React from 'react';
import logo from './../../img/logo.png'

export default function Navbar() {
  return (
    <div className="border border-gray-200 text-center md:flex items-center space-x-4 justify-center bg-gray-300">
        <div className="">
        <img className='w-16 h-16 mx-auto' src={logo} alt="" />
        </div>
        <p className='uppercase text-2xl text-red-600 font-extrabold'>snb nice food valley ltd.</p>
    </div>
  )
}
