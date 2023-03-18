import React, { useState } from 'react'
import {RiFilter3Line} from 'react-icons/ri'
import {RiMore2Fill} from 'react-icons/ri'
import {AiOutlineEye} from 'react-icons/ai'
import {BiUserCheck} from 'react-icons/bi'
import {BiUserX} from 'react-icons/bi'

import {Link} from 'react-router-dom'
import moment from 'moment'
 

interface Props{
  users: {
    id: string; 
    orgName: string;
    profile: object;
    userName: string;
    email: string;
    phoneNumber: string;
    createdAt: string;
  }[],
}


const Index: React.FC<Props> = ({users}) => {
  // console.log(users);
const [isOpen, setIsOpen] = useState(''); 


  return (
    <>
     
     <div className="userTable w-100 table-reponsive">
      <table className="userTable__table table">
       <thead>
        <tr className='text-uppercase userTable__table__heads'>
         <th>organization <RiFilter3Line /></th>
         <th>username <RiFilter3Line /></th>
         <th>email <RiFilter3Line /></th>
         <th>phone number <RiFilter3Line /></th>
         <th>date joined <RiFilter3Line /></th>
         <th>status <RiFilter3Line /></th>
         <th></th>
        </tr>
       </thead>
       <tbody>
        {
          users.map((user)=>{
            // console.log(user.id);
            
            return <tr key={user.id}>
                    <td>{user.orgName}</td>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{moment(user.createdAt).format('LTS') } </td>
                    <td ><span className='bg__inactive'>inactive</span></td>
                    <td className='dropdown'>
                      <div className='dropdown__cover' >
                      <RiMore2Fill key={user.id} onClick={() => setIsOpen(isOpen === user.id? '' : user.id)} /> 
                      {isOpen === user.id && (
                      <ul  className="dropdown__menu">
                          <li><Link className="dropdown__item fs-11" to={`/user/${user.id}`}><AiOutlineEye />View Details</Link></li>
                          <li><Link className="dropdown__item fs-11" to="#"><BiUserX />Blacklist User</Link></li>
                          <li><Link className="dropdown__item fs-11" to="#"><BiUserCheck />Activate User</Link></li>
                        </ul>
                      )}
                       </div>
                    </td>
                    <hr className='hr' />
                  </tr>
                 
          })
        }
        
       </tbody>
      </table>
     </div>
    </>
  )
}

export default Index