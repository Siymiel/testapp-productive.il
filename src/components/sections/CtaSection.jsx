/* eslint-disable prettier/prettier */
import React from 'react';
import CtaCarousel from '../carousels/CtaCarousel';

const CtaSection = () => {
  return (
    <section className="mt-20 md:mt-28 overflow-hidden">
      <div className="text-center text-xl md:text-4xl font-light uppercase">
        <h2>News & Announcements</h2>
      </div>
      <div className='-mt-5'>
      <CtaCarousel />
      </div>
    </section>
  );
};

export default CtaSection;
