'use client'
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};
const fromLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const fromTop: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProSections({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      className="w-full min-h-screen flex flex-col justify-center px-8 md:px-16 py-24 max-w-5xl mx-auto"
      id={id}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h3
        variants={fromLeft}
        className="font-display text-3xl md:text-5xl font-bold mb-10 md:mb-14"
      >
        {title}
      </motion.h3>
      <motion.main variants={fromTop} className="flex items-center">
        {children}
      </motion.main>
    </motion.section>
  );
}