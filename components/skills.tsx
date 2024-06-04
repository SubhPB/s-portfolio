// Byimaan
'use client';

import React from 'react';
import {motion} from 'framer-motion';

import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { skillsData } from '@/lib/data';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0, y: 100
    },
    animate: (index: number) =>  ({
        opacity: 1, y: 0,
        transition: {
            delay: 0.05*index
        }
    })
}

function Skills() {

    const {ref} = useSectionInView("Skills");
    return (
        <section ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40" id="skills">
            <SectionHeading>My Skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-gray-800 text-lg">
                {
                    skillsData.map(
                        (skill, index) => (
                            <motion.li
                                key={index}
                                className='bg-white border border-black rounded-3xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
                                variants={fadeInAnimationVariants}
                                custom={index}

                                // whileInView prop defines the animation state that should be applied when the element is within the viewport
                                whileInView={'animate'}

                                // (li) will start with the properties defined in the initial variant of your fadeInAnimationVariants.
                                initial='initial'

                                // If set to false, the animation would run every time the element enters the viewport.
                                viewport={
                                    {
                                        once: true
                                    }
                                }
                            >
                                {skill}
                            </motion.li>
                        )
                    )
                }
            </ul>
        </section>
    )
}

export default Skills