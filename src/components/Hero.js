import React from "react";
import img from "../assets/images/hero (1).png"

function Hero() {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
        <div className=" min-h-screen container flex flex-col justify-center md:flex-row md:justify-center items-center">
            {/* content section */}
            <div className="w-full md:w-2/4 space-y-8 text-center md:text-start mt-24 md:mt-10">
                <div>
                   <h3 className="font-bold text-4xl md:text-5xl">Dive into our</h3>
                   <h1 className="font-bold text-5xl md:text-7xl mt-2 ">Cheesy <span className="text-primary">Bluster!</span></h1>
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. 
                Vivamus at felis eget velit fermentum sollicitudin. Aenean at urna non elit efficitur tempus. 
                In hac habitasse platea dictumst. Donec sed nulla ut ex vulputate dictum. Phasellus euismod, 
                turpis eu tincidunt aliquet, nunc libero posuere metus, non convallis ligula nunc eget lacus. 
                Integer efficitur, orci in laoreet scelerisque, risus augue tristique felis, at venenatis lacus 
                purus sed lorem.
                </p>
                <button className="bg-primary py-2 px-4 text-white font-semibold rounded-md hover:scale-105 transition duration-300 ease-in-out">Order Now</button>
            </div>
            {/* img section */}
            <div>
                <img src={img} alt="img"/>
            </div>
        </div>
    </div>
  );
}

export default Hero;
