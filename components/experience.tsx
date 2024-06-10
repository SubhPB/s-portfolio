// Byimaan
'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { experienceData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import Exp from './exp';

function Experience() {

    const {ref} = useSectionInView("Experience", 0.5);

    return (
        <section ref={ref} id='experience' className='scroll-mt-28 mb-28'>

            <SectionHeading> Experience + Accomplishments </SectionHeading>

            <div>
                {
                    experienceData.map(
                        (exp, index) => (
                            <Exp key={index} {...exp}/>
                        )
                    )
                }
            </div>

        </section>
    )
}

export default Experience
