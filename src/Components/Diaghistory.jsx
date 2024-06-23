import React from 'react'
import BloodPressureChart from './BloodPressureChart'
import HeartBPM from '../assets/HeartBPM.svg'
import respiratory from '../assets/respiratory.svg'
import temperature from '../assets/temperature.svg'
function Diaghistory({ diagnosis_history }) {
  return (
    <div className='bg-white h-[71%] w-full p-4 px-10 rounded-2xl'>
      <div className='text-2xl font-bold pb-3'>Diagnosis History</div>
      <div className='flex w-full bg-[#F4F0FE] rounded-2xl'>
        <div className='p-5 pb-0 h-max'>
          <div className='flex justify-between pb-3'>
            <div className='text-xl font-semibold'>Blood Pressure</div>
            <div className='text-sm'>Last 6 Months </div>
          </div>
          <div><BloodPressureChart diagnosis_history={diagnosis_history} /></div>
        </div>
        <div className='py-4 w-1/4'>

          <div className='flex  flex-col gap-3 pl-10'>
            <div className='flex items-center gap-4'> <span className='bg-[#E66FD2] rounded-full h-3 w-3'></span>
            <div className='text-xl'>Systolic</div></div>
          <div className='text-xl font-semibold'>{diagnosis_history[0].blood_pressure
            .systolic
            .value}</div>
          <div>{diagnosis_history[0].blood_pressure
            .systolic
            .levels}</div>
           <hr/>
          <div>

          <div className='flex items-center gap-4'> <span className='bg-[#8C6FE6] rounded-full h-3 w-3'></span>
            <div className='text-xl'>Diastolic</div></div>
            </div>
         
          <div className='text-xl font-semibold'>{diagnosis_history[0].blood_pressure
            .diastolic
            .value}</div>
          <div>{diagnosis_history[0].blood_pressure
            .diastolic
            .levels}</div>
        </div>
      </div>
</div>
      <div className='flex justify-between pt-4 gap-5 '>
        <div className='bg-[#E0F3FA] w-1/3 p-3 rounded-2xl'>
          <img className='h-20' src={respiratory}></img>
          <div>Respiratory Rate</div>
          <div className='text-3xl font-bold'>{diagnosis_history[0].respiratory_rate
            .value} bpm</div>
            <div>{diagnosis_history[0].respiratory_rate
            .levels}</div>
        </div>
        <div className='bg-[#FFE6E9] w-1/3 p-3 rounded-2xl'>
          <img className='h-20' src={temperature}></img>
         <div>Temperature</div>
         <div className='text-3xl font-bold'>{diagnosis_history[0].temperature
            .value} ℉ </div>
                <div>{diagnosis_history[0].temperature
            .levels}</div>
        </div>
    
        
        <div className='bg-[#FFE6F1] w-1/3 p-3 rounded-2xl'>
          <img className='h-20' src={HeartBPM}></img>
          <div>Heart Rate</div>
          <div className='text-3xl font-bold'>{diagnosis_history[0].blood_pressure
            .diastolic
            .value} bpm</div>
            <div>{diagnosis_history[0].blood_pressure
            .diastolic
            .levels} bpm</div>
        </div>
      </div>
    </div>
  )
}

export default Diaghistory