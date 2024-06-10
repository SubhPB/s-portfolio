// Byimaan

'use client';

import React from 'react';
import {motion} from 'framer-motion';

import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

function About() {

    const {ref} = useSectionInView("About");

    return (    
        <motion.section
            ref={ref}
            id='about'
            // --> "scroll-mt-28" when auto-scrlling is triggered to this section the given css property ensures to leave margin of 28 from top so that our content not get hidde behind fixed header.
            className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial={
                {
                    opacity: 0, y: 100
                }
            }
            animate={
                {
                    opacity: 1, y: 0
                }
            }
            transition={
                {
                    delay: 0.175
                }
            }
        >

            <SectionHeading> About me </SectionHeading>

        <p className="mb-3">
            With a master's in business administration specializing in <span className="font-semibold">Project Management</span> and a <span className="font-semibold">Certified Associate in Project Management (CAPM) & (CSPO)</span> credential, I bring a dynamic and results-driven approach to every project. My expertise spans <span className="font-semibold">Microsoft Office 365</span>, <span className="font-semibold">Agile</span>, and <span className="font-semibold">Waterfall methodologies</span>, complemented by proficiency in project management tools like <span className="font-semibold">Jira</span> and <span className="font-semibold">Project Libra</span>. Throughout my career, I've demonstrated a knack for streamlining processes, managing risks, and fostering strong client relationships, particularly in academic counseling roles. <span className="italic">I am passionate about leveraging my skills and education to drive project success through meticulous organization, efficient coordination, and proactive communication.</span>
        </p>

        </motion.section>
    )
}

export default About