import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

function Header(props) {
    return (
        <header className=" flex justify-between">
            <Logo/>
            <Menu/>
           
        </header>
    );
}

export default Header;