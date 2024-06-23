import React from 'react'
import download from '../assets/download.svg'

function Labresult({lab_results}) {
  return (
    <div className='bg-white mt-5 rounded-2xl'>
      <div className='text-3xl font-bold px-5 py-2'>Lab Results</div>
      <div className='max-h-[13vh] overflow-y-auto pb-3'>
        {lab_results.map((result,index)=>{
          return (<div className='flex justify-between px-5 h-10'>
            <p>{result}</p>
            <img className='h-1/2' src={download}></img>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Labresult