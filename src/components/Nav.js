import React from 'react'
import logo from '../../src/img/logo_desktop.svg'


function Nav() {
    return (
        <section className="nav hidden lg:flex absolute top-[10%] left-0 right-0 z-40">
            <div className='container w-screen flex justify-between  items-center  text-white'>
                <img src={logo} alt="" />
                <ul className='flex text-sm gap-x-4'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </section>
    )
}

export default Nav