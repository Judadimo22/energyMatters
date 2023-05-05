
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
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
      <div class='justify-center text-center'>
        <h2 class='text-center justify-center md:text-[40px] mb-[20px] text-[30px]'> Latest News</h2>
        <Slider {...settings}>
          
    <div class='container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-blue-700 bg-[#b7d73b] text-white justify-center'>
      <div class='flex justify-between p-4'>
        <div class='flex space-x-4'>
          <div>
            <img src="https://source.unsplash.com/100x100/?portrait" alt="" class="object-cover w-12 h-12 rounded-full text-white"/>
          </div>
          <div>
            <h4 class="font-bold">Leroy Jenkins</h4>
            <span class="text-xs text-white">2 days ago</span>
          </div>
        </div>
      </div>
      <div class="p-4 space-y-2 text-sm text-white">
        <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
        <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
      </div>
    </div>

    <div class='container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-blue-700 bg-[#b7d73b] text-white justify-center'>
      <div class='flex justify-between p-4'>
        <div class='flex space-x-4'>
          <div>
            <img src="https://source.unsplash.com/100x100/?portrait" alt="" class="object-cover w-12 h-12 rounded-full text-white"/>
          </div>
          <div>
            <h4 class="font-bold">Leroy Jenkins</h4>
            <span class="text-xs text-white">2 days ago</span>
          </div>
        </div>
      </div>
      <div class="p-4 space-y-2 text-sm text-white">
        <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
        <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
      </div>
    </div>

    <div class='container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-blue-700 bg-[#b7d73b] text-white justify-center'>
      <div class='flex justify-between p-4'>
        <div class='flex space-x-4'>
          <div>
            <img src="https://source.unsplash.com/100x100/?portrait" alt="" class="object-cover w-12 h-12 rounded-full text-white"/>
          </div>
          <div>
            <h4 class="font-bold">Leroy Jenkins</h4>
            <span class="text-xs text-white">2 days ago</span>
          </div>
        </div>
      </div>
      <div class="p-4 space-y-2 text-sm text-white">
        <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
        <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
      </div>
    </div>

    <div class='container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-blue-700 bg-[#b7d73b] text-white justify-center'>
      <div class='flex justify-between p-4'>
        <div class='flex space-x-4'>
          <div>
            <img src="https://source.unsplash.com/100x100/?portrait" alt="" class="object-cover w-12 h-12 rounded-full text-white"/>
          </div>
          <div>
            <h4 class="font-bold">Leroy Jenkins</h4>
            <span class="text-xs text-white">2 days ago</span>
          </div>
        </div>
      </div>
      <div class="p-4 space-y-2 text-sm text-white">
        <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
        <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
      </div>
    </div>

    <div class='container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-blue-700 bg-[#b7d73b] text-white justify-center'>
      <div class='flex justify-between p-4'>
        <div class='flex space-x-4'>
          <div>
            <img src="https://source.unsplash.com/100x100/?portrait" alt="" class="object-cover w-12 h-12 rounded-full text-white"/>
          </div>
          <div>
            <h4 class="font-bold">Leroy Jenkins</h4>
            <span class="text-xs text-white">2 days ago</span>
          </div>
        </div>
      </div>
      <div class="p-4 space-y-2 text-sm text-white">
        <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
        <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
      </div>
    </div>

    <div class='container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-blue-700 bg-[#b7d73b] text-white justify-center'>
      <div class='flex justify-between p-4'>
        <div class='flex space-x-4'>
          <div>
            <img src="https://source.unsplash.com/100x100/?portrait" alt="" class="object-cover w-12 h-12 rounded-full text-white"/>
          </div>
          <div>
            <h4 class="font-bold">Leroy Jenkins</h4>
            <span class="text-xs text-white">2 days ago</span>
          </div>
        </div>
      </div>
      <div class="p-4 space-y-2 text-sm text-white">
        <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
        <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
      </div>
    </div>

        </Slider>
      </div>
    );
  }
}