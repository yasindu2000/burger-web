import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="pt-8 bg-tertiary text-secondary rounded-t-3xl md:pt-0">
      <div className="flex flex-col justify-between p-8 px-5 md:flex-row md:px-32">
        <div className="w-full md:w-1/4">
          <h1 className="pb-4 text-2xl font-semibold ">BurgerBurst.</h1>
          <div className="flex gap-5 ">
            <FaInstagram size={35} />
            <FaFacebook size={35} />
            <FaLinkedin size={35} />
          </div>
          <p className="mt-2 ">
            Indulge in a symphony of flavors, where each plate is a canvas for
            culinary excellence.
          </p>
        </div>
        <div>
          <h1 className="pt-5 pb-4 text-xl font-semibold md:pt-0">
            Important Links
          </h1>
          <div className="flex flex-col gap-2 font-medium ">
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="transition duration-300 ease-in-out cursor-pointer hover:text-primary"
            >
              Menu
            </Link>
            <Link
              to="deals"
              spy={true}
              smooth={true}
              duration={500}
              className="transition duration-300 ease-in-out cursor-pointer hover:text-primary"
            >
              Hot Deals
            </Link>
            <Link
              to="special"
              spy={true}
              smooth={true}
              duration={500}
              className="transition duration-300 ease-in-out cursor-pointer hover:text-primary"
            >
              Special Menu
            </Link>
          </div>
        </div>

        <div>
          <h1 className="pt-5 pb-4 text-xl font-semibold md:pt-0">
            Contact Us
          </h1>
          <nav className="flex flex-col gap-2 font-medium ">
            <Link to="/" spy={true} smooth={true} duration={500}>
              BurgerBurst@gmail.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +94 345 567 460
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className="py-4 text-center ">
          @copyright 
          
          | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;