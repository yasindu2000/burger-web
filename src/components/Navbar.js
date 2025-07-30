import React from 'react'
import { Link } from 'react-scroll'
import DarkMode from '../layouts/DarkMode'
  // yasindu dahanayake

function Navbar() {
  return (
    

    <header className='fixed w-full  z-10 bg-tertiary shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-4 dark:bg-slate-900 dark:text-white'>
        <div className='container flex flex-row items-center justify-between'>
            <div>
                <Link to='/' spy={true} smooth={true} duration={500}><h1 className='text-2xl font-semibold cursor-pointer text-secondary'>BurgerBurst</h1></Link>
            </div>
     
        <nav className='hidden gap-10 text-lg font-semibold lg:flex text-secondary '>
            <Link to='menu' spy={true} smooth={true} duration={500} className='transition duration-300 ease-in-out cursor-pointer hover:text-primary'>Menu</Link>
            <Link to='deals' spy={true} smooth={true} duration={500} className='transition duration-300 ease-in-out cursor-pointer hover:text-primary'>Hot Deals</Link>
            <Link to='special' spy={true} smooth={true} duration={500} className='transition duration-300 ease-in-out cursor-pointer hover:text-primary'>Special</Link>
            <Link to='review' spy={true} smooth={true} duration={500} className='transition duration-300 ease-in-out cursor-pointer hover:text-primary'>Review</Link>
        </nav>

        <div className='flex items-center gap-3'>
            <div>
                <DarkMode/>
            </div>
            <button className='px-4 py-2 font-semibold text-white transition duration-300 ease-in rounded-lg bg-secondary hover:scale-105'>Order Now</button>
        </div>
        </div>
    </header>
  )
}

export default Navbar