// Byimaan

'use client';

import React, {useEffect, useState, createContext, useContext} from "react";
const themes = ['light', 'dark'] as const;

type Theme = (typeof themes)[number]

type ThemeContextProviderProps = {
    children: React.ReactNode;
  };
  
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<null | ThemeContextType>(null);

export default function ThemeContextProvider({children}: ThemeContextProviderProps){

    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    useEffect(
        () => {
            const localTheme = localStorage.getItem('theme') as Theme | null;

            if (localTheme && themes.includes(localTheme) && theme !== localTheme){
                setTheme(localTheme)
            }
        }, []
    );

    useEffect(
        () => {
            const oppositeTheme = theme === 'light' ? 'dark': 'light';

            const localTheme = localStorage.getItem('theme') as Theme | null;
            const classList = document.documentElement.classList;

            Array.from(classList).includes(oppositeTheme) && classList.remove(oppositeTheme);
            !Array.from(classList).includes(theme) && classList.add(theme);
            localTheme !== theme && localStorage.setItem('theme', theme);
            
        }, [theme]
    );

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>    
    )
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context){
        throw new Error("useTheme must be used within a ThemeContextProvider")
    };
    return context;
}