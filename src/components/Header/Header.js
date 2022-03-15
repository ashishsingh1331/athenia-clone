import React from 'react';
import Hamburger from './Hamburger';
import Logo from './Logo';
import Menu from './Menu';
import Navigation from '../Navigation/Navigation'

function Header(props) {
    return (
        <header className=" flex fixed w-full z-10 justify-between">
            <Logo/>
            {/* <a className=' mr-4  pr-[10px] pl-[10px] pt-1 pb-1 bg-dark-pink text-white' href="http://">Courses</a> */}
            <Navigation/>
        </header>
    );
}

export default Header;