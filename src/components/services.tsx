"use client"

import { motion } from "framer-motion"
import { Brain, Code, Rocket } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

const competencies = [
    {
        title: "Machine Learning & AI",
        description:
            "Developing intelligent systems that learn and adapt, pushing the boundaries of AI capabilities in NLP and computer vision.",
        icon: Brain,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    },
    {
        title: "Full-Stack Development",
        description:
            "Crafting responsive and intuitive web applications using modern frameworks like React, Next.js, and Node.js.",
        icon: Code,
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    },
    {
        title: "Innovation & Research",
        description:
            "Exploring cutting-edge technologies and conducting research to create solutions that shape the future of tech.",
        icon: Rocket,
        image: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae",
        featured: true,
    },
]

export default function Services() {
    return (
        <section className="py-16 px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {competencies.map((competency, index) => (
                        <motion.div
                            key={competency.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="group"
                        >
                            <Card
                                className={`relative overflow-hidden border-0 shadow-lg bg-white`}
                            >
                                <div className="absolute inset-0 overflow-hidden">
                                    <Image
                                        src={competency.image || "/placeholder.svg"}
                                        alt={competency.title}
                                        fill
                                        className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <CardContent className="relative p-8">
                                    <div
                                        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-gray-200`}
                                    >
                                        <competency.icon
                                            className={`w-6 h-6 text-blue-500`}
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-black">{competency.title}</h3>
                                    <p className="text-gray-700">{competency.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
