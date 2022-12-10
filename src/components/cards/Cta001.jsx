/* eslint-disable prettier/prettier */
import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Irene from '../../images/irene.avif'

const Cta001 = () => {
  return (
    <div className='md:p-5'>
    <div
      className="bg-cover bg-center w-full h-72 md:h-80 lg:h-96 rounded-xl grid items-center"
      style={{
        backgroundImage: `url(${Irene})`
      }}>
      <div>
        <div className="px-4 md:px-10">
          <p className="text-[#A71D1B] pb-3 font-semibold text-lg">Latest News</p>
          <h2 className="text-white font-extrabold text-3xl md:text-4xl">Irene</h2>
          <h2 className="text-white font-extrabold text-3xl md:text-4xl">Wells</h2>
          <p className="pt-3 font-semibold text-white">
            the woman behind <br/><span className="text-[#A71D1B] text-3xl">cyber-security</span>
          </p>
        </div>
        <div className="pt-5 ml-5 md:ml-7 lg:ml-10">
          <button className="py-2 px-5 bg-[#A71D1B] uppercase font-medium rounded-md text-white text-sm flex space-x-3 items-center">
            Read More <MdOutlineKeyboardArrowRight className="fill-white w-7 h-5" />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cta001;
