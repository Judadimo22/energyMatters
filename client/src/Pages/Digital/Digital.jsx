import React from "react";
import BannerSeccion from "../../Components/BannerSeccion/BannerSeccion";
import DetailService from "../../Components/DetailService/DetailService";
import Footer from "../../Components/Footer/Foooter";
import NavBar from "../../Components/NavBar/NavBar";
import digital from '../../img/digital.jpg'


const Digital = () => {
    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
            <div class='mt-[130px] mb-[50px] py-[50px] bg-[#e63083] text-[50px] text-[white]'>
                <BannerSeccion title='Digital'/>
            </div>
            <div>
                <DetailService service='Digital' imagen={digital} icon={<ion-icon name="laptop-outline"></ion-icon>} firstP='Digital Channel Analysis and Development' secondP='Website and Social-Media Management and Strategy' thirdP='Website design and administration' fourthP='Video Content and Promotional Material Production' fiveP='Custom tailored Application development (IOS /
                Android)'/>
            </div>
            <div class='mt-[50px]'>
                <Footer/>
            </div>
            </div>
        </div>
    )
};

export default Digital