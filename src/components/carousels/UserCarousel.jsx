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
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
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
      <div className="pt-10 px-10 ">
        <Slider {...settings}>
            <UserCard
            url="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="IHub"
            />
            <UserCard
            url="https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Google"
            />
            <UserCard
            url="https://images.unsplash.com/photo-1595325281545-e7d6cdd5f95d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Twitter"
            />
            <UserCard
            url="https://images.unsplash.com/photo-1561993090-b7c00b87852a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            title="Andela"
            />
            <UserCard
            url="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="VMware"
            />
            <UserCard
            url="https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Xoriant"
            />
            <UserCard
            url="https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Wipro"
            />
            <UserCard
            url="https://images.pexels.com/photos/1181341/pexels-photo-1181341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Verizon"
            />
            <UserCard
            url="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="IBM"
            />
            <UserCard
            url="https://images.pexels.com/photos/3201587/pexels-photo-3201587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Turing"
            />
            <UserCard
            url="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="PexelInc"
            />
            <UserCard
            url="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="SpaceX"
            />
            <UserCard
            url="https://images.unsplash.com/photo-1612097099760-3bb8af85cd74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=849&q=80"
            title="Apple"
            />
        </Slider>
      </div>
    );
  }
}
