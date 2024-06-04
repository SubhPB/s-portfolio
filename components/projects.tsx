// Byimaan
'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import Project from './project';

function Projects() {

    const {ref} = useSectionInView("Projects", 0.5);

    return (
        <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>

            <SectionHeading> My Projects </SectionHeading>

            <div>
                {
                    projectsData.map(
                        (project, index) => (
                            <Project key={index} {...project}/>
                        )
                    )
                }
            </div>

        </section>
    )
}

export default Projects
