import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillEdit} from "react-icons/ai";



export const AdminNew = (props) => {
  const dispatch = useDispatch()
  const noticeName = props.notice.name;
  const noticeDescription = props.notice.description

  return (
    <Link to={`details/${props.notice._id}`}>
      <div className= 'mx-[10px] border-gray-400 border-2 px-[10px] py-[10px] cursor-auto flex justify-between my-[10px]'>
      <h1 className="text-[16px] mb-[2px]"><strong>{noticeName}</strong></h1>
      <div className="flex justify-between mx-[20px]">
      <button className="bg-blue-800  text-white py-[2px] px-[7px] mt-[2px] text-[15px] rounded hover:bg-blue-500"><AiFillEdit/></button>
      </div>
    </div>
    </Link>
  );
};