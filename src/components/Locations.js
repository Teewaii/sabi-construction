import React from 'react'
import Loc from '../components/Loc_Links';
import map from '../img/map.png';



function Locations() {

    return (
        <section className="location uppercase container gap-x-6 flex flex-col lg:flex-row py-[95px] ">

            <div className='bg-black lg:w-[38%] py-[25px]  rounded-lg mb-4 h-fit'>

                <h1 className='text-orange font-bold mb-[25px] px-[25px]'>you can find our offices in</h1>
                <ul className='text-white space-y-2'>  {
                    Loc.map((item, id) =>

                        <li key={item.id} className='border-b-[0.5px] px-[25px] border-gray-700 pb-3 ease-in-out duration-300 cursor-pointer hover:bg-orange hover:pt-4'>{item.anchor}</li>
                    )
                }
                </ul>

            </div>
            <div className="map h-[50%] border-[8px] rounded-xl overflow-hidden border-gray-200">
                <img src={map} className="w-screen" alt="Google map" />

            </div>
        </section>
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