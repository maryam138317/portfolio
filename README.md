# Portfolio — Maryam Jafartabar

A personal portfolio site built to showcase my work as a Front-end Developer, featuring a code/syntax-highlighting inspired design and smooth scroll-based animations.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Yup
- **Icons:** react-icons
- **Form submission:** Formspree

## Features

- Animated hero section with staggered entrance animations
- Scroll-spy navigation bar — highlights the active section and updates the URL as you scroll
- Responsive mobile menu with overlay navigation
- Sections: About, Skills & Experience, Projects, Contact
- Contact form with client-side validation, submission states, and email delivery via Formspree
- Downloadable CV
- Scroll-triggered reveal animations for each section

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Project Structure

```
src/
├── app/                  # App Router pages & layout
├── component/            # Shared components (Hero, NavBar, Footer, sections wrapper)
│   └── section-items/    # Small reusable pieces (SkillItem, ProjectItem)
├── sections/             # Page sections (About, Skills, Projects, Contact)
├── schema/                # Yup validation schemas
└── utils/                # Static data & TypeScript interfaces
```

## Deployment

Deployed on [Vercel](https://vercel.com).

## Contact

- [GitHub](https://github.com/maryam138317)
- [LinkedIn](https://www.linkedin.com/in/maryam-jafartabar-24b249381)