'use client';
import { nav_bar } from "@/utils/data";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { pickLocalized } from "@/lib/localized";

export default function NavBar({
  styles,
  isVertical = false,
  onLinkClick,
}: {
  styles?: string;
  isVertical?: boolean;
  onLinkClick?: () => void;
}) {
  const locale = useLocale();
  const [active, setActive] = useState(nav_bar[0]?.href.replace('#', ''));

  const t = useTranslations('nav')

  useEffect(() => {
    const sections = nav_bar
      .map((nav) => document.getElementById(nav.href.replace('#', '')))
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
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={
        styles ??
        "w-full flex justify-between items-center px-8 py-4 sticky top-0 bg-ink/80 backdrop-blur z-30 max-sm:hidden"
      }
    >
      <div></div>

      <nav
        className={
          isVertical
            ? "flex flex-col items-center gap-8"
            : "flex items-center w-fit gap-6"
        }
      >
        {nav_bar.map((nav) => {
          const id = nav.href.replace('#', '');
          return (
            <Link
              href={nav.href}
              key={nav.href}
              onClick={onLinkClick}
              className="relative py-1"
            >
              <span
                className={`${isVertical ? "text-2xl" : "text-sm"} ${
                  active === id ? "font-bold" : ""
                }`}
              >
                {pickLocalized(nav.label, locale)}
              </span>
              {active === id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {!isVertical && (
        <Link
          href="/MyResume.pdf"
          download="maryam-jafartabar-cv.pdf"
          className="py-2 px-4 rounded-[999px] cursor-pointer font-medium bg-black text-white text-sm max-sm:hidden dark:bg-white dark:text-black"
        >
          {t('downloadCV')}
        </Link>
      )}

      {isVertical && (
        <Link
          href="/MyResume.pdf"
          download="maryam-jafartabar-cv.pdf"
          className="py-2.5 px-6 rounded-[999px] cursor-pointer font-medium bg-white text-black text-sm mt-4"
        >
          t{'downloadCV'}
        </Link>
      )}
    </div>
  );
}