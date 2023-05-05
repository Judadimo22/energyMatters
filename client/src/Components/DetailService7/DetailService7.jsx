import React from "react";

const DetailService7 = (props) => {
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
                </div>

                
                <div class='flex justify-left text-left mx-auto md:w-5/6 my-[30px]'>
                <span class='mr-[5px] text-left text-green-500'>{props.icon}</span>
                <p class='text-left'>{props.thirdP}</p>
                </div>

                <div class='flex justify-left text-left mx-auto md:w-5/6 my-[30px]'>
                <span class='mr-[5px] text-left text-green-500'>{props.icon}</span>
                <p class='text-left'>{props.fourthP}</p>
                </div>

                <div class='flex justify-left text-left mx-auto md:w-5/6 my-[30px]'>
                <span class='mr-[5px] text-left text-green-500'>{props.icon}</span>
                <p class='text-left'>{props.fiveP}</p>
                </div>

                <div class='flex justify-left text-left mx-auto md:w-5/6 my-[30px]'>
                <span class='mr-[5px] text-left text-green-500'>{props.icon}</span>
                <p class='text-left'>{props.sixP}</p>
                </div>

                <div class='flex justify-left text-left mx-auto md:w-5/6 my-[30px]'>
                <span class='mr-[5px] text-left text-green-500'>{props.icon}</span>
                <p class='text-left'>{props.sevenP}</p>
                </div>

            </div>

            <div className=' mx-[60px] my-[30px] md:w-full md:mx-0 md:my-0'>
                <img src={props.imagen} alt="" />
            </div>
        </div>
    )
};

export default DetailService7;