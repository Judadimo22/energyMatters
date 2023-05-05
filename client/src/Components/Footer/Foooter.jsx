import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/logo.png'

const Footer = () => {
    return(
        <div class='md:flex items-center justify-center py-[30px] bg-[#e0e0e0] text-black border-t-blue-800 border-[2px]'>
            <div class='mx-[100px] items-center md:w-[200px]'>
            <img class='w-[200px] z-5' src={logo} alt="" />
            </div>

            <div class='ml-[50px] md:w-[350px] md:text-left mt-[20px] md:mt-0'>
            <ul>
                <li><span class='mr-[10px]'><ion-icon name="location-outline"></ion-icon></span>Carrera 16 No. 93A -36. <br />Oficina 801</li>
                <li><span class='mr-[10px]'><ion-icon name="call-outline"></ion-icon></span>754 -226 6148</li>
                <li><span class='mr-[10px]'><ion-icon name="mail-outline"></ion-icon></span>claudiabedoya@emattersnews.com</li>
            </ul>
            </div>

            <div class='hidden md:block mx-[50px] md:w-[200px] md:text-center'>
            <ul>
                <Link  to='/'>
                <li>Home</li>
                </Link>
                <Link  to='aboutUs'>
                <li>About us</li>
                </Link>
                <Link  to='services'>
                <li>Services</li>
                </Link>
                <Link  to='news'>
                <li>News</li>
                </Link>
                <Link  to='contactUs'>
                <li>Contact us</li>
                </Link>

            </ul>
            </div>

            <div class='md:block mx-[80px] text-center mt-[20px] md:mt-0 mb-[20px]'>
            <h1>Ubicacion</h1>
            </div>

        </div>
    )
};

export default Footer;