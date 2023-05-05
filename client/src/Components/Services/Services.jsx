import React from 'react';
import marketing from '../../img/marketing.jpg'
import comunications from '../../img/comunications.jpg'
import digital from '../../img/digital.jpg'
import media from '../../img/media.jpg'
import events from '../../img/events.jpg'
import investments from '../../img/investments.jpg'
import { Link } from 'react-router-dom';


const Services = () => {
    return(
        <div class='mt-[10px]'>
            <div class='mt-[10px]'>
                <h1 class='text-center text-[50px] pt-[20px] font-bold'>Services</h1>
            </div>
            <div class='my-[50px] mt-[70px] justify-center flex flex-wrap'>
            <Link to='/marketing'>
            <div class='mx-[70px] my-[20px]'>
                <h1 class='text-center text-[20px] mb-[10px] bg-[#61b716] text-white py-[5px] font-bold'>Marketing</h1>
                <img class='h-[200px] w-[300px] rounded object-cover' src={marketing} alt="" />
            </div>
            </Link>
            <Link to='/comunications'>
            <div class='mx-[70px] my-[20px]'>
            <h1 class='text-center text-[20px] mb-[10px] bg-[#61b716] text-white py-[5px] font-bold'>Comunications</h1>
                <img class='h-[200px] w-[300px] rounded object-cover' src={comunications} alt="" />
            </div>
            </Link>
            <Link to='/digital'>
            <div class='mx-[70px] my-[20px]'>
            <h1 class='text-center text-[20px] mb-[10px] bg-[#61b716] text-white py-[5px] font-bold'>Digital</h1>
                <img class='h-[200px] w-[300px] rounded object-cover' src={digital} alt="" />
            </div>
            </Link>
            <Link to='/media'>
            <div class='mx-[70px] my-[20px]'>
            <h1 class='text-center text-[20px] mb-[10px]  bg-[#0849a8] text-white py-[5px] font-bold'>Media</h1>
                <img class='h-[200px] w-[300px] rounded object-cover' src={media} alt="" />
            </div>
            </Link>
            <Link to='/events'>
            <div class='mx-[70px] my-[20px]'>
            <h1 class='text-center text-[20px] mb-[10px] bg-[#0849a8] text-white py-[5px] font-bold'>Events</h1>
                <img class='h-[200px] w-[300px] rounded object-cover' src={events} alt="" />
            </div>
            </Link>
            <Link to='/investments'>
            <div class='mx-[70px] my-[20px]'>
            <h1 class='text-center text-[20px] mb-[10px] bg-[#0849a8] text-white py-[5px]'>Investments</h1>
                <img class='h-[200px] rounded w-[300px] object-cover' src={investments} alt="" />
            </div>
            </Link>

        </div>
        </div>
    )
};

export default Services;