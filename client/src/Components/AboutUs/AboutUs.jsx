import React from "react";
import imagen from '../../img/imagen_about.jpg'

const AboutUs = () => {
    return(
        <div className='md:grid grid-cols-2 justify-center mt-[30px] mb-[50px]'>
            <div className='mx-[20px] md:mx-[100px] items-center my-auto'>
                <h1 class='text-center items-top text-[40px] relative bottm-[50px]'>About Us</h1>
                <div class='flex justify-left text-left mx-auto md:w-5/6 my-[30px]'>
                    <span class='mr-[5px] text-left text-green-500'><ion-icon name="bulb-outline"></ion-icon></span>
                    <p class='text-left'>Energy Matters was born in the energy sector</p>
                </div>

                <div class='flex justify-left text-left mx-auto md:w-5/6 my-[30px] '>
                <span class='mr-[5px] text-left text-green-500'><ion-icon name="bulb-outline"></ion-icon></span>
                <p class='text-left'>Specialized on providing marketing, communication development, and support for national and multinational corporations</p>
                </div>

                
                <div class='flex justify-left text-left mx-auto md:w-5/6 my-[30px'>
                <span class='mr-[5px] text-left text-green-500'><ion-icon name="bulb-outline"></ion-icon></span>
                <p class='text-left'>Today we bring the same energy, experience, and <br /> specialized services to generate synergies, and augment <br /> the vision of our partners</p>
                </div>

            </div>

            <div className=' mx-[60px] my-[30px] md:w-full md:mx-0 md:my-0'>
                <img src={imagen} alt="" />
            </div>
        </div>
    )
};

export default AboutUs;