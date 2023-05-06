import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


export const Card = (props) => {
  const dispatch = useDispatch()
  const noticeImage = props.notice.image;
  const noticeName = props.notice.name;
  const noticeDescription = props.notice.description

  return (
    <Link to={`details/${props.notice._id}`}>
      <div className= 'w-[400px] mx-[10px] border-gray-400 border-2 px-[10px] py-[10px] cursor-auto'>
      <h1 className="text-[30px] mb-[2px]"><strong>{noticeName}</strong></h1>
      <img className="w-full px-[5px] py-[5px]" src={noticeImage} alt="" />
      <h1 className=' whitespace-nowrap text-ellipsis overflow-hidden'>{noticeDescription}</h1>
      <div className="flex justify-between mx-[20px]">
      <div></div>
      <button className="bg-blue-800  text-white py-[2px] px-[7px] mt-[2px] text-[15px] rounded hover:bg-blue-500">See more</button>
      </div>
    </div>
    </Link>
  );
};