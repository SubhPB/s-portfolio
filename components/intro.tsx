// Byimaan
'use client';

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import profileImg from "@/public/profile.jpeg";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { CiMail } from "react-icons/ci";
import { useSectionInView } from "@/lib/hooks";


import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro(){
    const {ref} = useSectionInView("Home", 0.5);
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

    return (
        // This section is divided into 3 parts.
        <section
            ref={ref}
            id='home'
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] pt-24 sm:pt-16"
        >
            {/* User Image + Hey emoji */}
            <div className="flex items-center justify-center">
                <div className="relative">

                    <motion.div
                        
                        initial={
                            {
                                opacity: 0, scale: 0
                            }
                        }
                        animate={
                            {
                                opacity: 1, scale: 1
                            }
                        }
                        transition={
                            {
                                type: 'tween', duration: 0.2
                            }
                        }
                    >
                        <Image 
                           src={profileImg} 
                           alt='main-img' 
                           width="192"
                           height="192"
                           quality={95}
                           priority={true}
                           className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover border-[0.35rem] border-white dark:border-black shadow-xl object-top"
                        />
                    </motion.div>

                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl opacity-100"
                        initial={
                            {
                                opacity: 0, scale: 0
                            }
                        }
                        animate={
                            {
                                opacity: 1, scale: 1
                            }
                        }
                    >
                        👋
                    </motion.span>

                </div>
            </div>

            {/* Introduction text */}
            <motion.h1
                className="mb-8 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-4xl"
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
            >
                <span className="font-bold">Hello, I'm Sherwin.</span> I'm a dynamic professional with a {" "}
                <span className="font-bold"> Master's in Business Administration </span> specializing in <span className="font-bold">Project Management.</span> {" "}
                With a proven track record in academic counseling and expertise in both 
                <span className="font-bold"> Agile and Waterfall </span> methodologies.

            </motion.h1>    

            {/* 4 link buttons to contact me */}
            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-4 text-lg font-medium"
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
                        delay: 0.1
                    }
                }
            >
                <Link
                    href='#contact'
                    className="group bg-gray-900 text-white px-5 py-2 sm:px-7 sm:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    onClick={
                        () => {
                            setActiveSection("Contact");
                            setTimeOfLastClick(Date.now());
                        }
                    }
                >
                    Contact me here {" "}
                    <BsArrowRight
                        className="opacity-70 group-hover:translate-x-1 transition"
                    />
                </Link>

                <a 
                    href="/Resume.pdf"
                    download={true}
                    className="group bg-white px-5 py-2 sm:px-7 sm:py-3  flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                >
                    Download Resume {" "}
                    <HiDownload 
                        className="opacity-60 group-hover:translate-y-1 transition"
                    />
                </a>

                <a
                className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="http://www.linkedin.com/in/sherwin-joseph"
                target="_blank"
                >
                    <BsLinkedin />
                </a>

                <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="mailto:sherwinj1999@gmail.com"
                target="_blank"
                >
                    <CiMail />
                </a>
            </motion.div> 
        </section>
    )
}
