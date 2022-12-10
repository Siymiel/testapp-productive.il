/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../arrows/Arrows";
import CompanyCard from "../cards/CompanyCard";
import Ihub from '../../images/ihub.jpeg'
import Google from '../../images/google.webp'
import Twitter from '../../images/twitter.avif'
import Andela from '../../images/andela.avif'
import VmWare from '../../images/vmware.webp'
import Xoriant from '../../images/xoriant.jpeg'
import Wipro from '../../images/wipro.webp'
import Verizon from '../../images/verizon.webp'
import Ibm from '../../images/ibm.jpeg'
import Turing from '../../images/turing.webp'
import PexelInc from '../../images/pexelinc.webp'
import Spacex from '../../images/spacex.avif'
import Apple from '../../images/apple.avif'

export default class CompanyCarousel extends Component {
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
            <CompanyCard
            url={Ihub}
            title="IHub"
            />
            <CompanyCard
            url={Google}
            title="Google"
            />
            <CompanyCard
            url={Twitter}
            title="Twitter"
            />
            <CompanyCard
            url={Andela}
            title="Andela"
            />
            <CompanyCard
            url={VmWare}
            title="VMware"
            />
            <CompanyCard
            url={Xoriant}
            title="Xoriant"
            />
            <CompanyCard
            url={Wipro}
            title="Wipro"
            />
            <CompanyCard
            url={Verizon}
            title="Verizon"
            />
            <CompanyCard
            url={Ibm}
            title="IBM"
            />
            <CompanyCard
            url={Turing}
            title="Turing"
            />
            <CompanyCard
            url={PexelInc}
            title="PexelInc"
            />
            <CompanyCard
            url={Spacex}
            title="SpaceX"
            />
            <CompanyCard
            url={Apple}
            title="Apple"
            />
        </Slider>
      </div>
    );
  }
}
