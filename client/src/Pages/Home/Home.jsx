import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import SliderBanner from "../../Components/Banner/Banner";
import Videos from "../../Components/Videos/Videos";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Carrusel from '../../Components/Carrusel/Carrusel'
import Member from "../../Components/Member/Member";
import Footer from "../../Components/Footer/Foooter";
import BannerSeccion from "../../Components/BannerSeccion/BannerSeccion";



const Home = () => {
    return(
        <div class='overflow-x-hidden'>
            <div>
                <NavBar/>
            </div>
            <div class='mt-[100px]'>
                <SliderBanner/>
            </div>
            <div class='mt-[100px] mb-[100px]'>
                <Videos/>
            </div>
            <div>
                <AboutUs/>
            </div>
            <div class='mt-[70px] mb-[100px]'>
                <Carrusel/>
            </div>
            <div class='my-[50px]'>
                <Member/>
            </div>
            <div>
                <Footer/>
            </div>
            <div>
                <BannerSeccion/>
            </div>

        </div>
    )
};

export default Home;