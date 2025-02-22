"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Code } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

const projects = [
    {
        title: "Medical Detection Hub",
        description:
            "This project offers a user-friendly web interface for detecting skin cancer and pneumonia through image uploads.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
        link: "#",
    },
    {
        title: "E-Voting",
        description:
            "Is is an election application designed for desktop and laptop computers. Built on the flet library in the Python.",
        image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&auto=format&fit=crop&q=60",
        link: "#",
    },
    {
        title: "Number Plate Recognition",
        description:
            "This project is designed to automatically capture, interpret, and store vehicle license plate information.",
        image: "https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&auto=format&fit=crop&q=60",
        link: "#",
    },
]

export default function Projects() {
    return (
        <section className="py-16 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">Discover My Work</h2>
                        <p className="text-xl text-gray-600 italic">Here are some of my projects that I&apos;ve worked on.</p>
                    </div>
                    <Button variant="outline" className="hidden md:flex items-center gap-2">
                        View All Projects
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300 bg-gray-100">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        fill
                                        className="object-cover filter grayscale group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-extrabold text-black mb-2">{project.title}</h3>
                                    <p className="text-gray-600 italic mb-4">{project.description}</p>
                                    <div className="flex items-center gap-2 text-sm font-extrabold text-black">
                                        <Code className="w-4 h-4" />
                                        View Project
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <Button variant="outline" className="w-full mt-8 md:hidden">
                    View All Projects
                </Button>
            </div>
        </section>
    )
}
