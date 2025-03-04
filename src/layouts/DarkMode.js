import React, { useEffect, useState } from 'react'
import darkPng from "../assets/images/moon.png"
import lightPng from "../assets/images/sun.png"

function DarkMode() {

const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
);

const element = document.documentElement;

useEffect(() => {
    
if(theme === "dark"){
    element.classList.add("dark");
    localStorage.setItem("theme", "dark");
}else{
    element.classList.remove("dark");
    localStorage.setItem("theme", "light");
}
    
}, [theme]);


const changeTheme = ()=>{
    setTheme((prevTheme)=> (prevTheme === "light" ? "dark" : "light"))
}





  return (
    <div>
        <img src={theme === "light" ? darkPng : lightPng } alt='img' onClick={changeTheme} className='w-6 cursor-pointer'></img>
    </div>
  )
}

export default DarkMode