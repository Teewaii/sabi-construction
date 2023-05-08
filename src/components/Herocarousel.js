import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import heroMob1 from '../img/hero_px1_mob.png';
import heroDesk1 from '../img/hero_px1_desktop.png';
import Contact_btn from './Contact_btn';
import Projects_btn from './Projects_btn';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <div className="slider-one bg-black bg-hero1-bkg md:bg-hero1-bkg_lg  bg-cover bg-no-repeat h-[100%] lg:pt-8  relative ">
        <div className="slideOne-bucket flex justify-between items-center container h-[100%]">
            <div className="text text-left flex-1">
                <h1 className='text-white text-left text-xl md:text-4xl xl:text-6xl 2xl:text-7xl uppercase font-bold '>You dream it.<br /> We can build it.</h1>
                <p className='text-[0.8rem] md:text-md xl:text-2xl text-white font-light mb-6 '>A once-in-a-lifetime project deserves timeless construction.</p>
                <div className="buttons flex gap-x-2 md:gap-x-6">
                    <Contact_btn />
                    <Projects_btn className='bg-orange text-black' />
                </div>
            </div>
            <div className="SlideOne-imgage flex items-end justify-end h-[100%] flex-[1]">
                <img src={heroMob1} className='md:hidden w-[100%] pt-8 ' alt="carousel image" />
                <img src={heroDesk1} className='hidden md:flex  w-[70%] md:w-[85%]' alt="carousel image" />
            </div>

        </div>
    </div>,

    // <div className="slider-two bg-black bg-hero1-bkg md:bg-hero1-bkg_lg  bg-cover bg-no-repeat h-[100%] relative ">
    //     <div className="slideTwo-bucket flex justify-between items-center container h-[100%]">
    //         <div className="text text-left flex-1">
    //             <h1 className='text-white text-left text-xl md:text-5xl xl:text-6xl uppercase font-bold '>You dream it.<br /> We can build it.</h1>
    //             <p className='text-[0.8rem] md:text-lg xl:text-2xl text-white font-light mb-6 '>A once-in-a-lifetime project deserves timeless construction.</p>
    //             <div className="buttons flex gap-x-2 lg:gap-x-6">
    //                 <Contact_btn />
    //                 <Projects_btn className='bg-orange text-black' />
    //             </div>
    //         </div>
    //         <div className="SlideTwo-imgage flex items-end justify-end h-[100%] flex-[1]">
    //             <img src={heroMob1} className='md:hidden ' alt="carousel image" />
    //             <img src={heroDesk1} className='hidden md:flex w-[90%]' alt="carousel image" />
    //         </div>

    //     </div>
    // </div>,


    //   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
    //   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
    //   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
];




function Herocarousel() {
    return (
        // <div>Herocarousel</div>
        <div className="caro bg-black h-[100%]">
            <AliceCarousel
                autoPlay
                autoPlayStrategy="none"
                autoPlayInterval={3000}
                animationDuration={2000}
                // animationType="fadeout"
                // infinite
                mouseTracking items={items}

            />
        </div>
    )
}

export default Herocarousel