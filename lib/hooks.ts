// Byimaan

import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

import type {SectionName} from "./types";

export function useSectionInView(sectionName: SectionName, threshold=0.75){

    // 0.75 (75%) indicates that this number of percentage should be visible before triggering.
    const {ref, inView} = useInView({threshold});
    const {setActiveSection, timeOfLastClick} = useActiveSectionContext();

    useEffect(
        () => {
            const clickedAfterAtleastOneSecond = (Date.now() - timeOfLastClick) > 1000;
            if (inView && clickedAfterAtleastOneSecond){
                setActiveSection(sectionName);
            }
        }, [inView, setActiveSection, timeOfLastClick, sectionName]
    );
    return {ref: ref, inView: inView};
}