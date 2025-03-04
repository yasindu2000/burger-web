import React from "react";
import MenuCard from "../layouts/MenuCard";

function Menu() {
  const menuData = [
    {
      id: 1,
      title: "Tongo Burger",
      price: "$29",
    },
    {
      id: 2,
      title: "Punch Burger",
      price: "$25",
    },
    {
      id:3,
      title: "Crunch Burger",
      price: "$20"
    },
    {
      id:4,
      title: "Tango Burger",
      price: "$40"
    },
    {
        id:5,
      title: "Twist Burger",
      price: "$50"
    },
    {
        id:6,
        title: "Burst Burger",
        price: "$30"  
    }
  ];

  return (
    <div>
      <div>
        {/* heding */}
        <h1>Explore Menu</h1>

        {/* card section */}
        <div>
            {menuData.map((item)=>{
                return <MenuCard key={item.id} title={item.id} price={item.price}/>
            })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
