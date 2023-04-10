import React from 'react'
import Loc from '../components/Loc_Links';
import map from '../img/map.png'

function Locations() {

    return (
        <section className="location uppercase container gap-x-6 flex ">

            <div className='bg-black p-[33px] w-40% '>
                <h1 className='text-orange font-bold mb-[25px]'>you can find our offices in</h1>
                <ul className='text-white space-y-2'>  {
                    Loc.map((item, id) =>

                        <li key={item.id} className='border-b-[0.5px] border-gray-700 pb-3 hover:text-gray-500 ease-in-out duration-300 cursor-pointer'>{item.anchor}</li>
                    )
                }
                </ul>

            </div>
            <div className="map w-screen bg-slate-400 w-50% ">
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