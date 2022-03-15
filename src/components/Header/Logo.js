import React from "react";
import logo from "./../../images/logo.png";
import { Link } from "react-router-dom";

function Logo(props) {
  return (
    <Link className="pl-4 pr-4 md:pl-8 md:pr-8 h-14 flex flex-col justify-center" to="/"><img className="w-36 h-8 " src={logo} alt="logo" /></Link>
  );
}

export default Logo;
