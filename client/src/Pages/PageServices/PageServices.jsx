import React from "react";
import BannerSeccion from "../../Components/BannerSeccion/BannerSeccion";
import Footer from "../../Components/Footer/Foooter";
import NavBar from "../../Components/NavBar/NavBar";
import Services from "../../Components/Services/Services";

const PageServices = () => {
    return(
        <div>
            <div class='mb-[150px]'>
                <NavBar/>
            </div>
            <div class='my-[20px]'>
                <Services/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
};

export default PageServices