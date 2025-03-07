"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Code, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const competencies = [
  {
    title: "Machine Learning & AI",
    description:
      "Developing intelligent systems that learn and adapt, pushing the boundaries of AI capabilities in NLP and computer vision.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2940&auto=format&fit=crop",
  },
  {
    title: "Full-Stack Development",
    description:
      "Crafting responsive and intuitive web applications using modern frameworks like React, Next.js, and Node.js.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2940&auto=format&fit=crop",
  },
  {
    title: "Innovation & Research",
    description:
      "Exploring cutting-edge technologies and conducting research to create solutions that shape the future of tech.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=2940&auto=format&fit=crop",
    featured: true,
  },
];

export default function Services() {
  // Scroll animation setup
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-black">My Services</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Delivering innovative, high-quality solutions tailored to your needs with a passion for technology and design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {competencies.map((competency, index) => (
            <motion.div
              key={competency.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ y: yRange }}
              className="group relative"
            >
              <Card
                className={`overflow-hidden shadow-md bg-white hover:shadow-xl transition-all duration-300 ${
                  competency.featured ? "ring-2 ring-black" : ""
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={competency.image}
                    alt={competency.title}
                    fill
                    quality={85}
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-gray-100">
                    <competency.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-black">{competency.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{competency.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
