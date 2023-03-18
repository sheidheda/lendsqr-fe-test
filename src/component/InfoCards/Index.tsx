import React from 'react'
import {FaUserFriends} from 'react-icons/fa'
import {RiFileList3Line} from 'react-icons/ri'
import {FaCoins} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'

const Index: React.FC = () => {
  return (
    <>
     <div className="cards">
      <div className="cards__card card">
       <div className="cards__card__icon bg__pinky">
        <FaUserFriends />
       </div>
       <div className="cards__card__title">users</div>
       <div className="cards__card__data">2,453</div>

      </div>
      <div className="cards__card card">
       <div className="cards__card__icon bg__purple">
        <FaUsers />
       </div>
       <div className="cards__card__title">active users</div>
       <div className="cards__card__data">2,453</div>

      </div>
      <div className="cards__card card">
       <div className="cards__card__icon bg__warning">
        <RiFileList3Line />
       </div>
       <div className="cards__card__title">users with loans</div>
       <div className="cards__card__data">12,453</div>

      </div>
      <div className="cards__card card">
       <div className="cards__card__icon bg__danger">
        <FaCoins />
       </div>
       <div className="cards__card__title">users with savings</div>
       <div className="cards__card__data">102,453</div>

      </div>
     </div>
    </>
  )
}

export default Index