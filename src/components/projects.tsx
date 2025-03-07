// components/Projects.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Code } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const projects = [
  {
    title: "Medical Detection Hub",
    description:
      "A user-friendly web interface for detecting skin cancer and pneumonia through image uploads, leveraging advanced AI algorithms.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2940&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "E-Voting",
    description:
      "A secure election application for desktop and laptop, built with Python’s Flet library for seamless voting experiences.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2940&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Number Plate Recognition",
    description:
      "An automated system to capture, interpret, and store vehicle license plate data with real-time processing.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
    link: "#",
  },
];

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section className="py-16 px-8 bg-white">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between items-center mb-12"
      >
        <div className="text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">Discover My Work</h2>
        <p className="text-lg text-gray-600 italic max-w-xl">
          A showcase of innovative projects I’ve crafted with passion and precision.
        </p>
        </div>
        
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          style={{ y: yRange }}
          className="group"
        >
          <Card className="overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              quality={85}
              className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <CardContent className="p-6">
            <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
            <motion.a
              href={project.link}
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-sm font-semibold text-black hover:text-gray-800"
            >
              <Code className="w-4 h-4" />
              
            </motion.a>
            </CardContent>
          </Card>
        </motion.div>
        ))}
      </div>

    </div>
    </section>
  );
}