'use client'
import { Personal_data } from "@/utils/data";
import { motion, Variants } from "framer-motion";

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
  const { name, jobTitle, description } = Personal_data;

  return (
    <div className="h-screen w-full flex items-center" style={{background: 'linear-gradient(39deg,rgba(255, 255, 255, 1) 0%, rgba(230, 237, 243, 1) 46%, rgba(13, 17, 23, 1) 100%)'}}>
      <motion.div
        className="px-8 md:px-16 max-w-3xl"
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
          whileHover={{ scale: 1.05}}
          whileTap={{ scale: 0.97 }}
          style={{backgroundColor: 'black', color: 'white'}}
          className="font-mono px-6 py-3 font-medium rounded-[999px]"
        >
          Contact Me
        </motion.button>
      </motion.div>
    </div>
  );
}