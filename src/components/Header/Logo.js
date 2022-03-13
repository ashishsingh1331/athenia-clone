import React from "react";
import logo from "./../../images/logo.png";

function Logo(props) {
  return (
    <a className="pl-4 pr-4 md:pl-8 md:pr-8 h-14 flex flex-col justify-center bg-pink-400" href="http://">
      <img className="w-36 h-8 " src={logo} alt="logo" />
    </a>
  );
}

export default Logo;
