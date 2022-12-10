/* eslint-disable prettier/prettier */
import React from 'react';
import UserCarousel from '../carousels/UserCarousel';

const UserSection = () => {
  return (
    <section className="mt-20">
      <div className="text-center text-3xl md:text-4xl font-light uppercase">
        <h2>Top Hiring Companies</h2>
      </div>
      <UserCarousel />
    </section>
  );
};

export default UserSection;
