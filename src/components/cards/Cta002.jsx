/* eslint-disable prettier/prettier */
import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Macbook from '../../images/macbook.webp'

const Cta002 = () => {
  return (
    <div className='md:p-5'>
    <div
      className="bg-cover bg-center w-full h-72 md:h-80 lg:h-96 rounded-xl grid items-center"
      style={{
        backgroundImage: `url(${Macbook})`
      }}>
      <div>
        <div className="px-5 lg:px-10">
          <p className="text-[#7F5646] pb-3 font-semibold text-lg">Quality Product</p>
          <h2 className="font-extrabold  text-3xl md:text-4xl">Macbook Air</h2>
          <h2 className="text-gray-700 font-extrabold  text-3xl md:text-4xl">Career Finder</h2>
          <p className="pt-3 font-semibold text-[#7F5646]">
            Get a chance <br /> to win a new<br /> macbook
          </p>
        </div>
        <div className="pt-5 ml-5 md:ml-7 lg:ml-10">
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
