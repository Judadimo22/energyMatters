import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Videos from "../../Components/Videos/Videos";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Carrusel from '../../Components/Carrusel/Carrusel'
import Member from "../../Components/Member/Member";
import Footer from "../../Components/Footer/Foooter";
import BannerSeccion from "../../Components/BannerSeccion/BannerSeccion";
import Banner from "../../Components/Banner/Banner";
import Recommended from "../../Components/Recommended/Recommended";



const Home = () => {
    return(
        <div class='overflow-x-hidden'>
            <div>
                <NavBar/>
            </div>
            <div class='mt-[100px]'>
                <Banner/>
            </div>
            <div class='mt-[100px] mb-[100px]'>
                <Recommended/>
            </div>
            <div>
                <AboutUs/>
            </div>
            {/* <div class='mt-[70px] mb-[100px]'>
                <Carrusel/>
            </div> */}
            <div class='my-[50px]'>
                <Member/>
            </div>
            <div className='bg-[#e0e0e0]'>
                <Footer/>
            </div>
            <div>
                <BannerSeccion/>
            </div>

        </div>
    )
};

export default Home;