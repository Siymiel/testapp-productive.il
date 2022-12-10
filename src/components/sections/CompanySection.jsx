/* eslint-disable prettier/prettier */
import React from 'react';
import CompanyCarousel from '../carousels/CompanyCarousel';

const CompanySection = () => {
  return (
    <section className="mt-20">
      <div className="text-center text-xl md:text-4xl font-light uppercase">
        <h2>Top Hiring Companies</h2>
      </div>
      <div className='-mt-5'>
      <CompanyCarousel />
      </div>
    </section>
  );
};

export default CompanySection;
