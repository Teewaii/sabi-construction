import React from 'react'
import Loc from '../components/Loc_Links';
import map from '../img/map.png';
import { useState } from 'react';
import { motion } from "framer-motion";


function Locations() {
    const [location, setLocation] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18851.75788280429!2d-1.5655178118731716!3d53.79892472487462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795c1ce188d5c1%3A0x15d618c32f35e14!2sLeeds%20City%20Museum!5e0!3m2!1sen!2suk!4v1683656221556!5m2!1sen!2suk")
    const [activeTab, setActiveTab] = useState(0)


    // function setTab(index) {
    //     if (activeTab === index) {
    //         return setActiveTab(1)
    //     }
    //     setActiveTab(index)
    // }


    return (
        <section className="location uppercase container gap-x-6 flex flex-col lg:flex-row py-[95px] " id='location'>

            <motion.div className='bg-black lg:w-[38%] py-[25px]  rounded-lg mb-4 h-fit'

                initial={{ x: -30 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
            >

                <h1 className='text-orange font-bold mb-[25px] px-[25px]'>you can find our offices in</h1>
                <ul className='text-white '>  {
                    Loc.map((item, index) =>
                        <p key={item.id} onClick={() => { setActiveTab(index); setLocation(item.ref) }} className={activeTab !== index ? 'border-b-[0.5px] px-[25px] border-gray-700 pb-3 ease-in-out duration-300 cursor-pointer hover:bg-orange hover:pt-4 pt-2 ' : 'bg-orange pt-2 pb-3 px-[25px] cursor-pointer'}>{item.anchor}</p>

                        // <li key={item.id} onClick={() => { setActiveTab(index); setLocation(item.ref) }} className={activeTab !== index ? 'border-b-[0.5px] px-[25px] border-gray-700 pb-3 ease-in-out duration-300 cursor-pointer hover:bg-orange hover:pt-4 pt-2 ' : 'bg-orange pt-2 pb-3 px-[25px] cursor-pointer'}>{item.anchor}</li>
                        // <li key={item.id} onClick={() => { setLocation(item.ref); setTab() }} className='border-b-[0.5px] px-[25px] border-gray-700 pb-3 ease-in-out duration-300 cursor-pointer hover:bg-orange hover:pt-4'>{item.anchor}</li>
                    )
                }
                </ul>

            </motion.div>
            <motion.div className="map h-[50%] border-[8px] rounded-xl overflow-hidden border-gray-200"

                initial={{ x: 30 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
            >


                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18851.75788280429!2d-1.5655178118731716!3d53.79892472487462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795c1ce188d5c1%3A0x15d618c32f35e14!2sLeeds%20City%20Museum!5e0!3m2!1sen!2suk!4v1683656221556!5m2!1sen!2suk" */}

                <iframe src={location} className='max-sm:w-[400px]'
                    width="900"

                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">

                </iframe>

            </motion.div>

        </section >
    )

}

export default Locations



{/* <li className='border-b-[0.5px] border-gray-700 pb-3'>London</li>
                            <li className='border-b-[0.5px] border-gray-700 pb-3'>Manchester</li>
                            <li className='border-b-[0.5px] border-gray-700 pb-3'>Hull</li>
                            <li className='border-b-[0.5px] border-gray-700 pb-3'>Birminham</li>
                            <li className='border-b-[0.5px] border-gray-700 pb-3'>York</li>
                            <li className='border-b-[0.5px] border-gray-700 pb-3'>Glasgow</li>
                            <li className='border-b-[0.5px] border-gray-700 pb-3'>Norwich</li> */}