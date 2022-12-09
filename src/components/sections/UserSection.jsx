/* eslint-disable prettier/prettier */
import React from 'react';
import UserCarousel from '../carousels/UserCarousel';

const UserSection = () => {
  return (
    <section className="mt-20">
      <div className="text-center text-4xl font-light uppercase">
        <h2>Browse Users Like You</h2>
      </div>
      <UserCarousel />
    </section>
  );
};

export default UserSection;
