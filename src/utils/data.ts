import type { Experiance, FormInfo, NavItem, Personal, Projects, Skill } from "./data-interface";

import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiAxios, SiMui, SiTailwindcss, SiReactquery, SiRedux, SiReacthookform,
  SiFramer, SiPython
} from "react-icons/si";
import { MdApi } from "react-icons/md";
import { GiBearFace } from "react-icons/gi";

export const nav_bar: NavItem[] = [
  { label: { en: 'About', fa: 'درباره من' }, href: '#about' },
  { label: { en: 'Skills & Experiences', fa: 'مهارت ها و تجربیات' }, href: '#skills-experience' },
  { label: { en: 'Projects', fa: 'پروژه‌ها' }, href: '#projects' },
  { label: { en: 'Contact', fa: 'تماس' }, href: '#contact' },
];

export const Personal_data: Personal = {
  name: {
    en: 'Maryam Jafartabar',
    fa: 'مریم جعفرتبار'
  },
  jobTitle: {
    en: 'Front-end Developer',
    fa: 'توسعه‌ دهنده فرانت‌اند'
  },
  description: {
    en: 'Junior Frontend Developer with hands-on experience in React and Next.js development. Passionate about building modern web applications and continuously improving software engineering skills through personal projects and internship experience.',
    fa: 'توسعه‌دهنده فرانت‌اند جونیور با تجربه عملی در React و Next.js. علاقه‌مند به ساخت اپلیکیشن‌های وب مدرن و بهبود مستمر مهارت‌های مهندسی نرم‌افزار از طریق پروژه‌های شخصی و تجربه کارآموزی.'
  },
  social: {
    github: 'https://github.com/maryam138317',
    linkedin: 'https://search.eitaa.com/?url=https://www.linkedin.com/in/maryam-jafartabar-24b249381?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app',
    email: 'jafartabarmaryam381@gmail.com'
  }
};

// Tech/skill names conventionally stay in English regardless of locale
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
  { title: "Zustand", icon: GiBearFace },
  { title: "React Hook Form & yup", icon: SiReacthookform },
  { title: "Framer Motion", icon: SiFramer },
  { title: "Python", icon: SiPython },
];

export const experiances: Experiance[] = [
  {
    title: {
      en: 'Software Engineering Intern',
      fa: 'کارآموز مهندسی نرم‌افزار'
    },
    company: 'NegarKhodro',
    responsibility: {
      en: "Created UML diagrams for software documentation. Participated in software analysis and documentation activities.",
      fa: "تهیه نمودارهای UML برای مستندسازی نرم‌افزار. مشارکت در فعالیت‌های تحلیل و مستندسازی نرم‌افزار."
    },
    startDate: '2026/3',
    endDate: 'present' // resolved via t('sections.present') in the component
  }
];

export const projects: Projects[] = [
  {
    title: { en: 'Task Manager', fa: 'مدیریت وظایف' },
    description: {
      en: 'Built a task management application using Next.js and SQLite.\nImplemented task creation, editing and status management.\nDeveloped analytics dashboard with charts for task priorities and statuses',
      fa: 'یک اپلیکیشن مدیریت وظایف با Next.js و SQLite ساختم.\nقابلیت ایجاد، ویرایش و مدیریت وضعیت وظایف را پیاده‌سازی کردم.\nداشبورد تحلیلی با نمودار برای اولویت و وضعیت وظایف توسعه دادم.'
    },
    techs: ['Next.js', 'Material UI'],
    links: {
      github: 'https://github.com/maryam138317/task-manager',
      demo: ''
    },
    image: '/images/task-manager.png'
  },
  {
    title: { en: 'Online Shop', fa: 'فروشگاه آنلاین' },
    description: {
      en: 'Developed an online store using React.\nIntegrated REST APIs.\nUsed Redux Toolkit and React Query for state and server data management',
      fa: 'یک فروشگاه آنلاین با React توسعه دادم.\nAPIهای REST را یکپارچه کردم.\nاز Redux Toolkit و React Query برای مدیریت state و داده‌های سرور استفاده کردم.'
    },
    techs: ['React', 'React Query', 'Redux Toolkit', 'Material UI'],
    links: {
      github: 'https://github.com/maryam138317/online-shop',
      demo: 'https://online-shopp-taupe.vercel.app/'
    },
    image: '/images/online-shop.png'
  },
  {
    title: { en: 'Dish Directory', fa: 'دایرکتوری غذا' },
    description: {
      en: 'A recipe browsing web app built with Next.js, TypeScript, and Material UI. Browse recipes, view detailed ingredients and instructions, search and filter, manage a personal profile, save favorites, and add your own recipes — using DummyJSON API as a mock backend.',
      fa: 'یک اپلیکیشن مرور دستور پخت با Next.js، TypeScript و Material UI. مرور دستورها، مشاهده مواد اولیه و دستورالعمل، جستجو و فیلتر، مدیریت پروفایل شخصی، ذخیره علاقه‌مندی‌ها و افزودن دستورهای خودتان — با استفاده از DummyJSON API به عنوان بک‌اند آزمایشی.'
    },
    techs: ['Next.js', 'TypeScript', 'Material UI'],
    links: {
      github: 'https://github.com/maryam138317/dish-directory',
      demo: 'https://dish-directory-wheat.vercel.app/'
    },
    image: '/images/dish-directory.png'
  },
  {
    title: { en: 'Project Manager', fa: 'مدیریت پروژه' },
    description: {
      en: "A simple project management application built with React, TypeScript, Redux Toolkit, and Tailwind CSS. The main goal of this project was to practice writing scalable React applications with TypeScript while working with state management and reusable components.",
      fa: 'یک اپلیکیشن ساده مدیریت پروژه با React، TypeScript، Redux Toolkit و Tailwind CSS. هدف اصلی این پروژه تمرین نوشتن اپلیکیشن‌های مقیاس‌پذیر React با TypeScript همراه با مدیریت state و کامپوننت‌های قابل استفاده مجدد بود.'
    },
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
    links: {
      github: 'https://github.com/maryam138317/project-manager',
      demo: 'https://project-managerr-omega.vercel.app/'
    },
    image: '/images/project-manager.png'
  },
  {
    title: { en: 'Drug-Target Interaction Prediction', fa: 'پیش‌بینی برهم‌کنش دارو-پروتئین' },
    description: {
      en: 'Trained a classification model with SVM to predict the interaction of chemical drugs on proteins using the Yamanishi dataset. Also managed data imbalance using undersampling techniques.',
      fa: 'یک مدل طبقه‌بندی با SVM برای پیش‌بینی برهم‌کنش داروهای شیمیایی با پروتئین‌ها با استفاده از دیتاست Yamanishi آموزش دادم. همچنین عدم توازن داده را با تکنیک‌های undersampling مدیریت کردم.'
    },
    techs: ['Python', 'Machine Learning Techniques'],
    links: {
      github: 'https://github.com/maryam138317/DTI-Prediction',
      demo: ''
    },
    image: '/images/dti.png'
  },
];

export const people: FormInfo[] = [];