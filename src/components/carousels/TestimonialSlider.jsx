/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import Slider from "react-slick";

export default class TestimonialSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="pt-10 px-10 absolute z-20">
        <Slider {...settings}>
            <p className="text-white text-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, molestias?1</p>
            <p className="text-white text-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, molestias?2</p>
            <p className="text-white text-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, molestias?3</p>
        </Slider>
      </div>
    );
  }
}
