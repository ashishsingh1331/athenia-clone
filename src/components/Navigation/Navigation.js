import React from "react";
import Hamburger from "../Header/Hamburger";
import { useState, useCallback, useEffect } from "react";
import { PhoneIcon } from '@heroicons/react/solid'
import { XIcon } from '@heroicons/react/outline'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (e) => {
    e.preventDefault();
    setIsOpen((isOpen) => !isOpen);
  };

  const closeDrawer = (e) => {
    setIsOpen(false);
  }

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <nav className=" flex items-center">
      <a href="#" onClick={toggleDrawer} className="space-y-1 mr-4">
        <div className=" w-7 h-[4px] bg-white"></div>
        <div className="w-7 h-[4px] bg-white"></div>
        <div className="w-7 h-[4px] bg-white"></div>
      </a>
      <ul
        className={` absolute right-0 top-0 h-screen w-screen md:w-[50%] flex flex-col items-center justify-center translate-x-[100%]  transition-all bg-light-pink duration-700 menu ${
          isOpen ? " translate-x-0 " : ""
        } `}
      >
        <li className=" absolute top-[10px] right-[10px] hover:bg-pink-200 hover:cursor-pointer ">
            <a onClick={closeDrawer}><XIcon className="w-6 h-6"/></a>
        </li>  
        <li className="mb-3  w-full text-center">
          <a className=" uppercase text-sm md:text-xl lg:text-3xl  text-dark-gray tracking-widest hover:underline " href="#">Bridals</a>
        </li>
        <li className="mb-3 w-full text-center">
          <a className=" uppercase text-sm md:text-xl lg:text-3xl  text-dark-gray tracking-widest hover:underline" href="#">Nail Extension</a>
        </li>
        <li className="mb-3 w-full text-center">
          <a className=" uppercase text-sm md:text-xl lg:text-3xl  text-dark-gray tracking-widest hover:underline" href="#">Hair Styles</a>
        </li>
        <li className="mb-3 w-full text-center">
          <a className=" uppercase text-sm md:text-xl lg:text-3xl  text-dark-gray tracking-widest hover:underline" href="#">Skin Services</a>
        </li>
        <li className="mb-3 w-full text-center">
          <a className=" uppercase text-sm md:text-xl lg:text-3xl  text-dark-gray tracking-widest hover:underline" href="#">Eyelash extension</a>
        </li>
        <li className="mb-3 w-full text-center">
        <a className="flex items-center justify-center text-sm md:text-xl lg:text-3xl" href="tel:+9716666666"><PhoneIcon className=" h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"/><p>+91 9717777776</p></a>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navigation;
