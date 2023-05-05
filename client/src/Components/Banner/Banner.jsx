
import React, { Component } from "react";
import ReactPlayer from "react-player";
import videoBanner from '../../videos/video_banner.mp4'

const Banner = () => {
  return(
      <div>
          <div class='mb-[40px] w-full relative justify-center mx-auto md:h-[545px] h-[200px] mt-[50px] md:mt-0'>
          <ReactPlayer
          url={videoBanner}
          playing='true'
          muted
          loop
          width='100%'
          height='100%'
          />
          </div>
      </div>
  )
};

export default Banner;