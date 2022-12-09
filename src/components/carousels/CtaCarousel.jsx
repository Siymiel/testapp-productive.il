/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../arrows/Arrows";
import Cta001 from "../cards/Cta001";
import Cta002 from "../cards/Cta002";
import Cta003 from "../cards/Cta003";

export default class CtaCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      cssEase: "linear",
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

    return (
      <div className="pt-10 px-10">
        <Slider {...settings}>
            <Cta001 />
            <Cta002 />
            <Cta003 />
        </Slider>
      </div>
    );
  }
}
