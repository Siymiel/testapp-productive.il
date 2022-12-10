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
      speed: 2000,
      slidesToShow: 6,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    };

    return (
      <div className="pt-16 md:pt-28 pb-10 px-5 lg:px-10 overflow-hidden">
        <h3 className="text-center mb-10 md:mb-16 text-xl md:text-3xl lg:text-4xl font-light uppercase">Our Partners</h3>
        <Slider {...settings} className="-mt-5">
            <GoLogoGithub className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <RxFigmaLogo className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <RiStackOverflowLine className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <RxNotionLogo className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <RxDiscordLogo className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <RxInstagramLogo className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <RxTwitterLogo className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <RxModulzLogo className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <RxSketchLogo className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <TfiThemifyLogo className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <IoLogoApple className="w-10 h-10 fill-gray-500 text-gray-500"/>
            <GrHpi className="w-10 h-10 fill-gray-500 text-gray-500"/>
        </Slider>
      </div>
    );
  }
}
