import React from "react";
import imagen from '../../img/imagenForm.jpg';
import logo from '../../img/logo.jpeg';

const FormContact = () => {
    return(
        <div class='min-height-full flex'>
            <div class='hidden lg:block relative h-full flex-1'>
                <img class='h-[650px] object-cover' src={imagen} alt="" />
            </div>
            <div class='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
                <div class='mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]'>
                    <div class='text-center lg:text-left'>
                        <img class='h-12 w-auto m-auto lg:m-0' src={logo} alt="" />
                        <h2 class='mt-6 text-3xl font-extrabold text-gray-900'>Contact with us</h2>
                    </div>

                    <div class='mt-6'>
                        <form class='space-y-1'>
                            <div class='grid grid-cols-1 lg:grid-cols-2 lg:gap-3'>
                                <div>
                                    <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Name</label>
                                    <input type="text" class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Email'/>
                                </div>
                                <div>
                                <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Email</label>
                                    <input type="email" class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Email'/>
                                </div>
                                <div>
                                <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Phone</label>
                                    <input type="text" class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Phone'/>
                                </div>
                                <div>
                                <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Company</label>
                                    <input type="text" class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Company'/>
                                </div>
                            </div>
                            <div>
                                <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Message</label>
                                    <input type="text" class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Message'/>
                                </div>
                            <div>
                                <button class='mt-4 w-full py-3 bg-gray-900 text-white' type='submit'>Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )

};

export default FormContact;