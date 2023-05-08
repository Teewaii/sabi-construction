import React from 'react';
import location from '../img/location.svg'



function Footer() {
    return (
        <section className="footer bg-footer_bg  py-[70px] ">
            <div className='container  lg:flex  lg:justify-between lg:gap-x-4'>

                {/* About us */}
                <div className=" bold text-white text-center lg:text-left flex flex-col ">
                    <h1 className='text-white font-bold text-lg'>ABOUT SABI ENGINEERING</h1>
                    <p className=' my-4 text-gray-400 sm:text-md 2xl:text-lg'>There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered alteration in some form, by injected humour.</p>
                    <form className="newletter flex flex-col items-center w-full lg:items-start ">
                        <label htmlFor="" className='uppercase text-lg font-bold my-4'>newsletter</label>
                        <input type="email" placeholder='Email address' className='text-black bg-white w-full px-6 sm:text-md 2xl:text-lg mb-4 py-3 rounded-lg lg:w-[85%] '></input>

                        <button className='uppercase w-[100%]  text-black bg-orange hover:bg-black hover:text-white ease-in-out duration-300 py-3 rounded-lg lg:w-fit font-bold lg:px-8 lg:py-4'>subscribe</button>

                    </form>
                </div>

                {/* Quick link */}

                <div className="quick link bottom w-full max-md:py-14 md:w-[25%] ">
                    <h1 className='uppercase bold text-white  text-lg font-bold '>quick link</h1>
                    <ul className=' text-gray-400 my-4 sm:text-md 2xl:text-lg flex flex-col gap-y-2 '>
                        <li className='hover:text-white transiton ease-in-out 300'><a href="#" >Home</a></li>
                        <li className='hover:text-white transiton ease-in-out 300'><a href="#" >About</a></li>
                        <li className='hover:text-white transiton ease-in-out 300'><a href="#" ></a>Our Team</li>
                        <li className='hover:text-white transiton ease-in-out 300'><a href="#" ></a>Services</li>
                        <li className='hover:text-white transiton ease-in-out 300'><a href="#" ></a>Projects</li>
                        <li className='hover:text-white transiton ease-in-out 300'><a href="#" ></a>Contact us</li>
                    </ul>
                </div>

                {/* Office address */}
                <div className=" bold text-white">
                    <h1 className='uppercase bold text-white  flex flex-col text-lg font-bold'>office address</h1>
                    <p className='text-gray-400 my-4 w-fit lg:w-[80%] sm:text-md 2xl:text-lg'><span className='hidden lg:flex'> <img src={location} alt="location-icon" className='w-fit' /> </span>Bedding Cement Works, Shoreham Road, Upper Beeding",BN44 3TX</p>
                    <p className='text-gray-400 sm:text-md 2xl:text-lg  '><span className='text-orange font-bold text-md'> F: </span>01632 960177</p>
                    <p className='text-gray-400 sm:text-md 2xl:text-lg  '><span className='text-orange font-bold text-md'> T:</span>+44 1632 960177</p>
                    <p className='text-gray-400 sm:text-md 2xl:text-lg  '><span className='text-orange font-bold text-md'> E:</span>taiyeajimati@gmail.om</p>
                </div>

                {/* Business hours */}
                <div className=" bold text-white mt-6 max-sm:grid col-start-1 col-end-7 gap-y-2 lg:col-start-1 lg:col-end-1 lg:mt-0">
                    <h1 className='uppercase bold text-white  text-lg font-bold'>business hours</h1>
                    <p className='text-white '>Our support is available to help you 24/7</p>
                    <div className="moday text-gray-400 flex justify-between pb-2 border-b-[1.5px] border-gray-500">
                        <p className='sm:text-md 2xl:text-lg'>Monday - Friday:</p>
                        <p className='text-orange font-bold sm:text-md 2xl:text-lg'> 9am - 6pm</p>
                    </div>
                    <div className="other_days text-gray-400 flex justify-between pb-2 border-b-[1.5px] border-gray-500">
                        <p className='sm:text-md 2xl:text-lg'>Saturday & Sunday:</p>
                        <p className='text-orange font-bold sm:text-md 2xl:text-lg'> Closed</p>
                    </div>
                </div>

            </div>
            <p className='text-white container mt-16'> <span>&#169;</span> 2022 <span className='text-orange'> taiye.</span> All rights reserved.</p>
        </section >
    )
}

export default Footer