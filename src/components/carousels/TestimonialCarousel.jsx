/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import Slider from "react-slick";
import Testimony from "../cards/Testimony";
import Testimonial1 from '../../images/testimonial1.webp'
import Testimonial2 from '../../images/testimonial2.webp'
import Testimonial3 from '../../images/testimonial3.webp'
import Testimonial4 from '../../images/testimonial4.jpeg'

export default class TestimonialCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 7000,
      pauseOnHover: true,
      cssEase: "linear"
    };

    return (
      <div className="pt-10 px-5 lg:px-10">
        <Slider {...settings}>
            <Testimony imageUrl={Testimonial1} name="Samanta Hopkins"/>
            <Testimony imageUrl={Testimonial2} name="Trevor Wonder"/>
            <Testimony imageUrl={Testimonial3} name="Johnston Harvey"/>
            <Testimony imageUrl={Testimonial4} name="Anastacia Smith"/>
        </Slider>
      </div>
    );
  }
}
