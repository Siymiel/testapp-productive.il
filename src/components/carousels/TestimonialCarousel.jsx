/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import Slider from "react-slick";
import Testimony from "../cards/Testimony";

export default class TestimonialCarousel extends Component {
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
      cssEase: "linear"
    };

    return (
      <div className="pt-10 px-10">
        <Slider {...settings}>
            <Testimony imageUrl="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Samanta Hopkins"/>
            <Testimony imageUrl="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Trevor Wonder"/>
            <Testimony imageUrl="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Johnston Harvey"/>
            <Testimony imageUrl="https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Anastacia Smith"/>
        </Slider>
      </div>
    );
  }
}
