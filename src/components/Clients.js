import React from 'react';
import bowen from '../img/bowen.svg';
import era from '../img/Era.svg';
import kw from '../img/kw.svg';
import ctb from '../img/ctb.svg';
import house_buyer from '../img/house_buyer.svg';
import skyline from '../img/skyline.svg';



function Clients() {
    return (
        <section className="clients h-[60px] lg:h-[80px] bg-orange flex items-center">
            <div className=' flex items-center justify-between  lg:gap-x-6 container'>

                <img className='h-[25px]  lg:h-[40px]' src={bowen} alt="bowen-logo" />
                <img className='h-[25px] lg:h-[50px]' src={era} alt="era-logo" />
                <img className='h-[25px] lg:h-[40px]' src={kw} alt="kw-logo" />
                <img className='h-[25px] lg:h-[40px]' src={ctb} alt="ctb-logo" />
                <img className='h-[25px] lg:h-[40px]' src={house_buyer} alt="house_buyer-logo" />
                <img className='h-[25px] lg:h-[40px]' src={skyline} alt="skyline-logo" />
            </div>
        </section>
    )
}

export default Clients