import React from 'react'
import img from '../assets/images/menu1.png'

function MenuCard({id, title, price}) {
  return (
    <div>
       <img src={img} alt='img'/>
       <h1>{title}</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
       <h3>{price}</h3>
    </div>
  )
}

export default MenuCard