import React from 'react'
import lendsqr from '../../dist/img/lendsqr.png'
import {BiSearch} from 'react-icons/bi'
import {BsBell} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import profIcon from '../../dist/img/image 4.png'
import {BsFillCaretDownFill} from 'react-icons/bs'
const Index: React.FC = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__inner">
          <div className="navbar__items">
            <Link to="/dashboard">
              <img src={lendsqr} alt="" className='logo__image' />
            </Link>
            <div className="navbar__search">
              <input type="search" className="navbar__searchinput" placeholder='search for anything'/>
              <button className='navbar__searchbtn'><BiSearch /></button>
            </div>
          </div>
          <div className="navbar__items">
            <Link className='navbar__docs__link' to='#'>docs</Link>

            <BsBell className='navbar__bell__icon' />

            <div className="navbar__dropdown">
                <img src={profIcon} className="navbar__dropdown__image" alt="" />
                <span className="navbar__dropdown__text">Adedeji</span>
                <BsFillCaretDownFill />
              {/* <ul className="navbar__dropdown__menu">
                <li><Link className="navbar__dropdown__item" to="#">Profile</Link></li>
                <li><Link className="navbar__dropdown__item" to="/">Sign Out</Link></li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index