import React from 'react'
import img from '../assets/images/deals.jpg'

function Deals() {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className='container flex flex-col justify-center min-h-screen pt-16 md:pt-0'>
        {/* heading */}
        <h1 className='mt-5 text-4xl font-semibold text-center text-secondary'>Hot Deals</h1>
        <div className='flex flex-col gap-10 mt-8 md:flex-row'>
          <div className='w-full md:w-2/4'>
            <img src={img} alt='img'/>
          </div>
          {/* content section */}
          <div className='w-full space-y-4 text-center md:w-2/4 md:text-start'>
            <h1 className='text-4xl font-bold md:text-5xl text-primary'>Exclusive Special Combo!</h1>
            <h3 className='text-3xl font-semibold text-secondary md:text-4xl'>Elevate Your Meal with Our Special Bundle</h3>
            <p className='text-sm text-gray-400 md:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <button className='px-4 py-2 font-semibold text-white transition duration-300 ease-out rounded-md bg-primary hover:scale-105'>Visit Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deals