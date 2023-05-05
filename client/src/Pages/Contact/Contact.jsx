import React from "react";
import BannerSeccion from "../../Components/BannerSeccion/BannerSeccion";
import Footer from "../../Components/Footer/Foooter";
import FormContact from "../../Components/FormContact/FormContact";
import NavBar from "../../Components/NavBar/NavBar";


const Contact = () => {
    return(
        <div>
            <div class='mb-[150px]'>
                <NavBar/>
            </div>
            <div class='relative bottom-[20px]'>
                <FormContact/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
};

export default Contact;