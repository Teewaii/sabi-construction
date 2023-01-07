import React from 'react';
import email from '../../src/img/envelope.svg';
import location from '../img/location.svg';
import insta from '../img/insta.svg';
import fb from '../img/fb.svg';
import twi from '../img/twi.svg';

function MiniInfo() {
    return (
        <div className='Top-info h-[55px] flex items-center justify-center'>
            <div className="Top_info Wrapper flex justify-between gap-x-8 container ">
                <div className="hidden location lg:flex items-center gap-2">
                    <img src={location} alt="location-icon" />
                    <p className='text-sm'>Bedding Cement Works, Shoreham Road, Upper Beeding, BN44 3TX
                    </p>
                </div>
                <div className="email flex items-center gap-1 lg:gap-x-2">
                    <img src={email} alt="email-icon" />
                    <p className='text-sm'>taiyeajimati@gmail.om</p>
                </div>
                <div className=" flex gap-x-10 lg:gap-x-12 ">
                    <span className='flex gap-x-1 w-3 lg:w-4'>
                        <img src={insta} alt="instagram-icon" />
                        <img src={twi} alt="twitter icon" />
                        <img src={fb} alt="facebook icon" />
                    </span>
                    <p className='text-sm'>sabi_engineering</p>
                </div>
            </div>

        </div>
    )
}

export default MiniInfo