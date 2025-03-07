"use client"; // Assuming this is a Next.js client component

import { motion } from "framer-motion";

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
          Hello I'm{" "}
          <span className="inline-block">
            Teja Karthik{" "}
            {/* Option 1: Emoji */}
            <span className="text-4xl md:text-5xl">👋</span>
            {/* Option 2: Online Image (uncomment to use) */}
            {/* <img
              src="https://example.com/your-image.png" // Replace with actual image URL
              alt="Teja Karthik"
              className="inline-block w-12 h-12 md:w-16 md:h-16 ml-2"
            /> */}
          </span>
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl text-gray-800 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I'm a self-taught software developer fueled by coffee, curiosity, and just the right amount of
          stubbornness to solve tricky problems. I specialize in creating apps, web applications, and digital solutions
          that are so intuitive they might as well read your mind (don't worry, they don't).
        </motion.p>
      </div>
    </main>
  );
}