import React from 'react'
import { ava, balan, f, first, g, s, sec } from '../assets'
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";


export const Account = () => {
  return (
    <div className='w-[100%] h-[95vh] bg-[#191B43] rounded-xl overflow-y-auto scrollbar'>
            <div className='ornament w-[100%] h-[300px] flex flex-col items-center justify-start gap-4'>
                <h1 className='text-[36px] font-bold text-[#fff] text-center pt-5   '>Portfolio</h1>
                <img src={ava} alt="" />
                <h1 className='text-[22px] font-bold text-[#fff] text-center pt-0'>Musfiqur Rahman</h1>
            <div className='flex items-center justify-between pt-2 gap-3'>
                <div className='flex flex-col items-center'>
                    <button className='w-[68px] h-[52px] border border-[#6854E6] rounded-[16px] text-white'>120</button>
                    <h1 className='text-white'>Asset</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <button className='w-[68px] h-[52px] border border-[#6854E6] rounded-[16px] text-white'>10k</button>
                    <h1 className='text-white'>Followers</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <button className='w-[68px] h-[52px] border border-[#6854E6] rounded-[16px] text-white'>70k</button>
                    <h1 className='text-white'>Likes</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <button className='w-[68px] h-[52px] border border-[#6854E6] rounded-[16px] text-white'>60</button>
                    <h1 className='text-white'>Bidding</h1>
                </div>
            </div>
            </div>
        <div className='w-[90%] m-auto pt-5 3xl:pt-[70px]'>

                <h1 className='text-white text-[20px] font-bold'>Your Balance</h1>
            <div className='w-[100%] h-[64px] rounded-[16px] border border-[#495099] mt-2'>
                <div className='flex items-center justify-between min-h-[60px] px-4'>
                    <h1 className='text-white flex items-center'><img src={balan} alt="balance" />  4,668 ETH</h1>
                <h1 className='flex items-center gap-1 text-white'>Add <FaChevronRight /></h1>
                </div>
            </div>

            <div className='flex items-center justify-between pt-4'>
                <h1 className='text-white font-semibold text-[20px]'>Revenue</h1>
                <h1 className='text-white flex items-center'>This month  <FaChevronDown /></h1>
            </div>
            <div className='pt-3'>
                <img className='w-[100%]' src={g} alt="" />
            </div> 

            <div className='flex items-center justify-between pt-4'>
                <h1 className='text-white font-semibold text-[20px]'>Recent Activity</h1>
                <h1 className='text-white flex items-center'>See All <FaChevronRight /></h1>
            </div>

            <div className='flex flex-col gap-3 pt-2'>
                <div className='w-[100%] h-[88px] bg-[#21275F] rounded-xl px-3 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <img src={f} alt="" />
                        <div className='fkex flex-col gap-2'>
                            <h1 className='text-[#fff] font-semibold'>Crystal Art</h1>
                            <h2 className='text'>by @rudepixxel</h2>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-[#4487AC]'>New Bid</h2>
                        <h1 className='text-white'>6.50 ETH</h1>
                        <p className='text-[#93C5FD] pt-1'>3m ago</p>
                    </div>
                </div>
                <div className='w-[100%] h-[88px] bg-[#21275F] rounded-xl px-3 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <img src={s} alt="" />
                        <div className='fkex flex-col gap-2'>
                            <h1 className='text-[#fff] font-semibold'>Creative Art</h1>
                            <h2 className='text'>by @rudepixxel</h2>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-[#4487AC]'>New Bid</h2>
                        <h1 className='text-white'>6.50 ETH</h1>
                        <p className='text-[#93C5FD] pt-1'>3m ago</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
