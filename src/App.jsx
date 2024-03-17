import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar'
import { Main } from './components/main'
import { Account } from './components/account'

function App() {

  return (
    <>
      <div className='bg-[#0B0D21] w-[100%] 4xl:h-[100vh] base:h-[100%] base:pb-4 xl:pb-0 flex base:pt-3 2xl:pt-9'>
        <div className='w-[5%] 3xl:pl-8 base:pl-0 2xl:flex base:hidden'>
          <Sidebar />
        </div>
        <div className='3xl:w-[75%] base:w-[100%] 2xl:w-[95%] 3xl:pl-7'>
          <Main />
        </div>

        <div className='3xl:w-[20%] base:w-0 3xl:flex base:hidden'>
            <Account />
        </div>
      </div>
    </>
  )
}

export default App
