import React from 'react'

interface Props {
  data: {
    firstName?: string,
    lastName?: string,
    gender?: string,
    phoneNumber?: string,
    bvn?: string,
  },

  email: string,
}

const Index: React.FC<Props> = ({ data, email }) => {
  return (
    <>
      <div className="row align-item-end  text-capitalize border-bottom py-3">
        <h4 className='color__primary1 mb-4'>personal information</h4>
        <div className='pers-flex'>
          <div className="col-md-2 mr-100" >
            <h6 className='info-title'>full name</h6>
            <h6 className='color__primary'>{data.firstName}{data.lastName}</h6>
          </div>
          <div className="col-md-2 mr-100">
            <h6 className='info-title'>phone number</h6>
            <h6 className='color__primary'>{data.phoneNumber}</h6>
          </div>
          <div className="col-md-3 mr-100">
            <h6 className='info-title'>email address</h6>
            <h6 className='color__primary fs-11'>{email}</h6>
          </div>
          <div className="col-md-2 mr-100">
            <h6 className='info-title'>bvn</h6>
            <h6 className='color__primary'>{data.bvn}</h6>
          </div>
          <div className="col-md-2 mr-100">
            <h6 className='info-title'>gender</h6>
            <h6 className='color__primary'>{data.gender}</h6>
          </div>
          <div className="col-md-2 mr-100">
            <h6 className='info-title'>marital status</h6>
            <h6 className='color__primary'>single</h6>
          </div>
          <div className="col-md-2 mr-100">
            <h6 className='info-title'>children</h6>
            <h6 className='color__primary'>none</h6>
          </div>
          <div className="col-md-2 mr-100">
            <h6 className='info-title'>type of residence</h6>
            <h6 className='color__primary'>parent's house</h6>
          </div>
         
        </div>
        <hr className='hr' />
      </div>
    </>
  )
}

export default Index