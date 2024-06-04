// Byimaan

'use client';

import React, {useState, createContext, useContext, SetStateAction} from "react";
import { SectionName } from "@/lib/types";

type ActiveSelectionContextProviderProps = {
    children: React.ReactNode
};

type ActiveSelectionContextType = {
    activeSection: SectionName
    setActiveSection: React.Dispatch<SetStateAction<SectionName>>
    timeOfLastClick: number
    setTimeOfLastClick: React.Dispatch<SetStateAction<number>>
};

export const ActiveSectionContext = createContext<ActiveSelectionContextType | null>(null);


export default function ActiveSectionContextProvider({children}: ActiveSelectionContextProviderProps){

    const [activeSection, setActiveSection] = useState<SectionName>("Home");

    /*
    we need to keep track of this to disable the observer temporarily when user clicks on a link
    */
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
    
    return (
        <ActiveSectionContext.Provider
            value={
                {
                    activeSection,
                    setActiveSection,
                    timeOfLastClick,
                    setTimeOfLastClick
                }
            }
        >
            {children}
        </ActiveSectionContext.Provider>
    )
};

export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);
    if (context === null){
        throw new Error(
            'useActiveSectionContext must be used within an ActiveSectionContextProvider'
        )
    };
    return context;
}