
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import abaExpress from '../../img/socios/abaExpress.png'
import atlantis from '../../img/socios/atlantis.png'
import blackStone from '../../img/socios/blackStone.png'
import globalX from '../../img/socios/globalX.png'
import sec from '../../img/socios/sec.png'
import skyClip from '../../img/skyClip.png'


export default class Member extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
	  autoplay: true,
	  pauseOnFocus:true,
	  autoplaySpeed:4000
    };
    return (
      <div class='justify-center text-center m-auto ml-1/4'>
        <h2 class='text-center justify-center md:text-[40px] text-[40px] mb-[10px] md:mb-[10px]'> Clients</h2>
        <Slider {...settings}>
          <div class='justify-center text-center m-auto items-center '>
            <img class='mx-auto justify-center w-[300px] md:w-[350px] items-center mt-[50px]' src={abaExpress} alt="" />
          </div>
          <div class='justify-center text-center m-auto '>
            <img class='mx-auto justify-center w-auto h-[150px] md:h-[200px]' src={atlantis} alt="" />
          </div>
          <div class='justify-center text-center m-auto '>
            <img class='mx-auto justify-center w-[300px] md:w-[350px] mt-[10px]' src={blackStone} alt="" />
          </div>
          <div class='justify-center text-center m-auto '>
            <img class='mx-auto justify-center w-[350px] mt-[50px]' src={globalX} alt="" />
          </div>
          <div class='justify-center text-center m-auto '>
            <img class='mx-auto justify-center w-[350px] mt-[10px]' src={sec} alt="" />
          </div>
          <div class='justify-center text-center m-auto '>
            <img class='mx-auto justify-center w-[350px] mt-[10px]' src={skyClip} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}