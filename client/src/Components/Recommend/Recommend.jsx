import React from "react";
import recommend from '../../img/recommendProduct.png'

const Recommend = () => {
    return(
        <div class='justify-center text-center'>
        <h1 class='font-bold text-[40px] mb-[20px]'>Our Recommended product</h1>
        <img class='justify-center mx-auto' src={recommend} alt="" />
    </div>
    )
};

export default Recommend;