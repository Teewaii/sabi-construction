import React from 'react';
import cont from '../img/cont.jpg'

function Contact_Form() {
    return (

        <section className="contact bg-orange bg-cont_bkg_mobile lg:bg-about_bkg bg-no-repeat bg-cover flex flex-col lg:flex-row bg-fixed" id='contact'>

            <div className='container py-16 lg:py-40 text-center'>
                <div className="head mb-6">
                    <h1 className='uppercase text-2xl lg:text-6xl font-[700] mb-4'>Get in touch</h1>
                    <p className='text-white text-sm px-4 leading-5 lg:text-2xl'>Please get in touch with us and our team of experts will attend to all your additional queries.</p>
                </div>
                <div className="input_fields flex flex-col items-center gap-y-4">
                    <input className='w-[90%] text-sm  py-3 px-4 rounded-lg lg:text-lg lg:py-3' type="text" placeholder='First Name' id='first_name' name='first_name' />
                    <input className='w-[90%] text-sm  py-3 px-4 rounded-lg lg:text-lg lg:py-3' type="text" placeholder='Last Name' id='last_name' name='last_name' />
                    <input className='w-[90%] text-sm  py-3 px-4 rounded-lg lg:text-lg lg:py-3' type="email" placeholder='Email' id='email' name='email' />
                    <textarea className='w-[90%] text-sm  py-3 px-4 rounded-lg lg:text-lg lg:py-5' rows='5' cols='12' placeholder='Message' id='message' name='message' />
                    <div className="submit flex w-[90%]">
                        <button className='bg-white px-6 rounded-md py-4 w-[100%] lg:w-[20%] font-[700] mt-4 hover:bg-black  hover:text-white ease-in-out duration-300 uppercase text-xl'>Send</button>
                    </div>
                </div>
            </div>

            <div className="pic bg-slate-300  w-full bg-contact_bkg bg-no-repeat bg-cover">
                {/* <img className='' src={cont} alt="contact_pix" /> */}
            </div>
        </section>
    )
}

export default Contact_Form