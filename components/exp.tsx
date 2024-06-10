// Byimaan

'use client';

import React from 'react';
import Image from 'next/image';
import { useRef } from 'react';

import {motion, useScroll, useTransform} from 'framer-motion';
import { experienceData } from '@/lib/data';
import { chooseRandomly } from '@/lib/func';

type ExpProps = (typeof experienceData)[number];

function Exp(
    {
        title, description, tags, imageUrls, imgStyle
    }: ExpProps
) {

    const ref = useRef<HTMLDivElement>(null);
    /* 
        totalScrollableHeight = documentHeight − viewportHeight 
        scrollYProgress= scrollY / totalScrollableHeight --> {range E [0, 1]}
    */

    const {scrollYProgress} = useScroll({
        target: ref,
        /*
        Quick guide about 'offset':
            offset: [ 
                "<start-of-scroll-range>#0 <end-of-scroll-range>#1",
                "<start-of-scroll-range>#1.33 <end-of-scroll-range>#1"
            ]
            offset[0]:
                #0 scroll progress starts when the top of the target element is at the top of the viewport (0).
                #1 ends when the bottom of the target element reaches the bottom of the viewport (1).
            offset[1]:
                #1.33 This means that the scroll progress starts when the top of the target element is at 1.33 times the height of the viewport (1.33).
                #1 ends when the bottom of the target element reaches the bottom of the viewport (1).
        */
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={
                {
                    scale: scaleProgress,
                    opacity: opacityProgress
                }
            }
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className='bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:min-h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white/10 dark:hover:bg-white/20 dark:bg-zinc-800'>
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        {
                            tags.map(
                                (tag, ind) => (
                                <li
                                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                    key={ind}
                                  >
                                    {tag}
                                </li>
                                )
                            )
                        }
                    </ul>

                    <Image
                        src={chooseRandomly([...imageUrls])}
                        height={550}
                        width={350}
                        alt="img"
                        quality={95}
                        className="absolute hidden sm:block top-10 -right-36 w-[28.25rem] rounded-t-lg shadow-2xl
                        transition 
                        group-hover:scale-[1.04]
                        group-hover:-translate-x-3
                        group-hover:translate-y-3
                        group-hover:-rotate-2

                        group-even:group-hover:translate-x-3
                        group-even:group-hover:translate-y-3
                        group-even:group-hover:rotate-2

                        group-even:right-[initial] group-even:-left-40"
                        style={
                            imgStyle || {}
                        }
                    />
                </div>
            </section>

        </motion.div>
    )
}

export default Exp
