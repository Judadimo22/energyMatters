import React from "react";
import BannerSeccion from "../../Components/BannerSeccion/BannerSeccion";
import Comming from "../../Components/Comming/Comming";

import DetailService7 from "../../Components/DetailService7/DetailService7";
import Footer from "../../Components/Footer/Foooter";
import NavBar from "../../Components/NavBar/NavBar";
import Recommend from "../../Components/Recommend/Recommend";
import events from '../../img/events.jpg'


const Events = () => {
    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
            <div class='mt-[130px] mb-[50px] py-[50px] bg-[#a3217f] text-[50px] text-[white]'>
                <BannerSeccion title='Events'/>
            </div>
            <div>
                <DetailService7 service='Events' imagen={events} icon={<ion-icon name="people-outline"></ion-icon>} firstP='Workshops' secondP='Launches' thirdP='Event Planning' fourthP='Sports Events' fiveP='Conventions (participation and consulting)' sixP='Promotional Products' sevenP='Special Gifts and Promotional material'/>
            </div>
            <div>
                <Comming/>
            </div>
            <div class='mt-[40px]'>
                <Recommend/>
            </div>
            <div class='mt-[50px]'>
                <Footer/>
            </div>
            </div>
        </div>
    )
};

export default Events