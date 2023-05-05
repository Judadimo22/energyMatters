import React from "react";
import BannerSeccion from "../../Components/BannerSeccion/BannerSeccion";
import Footer from "../../Components/Footer/Foooter";
import NavBar from "../../Components/NavBar/NavBar";
import News from "../../Components/News/News";

const PageNews = () => {
    return(
        <div>
            <div class='mb-[150px]'>
                <NavBar/>
            </div>
            <div class='my-[20px]'>
                <News/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
};

export default PageNews;