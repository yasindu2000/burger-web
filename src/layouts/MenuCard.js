import React from "react";
import img from '../assets/images/menu1.png';

const MenuCard = ({ id, title, price }) => {
  return (
    <div
      className="group relative space-y-2 p-4 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md cursor-pointer hover:bg-primary transition duration-300 ease-in-out"
      key={id}
    >
      <img
        className="absolute bottom-0 w-40 mr-2 transition duration-300 ease-in-out -right-6 sm:-right-14 group-hover:-translate-y-8"
        src={img}
        alt="img"
      />
      <h1 className="text-2xl font-semibold text-primary group-hover:text-black">
        {title}
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, laborum!
      </p>
      <h3 className="text-2xl font-semibold text-secondary">{price}</h3>
    </div>
  );
};

export default MenuCard;