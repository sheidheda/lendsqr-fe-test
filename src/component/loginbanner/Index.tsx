import React from 'react'
import lendsqr from '../../dist/img/lendsqr.png'
import banner from '../../dist/img/banner.png'

const Index = () => {
  return (
     <div className="banner_container">
      <div className="logo">
       <img src={lendsqr} alt="lendsqr icon" className='logo__image' />
      </div>
      <div className="banner">
        <img src={banner} alt=""  className='banner__image'/>
      </div>
     </div> 
  )
}

export default Index