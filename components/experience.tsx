'use client';

import React from "react";
import { VerticalTimeline as Timeline, VerticalTimelineElement as TimelineElem } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";
import { useTheme } from "@/context/theme-context";



function Experience() {

    const {ref} = useSectionInView("Experience");
    const {theme} = useTheme();
    const isLight = theme === 'light';

    return (
        <section ref={ref} className="scroll-mt-28 mb-28 sm:mb-40" id="experience">

            <SectionHeading>My Experience</SectionHeading>

            <Timeline lineColor=''>
                {
                    experiencesData.map(
                        (exp, index) => (
                            <React.Fragment key={index}>
                                <TimelineElem
                                    contentStyle={
                                        {
                                            background: isLight ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                                            boxShadow: 'none',
                                            border: '1px solid rgba(0, 0, 0, 0.5)',
                                            textAlign: 'left',
                                            padding: '1.3rem 2rem'
                                        }
                                    }
                                    contentArrowStyle={
                                        {
                                            borderRight: isLight ? '0.4rem solid #9ca3af' : '0.4rem solid rgba(255, 255, 255, 0.5)'
                                        }
                                    }
                                >
                                </TimelineElem>    
                            </React.Fragment>
                        )
                    )
                }
            </Timeline>   

        </section>
    )
}

export default Experience
