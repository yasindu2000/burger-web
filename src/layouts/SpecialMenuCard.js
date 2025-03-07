import React from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

function SpecialMenuCard({img, title, price}) {
  return (
    <div className='w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg bg-tertiary cursor-pointer'>
        <img className='rounded-lg' src={img} alt='img'/>
        <div className='py-5 space-y-4'>
            <h3 className='text-2xl font-semibold text-center text-primary'>{title}</h3>
            <div className='flex flex-row justify-center text-secondary'>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarHalf/>
            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
                <h3 className='text-2xl font-semibold text-secondary'>{price}</h3>
                <button className='px-4 py-2 font-semibold text-white transition duration-300 ease-in-out rounded-md bg-primary hover:scale-105'>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default SpecialMenuCard