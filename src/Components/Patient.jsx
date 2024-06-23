import React from 'react'
import FemaleIcon from '../assets/FemaleIcon.svg'
import InsuranceIcon from '../assets/InsuranceIcon.svg'
import PhoneIcon from '../assets/PhoneIcon.svg'
import BirthIcon from '../assets/BirthIcon.svg'


function Patient({ patient }) {
  return (
    <div className='bg-white rounded-2xl h-[75%] flex flex-col p-8 gap-3'>
      <div className='flex justify-center'>
        <img src={patient.profile_picture
        }></img>
      </div>
      <div className='text-3xl font-bold text-center'>
        {patient.name}
      </div>
      <div className=' flex gap-4'>
        <img src={BirthIcon}></img>
        <div>
          <p>Date Of Birth</p>
          <p className='font-bold'>{patient.date_of_birth}</p>
        </div>
      </div>
      <div className=' flex gap-4'>
        <img  src={FemaleIcon}></img>
        <div>
          <p>Gender</p>
          <p className='font-bold'>{patient.gender}</p>
        </div>
      </div>
      <div className=' flex gap-4'>
        <img src={PhoneIcon}></img>
        <div>
          <p>Contact Info</p>
          <p className='font-bold'>{patient.phone_number}</p>
        </div>
      </div>
      <div className=' flex gap-4'>
        <img src={PhoneIcon}></img>
        <div>
          <p>Emergency Contact</p>
          <p className='font-bold'>{patient.emergency_contact
          }</p>
        </div>
      </div>
      <div className=' flex gap-4'>
        <img src={InsuranceIcon}></img>
        <div>
          <p>Insurance Provider</p>
          <p className='font-bold'>{patient.insurance_type
          }</p>
        </div>
      </div>
      <button className='rounded-full bg-[#01F0D0] text-black w-2/3 text-center mx-auto h-10 mt-3'>Show All Information</button>
    </div>
  )
}

export default Patient