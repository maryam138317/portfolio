import type { Experiance, FormInfo, NavItem, Personal, Projects, Skill } from "./data-interface";

import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiAxios, SiMui, SiTailwindcss, SiReactquery, SiRedux, SiReacthookform,
  SiFramer, SiPython,
  SiShadcnui
} from "react-icons/si";
import { MdApi } from "react-icons/md";
import { GiBearFace } from "react-icons/gi";

export const nav_bar: NavItem[] = [
  { label: { en: 'About', fa: 'درباره من' }, href: '#about' },
  { label: { en: 'Skills & Experiences', fa: 'مهارت‌ها و تجربیات' }, href: '#skills-experience' },
  { label: { en: 'Projects', fa: 'پروژه‌ها' }, href: '#projects' },
  { label: { en: 'Contact', fa: 'تماس با من' }, href: '#contact' },
];

export const Personal_data: Personal = {
  name: {
    en: 'Maryam Jafartabar',
    fa: 'مریم جعفرتبار'
  },
  jobTitle: {
    en: 'Front-end Developer',
    fa: 'توسعه‌دهنده فرانت‌اند'
  },
  description: {
    en: 'Junior Frontend Developer with hands-on experience in React and Next.js development. Passionate about building modern web applications and continuously improving software engineering skills through personal projects and internship experience.',
    fa: 'توسعه‌دهنده فرانت‌اند جونیور با تجربه عملی در React و Next.js. علاقه‌مند به ساخت اپلیکیشن‌های وب مدرن هستم و از طریق پروژه‌های شخصی و دوره کارآموزی، مهارت‌های مهندسی نرم‌افزار خودم را به‌طور مستمر توسعه می‌دهم.'
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
  {title: "Shadcn UI", icon: SiShadcnui},
  { title: "Tailwind CSS", icon: SiTailwindcss },
  { title: "React Query", icon: SiReactquery },
  { title: "Redux Toolkit", icon: SiRedux },
  { title: "Zustand", icon: GiBearFace },
  { title: "React Hook Form & yup", icon: SiReacthookform },
  { title: "Framer Motion", icon: SiFramer },
  { title: "Python", icon: SiPython },
];

export const experiances: Experiance[] = [
  // Present for end-date is possible
  {
    title: {
      en: 'Software Engineering Intern',
      fa: 'کارآموز مهندسی نرم افزار'
    },
    company: 'NegarKhodro',
    responsibility: {
      en: 'Contributed to the software development lifecycle through requirements analysis, documentation, and design activities.\n Prepared and maintained software engineering documents including PRD, WBS, and FAB, adapting them to changes in product requirements.\n Analyzed business processes and system requirements, translating them into UML diagrams.\n Worked on data modeling and ERD as part of the system design process.\n Gained practical experience with requirements changes, documentation updates, and the iterative nature of software development',
      fa: '	مشارکت در چرخه توسعه نرم‌افزار از طریق تحلیل نیازمندی‌ها، مستندسازی و فعالیت‌های طراحی.و	تهیه و به‌روزرسانی مستندات مهندسی نرم‌افزار شامل PRD، WBS و FAB، متناسب با تغییرات نیازمندی‌های محصول.	تحلیل فرایندهای کسب‌وکار و نیازمندی‌های سیستم و تبدیل آن‌ها به نمودارهای UML.	همکاری در مدل‌سازی داده و طراحی ERD به‌عنوان بخشی از فرایند طراحی سیستم.	کسب تجربه عملی در مواجهه با تغییرات نیازمندی‌ها، به‌روزرسانی مستندات و ماهیت تکرارشونده‌ی توسعه نرم‌افزار.'
    },
    startDate: 'March 2026',
    endDate: 'September 2026'
  }
];

export const projects: Projects[] = [
  {
    title: { en: 'Task Manager', fa: 'مدیریت وظایف' },
    description: {
      en: 'Built a task management application using Next.js and SQLite.\nImplemented task creation, editing and status management.\nDeveloped analytics dashboard with charts for task priorities and statuses',
      fa: 'یک اپلیکیشن مدیریت وظایف با Next.js و SQLite ساختم.\nقابلیت ایجاد، ویرایش و تغییر وضعیت وظایف را پیاده‌سازی کردم.\nیک داشبورد تحلیلی همراه با نمودار برای نمایش اولویت‌ها و وضعیت وظایف طراحی کردم.'
    },
    techs: ['Next.js', 'Material UI'],
    links: {
      github: 'https://github.com/maryam138317/task-manager',
      demo: ''
    },
    image: '/images/task-manager.png'
  },
  {
    title: {en: 'Financial Dashboard', fa:'داشبورد مالی'},
    description: {
      en: 'A full-featured, responsive dashboard for managing transactions, with charts to visualize spending and saving. Includes goal-based saving so users can set aside money toward future purchases.',
      fa: 'داشبوردی کاملاً واکنش‌گرا برای مدیریت تراکنش‌های مالی، به همراه نمودارهایی برای نمایش بصری هزینه‌ها و پس‌اندازها. کاربر همچنین می‌تواند برای اهداف مالی آینده‌ی خود پول کنار بگذارد.'
    },
    techs: ['Next.js','Zustand','Shadcn UI'],
    links: {
      github: 'https://github.com/maryam138317/financial-dashboard',
      demo: 'https://financial-dashboard-eta-nine.vercel.app/'
    },
    image: '/images/financial-dashboard.png'
  },
  {
    title: { en: 'Online Shop', fa: 'فروشگاه آنلاین' },
    description: {
      en: 'Developed an online store using React.\nIntegrated REST APIs.\nUsed Redux Toolkit and React Query for state and server data management',
      fa: 'یک فروشگاه آنلاین با React توسعه دادم.\nAPIهای REST را به پروژه متصل کردم.\nبرای مدیریت state و داده‌های سرور از Redux Toolkit و React Query استفاده کردم.'
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
      fa: 'یک اپلیکیشن مرور دستور پخت با Next.js، TypeScript و Material UI. امکاناتی مثل مشاهده مواد اولیه و طرز تهیه، جستجو و فیلتر دستورها، مدیریت پروفایل شخصی، ذخیره علاقه‌مندی‌ها و افزودن دستور پخت اختصاصی را فراهم می‌کند — با استفاده از DummyJSON API به‌عنوان بک‌اند آزمایشی.'
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
      fa: 'یک اپلیکیشن ساده مدیریت پروژه با React، TypeScript، Redux Toolkit و Tailwind CSS. هدف اصلی از این پروژه، تمرین نوشتن اپلیکیشن‌های مقیاس‌پذیر با React و TypeScript، همراه با کار روی مدیریت state و ساخت کامپوننت‌های قابل استفاده مجدد بود.'
    },
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
    links: {
      github: 'https://github.com/maryam138317/project-manager',
      demo: 'https://project-managerr-omega.vercel.app/'
    },
    image: '/images/project-manager.png'
  },
  {
    title: { en: 'Drug-Target Interaction Prediction', fa: 'پیش‌بینی برهم‌کنش دارو-هدف' },
    description: {
      en: 'Trained a classification model with SVM to predict the interaction of chemical drugs on proteins using the Yamanishi dataset. Also managed data imbalance using undersampling techniques.',
      fa: 'یک مدل طبقه‌بندی مبتنی بر SVM برای پیش‌بینی برهم‌کنش داروهای شیمیایی با پروتئین‌ها، با استفاده از دیتاست Yamanishi آموزش دادم و برای مدیریت عدم توازن داده‌ها از تکنیک‌های undersampling استفاده کردم.'
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