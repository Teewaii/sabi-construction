import React from 'react'
import downvalley from '../../src/img/donwvalley.png';
import downvalley_m from '../../src/img/donwvalley_m.png';
import edwardtower from '../../src/img/Edward tower.png';
import edwardtower_m from '../../src/img/Edward tower_m.png';
import Clif_land from '../../src/img/Clif land.png';
import Clif_land_m from '../../src/img/Clif land_m.png';
import East_side from '../../src/img/East side.png';
import East_side_m from '../../src/img/East side_m.png';


function Projects() {

    return (
        <section className="project container py-20" id='projects'>
            <div className="heading flex justify-between items-center relative after:absolute after:left-0 after:bg-gray-300 after:right-0 after:h-[1px] after:top-12 mb-12 ">
                <h1 className='uppercase font-[700] text-[16px] lg:text-2xl'>projects</h1>
                <h1 className='bg-orange px-6 py-1 font-[500] cursor-pointer text-white rounded-xl hover:scale-[1.2] hover:bg-[#D9D8D7]
                 hover:text-orange ease-in-out duration-300 text-md lg:text-2xl '>All</h1>
            </div>

            <div className="projects_container grid grid-cols-1 md:grid-cols-3 lg:md:grid-cols-4 xl:md:grid-cols-5 lg:gap-x-4">
                <div className="project lg:w-[200px] cursor-pointer hover:scale-[1.05] ease-in-out duration-300">
                    <img className='hidden lg:flex' src={downvalley} alt="" />
                    <img className='lg:hidden w-[100%]  ' src={downvalley_m} alt="" />
                    <h1 className='uppercase font-[700] mt-4 lg:text-2xl'>donwvalley</h1>
                    <p className="mb-6 text-sm lg:lg 2xl:text-[20px]">There are many variations of passages of Lorem Ipsum available.</p>
                </div>

                <div className="project  lg:w-[200px]  cursor-pointer hover:scale-[1.05] ease-in-out duration-300">
                    <img className='hidden lg:flex' src={edwardtower} alt="" />
                    <img className='lg:hidden w-[100%] ' src={edwardtower_m} alt="" />
                    <h1 className='uppercase font-[700] mt-4 lg:text-2xl'>Edward Tower</h1>
                    <p className="mb-6 text-sm lg:lg 2xl:text-[20px]">There are many variations of passages of Lorem Ipsum available.</p>
                </div>

                <div className="project  lg:w-[200px]  cursor-pointer hover:scale-[1.05] ease-in-out duration-300">
                    <img className='hidden lg:flex' src={Clif_land} alt="" />
                    <img className='lg:hidden w-[100%] ' src={Clif_land_m} alt="" />
                    <h1 className='uppercase font-[700] mt-4 lg:text-2xl'>Clif land HB</h1>
                    <p className="mb-6 text-sm lg:lg 2xl:text-[20px]">There are many variations of passages of Lorem Ipsum available.</p>
                </div>

                <div className="project  lg:w-[200px]  cursor-pointer hover:scale-[1.05] ease-in-out duration-300">
                    <img className='hidden lg:flex' src={East_side} alt="" />
                    <img className='lg:hidden w-[100%] ' src={East_side_m} alt="" />
                    <h1 className='uppercase font-[700] mt-4 lg:text-2xl'>East Side Apt.</h1>
                    <p className="mb-6  text-sm lg:lg 2xl:text-[20px]">There are many variations of passages of Lorem Ipsum available.</p>
                </div>

                <div className="project  lg:w-[200px]  cursor-pointer hover:scale-[1.05] ease-in-out duration-300">
                    <img className='hidden lg:flex' src={downvalley} alt="" />
                    <img className='lg:hidden w-[100%] ' src={downvalley_m} alt="" />
                    <h1 className='uppercase font-[700] mt-4 lg:text-2xl'>donwvalley</h1>
                    <p className="mb-6 text-sm lg:lg 2xl:text-[20px]">There are many variations of passages of Lorem Ipsum available.</p>
                </div>
            </div>
        </section>

    )
}

export default Projects
