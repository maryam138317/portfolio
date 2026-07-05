'use client'
import { motion } from "framer-motion"

export default function ProSections ({id,title, children}: {id: string,title: string, children: React.ReactNode}){
    return <motion.main 
    className="w-full h-screen"
     id={id}
     initial={{opacity: 0}}
     >
        <motion.h3>{title}</motion.h3>
        {children}
    </motion.main>
}