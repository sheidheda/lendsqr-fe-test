import React from 'react'
// import {TbCurrencyNaira} from 'react-icons/tb'
interface Props {
  data: {
    firstName?: string;
    lastName?: string;
    gender?: string;
    address?: string;
    phoneNumber?: string;
  }
}
const Index: React.FC<Props> = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className="row align-item-end  text-capitalize py-3">
        <h4 className='color__primary1 mb-4 pt-30'>guarantor</h4>
        <div className="pers-flex">
          <div className="col-md-3">
            <h6 className='info-title'>full name</h6>
            <h6 className='color__primary'>{data.firstName} {data.lastName}</h6>
          </div>
          <div className="col-md-3">
            <h6 className='info-title'>phone number</h6>
            <h6 className='color__primary'>{data.phoneNumber}</h6>
          </div>
          <div className="col-md-3">
            <h6 className='info-title'>gender</h6>
            <h6 className='color__primary'>{data.gender}</h6>
          </div>
          <div className="col-md-3">
            <h6 className='info-title'>address</h6>
            <h6 className='color__primary text-lowercase'>{data.address}</h6>
          </div>
          <div className="col-md-3">
            <h6 className='info-title'>relationship</h6>
            <h6 className='color__primary'>sister</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index