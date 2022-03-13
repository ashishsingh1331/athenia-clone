import React from 'react';
import { useState } from 'react';
import { Transition } from 'react-transition-group';


function Menu(props) {
    const duration = 150;
    const transitionStyles = {
        entering: {width:'50%',transition:'ease 0.5s'},
        entered: {width:'100%',transition:'ease 0.5s'},
        exiting: { width:'50%',transition:'ease 0.5s' },
        exited: { width:'0',transition:'ease 0.5s'},
    };
    const defaultStyle = {      
        opacity: '1' 
    }
    // const defaultNavClasses = ['absolute', 'absolute', 'w-screen', 'translate-x-full', 'hidden', 'bg-pink-500', 'h-screen', 'top-10', 'left-0'];
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = (e) => {
        e.preventDefault();
        setIsOpen(isOpen => !isOpen);
    }

    return (
        <>
            <div className='flex flex-row items-center'>
                <a className=' mr-4   pr-[10px] pl-[10px] pt-1 pb-1 bg-dark-pink text-white' href="http://">Courses</a>
                <a onClick={toggleDrawer} href="#" className='space-y-0.5 mr-4'>
                    <div className=" w-5 h-[3px] bg-gray-600"></div>
                    <div className="w-5 h-[3px] bg-gray-600"></div>
                    <div className="w-5 h-[3px] bg-gray-600"></div>
                </a>

            </div>

            {/* <nav className={`absolute w-screen bg-pink-500   translate-x-full duration-500 ease-in-out h-screen top-10 left-0 ${isOpen === true ? 'translate-x-0 block' : 'translate-x-full hidden'}`}> */}
            <Transition in={isOpen} timeout={duration}>
                {(state) => {

                    return <nav style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                      }} className={`absolute right-0 ease-in-out bg-pink-500 h-screen top-14`}>

                        <ul>
                            <li><a href="">Lorem.</a></li>
                            <li><a href="">Omnis?</a></li>
                            <li><a href="">Voluptatum?</a></li>
                            <li><a href="">Cumque.</a></li>
                            <li><a href="">Eveniet?</a></li>
                        </ul>
                    </nav>
                }}



            </Transition>

        </>
    );
}

export default Menu;