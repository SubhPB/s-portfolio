// Byimaan
'use client';
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

function Whatsapp() {

    const handleClick = () => {
        window.open(
            'https://wa.me/12368654210',
            '_blank', 'noopener,noreferrer'
        )
    }

    return (
        <button 
            onClick={handleClick}
            type='button'
            className="fixed bottom-5 left-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full grid place-content-center hover-scale-105 transition-all dark:bg-gray-950 dark:text-green-500"
        >
            <BsWhatsapp />
        </button>
    )
}

export default Whatsapp