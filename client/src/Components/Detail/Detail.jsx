import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewById } from "../../redux/actions";


export const Details = () => {
  const dispatch = useDispatch();
  const noticeDetails = useSelector((state) => state.Details);
  console.log('productDetails', noticeDetails)
  const { id } = useParams();

  const { name,description, image} = noticeDetails;
  // const tallas = productDetails.tallas;
  // const totalStock = productDetails.tallas.reduce((total, talla) => {
  //   return total + talla.stock;
  // }, 0);





  useEffect(() => {
    dispatch(getNewById(id));
  }, []);

  const [selectedSize, setSelectedSize] = useState("");
  console.log('selectedSize', selectedSize)

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };


  return (
      <div>
          <div className='text-center text-[40px] mb-[10px]'>
            <h1><strong>{name}</strong></h1>
          </div>
          <div className='justify-center text-center mx-auto mb-[10px]'>
            <img className='h-[350px] justify-center text-center mx-auto' src={image}alt={name}/>
          </div>
          <div className='text-center mb-[10px]'>
            <p>{description}</p>
          </div>
      </div>
  );
};