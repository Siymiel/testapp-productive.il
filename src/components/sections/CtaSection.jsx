/* eslint-disable prettier/prettier */
import React from 'react';
import CtaCarousel from '../carousels/CtaCarousel';

const CtaSection = () => {
  return (
    <section className="mt-28">
      <div className="text-center text-3xl md:text-4xl font-light uppercase">
        <h2>Announcements</h2>
      </div>
      <CtaCarousel />
    </section>
  );
};

export default CtaSection;
