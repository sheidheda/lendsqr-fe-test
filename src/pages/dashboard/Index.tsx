import React from 'react'
import MainContainer from '../../component/mainContainer/Index'
import InfoCards from '../../component/InfoCards/Index'
// import UserTable from '../../component/usertable/Index'
const Dashboard: React.FC = () => {
  return (
    <>
      <MainContainer>
       <h5 className='page__title'>dashboard</h5>
       <InfoCards />
       {/* <UserTable /> */}
      </MainContainer> 
    </>
  )
}

export default Dashboard