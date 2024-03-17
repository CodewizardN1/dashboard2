import React from 'react'

const Card = ({img, p,text}) => {
  return (
    <div className='min-w-[161px] h-[60px] flex items-center gap-3'>
        <img src={img} alt="img" />
            <div className='flex flex-col gap-2'>
            <h1 className='text-white size-[16px] font-bold'>@{text}⭐</h1>
            <p className='text-[14px] font-bold text-[#5EEAD4]'>${p}</p>
        </div>
    </div>
  )
}

export default Card
