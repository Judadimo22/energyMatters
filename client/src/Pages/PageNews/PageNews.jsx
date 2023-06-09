import React from "react";
import BannerSeccion from "../../Components/BannerSeccion/BannerSeccion";
import Footer from "../../Components/Footer/Foooter";
import NavBar from "../../Components/NavBar/NavBar";
import News from "../../Components/News/News";
import { NewsContainer } from "../../Components/NewsContainer/NewsContainer";

const PageNews = () => {
    return(
        <div>
            <div class='mb-[150px]'>
                <NavBar/>
            </div>
            <div class='my-[20px]'>
                <NewsContainer/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
};

export default PageNews;