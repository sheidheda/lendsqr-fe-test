import React from 'react'
import TopBar from '../topNavigation/Index'
import SideBar from '../sideNavigation/Index'

interface Props{
 children?: React.ReactNode;
}
const Index: React.FC<Props> = ({children}) => {
  return (
    <>
     <TopBar />
     <SideBar />
     <div className="main">
      <div className="main__wrapper">
       {children}
      </div>
     </div>
    </>
  )
}

export default Index