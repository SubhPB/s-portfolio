// Byimaan
'use client';

import React, { useState } from "react";
import {motion} from 'framer-motion';

import SubmitBtn from "./submit-btn";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

type FormState = {
    subject: string,
    body: string
};

function Contact() {

    const {ref} = useSectionInView("Contact");

    const defaultForm = {subject: '', body: ''};
    const [formData, setFormData] = useState<FormState>(defaultForm);

    const {subject, body} = formData;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(
            data => ({
                ...data,
                [name as keyof FormState] : value
            })
        )
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        window.open(
            `mailto:sherwinj1999@gmail.com?subject=${subject}&body=${body}`,
            '_blank', 'noopener,noreferrer'
        );
        setFormData(defaultForm);
    };

    return (
        <motion.section
            id='contact'
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%,36rem)] text-center"
            initial={
                {
                    opacity: 0, 
                }
            }
            whileInView={
                {
                    opacity: 1
                }
            }
            transition={
                {
                    duration: 1,
                }
            }
            viewport={
                {
                    once: true,
                }
            }
        >

            <SectionHeading> Contact Me </SectionHeading>

            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:sherwinj1999@gmail.com">
                sherwinj1999@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 flex flex-col dark:text-black">
                <input
                    className="h-14 px-4 my-2 rounded-lg dark:bg-white
                    dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none shadow-sm shadow-black
                    "
                    name="subject"
                    type="text"
                    value={subject}
                    required
                    maxLength={500}
                    placeholder="Subject"
                    onChange={handleChange}
                />
                <textarea
                    className="min-h-[8rem] max-h-[18rem] h-52 my-3 rounded-lg p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none shadow-sm shadow-black"
                    name="body"
                    placeholder="Your message"
                    value={body}
                    required
                    maxLength={5000}
                    onChange={handleChange}
                />
                <SubmitBtn />
            </form>

        </motion.section>
    )
}

export default Contact
