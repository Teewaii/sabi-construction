import React from 'react'
import logo from '../../src/img/logo_desktop.svg';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Link } from 'react-scroll';


function Nav({ toggle, setToggle, changeToggle }) {

    return (
        <nav className="nav py-3 lg:py-4 lg:flex bg-orange z-40 sticky top-0">
            <div className='container w-screen flex justify-between  items-center  text-white'>
                <img src={logo} className="hidden lg:flex" alt="" />
                <ul className={!toggle ? ' hidden lg:flex text-sm gap-x-4' : 'flex-col space-y-[16px] absolute top-0 bottom-0 right-0 bg-black w-[60%] py-[80px]  z-[40]'}>
                    <li> <Link spy={true} smooth={true} offset={50} duration={500} className='px-[50px] lg:py-5 lg:px-[10px] lg:hover:px-[10px] py-3 hover:bg-orange cursor-pointer ease-in-out duration-300 lg:hover:bg-white lg:hover:text-orange' to="Herocarousel">Home</Link> </li>
                    <li> <Link spy={true} smooth={true} offset={50} duration={500} className='px-[50px] lg:py-5 lg:px-[10px] lg:hover:px-[10px] py-3 hover:bg-orange cursor-pointer ease-in-out duration-300 lg:hover:bg-white lg:hover:text-orange' to="About">About</Link></li>
                    <li> <Link spy={true} smooth={true} offset={50} duration={500} className='px-[50px] lg:py-5 lg:px-[10px] lg:hover:px-[10px] py-3 hover:bg-orange cursor-pointer ease-in-out duration-300 lg:hover:bg-white lg:hover:text-orange' to="Services">Services</Link></li>
                    <li> <Link spy={true} smooth={true} offset={50} duration={500} className='px-[50px] lg:py-5 lg:px-[10px] lg:hover:px-[10px] py-3 hover:bg-orange cursor-pointer ease-in-out duration-300 lg:hover:bg-white lg:hover:text-orange' to="Projects">Projects</Link></li>
                    <li> <Link spy={true} smooth={true} offset={50} duration={500} className='px-[50px] lg:py-5 lg:px-[10px] lg:hover:px-[10px] py-3 hover:bg-orange cursor-pointer ease-in-out duration-300 lg:hover:bg-white lg:hover:text-orange' to="Contact_Form">Contact</Link></li>
                </ul>

                <div className="top_mobile flex lg:hidden justify-between items-center w-screen">
                    <img src={logo} className=" lg:hidden" alt="" />
                    <div onClick={changeToggle} className="hamburger flex justify-center items-center z-[50]">
                        {toggle ? <XMarkIcon className="h-9 w-9 color-white" /> : <Bars3Icon className="h-9 w-9 color-white" />}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav


// <section className="nav lg:flex absolute left-3 lg:left-0 lg:right-0 z-40">
// <div className='container w-screen flex justify-between  items-center  text-white'>
//     <img src={logo} className="hidden lg:flex" alt="" />
//     <ul className='flex text-sm gap-x-4 lg:p-10'>
//         <li>Home</li>
//         <li>About</li>
//         <li>Services</li>
//         <li>Projects</li>
//         <li>Contact</li>
//     </ul>
// </div>
// </section>