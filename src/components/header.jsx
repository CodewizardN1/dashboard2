import React from 'react'
import { avatar, eth, not } from '../assets'
import { GoChevronDown } from "react-icons/go";
import { Account } from './account';
import { IoMdClose } from "react-icons/io";


export const Header = () => {
    return (
        <div className='w-[100%]'>
            <div className='flex items-center justify-between'>
                <div>
                    <label className="input 3xl:w-[449px] lg:w-[300px] sm:w-[300px] base:w-[200px] flex items-center gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input type="text" className="grow text-white" placeholder="Search by creator or collection" />
                    </label>
                    <h1 className='dash text-[17px] text-white font-bold hidden'>Dashboard</h1>
                </div>

                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-4 lg:flex base:hidden'>
                        <button className='btn 2xl:w-[120px] md:w-[115px] h-[56px] text-white'>
                            <img src={eth} alt="" />
                            3,25 ETH</button>
                        <button className='btn w-[56px] h-[56px]'><img src={not} alt="" /></button>
                        <button className='btn 2xl:w-[96px] md:w-[75px] h-[56px] text-[16px] font-medium text-white'>Create</button>
                        <button className='btn2 2xl:w-[174px] md:w-[130px] h-[56px] text-[16px] font-medium text-white rounded-[16px]'>Connect Wallet</button>

                    </div>

                    <div className='base:hidden 2xl:flex    h-[56px] w-[2px] bg-[#fff] mx-3'></div>
                    <div className='base:hidden 2xl:flex'>
                        <div className='flex items-center gap-2'>
                            <img src={avatar} alt="" />
                            <div className='text'>
                                <h1 className='text-white 3xl:text-[18px] base:text-[15px] font-semibold'>Musfiqur Rahman</h1>
                                <h1 className='text-[#93C5FD] text-[14px]'>ryzenpixel@gmail.com</h1>
                            </div>
                        </div>
                        <div className='lg:pl-4 cursor-pointer text md:flex base:hidden'>
                            <GoChevronDown size={'20px'} color='white' />
                        </div>

                    </div>

                    <div className='base:flex 3xl:hidden'>
                        <div className="drawer drawer-end relative z-[1000]">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <div className='flex items-center gap-2'>
                                    <label htmlFor="my-drawer-4" className="drawer-button bg-transparent">
                                        <img width={'50px'} src={avatar} alt="" />
                                    </label>
                                    <div className='sm:flex base:hidden'>
                                        <div className='text'>
                                            <h1 className='text-white 3xl:text-[18px] base:text-[15px] font-semibold'>Musfiqur Rahman</h1>
                                            <h1 className='text-[#93C5FD] text-[14px]'>ryzenpixel@gmail.com</h1>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-0 sm:w-80 base:w-[100%] min-h-full bg-[#191B43] text-base-content sm:pr-4 base:pr-0">
                                    {/* Sidebar content here */}
                                    <label htmlFor="my-drawer-4" className='drawer-button base:flex sm:hidden'><button  onClick={() => document.getElementById('my-drawer-4').click()} className='w-[40px] h-[40px] rounded-lg flex items-center justify-center border-[2px] border-blue-500  absolute top-2 left-2 text-red-700 text-[23px] font-bold'><IoMdClose className='text-red' /></button></label>
                                    <Account />
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
