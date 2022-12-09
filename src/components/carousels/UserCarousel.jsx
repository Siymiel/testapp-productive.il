/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../arrows/Arrows";
import UserCard from "../cards/UserCard";

export default class UserCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      cssEase: "linear",
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

    return (
      <div className="pt-10 px-10">
        <Slider {...settings}>
            <UserCard
            url="https://images.pexels.com/photos/7561034/pexels-photo-7561034.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Gifts"
            />
            <UserCard
            url="https://images.pexels.com/photos/998405/pexels-photo-998405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Nails"
            />
            <UserCard
            url="https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Skin Care"
            />
            <UserCard
            url="https://images.pexels.com/photos/7449901/pexels-photo-7449901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Hair Products"
            />
            <UserCard
            url="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Hair Products"
            />
            <UserCard
            url="https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Hair Products"
            />
            <UserCard
            url="https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Hair Products"
            />
            <UserCard
            url="https://images.pexels.com/photos/1181341/pexels-photo-1181341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Hair Products"
            />
            <UserCard
            url="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Hair Products"
            />
            <UserCard
            url="https://images.pexels.com/photos/3201587/pexels-photo-3201587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Hair Products"
            />
            <UserCard
            url="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Hair Products"
            />
            <UserCard
            url="https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Hair Products"
            />
            <UserCard
            url="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Hair Products"
            />
        </Slider>
      </div>
    );
  }
}
