/* eslint-disable prettier/prettier */
import React from 'react';
import CompanyCarousel from '../carousels/CompanyCarousel';

const CompanySection = () => {
  return (
    <section className="mt-20">
      <div className="text-center text-3xl md:text-4xl font-light uppercase">
        <h2>Top Hiring Companies</h2>
      </div>
      <CompanyCarousel />
    </section>
  );
};

export default CompanySection;
