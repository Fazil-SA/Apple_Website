import React from 'react'
import { appleImg, searchImg, bagImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <header className='flex w-full'>
      <nav className='flex flex-1 w-full items-center justify-between my-5 screen-max-width'>
        <img src={appleImg} alt="apple" width={14} height={18}/>

        <div className='flex gap-10 max-sm:hidden'>
          {navLists.map((nav) => (
            <div key={nav} className='text-sm cursor-pointer text-gray hover:text-white transition-all'>
              {nav}
            </div>
          ))}
        </div>

        <div className='flex gap-7 items-baseline'>
          <img src={searchImg} alt="search" width={18} height={18}/>
          <img src={bagImg} alt="bag" width={18} height={18}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
