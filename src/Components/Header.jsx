import React from 'react'
import logo from '../assets/logo.png'
import calender from '../assets/calender.png'
import card from '../assets/card.png'
import chat from '../assets/chat.png'
import doctor from '../assets/doctor.png'
import group from '../assets/group.png'
import home from '../assets/home.png'
import menuicon from '../assets/menuicon.png'
import settingicon from '../assets/settingicon.png'
function Header() {
  return (
    <div className='flex justify-between bg-white rounded-full h-[8vh] items-center px-10 ' >
        <div><img src={logo}/></div>
        <div className='flex gap-8'>
            <div className='flex gap-2 items-center  px-4 py-3 cursor-pointer'>
                <img src={home}/>
                <p>Overview</p>
            </div>
            <div className='flex gap-2 items-center bg-[#01F0D0] px-5 py-3 rounded-full  cursor-pointer'>
                <img src={group}/>
                <p>Patients</p>
            </div>
            <div className='flex gap-2 items-center  px-4 py-3 cursor-pointer'>
                <img src={calender}/>
                <p>Schedule</p>
            </div>
            <div className='flex gap-2 items-center  px-4 py-3 cursor-pointer'>
                <img src={chat}/>
                <p>Message</p>
            </div>
            <div className='flex gap-2 items-center  px-4 py-3 cursor-pointer'>
                <img src={card}/>
                <p>Transaction</p>
            </div>
        </div>
        <div className='flex gap-4 h-full py-4 items-center'>
            <img src={doctor}/>
            <div>
               <p>Dr Jose Simmons</p> 
               <p>General Practitioner</p>
            </div>
            <div className='linevertical h-full border-[1px]'></div>
            <img className='h-1/2' src={settingicon}/>
            <img className='h-1/2' src={menuicon}/>
        </div>
    </div>
  )
}

export default Header