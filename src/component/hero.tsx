'use client'
import { Personal_data } from "@/utils/data";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import NavBar from "./nav-bar";
import { useEffect, useState } from "react";
import { pickLocalized } from "@/lib/localized";
import LocaleSwitcher from "./LocaleSwitcher";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const fromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fromBottom: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const buttonPop: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
};

export default function Hero() {
  const locale = useLocale();
  const t = useTranslations('buttons');

  const name = pickLocalized(Personal_data.name, locale);
  const jobTitle = pickLocalized(Personal_data.jobTitle, locale);
  const description = pickLocalized(Personal_data.description, locale);

  const [modalOpen, setModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleModal = () => {
    setModal(!modalOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="h-screen w-full flex justify-between"
        style={{
          background:
            "linear-gradient(39deg,rgba(255, 255, 255, 1) 0%, rgba(230, 237, 243, 1) 46%, rgba(13, 17, 23, 1) 100%)",
        }}
      >
        <div className="flex items-center">
          <motion.div
            className="px-8 md:px-16 max-w-3xl dark:text-black"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={fromLeft}
              className="font-mono text-sm mb-3 tracking-wide"
            >
              {"// hello, world"}
            </motion.p>

            <motion.h1
              variants={fromLeft}
              className="font-display text-5xl md:text-7xl font-bold mb-2"
            >
              {name}
            </motion.h1>

            <motion.p
              variants={fromLeft}
              className="font-mono text-xl md:text-2xl mb-6"
            >
              <span>{"<"}</span>
              <span>{jobTitle.replace(/\s+/g, "")}</span>
              <span>{" />"}</span>
            </motion.p>

            <motion.p
              variants={fromBottom}
              className="font-body text-base md:text-lg leading-relaxed max-w-xl mb-8 text-balance"
            >
              {description}
            </motion.p>

            <motion.button
              variants={buttonPop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{ backgroundColor: "black", color: "white" }}
              className="font-mono px-6 py-3 font-medium rounded-[999px]"
            >
              <Link href="#contact">{t('contact')}</Link>
            </motion.button>
          </motion.div>
        </div>

        <div className="flex items-center gap-3 h-fit mt-6 mr-6 z-40 fixed top-0 right-0">
          <LocaleSwitcher scrolled={scrolled} />
          <button
          onClick={handleModal}
          aria-label="Open menu"
          className="max-sm:flex hidden items-center justify-center h-9 w-9 rounded-full transition-colors"
        >
          <GiHamburgerMenu
            size={22}
            className={scrolled ? 'fill-black dark:fill-white' : 'fill-white'}
          />
        </button>
      </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/95 text-white z-50 flex flex-col items-center justify-center gap-12"
          >
            <button
              onClick={handleModal}
              className="absolute top-6 right-6 cursor-pointer"
              aria-label="Close menu"
            >
              <IoClose size={30} fill="white" />
            </button>
            <NavBar isVertical onLinkClick={handleModal} styles="flex flex-col items-center gap-8" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}