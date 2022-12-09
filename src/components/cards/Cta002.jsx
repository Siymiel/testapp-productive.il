/* eslint-disable prettier/prettier */
import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Cta002 = () => {
  return (
    <div className='p-5'>
    <div
      className="bg-cover bg-center w-full h-96 rounded-xl grid items-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=600')"
      }}>
      <div>
        <div className="px-10">
          <p className="text-[#7F5646] pb-3 font-semibold text-lg">Quality Product</p>
          <h2 className="font-extrabold text-4xl">Macbook Air</h2>
          <h2 className="text-gray-700 font-extrabold text-4xl">Career Finder</h2>
          <p className="pt-3 font-semibold text-[#7F5646]">
            Get a chance <br /> to win a new<br /> macbook
          </p>
        </div>
        <div className="pt-5 ml-10">
          <button className="py-2 px-5 bg-[#7F5646] uppercase font-medium rounded-md text-white text-sm flex space-x-3 items-center">
            Register To Start <MdOutlineKeyboardArrowRight className="fill-white w-7 h-5" />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cta002;
