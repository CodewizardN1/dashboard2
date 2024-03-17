import React from 'react'
import { activity, buy, friends, home, logout, message, setting, sym, time, wallet } from '../assets'

const Sidebar = () => {
  return (
    <div className='w-[100px] bg-[#14173B] max-h-[90vh] rounded-md'>
      <div className='flex flex-col items-center justify-center pt-4 cursor-pointer'>
          <img src={sym} className='pt-2' alt="" />
          <img className='pt-2' src={home} alt="" />
          <div className='flex flex-col items-center justify-center gap-7 pt-[10px]'>
            <img src={message} alt="" />
            <img src={buy} alt="" />
            <img src={activity} alt="" />
            <img src={time} alt="" />
          </div>
      </div>

      <div className='w-[80%] h-[2px] bg-[#2E357B] mt-[50px] m-auto'></div>

      <div className='flex flex-col gap-7 items-center justify-center pt-10 cursor-pointer'>
        <img src={wallet} alt="" />
        <img src={friends} alt="" />
        <img src={setting} alt="" />
      </div>

      <div className='flex justify-center relative min-h-[260px] cursor-pointer' style={{alignItems: 'flex-end'}}>
        <img src={logout} className='absolute bottom-0' alt="" />
      </div>
    </div>
  )
}

export default Sidebar