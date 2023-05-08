import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewById, updateNew } from "../../../redux/actions";
import Swal from "sweetalert2";

const EditNew = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const getNoticeId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    name: "",
    description: "",
  }) 

  useEffect(() => {
    dispatch(getNewById(id));
  }, [id]);

  useEffect(() => {
    setInputInfo({
      name: getNoticeId.name,
      description: getNoticeId.description,
    });
  }, [getNoticeId]);

  function handleInputChange(e) {
    e.preventDefault();
    setInputInfo({
      ...inputInfo,
      [e.target.name]: e.target.value,
    });
  }



  function handleSubmitInfo(e){
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: '¡Success!',
      text: 'The new info has been updated',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Continue'
    })
    dispatch(updateNew(id, inputInfo));
    setInputInfo({
      name: e.target.value,
      description: e.target.value,
    });
  }


  return (
    <div>
        <form onSubmit={handleSubmitInfo}>
          <div className="text-center">
            <h1 className="text-[40px]">
              EditProduct
            </h1>
          </div>
          <div className="px-[50px]">
          <div>
            <h1><strong>Name</strong></h1>
            <input className="border-2 w-full" onChange={(e) =>handleInputChange(e)} type="text" key='name' name='name' value={inputInfo.name}/>
          </div>
          <div>
            <h1><strong>Description</strong></h1>
            <textarea  className="w-full h-[150px] border-2" onChange={(e) =>handleInputChange(e)} type="text" key='description' name='description' value={inputInfo.description}/>
          </div>
          <div className="text-center justify-center  mt-[10px] bg-blue-800 py-[2px] text-white">
            <button type="submit">
              Update info
            </button>
          </div>
          </div>
        </form>
    </div>
  );
};

export default EditNew;