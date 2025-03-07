import React from 'react'
import img1 from '../assets/images/menu2.jpg'
import img2 from '../assets/images/menu3.jpg'
import img3 from '../assets/images/menu4.jpg'
import SpecialMenuCard from '../layouts/SpecialMenuCard'

function SpecialMenu() {
  return (
    <div className='dark:bg-gray-900 dark:text-secondary'>
        <div className='flex flex-col items-center justify-center min-h-screen px-5 pt-16 md:px-32 md:pt-0'>
            {/* heading */}
            <h1 className='my-8 text-4xl font-semibold text-center text-secondary'>Special Menu</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5'>
                <SpecialMenuCard img={img1} title="Delight Burger" price="$10.00"/>
                <SpecialMenuCard img={img2} title="Jamboree Burger" price="$12.00"/>
                <SpecialMenuCard img={img3} title="Serenade Burger" price="$10.00"/>
            </div>
        </div>
    </div>
  )
}

export default SpecialMenu