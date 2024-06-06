// Byimaan

'use client';

import React from "react";
import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch(){

    const {theme, toggleTheme} = useTheme();

    return (
        <button 
        className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full grid place-content-center hover-scale-105 transition-all dark:bg-gray-950 dark:text-white"
        onClick={toggleTheme}
        >
            {
                theme === 'light' ? <BsSun /> : <BsMoon />
            }
        </button>
    )
}