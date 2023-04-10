import React from 'react'

function Contact_Form() {
    return (

        <section className="contact bg-orange bg-cont_bkg_mobile lg:bg-about_bkg bg-no-repeat bg-cover min-h-screen ">

            <div className='container py-16 text-center'>
                <div className="head mb-6">
                    <h1 className='uppercase text-2xl font-[700]'>Get in touch</h1>
                    <p className='text-white text-sm px-4 leading-5'>Please get in touch with us and our team of experts will attend to all your additional queries.</p>
                </div>
                <div className="input_fields flex flex-col items-center gap-y-4">
                    <input className='w-[90%] text-sm py-3 px-4 rounded-lg' type="text" placeholder='First Name' id='first_name' name='first_name' />
                    <input className='w-[90%] text-sm py-3 px-4 rounded-lg' type="text" placeholder='Last Name' id='last_name' name='last_name' />
                    <input className='w-[90%] text-sm py-3 px-4 rounded-lg' type="email" placeholder='Email' id='email' name='email' />
                    <textarea className='w-[90%] text-sm py-3 px-4 rounded-lg' rows='5' cols='12' placeholder='Message' id='message' name='message' />
                    <div className="submit flex w-[90%]">
                        <button className='bg-white px-10 rounded-md py-3 w-[100%] lg:w-[20%] font-[700] mt-4 hover:bg-black  hover:text-white ease-in-out duration-300 uppercase'>Send</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact_Form