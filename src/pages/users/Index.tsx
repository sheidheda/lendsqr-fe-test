import React, {useEffect, useState} from 'react'
import MainContainer from '../../component/mainContainer/Index'
import InfoCards from '../../component/InfoCards/Index'
import UserTable from '../../component/usertable/Index'
import ReactPaginate from "react-paginate";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import axios from 'axios'
// import _ from "lodash";
const Index: React.FC = () => {
  
  const [users, setUsers] = useState<[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [perPage,setPerPage] = useState<number>(10);
  const userTotal = users.length
  const pageCount = Math.ceil(userTotal / perPage);
   const pagesVisited = pageNumber * perPage;


  const changePage = ({selected}:{selected:number})=>{
    setPageNumber(selected)
  }


  const onChangePerpage = (e:React.ChangeEvent<HTMLSelectElement>):void => setPerPage(Number(e.target.value))

  useEffect(()=>{
    const fetchUsers = async()=>{
      const response = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
      setUsers(response.data)
      
    }

    fetchUsers();
  }, [])

  return (
    <>
      <MainContainer>
       <h5 className='page__title'>users</h5>
       <InfoCards />
       <UserTable users={users.slice(pagesVisited, pagesVisited + perPage)}/>

       <div className="d-flex justify-content-between align-items-center">
          <div className='d-flex align-items-center text-center'>
            Showing 
            <select name="pp" onChange={onChangePerpage} className="form-control w-25 dropdown-toggle">
              <option value='10'>10</option>
              <option value='20'>20</option>
              <option value='50'>50</option>
              <option value='100'>100</option>
              <option value='500'>500</option>
            </select> 

              out of {userTotal}
          </div>
        <ReactPaginate
          previousLabel={<BsChevronLeft />}
          nextLabel={<BsChevronRight />} 
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns pt-5"}
          previousLinkClassName={"previousBttn "}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          />




       </div>
      </MainContainer>
    </>
  )
}

export default Index