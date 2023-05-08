import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AdminNew } from '../AdminNew/AdminNew';
// import { Pagination } from '../Paginado/Paginado';
import { getNewsAdmin } from '../../../redux/actions';


export const AdminNews = () => {

  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("asc");
  const Notices = useSelector((state) => state.NewsAdminCopy)
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
    getNewsAdmin()
    const getData = async ( ) => {
      return dispatch(getNewsAdmin())
    }
    
  
    setProducts(getData());
  }, []);


  return (
    <div>
        <h1 className='text-center text-[40px]'>News</h1>
        <div className='items-center mx-[20px] flex-wrap my-[20px] justify-center text-center'>
        {
          Notices.length ?
            Notices.slice(pageSliceStart, pageSliceEnd).map(notice => (<AdminNew key={notice._id} notice={notice} />)) : null  
        }
        </div>

    </div>
  )
}