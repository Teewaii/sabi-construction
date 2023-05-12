import React from 'react'
import logo from '../../src/img/logo_desktop.svg';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Link } from 'react-scroll';
// import Hero from './Hero';


function Nav({ toggle, setToggle, changeToggle }) {


    return (
        <nav className="nav py-3 lg:py-0 lg:flex bg-orange z-40 sticky  top-0">
            <div className='container w-screen flex justify-between  items-center  text-white'>

                <Link to="hero" className='cursor-pointer' spy={true} smooth={true} offset={-50} duration={500} >
                    <img src={logo} className="hidden lg:flex" alt="logo" />
                </Link>
                <ul className={toggle ? ' hidden lg:flex text-sm gap-x-4' : 'flex-col space-y-[16px] absolute top-0 bottom-0 right-0 bg-black w-[60%] h-screen py-[80px]  z-[40]'}>
                    <li className='nav_item  px-[50px] lg:py-5 lg:px-[10px] lg:hover:px-[10px] max-md:hover:w-[100%] py-3 hover:bg-orange cursor-pointer ease-in-out duration-300 lg:hover:bg-white lg:hover:text-orange'> <Link onClick={() => setToggle(true)} to="hero" spy={true} smooth={true} offset={-50} duration={500} >Home </Link> </li>
                    <li className='nav_item px-[50px] lg:py-5 lg:px-[10px] lg:hover:px-[10px] max-md:hover:w-[100%] py-3 hover:bg-orange cursor-pointer ease-in-out duration-300 lg:hover:bg-white lg:hover:text-orange'> <Link onClick={() => setToggle(true)} to="about" spy={true} smooth={true} offset={-50} duration={500} > About</Link> </li>
                    <li className='nav_item px-[50px] lg:py-5 lg:px-[10px] lg:hover:px-[10px] max-md:hover:w-[100%] py-3 hover:bg-orange cursor-pointer ease-in-out duration-300 lg:hover:bg-white lg:hover:text-orange'>  <Link onClick={() => setToggle(true)} to="services" spy={true} smooth={true} offset={-50} duration={500} >Services</Link> </li>
                    <li className='nav_item px-[50px] lg:py-5 lg:px-[10px] lg:hover:px-[10px] max-md:hover:w-[100%] py-3 hover:bg-orange cursor-pointer ease-in-out duration-300 lg:hover:bg-white lg:hover:text-orange'> <Link onClick={() => setToggle(true)} to="projects" spy={true} smooth={true} offset={-50} duration={500} > Projects</Link> </li>
                    <li className='nav_item px-[50px] lg:py-5 lg:px-[10px] lg:hover:px-[10px] max-md:hover:w-[100%] py-3 hover:bg-orange cursor-pointer ease-in-out duration-300 lg:hover:bg-white lg:hover:text-orange'>  <Link onClick={() => setToggle(true)} to="contact" spy={true} smooth={true} offset={-50} duration={500} >Contact</Link> </li>
                    <li className='nav_item px-[50px] lg:py-5 lg:px-[10px] lg:hover:px-[10px] max-md:hover:w-[100%] py-3 hover:bg-orange cursor-pointer ease-in-out duration-300 lg:hover:bg-white lg:hover:text-orange'>  <Link onClick={() => setToggle(true)} to="location" spy={true} smooth={true} offset={-50} duration={500} >Our Offices</Link> </li>
                    {/* <li className='px-[50px] lg:py-5 lg:px-[10px] lg:hover:px-[10px] hover:w-[100%] py-3 hover:bg-orange cursor-pointer ease-in-out duration-300 lg:hover:bg-white lg:hover:text-orange'> <Link spy={true} smooth={true} offset={50} duration={500} to="Contact_Form">Contact</Link></li> */}
                </ul >

                <div className="top_mobile flex lg:hidden justify-between items-center w-screen">
                    <Link to="hero" className='cursor-pointer' spy={true} smooth={true} offset={-50} duration={500} >
                        <img src={logo} className=" lg:hidden" alt="logo" />
                    </Link>
                    <div onClick={changeToggle} className="hamburger flex justify-center items-center z-[50]">
                        {!toggle ? <XMarkIcon className="h-9 w-9 color-white" /> : <Bars3Icon className="h-9 w-9 color-white" />}
                    </div>
                </div>
            </div >
        </nav >
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