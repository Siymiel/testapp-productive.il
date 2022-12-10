/* eslint-disable prettier/prettier */
import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Cta002 = () => {
  return (
    <div className='md:p-5'>
    <div
      className="bg-cover bg-center w-full h-72 md:h-80 lg:h-96 rounded-xl grid items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1514543250559-83867827ecce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80')"
      }}>
      <div>
        <div className="px-10">
          <p className="text-[#ffffff] pb-3 font-semibold text-lg">Hackathon</p>
          <h2 className="font-extrabold text-3xl md:text-4xl text-[#1fb6ff]">Google</h2>
          <h2 className="text-[#1fb6ff] font-extrabold text-3xl md:text-4xl">Africa DevFest</h2>
          <p className="pt-3 font-semibold text-gray-200">
            Come and experience, <br /> what being a Google<br /> dev is like
          </p>
        </div>
        <div className="pt-5 ml-5 md:ml-7 lg:ml-10">
          <button className="py-2 px-5 bg-[#26b5d5] uppercase font-medium rounded-md text-white text-sm flex space-x-3 items-center">
            Register To Join <MdOutlineKeyboardArrowRight className="fill-white w-7 h-5" />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cta002;
