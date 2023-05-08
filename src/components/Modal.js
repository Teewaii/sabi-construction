import React from 'react'

function Modal({ toggle, changeToggle }) {
    return (
        <div onClick={changeToggle} className={!toggle ? 'bg-black absolute left-0 right-0 top-0 bottom-0 opacity-70' : 'hidden'}></div>
    )
}

export default Modal