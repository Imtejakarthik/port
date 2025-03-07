"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, FileText, Instagram } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useCallback } from "react"

const socialLinks = [
    {
        href: "https://github.com/Imtejakarthik",
        icon: Github,
        delay: 0.1,
        color: "#ffffff",
        hoverColor: "#6e5494",
    },
    {
        href: "https://www.linkedin.com/in/teja-karthik-b87824259/",
        icon: Linkedin,
        delay: 0.2,
        color: "#ffffff",
        hoverColor: "#0077B5",
    },
    {
        href: "https://www.instagram.com/tejakarthik.gubbala/",
        icon: Instagram,
        delay: 0.3,
        color: "#ffffff",
        hoverColor: "#E4405F",
    },
    {
        href: "/RESUME.pdf",
        icon: FileText,
        delay: 0.4,
        color: "#ffffff",
        hoverColor: "#4CAF50",
    },
]

export default function SocialIcons() {
    const { scrollYProgress } = useScroll()
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.5])
    const [mounted, setMounted] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleHoverStart = useCallback((index: number) => {
        setHoveredIndex(index)
    }, [])

    const handleHoverEnd = useCallback(() => {
        setHoveredIndex(null)
    }, [])

    if (!mounted) return null

    return (
        <motion.div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50" style={{ opacity, scale }}>
            {socialLinks.map((social, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: social.delay,
                        ease: [0.215, 0.61, 0.355, 1.0],
                    }}
                    onHoverStart={() => handleHoverStart(index)}
                    onHoverEnd={handleHoverEnd}
                    className="relative group"
                >
                    <Link
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block"
                    >
                        <motion.div
                            className="relative z-10 p-2 bg-black border border-zinc-800 rounded-full shadow-lg backdrop-blur-sm transition-colors duration-300 flex items-center justify-center"
                            whileHover={{
                                scale: 1.15,
                                transition: { duration: 0.3, ease: "easeOut" },
                            }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                boxShadow: hoveredIndex === index ? `0 0 15px 2px ${social.hoverColor}40` : "0 0 0 0 transparent",
                            }}
                        >
                            <motion.div
                                animate={{
                                    rotate: hoveredIndex === index ? 360 : 0,
                                    color: hoveredIndex === index ? social.hoverColor : social.color,
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeInOut",
                                }}
                            >
                                <social.icon className="h-4 w-4 transition-colors duration-300" />
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="absolute inset-0 rounded-full blur-md"
                            animate={{
                                scale: hoveredIndex === index ? 1.2 : 1,
                                opacity: hoveredIndex === index ? 0.5 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            style={{
                                backgroundColor: social.hoverColor,
                            }}
                        />

                        {hoveredIndex === index && (
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                initial={{ scale: 0.8, opacity: 0.8 }}
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.7, 0, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "loop",
                                }}
                                style={{
                                    border: `2px solid ${social.hoverColor}`,
                                }}
                            />
                        )}
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    )
}
