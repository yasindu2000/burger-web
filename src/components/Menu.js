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
      id: 3,
      title: "Crunch Burger",
      price: "$20",
    },
    {
      id: 4,
      title: "Tango Burger",
      price: "$40",
    },
    {
      id: 5,
      title: "Twist Burger",
      price: "$50",
    },
    {
      id: 6,
      title: "Burst Burger",
      price: "$30",
    },
  ];

  return (
    <div className="bg-tertiary">
      <div className="min-h-screen container flex flex-col justify-center py-4">
        {/* heding */}
        <h1 className="font-semibold text-4xl text-center text-secondary ">Explore Menu</h1>

        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 pt-8">
          {menuData.map((item) => {
            return (
              <MenuCard key={item.id} title={item.title} price={item.price} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
