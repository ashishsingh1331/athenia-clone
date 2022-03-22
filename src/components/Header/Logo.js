import React from "react";
import logo from "./../../images/logo.png";
import { Link } from "react-router-dom";

function Logo(props) {
  return (
    <Link className="pl-4 pr-4 md:pl-8 md:pr-8 h-14 flex flex-col justify-center" to="/"><span className=" text-6xl font-Baby text-white ">Bridal</span></Link>
  );
}

export default Logo;
