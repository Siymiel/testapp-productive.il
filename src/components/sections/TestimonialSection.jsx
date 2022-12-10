/* eslint-disable prettier/prettier */
import TestimonialCarousel from '../carousels/TestimonialCarousel';

const TestimonialSection = () => {
  return (
    <section className="mt-28 overflow-hidden">
      <div className="text-center text-xl md:text-4xl font-light uppercase">
        <h2>Testimonial</h2>
      </div>
      <div className='-mt-5'>
      <TestimonialCarousel />
      </div>
    </section>
  );
};

export default TestimonialSection;
