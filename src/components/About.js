import React from 'react'
import engineers from '../img/engineers.png'
import Contact_btn from './Contact_btn';
import about from '../img/about.jpeg'

function About() {
    return (
        <section className="About bg-about_bkg_mobile max-lg:bg-about_bkg bg-no-repeat bg-cover max-sm:min-h-screen bg-fixed" id='about'>
            <div className="about_main_wrpper flex flex-col lg:flex-row">

                <div className="about_us_img hidden max-md:flex">
                    <img src={about} className='w-full ' alt="" />
                </div>
                <div className="left  2xl:bg-about_left md:bg-about_mo px-60 bg-cover w-full flex-shrink bg-no-repeat ">

                </div>

                <div className="about-wrapper   flex flex-col md:flex-row py-[50px] lg:py-[87px] items-center">
                    {/* <div className="company_img flex items-center  justify-center flex-1  w-fit">
                        <img className='w-[80%] mb-4' src={engineers} alt="Company image" />
                    </div> */}
                    <div className="About_Comp px-10 lg:px-20 flex flex-col flex-1 items-center md:items-start   ">
                        <div className="about flex flex-col items-center lg:items-start">
                            <h1 className='title font-[700] border-b-2 border-orange mb-6 w-fit'>About us</h1>
                            <p className='text-center lg:text-left'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                                Our mission is To provide quality workmanship and customer service and maintain the highest level of professionalism, honesty and fairness in our relationships with our customers, employees and vendors. To grow by continually providing useful and significant products, services, and solutions to markets we already serve – and to expand into new areas that build on our competencies and customer interests.
                            </p>
                        </div>
                        <div className="mission flex flex-col items-center lg:items-start pb-8">
                            <h1 className='title font-[700] border-b-2 border-orange w-fit mt-[32px] mb-6'>Mission</h1>
                            <p>Our mission is To provide quality workmanship and customer service and maintain the highest level of professionalism, honesty and fairness in our relationships with our customers, employees and vendors. To grow by continually providing useful and significant products, services, and solutions to markets we already
                                serve – and to expand into new areas that build on our competencies and customer interests.</p>
                        </div>
                        <Contact_btn />
                    </div>
                </div>

            </div>
        </section >
    )
}

export default About