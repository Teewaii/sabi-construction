import React from 'react';
import email from '../../src/img/envelope.svg';
import location from '../img/location.svg';
import insta from '../img/insta.svg';
import fb from '../img/fb.svg';
import twi from '../img/twi.svg';

function MiniInfo() {
    return (
        <div className='Top-info py-[20px] flex items-center justify-center'>
            <div className="Top_info Wrapper flex justify-between gap-x-8 container ">
                <div className="hidden location lg:flex items-center gap-2">
                    <img src={location} alt="location-icon" />
                    <p className='text-sm lg:text-[16px]'>Bedding Cement Works, Shoreham Road, Upper Beeding, BN44 3TX

                    </p>
                </div>
                <div className="email flex items-center gap-1 lg:gap-x-2">
                    <img src={email} alt="email-icon" />
                    <p className='text-sm lg:text-[16px]'>taiyeajimati@gmail.om</p>
                </div>
                <div className=" flex gap-x-10 lg:gap-x-2 ">
                    <span className='flex gap-x-1 w-3 lg:w-14'>
                        <img src={insta} w-4 alt="instagram-icon" />
                        <img src={twi} alt="twitter icon" />
                        <img src={fb} alt="facebook icon" />
                    </span>
                    <p className='text-sm lg:text-[16px]'>sabi_engineering</p>

                </div>
            </div>

        </div>
    )
}

export default MiniInfo





// <div className='Top-info py-[20px] flex items-center justify-center'>
// <div className="Top_info Wrapper flex justify-between gap-x-8 container ">
//     <div className="hidden location lg:flex items-center gap-2">
//         <img src={location} alt="location-icon" />
//         <p className='text-sm lg:text-[16px]'>Bedding Cement Works, Shoreham Road, Upper Beeding, BN44 3TX

//         </p>
//     </div>
//     <div className="email flex items-center gap-1 lg:gap-x-2">
//         <img src={email} alt="email-icon" />
//         <p className='text-sm lg:text-[16px]'>taiyeajimati@gmail.om</p>
//     </div>
//     <div className=" flex gap-x-10 lg:gap-x-2 ">
//         <span className='flex gap-x-1 w-3 lg:w-14'>
//             <img src={insta} w-4 alt="instagram-icon" />
//             <img src={twi} alt="twitter icon" />
//             <img src={fb} alt="facebook icon" />
//         </span>
//         <p className='text-sm lg:text-[16px]'>sabi_engineering</p>

//     </div>
// </div>

// </div>