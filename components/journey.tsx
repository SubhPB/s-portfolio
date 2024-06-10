'use client';

import React from "react";

import { VerticalTimeline as Timeline, VerticalTimelineElement as TimelineElem } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


import { journeyData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";
import { useTheme } from "@/context/theme-context";
import { useInView } from "react-intersection-observer";


type Exp = (typeof journeyData)[number] ;

const JourneyTimeline = ({exp, isLight}: {exp: Exp, isLight: boolean}) => {
    const {ref: childRef, inView} = useInView({
        triggerOnce: true
    });

    return (
    <div ref={childRef} className=" vertical-timeline-element ">

        <TimelineElem
            visible={inView}
            contentStyle={
                {
                    background: isLight ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                    boxShadow: 'none',
                    border: '1px solid rgba(0, 0, 0, 0.5)',
                    textAlign: 'left',
                    padding: '1.3rem 2rem',
                }
            }
            contentArrowStyle={
                {
                    borderRight: isLight ? '0.4rem solid #9ca3af' : '0.4rem solid rgba(255, 255, 255, 0.5)',
                }
            }
            
            date={exp.date}
            icon={exp.icon}
            iconStyle={
                {
                    background: isLight ? "white" :  "black",
                    fontSize: "1.5rem",
                    color: isLight ? "black" : "white",
                }
            }
        >
            <h3 className=" font-semibold capitalize">{exp.title}</h3>
            <p className=" font-normal !mt-0">{exp.location}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-gray-300">{exp.description}</p>
            
        </TimelineElem>    
    </div>
    )
}



function Journey() {

    const {ref} = useSectionInView("Journey");
    const {theme} = useTheme();
    const isLight = theme === 'light';


    return (
        <section ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 relative" id="journey">

            <SectionHeading>My Journey</SectionHeading>

            <Timeline lineColor='' animate={true}>
                {
                    journeyData.map(
                        (exp, index) => <JourneyTimeline exp={exp} key={index} isLight={isLight}/>
                    )
                }
            </Timeline>   

        </section>
    )
};

export default Journey;
