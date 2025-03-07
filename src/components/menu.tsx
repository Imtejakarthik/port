// Replace the existing social media links div in the footer section with:
<div></div>
import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Github, Linkedin, X } from "lucide-react"
import { Button } from "@/components/ui/button"


interface MenuProps {
    isOpen: boolean
    onClose: () => void
}

export default function Menu({ isOpen, onClose }: MenuProps) {
    const menuVariants = {
        closed: {
            y: "-100%",
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
            },
        },
        open: {
            y: "0%",
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
            },
        },
    }

    return (
        <motion.div
            className="fixed inset-0 bg-black z-50"
            variants={menuVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
        >
            <div className="h-full flex flex-col">
                {/* Header */}
                <div className="p-8 flex justify-between items-center border-b border-white/10">
                    <Link href="/" className="text-white text-2xl font-bold">
                        <img src="/logo.png" alt="Logo" className="h-8" />
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link href="/contact" className="bg-white text-black px-6 py-2 rounded-full text-sm">
                            Contact me
                        </Link>
                        <button onClick={onClose} className="text-white p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Close menu">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Navigation Grid */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
                    <Link
                        href="/myworks"
                        className="flex items-center px-8 hover:bg-white/5 transition-colors border-b md:border-r border-white/10"
                        scroll={false}
                    >
                        <span className="text-5xl lg:text-7xl font-bold text-white">My Work</span>
                    </Link>
                    <Link
                        href="/aboutme"
                        className="flex items-center px-8 hover:bg-white/5 transition-colors border-b md:border-r border-white/10"
                    >
                        <span className="text-5xl lg:text-7xl font-bold text-white">About me</span>
                    </Link>
                    <Link
                        href="/process"
                        className="flex items-center px-8 hover:bg-white/5 transition-colors md:border-r border-white/10"
                    >
                        <span className="text-5xl lg:text-7xl font-bold text-white">Our Process</span>
                    </Link>
                    <Link
                        href="/legels"
                        className="flex items-center px-8 hover:bg-white/5 transition-colors md:border-r border-white/10"
                    >
                        <span className="text-5xl lg:text-7xl font-bold text-white">Legals</span>
                    </Link>
                </div>

                {/* Footer */}
                <div className="p-8 border-t border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-white text-xl font-bold mb-4">Where to find me</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-white font-bold">India</h4>
                                    <p className="text-white/60">Chennai</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Malaysia</h4>
                                    <p className="text-white/60">Kuala Lumpur</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white text-xl font-bold mb-4">Follow us</h3>
                            <div className="flex gap-4">
                                <Link href="https://www.instagram.com/tejakarthik.gubbala/" className="text-muted-foreground hover:text-pink-500">
                                    <button title="Instagram">
                                        <Instagram className="h-6 w-6" />
                                    </button>
                                </Link>
                                <Link href="https://github.com/Imtejakarthik" className="text-muted-foreground hover:text-purple-500">
                                    <button title="GitHub">
                                        <Github className="h-6 w-6" />
                                    </button>
                                </Link>
                                <Link href="https://www.linkedin.com/in/teja-karthik-b87824259/" className="text-muted-foreground hover:text-blue-500">
                                    <button title="LinkedIn">
                                        <Linkedin className="h-6 w-6" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
