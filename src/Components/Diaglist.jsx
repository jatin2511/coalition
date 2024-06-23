import React from 'react'

function Diaglist({diagnostic_list}) {
  return (
    <div className='bg-white rounded-xl mt-4 px-4'>
      <div className='text-2xl font-bold py-4'>Diagonostic List</div>
      <div className='flex justify-between text-xl font-semibold pb-4'>
        <p>Problem/Diagnosis</p>
        <p>Description</p>
        <p>Status</p>
      </div>
      <div className='overflow-y-auto max-h-[11vh]'>{
        diagnostic_list.map((diagnostic)=>{
         return (<div className='flex justify-between h-12 px-4'>
           <p>{diagnostic.name}</p>
        <p>{diagnostic.description}</p>
        <p>{diagnostic.status}</p>
         </div>)
        })}</div>
      
    </div>
  )
}

export default Diaglist