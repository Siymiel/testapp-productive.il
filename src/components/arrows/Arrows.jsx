/* eslint-disable react/prop-types *//* eslint-disable prettier/prettier */
import { SlArrowRightCircle, SlArrowLeftCircle } from 'react-icons/sl'
import { BiUpArrow } from 'react-icons/bi';
import ScrollToTop from "react-scroll-to-top";

export function NextArrow({ onClick, className, style }) {
  return <SlArrowRightCircle className={className} style={{...style, color: "#1fb6ff", height: "28px", width: "28px", display: "block"}} onClick={onClick}/>;
}

export function PrevArrow({ onClick, className, style }) {
  return <SlArrowLeftCircle className={className} style={{...style, color: "#1fb6ff", height: "28px", width: "28px", display: "block"}} onClick={onClick}/>;
}

export function ScrolltoTop() {
  return <ScrollToTop smooth component={<BiUpArrow className='w-6 h-6 ml-2'/>}/>
}