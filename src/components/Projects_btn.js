import React from 'react';
import { Link } from 'react-scroll';


function Projects_btn() {
    return (
        <div>
            <Link className='bg-white text-black text-[0.64rem] md:text-[1rem] font-medium flex  w-fit px-3 py-2 md:px-6 md:py-3 xl:px-6 xl:py-3 2xl:px-8 2xl:py-4 rounded-md cursor-pointer hover:bg-slate-300 ease-in-out duration-300' to="projects" spy={true} smooth={true} offset={-50} duration={500} > Our Projects</Link>

        </div >
    )
}

export default Projects_btn