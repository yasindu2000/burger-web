import React from 'react'
import { Link } from 'react-scroll'
import DarkMode from '../layouts/DarkMode'

function Navbar() {
  return (
    

    <header className='fixed w-full  z-10 bg-tertiary shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-4 dark:bg-slate-900 dark:text-white'>
        <div className='container flex flex-row justify-between items-center'>
            <div>
                <Link to='/' spy={true} smooth={true} duration={500}><h1 className='font-semibold text-2xl cursor-pointer text-secondary'>BurgerBurst</h1></Link>
            </div>
       
        <nav className='hidden lg:flex gap-10 text-secondary font-semibold text-lg '>
            <Link to='menu' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-primary transition duration-300 ease-in-out'>Menu</Link>
            <Link to='deals' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-primary transition duration-300 ease-in-out'>Hot Deals</Link>
            <Link to='special' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-primary transition duration-300 ease-in-out'>Special</Link>
            <Link to='review' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-primary transition duration-300 ease-in-out'>Review</Link>
        </nav>

        <div className='flex  items-center  gap-3'>
            <div>
                <DarkMode/>
            </div>
            <button className='bg-secondary py-2 px-4 text-white font-semibold rounded-full hover:scale-105 transition duration-300 ease-in'>Order Now</button>
        </div>
        </div>
    </header>
  )
}

export default Navbar