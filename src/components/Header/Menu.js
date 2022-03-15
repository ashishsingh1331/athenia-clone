import React from 'react';
import { useState } from 'react';
import { Transition } from 'react-transition-group';


function Menu(props) {
    const duration = 150;
    const transitionStyles = {
        entering: { width: '50%', transition: 'ease 0.5s' },
        entered: { width: '100%', transition: 'ease 0.5s' },
        exiting: { width: '50%', transition: 'ease 0.5s' },
        exited: { width: '0', transition: 'ease 0.5s' },
    };
    const defaultStyle = {

    }
    // const defaultNavClasses = ['absolute', 'absolute', 'w-screen', 'translate-x-full', 'hidden', 'bg-pink-500', 'h-screen', 'top-10', 'left-0'];
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = (e) => {
        e.preventDefault();
        setIsOpen(isOpen => !isOpen);
    }

    return (
        <>
           

           
            <Transition in={isOpen} timeout={duration}>
                {(state) => {

                    return <nav style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }} className={`absolute text-white text-lg  items-center right-0 ease-in-out bg-light-pink h-screen top-14 z-10`}>
                        <button onClick={() => setIsOpen(false)} type="button" class={ `rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 absolute right-2 mt-2 ${isOpen} ? block : hidden`}>
                            <span class="sr-only">Close menu</span>

                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <ul className='mt-9 -mr-40 text-gray-900 text-2xl uppercase flex flex-col justify-center items-center'>
                            <li><a href="">About us.</a></li>
                            <li><a href="">Bridal Makeup</a></li>
                            <li><a href="">Nail Extensions</a></li>
                            <li><a href="">Hair Services</a></li>
                            <li><a href="">Skin Services</a></li>
                        </ul>
                    </nav>
                }}



            </Transition>

        </>
    );
}

export default Menu;