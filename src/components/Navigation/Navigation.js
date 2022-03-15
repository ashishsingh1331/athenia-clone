import React from "react";
import Hamburger from "../Header/Hamburger";
import { useState, useCallback, useEffect } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (e) => {
    e.preventDefault();
    setIsOpen((isOpen) => !isOpen);
  };

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
        className={` absolute right-0 top-0 h-screen w-screen md:w-[50%] flex flex-col items-center justify-center translate-x-[100%] opacity-0 transition-all bg-light-pink duration-700 menu ${
          isOpen ? " translate-x-0 opacity-100" : ""
        } `}
      >
        <li>
          <a href="#">Home</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
