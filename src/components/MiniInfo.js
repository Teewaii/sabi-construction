import React from 'react';
import email from '../../src/img/envelope.svg'

function MiniInfo() {
    return (
        <div className='Top-info'>
            <div className="Top_info Wrapper bg-red">
                <img src={email} alt="email-icon" /> <p>taiyeajimati@gmail.om</p>
            </div>
        </div>
    )
}

export default MiniInfo