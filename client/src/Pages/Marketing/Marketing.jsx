import React from "react";
import BannerSeccion from "../../Components/BannerSeccion/BannerSeccion";
import DetailService3 from "../../Components/DetailService3/DetailService3";
import Footer from "../../Components/Footer/Foooter";
import NavBar from "../../Components/NavBar/NavBar";
import marketing from '../../img/marketing.jpg'


const Marketing = () => {
    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
            <div class='mt-[130px] mb-[50px] py-[50px] bg-[#efb338] text-[50px] text-[white]'>
                <BannerSeccion title='Marketing'/>
            </div>
            <div>
                <DetailService3 service='Marketing' imagen={marketing} firstP='We take pride on engaging and captivating our target
              audiences' secondP='Our focus is to build customer loyalty through targeted
              communications' thirdP='We strive to understand the values, mission, and vision of our
              clientele' icon={<ion-icon name="desktop-outline"></ion-icon>}/>
            </div>
            <div class='mt-[50px]'>
                <Footer/>
            </div>
            </div>
        </div>
    )
};

export default Marketing