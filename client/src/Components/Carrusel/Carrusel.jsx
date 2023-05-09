
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../redux/actions";
import { Card } from "../Card/Card";


const SimpleSlider = () => {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("asc");
  const Notices = useSelector((state) => state.NewsCopy)
  console.log(Notices)
  const resultsPerPage = 15
  const numberOfResults = Notices.length
  const numberOfPages = numberOfResults ? Math.ceil(numberOfResults / resultsPerPage) : 0
  const [pageNumber, setPageNumber] = useState(1)
  const pageSliceStart = pageNumber === 1 ? 0 : (pageNumber - 1) * resultsPerPage
  const pageSliceEnd = pageNumber * resultsPerPage

  const dispatch = useDispatch()
  useEffect(() => {
    setPageNumber(1)
  }, [numberOfResults])
  useEffect(() => {
    getNews()
    const getData = async ( ) => {
      return dispatch(getNews())
    }
    
  
    setProducts(getData());
  }, []);
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
	  autoplay: true,
	  pauseOnFocus:true,
	  autoplaySpeed:4000
    };
    return (
      <div class='justify-center text-center'>
        <h2 class='text-center justify-center md:text-[40px] mb-[20px] text-[30px]'> Latest News</h2>
        <Slider {...settings}>
        <div>
          {Notices.map(n => {
            return(
              <div>
                {n.name}
              </div>
            )
          })}
        </div>

        </Slider>
      </div>
    );
  };

  export default SimpleSlider
