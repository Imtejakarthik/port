"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"

const Loading = dynamic(() => import("@/components/loading"), { ssr: false })
import Header from "@/components/header"
import Menu from "@/components/menu"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonnials"
import Footer from "@/components/footer"
import SocialIcons from "@/components/social-icons"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const hasVisited = typeof window !== "undefined" && localStorage.getItem("hasVisited")

    if (hasVisited) {
      setIsLoading(false)
    } else {
      setTimeout(() => {
        setIsLoading(false)
        if (typeof window !== "undefined") {
          localStorage.setItem("hasVisited", "true")
        }
      }, 2000)
    }
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="min-h-screen bg-black p-4">
        <motion.div
          className="bg-white rounded-[2rem] min-h-[calc(100vh-2rem)] flex flex-col"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Header onMenuClick={() => setIsMenuOpen(true)} />
          <Hero />
          <Skills />
          <Services />
          <Projects />
          <Testimonials />
          <Footer />
          
          {/* Animate SocialIcons */}
          <AnimatePresence>
            {!isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <SocialIcons />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  )
}
