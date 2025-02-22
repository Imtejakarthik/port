"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, FileText, Instagram } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const socialLinks = [
    {
        href: "https://github.com/Imtejakarthik",
        icon: Github,
        delay: 0.1,
        color: "#333",
    },
    {
        href: "https://www.linkedin.com/in/teja-karthik-b87824259/",
        icon: Linkedin,
        delay: 0.2,
        color: "#0077B5",
    },
    {
        href: "https://www.instagram.com/tejakarthik.gubbala/",
        icon: Instagram,
        delay: 0.3,
        color: "#E4405F",
    },
    {
        href: "/your-cv.pdf",
        icon: FileText,
        delay: 0.4,
        color: "#2D3748",
    },
];


export default function SocialIcons() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);
    const [mounted, setMounted] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <motion.div 
            className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6"
            style={{ opacity, scale }}
        >
            {socialLinks.map((social, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: social.delay,
                        ease: [0.215, 0.610, 0.355, 1.000],
                    }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="relative group"
                >
                    <Link
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block"
                        aria-label="social icon"
                    >
                        <motion.div
                            className="relative z-10 p-3 bg-background border-2 border-border rounded-full shadow-lg backdrop-blur-sm transition-colors duration-300"
                            whileHover={{ 
                                scale: 1.15,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                animate={{
                                    rotate: hoveredIndex === index ? 360 : 0,
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeInOut",
                                }}
                            >
                                <social.icon className="h-4 w-4 transition-colors duration-300" />
                            </motion.div>
                        </motion.div>

                    </Link>

                    <motion.div
                        className="absolute inset-0 rounded-full opacity-20 blur-sm"
                        animate={{
                            scale: hoveredIndex === index ? 1.15 : 1,
                            opacity: hoveredIndex === index ? 0.3 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                            backgroundColor: social.color,
                        }}
                    />
                </motion.div>
            ))}
        </motion.div>
    );
}
