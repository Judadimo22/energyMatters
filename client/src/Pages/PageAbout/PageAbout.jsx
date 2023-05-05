import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import BannerSeccion from "../../Components/BannerSeccion/BannerSeccion";
import Footer from "../../Components/Footer/Foooter";
import NavBar from "../../Components/NavBar/NavBar";

const PageAbout = () => {
    return(
        <div>
            <div class='mb-[150px]'>
                <NavBar/>
            </div>
            <div>
                <AboutUs/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
};

export default PageAbout;