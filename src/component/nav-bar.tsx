'use client'
import { nav_bar } from "@/utils/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  const [active, setActive] = useState(nav_bar[0]?.href);

  useEffect(() => {
    const sections = nav_bar
      .map((nav) => document.getElementById(nav.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            window.history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      {
        // shrinks the "viewport" IO checks against to a thin band
        // through the middle of the screen — a section only counts
        // as active once it crosses that middle band
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex justify-between px-8 py-4 sticky top-0 bg-ink/80 backdrop-blur z-50 shadow-olive-200 shadow-xl">
      <div></div>
      <nav className="flex items-center w-fit gap-6">
        {nav_bar.map((nav) => (
          <Link href={`#${nav.href}`} key={nav.href} className="relative py-1">
            <span className={active === nav.href ? "font-bold underline" : ""}>
              {nav.title}
            </span>
            {active === nav.href && (
              <motion.div
                layoutId="nav-underline"
                className="absolute left-0 right-0 -bottom-0.5 h-0.5"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </nav>
      <button className="py-2 px-4 rounded-[999px] cursor-pointer font-medium bg-black text-white">
        <Link href='/MyResume.pdf' download='maryam-jafartabar-cv.pdf'>
        Download CV
        </Link>
      </button>
    </div>
  );
}