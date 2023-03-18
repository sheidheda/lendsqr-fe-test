import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import MainContainer from '../../component/mainContainer/Index'
import UserSummarryDetail from '../../component/userSummaryDetails/Index'
import PersonalInfo from '../../component/personalInfo/Index'
import ProfessionalInfo from '../../component/professionalInfo/Index'
import SocialInfo from '../../component/socialInfo/Index'
import GuarantorInfo from '../../component/guarantorInfo/Index'
import {CgArrowLongLeft} from 'react-icons/cg'

interface types {
    id: '',
    accountBalance:'',
    accountNumber:'',
    education:{},
    guarantor:{},
    orgName: '',
    profile: {
      
    },
    userName: '',
    email: '',
    phoneNumber: '',
    createdAt: '',
    socials:{},

}



const Index: React.FC = () => {

  const {id} = useParams();

  const [user, setUser] = useState<types>({
    id: '',
    accountBalance:'',
    accountNumber:'',
    education:{},
    guarantor:{},
    orgName: '',
    profile: {},
    userName: '',
    email: '',
    phoneNumber: '',
    createdAt: '',
    socials:{},

})
  
  useEffect(()=>{
    const fetchUser = async()=>{
      const response = await axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);

      setUser(response.data);
      window.localStorage.setItem('LENDSQR_DATA', JSON.stringify(user));
    }

    fetchUser();
  }, [id])

 
  const {...profile} = user.profile
  console.log(user.education);
  
  return (
    <>
      <MainContainer>
        <Link to='/users' className='redir__links d-flex page__title align-items-center  mb-20'><CgArrowLongLeft className='me-1' /> <span> Back to Users</span></Link>
        <div className="d-flex w-100 justify-content-between mt-3 mb-5">
          <h3 className='page__title'>user details</h3>
          <div className="d-flex align-items-center">
            <button className='btn btn-sm btn-outline-danger me-3 text-uppercase'>blacklist user</button>
            <button className='btn btn-sm btn-outline-info text-uppercase'>activate user</button>
          </div>
        </div>
        <UserSummarryDetail data={user.profile} account={user.accountNumber} />
        <div className="detailed__card w-100 mt-4 p-4 ">
          <PersonalInfo data={profile} email={user.email} />
          <ProfessionalInfo edu={user.education} />
          <SocialInfo data={user.socials} />
          <GuarantorInfo data={user.guarantor} /> 
        </div>
      </MainContainer>
    </>
  )
}

export default Index