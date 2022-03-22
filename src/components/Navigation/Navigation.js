import React from "react";
import Hamburger from "../Header/Hamburger";
import { useState, useCallback, useEffect } from "react";
import { PhoneIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/outline";
import { Link, useLocation, useResolvedPath,useMatch } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ textDecoration: match ? "underline" : "none",fontWeight: match ? "bold" : "normal" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

const Navigation = () => {
  
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (e) => {
    e.preventDefault();
    setIsOpen((isOpen) => !isOpen);
  };

  const closeDrawer = (e) => {
    setIsOpen(false);
  };

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);


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
        className={` absolute right-0 top-0 h-screen w-screen md:w-[50%] flex flex-col items-center justify-center translate-x-[100%]  transition-all bg-light-pink duration-500 menu ${
          isOpen ? " translate-x-0 " : ""
        } `}
      >
        <li className="mb-6 ">
          <span className=" text-8xl font-Baby text-dark-gray ">Bridal</span>
        </li>
        <li className=" absolute top-[10px] right-[10px] hover:bg-pink-200 hover:cursor-pointer ">
          <a onClick={closeDrawer}>
            <XIcon className="w-6 h-6" />
          </a>
        </li>
        <li className="mb-3  w-full text-center">
          <CustomLink className="menu-link" to="/service/bridal">
            Bridals
          </CustomLink>
        </li>
        <li className="mb-3 w-full text-center">
          <CustomLink className="menu-link" to="/service/nailextension">
          
            Nail Extenstion
          </CustomLink>
        </li>
        <li className="mb-3 w-full text-center">
          <CustomLink className="menu-link" to="/service/hairstyle">
            
            Hair Style
          </CustomLink>
        </li>
        <li className="mb-3 w-full text-center">
          <CustomLink className="menu-link" to="/service/skinnservice">
           
            Skin Service
          </CustomLink>
        </li>
        <li className="mb-3 w-full text-center">
        <CustomLink className="menu-link" to="/service/eyelash">
           
           Eyelash 
         </CustomLink>
        </li>
        <li className="mb-3 w-full text-center">
          <a
            className="flex items-center justify-center text-lg md:text-xl lg:text-3xl"
            href="tel:+97112343234"
          >
            <PhoneIcon className=" h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
            <p>+91 123345332</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
