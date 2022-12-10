/* eslint-disable prettier/prettier */
import TestimonialCarousel from '../carousels/TestimonialCarousel';

const TestimonialSection = () => {
  return (
    <section className="mt-28">
      <div className="text-center text-3xl md:text-4xl font-light uppercase">
        <h2>Testimonial</h2>
      </div>
      <TestimonialCarousel />
    </section>
  );
};

export default TestimonialSection;
