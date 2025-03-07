"use client"

import Link from "next/link"
import { Instagram, Github, Linkedin } from "lucide-react"
import { Button } from "./ui/button"

const footerLinks = {
    information: [
        { label: "About", href: "/aboutme" },
        { label: "Process", href: "/process" },
        { label: "Work", href: "/myworks" },
    ],
    connect: [
        { label: "Instagram", href: "https://www.instagram.com/tejakarthik.gubbala/", icon: Instagram },
        { label: "GitHub", href: "https://github.com/Imtejakarthik", icon: Github },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/teja-karthik-b87824259/", icon: Linkedin },
    ],
    legal: [
        { label: "Terms & Conditions", href: "/legels" },
        { label: "Privacy Policy", href: "/privacypolicy" },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-white border-t border-black">
            <div className="max-w-7xl mx-auto px-16 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">Information</h3>
                        <ul className="space-y-2">
                            {footerLinks.information.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent hover:text-gray-900">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                
                    <div>
                        <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">Legal</h3>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent hover:text-gray-900">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">Got a project in mind?</h3>
                        <p className="mb-4 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">Let's chat about how we can help you bring your ideas to life.</p>
                        <Button asChild className="bg-black text-white hover:bg-gray-400 hover:text-black">
                            <Link href="/contact">Connect</Link>
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black">
                    <Link href="/" className="mb-4 md:mb-0">
                        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
                    </Link>
                    <div className="text-sm bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent space-x-1">
                        <span>Powered by</span>
                        <Link href="https://nextjs.org" className="font-medium hover:text-gray-900">
                            Next.js
                        </Link>
                        <span>and</span>
                        <Link href="https://www.sanity.io" className="font-medium hover:text-gray-900">
                            Sanity
                        </Link>
                        <span>. Styled with</span>
                        <Link href="https://tailwindcss.com" className="font-medium hover:text-gray-900">
                            Tailwind CSS
                        </Link>
                        <span>and</span>
                        <Link href="https://www.framer.com/motion" className="font-medium hover:text-gray-900">
                            Framer Motion
                        </Link>
                    </div>
                    <div className="mt-4 md:mt-0 text-sm bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">© G. Teja Karthik. 2025</div>
                </div>
            </div>
        </footer>
    )
}