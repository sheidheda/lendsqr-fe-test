import React from 'react'

import { Link, useLocation } from "react-router-dom";


import {FaToolbox} from 'react-icons/fa'
import {FaHome} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaRegHandshake} from 'react-icons/fa'
import {FaHandHoldingUsd} from 'react-icons/fa'
import {FaUserCheck} from 'react-icons/fa'
import {FaUserTimes} from 'react-icons/fa'
import {FaFan} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {GiTakeMyMoney} from 'react-icons/gi'
import {GiPiggyBank} from 'react-icons/gi'
import {RiBankFill} from 'react-icons/ri'
import {RiDatabase2Fill} from 'react-icons/ri'
import {RiFilePaper2Fill} from 'react-icons/ri'
import {MdSendToMobile} from 'react-icons/md'
import {MdOutlineManageAccounts} from 'react-icons/md'
import {BiSlider} from 'react-icons/bi'
import {GoGraph} from 'react-icons/go'
import {GiNotebook} from 'react-icons/gi'
import {GiDividedSquare} from 'react-icons/gi'





const Index: React.FC = () => {
  const location = useLocation();

  
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__inner">
          <ul className="sidebar__nav">
          <Link to="#" className='sidebar__nav__link dropdown-toggle'>
            <li className="sidebar__nav__item">
              <FaToolbox className='me-2' /> 
             switch organiazation
            </li>
            </Link>
             <Link to="/dashboard" className='sidebar__nav__link'>
            <li className={location.pathname === '/dashboard' ? 'sidebar__nav__item active' : 'sidebar__nav__item'}>
              <FaHome className='me-2' />
             dashboard
            </li>
            </Link>
            <li className="sidebar__nav__title">
              <span  className='sidebar__nav__link'>customers</span>
            </li>
            <Link to="/users" className='sidebar__nav__link '>
            <li className={location.pathname === '/users' || location.pathname === '/user/id' ?'sidebar__nav__item active' : 'sidebar__nav__item'}>
              <HiUsers className='me-2' />
              users
            </li></Link>
            <li className={location.pathname === '/guarantors' ?'sidebar__nav__item active' : 'sidebar__nav__item'}>
              <FaUsers className='me-2' />
              <Link to="/guarantors" className='sidebar__nav__link'>guarantors</Link>
            </li>
            <li className="sidebar__nav__item">
              <GiTakeMyMoney className='me-2' />
              <Link to="#" className='sidebar__nav__link'>loan</Link>
            </li>
            <li className="sidebar__nav__item">
              <FaRegHandshake className='me-2' />
              <Link to="#" className='sidebar__nav__link'>decision model</Link>
            </li>
            <li className="sidebar__nav__item">
              <GiPiggyBank className='me-2' />
              <Link to="#" className='sidebar__nav__link'>savings</Link>
            </li>
            <li className="sidebar__nav__item">
              <FaHandHoldingUsd className='me-2' />
              <Link to="#" className='sidebar__nav__link'>loan request</Link>
            </li>
            <li className="sidebar__nav__item">
              <FaUserCheck className='me-2' />
              <Link to="#" className='sidebar__nav__link'>whitelist</Link>
            </li>
            <li className="sidebar__nav__item">
              <FaUserTimes className='me-2' />
              <Link to="#" className='sidebar__nav__link'>karma</Link>
            </li>
            <li className="sidebar__nav__title">
              <span  className='sidebar__nav__link'>business</span>
            </li>
            <li className="sidebar__nav__item">
              <FaToolbox className='me-2' />
              <Link to="#" className='sidebar__nav__link'>organiazation</Link>
            </li>
            <li className="sidebar__nav__item">
              <FaHandHoldingUsd className='me-2' />
              <Link to="#" className='sidebar__nav__link'>loan products</Link>
            </li>
            <li className="sidebar__nav__item">
              <RiBankFill className='me-2' />
              <Link to="#" className='sidebar__nav__link'>savings products</Link>
            </li>
            <li className="sidebar__nav__item">
              <RiDatabase2Fill className='me-2' />
              <Link to="#" className='sidebar__nav__link'>fee and charges</Link>
            </li>
            <li className="sidebar__nav__item">
              <MdSendToMobile className='me-2' />
              <Link to="#" className='sidebar__nav__link'>transactions</Link>
            </li>
            <li className="sidebar__nav__item">
              <FaFan className='me-2' />
              <Link to="#" className='sidebar__nav__link'>services</Link>
            </li>
            <li className="sidebar__nav__item">
              <MdOutlineManageAccounts className='me-2' />
              <Link to="#" className='sidebar__nav__link'>service account</Link>
            </li>
            <li className="sidebar__nav__item">
              <RiFilePaper2Fill className='me-2' />
              <Link to="#" className='sidebar__nav__link'>settlement</Link>
            </li>
            <li className="sidebar__nav__item">
              <GoGraph className='me-2' />
              <Link to="#" className='sidebar__nav__link'>report</Link>
            </li>
            <li className="sidebar__nav__title">
              <span className='sidebar__nav__link'>settings</span>
            </li>
            <li className="sidebar__nav__item">
              <BiSlider className='me-2' />
              <Link to="#" className='sidebar__nav__link'>prefrences</Link>
            </li>
            <li className="sidebar__nav__item">
              <GiDividedSquare className='me-2' />
              <Link to="#" className='sidebar__nav__link'>fees and pricing</Link>
            </li>
            <li className="sidebar__nav__item">
              <GiNotebook className='me-2' />
              <Link to="#" className='sidebar__nav__link'>audit logs</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Index