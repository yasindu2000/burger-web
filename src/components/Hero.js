import React from "react";
import img from "../assets/images/hero (1).png"

function Hero() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-100">
    <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center">
      
      {/* Left Content */}
      <div className="text-center lg:text-start lg:w-1/2 space-y-6">
        <h3 className="text-lg text-orange-500 font-semibold">Dive into our</h3>
        <h1 className="text-5xl font-bold text-gray-900">
          Cheesy <span className="text-yellow-500">Bluster!</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
          Suspendisse potenti. Vivamus at felis eget velit fermentum sollicitudin.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
          Order Now
        </button>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 flex justify-center">
        <img src={img} alt="Cheesy Bluster" className="w-full max-w-lg drop-shadow-lg" />
      </div>

    </div>
  </div>
  );
}

export default Hero;
