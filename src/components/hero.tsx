"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <main className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
      <div className="max-w-4xl text-center px-8">
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-8 text-black font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hello I&apos;m <span className="inline-block">Teja Karthik</span>
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl text-gray-800 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I&apos;m a self-taught software developer fueled by coffee, curiosity, and just the right amount of
          stubbornness to solve tricky problems. I specialize in creating apps, web applications, and digital solutions
          that are so intuitive they might as well read your mind (don&apos;t worry, they don&apos;t).
        </motion.p>
      </div>
    </main>
  )
}

