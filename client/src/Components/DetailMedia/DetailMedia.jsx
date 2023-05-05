import React from "react";

const DetailMedia = (props) => {
    return(
        <div className='md:grid grid-cols-2 justify-center mt-[30px] mb-[50px]'>
            <div className='mx-[20px] md:mx-[100px] items-center my-auto'>
                <h1 class='text-center items-top text-[40px] relative bottm-[50px]'>{props.service}</h1>
                <div class='flex justify-left text-left mx-auto md:w-5/6 my-[30px]'>
                    <span class='mr-[5px] text-left text-green-500'>{props.icon}</span>
                    <p class='text-left'>{props.firstP}</p>
                </div>

                <div class='flex justify-left text-left mx-auto md:w-5/6 my-[30px] '>
                <span class='mr-[5px] text-left text-green-500'>{props.icon}</span>
                <p class='text-left'>{props.secondP}</p>
                <ul class='relative top-[30px] right-[150px]'>
                    <li>- Newspapers</li>
                    <li>- Magazines</li>
                    <li>- Annual Publications</li>
                    <li>- Calendars</li>
                </ul>
                </div>



            </div>

            <div className=' mx-[60px] my-[30px] md:w-full md:mx-0 md:my-0'>
                <img src={props.imagen} alt="" />
            </div>
        </div>
    )
};

export default DetailMedia