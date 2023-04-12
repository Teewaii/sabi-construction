import React from 'react'

function Footer() {
    return (
        <section className="footer bg-footer_bg  py-[50px] ">
            <div className='container flex lg:grid grid-cols-3 justify-between'>
                <div className=" bold text-white">
                    <h1 className='text-white font-bold'>ABOUT SABI ENGINEERING</h1>
                    <p className='w-[85%] my-5 opacity-50'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                    <form className="newletter">
                        <label htmlFor="">newsletter</label>
                        <input type="email" className='text-black bg-white px-6 py-3 w-fit font-bold'></input>
                        <button className='uppercase text-black bg-orange px-6 py-3 w-fit font-bold'>subscribe</button>

                    </form>
                </div>
                <div className="uppercase bold text-white">quick link</div>
                <div className="uppercase bold text-white">office address</div>
                <div className="uppercase bold text-white">business hours</div>
            </div>
        </section>
    )
}

export default Footer