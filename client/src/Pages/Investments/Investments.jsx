import React from "react";
import BannerSeccion from "../../Components/BannerSeccion/BannerSeccion";
import DetailService3 from "../../Components/DetailService3/DetailService3";
import Footer from "../../Components/Footer/Foooter";
import NavBar from "../../Components/NavBar/NavBar";
import investments from '../../img/investments.jpg';
import volarte from '../../img/volarte.png'


const Investments = () => {
    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
            <div class='mt-[130px] mb-[50px] py-[50px] bg-[#421477] text-[50px] text-[white]'>
                <BannerSeccion title='Investments'/>
            </div>
            <div class='items-center justify-center mx-auto text-center relative bottom-[50px]'>
                <img class='mx-auto' src={volarte} alt="" />
                <h1 class='text-green-400 text-[20px]'>Can you imagine reaching 500 million eyes with your brand?</h1>
            </div>
            <div>
                <DetailService3 service='Investments' imagen={investments} firstP='We represent the Volarte ART project for the United States' secondP='The project showcases culture through the digital
                exhibition of pieces from the most important museums in
                Latin America' thirdP='Displays are located in the 10 busiest airports in the
              Andean region' icon={<ion-icon name="cash-outline"></ion-icon>}/>
            </div>
            <div class='mt-[50px]'>
                <Footer/>
            </div>
            </div>
        </div>
    )
};

export default Investments