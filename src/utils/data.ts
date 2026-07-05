import type { Experiance, FormInfo, Nav_items, Personal, Projects, Skill } from "./data-interface";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAxios,
  SiMui,
  SiTailwindcss,
  SiReactquery,
  SiRedux,
  SiReacthookform,
  SiFramer,
  SiPython,
} from "react-icons/si";
import { MdApi } from "react-icons/md";

export const Personal_data : Personal = {
    name : 'Maryam Jafartabar',
    jobTitle: 'Front-end Developer',
    description : 'Junior Frontend Developer with hands-on experience in React and Next.js development. Passionate about building modern web applications and continuously improving software engineering skills through personal projects and internship experience.',
    social : {
        github: 'https://github.com/maryam138317',
        linkedin: 'https://search.eitaa.com/?url=https://www.linkedin.com/in/maryam-jafartabar-24b249381?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app'
    }
}

export const skills: Skill[] = [
  { title: "HTML5", icon: SiHtml5 },
  { title: "CSS3", icon: SiCss },
  { title: "JavaScript", icon: SiJavascript },
  { title: "TypeScript", icon: SiTypescript },
  { title: "React", icon: SiReact },
  { title: "Next.js", icon: SiNextdotjs },
  { title: "Restful API", icon: MdApi },
  { title: "Axios", icon: SiAxios },
  { title: "Material UI", icon: SiMui },
  { title: "Tailwind CSS", icon: SiTailwindcss },
  { title: "React Query", icon: SiReactquery },
  { title: "Redux Toolkit", icon: SiRedux },
  { title: "React Hook Form & yup", icon: SiReacthookform },
  { title: "Framer Motion", icon: SiFramer },
  { title: "Python", icon: SiPython },
];

export const experiances : Experiance[] = [
    {
        title: 'Software Engeering Intern',
        company: 'NegarKhodro',
        responsibility : "Created UML diagrams for software documentation.Participated in software analysis and documentation activities.",
        startDate: '2026-3',
        endDate : 'Present'
    }
]


export const projects : Projects[] = [
    {
        title: 'Task Manager',
        description : 'Built a task management application using Next.js and SQLite.\nImplemented task creation, editing and status management.\nDeveloped analytics dashboard with charts for task priorities and statuses',
        techs : ['Next.js', 'Material UI'],
    links : {
        github : 'https://github.com/maryam138317/task-manager',
        demo : ''
    },
    image : ''
    },
    {
        title: 'Online Shop',
        description : 'Developed an online store using React.\nIntegrated REST APIs.\nUsed Redux Toolkit and React Query for state and server data management',
        techs : ['React','React Query','Redux Toolkit','Material UI'],
    links : {
        github : 'https://github.com/maryam138317/online-shop',
        demo : ''
    },
    image : ''
    },
    {
        title: 'Drug-Target Interaction Prediction',
        description : 'Trained a Classification Model with SVM to Predict the Interaction of Chemical Drug on Proteins using Yamanishi Dataset.\nAlso Managed Data unbalancing using Undersampling Techniques.',
        techs : ['Python','Machine Learning Techniques'],
    links : {
        github : 'https://github.com/maryam138317/DTI-Prediction',
        demo : ''
    },
    image : ''
    },
]

export const people : FormInfo[] = []

export const nav_bar: Nav_items[] = [
        {title: 'About', href: 'about'},
        {title: 'Skills & Experiences', href: 'skills-experience'},
        {title: 'Projects', href: 'projects'},
        {title: 'Contact', href: 'contact'},
    ]
