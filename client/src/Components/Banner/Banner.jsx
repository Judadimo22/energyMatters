
import React, { Component } from "react";
import Slider from "react-slick";
import imagenBanner from '../../img/banner/imagen_banner.jpg'
import imagenBanner2 from '../../img/banner/imagen_banner2.jpg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position:'absolute', right:'30px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position:'absolute', left:'30px', zIndex:'5' }}
      onClick={onClick}
    />
  );
}

export default class SliderBanner extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnFocus: false,
      pauseOnHover: false
    };
    return (
      <div class='w-full'>
        <h2>Custom Arrows</h2>
        <Slider {...settings}>
          <div>
            <img  class='h-[200px] md:h-[520px] w-full object-cover'src={imagenBanner} alt="" />
          </div>
          <div>
            <img  class='h-[200px] md:h-[520px] w-full object-cover'src={imagenBanner2} alt="" />
          </div>
          <div>
            <img  class='h-[200px] md:h-[520px] w-full object-cover'src={imagenBanner} alt="" />
          </div>
          <div>
            <img  class='h-[200px] md:h-[520px] w-full object-cover'src={imagenBanner2} alt="" />
          </div>
          <div>
            <img  class='h-[200px] md:h-[520px] w-full object-cover'src={imagenBanner} alt="" />
          </div>
          <div>
            <img  class='h-[200px] md:h-[520px] w-full object-cover'src={imagenBanner2} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}