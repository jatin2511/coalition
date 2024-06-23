import React from 'react'
import search from '../assets/search.png'
import horizontaldots from '../assets/horizontaldots.svg'
function Patientsearch({allPatients}) {
  return (
    <div className='w-1/4 bg-white rounded-2xl pt-6 px-2'>
        <div className='flex justify-between items-center pb-8 px-5'>
            <p className='text-2xl font-semibold'>Patients</p>
            <img className='h-1/2' src={search}/>
        </div>
        <div className='overflow-y-auto max-h-[74vh] '>
            {allPatients.map((patient,index)=>{
                return (<div key={index} className='flex w-full justify-between h-14 px-5 items-center'>
                   <div className='flex items-center justify-center gap-4'>
                    <img className='h-12' src={patient.profile_picture}></img>
                    <div>
                        <div>{patient.name}</div>
                        <div className='text-[#707070]'>{patient.gender} , {patient.age}</div>
                        </div>
                    </div>
                    <img className='h-1' src={horizontaldots}></img>
                </div>)
            })}
        </div>
    </div>
  )
}

export default Patientsearch