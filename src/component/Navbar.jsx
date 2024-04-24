import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

//image
import logo from '../assets/logo.png';

//icons
import { IoMdMenu, IoMdClose } from "react-icons/io";


const Navbar = () => {

    const navigate = useNavigate();

    //handle toggle for menu for small screen
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    // Function to handle link click
    const handleLinkClick = () => {
        if (isToggled) {
            setIsToggled(false);
        }
    };


    // Function to handle scrolling to the referenced element
    const scrollToElement = () => {
        const element = document.getElementById('elementId');

        // Scroll to the element if found
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    return (
        <div className='relative bg-white  z-[1000] w-full h-[70px] flex justify-between items-center px-[1rem]'>
            {/* logo */}
            <img
                onClick={
                    () => {
                        navigate('/');
                    }
                } src={logo} alt='logo'
                className='h-full aspect-auto p-[.5rem] cursor-pointer' />

            {/* links */}
            <div className={`sm:relative sm:top-0 sm:right-0 absolute top-[75px] right-[1rem] ${isToggled ? ('flex') : ('hidden sm:flex')} sm:flex-row flex-col-reverse justify-between items-center shadow-lg sm:shadow-none p-[2rem] sm:p-0 gap-[1rem] sm:gap-0 z-[999] bg-white`}>
                <div className='flex sm:flex-row flex-col justify-between items-center sm:gap-[2rem] gap-[.5rem]'>
                    <button
                        scrollto='feature'
                        onClick={()=>{
                            handleLinkClick();
                            scrollToElement();
                        }}
                        className=' font-[600] text-[.9rem] leading-[1.6rem]'>Feature</button>
                    <NavLink
                        onClick={handleLinkClick}
                        className=' font-[600] text-[.9rem] leading-[1.6rem]' to='/aboutus'>About us</NavLink>
                    <NavLink
                        onClick={handleLinkClick}
                        className=' font-[600] text-[.9rem] leading-[1.6rem]' to='/blogs'>Blogs</NavLink>
                    <NavLink
                        onClick={handleLinkClick}
                        className=' font-[600] text-[.9rem] leading-[1.6rem]' to='/joinAsPartner'>Join as Partner</NavLink>
                </div>
                <button
                    onClick={handleLinkClick}
                    className='sm:ml-[2rem] bg-[#FFD628] px-[1.4rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem]'>Dashboard</button>
            </div>

            {/* menu-icons */}
            {
                isToggled ?
                    (<IoMdClose
                        className='sm:hidden block text-[1.6rem]'
                        onClick={handleToggle} />) :
                    (<IoMdMenu
                        className='sm:hidden block text-[1.6rem]'
                        onClick={handleToggle} />)
            }

        </div>
    )
}

export default Navbar