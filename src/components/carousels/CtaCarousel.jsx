/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import Slider from "react-slick";
import Cta001 from "../cards/Cta001";
import Cta002 from "../cards/Cta002";
import Cta003 from "../cards/Cta003";

export default class CtaCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2400,
      slidesToShow: 2,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 7000,
      pauseOnHover: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };

    return (
      <div className="pt-10 px-3 lg:px-10">
        <Slider {...settings}>
          <div className="px-3">
            <Cta001 />
          </div>
          <div className="px-3">
            <Cta002 />
          </div>
          <div className="px-3">
            <Cta003 />
          </div>
        </Slider>
      </div>
    );
  }
}
