import React from "react";
import comming1 from '../../img/comming1.png'
import comming2 from '../../img/comming2.png'

const Comming = () => {
    return(
        <div class='text-center'>
            <div>
            <h1 class='font-bold text-[40px] mb-[20px]'>Comming soon</h1>
            </div>
            <div class='flex justify-center mx-auto'>
                <img src={comming1} alt="" />
                <img src={comming2} alt="" />
            </div>
        </div>
    )
};

export default Comming