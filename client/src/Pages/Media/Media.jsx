import React from "react";
import BannerSeccion from "../../Components/BannerSeccion/BannerSeccion";
import DetailMedia from "../../Components/DetailMedia/DetailMedia";
import DetailService from "../../Components/DetailService/DetailService";
import Footer from "../../Components/Footer/Foooter";
import NavBar from "../../Components/NavBar/NavBar";
import media from '../../img/media.jpg'


const Media = () => {
    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
            <div class='mt-[130px] mb-[50px] py-[50px] bg-[#1c74a0] text-[50px] text-[white]'>
                <BannerSeccion title='Media'/>
            </div>
            <div>
                <DetailMedia service='Media' imagen={media} icon={<ion-icon name="volume-medium-outline"></ion-icon>} firstP='Editorial development and design tailored to the
                 organization objectives' secondP='Print and digital media:'/>
            </div>
            <div class='mt-[50px]'>
                <Footer/>
            </div>
            </div>
        </div>
    )
};

export default Media