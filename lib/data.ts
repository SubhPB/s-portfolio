import React from "react";

import { LuGraduationCap } from "react-icons/lu";
import { BiMath } from "react-icons/bi";
import { GiPublicSpeaker } from "react-icons/gi";
import { SiAircanada } from "react-icons/si";
import { FaBoxes } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Journey",
    hash: "#journey",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const journeyData = [
  {
    title: "Bachelor's Degree In Commerce",
    location: "Kerala, In",
    description:
    "I graduated with BCOM degree after 3 years of studying at Mahatma Gandhi University. I immediately found a job as an accountant. ",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2020",
  },
  {
    title: "Accountant",
    location: "Vaikom, In",
    description:
      "I worked as an accountant for more than 1 year where i planned and executed financial projects, ensuring compliance with regulatory standards and deadlines.",
    icon: React.createElement(BiMath),
    date: "2020-2021",
  },
  {
    title: "Project Coordinator",
    location: "Kerala, In",
    description:
      "I had a good time working as project coordinator at Tummy Time, received the Employee of the Month award four times in recognition of outstanding performance, dedication, and contributions to the success of projects at Tummy Time",
    icon: React.createElement(BiMath),
    date: "2020-2024",
  },
  {
    title: "Academic Counselor",
    location: "Kerala, In",
    description:
      `I got the opportunity by Avodha education institute to work as academic counselor where i took initiative in developing and implementing student success programs, leading to improved academic 
      performance. Raised awareness and presented various offerings, of IT, language, and self-development 
      programs with career guidance.`,
    icon: React.createElement(GiPublicSpeaker),
    date: "2022",
  },
  {
    title: "Master Of Bussiness Administration",
    location: "Vancouver, BC",
    description:
      `In 2023, i made my way to Canada to continue my studies in bussiness, focuses on project management at University Canada West.`,
    icon: React.createElement(SiAircanada),
    date: "2023-2024",
  },
  {
    title: "Merchandiser",
    location: "Richmond, BC",
    description:
      `Soon got a job of merchandiser with responsibilities of executing inventory management tracking systems, ensuring optimal stock levels to satisfy customer demand while minimizing surplus inventory.`,
    icon: React.createElement(FaBoxes),
    date: "2024",
  },

] as const;

export const experienceData = [
  //1
  {
    title: "CAPM",
    description:
      `Earned the CAPM credential from the Project Management Institute (PMI), demonstrating proficiency in project management principles and methodologies`,
    tags: ["Agile", "Scrum"],
    imageUrls: [
      'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7680052/pexels-photo-7680052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3782233/pexels-photo-3782233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3782134/pexels-photo-3782134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  //2
  {
    title: "Orientation Conductor",
    description:
      `Implemented student orientation programs using agile methodologies, resulting in 
      measurable academic performance and satisfaction improvements.
      `,
    tags: ["Agile", "Leadership", "Team work"],
    imageUrls: [
      'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5212687/pexels-photo-5212687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  //3
  {
    title: "Counsultant",
    description:
      `Supported project management initiatives as an Academic Counselor at Avodha Edu Tech, ensuring 
      academic success and satisfaction for students through guidance and contributing to sales growth of 
      5% during the same period while delivering inventive resolutions`,
    tags: ["Planing", "Communication", 'Guidence'],
    imageUrls: [
      'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ]
  },
  //4
  {
    title: "Finance Management",
    description:
      `In past work experiences, prepared financial statements and reports for analysis and decision-making, contributing to informed 
      financial management and strategic planning`,
    tags: ["Strategic Approach", "Management", "Accountability"],
    imageUrls: [
      'https://images.pexels.com/photos/5466806/pexels-photo-5466806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7821708/pexels-photo-7821708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/8296977/pexels-photo-8296977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ]
  },
] as const;

export const skillsData = [' Scrum Methodologies ', ' Microsoft Office 365 ', 'Microsoft Project', ' Project Libra', ' Jira', ' Asana', 'Cross Functional', ' Collaboration ', 'Sprint Planning ', 'Project Coordination ', ' Critical Thinking ', ' Team Leadership ', ' Problem Solving ', ' Interpersonal Skills', ' Information Technology', ' Scope Management ', 'Time Management', 'Validate Scope ', 'Backlog Management', ' Communication skills'] as const;