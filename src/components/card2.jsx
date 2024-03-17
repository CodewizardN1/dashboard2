import React from 'react'

export const Card2 = ({time,num, img,name}) => {
  return (
    <div className='min-w-[188px] h-[270px] pt-2'>
        <div className='flex items-center justify-between'>
            <h1 className='text-white w-[100px] h-[23px] pl-2 rounded-lg bg-[#161A42]'>{time}</h1>
            <h1 className='text-white cursor-pointer'>{num}❤️</h1>
        </div>
        <div>
            <img src={img} alt="" />
        </div>
        <div className='flex flex-col'>
            <div>
            <h1 className='text-white'>{name}</h1>
            <p className='p'>0.450 ETH</p>
            </div>
        </div>
    </div>
  )
}
