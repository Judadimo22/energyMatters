import React from "react";
import BannerSeccion from "../../Components/BannerSeccion/BannerSeccion";
import DetailService from "../../Components/DetailService/DetailService";
import Footer from "../../Components/Footer/Foooter";
import NavBar from "../../Components/NavBar/NavBar";
import comunications from '../../img/comunications.jpg'


const Comunications = () => {
    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
            <div class='mt-[130px] mb-[50px] py-[50px] bg-[#b7d73b] text-[50px] text-[white]'>
                <BannerSeccion title='Comunications'/>
            </div>
            <div>
                <DetailService service='Comunications' imagen={comunications} icon={<ion-icon name="chatbubble-ellipses-outline"></ion-icon>} firstP='Conceptualization of corporate image' secondP='Public relations for the public and private sector' thirdP='Strategic positioning of goods and services' fourthP='Effective communications with internal and external
                customers' fiveP='Press release development and proofing'/>
            </div>
            
            <div class='mt-[50px]'>
                <Footer/>
            </div>
            </div>
        </div>
    )
};

export default Comunications