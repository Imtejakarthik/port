"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string;
  date: string;
};

const projects: Project[] = [
  {
    title: "rumi",
    description:
      "An AI-driven e-learning platform empowering learners with personalized courses, interactive AI mentors, and adaptive learning paths for skill mastery.",
    image: "/rumi.png",
    tech: "Next.js, Typescript, Tailwind CSS, Shadcn/UI, MongoDB, Firebase, Sanity",
    date: "December 2023",
  },
  {
    title: "EcoTrack",
    description: "A sustainability tracking app that helps users monitor their carbon footprint and suggests eco-friendly alternatives for daily activities.",
    image: "/eco.png",
    tech: "React Native, Redux, Node.js, Express, PostgreSQL",
    date: "November 2023",
  },
  {
    title: "SmartHome Hub",
    description: "An IoT platform for managing smart home devices with real-time monitoring, automation rules, and energy optimization features.",
    image: "/smart-home.png",
    tech: "React.js, Socket.io, Python, MongoDB, AWS IoT",
    date: "October 2023",
  },
  {
    title: "HealthSync",
    description: "A healthcare management system connecting patients with doctors, featuring telemedicine, appointment scheduling, and medical records.",
    image: "/health.png",
    tech: "Vue.js, Django, PostgreSQL, WebRTC, Docker",
    date: "September 2023",
  },
  {
    title: "CryptoVault",
    description: "A secure cryptocurrency wallet and trading platform with real-time market analysis and portfolio management tools.",
    image: "/crypto.png",
    tech: "Next.js, Web3.js, Solidity, Firebase, TailwindCSS",
    date: "August 2023",
  },
  {
    title: "CodeMentor",
    description: "An interactive coding education platform with AI-powered code reviews, peer learning, and real-time collaboration features.",
    image: "/code.png",
    tech: "React, GraphQL, Node.js, MongoDB, Azure",
    date: "July 2023",
  },
  {
    title: "TaskFlow",
    description: "A project management tool with automated workflow optimization, team collaboration, and resource allocation features.",
    image: "/task.png",
    tech: "Angular, NestJS, PostgreSQL, Redis, Docker",
    date: "June 2023",
  },
  {
    title: "FoodieFind",
    description: "A restaurant discovery app with AI-powered recommendations, real-time reservations, and social sharing features.",
    image: "/food.png",
    tech: "React Native, Firebase, Google Maps API, Node.js",
    date: "May 2023",
  },
  {
    title: "ArtVerse",
    description: "A digital art marketplace powered by blockchain, featuring NFT creation, trading, and virtual gallery experiences.",
    image: "/art.png",
    tech: "Next.js, Ethereum, IPFS, Three.js, TailwindCSS",
    date: "April 2023",
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const translateZ = useTransform(scrollYProgress, [0, 1], ["-50px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        transform: `translateZ(${translateZ})`,
        opacity: opacity,
      }}
      className="item group mb-12"
    >
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col sm:flex-row hover:bg-gray-800 transition duration-300">
        <div className="p-6 sm:w-1/2 flex flex-col">
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.split(", ").map((tech, i) => (
              <span
                key={i}
                className="bg-gray-800 px-3 py-1 text-sm rounded-full text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-500 mt-4">{project.date}</p>
        </div>
        <div className="sm:w-1/2">
          <Image
            src={project.image}
            alt={project.title}
            width={1130}
            height={635}
            quality={95}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectShowcase() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="p-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:opacity-80">
          TK.
        </Link>
        <div className="flex gap-4">
          <Button asChild variant="outline" className="bg-white text-black rounded-full">
            <Link href="/contact">Connect</Link>
          </Button>
          <Button asChild className="hover:bg-white/10 rounded-full">
            <Link href="/">
              <X className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-400">
            Powered by Next.js, Tailwind CSS, and Framer Motion. © 2025 G.Teja Karthik.
          </p>
        </div>
      </footer>
    </div>
  );
}
