import React, { useState } from "react";
import logo from '../../img/logo.png';
import { Link } from "react-router-dom";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    return(
        <div class='shadow-md w-full fixed top-0 left-0 z-10'>
            <div class='pt-[6px] pb-[5px] flex items-center justify-center bg-blue-800'>
                <ul class='justify-between cursor-pointer'>
                <a href="https://www.linkedin.com/in/claudiabedoya-energymatters/"><span class='text-white mx-[10px]'><ion-icon name="logo-linkedin"></ion-icon></span></a>
                <span class=' text-white mx-[10px]'><ion-icon name="logo-instagram"></ion-icon></span>
                <a href="https://www.youtube.com/@EnergyMattersTV"><span class='text-white mx-[10px]'><ion-icon name="logo-youtube"></ion-icon></span></a>
                </ul>
            </div>
            <div class='md:flex items-center justify-between py-4 md:px-10 px-7 bg-white'>
                <div class='font-bold text-2xl cursor-pointer flex items-center'>
                    <Link to='/'>
                    <img class='w-[200px]' src={logo} alt="" />
                    </Link>
                </div>
                <div onClick={() => setOpen(!open)} class='text-3xl absolute right-8 top-[65px] cursor-pointer md:hidden'>
                <ion-icon name={open ? 'close': 'menu'}></ion-icon>
                </div>
                <ul class={`bg-white mt-[30px] md:flex md:mt-0 md:items-center cursor-pointer md:pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 shadow-md md:shadow-none `}>
                <Link to='/'><li class='md:ml-8 text-[18px] hover:text-green-700 md:my-0 my-7'>Home</li></Link>
                <Link to='/aboutUs'><li class='md:ml-8 text-[18px] hover:text-green-700 md:my-0 my-7'>About Us</li></Link>
                <Link><li class='md:ml-8 text-[18px] md:my-0 my-7'>
                    <div>
                        <div class="group inline-block relative">
                            <Link to='/services'><span class='hover:text-green-700'>Services</span></Link>
                            <ul class="absolute hidden pt-1 group-hover:block pb-[10px]">
                                <Link to='/marketing'><li class="rounded-t bg-white hover:bg-gray-400 py-2 px-8 block whitespace-no-wrap">Marketing</li></Link>
                                <Link to='/comunications'><li class="rounded-t bg-white hover:bg-gray-400 py-2 px-8 block whitespace-no-wrap">Comunications</li></Link>
                                <Link to='/digital'><li class="rounded-t bg-white hover:bg-gray-400 py-2 px-8 block whitespace-no-wrap">Digital</li></Link>
                                <Link to='/media'><li class="rounded-t bg-white hover:bg-gray-400 py-2 px-8 block whitespace-no-wrap">Media</li></Link>
                                <Link to='/events'><li class="rounded-t bg-white hover:bg-gray-400 py-2 px-8 block whitespace-no-wrap">Events</li></Link>
                                <Link to='/investments'><li class="rounded-t bg-white hover:bg-gray-400 py-2 pb-6 px-8 block whitespace-no-wrap mb-[10px]">Investments</li></Link>
                            </ul>
                        </div>
                    </div>
                    </li>
                </Link>
                <Link to='/news'><ul class='md:ml-8 text-[18px] hover:text-green-700 md:my-0 my-7'>News</ul></Link>
                <Link to='/contactUs'><li class='md:ml-8 text-[18px] hover:text-green-700 md:my-0 my-7'>Contact Us</li></Link>
                
            </ul>

            </div>


        </div>
    )
};

export default NavBar;