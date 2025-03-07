"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import { Progress } from "./ui/progress"

const LoadingText = ({ text }: { text: string }) => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, 80)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <div className="font-mono text-2xl text-gray-300">
      {currentText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.7, ease: "easeInOut" }}
      >
        _
      </motion.span>
    </div>
  )
}

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => setFadeOut(true), 500) // Delay fade-out after reaching 100%
          return 100
        }
        return prevProgress + 2
      })
    }, 40)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden z-20"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="h-[40vh] w-[40vh] bg-gradient-to-br from-purple-800 to-blue-800 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4 space-y-8"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <Loader2 className="w-16 h-16 text-gray-300 mx-auto" />
        </motion.div>
        <div className="text-gray-300">
          <LoadingText text="Loading Portfolio..." />
        </div>
        <div className="w-64 mx-auto">
          <Progress value={progress} className="h-2 bg-gray-700" />
        </div>
        <motion.div
          className="text-sm text-gray-500"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          Progress: {progress}%
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
