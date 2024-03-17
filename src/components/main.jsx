import React from 'react'
import { Header } from './header'
import { IoChevronForwardOutline } from "react-icons/io5";
import { SlHourglass } from "react-icons/sl";
import Card from './card';
import { img1, img2, img3, img4, img5, img6, rec1, rec2, rec3, rec4, rec5, rec6 } from '../assets';
import { Card2 } from './card2';

export const Main = () => {
  return (
    <div className='w-[100%] '>
        <div className='w-[95%] m-auto'>
        <Header />

        <div className='flex items-center justify-between pt-3'>
            <h1 className='text-white xl:text-[32px] base:text-[13px] sm:text-[18px] font-bold'>Popular NFT's live Auction</h1>
            <h1 className='text-[#5EEAD4] flex items-center base:text-[11px]'>Show More <IoChevronForwardOutline /></h1>
        </div>

        <div className='pt-5 flex items-center lg:justify-between base:justify-center lg:flex-row base:flex-col base:gap-7 lg:gap-3 2xl:gap-0'>
            <div className='3xl:w-[650px] h-[305px] bgimg relative rounded-xl'>
                <div className='md:w-[307px] base:w-[230px] h-[129px] rounded-[12px] bgc flex absolute bottom-4 left-4' >
                    <div className='w-[90%] m-auto flex flex-col gap-3'>
                        <div className='flex items-center justify-between '>
                            <div>
                                <h1 className='xl:text-[18px] base:text-[15px] text-white font-bold flex items-center gap-1'><SlHourglass className='icon' /> 18h : 17m : 29s</h1>
                                <p className='text-[12px] font-semibold text-white'>Time remaining</p>
                            </div>
                            <div>
                                <h1 className='xl:text-[18px] base:text-[15px] text-white font-bold flex items-center gap-1'>17.53 ETH</h1>
                                <p className='text-[12px] font-semibold text-white'>Highest Bid</p>
                            </div>
                        </div>
                            <button className='lg:w-[259px] base:w-[100%] h-[36px] btn3 text-white'>Place a bid</button>
                    </div>
                   
                </div>
            </div>
            <div className='3xl:w-[650px] h-[305px] bgimg2 relative rounded-xl'>
                <div className='md:w-[307px] base:w-[230px] h-[129px] rounded-[12px] bgc flex absolute bottom-4 left-4' >
                    <div className='w-[90%] m-auto flex flex-col gap-3'>
                        <div className='flex items-center justify-between '>
                            <div>
                                <h1 className='xl:text-[18px] base:text-[15px] text-white font-bold flex items-center gap-1'><SlHourglass className='icon' /> 18h : 17m : 29s</h1>
                                <p className='text-[12px] font-semibold text-white'>Time remaining</p>
                            </div>
                            <div>
                                <h1 className='xl:text-[18px] base:text-[15px] text-white font-bold flex items-center gap-1'>17.53 ETH</h1>
                                <p className='text-[12px] font-semibold text-white'>Highest Bid</p>
                            </div>
                        </div>
                            <button className='lg:w-[259px] base:w-[100%] h-[36px] btn3 text-white'>Place a bid</button>
                    </div>
                   
                </div>
            </div>
        </div>


        {/* top sellers */}

        <div>
            <h1 className='text-[24px] text-[#6EE7B7] font-bold pt-7'>⭐ Top Sellers</h1>

            <div className='flex items-center justify-between overflow-y-auto gap-10 scrollbar pt-3'>
                <Card img={rec1} text={'dicar'} p={'232,102'} />
                <Card img={rec2} text={'astroo2'} p={'173,023'} />
                <Card img={rec3} text={'micle'} p={'92,102'} />
                <Card img={rec4} text={'11errorD.'} p={'232,102'} />
                <Card img={rec5} text={'astroo2'} p={'172,024'} />
                <Card img={rec6} text={'sopyu'} p={'198,292'} />
                <Card img={rec1} text={'dicar'} p={'232,102'} />
                <Card img={rec2} text={'astroo2'} p={'173,023'} />
                <Card img={rec3} text={'micle'} p={'92,102'} />
                <Card img={rec4} text={'11errorD.'} p={'232,102'} />
                <Card img={rec5} text={'astroo2'} p={'172,024'} />
                <Card img={rec6} text={'sopyu'} p={'198,292'} />
            </div>
            <div className='w-[100%]'></div>
        </div>


        {/* hot birds */}
        <div className='pt-3'>
            <h1 className='text-[#6EE7B7] text-[24px] font-bold'>🔥 Hot Bids</h1>

            <div className='flex items-center justify-between overflow-x-auto scrollbar base:gap-5 xl:gap-0'>
                <Card2 img={img1} time={'02:32:07'} num={'232'}  name={'Stretch Of Time'}/>
                <Card2 img={img2} time={'00:00:00'} num={'172'}  name={'Arcade Land'}/>
                <Card2 img={img3} time={'12:05:00'} num={'99'}  name={'Shinsekai Portal'}/>
                <Card2 img={img4} time={'00:00:00'} num={'43'}  name={'Paper Cut'}/>
                <Card2 img={img5} time={'02:32:07'} num={'43'}  name={'Cyber Brokers'}/>
                <Card2 img={img6} time={'02:32:07'} num={'232'}  name={'Akuma Origins'}/>
            </div>
        </div>
        </div>
    </div>
  )
}
