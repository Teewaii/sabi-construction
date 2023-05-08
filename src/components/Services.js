import React from 'react'
import const_mgt_icon from '../img/const_mgt_icon.svg';
import consulting_icon from '../img/consulting_icon.svg';
import Engineering_icon from '../img/Engineering_icon.svg';




function Services() {
    return (
        <section className="services bg-orange  " id='services'>
            <div className="services-wrapper flex flex-col items-center py-20 container">
                <h1 className='header font-[700] uppercase mb-6'>services</h1>

                <div className="items grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div className="construction_Mgt bg-white p-6 flex gap-x-6 rounded-lg duration-300 ease-in-out hover:shadow-xl hover:scale-[1.05]  ">
                        <div className="logo w-[100px] flex h-fit flex-shrink:0 bg-orange p-2 rounded-full">
                            <img src={const_mgt_icon} alt=" construction Management" />
                        </div>
                        <div className="info">
                            <h1 className='font-[700] text-[16px ]'>Construction Management</h1>
                            <p className='text-orange'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        </div>
                    </div>

                    <div className="Engineering bg-white p-6 flex gap-x-6 rounded-lg duration-300 ease-in-out hover:shadow-xl hover:scale-[1.05] ">
                        <div className="logo w-[100px] flex h-fit flex-shrink:0 bg-orange p-2 rounded-full">
                            <img className='' src={Engineering_icon} alt="Engineering icon" />
                        </div>
                        <div className="info">
                            <h1 className='font-[700] text-[16px]'>Engineering</h1>
                            <p className='text-orange'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        </div>
                    </div>

                    <div className="consulting bg-white p-6 flex gap-x-6 rounded-lg duration-300 ease-in-out hover:shadow-xl hover:scale-[1.05]">
                        <div className="logo w-[100px] flex h-fit flex-shrink:0 bg-orange p-2 rounded-full">
                            <img className='' src={consulting_icon} alt="" />
                        </div>
                        <div className="info">
                            <h1 className='font-[700] text-[16px]'>Consulting</h1>
                            <p className='text-orange'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        </div>
                    </div>

                    <div className="Safety_Management bg-white p-6 flex gap-x-6 rounded-lg duration-300 ease-in-out hover:shadow-xl hover:scale-[1.05] ">
                        <div className="logo w-[100px] flex h-fit flex-shrink:0 bg-orange p-2 rounded-full">
                            <img className='' src={consulting_icon} alt="" />
                        </div>
                        <div className="info">
                            <h1 className='font-[700] text-[16px]'>Safety Management</h1>
                            <p className='text-orange'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        </div>
                    </div>

                    <div className="Safety_Management bg-white p-6 flex gap-x-6 rounded-lg duration-300 ease-in-out hover:shadow-xl hover:scale-[1.05] ">
                        <div className="logo w-[100px] flex h-fit flex-shrink:0 bg-orange p-2 rounded-full">
                            <img className='' src={consulting_icon} alt="" />
                        </div>
                        <div className="info">
                            <h1 className='font-[700] text-[16px]'>Designing & Building</h1>
                            <p className='text-orange'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        </div>
                    </div>

                    <div className="Safety_Management bg-white p-6 flex gap-x-6 rounded-lg duration-300 ease-in-out hover:shadow-xl hover:scale-[1.05]">
                        <div className="logo w-[100px] flex h-fit flex-shrink:0 bg-orange p-2 rounded-full">
                            <img className='' src={consulting_icon} alt="" />
                        </div>
                        <div className="info">
                            <h1 className='font-[700] text-[16px]'>Engineering Design</h1>
                            <p className='text-orange'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services