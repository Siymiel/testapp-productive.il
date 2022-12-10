/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import Slider from "react-slick";
import { IoLogoApple } from 'react-icons/io';
import { GoLogoGithub } from 'react-icons/go'
import { RxNotionLogo, RxFigmaLogo, RxDiscordLogo, RxInstagramLogo, RxModulzLogo, RxTwitterLogo, RxSketchLogo } from 'react-icons/rx'
import { TfiThemifyLogo } from 'react-icons/tfi'
import { GrHpi } from 'react-icons/gr'
import { RiStackOverflowLine } from 'react-icons/ri'

export default class PartnerCarousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 700,
      slidesToShow: 6,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="pt-20 md:pt-28 pb-10 px-10">
        <h3 className="text-center mb-10 md:mb-16 text-4xl font-light uppercase">Our Partners</h3>
        <Slider {...settings}>
            <IoLogoApple className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <GoLogoGithub className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <RxNotionLogo className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <RxFigmaLogo className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <RxDiscordLogo className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <RxInstagramLogo className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <RxModulzLogo className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <RxTwitterLogo className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <RxSketchLogo className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <TfiThemifyLogo className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <GrHpi className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <RiStackOverflowLine className="w-10 h-10 fill-gray-500 text-gray-500"/>
        </Slider>
      </div>
    );
  }
}
