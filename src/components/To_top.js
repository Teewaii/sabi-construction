import React from 'react'
import { ArrowSmallUpIcon } from '@heroicons/react/24/solid'
import ScrollToTop from "react-scroll-to-top";

function To_top() {
    return (
        <div>
            <ScrollToTop className='w-8 absolute bottom-6 right-6' style={{ color: 'white', background: "black" }} smooth component={<ArrowSmallUpIcon />} />
        </div>
    )
}

export default To_top